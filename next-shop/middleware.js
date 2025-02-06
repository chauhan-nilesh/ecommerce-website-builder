import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const visited = req.cookies.get("visited");

  if (!visited && url.pathname === "/") {
    // Redirect only on the first visit
    const response = NextResponse.redirect(new URL("/vite-build/", req.url));
    response.cookies.set("visited", "true", { path: "/", maxAge: 60 * 60 * 24 }); // 1 day
    return response;
  }

  return NextResponse.next();
}

// Apply middleware only to the root "/"
export const config = {
  matcher: ["/"], 
};
