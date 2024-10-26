import React, { useState, useEffect } from 'react';
import { Loader } from '../loader';
import styles from './app.module.css';

interface ImageLoaderProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
    src,
    alt,
    className,
    placeholder = ''
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(placeholder);

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setCurrentSrc(src);
            setIsLoading(false);
        };

        img.onerror = () => {
            setError(true);
            setIsLoading(false);
        };
    }, [src]);

    return (
        <div className={styles.imageContainer}>
            {isLoading && <Loader className={styles.imageLoader} />}
            <img
                src={currentSrc}
                alt={alt}
                className={`${className} ${styles.image} ${isLoading ? styles.loading : ''}`}
                loading="lazy"
            />
        </div>
    );
};

export default ImageLoader