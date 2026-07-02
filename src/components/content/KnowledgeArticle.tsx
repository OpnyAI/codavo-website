import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { ORGANIZATION_ID, SEO_CONFIG } from "@/lib/seo";
import type { ContentSection } from "@/components/content/ServiceLandingPage";

type Props = {
  path: string;
  h1: string;
  intro: string;
  directAnswer: string;
  sections: readonly ContentSection[];
  faqs: FAQItem[];
  related: readonly { href: string; label: string }[];
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
      <main className="min-h-screen overflow-x-hidden pt-24">
        <article>
          <header className="section pt-12 text-center">
            <div className="container max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Codavo Wissen</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{props.h1}</h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{props.intro}</p>
            </div>
          </header>
          <section className="section section--alt"><div className="container max-w-4xl"><div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-6 md:p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">Kurzantwort</p><p className="mt-3 text-lg leading-8 text-white">{props.directAnswer}</p></div></div></section>
          <div className="section"><div className="container max-w-4xl space-y-6">{props.sections.map((section) => <section key={section.title} className="card"><h2 className="text-2xl font-semibold text-white md:text-3xl">{section.title}</h2><p className="mt-4 leading-7 text-slate-300">{section.text}</p>{section.bullets ? <ul className="mt-5 space-y-2 text-slate-300">{section.bullets.map((b) => <li key={b}>• {b}</li>)}</ul> : null}</section>)}</div></div>
          <section className="section section--alt"><div className="container max-w-4xl"><h2 className="text-center text-3xl font-semibold text-white md:text-5xl">Häufige Fragen</h2><div className="mt-10"><FAQAccordion items={props.faqs} /></div></div></section>
          <section className="section"><div className="container max-w-4xl"><h2 className="text-2xl font-semibold text-white">Weiterführendes Wissen</h2><div className="mt-5 flex flex-wrap gap-3">{props.related.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">{link.label}</Link>)}</div><div className="mt-10 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 text-center"><h2 className="text-2xl font-semibold text-white">Was bedeutet das für Ihre Website?</h2><p className="mt-3 text-slate-300">Im Erstgespräch oder Website-Check ordnen wir die wichtigsten Hebel für Ihr Unternehmen ein.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Wissen Kontakt" className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 font-medium text-white">Erstgespräch vereinbaren</Link><Link href="/website-check" data-track-event="cta_website_check_click" data-track-label="Wissen Website Check" className="rounded-full border border-white/25 px-5 py-3 font-medium text-white">Website-Check starten</Link></div></div></div></section>
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Footer />
    </>
  );
}
