import QueryProvider from "@/provider/query-provider";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import styles from "./page.module.css";
import { Toaster } from 'react-hot-toast';
import { MultiLanguage } from "@/components/multi-language";
import { LanguageProvider } from "@/provider/language-provider";

export const metadata: Metadata = {
  title: "Phan Phu Yen",
  description: "This is Phan Phu Yen Blog",
};

const josefinSans = Josefin_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <LanguageProvider>
          <body className={`${josefinSans.className} ${styles.main} antialiased`}>
            {children}
            <Toaster position="top-center"
              reverseOrder={true}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                className: '',
                duration: 3000,
                style: {
                  background: 'rgba(255, 255, 255, 0.8)',
                  color: '#000000',
                  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
                },
              }} />
            <MultiLanguage />
          </body>
        </LanguageProvider>
      </QueryProvider>
    </html>
  );
}
