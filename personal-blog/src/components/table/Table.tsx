import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { ChevronLastIcon, ChevronFirstIcon, Pencil, Trash2 } from 'lucide-react';

interface TableProps {
    headers: string[];
    data: any[][];
    className?: string;
    itemsPerPage?: number;
    filterColumn?: number;
    onEdit?: (rowIndex: number) => void;
    onDelete?: (rowIndex: number) => void;
}

const Table: React.FC<TableProps> = ({
    headers,
    data,
    className,
    itemsPerPage = 10,
    filterColumn,
    onEdit,
    onDelete
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    const filteredData = useMemo(() => {
        if (!filter || filterColumn === undefined) return data;
        return data.filter(row =>
            row[filterColumn].toString().toLowerCase().includes(filter.toLowerCase())
        );
    }, [data, filter, filterColumn]);

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleEdit = (rowIndex: number) => {
        if (onEdit) {
            const actualIndex = (currentPage - 1) * itemsPerPage + rowIndex;
            onEdit(actualIndex);
        }
    };

    const handleDelete = (rowIndex: number) => {
        if (onDelete) {
            const actualIndex = (currentPage - 1) * itemsPerPage + rowIndex;
            onDelete(actualIndex);
        }
    };

    return (
        <div className={styles.tableContainer}>
            {filterColumn !== undefined && (
                <div className={styles.filterContainer}>
                    <input
                        type="text"
                        placeholder={`Filter by ${headers[filterColumn]}`}
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
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={styles.td}>{cell}</td>
                            ))}
                            <td className={`${styles.td} ${styles.actionColumn}`}>
                                <button
                                    onClick={() => handleEdit(rowIndex)}
                                    className={styles.actionButton}
                                    title="Edit"
                                >
                                    <Pencil size={16} className={styles.editIcon} />
                                </button>
                                <button
                                    onClick={() => handleDelete(rowIndex)}
                                    className={styles.actionButton}
                                    title="Delete"
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