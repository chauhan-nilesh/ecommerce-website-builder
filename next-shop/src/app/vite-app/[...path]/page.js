"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViteApp() {
  const pathname = usePathname();
console.log(pathname)
  useEffect(() => {
    // Redirect to the correct Vite app route
    window.location.replace(`/vite-build${pathname.replace("/vite-app", "")}`);
  }, [pathname]);

  return <p>Loading Vite App...</p>;
}
