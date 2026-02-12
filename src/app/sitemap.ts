// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.codavo-webstudio.de"
  ).replace(/\/+$/, "");
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/leistungen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/webdesign`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/web-app-entwicklung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/webdesign-stuttgart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/cases`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Rechtliche Seiten – niedrige Priorität, aber nicht geblockt
    {
      url: `${SITE_URL}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
