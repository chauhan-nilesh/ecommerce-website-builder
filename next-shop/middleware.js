import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const userAgent = req.headers.get("user-agent") || "";

  // If the request is from a search engine bot, allow SSR (for SEO)
  const isBot = /bot|google|bing|crawl|spider|slurp/i.test(userAgent);
  if (isBot) {
    return NextResponse.next(); // Let Next.js render SSR
  }

  // Avoid infinite loop: If request is already inside `/vite-build/`, do nothing
  if (url.pathname.startsWith("/vite-build/")) {
    return NextResponse.next();
  }

  // ✅ Rewrite `/` and all other routes to `/vite-build/index.html` without changing the URL
  return NextResponse.rewrite(new URL("/vite-build/index.html", req.url));
}

// Apply the middleware to all pages
export const config = {
  matcher: "/:path*", // This makes it run on all routes
};
