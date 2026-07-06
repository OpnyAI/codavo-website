import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import GermanyMapVisual from "@/components/locations/GermanyMapVisual";
import {
  alphabeticPrimaryLocations,
  featuredPrimaryLocations,
} from "@/lib/locations";
import { createPageMetadata, ORGANIZATION_ID, SEO_CONFIG } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/standorte",
  title: "Webdesign, Landingpages & Funnel in Deutschland | Codavo",
  description:
    "Professionelle Unternehmenswebsites, Landingpages, Funnel und Weblösungen für Unternehmen in Deutschland – individuell entwickelt von Codavo.",
  imageAlt: "Codavo – Webdesign, Landingpages und Funnel in Deutschland",
});

const faqs: FAQItem[] = [
  {
    q: "Bietet Codavo Webdesign für Unternehmen in ganz Deutschland an?",
    a: "Ja. Codavo entwickelt professionelles Webdesign für Unternehmen in ganz Deutschland. Projekte werden mit klaren digitalen Abstimmungen geführt; persönliche Termine sind nach Absprache ebenfalls möglich.",
  },
  {
    q: "Welche Leistungen bietet Codavo deutschlandweit an?",
    a: "Codavo bietet Unternehmenswebsites, Landingpages, Funnel-Systeme, Web-Apps sowie Hosting und Wartung an. Strategie, UX/UI, Inhalte und technische Entwicklung werden dabei als zusammenhängendes digitales System geplant.",
  },
  {
    q: "Wie hilft eine professionelle Website dabei, mehr Anfragen zu erhalten?",
    a: "Eine professionelle Website erleichtert qualifizierte Anfragen durch eine klare Positionierung, verständliche Leistungen, überzeugende Belege und eindeutige Kontaktwege. Sie kann die Kundengewinnung unterstützen, garantiert aber weder eine bestimmte Anfragezahl noch Umsatz.",
  },
  {
    q: "Werden Websites auch für Google, ChatGPT und Gemini optimiert?",
    a: "Ja. Codavo berücksichtigt SEO, AEO und LLMO durch klare Themenstrukturen, direkte Antworten, semantisches HTML und strukturierte Daten. Das verbessert die technische Verständlichkeit für Google, ChatGPT, Gemini und andere KI-Systeme, ohne Rankings oder Erwähnungen zu versprechen.",
  },
  {
    q: "Was ist der Unterschied zwischen Website, Landingpage und Funnel?",
    a: "Eine Website bildet das Unternehmen und mehrere Leistungen umfassend ab. Eine Landingpage konzentriert sich auf ein Angebot und eine Handlung. Ein Funnel verbindet mehrere aufeinander abgestimmte Schritte von der ersten Aufmerksamkeit bis zur Anfrage oder Buchung.",
  },
  {
    q: "Wie läuft ein Website-Projekt mit Codavo ab?",
    a: "Der Ablauf beginnt mit Analyse und Zielklärung. Danach folgen Inhalts- und UX-Konzept, individuelles Design, Entwicklung, Qualitätssicherung und Launch. Zuständigkeiten, Freigaben und nächste Schritte bleiben während des gesamten Projekts transparent.",
  },
];

const groupedLocations = alphabeticPrimaryLocations.reduce<Record<string, typeof alphabeticPrimaryLocations>>(
  (groups, location) => {
    const letter = location.city[0].toUpperCase();
    groups[letter] = [...(groups[letter] ?? []), location];
    return groups;
  },
  {},
);

