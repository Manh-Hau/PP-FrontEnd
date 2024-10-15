"use client"
import React from 'react'
import styles from './app.module.css'
import slider from '../../assets/image/work_4.jpg'
import Image from 'next/image'

function Backdrop() {
    return (
        <div className={styles.backdrop_container}>
            <Image width={1000}
                height={700}
                className={styles.backdrop_image}
                src={slider.src}
                alt="slider_image"
                priority />
            <div className={styles.backdrop_item}>
                <h2>Artist</h2>
                <h1>
                    <span className={styles.letter}>P</span>
                    <span className={styles.letter}>h</span>
                    <span className={styles.letter}>a</span>
                    <span className={styles.letter}>n</span>
                    <span className={styles.letter}> </span>
                    <span className={styles.letter}>P</span>
                    <span className={styles.letter}>h</span>
                    <span className={styles.letter}>u</span>
                    <span className={styles.letter}> </span>
                    <span className={styles.letter}>Y</span>
                    <span className={styles.letter}>e</span>
                    <span className={styles.letter}>n</span>
                </h1>
            </div>
        </div>
    )
}

export default Backdrop