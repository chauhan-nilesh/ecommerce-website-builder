"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViteApp() {
  const pathname = usePathname();
  const vitePath = `/vite-build${pathname.replace("/vite-app", "")}`;

  useEffect(() => {
    window.location.href = vitePath;
  }, [vitePath]);

  return (
    <head>
      <meta httpEquiv="refresh" content={`0;url=${vitePath}`} />
    </head>
  );
}
