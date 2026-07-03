import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/webdesign-stuttgart",
        destination: "/standorte/stuttgart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
