import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
    images: {
    domains: ['placehold.jp'],
  },
};

export default nextConfig;
