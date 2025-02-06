import { headers } from "next/headers";

export async function generateMetadata() {
  try {
    // Await headers() before using
    const headersList = await headers();
    const host = headersList.get("host");

    const protocol = host?.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    console.log("Base URL:", baseUrl); // Debugging
    console.log("Host URL:", host);

    // Fetch metadata using the full URL
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subdomain: host }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();

    return {
      title: data?.data?.store?.metaTitle || "Shop",
      description: data?.data?.store?.metaDescription || data?.data?.store?.bio || "Made by Eazzy Store",
    };
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return {
      title: "Shop",
      description: "Made by Eazzy Store",
    };
  }
}

export default function Home() {
  return (
    <div>
      <p>Loading...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const isBot = /bot|googlebot|bingbot|crawler|spider|slurp/i.test(navigator.userAgent);
          const isViteApp = window.location.pathname.startsWith('/shop');

          if (!isBot && !isViteApp) {
            window.location.replace('/shop/index.html');
          }
        `,
        }}
      />
    </div>
  );
}

