"use client"

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
//works
import ac_1 from '../../../../assets/image/activity-1/ac-1.1.jpg'
import ac_2 from '../../../../assets/image/activity-1/ac-1.2.jpg'
import ac_3 from '../../../../assets/image/activity-1/ac-1.3.jpg'
import ac_4 from '../../../../assets/image/activity-1/ac-1.4.jpg'
import ac_5 from '../../../../assets/image/activity-1/ac-1.5.jpg'
import ac_6 from '../../../../assets/image/activity-2/ac-2.1.jpg'
import ac_7 from '../../../../assets/image/activity-2/ac-2.2.jpg'
import ac_8 from '../../../../assets/image/activity-2/ac-2.3.jpg'
import ac_9 from '../../../../assets/image/activity-2/ac-2.4.jpg'
import ac_10 from '../../../../assets/image/activity-2/ac-2.5.jpg'
import ac_11 from '../../../../assets/image/activity-2/ac-2.6.jpg'
import ac_12 from '../../../../assets/image/activity-3/ac-3.1.jpg'
import ac_13 from '../../../../assets/image/activity-3/ac-3.2.jpg'
import ac_14 from '../../../../assets/image/activity-3/ac-3.3.jpg'
import ac_15 from '../../../../assets/image/activity-3/ac-3.4.jpg'
import ac_16 from '../../../../assets/image/activity-3/ac-3.5.jpg'
import ac_17 from '../../../../assets/image/activity-4/ac-4.1.jpg'
import ac_18 from '../../../../assets/image/activity-4/ac-4.2.jpg'
import ac_19 from '../../../../assets/image/activity-4/ac-4.3.jpg'
import ac_20 from '../../../../assets/image/activity-4/ac-4.4.jpg'
import ac_21 from '../../../../assets/image/activity-4/ac-4.5.jpg'

import { ImageType } from '@/components/image-modal/ImageModal'

function ActivityDetails() {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const images: ImageType[] = [
        {
            src: ac_17.src,
            alt: 'ac_1',
        },
        {
            src: ac_18.src, alt: 'ac_2',
        },
        {
            src: ac_19.src, alt: 'ac_3',
        },
        {
            src: ac_20.src, alt: 'ac_4',
        },
        {
            src: ac_21.src, alt: 'ac_4',
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