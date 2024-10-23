"use client"

import React, { useState } from 'react';
import { LogOutIcon } from 'lucide-react'
import styles from './page.module.css';
import { Table } from '@/components/table';
import { Dialog } from '@/components/dialog';
import Button from '@/components/button/Button';
import { Input } from '@/components/input';
import { ImagePicker } from '@/components/image-picker';
import { useGetCollectionQuery } from '@/hooks/useGetCollection';
import { ImageType } from '@/components/image-modal/ImageModal';

interface Image {
    id: number;
    name: string;
    material: string;
    size: string;
    price: number;
    url: string;
}

const AdminPage: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [images, setImages] = useState<Image[]>([]);
    const [newImage, setNewImage] = useState<Partial<Image>>({});
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imgFile, setImgFile] = useState<File>();

    const { data: response, isLoading } = useGetCollectionQuery()
    const listCollection = response?.data.data as ImageType[] || []

    console.log('listCollection', listCollection)
    const handleAddImage = () => {
        if (newImage.name && newImage.url) {
            setImages([...images, { ...newImage, id: Date.now() } as Image]);
            setNewImage({});
            setIsDialogOpen(false);
        }
    };

    const handleLogout = () => {

    }

    const headers = ['Name', 'Age', 'Country', 'Action'];
    const data = [
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
    ];

    const handleEdit = (index: number) => {
        console.log('Edit row:', index);
        // Xử lý logic edit tại đây
    };

    const handleDelete = (index: number) => {
        console.log('Delete row:', index);
        // Xử lý logic delete tại đây
    };

    const handleImageChange = (imageUrl: string | null) => {
        setSelectedImage(imageUrl);
    };

    const handleTakeFileImg = (file: File) => {
        setImgFile(file);
    };

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
                <Table
                    headers={headers}
                    data={data}
                    itemsPerPage={5}
                    filterColumn={0}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
            {/* <Dialog
                open={isEdit}
                title="Update Items"
                setOpen={setIsEdit}
                actionButton={
                    <div className="flex items-center gap-2 pt-4">
                        <Button name="Cancel" onClick={onClickCancelCustomItems}></Button>
                        <Button
                            name="Update"
                            onClick={handleSubmit(onSubmit)}
                            isLoading={isPending}
                        ></Button>
                    </div>
                }
            >
                <div className="grid gap-3">
                    <form>
                        <Input
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Please input name!"
                            register={register}
                            error={formState.errors.name?.message}
                        />
                        <div className="flex w-full gap-2">
                            <Input
                                label="Value"
                                name="value"
                                type="text"
                                placeholder="Please input value!"
                                register={register}
                                error={formState.errors.value?.message}
                            />
                            <Input
                                label="Weight"
                                name="weight"
                                type="number"
                                register={register}
                            />
                        </div>
                        <ImagePicker
                            onImageChange={handleImageChange}
                            defaultImage={selectedImage?.img}
                            handleTakeFileImg={handleTakeFileImg}
                        />
                    </form>
                </div>
            </Dialog> */}
        </div>
    );
};

export default AdminPage;