const pageUrl = `${SEO_CONFIG.domain}/standorte`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Webdesign, Landingpages und Funnel für Unternehmen in Deutschland",
      description: "Deutschlandweite Übersicht der Codavo-Leistungsgebiete für Websites, Landingpages, Funnel und Weblösungen.",
      inLanguage: "de-DE",
      isPartOf: { "@id": `${SEO_CONFIG.domain}/#website` },
      about: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#locations` },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#locations`,
      name: "Indexierbare Codavo-Leistungsgebiete",
      numberOfItems: alphabeticPrimaryLocations.length,
      itemListElement: alphabeticPrimaryLocations.map((location, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: location.city,
        url: `${pageUrl}/${location.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${SEO_CONFIG.domain}/` },
        { "@type": "ListItem", position: 2, name: "Standorte", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

const services = [
  { href: "/webdesign", label: "Unternehmenswebsites", text: "Individuelle Websites für Positionierung, Vertrauen und langfristige Sichtbarkeit." },
  { href: "/landingpage-erstellen-lassen", label: "Landingpages", text: "Fokussierte Zielseiten für konkrete Angebote, Kampagnen und qualifizierte Anfragen." },
  { href: "/funnel-erstellen-lassen", label: "Funnel-Systeme", text: "Klar aufgebaute Schritte von der ersten Botschaft bis zur gewünschten Handlung." },
  { href: "/web-app-entwicklung", label: "Web-Apps", text: "Individuelle Anwendungen für Portale, digitale Services und interne Prozesse." },
  { href: "/hosting-wartung", label: "Hosting & Wartung", text: "Technische Betreuung, Updates und verlässliche Weiterentwicklung nach dem Launch." },
] as const;

export default function LocationsPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-20">
        <section className="section section--feature pt-16 md:pt-24">
          <div className="container max-w-6xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="transition hover:text-white">Startseite</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-300">Standorte</span>
            </nav>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow">Deutschlandweite Zusammenarbeit</p>
                <h1 className="display-title mt-5 max-w-4xl text-white">Webdesign, Landingpages und Funnel für Unternehmen in Deutschland</h1>
                <p className="lede mt-7 max-w-3xl">
                  Codavo entwickelt professionelle Unternehmenswebsites, Landingpages und Funnel-Systeme für Unternehmen in ganz Deutschland – mit klarer Strategie, individueller Entwicklung und Struktur für Suchmaschinen und KI-Systeme.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                  {["Individuelle Entwicklung", "Klare Projektführung", "Termine digital oder persönlich nach Absprache"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-300" aria-hidden />{item}</span>
                  ))}
                </div>
                <div className="mt-9 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
                  <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Standorte Hub Hero Kontakt" className="cta-primary">Projekt besprechen</Link>
                  <Link href="/website-check" data-track-event="cta_website_check_click" data-track-label="Standorte Hub Hero Website Check" className="cta-secondary">Website-Check starten</Link>
                </div>
              </div>
              <GermanyMapVisual />
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <p className="eyebrow">Wichtige Städte</p>
            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="section-title max-w-3xl text-white">Individuelle Seiten für zentrale Wirtschaftsräume</h2>
              <p className="lede max-w-md">Jede verlinkte Stadt verfügt über eigenständige Inhalte zu Wirtschaftsstruktur, Herausforderungen und passendem Projektansatz.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPrimaryLocations.map((location) => (
                <Link key={location.slug} href={`/standorte/${location.slug}`} className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:border-indigo-300/20 hover:bg-white/[0.04]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{location.state}</span>
                  <span className="mt-4 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                    {location.city}<ArrowRight className="h-4 w-4 text-indigo-300 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
              <div>
                <p className="eyebrow">Weitere Städte A–Z</p>
                <h2 className="section-title mt-5 text-white">Webdesign für Städte und Wirtschaftsregionen in Deutschland</h2>
              </div>
              <p className="lede">
                Codavo unterstützt Unternehmen in vielen deutschen Städten mit professionellen Websites, Landingpages, Funnel-Systemen und Weblösungen – strukturiert für Vertrauen, Sichtbarkeit und qualifizierte Anfragen.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(groupedLocations).map(([letter, locations]) => (
                <section key={letter} aria-labelledby={`letter-${letter}`} className="rounded-3xl border border-white/8 bg-white/[0.025] p-6 md:p-7">
                  <h3 id={`letter-${letter}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">{letter}</h3>
                  <ul className="mt-5 space-y-1">
                    {locations.map((location) => (
                      <li key={location.slug}>
                        <Link href={`/standorte/${location.slug}`} className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white">
                          <span>{location.city}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-indigo-300" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="section-title mt-5 max-w-4xl text-white">Digitale Lösungen passend zum Geschäftsziel</h2>
            <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <Link key={item.href} href={item.href} className="card group flex h-full min-w-0 flex-col">
                  <h3 className="break-words text-xl font-semibold leading-tight text-white md:text-2xl">{item.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-indigo-300">Mehr erfahren<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
                </Link>
              ))}
            </div>
            <aside className="mt-6 rounded-3xl border border-indigo-300/15 bg-indigo-400/[0.06] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white">Digitale Systeme als verbindende Architektur</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                Digitale Systeme verbinden Website, Funnel, Software, Prozesse,
                Tracking und Automatisierung zu einer durchgängigen Architektur.
              </p>
              <Link href="/digitale-systeme" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white">
                Digitale Systeme einordnen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-4xl">
            <p className="eyebrow text-center">FAQ</p>
            <h2 className="section-title mt-5 text-center text-white">Häufige Fragen unserer Kunden</h2>
            <div className="mt-12 md:mt-16"><FAQAccordion items={faqs} /></div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center md:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_280px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">Welcher digitale Schritt bringt Ihr Unternehmen weiter?</h2>
              <p className="lede relative mx-auto mt-5 max-w-2xl">Im Erstgespräch klären wir, ob Unternehmenswebsite, Landingpage, Funnel oder Web-App den wirtschaftlich sinnvollsten Hebel bietet.</p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Standorte Hub Abschluss Kontakt" className="cta-primary">Projekt besprechen</Link>
                <Link href="/website-check" data-track-event="cta_website_check_click" data-track-label="Standorte Hub Abschluss Website Check" className="cta-secondary">Website-Check starten</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Footer />
    </>
  );
}
