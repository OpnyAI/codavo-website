import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/digitale-systeme", destination: "/automatisierung", permanent: true },
      { source: "/softwareloesungen-fuer-kmu", destination: "/individuelle-ki-loesungen", permanent: true },
      {
        source: "/webdesign-stuttgart",
        destination: "/standorte/stuttgart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
