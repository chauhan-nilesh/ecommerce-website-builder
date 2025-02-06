import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;

  // Redirect any `/vite-app/*` route to the Vite build
  if (url.pathname.startsWith("/vite-app")) {
    return NextResponse.rewrite(
      new URL(`/vite-build${url.pathname.replace("/vite-app", "")}`, req.url)
    );
  }

  return NextResponse.next();
}

// Apply middleware only for `/vite-app/*` routes
export const config = {
  matcher: "/vite-app/:path*",
};
