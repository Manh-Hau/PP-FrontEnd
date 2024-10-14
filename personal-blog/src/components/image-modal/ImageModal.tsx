"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import styles from './app.module.css'

export type ImageType = {
    src: string;
    alt: string;
    title?: string;
    material?: string;
    price?: string;
    description?: string;
    size?: string;
};

interface ImageModalProps {
    image: ImageType;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
    const router = useRouter()

    const handleNavigation = (path: string) => {
        router.push(path)
    }
    return (
        <div className={styles.lightbox_overlay} onClick={onClose}>
            <div className={styles.lightbox_content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.lightbox_image_container}>
                    <img src={image.src} alt={image.alt} className={styles.lightbox_image} />
                </div>
                <div className={styles.lightbox_details}>
                    <h2>{image.title}</h2>
                    <p><strong>Chất liệu :</strong> {image.material}</p>
                    <p><strong>Kích thước :</strong> {image.size}</p>
                    <p><strong>Giá:</strong> {image.price}</p>
                    <p>{image.description}</p>
                    <button onClick={() => handleNavigation('/contact')}>Liên hệ mua tranh</button>
                </div>
                <button className={styles.lightbox_close} onClick={onClose}>&times;</button>
            </div>
        </div>
    )
}

export default ImageModal