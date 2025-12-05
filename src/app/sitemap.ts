import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.deine-domain.de";
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/leistungen`, priority: 0.9 },
    { url: `${base}/case-studies`, priority: 0.8 },
    { url: `${base}/faq`, priority: 0.6 },
    { url: `${base}/kontakt`, priority: 0.7 },
  ];
}
