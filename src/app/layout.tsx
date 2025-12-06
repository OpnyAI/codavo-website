import "./globals.css";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codavo-webstudio.de"),

  title: {
    default: "Codavo Webstudio – Webdesign Agentur für moderne Websites",
    template: "%s | Codavo Webstudio",
  },

  description:
    "Codavo Webstudio ist deine Webdesign Agentur für moderne, schnelle Websites & Web-Apps. Wir realisieren Projekte in 1–4 Wochen für Kund:innen in Stuttgart, ganz Deutschland und der DACH-Region.",

  openGraph: {
    type: "website",
    url: "https://www.codavo-webstudio.de",
    title: "Codavo Webstudio – Webdesign Agentur für moderne Websites",
    description:
      "Moderne Websites & Web-Apps mit klarer UX, schnellem Tech-Stack und Fokus auf Ergebnisse – für Unternehmen, Dienstleister und Solo-Selbstständige in Stuttgart und der gesamten DACH-Region.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Codavo Webstudio – Webdesign Agentur für moderne Websites & Web-Apps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codavo Webstudio – Webdesign Agentur",
    description:
      "Wir entwickeln Websites & Web-Apps, die für dich arbeiten – statt nur gut auszusehen. Moderne UX, schnelle Technik, klare Ergebnisse.",
    images: ["/og.jpg"],
  },

  alternates: {
    canonical: "https://www.codavo-webstudio.de",
  },
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
    areaServed: "DE",
    sameAs: ["https://www.linkedin.com/company/codavo-webstudio"],
  };

  return (
    <html lang="de">
      <body className="bg-[#0a0f1a] text-slate-200">
        <Header />
        {children}

        {/* Floating CTA nur für Mobile */}
        <MobileCTA />

        {/* Schema.org: Organisation + lokales Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
