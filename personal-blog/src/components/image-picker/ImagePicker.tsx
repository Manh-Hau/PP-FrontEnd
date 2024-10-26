import React, { useEffect, useRef, useState } from "react";
import { ArrowUpToLine, XCircle } from "lucide-react";
import styles from "./page.module.css";
import { useLanguage } from "@/provider/language-provider";

type Props = {
    defaultImage?: string;
    handleTakeFileImg: (file: File) => void;
    onImageChange?: (imageUrl: string | null) => void;
};

const ImagePicker = ({
    defaultImage,
    handleTakeFileImg,
    onImageChange,
}: Props) => {
    const { translations } = useLanguage()
    const pickerRef = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(
        defaultImage || ""
    );

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            handleTakeFileImg(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const _handlePickImage = () => {
        if (pickerRef.current) {
            pickerRef.current.click();
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        onImageChange?.(selectedImage);
    }, [selectedImage, onImageChange]);

    return (
        <div className={styles.container}>
            <label htmlFor="image-input" className={styles.label}>
                {translations.image_picker.choose_image}:
            </label>
            <button
                type="button"
                className={styles.button}
                onClick={_handlePickImage}
            >
                <ArrowUpToLine className={styles.icon} /> {translations.image_picker.upload_image}
            </button>
            <input
                ref={pickerRef}
                type="file"
                id="image-input"
                accept="image/*"
                hidden={true}
                onChange={handleImageChange}
            />
            {selectedImage && (
                <div className={styles.imageContainer}>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className={styles.image}
                    />
                    <XCircle
                        className={styles.removeIcon}
                        onClick={handleRemoveImage}
                    />
                </div>
            )}
        </div>
    );
};

export default ImagePicker;