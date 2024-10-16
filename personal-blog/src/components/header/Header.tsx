"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import logo from '../../assets/image/logo.png'
import { User, Search, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavigation = (path: string) => {
        router.push(path)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.header_container}>
            <img src={logo.src} alt='logo' className={styles.logo_image} />
            <ul className={`${styles.header_items} ${isMenuOpen ? styles.open : ''}`}>
                <li onClick={() => handleNavigation('/')}>TRANG CHỦ</li>
                <li onClick={() => handleNavigation('/bio')}>TIỂU SỬ</li>
                <li onClick={() => handleNavigation('/activities')}>HOẠT ĐỘNG</li>
                <li onClick={() => handleNavigation('/media')}>TRUYỀN THÔNG</li>
                <li onClick={() => handleNavigation('/contact')}>LIÊN HỆ</li>
                {/* <li className={styles.language_selector}>
                    <span>English</span>
                    <span>Tiếng Việt</span>
                </li> */}
            </ul>
            <div className={styles.header_right}>
                <button>
                    <User size={20} color="#000000" />
                </button>
                <button>
                    <Search size={20} color="#000000" />
                </button>
                <button className={styles.menu_button} onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} color="#000000" /> : <Menu size={24} color="#000000" />}
                </button>
            </div>
        </div>
    )
}

export default Header