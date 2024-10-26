"use client"
import { useLanguage } from '@/provider/language-provider';
import React, { useState } from 'react';
import styles from './app.module.css';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'vn' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.switcherButton}
      aria-label={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
    >
      <span className={styles.flag}>
        {language === 'en' ? '🇺🇸' : '🇻🇳'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;