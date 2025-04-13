import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["example.com", "https://upload.wikimedia.org"], // Ganti dengan domain yang diizinkan
  },
};

export default nextConfig;
