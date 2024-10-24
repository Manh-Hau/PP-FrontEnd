import QueryProvider from "@/provider/query-provider";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Phan Phu Yen",
  description: "This is Phan Phu Yen Blog",
  icons: {
    icon: "/assets/image/bio_2.jpg",
  },
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
        <body className={`${josefinSans.className} ${styles.main} antialiased`}>
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
