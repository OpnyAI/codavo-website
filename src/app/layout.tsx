import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import GlobalBackground from "@/components/GlobalBackground";
import ScrollToTop from "@/components/ScrollToTop";
import TrackingEvents from "@/components/TrackingEvents";
import ConsentBanner from "@/components/ConsentBanner";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";
import {
  createPageMetadata,
  globalStructuredData,
  SEO_CONFIG,
} from "@/lib/seo";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTAG_PRIMARY_ID = GTM_ID ? undefined : GA_ID || GOOGLE_ADS_ID;

export const metadata: Metadata = {
  ...createPageMetadata(),
  metadataBase: new URL(SEO_CONFIG.domain),
  applicationName: SEO_CONFIG.companyName,
  verification: {
    other: {
      "facebook-domain-verification": "jw1b3dc5ucya1833ke985bnsmdgdfi",
    },
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
  return (
    <html lang="de">
      <head>
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
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(globalStructuredData),
            }}
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
