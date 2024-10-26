"use client"

import { Loader } from '@/components/loader';
import { useLoginMutation } from '@/hooks/useLogin';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./page.module.css";
import toast from 'react-hot-toast'
import { useLanguage } from '@/provider/language-provider';

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { translations } = useLanguage()

    const { mutate: login, isPending } = useLoginMutation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ email, password }, {
            onSuccess: () => {
                router.push('/admin')
            },
            onError: (error: any) => {
                toast.error(error)
            }
        })
    };

    return (
        <div className={styles.main}>
            <div className={styles.loginContent}>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <h1 className={styles.loginTitle}>{translations.login.title}</h1>
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
                        {isPending ? <Loader /> : undefined} {translations.login.button_login}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;