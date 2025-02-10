import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("firebase-auth"); // Ambil token dari cookie

  if (!token && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect ke /login jika belum login
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware hanya berlaku di /admin
};
