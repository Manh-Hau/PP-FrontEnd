import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

type Props = {
    imageSrc: string,
    title: string,
    period: string
}

const WorkBox = ({ imageSrc, title, period }: Props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div className={styles.workBox}>
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