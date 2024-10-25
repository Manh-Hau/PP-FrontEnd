"use client"

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
//works
import ac_17 from '../../../../assets/image/activity-4/ac-4.1.jpg'
import ac_18 from '../../../../assets/image/activity-4/ac-4.2.jpg'
import ac_19 from '../../../../assets/image/activity-4/ac-4.3.jpg'
import ac_20 from '../../../../assets/image/activity-4/ac-4.4.jpg'
import ac_21 from '../../../../assets/image/activity-4/ac-4.5.jpg'

import { Image as ImageType } from '@/components/image-modal/ImageModal'

function ActivityDetails() {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const images: ImageType[] = [
        {
            id: 1,
            src: ac_17.src,
            alt: 'ac_1',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 2,
            src: ac_18.src,
            alt: 'ac_2',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 3,
            src: ac_19.src,
            alt: 'ac_3',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 4,
            src: ac_20.src,
            alt: 'ac_4',
            title: '',
            material: '',
            price: '',
            description: '',
            size: '',
            timestamp: '',
        },
        {
            id: 5,
            src: ac_21.src,
            alt: 'ac_4',
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