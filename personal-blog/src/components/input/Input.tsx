import React from "react";
import styles from "./app.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    register?: any;
    placeholder?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    type,
    placeholder,
    register,
    error,
    className,
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
            <input
                id={name}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                {...register?.(name)}
                {...props}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Input;