import type { NextConfig } from "next";

// Static export for GitHub Pages (user site served from the domain root).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    turbopack: false,
  },
};

export default nextConfig;
