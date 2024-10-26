"use client"

import { useSendMailMutation } from '@/hooks/useSendMail';
import React from 'react';
import { useState } from 'react';
import styles from './page.module.css';
import toast from 'react-hot-toast'
import { useLanguage } from '@/provider/language-provider';

function Contact() {
    const { translations } = useLanguage()
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
                toast.success(translations.contact.success_send_mail)
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                })
            },
            onError: (error: any) => {
                toast.error(error)
            }
        })
    }

    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_body}>
                <div className={styles.container_left}>
                    <h2 className={styles.contact_header}>{translations.contact.header}</h2>
                    <h3 className={styles.contact_info_1}>Email: phanphuyenartist@gmail.com</h3>
                    <h3 className={styles.contact_info_2}>{translations.contact.phone_number}: (+84) 968 191 889</h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldGroup}>
                            <div className={styles.nameFields}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder={translations.contact.first_name}
                                    className={styles.input}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={translations.contact.last_name}
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
                                placeholder={translations.contact.message}
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>{translations.contact.send}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
