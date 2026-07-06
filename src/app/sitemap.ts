import type { MetadataRoute } from "next";
import { locationProfiles } from "@/lib/locations";
import { knowledgeArticles } from "@/lib/knowledge";
import { SEO_CONFIG } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SEO_CONFIG.domain}/`,
      lastModified: "2026-07-02",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SEO_CONFIG.domain}/digitale-systeme`,
      lastModified: "2026-07-02",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SEO_CONFIG.domain}/softwareloesungen-fuer-kmu`,
      lastModified: "2026-07-02",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SEO_CONFIG.domain}/webdesign`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO_CONFIG.domain}/web-app-entwicklung`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SEO_CONFIG.domain}/leistungen`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO_CONFIG.domain}/cases`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SEO_CONFIG.domain}/faq`,
      lastModified: "2026-07-03",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SEO_CONFIG.domain}/kontakt`,
      lastModified: "2026-04-07",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SEO_CONFIG.domain}/website-check`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO_CONFIG.domain}/landingpage-erstellen-lassen`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO_CONFIG.domain}/funnel-erstellen-lassen`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO_CONFIG.domain}/hosting-wartung`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SEO_CONFIG.domain}/wissen`,
      lastModified: "2026-07-02",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SEO_CONFIG.domain}/standorte`,
      lastModified: "2026-07-03",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...locationProfiles.map((location) => ({
      url: `${SEO_CONFIG.domain}/standorte/${location.slug}`,
      lastModified: "2026-07-03",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...Object.keys(knowledgeArticles).map((slug) => ({
      url: `${SEO_CONFIG.domain}/wissen/${slug}`,
      lastModified: "2026-07-02",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
