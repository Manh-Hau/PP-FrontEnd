import React from 'react'
import styles from './app.module.css'
import slider from '../../app/assets/image/slider.avif'

function Backdrop() {
    return (
        <div className={styles.backdrop_container}>
            <img className={styles.backdrop_image} src={slider.src} alt="slider_image" />
            <div className={styles.backdrop_item}>
                <h2>Artist,</h2>
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