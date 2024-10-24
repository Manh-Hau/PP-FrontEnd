import React from 'react'
import styles from './app.module.css'
import { Mail, Facebook, PhoneCall } from 'lucide-react'

function Footer() {
    const phoneNumber = "0968191889"
    const facebookUrl = "https://www.facebook.com/thao.phan.92317121"
    const email = "phanphuyenartist@gmail.com"

    return (
        <div className={styles.footer_container}>
            <h2>Artist</h2>
            <h1>PHAN PHU YEN</h1>
            <p className={styles.privacy_note}>Trân trọng</p>
            <div className={styles.social_icons}>
                <a
                    href={`mailto:${email}`}
                    className={styles.social_link}
                >
                    <button>
                        <Mail size={30} />
                    </button>
                </a>
                <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social_link}
                >
                    <button>
                        <Facebook size={30} />
                    </button>
                </a>
                <a
                    href={`tel:${phoneNumber}`}
                    className={styles.social_link}
                >
                    <button>
                        <PhoneCall size={30} />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Footer