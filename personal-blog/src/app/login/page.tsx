"use client"

import React, { useState } from 'react';
import styles from "./page.module.css";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted', { email, password });
    };

    return (
        <div className={styles.main}>
            <div className={styles.loginContent}>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <h1 className={styles.loginTitle}>LOGIN</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.loginInput}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.loginInput}
                        required
                    />
                    <button type="submit" className={styles.loginButton}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;