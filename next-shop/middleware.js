import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const cookies = req.cookies.get("visited");

  if (!cookies && url.pathname === "/") {
    // Set a cookie to remember the visit
    const response = NextResponse.redirect(new URL("/vite-build/", req.url));
    response.cookies.set("visited", "true", { path: "/", maxAge: 60 * 60 * 24 }); // 1-day cookie
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
