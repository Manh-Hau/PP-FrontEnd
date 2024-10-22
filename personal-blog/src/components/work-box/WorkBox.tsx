import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

type Props = {
    imageSrc: string,
    title: string,
    period: string
    detail: number;
}

const WorkBox = ({ imageSrc, title, period, detail }: Props) => {
    const route = useRouter()

    const handleClickDetail = () => {
        route.push(`/activities/details-${detail}`)
    };

    return (
        <div className={styles.workBox} onClick={handleClickDetail}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.period}>{period}</p>
            </div>
        </div>
    );
};

export default WorkBox;