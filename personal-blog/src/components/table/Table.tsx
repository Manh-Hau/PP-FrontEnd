"use client"

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import { ChevronLastIcon, ChevronFirstIcon, Pencil, Trash2 } from 'lucide-react';
import { useLanguage } from '@/provider/language-provider';
import { useInView } from 'react-intersection-observer';
import { ImageLoader } from '../image-loader';
import { Loader } from '../loader';

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
    loading?: boolean;
    children?: React.ReactNode;
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
    const [isClient, setIsClient] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [debouncedFilter, setDebouncedFilter] = useState('');
    const { translations } = useLanguage();
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: false
    });

    const removeAccents = useCallback((str: string): string => {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    }, []);


    const normalizedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            searchField: removeAccents(item[filterColumn as keyof Image]?.toString().toLowerCase() || '')
        }));
    }, [data, filterColumn]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedFilter(removeAccents(filter.toLowerCase()));
        }, 300);
        return () => clearTimeout(timer);
    }, [filter]);

    const filteredData = useMemo(() => {
        if (!debouncedFilter || !filterColumn) return normalizedData;
        return normalizedData.filter(item =>
            item.searchField.includes(debouncedFilter)
        );
    }, [normalizedData, debouncedFilter, filterColumn]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedFilter]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = useMemo(() => {
        return filteredData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [filteredData, currentPage, itemsPerPage]);

    const handleEdit = useCallback((image: Image) => {
        onEdit?.(image);
    }, [onEdit]);

    const handleDelete = useCallback((image: Image) => {
        onDelete?.(image);
    }, [onDelete]);

    const formatJSON = useCallback((input: string) => {
        try {
            return input.length > 0 ? JSON.parse(input) : '';
        } catch {
            return '';
        }
    }, []);

    const visibleData = useMemo(() => {
        return filteredData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [filteredData, currentPage, itemsPerPage]);

    if (!isClient) {
        return <div className={styles.tableContainer}>Loading...</div>;
    }

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
            {loading ? (
                <Loader className={styles.loader} />
            ) : (
                <>
                    <div className={styles.tableWrapper} ref={ref}>
                        <table className={`${styles.table} ${className || ''}`}>
                            <thead>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index} className={styles.th}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {visibleData.map((item) => (
                                    <tr key={item.id}>
                                        <td className={`${styles.td} ${styles.imageCell}`}>
                                            {inView && (
                                                <ImageLoader
                                                    src={item.src}
                                                    alt=''
                                                    className={styles.thumbnailImage}
                                                    placeholder='Load image'
                                                />
                                            )}
                                        </td>
                                        <td className={styles.td}>{item.title}</td>
                                        <td className={styles.td}>
                                            {`${formatJSON(item.material).vn}-${formatJSON(item.material).en}`}
                                        </td>
                                        <td className={styles.td}>{item.size}</td>
                                        <td className={styles.td}>
                                            {`${formatJSON(item.price).vn}-${formatJSON(item.price).en}`}
                                        </td>
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
                    </div>

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
                </>
            )}
        </div>
    );
};

export default GridTable;