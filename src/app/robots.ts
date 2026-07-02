import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SEO_CONFIG.domain}/sitemap.xml`,
  };
}
