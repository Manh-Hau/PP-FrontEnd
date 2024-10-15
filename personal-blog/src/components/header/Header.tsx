"use client"

import React from 'react'
import styles from './page.module.css'
import logo from '../../assets/image/logo.png'
import { User, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter()

    const handleNavigation = (path: string) => {
        router.push(path)
    }
    return (
        <div className={styles.header_container}>
            <img src={logo.src} alt='logo' className={styles.logo_image} />
            <ul className={styles.header_items}>
                <li onClick={() => handleNavigation('/')}>TRANG CHỦ</li>
                <li onClick={() => handleNavigation('/bio')}>TIỂU SỬ</li>
                <li onClick={() => handleNavigation('/activities')}>HOẠT ĐỘNG</li>
                <li onClick={() => handleNavigation('/media')}>TRUYỀN THÔNG</li>
                <li onClick={() => handleNavigation('/contact')}>LIÊN HỆ</li>
            </ul>
            <div className={styles.header_right}>
                <button>
                    <User size={20} color="#000000" />
                </button>
                <button>
                    <Search size={20} color="#000000" />
                </button>
            </div>
        </div>
    )
}

export default Header