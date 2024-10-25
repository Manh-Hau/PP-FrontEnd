"use client"

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
//works
import ac_5 from '../../../../assets/image/activity-1/ac-1.5.jpg'
import ac_6 from '../../../../assets/image/activity-2/ac-2.1.jpg'
import ac_7 from '../../../../assets/image/activity-2/ac-2.2.jpg'
import ac_8 from '../../../../assets/image/activity-2/ac-2.3.jpg'
import ac_9 from '../../../../assets/image/activity-2/ac-2.4.jpg'
import ac_10 from '../../../../assets/image/activity-2/ac-2.5.jpg'
import ac_11 from '../../../../assets/image/activity-2/ac-2.6.jpg'

import { Image as ImageType } from '@/components/image-modal/ImageModal'

function ActivityDetails() {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const images: ImageType[] = [
        {
            id: 1,
            src: ac_5.src,
            alt: 'ac_5',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 2,
            src: ac_6.src,
            alt: 'ac_6',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 3,
            src: ac_7.src,
            alt: 'ac_7',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 4,
            src: ac_8.src,
            alt: 'ac_8',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 5,
            src: ac_9.src,
            alt: 'ac_9',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 6,
            src: ac_10.src,
            alt: 'ac_10',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 7,
            src: ac_11.src,
            alt: 'ac_11',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        }
    ];
    

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
    }, []);

    return (
        <div className={styles.collection_container}>
            <div className={styles.collection_works}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.collection_mansory_item} ${styles.fade_in}`}
                        ref={(el) => { imagesRef.current[index] = el }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityDetails