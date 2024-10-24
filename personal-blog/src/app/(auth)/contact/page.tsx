"use client"

import { useSendMailMutation } from '@/hooks/useSendMail';
import React from 'react';
import { useState } from 'react';
import styles from './page.module.css';

function Contact() {
    const { mutate: sendMail, isPending } = useSendMailMutation()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formattedContent = `Ten: ${formData.firstName}\nHo: ${formData.lastName}\nEmail: ${formData.email}\nNoi dung: ${formData.message}`;
        sendMail({ content: formattedContent }, {
            onSuccess: () => {
                alert('Send Email Successfully!')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                })
            },
            onError: (error: any) => {
                console.log('error', error)
            }
        })
    }

    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_body}>
                <div className={styles.container_left}>
                    <h2 className={styles.contact_header}>LIÊN HỆ</h2>
                    <h3 className={styles.contact_info_1}>Email: phanphuyenartist@gmail.com</h3>
                    <h3 className={styles.contact_info_2}>Số điện thoại: (+84) 968 191 889</h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldGroup}>
                            <div className={styles.nameFields}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Tên"
                                    className={styles.input}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Họ"
                                    className={styles.input}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.fieldGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.fieldGroup}>
                            <textarea
                                name="message"
                                placeholder="Tin nhắn"
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>GỬI</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
