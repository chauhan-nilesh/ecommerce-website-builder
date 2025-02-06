import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const userAgent = req.headers.get("user-agent") || "";
  console.log(url)

  // If the request is from a search engine bot, serve the SSR page
  const isBot = /bot|google|bing|crawl|spider|slurp/i.test(userAgent);
  if (isBot) {
    return NextResponse.next(); // Allow SSR for SEO
  }

  // Otherwise, send all requests to the Vite app
  return NextResponse.rewrite(new URL("/vite-build/index.html", req.url));
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
