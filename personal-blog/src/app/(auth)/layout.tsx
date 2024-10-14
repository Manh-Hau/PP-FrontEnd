
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Suspense } from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading....</div>}>
                {children}
            </Suspense>
            <Footer />
        </div>
    );
}
