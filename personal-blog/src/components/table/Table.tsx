import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { ChevronLastIcon, ChevronFirstIcon, Pencil, Trash2 } from 'lucide-react';
import { Loader } from '../loader';

interface Image {
    id: number;
    src: string;
    alt: string;
    title?: string;
    material?: string;
    price?: string;
    description?: string;
    size?: string;
    timestamp?: string;
}

interface TableProps {
    headers: string[];
    data: Image[];
    className?: string;
    itemsPerPage?: number;
    filterColumn?: string;
    onEdit?: (index: number) => void;
    onDelete?: (index: number) => void;
    loading?: boolean
}

const Table: React.FC<TableProps> = ({
    headers,
    data,
    className,
    itemsPerPage = 10,
    filterColumn,
    onEdit,
    onDelete,
    loading
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    const filteredData = useMemo(() => {
        if (!filter || !filterColumn) return data;
        console.log('avc', data)
        return data.filter(item =>
            item[filterColumn as keyof Image]?.toString().toLowerCase().includes(filter.toLowerCase())
        );
    }, [data, filter, filterColumn]);

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleEdit = (image: Image) => {
        if (onEdit) {
            // onEdit(image);
        }
    };

    const handleDelete = (image: Image) => {
        if (onDelete) {
            // onDelete(image);
        }
    };

    return (
        <div className={styles.tableContainer}>
            {filterColumn && (
                <div className={styles.filterContainer}>
                    <input
                        type="text"
                        placeholder={`Tìm kiếm theo tên`}
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
                            <td className={styles.td}>{item.material}</td>
                            <td className={styles.td}>{item.size}</td>
                            <td className={styles.td}>{item.price}</td>
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

export default Table;