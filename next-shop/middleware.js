import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const userAgent = req.headers.get("user-agent") || "";

  // If the request is from a search engine bot, serve the SSR page
  const isBot = /bot|google|bing|crawl|spider|slurp/i.test(userAgent);
  if (isBot) {
    return NextResponse.next(); // Allow SSR for SEO
  }

  // Only process root requests ("/") to serve Vite's index.html
  if (url.pathname === "/") {
    return NextResponse.rewrite(new URL("/vite-build/index.html", req.url));
  }

  // Redirect all other requests to Vite build folder
  return NextResponse.rewrite(new URL(`/vite-build${url.pathname}`, req.url));

  // Otherwise, send all requests to the Vite app
  // return NextResponse.rewrite(new URL("/vite-build/index.html", req.url));
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
