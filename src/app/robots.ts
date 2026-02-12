// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.codavo-webstudio.de"
  ).replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/", // Erlaubt allen Bots, die Seite vollständig zu crawlen
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
