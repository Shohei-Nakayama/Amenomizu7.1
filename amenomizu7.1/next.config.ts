import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'whitesheep.amenomizu.jp',
          },
        ],
        destination: 'https://amenomizu.jp/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
