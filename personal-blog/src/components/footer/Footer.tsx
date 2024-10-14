import React from 'react'
import styles from './app.module.css'
import { Instagram, Facebook, PhoneCall } from 'lucide-react'

function Footer() {
    return (
        <div className={styles.footer_container}>
            <h1>PHAN PHU YEN</h1>
            <p>Liên hệ tôi thông qua email của bạn</p>
            <form>
                <div className={styles.form_group}>
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">Liên hệ</button>
                </div>
            </form>
            <p className={styles.privacy_note}>Trân trọng</p>
            <div className={styles.social_icons}>
                <button><Instagram size={30} color='white' /></button>
                <button><Facebook size={30} color='white' /></button>
                <button><PhoneCall size={30} color='white' /></button>
            </div>
        </div>
    )
}

export default Footer