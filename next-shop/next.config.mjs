/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "/vite-build/:path*",
        },
      ];
    },
  };
export default nextConfig;
