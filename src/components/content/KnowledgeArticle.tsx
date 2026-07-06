import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { ORGANIZATION_ID, SEO_CONFIG } from "@/lib/seo";
import type { ContentSection } from "@/components/content/ServiceLandingPage";
import type { KnowledgeLink } from "@/lib/knowledge";

type Props = {
  path: string;
  h1: string;
  intro: string;
  directAnswer: string;
  sections: readonly ContentSection[];
  faqs: FAQItem[];
  related: readonly { href: string; label: string }[];
  primaryMoneyPage: KnowledgeLink;
  secondaryLinks: readonly KnowledgeLink[];
};

export default function KnowledgeArticle(props: Props) {
  const url = SEO_CONFIG.domain + props.path;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.h1,
    description: props.intro,
    url,
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "de-DE",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SEO_CONFIG.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: SEO_CONFIG.domain + "/wissen" },
      { "@type": "ListItem", position: 3, name: props.h1, item: url },
    ],
  };

  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-20">
        <article>
          <header className="section section--feature pt-14 md:pt-20">
            <div className="container max-w-5xl">
              <Link href="/wissen" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Wissen
              </Link>
              <p className="eyebrow mt-12">Codavo Wissen</p>
              <h1 className="display-title mt-5 max-w-5xl text-white">{props.h1}</h1>
              <p className="lede mt-7 max-w-3xl">{props.intro}</p>
            </div>
          </header>

          <section className="section section--quiet">
            <div className="container max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
                <div>
                  <p className="eyebrow">Kurzantwort</p>
                </div>
                <p className="text-xl font-medium leading-9 tracking-tight text-white md:text-2xl md:leading-10">
                  {props.directAnswer}
                </p>
              </div>
            </div>
          </section>

          <div className="section">
            <div className="container max-w-5xl">
              <div className="divide-y divide-white/8 border-y border-white/8">
                {props.sections.map((section, index) => (
                  <section key={section.title} className="grid gap-6 py-10 md:py-14 lg:grid-cols-[0.12fr_0.88fr] lg:gap-10">
                    <span className="text-xs font-semibold tabular-nums text-indigo-300/70">0{index + 1}</span>
                    <div>
                      <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                        {section.text}
                      </p>
                      {section.bullets ? (
                        <ul className="mt-7 grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <section className="section section--quiet">
            <div className="container max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
                <div>
                  <p className="eyebrow">Nächster Schritt</p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">Passende Einordnung</h2>
                </div>
                <div className="grid gap-4">
                  <Link
                    href={props.primaryMoneyPage.href}
                    className="group rounded-3xl border border-indigo-300/20 bg-indigo-400/[0.07] p-6 transition hover:border-indigo-300/35 hover:bg-indigo-400/[0.1]"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300/80">Primäre Leistungsseite</span>
                    <h3 className="mt-3 text-xl font-semibold text-white">{props.primaryMoneyPage.label}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{props.primaryMoneyPage.description}</p>
                  </Link>
                  {props.secondaryLinks.length ? (
                    <div className="grid gap-3 md:grid-cols-3">
                      {props.secondaryLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-2xl border border-white/8 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300 transition hover:border-indigo-300/25 hover:text-white"
                        >
                          <span className="font-medium text-white">{link.label}</span>
                          <span className="mt-2 block text-slate-400">{link.description}</span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          <section className="section section--alt">
            <div className="container max-w-4xl">
              <h2 className="section-title text-center text-white">Häufige Fragen</h2>
              <div className="mt-12 md:mt-16">
                <FAQAccordion items={props.faqs} />
              </div>
            </div>
          </section>

          <section className="section section--quiet">
            <div className="container max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">Weiterführendes Wissen</h2>
                </div>
                <div className="divide-y divide-white/8 border-y border-white/8">
                  {props.related.map((link) => (
                    <Link key={link.href} href={link.href} className="group flex items-center justify-between gap-4 py-5 text-slate-200 transition hover:text-white">
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_250px_at_50%_0%,rgba(129,140,248,0.13),transparent_70%)]" />
                <h2 className="relative text-2xl font-semibold tracking-tight text-white md:text-3xl">Was bedeutet das für Ihre Website?</h2>
                <p className="relative mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Im Erstgespräch oder Website-Check ordnen wir die wichtigsten Hebel für Ihr Unternehmen ein.</p>
                <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Wissen Kontakt" className="cta-primary">Erstgespräch vereinbaren</Link>
                  <Link href="/website-check" data-track-event="cta_website_check_click" data-track-label="Wissen Website Check" className="cta-secondary">Website-Check starten</Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Footer />
    </>
  );
}
