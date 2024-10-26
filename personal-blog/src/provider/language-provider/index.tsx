"use client"
import { Translations } from '@/types/common';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../../locales/en';
import { vn } from '../../locales/vn';

interface LanguageContextType {
    language: string;
    translations: Translations;
    changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    translations: en as Translations,
    changeLanguage: () => { },
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState<Translations>(en);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
        setTranslations(savedLanguage === 'en' ? en as Translations : vn as Translations);
    }, []);

    const changeLanguage = (newLang: string) => {
        setLanguage(newLang);
        setTranslations(newLang === 'en' ? en as Translations : vn as Translations);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                translations,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};