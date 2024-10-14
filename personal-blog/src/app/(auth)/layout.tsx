
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
            <div >
                <Suspense fallback={<div>Loading....</div>}>
                    {children}
                </Suspense>
            </div>
        </div>
    );
}
