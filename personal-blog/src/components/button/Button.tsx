import React, { ButtonHTMLAttributes } from "react";
import { Loader } from "../loader";
import styles from "./app.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isLoading?: boolean;
    onClick: () => void;
    name: string;
    disable?: boolean;
}

const Button = ({
    className,
    isLoading,
    onClick,
    type = "button",
    name,
    disable
}: Props) => {
    const buttonClasses = [
        styles.button,
        isLoading && styles.loading,
        disable && styles.disabled,
        className
    ].filter(Boolean).join(" ");

    return (
        <button
            onClick={onClick}
            type={type}
            className={buttonClasses}
            disabled={isLoading || disable}
        >
            {isLoading && <Loader />}
            {name}
        </button>
    );
};

export default Button;