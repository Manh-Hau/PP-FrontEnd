"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import logo from '../../assets/image/logo.png'
import { User, Search, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useGetCollectionQuery } from '@/hooks/useGetCollection'
import { Image } from '../image-modal/ImageModal'

function Header() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    const { data: response, isLoading } = useGetCollectionQuery()
    const listCollection = response?.data.data as Image[] || []

    const handleNavigation = (path: string) => {
        router.push(path)
        setIsMenuOpen(false)
        setIsSearchOpen(false)
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    console.log('isMenuOpen', isMenuOpen)

    return (
        <header className={styles.header_container}>
            <img src={logo.src} alt="Logo" className={styles.logo_image} onClick={() => handleNavigation('/')} />
            <ul className={`${styles.header_items} ${isMenuOpen ? styles.open : ''}`}>
                <li onClick={() => handleNavigation('/')}>TRANG CHỦ</li>
                <li onClick={() => handleNavigation('/bio')}>TIỂU SỬ</li>
                <li onClick={() => handleNavigation('/activities')}>HOẠT ĐỘNG</li>
                <li onClick={() => handleNavigation('/media')}>TRUYỀN THÔNG</li>
                <li onClick={() => handleNavigation('/contact')}>LIÊN HỆ</li>
            </ul>
            <div className={styles.header_right}>
                <button onClick={toggleSearch}>
                    <Search size={20} color="#000000" />
                </button>
                <button>
                    <User size={20} color="#000000" />
                </button>
                <button className={styles.menu_button} onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} color="#000000" /> : <Menu size={24} color="#000000" />}
                </button>
            </div>

            {isSearchOpen && (
                <div className={`${styles.search_overlay} ${isSearchOpen ? styles.show : ''}`}>
                    <input type="text" placeholder="Search..." className={styles.search_input} />
                    <button onClick={toggleSearch} className={styles.close_search_button}>
                        {isSearchOpen ? <X /> : <div />}
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header