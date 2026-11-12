import type { Metadata } from "next";

export const SEO_CONFIG = {
  domain: "https://www.codavo-webstudio.de",
  companyName: "Codavo",
  description:
    "Codavo unterstützt den industriellen Mittelstand mit KI-Automatisierung, KI-Beratung, Systemintegration und individuellen KI-Lösungen. Ergänzend entwickelt Codavo Unternehmenswebsites, Landingpages und Funnel.",
  defaultTitle: "Professionelle Unternehmenswebsites | Codavo Webstudio",
  defaultDescription:
    "Individuelle Websites, Landingpages und Funnel für Unternehmen, die bei Google und in KI-Systemen organisch sichtbar werden und qualifizierte Anfragen gewinnen.",
  ogImage: {
    path: "/og.jpg",
    width: 886,
    height: 886,
    alt: "Codavo Webstudio",
  },
  automationOgImage: {
    path: "/og-automatisierung.png",
    width: 1200,
    height: 630,
    alt: "Codavo – KI-Beratung, Prozessautomatisierung und individuelle KI-Lösungen für den industriellen Mittelstand",
  },
  logoPath: "/images/logo/codavo-logo-light.png",
  founderImagePath: "/images/hero/mehmet-catalsakal-founder-original.jpg",
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
  founder: {
    name: "Mehmet Çatalsakal",
    jobTitle: "Gründer von Codavo",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/mehmet-catalsakal-43264a15b/?isSelfProfile=true",
      instagram:
        "https://www.instagram.com/mehmet.catalsakal?stkn=cDVzN25ibHp0Y3l6&utm_source=qr",
      tiktok: "https://www.tiktok.com/@mehmet.catalsakal",
      youtube:
        "https://youtube.com/@mehmet_catalsakal?si=Ni5Ow2Aj0_7zca6r",
    },
  },
} as const;

export const ORGANIZATION_ID = `${SEO_CONFIG.domain}/#organization`;
export const WEBSITE_ID = `${SEO_CONFIG.domain}/#website`;
export const PERSON_ID = `${SEO_CONFIG.domain}/#mehmet-catalsakal`;

export function absoluteUrl(path = "/") {
  return new URL(path, SEO_CONFIG.domain).toString();
}

type PageMetadataOptions = {
  path?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
  imageAlt?: string;
  automationImage?: boolean;
};

export function createPageMetadata({
  path = "/",
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  noIndex = false,
  imageAlt,
  automationImage = false,
}: PageMetadataOptions = {}): Metadata {
  const { path: imagePath, width, height, alt } = automationImage
    ? SEO_CONFIG.automationOgImage
    : SEO_CONFIG.ogImage;
  const image = { url: imagePath, width, height, alt: imageAlt ?? alt };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: true,
      ...(!noIndex ? {
        "max-snippet": -1,
        "max-image-preview": "large" as const,
        "max-video-preview": -1,
      } : {}),
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
      images: [imagePath],
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
      alternateName: "Codavo Webstudio",
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
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SEO_CONFIG.founder.name,
      jobTitle: SEO_CONFIG.founder.jobTitle,
      description:
        "Wirtschaftsingenieur und Gründer von Codavo. Rund zehn Jahre bei Bosch, zuletzt in einer Führungsrolle im industriellen Einkauf.",
      url: `${SEO_CONFIG.domain}/#about`,
      image: absoluteUrl(SEO_CONFIG.founderImagePath),
      sameAs: Object.values(SEO_CONFIG.founder.socialLinks),
      worksFor: { "@id": ORGANIZATION_ID },
      knowsAbout: [
        "Industrieller Einkauf",
        "Prozessautomatisierung",
        "Individuelle KI-Lösungen",
      ],
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
