"use client"

import React, { useState } from 'react';
import { LogOutIcon } from 'lucide-react'
import styles from './page.module.css';

interface Image {
    id: number;
    name: string;
    material: string;
    size: string;
    price: number;
    url: string;
}

const AdminPage: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [images, setImages] = useState<Image[]>([]);
    const [newImage, setNewImage] = useState<Partial<Image>>({});

    const handleAddImage = () => {
        if (newImage.name && newImage.url) {
            setImages([...images, { ...newImage, id: Date.now() } as Image]);
            setNewImage({});
            setIsDialogOpen(false);
        }
    };

    const handleLogout = () => {

    }

    return (
        <div className={styles.adminPage}>
            <header className={styles.header}>
                <h1>Admin Dashboard</h1>
                <div className={styles.userInfo}>
                    <span>Welcome, Admin</span>
                    <button onClick={handleLogout} className={styles.logout_button}><LogOutIcon size={24} /></button>
                </div>
            </header>

        </div>
    );
};

export default AdminPage;