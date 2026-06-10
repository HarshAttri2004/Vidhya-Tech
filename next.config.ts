import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.vidhyatech.com/:path*",
        permanent: true,
        has: [
          {
            type: "host",
            value: "vidhyatech.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;