"use client"

import React, { useState } from 'react';
import { LogOutIcon } from 'lucide-react'
import styles from './page.module.css';
import { GridTable } from '@/components/table';
import { useGetCollectionByAdminQuery } from '@/hooks/useGetCollectionByAdmin';
import { Image } from '@/components/image-modal/ImageModal';
import { useRouter } from 'next/navigation';
import { EditDialogAdmin } from '@/components/edit-dialog-admin';
import Button from '@/components/button/Button';
import { Dialog } from '@/components/dialog';
import { CreateDialogAdmin } from '@/components/create-dialog-admin';
import { useDeleteCollectionItemMutation } from '@/hooks/useDeleteCollectionItem';
import toast from 'react-hot-toast'
import { useLanguage } from '@/provider/language-provider';

const AdminPage: React.FC = () => {
    const router = useRouter()
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState<boolean>(false);
    const [isDeleteImage, setIsDeleteImage] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image>()
    const { translations } = useLanguage()

    const { data: response, isLoading } = useGetCollectionByAdminQuery()
    const { mutate: deleteImage, isPending } = useDeleteCollectionItemMutation()

    const listCollection = response?.data.data as Image[] || []

    const dataTable: Image[] = listCollection.map((item: any) => ({
        id: item.id,
        src: item.url,
        alt: item.name,
        title: item.name,
        material: item.material,
        description: item.description,
        price: item.price,
        size: item.size,
        timestamp: item.timestamp
    }));

    const handleLogout = () => {
        router.push('/')
    }

    const headers = [translations.admin.headers.image, translations.admin.headers.name, translations.admin.headers.material, translations.admin.headers.size, translations.admin.headers.price, translations.admin.headers.date, translations.admin.headers.action];

    const handleEdit = (item: Image) => {
        setSelectedImage(item)
        setIsEditDialogOpen(true)
    };

    const handleDelete = (image: Image) => {
        setIsDeleteImage(true)
        setSelectedImage(image)
    };

    const handleCreateNewImage = () => {
        setIsCreateDialogOpen(true)
    }

    const onCancelDelete = () => {
        setIsDeleteImage(false)
    }

    const onConfirmDeletImage = () => {
        deleteImage(selectedImage?.id.toString() || '', {
            onSuccess: () => {
                toast.success(translations.admin.headers.action)
                setIsDeleteImage(false)
            },
            onError: (error: any) => {
                toast.error(error)
            }

        })
    }

    return (
        <div className={styles.adminPage}>
            <header className={styles.header}>
                <h1>Admin Dashboard</h1>
                <div className={styles.userInfo}>
                    <span>Welcome, Admin</span>
                    <button onClick={handleLogout} className={styles.logout_button}><LogOutIcon size={24} /></button>
                </div>
            </header>
            <div className={styles.body}>
                <GridTable
                    headers={headers}
                    data={dataTable}
                    itemsPerPage={5}
                    filterColumn="title"
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    loading={isLoading}
                >
                    <Button name={translations.admin.headers.button_create_new} className={styles.createButton} onClick={handleCreateNewImage} />
                </GridTable>
            </div>
            <CreateDialogAdmin isOpen={isCreateDialogOpen} setIsOpen={setIsCreateDialogOpen} />
            <EditDialogAdmin isOpen={isEditDialogOpen} setIsOpen={setIsEditDialogOpen} data={selectedImage} />
            <Dialog
                open={isDeleteImage}
                title={translations.admin.headers.create_new_image(selectedImage?.title || '')}
                setOpen={setIsDeleteImage}
                actionButton={
                    <div style={{ display: "flex", gap: 8 }}>
                        <Button
                            name={translations.common.cancel}
                            onClick={onCancelDelete}
                        ></Button>
                        <Button
                            name={translations.common.delete}
                            onClick={onConfirmDeletImage}
                            isLoading={isPending}
                        ></Button>
                    </div>
                }
            />
        </div>
    );
};

export default AdminPage;