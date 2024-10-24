"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import logo from '../../assets/image/logo.png'
import { User, Search, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useGetCollectionQuery } from '@/hooks/useGetCollection'
import { Image } from '../image-modal/ImageModal'
import { useMemo } from 'react'
import { ImageModal } from '../image-modal'

function Header() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const { data: response, isLoading } = useGetCollectionQuery()
    const listCollection = response?.data.data as Image[] || []

    const dataTable: Image[] = listCollection.map((item: any) => ({
        id: item.id,
        src: item.url,
        alt: item.name,
        title: item.name,
        material: item.material,
        description: item.description,
        price: item.price,
        size: item.size,
        timestamp: item.timestamp
    }));

    const handleNavigation = (path: string) => {
        router.push(path)
        setIsMenuOpen(false)
        setIsSearchOpen(false)
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleSearch = () => {
        setSearch('')
        setIsSearchOpen(!isSearchOpen)
    }

    const removeAccents = (str: string): string => {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    };

    const searchedData = useMemo(() => {
        if (!search) return []

        const normalizedFilter = search.toLowerCase();
        const noAccentFilter = removeAccents(normalizedFilter);

        return dataTable.filter(item => {
            const value = item['title']?.toString() || '';
            const normalizedValue = value.toLowerCase();
            const noAccentValue = removeAccents(normalizedValue);

            return normalizedValue.includes(normalizedFilter) ||
                noAccentValue.includes(noAccentFilter);
        }
        );
    }, [dataTable, search]);

    const handleSelectItem = (item: Image) => {
        setSelectedImage(item)
    }

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
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
                    <div>
                        <div className={`${styles.search_overlay} ${isSearchOpen ? styles.show : ''}`}>
                            <input type="text" placeholder="Search..." className={styles.search_input} onChange={(e) => setSearch(e.target.value)} value={search} />
                            <button onClick={toggleSearch} className={styles.close_search_button}>
                                {isSearchOpen ? <X /> : <div />}
                            </button>
                        </div>
                        <div className={`${styles.search_data_overlay} ${searchedData.length > 0 ? styles.show_data : ''}`}>
                            {searchedData.length > 0 && (
                                <div className={styles.search_results_container}>
                                    {
                                        searchedData.map((item) => (
                                            <div key={item.id} className={styles.search_result_item} onClick={() => handleSelectItem(item)}>
                                                <div className={styles.item_image}>
                                                    <img
                                                        src={item.src}
                                                        alt={item.alt}
                                                        className={styles.thumbnail}
                                                    />
                                                </div>
                                                <div className={styles.item_details}>
                                                    <h3 className={styles.item_title}>{item.title}</h3>
                                                    <p className={styles.item_info}>
                                                        <span className={styles.label}>Material:</span>
                                                        {item.material}
                                                    </p>
                                                    <p className={styles.item_info}>
                                                        <span className={styles.label}>Size:</span>
                                                        {item.size}
                                                    </p>
                                                    <p className={styles.item_info}>
                                                        <span className={styles.label}>Price:</span>
                                                        {item.price}
                                                    </p>
                                                    <p className={styles.item_info}>
                                                        <span className={styles.label}>Date:</span>
                                                        {item.timestamp}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            )}
                        </div>
                    </div>
                )}
            </header>
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={closeModal}
                    onPrevious={() => { }}
                    onNext={() => { }}
                />
            )}
        </div>

    )
}

export default Header