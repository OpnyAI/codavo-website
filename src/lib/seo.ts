import type { Metadata } from "next";

export const SEO_CONFIG = {
  domain: "https://www.codavo-webstudio.de",
  companyName: "Codavo Webstudio",
  description:
    "Codavo entwickelt individuelle Unternehmenswebsites, Landingpages, Funnel und webbasierte Software für professionelle Sichtbarkeit und klare digitale Prozesse.",
  defaultTitle: "Professionelle Unternehmenswebsites | Codavo Webstudio",
  defaultDescription:
    "Individuelle Unternehmenswebsites, Landingpages und Funnel für Vertrauen, qualifizierte Anfragen und Sichtbarkeit bei Suchmaschinen und KI-Systemen.",
  ogImage: {
    path: "/og.jpg",
    width: 886,
    height: 886,
    alt: "Codavo Webstudio",
  },
  logoPath: "/images/logo/codavo-logo-light.png",
  telephone: "+49 1511 1956479",
  email: "kontakt@codavo-webstudio.de",
  address: {
    streetAddress: "Naumannstraße 3",
    addressLocality: "Berglen",
    postalCode: "73663",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/codavo-webstudio",
  },
} as const;

export const ORGANIZATION_ID = `${SEO_CONFIG.domain}/#organization`;
export const WEBSITE_ID = `${SEO_CONFIG.domain}/#website`;

export function absoluteUrl(path = "/") {
  return new URL(path, SEO_CONFIG.domain).toString();
}

type PageMetadataOptions = {
  path?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
  imageAlt?: string;
};

export function createPageMetadata({
  path = "/",
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  noIndex = false,
  imageAlt = SEO_CONFIG.ogImage.alt,
}: PageMetadataOptions = {}): Metadata {
  const image = {
    url: SEO_CONFIG.ogImage.path,
    width: SEO_CONFIG.ogImage.width,
    height: SEO_CONFIG.ogImage.height,
    alt: imageAlt,
  };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
    openGraph: {
      url: path,
      siteName: SEO_CONFIG.companyName,
      type: "website",
      locale: "de_DE",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SEO_CONFIG.ogImage.path],
    },
  };
}

export const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": ORGANIZATION_ID,
      name: SEO_CONFIG.companyName,
      url: SEO_CONFIG.domain,
      description: SEO_CONFIG.description,
      telephone: SEO_CONFIG.telephone,
      email: SEO_CONFIG.email,
      image: absoluteUrl(SEO_CONFIG.ogImage.path),
      logo: absoluteUrl(SEO_CONFIG.logoPath),
      address: {
        "@type": "PostalAddress",
        ...SEO_CONFIG.address,
      },
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
        { "@type": "City", name: "Stuttgart" },
      ],
      sameAs: Object.values(SEO_CONFIG.socialLinks),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SEO_CONFIG.telephone,
        email: SEO_CONFIG.email,
        availableLanguage: ["de"],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SEO_CONFIG.companyName,
      url: SEO_CONFIG.domain,
      inLanguage: "de-DE",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};
