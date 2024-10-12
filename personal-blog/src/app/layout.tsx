import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "This is my personal blog",
};

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
