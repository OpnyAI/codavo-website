import "./globals.css";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codavo-webstudio.de"),
  title: {
    default: "Codavo Webstudio – Websites & Web-Apps",
    template: "%s | Codavo Webstudio",
  },
  description:
    "Codavo Webstudio entwickelt moderne Websites und Web-Apps mit klarer UX, performanter Technik und Fokus auf Ergebnisse – für Solo-Selbstständige, Unternehmen und Teams jeder Größe.",
  openGraph: {
    type: "website",
    title: "Codavo Webstudio – Websites & Web-Apps",
    description:
      "Moderne Websites & Web-Apps, die für dich arbeiten: klare UX, schneller Stack, messbare Ergebnisse.",
    url: "https://www.codavo-webstudio.de",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Codavo Webstudio – Websites & Web-Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codavo Webstudio – Websites & Web-Apps",
    description:
      "Codavo Webstudio entwickelt Websites & Web-Apps, die für dich arbeiten – statt nur gut auszusehen.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "https://www.codavo-webstudio.de" },
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

        {/* Organization / ProfessionalService JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
