"use client"

import React from 'react'
import styles from './app.module.css'
//works
import work_1 from '../../app/assets/image/collection_1.jpg'
import work_2 from '../../app/assets/image/collection_2.jpg'
import work_3 from '../../app/assets/image/work_1.jpg'
import work_4 from '../../app/assets/image/work_2.jpg'
import work_5 from '../../app/assets/image/work_3.jpg'
import work_6 from '../../app/assets/image/work_4.jpg'
import work_7 from '../../app/assets/image/work_5.jpg'
import work_8 from '../../app/assets/image/work_6.jpg'
import work_9 from '../../app/assets/image/work_7.jpg'
import work_10 from '../../app/assets/image/work_8.jpg'
import work_11 from '../../app/assets/image/work_9.jpg'
import work_12 from '../../app/assets/image/work_10.jpg'
import work_13 from '../../app/assets/image/work_11.jpg'
import work_14 from '../../app/assets/image/work_12.jpg'
import work_15 from '../../app/assets/image/work_13.jpg'
import { useState } from 'react'
import { ImageModal } from '../image-modal'
import { ImageType } from '../image-modal/ImageModal'

function Collection() {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    const openModal = (image: ImageType) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const images: ImageType[] = [
        {
            src: work_1.src,
            alt: 'work_1',
            title: 'Chàng trai Rumania',
            material: 'Sơn dầu',
            price: '5,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        { src: work_2.src, alt: 'work_2' },
        { src: work_3.src, alt: 'work_3' },
        { src: work_4.src, alt: 'work_4' },
        { src: work_5.src, alt: 'work_5' },
        { src: work_6.src, alt: 'work_6' },
        { src: work_7.src, alt: 'work_7' },
        { src: work_8.src, alt: 'work_8' },
        { src: work_9.src, alt: 'work_9' },
        { src: work_10.src, alt: 'work_10' },
        { src: work_11.src, alt: 'work_11' },
        { src: work_12.src, alt: 'work_12' },
        { src: work_13.src, alt: 'work_13' },
        { src: work_14.src, alt: 'work_14' },
        { src: work_15.src, alt: 'work_15' },
    ];
    return (
        <div className={styles.collection_container}>
            <h1 className={styles.title}>Đằng sau mỗi tác phẩm của tôi là một câu chuyện. <br />Hãy cùng thưởng thức chúng!</h1>
            <div className={styles.collection_works}>
                {images.map((image, index) => (
                    <div key={index} className={`${styles.collection_mansory_item}`} onClick={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default Collection