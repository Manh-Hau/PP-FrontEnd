"use client"

import { useLanguage } from '@/provider/language-provider'
import React from 'react'
import styles from './page.module.css'

function Media() {
    const { translations } = useLanguage()
    return (
        <div className={styles.media_container}>
            <div className={styles.media_header}>{translations.media.header}</div>
            <div className={styles.break}></div>
        </div>
    )
}

export default Media