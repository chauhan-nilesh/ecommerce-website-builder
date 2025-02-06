import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;

  // Redirect `/vite-app/*` to the static Vite build files
  if (url.pathname.startsWith("/vite-app")) {
    return NextResponse.redirect(
      new URL(`/vite-build${url.pathname.replace("/vite-app", "")}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/vite-app/:path*",
};
