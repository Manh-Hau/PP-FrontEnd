"use client"

import React from 'react'
import styles from './app.module.css'
//works
import work_1 from '../../assets/image/collection_1.jpg'
import work_2 from '../../assets/image/collection_2.jpg'
import work_3 from '../../assets/image/work_1.jpg'
import work_4 from '../../assets/image/work_2.jpg'
import work_5 from '../../assets/image/work_3.jpg'
import work_6 from '../../assets/image/work_4.jpg'
import work_7 from '../../assets/image/work_5.jpg'
import work_8 from '../../assets/image/work_6.jpg'
import work_9 from '../../assets/image/work_7.jpg'
import work_10 from '../../assets/image/work_8.jpg'
import work_11 from '../../assets/image/work_9.jpg'
import work_12 from '../../assets/image/work_10.jpg'
import work_13 from '../../assets/image/work_11.jpg'
import work_14 from '../../assets/image/work_12.jpg'
import work_15 from '../../assets/image/work_13.jpg'
import { useState } from 'react'
import { ImageModal } from '../image-modal'
import { ImageType } from '../image-modal/ImageModal'
import Image from 'next/image'

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
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_2.src, alt: 'work_2',
            title: 'Thuỵ Sĩ Yên Bình',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_3.src, alt: 'work_3',
            title: '...',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_4.src, alt: 'work_4',
            title: 'Biển vàng',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1m x 1m'
        },
        {
            src: work_5.src, alt: 'work_5',
            title: 'Bình minh trên gành đá dĩa',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_6.src, alt: 'work_6',
            title: 'Cát vàng biển xanh',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_7.src, alt: 'work_7',
            title: 'Gành đèn',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1.5m x 1m'
        },
        {
            src: work_8.src, alt: 'work_8',
            title: '...',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_9.src, alt: 'work_9',
            title: 'Liên hoa 1',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '160cm x 100cm'
        },
        {
            src: work_10.src, alt: 'work_10',
            title: 'Liên hoa 2',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1.2m x 1.2m'
        },
        {
            src: work_11.src, alt: 'work_11',
            title: 'Mũi Đại Lãnh',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1.2m x 1.2m'
        },
        {
            src: work_12.src, alt: 'work_12',
            title: 'Ngư dân và cá ngừ',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1.6m x 1m'
        },
        {
            src: work_13.src, alt: 'work_13',
            title: 'Ngựa Thì Thùng',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1.5m x 1m'
        },
        {
            src: work_14.src, alt: 'work_14',
            title: 'Tháp Nghinh Phong',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '1m x 1m'
        },
        {
            src: work_15.src, alt: 'work_15',
            title: 'Vịng Xuân Đài',
            material: 'Sơn dầu',
            price: 'x,000,000 VNĐ',
            size: '2.5m x 1m'
        },
    ];
    return (
        <div className={styles.collection_container}>
            <h1 className={styles.title}>Đằng sau mỗi tác phẩm của tôi là một câu chuyện. <br />Hãy cùng thưởng thức chúng!</h1>
            <div className={styles.collection_works}>
                {images.map((image, index) => (
                    <div key={index} className={`${styles.collection_mansory_item}`} onClick={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} />
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