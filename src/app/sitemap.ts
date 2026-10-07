import type { MetadataRoute } from "next";
import { locationProfiles } from "@/lib/locations";
import {
  knowledgeArticleDates,
  knowledgeArticles,
  type KnowledgeSlug,
} from "@/lib/knowledge";
import { SEO_CONFIG } from "@/lib/seo";

const staticPaths = [
  "/",
  "/digitale-systeme",
  "/softwareloesungen-fuer-kmu",
  "/webdesign",
  "/web-app-entwicklung",
  "/leistungen",
  "/cases",
  "/faq",
  "/kontakt",
  "/website-check",
  "/landingpage-erstellen-lassen",
  "/funnel-erstellen-lassen",
  "/hosting-wartung",
  "/wissen",
  "/standorte",
] as const;

const verifiedStaticUpdates: Partial<Record<(typeof staticPaths)[number], string>> = {
  "/": "2026-10-07",
  "/digitale-systeme": "2026-10-07",
  "/cases": "2026-10-07",
  "/faq": "2026-10-07",
  "/kontakt": "2026-10-07",
  "/hosting-wartung": "2026-10-07",
  "/wissen": "2026-10-07",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: `${SEO_CONFIG.domain}${path}`,
      ...(verifiedStaticUpdates[path]
        ? { lastModified: verifiedStaticUpdates[path] }
        : {}),
    })),
    ...locationProfiles.map((location) => ({
      url: `${SEO_CONFIG.domain}/standorte/${location.slug}`,
    })),
    ...(Object.keys(knowledgeArticles) as KnowledgeSlug[]).map((slug) => ({
      url: `${SEO_CONFIG.domain}/wissen/${slug}`,
      lastModified: knowledgeArticleDates[slug].updatedAt,
    })),
  ];
}
