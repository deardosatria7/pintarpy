import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' https://pyscript.net;
              script-src 'self' 'unsafe-inline' https://pyscript.net;
              style-src 'self' 'unsafe-inline' https://pyscript.net;
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;