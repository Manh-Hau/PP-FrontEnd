import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Định nghĩa các routes cần bảo vệ (yêu cầu đăng nhập)
const protectedRoutes = ["/admin"];
// Định nghĩa các routes liên quan đến authentication
const authRoutes = ["/login"];

export default function middleware(request: NextRequest) {
    const { cookies } = request;
    const url = new URL(request.url);
    
    const accessToken = cookies.get("user")?.value;
    
    const isProtectedRoute = protectedRoutes.some(route => 
        url.pathname.startsWith(route)
    );

    if (isProtectedRoute && !accessToken) {
        return NextResponse.redirect(`${url.origin}/login`);
    }

    if (accessToken && url.pathname === "/login") {
        // Redirect về trang chủ admin
        return NextResponse.redirect(`${url.origin}/admin`);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|public/|api/).*)",
    ],
};