"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViteApp() {
  const pathname = usePathname();

  useEffect(() => {
    window.location.href = `/vite-build${pathname.replace("/vite-app", "")}`;
  }, [pathname]);

  return <p>Loading...</p>;
}
