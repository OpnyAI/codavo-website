// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import GlobalBackground from "@/components/GlobalBackground";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codavo-webstudio.de"),

  title: {
    default: "Codavo Webstudio – Webdesign & Webentwicklung für Unternehmen",
    template: "%s | Codavo Webstudio",
  },

  description:
    "Codavo Webstudio ist deine Agentur für modernes Webdesign, Webentwicklung und Web-Apps. Wir realisieren Projekte in 1–4 Wochen für Kund:innen in Stuttgart, ganz Deutschland und der DACH-Region.",

  alternates: {
    canonical: "https://www.codavo-webstudio.de",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.codavo-webstudio.de",
    siteName: "Codavo Webstudio",
    title: "Codavo Webstudio – Webdesign & Webentwicklung für Unternehmen",
    description:
      "Moderne Websites, Landingpages & Web-Apps mit klarer UX, schnellem Tech-Stack und Fokus auf Ergebnisse – für Unternehmen, Dienstleister und Solo-Selbstständige in Stuttgart und der DACH-Region.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Codavo Webstudio – Webdesign & Webentwicklung",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codavo Webstudio – Webdesign & Webentwicklung",
    description:
      "Wir entwickeln Websites, Landingpages & Web-Apps, die für dich arbeiten – statt nur gut auszusehen. Moderne UX, schnelle Technik, klare Ergebnisse.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      // optional, falls du sie später noch ergänzt:
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Codavo Webstudio",
    url: "https://www.codavo-webstudio.de",
    telephone: "+49 1511 1956479",
    image: "https://www.codavo-webstudio.de/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Naumannstr. 3",
      addressLocality: "Berglen",
      postalCode: "73663",
      addressCountry: "DE",
    },
    areaServed: ["DE", "AT", "CH"],
    sameAs: ["https://www.linkedin.com/company/codavo-webstudio"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Codavo Webstudio",
    url: "https://www.codavo-webstudio.de",
    inLanguage: "de-DE",
  };

  return (
    <html lang="de">
      <body className="relative min-h-screen bg-[#070C18] text-slate-200 antialiased">
        <GlobalBackground />
        <div className="relative z-10">
          <Header />
          <ScrollToTop />
          {children}

          {/* Floating CTA nur für Mobile */}
          <MobileCTA />

          {/* Schema.org: Organisation + Website */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </div>
      </body>
    </html>
  );
}
