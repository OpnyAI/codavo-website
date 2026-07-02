import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { ORGANIZATION_ID, SEO_CONFIG } from "@/lib/seo";

export type ContentSection = {
  title: string;
  text: string;
  bullets?: readonly string[];
};

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

type Props = {
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  directAnswer: string;
  sections: readonly ContentSection[];
  relatedLinks: readonly RelatedLink[];
  faqs: FAQItem[];
  serviceName: string;
  serviceDescription: string;
  ctaTitle?: string;
  ctaText?: string;
};

export default function ServiceLandingPage({
  path,
  eyebrow,
  h1,
  intro,
  directAnswer,
  sections,
  relatedLinks,
  faqs,
  serviceName,
  serviceDescription,
  ctaTitle = "Lassen Sie uns Ihr Projekt sinnvoll einordnen.",
  ctaText = "Im kostenlosen Erstgespräch klären wir Ziel, Umfang und den wirtschaftlich passenden nächsten Schritt.",
}: Props) {
  const pageUrl = SEO_CONFIG.domain + path;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": pageUrl + "#service",
    name: serviceName,
    description: serviceDescription,
    url: pageUrl,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: ["DE", "AT", "CH"],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SEO_CONFIG.domain + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: SEO_CONFIG.domain + "/leistungen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-24 md:pt-28">
        <section className="section pt-10 md:pt-14">
          <div className="container max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              {eyebrow}
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {h1}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              {intro}
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label={serviceName + " Hero Kontakt"}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 font-medium text-white"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
              <Link
                href="/website-check"
                data-track-event="cta_website_check_click"
                data-track-label={serviceName + " Hero Website Check"}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 py-3 font-medium text-slate-200 hover:bg-white/10"
              >
                Website-Check starten
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Direktantwort
              </p>
              <p className="mt-3 text-lg leading-8 text-white">{directAnswer}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2">
              {sections.map((section) => (
                <article key={section.title} className="card h-full">
                  <h2 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
                    {section.text}
                  </p>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-5">
                          <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-5xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Passende nächste Themen
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="card block h-full">
                  <h3 className="text-lg font-semibold text-white">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {link.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-indigo-300">
                    Weiterlesen →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Häufige Fragen unserer Kunden
            </h2>
            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-5xl">
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 text-center md:p-10">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-200">{ctaText}</p>
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label={serviceName + " Abschluss Kontakt"}
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 font-medium text-white"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Footer />
    </>
  );
}
