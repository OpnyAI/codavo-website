import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/website-check",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/webdesign-stuttgart",
        destination: "/standorte/stuttgart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
