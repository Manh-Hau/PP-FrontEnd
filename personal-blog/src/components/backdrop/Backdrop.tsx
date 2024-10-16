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
                <h1 className={styles.backdrop_name}>
                    <div>
                        <span className={styles.letter}>P</span>
                        <span className={styles.letter}>h</span>
                        <span className={styles.letter}>a</span>
                        <span className={styles.letter}>n</span>
                    </div>

                    <span className={styles.letter}> </span>
                    <div>
                        <span className={styles.letter}>P</span>
                        <span className={styles.letter}>h</span>
                        <span className={styles.letter}>u</span>
                    </div>

                    <span className={styles.letter}> </span>
                    <div className={styles.last_letter}>
                        <span className={styles.letter}>Y</span>
                        <span className={styles.letter}>e</span>
                        <span className={styles.letter}>n</span>
                    </div>

                </h1>
            </div>
        </div>
    )
}

export default Backdrop