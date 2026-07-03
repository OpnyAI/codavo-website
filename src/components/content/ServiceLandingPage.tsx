import Link from "next/link";
import type { ReactNode } from "react";
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
  beforeFaq?: ReactNode;
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
  beforeFaq,
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
      <main className="min-h-screen overflow-x-hidden pt-20">
        <section className="section section--feature pt-16 md:pt-24">
          <div className="container max-w-6xl">
            <p className="eyebrow">
              {eyebrow}
            </p>
            <h1 className="display-title mt-5 max-w-5xl text-white">
              {h1}
            </h1>
            <p className="lede mt-7 max-w-3xl">
              {intro}
            </p>
            <div className="mt-9 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label={serviceName + " Hero Kontakt"}
                className="cta-primary"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
              <Link
                href="/website-check"
                data-track-event="cta_website_check_click"
                data-track-label={serviceName + " Hero Website Check"}
                className="cta-secondary"
              >
                Website-Check starten
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
              <p className="eyebrow">
                Direktantwort
              </p>
              <p className="text-xl font-medium leading-9 tracking-tight text-white md:text-2xl md:leading-10">{directAnswer}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <div className="grid gap-5 md:grid-cols-12 lg:gap-6">
              {sections.map((section, index) => (
                <article key={section.title} className={`card h-full md:col-span-6 ${index % 3 === 0 ? "lg:col-span-7" : index % 3 === 1 ? "lg:col-span-5" : "lg:col-span-6"}`}>
                  <span className="text-xs font-semibold tabular-nums text-indigo-300/70">0{index + 1}</span>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    {section.text}
                  </p>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
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

        {beforeFaq}

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <h2 className="section-title text-center text-white">
              Passende nächste Themen
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="card group flex min-h-64 h-full flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{link.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {link.description}
                  </p>
                  <span className="mt-auto inline-flex pt-8 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200">
                    Weiterlesen →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-4xl">
            <h2 className="section-title text-center text-white">
              Häufige Fragen unserer Kunden
            </h2>
            <div className="mt-12 md:mt-16">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.25)] md:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_280px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="lede relative mx-auto mt-5 max-w-2xl text-slate-200">{ctaText}</p>
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label={serviceName + " Abschluss Kontakt"}
                className="cta-primary relative mt-8"
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
