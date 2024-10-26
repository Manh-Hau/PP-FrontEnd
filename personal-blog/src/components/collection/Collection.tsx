"use client"

import React, { useEffect, useRef } from 'react'
import styles from './app.module.css'
import { useState } from 'react'
import { ImageModal } from '../image-modal'
import { Image as ImageType } from '../image-modal/ImageModal'
import { useGetCollectionQuery } from '@/hooks/useGetCollection'
import { useLanguage } from '@/provider/language-provider'

function Collection() {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const {language} = useLanguage()

    const { data: response, isLoading } = useGetCollectionQuery(language)
    const listCollection = response?.data.data as ImageType[] || []

    const images: ImageType[] = listCollection.map((item: any) => ({
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

    const openModal = (image: ImageType) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        }, observerOptions);

        imagesRef.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => {
            imagesRef.current.forEach(img => {
                if (img) observer.unobserve(img);
            });
        };
    }, [images]);

    const findImageIndex = (image: ImageType) => images.findIndex((img) => img.src === image.src);

    const showPreviousImage = () => {
        if (selectedImage) {
            const currentIndex = findImageIndex(selectedImage);
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setSelectedImage(images[prevIndex]);
        }
    };

    const showNextImage = () => {
        if (selectedImage) {
            const currentIndex = findImageIndex(selectedImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setSelectedImage(images[nextIndex]);
        }
    };

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.collection_container}>
            <h1 className={styles.title}>You use a glass mirror to see your face; <br /> you use works of art to see your soul <br /><span>"George Bernard Shaw"</span> </h1>
            <div className={styles.collection_works}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.collection_mansory_item} ${styles.fade_in}`}
                        onClick={() => openModal(image)}
                        ref={(el) => { imagesRef.current[index] = el }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={closeModal}
                    onPrevious={showPreviousImage}
                    onNext={showNextImage}
                />
            )}
        </div>
    )
}

export default Collection