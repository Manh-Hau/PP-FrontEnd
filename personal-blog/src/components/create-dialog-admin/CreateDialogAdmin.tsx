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
import toast from 'react-hot-toast'
import styles from './app.module.css'
import { useCreateCollectionItemMutation } from '@/hooks/useCreateCollectionItem'
import { useLanguage } from '@/provider/language-provider'

type Props = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function CreateDialogAdmin({ isOpen, setIsOpen }: Props) {
    const [imgFile, setImgFile] = useState<File>();
    const { translations } = useLanguage()

    const CreateCollectionItemSchema = z.object({
        name: z.string().min(1, translations.create_dialog_admin.validate_name),
        material_en: z.string(),
        material_vn: z.string(),
        date: z.string(),
        price_en: z.string(),
        price_vn: z.string(),
        size: z.string(),
        file: z.string(),
    });

    type CreateCollectionItemsForm = z.infer<typeof CreateCollectionItemSchema>;

    const { mutate: createCollectionItem, isPending } = useCreateCollectionItemMutation()

    const { handleSubmit, register, formState, setValue, reset } =
        useForm<CreateCollectionItemsForm>({
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
            resolver: zodResolver(CreateCollectionItemSchema),
        });

    const onSubmit = (data: CreateCollectionItemsForm) => {
        let formData = new FormData();

        const formatMaterial = { vn: data.material_vn, en: data.material_en }
        const formatPrice = { vn: data.price_vn, en: data.price_en }

        formData.append("name", data.name);
        formData.append("material", JSON.stringify(formatMaterial));
        formData.append("date", data.date);
        formData.append("price", JSON.stringify(formatPrice));
        formData.append("size", data.size);
        formData.append("file", imgFile || "");

        createCollectionItem(formData, {
            onSuccess: () => {
                toast.success(translations.create_dialog_admin.add_success);
                setIsOpen(false);
                reset()
            },
            onError: (error: any) => {
                toast.error(error);
            },
        });
    };

    const handleTakeFileImg = (file: File) => {
        setImgFile(file);
    };

    const onClickCancelEditItems = () => {
        setIsOpen(false)
        reset()
    }


    return (
        <div>
            <Dialog
                open={isOpen}
                title={translations.create_dialog_admin.title}
                setOpen={setIsOpen}
                actionButton={
                    <div className={styles.actionButton}>
                        <Button name={translations.common.cancel} onClick={onClickCancelEditItems}></Button>
                        <Button
                            name={translations.common.create}
                            onClick={handleSubmit(onSubmit)}
                            isLoading={isPending}
                        ></Button>
                    </div>
                }
            >
                <div >
                    <form className={styles.formContainer}>
                        <Input
                            label={translations.create_dialog_admin.name}
                            name="name"
                            type="text"
                            register={register}
                            error={formState.errors.name?.message}
                        />
                        <div className={styles.formBody}>
                            <Input
                                label={translations.create_dialog_admin.material_vn}
                                name="material_vn"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.create_dialog_admin.material_en}
                                name="material_en"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className={styles.formBody}>
                            <Input
                                label={translations.create_dialog_admin.date}
                                name="date"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.create_dialog_admin.size}
                                name="size"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className={styles.formBody}>
                            <Input
                                label={translations.create_dialog_admin.price_vn}
                                name="price_vn"
                                type="text"
                                register={register}
                            />
                            <Input
                                label={translations.create_dialog_admin.price_en}
                                name="price_en"
                                type="text"
                                register={register}
                            />
                        </div>
                        <ImagePicker
                            handleTakeFileImg={handleTakeFileImg}
                        />
                    </form>
                </div>
            </Dialog>
        </div>
    )
}

export default CreateDialogAdmin