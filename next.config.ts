import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    unoptimized: false,
  },
  allowedDevOrigins: ["100.68.178.26"],
};

export default nextConfig;

