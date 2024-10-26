"use client"

import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { ChevronLastIcon, ChevronFirstIcon, Pencil, Trash2 } from 'lucide-react';
import { Loader } from '../loader';
import { useLanguage } from '@/provider/language-provider';

interface Image {
    id: number;
    src: string;
    alt: string;
    title: string;
    material: string;
    price: string;
    description: string;
    size: string;
    timestamp: string;
}

interface TableProps {
    headers: string[];
    data: Image[];
    className?: string;
    itemsPerPage?: number;
    filterColumn?: string;
    onEdit?: (image: Image) => void;
    onDelete?: (image: Image) => void;
    loading?: boolean,
    children?: React.ReactNode
}

const GridTable: React.FC<TableProps> = ({
    headers,
    data,
    className,
    itemsPerPage = 10,
    filterColumn,
    onEdit,
    onDelete,
    loading,
    children
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');
    const { translations } = useLanguage()

    const removeAccents = (str: string): string => {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    };

    const filteredData = useMemo(() => {
        if (!filter || !filterColumn) return data;

        const normalizedFilter = filter.toLowerCase();
        const noAccentFilter = removeAccents(normalizedFilter);

        return data.filter(item => {
            const value = item[filterColumn as keyof Image]?.toString() || '';
            const normalizedValue = value.toLowerCase();
            const noAccentValue = removeAccents(normalizedValue);

            return normalizedValue.includes(normalizedFilter) ||
                noAccentValue.includes(noAccentFilter);
        });
    }, [data, filter, filterColumn]);

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleEdit = (image: Image) => {
        if (onEdit) {
            onEdit(image);
        }
    };

    const handleDelete = (image: Image) => {
        if (onDelete) {
            onDelete(image);
        }
    };



    const formatJSON = (input: string) => input.length > 0 ? JSON.parse(input) : ''

    return (
        <div className={styles.tableContainer}>
            {filterColumn && (
                <div className={styles.filterContainer}>
                    {children}
                    <input
                        type="text"
                        placeholder={translations.grid_table.find_by_name}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className={styles.filterInput}
                    />
                </div>
            )}
            <table className={`${styles.table} ${className || ''}`}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className={styles.th}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? <Loader className={styles.loader} /> : paginatedData.map((item) => (
                        <tr key={item.id}>
                            <td className={`${styles.td} ${styles.imageCell}`}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={styles.thumbnailImage}
                                />
                            </td>
                            <td className={styles.td}>{item.title}</td>
                            <td className={styles.td}>{formatJSON(item.material).vn}-{formatJSON(item.material).en}</td>
                            <td className={styles.td}>{item.size}</td>
                            <td className={styles.td}>{formatJSON(item.price).vn}-{formatJSON(item.price).en}</td>
                            <td className={styles.td}>{item.timestamp}</td>
                            <td className={`${styles.td} ${styles.actionColumn}`}>
                                <button
                                    onClick={() => handleEdit(item)}
                                    className={styles.actionButton}
                                    title="Chỉnh sửa"
                                >
                                    <Pencil size={16} className={styles.editIcon} />
                                </button>
                                <button
                                    onClick={() => handleDelete(item)}
                                    className={styles.actionButton}
                                    title="Xóa"
                                >
                                    <Trash2 size={16} className={styles.deleteIcon} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button
                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <ChevronFirstIcon size={20} />
                </button>
                <span>{currentPage} / {pageCount}</span>
                <button
                    onClick={() => setCurrentPage(page => Math.min(page + 1, pageCount))}
                    disabled={currentPage === pageCount}
                >
                    <ChevronLastIcon size={20} />
                </button>
            </div>
        </div>
    );
};

export default GridTable;