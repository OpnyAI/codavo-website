// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.codavo-webstudio.de";

  return {
    rules: {
      userAgent: "*",
      allow: "/", // Erlaubt allen Bots, die Seite vollständig zu crawlen
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
