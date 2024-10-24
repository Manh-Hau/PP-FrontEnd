"use client"

import { Loader } from '@/components/loader';
import { useLoginMutation } from '@/hooks/useLogin';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./page.module.css";

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: login, isPending } = useLoginMutation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ email, password }, {
            onSuccess: () => {
                router.push('/admin')
            },
            onError: (error: any) => {
                console.log('error', error)
            }
        })
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
                        {isPending ? <Loader /> : undefined} Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;