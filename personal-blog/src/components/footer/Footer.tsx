import React from 'react'
import styles from './app.module.css'
import { Instagram, Facebook, PhoneCall } from 'lucide-react'

function Footer() {
    return (
        <div className={styles.footer_container}>
            <h2>Artist</h2>
            <h1>PHAN PHU YEN</h1>
            <p className={styles.privacy_note}>Trân trọng</p>
            <div className={styles.social_icons}>
                <button><Instagram size={30} /></button>
                <button><Facebook size={30} /></button>
                <button><PhoneCall size={30} /></button>
            </div>
        </div>
    )
}

export default Footer