"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViteApp() {
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to the Vite app and preserve the path
    window.location.replace(`/vite-build/index.html`);
  }, []);

  return <p>Loading Vite App...</p>;
}
