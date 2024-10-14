import React from 'react';
import styles from './page.module.css';

function Contact() {
    return (
        <div className={styles.contact_container}>
            <h2 className={styles.subheader}>LIÊN HỆ</h2>
            <form className={styles.form}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Name <span>(*)</span></label>
                    <div className={styles.nameFields}>
                        <input type="text" placeholder="First Name" className={styles.input} />
                        <input type="text" placeholder="Last Name" className={styles.input} />
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Email Address <span>(*)</span></label>
                    <input type="email" placeholder="Email Address" className={styles.input} />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Message <span>(*)</span></label>
                    <textarea placeholder="Your message" className={styles.textarea} />
                </div>

                <button type="submit" className={styles.submitButton}>SUBMIT</button>
            </form>
        </div>
    );
}

export default Contact;
