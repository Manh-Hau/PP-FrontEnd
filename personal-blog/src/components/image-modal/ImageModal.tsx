"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import styles from './app.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/provider/language-provider';

export interface Image {
    id: number;
    src: string;
    alt: string;
    title: string;
    material: string;
    price: string;
    description: string;
    size: string;
    timestamp: string;
}


interface ImageModalProps {
    image: Image;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, onPrevious, onNext }) => {
    const router = useRouter()
    const { translations } = useLanguage()

    const handleNavigation = (path: string) => {
        router.push(path)
    }
    return (
        <div className={styles.lightbox_overlay} onClick={onClose}>
            <div className={styles.lightbox_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.lightbox_close} onClick={onClose}>&times;</button>

                <div className={styles.lightbox_image_container}>
                    <img src={image.src} alt={image.alt} className={styles.lightbox_image} />
                    <button className={`${styles.arrow} ${styles.arrow_left}`} onClick={onPrevious}>
                        <ChevronLeft size={24} />
                    </button>
                    <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={onNext}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.lightbox_details}>
                    <h2>{image.title}</h2>
                    <p><strong>{translations.image_modal.material}:</strong> {image.material}</p>
                    <p><strong>{translations.image_modal.date}:</strong> {image.timestamp}</p>
                    <p><strong>{translations.image_modal.size}:</strong> {image.size}</p>
                    <p><strong>{translations.image_modal.price}:</strong> {image.price}</p>
                    <p>{image.description}</p>
                    <button className={styles.contact_button} onClick={() => handleNavigation('/contact')}>
                        {translations.image_modal.contact}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageModal