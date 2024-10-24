"use client"

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
//works
import work_3 from '../../../../assets/image/work_1.jpg'
import work_4 from '../../../../assets/image/work_2.jpg'
import work_5 from '../../../../assets/image/work_3.jpg'
import work_6 from '../../../../assets/image/work_4.jpg'
import work_7 from '../../../../assets/image/work_5.jpg'
import work_8 from '../../../../assets/image/work_6.jpg'
import work_9 from '../../../../assets/image/work_7.jpg'
import work_10 from '../../../../assets/image/work_8.jpg'
import work_11 from '../../../../assets/image/work_9.jpg'
import work_12 from '../../../../assets/image/work_10.jpg'
import work_13 from '../../../../assets/image/work_11.jpg'
import work_14 from '../../../../assets/image/work_12.jpg'
import work_15 from '../../../../assets/image/work_13.jpg'

import { ImageType } from '@/components/image-modal/ImageModal'

function ActivityDetails() {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const images: ImageType[] = [
        {
            src: work_5.src,
            alt: 'ac_1',
        },
        {
            src: work_6.src, alt: 'ac_2',
        },
        {
            src: work_3.src, alt: 'ac_3',
        },
        {
            src: work_4.src, alt: 'ac_4',
        },
        {
            src: work_7.src, alt: 'ac_2',
        },
        {
            src: work_8.src, alt: 'ac_3',
        },
        {
            src: work_9.src, alt: 'ac_4',
        },
        {
            src: work_10.src, alt: 'ac_2',
        },
        {
            src: work_11.src, alt: 'ac_3',
        },
        {
            src: work_12.src, alt: 'ac_4',
        },
        {
            src: work_13.src, alt: 'ac_2',
        },
        {
            src: work_14.src, alt: 'ac_3',
        },
        {
            src: work_15.src, alt: 'ac_4',
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