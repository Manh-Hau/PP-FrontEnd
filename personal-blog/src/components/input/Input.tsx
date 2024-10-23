// Input.tsx
import React from "react";
import "./app.module.css";

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
    className = "",
    ...props
}) => {
    return (
        <div className={`input-wrapper ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="input__label"
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                className="input__field"
                placeholder={placeholder}
                {...register?.(name)}
                {...props}
            />
            {error && <p className="input__error">{error}</p>}
        </div>
    );
};

export default Input;