import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/((?!_next/|maintenance\\.html).*)",
          destination: "/maintenance.html",
        },
      ],
    };
  },
};

export default nextConfig;
