"use client"

import React from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import Button from '../button/Button'
import { Dialog } from '../dialog'
import { ImagePicker } from '../image-picker'
import { Input } from '../input'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from 'react'
import { useUpdateCollectionItemMutation } from '@/hooks/useUpdateCollectionItem'
import toast from 'react-hot-toast'
import styles from './app.module.css'
import { Image } from '../image-modal/ImageModal'
import { useEffect } from 'react'
import { useLanguage } from '@/provider/language-provider'

type Props = {
    data?: Image,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function EditDialogAdmin({ isOpen, setIsOpen, data }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imgFile, setImgFile] = useState<File>();
    const { translations } = useLanguage()

    const { mutate: updateCollectionItem, isPending } = useUpdateCollectionItemMutation()

    const UpdateCollectionItemSchema = z.object({
        name: z.string().min(1, translations.edit_dialog_admin.validate_name),
        material_en: z.string(),
        material_vn: z.string(),
        date: z.string(),
        price_en: z.string(),
        price_vn: z.string(),
        size: z.string(),
        file: z.string(),
    });

    type UpdateCollectionItemsForm = z.infer<typeof UpdateCollectionItemSchema>;

    const { handleSubmit, register, formState, setValue, reset } =
        useForm<UpdateCollectionItemsForm>({
            defaultValues: {
                file: "",
                name: "",
                material_en: "",
                material_vn: "",
                date: "",
                price_en: "",
                price_vn: "",
                size: "",
            },
            resolver: zodResolver(UpdateCollectionItemSchema),
        });

    const onSubmit = (data: UpdateCollectionItemsForm) => {
        let formData = new FormData();

        const formatMaterial = { vn: data.material_vn, en: data.material_en }
        const formatPrice = { vn: data.price_vn, en: data.price_en }

        formData.append("name", data.name);
        formData.append("material", JSON.stringify(formatMaterial));
        formData.append("date", data.date);
        formData.append("price", JSON.stringify(formatPrice));
        formData.append("size", data.size);
        if (imgFile) {
            formData.append("file", imgFile);
        }
        if (selectedImage !== null && !imgFile) {
            formData.append("file", data.file || "");
        }
        if (selectedImage === null && !imgFile) {
            formData.append("file", "12");
        }

        updateCollectionItem(formData, {
            onSuccess: () => {
                toast.success(translations.edit_dialog_admin.validate_name);
                setIsOpen(false)
                reset()
            },
            onError: (error: any) => {
                toast.error(error);
            },
        });
    };

    const handleImageChange = (imageUrl: string | null) => {
        setSelectedImage(imageUrl);
    };

    const handleTakeFileImg = (file: File) => {
        setImgFile(file);
    };

    const onClickCancelEditItems = () => {
        setIsOpen(false)
        reset()
    }

    useEffect(() => {
        const formatJSON = (data: string) => data ? JSON.parse(data) : undefined
        setValue('name', data?.title ?? '')
        setValue('material_vn', formatJSON(data?.material ?? '')?.vn)
        setValue('material_en', formatJSON(data?.material ?? '')?.en)
        setValue('date', data?.timestamp ?? '')
        setValue('size', data?.size ?? '')
        setValue('price_vn', formatJSON(data?.price ?? '')?.vn)
        setValue('price_en', formatJSON(data?.price ?? '')?.en)
        setValue('file', data?.src ?? '')
    }, [data])


    return (
        <div>
            <Dialog
                open={isOpen}
                title={translations.edit_dialog_admin.title}
                setOpen={setIsOpen}
                actionButton={
                    <div className={styles.actionButton}>
                        <Button name={translations.common.cancel} onClick={onClickCancelEditItems}></Button>
                        <Button
                            name={translations.common.update}
                            onClick={handleSubmit(onSubmit)}
                            isLoading={isPending}
                        ></Button>
                    </div>
                }
            >
                <div >
                    <form className={styles.formContainer}>
                        <Input
                            label={translations.edit_dialog_admin.name}
                            name="name"
                            type="text"
                            register={register}
                            error={formState.errors.name?.message}
                        />
                        <div className={styles.formBody}>
                            <Input
                                label={translations.edit_dialog_admin.material_vn}
                                name="material_vn"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.edit_dialog_admin.material_en}
                                name="material_en"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className={styles.formBody}>
                            <Input
                                label={translations.edit_dialog_admin.date}
                                name="date"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.edit_dialog_admin.size}
                                name="size"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className={styles.formBody}>
                            <Input
                                label={translations.edit_dialog_admin.price_vn}
                                name="price_vn"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.edit_dialog_admin.price_en}
                                name="price_en"
                                type="text"
                                register={register}
                            />
                        </div>
                        <ImagePicker
                            onImageChange={handleImageChange}
                            defaultImage={data?.src}
                            handleTakeFileImg={handleTakeFileImg}
                        />
                    </form>
                </div>
            </Dialog>
        </div>
    )
}

export default EditDialogAdmin