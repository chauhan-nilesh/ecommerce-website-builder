/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "/shop/:path*",
        },
      ];
    },
  };
export default nextConfig;
