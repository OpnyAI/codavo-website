import { absoluteUrl, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo";

/** Describes the visible service and its relationship to the company and website. */
export function automationPageGraph({ path, title, description, serviceName, offers }: {
  path: string;
  title: string;
  description: string;
  serviceName: string;
  offers?: readonly { href: string; title: string; summary: string }[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "de-DE",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntity: { "@id": `${url}#service` },
        about: { "@type": "Thing", name: serviceName },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        url,
        name: serviceName,
        serviceType: serviceName,
        description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: ["Deutschland", "Österreich", "Schweiz"],
        ...(offers ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "KI-Beratung und Umsetzung",
            itemListElement: offers.map((offer) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": absoluteUrl(`${offer.href}#service`),
                name: offer.title,
                description: offer.summary,
                url: absoluteUrl(offer.href),
                provider: { "@id": ORGANIZATION_ID },
              },
            })),
          },
          subjectOf: { "@id": `${url}#webpage` },
        } : {}),
      },
    ],
  };
}
