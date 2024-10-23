"use client"

import React, { useState } from 'react';
import { LogOutIcon } from 'lucide-react'
import styles from './page.module.css';
import { Table } from '@/components/table';

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

    const headers = ['Name', 'Age', 'Country', 'Action'];
    const data = [
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Mike Johnson', 35, 'UK'],
    ];

    return (
        <div className={styles.adminPage}>
            <header className={styles.header}>
                <h1>Admin Dashboard</h1>
                <div className={styles.userInfo}>
                    <span>Welcome, Admin</span>
                    <button onClick={handleLogout} className={styles.logout_button}><LogOutIcon size={24} /></button>
                </div>
            </header>
            <div className={styles.body}>
                <Table headers={headers}
                    data={data}
                    itemsPerPage={5}
                    filterColumn={0} />
            </div>
        </div>
    );
};

export default AdminPage;