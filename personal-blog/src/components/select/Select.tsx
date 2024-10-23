import React from "react";
import styles from "./app.module.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    name?: string;
    register?: any;
    placeholder?: string;
    error?: string;
    options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
    label,
    name,
    register,
    error,
    placeholder,
    className,
    options,
    ...props
}) => {
    return (
        <div className={`${styles.container} ${className || ''}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={styles.label}
                >
                    {label}
                </label>
            )}
            <select
                id={name}
                className={styles.select}
                {...register?.(name)}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled className={styles.placeholder}>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Select;