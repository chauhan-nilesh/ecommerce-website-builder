import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/vite-app")) {
    return NextResponse.rewrite(
      new URL(`/vite-build/index.html`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/vite-app/:path*",
};
