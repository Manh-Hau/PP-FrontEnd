import React from 'react';
import styles from './page.module.css';
import personal from '../../../assets/image/bio_2.jpg'

function Contact() {
    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_body}>
                <div className={styles.container_left}>
                    <img src={personal.src} alt="my picture" />
                    <h3 className={styles.contact_info}>phanphuyenartist@gmail.com</h3>
                    <h3 className={styles.contact_info}>(+84) 968 191 889</h3>
                </div>
                <div className={styles.container_right}>
                    <h2 className={styles.contact_header}>LIÊN HỆ</h2>
                    <form className={styles.form}>
                        <div className={styles.fieldGroup}>
                            <div className={styles.nameFields}>
                                <input type="text" placeholder="Tên" className={styles.input} />
                                <input type="text" placeholder="Họ" className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.fieldGroup}>
                            <input type="email" placeholder="Email" className={styles.input} />
                        </div>
                        <div className={styles.fieldGroup}>
                            <textarea placeholder="Tin nhắn" className={styles.textarea} />
                        </div>
                        <button type="submit" className={styles.submitButton}>GỬI</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
