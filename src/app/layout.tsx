import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import GlobalBackground from "@/components/GlobalBackground";
import ScrollToTop from "@/components/ScrollToTop";
import TrackingEvents from "@/components/TrackingEvents";
import ConsentBanner from "@/components/ConsentBanner";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTAG_PRIMARY_ID = GA_ID || GOOGLE_ADS_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codavo-webstudio.de"),
  applicationName: "Codavo Webstudio",
  title: "Codavo Webstudio",
  description:
    "Webdesign, individuelle Softwarelösungen und digitale Systeme für KMU mit Fokus auf Effizienz, Automatisierung und skalierbares Wachstum.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Codavo",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codavo Webstudio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
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
    image: "https://www.codavo-webstudio.de/og.png",
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
      <head>
        <meta
          property="og:image"
          content="https://www.codavo-webstudio.de/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://www.codavo-webstudio.de/og.png"
        />

        {/* Consent Mode v2 defaults (MUST run BEFORE GTM loads) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;

  // Default: deny until user consents
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  // Extra privacy hardening
  gtag('set', 'ads_data_redaction', true);

  // Apply stored consent if present
  try {
    var raw = window.localStorage.getItem('codavo_consent_v1');
    if (raw) {
      var c = JSON.parse(raw);
      gtag('consent', 'update', c);
      window.dataLayer.push(Object.assign({event: 'consent_loaded'}, c));
    }
  } catch(e) {}
})();`,
          }}
        />
      </head>

      <body className="relative min-h-screen bg-[#070C18] text-slate-200 antialiased">
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}

        <GlobalBackground />

        <div className="relative z-10">
          <Header />
          <ScrollToTop />
          <TrackingEvents />
          {children}

          <MobileCTA />

          {/* Cookie / Consent Banner */}
          <ConsentBanner />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </div>

        {GTM_ID ? (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        ) : null}

        {GTAG_PRIMARY_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_PRIMARY_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
gtag('config', '${GOOGLE_ADS_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
