import { headers } from "next/headers";

export async function generateMetadata() {
  // Get the base URL from headers
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  console.log("Base URL:", baseUrl); // Debugging

  try {
    // Fetch metadata using the full URL
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subdomain: host }),
      cache: "no-store",
    });

    const data = await res.json();
    return {
      title: data.data.store.metaTitle || "Shop",
      description: data.data.store.metaDescription || data.data.store.bio || "Made by Eazzy Store",
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
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <p>Loading...</p>
        <script>
          {`
          if (navigator.userAgent.indexOf('Googlebot') === -1) {
            window.location.replace('/');
          }
        `}
        </script>
      </body>
    </html>
  );
}
