import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import HeroChips from "@/components/hero/HeroChips";

export const metadata: Metadata = {
  title: "Individuelle Softwarelösungen für KMU | Codavo",
  description:
    "Maßgeschneiderte Business-Software statt Standard-Tools: Automatisierung, Portale, Angebotsprozesse und KI-Integration - datenbasiert und skalierbar.",
  alternates: {
    canonical: "/softwareloesungen-fuer-kmu",
  },
  openGraph: {
    url: "/softwareloesungen-fuer-kmu",
    title: "Individuelle Softwarelösungen für KMU | Codavo",
    description:
      "Maßgeschneiderte Business-Software statt Standard-Tools: Automatisierung, Portale, Angebotsprozesse und KI-Integration - datenbasiert und skalierbar.",
  },
  twitter: {
    title: "Individuelle Softwarelösungen für KMU | Codavo",
    description:
      "Maßgeschneiderte Business-Software statt Standard-Tools: Automatisierung, Portale, Angebotsprozesse und KI-Integration - datenbasiert und skalierbar.",
  },
};

const faqs = [
  {
    q: "Was kostet eine individuelle Softwarelösung?",
    a: "Die Kosten hängen von Prozessen, Schnittstellen und Nutzerrollen ab. Nach dem Strategiegespräch erhalten Sie einen klaren Scope mit transparentem Budgetrahmen.",
  },
  {
    q: "Für wen lohnt sich Business Software für KMU?",
    a: "Für Unternehmen, die wiederkehrende Abläufe digitalisieren, Fehlerquoten senken und Entscheidungen schneller auf Basis zentraler Daten treffen wollen.",
  },
  {
    q: "Wie lange dauert es, Software entwickeln zu lassen?",
    a: "Erste Module können oft in wenigen Wochen live gehen. Größere Plattformen entwickeln wir iterativ in klaren Etappen mit messbaren Zwischenzielen.",
  },
  {
    q: "Ist webbasierte Software auch für mobile Teams geeignet?",
    a: "Ja. Webbasierte Software ist geräteunabhängig nutzbar und lässt sich für Außendienst, Backoffice und Management gleichermaßen optimieren.",
  },
  {
    q: "Kann bestehende Software angebunden werden?",
    a: "Ja. Wir integrieren bestehende Systeme wie CRM, ERP oder Buchhaltung über APIs, damit keine Insellösungen entstehen.",
  },
];

export default function SoftwareloesungenPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://www.codavo-webstudio.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Softwarelösungen für KMU",
        item: "https://www.codavo-webstudio.de/softwareloesungen-fuer-kmu",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[calc(100vh-4rem)] pt-28 md:pt-32 pb-20">
        <div className="container max-w-5xl">
          <header className="section text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Software entwickeln lassen · Business Software KMU · Webbasierte Software
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Individuelle Softwarelösungen für KMU
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-3xl mx-auto">
              Wir entwickeln individuelle Softwarelösungen, die Prozesse vereinfachen,
              Entscheidungen beschleunigen und Teams entlasten. Ihr System wird auf
              Ihre Abläufe gebaut, nicht auf die Grenzen eines Standard-Tools.
            </p>
            <div className="mt-8 md:mt-10">
              <HeroChips />
            </div>
            <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 w-full md:w-auto max-w-md md:max-w-none mx-auto">
              <Link
                href="/kontakt"
                data-track-event="strategy_call_click,cta_primary_click"
                data-track-label="Software Hero Strategie"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Strategie-Call buchen
              </Link>
              <Link
                href="/cases"
                data-track-event="cta_primary_click"
                data-track-label="Software Hero Case"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Case ansehen
              </Link>
              <Link
                href="/web-app-entwicklung"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Web-App Entwicklung
              </Link>
            </div>
          </header>

          <section className="section section--alt">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Das Problem vieler KMU
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">Standard-Tools bilden Kernprozesse nur teilweise ab.</li>
              <li className="card">Daten liegen in mehreren Systemen ohne verlässliche Übergabe.</li>
              <li className="card">Manuelle Arbeit in Angebot, Abwicklung und Reporting bremst Wachstum.</li>
              <li className="card">Zusatzkosten steigen, ohne dass echte Automatisierung entsteht.</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Unsere Lösung
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-4xl">
              Als Systempartner verbinden wir Website, webbasierte Software und
              Automatisierung zu einer stabilen Architektur. Das Ergebnis ist eine
              individuelle Softwarelösung, die auf Ihren Geschäftsprozess optimiert ist,
              sauber integrierbar bleibt und langfristig erweiterbar ist.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="card">
                <h3 className="text-base font-semibold text-white">Systemanalyse</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Wir identifizieren Engpässe, definieren ROI-Hebel und priorisieren
                  Funktionen nach Business-Impact.
                </p>
              </article>
              <article className="card">
                <h3 className="text-base font-semibold text-white">Softwarearchitektur</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Wir entwickeln eine skalierbare Grundlage für Rollen, Datenflüsse,
                  Schnittstellen und zukünftige Module.
                </p>
              </article>
              <article className="card">
                <h3 className="text-base font-semibold text-white">Automatisierung</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Wiederkehrende Schritte werden automatisiert, damit Ihr Team mehr Zeit
                  für Umsatztreiber statt Administration hat.
                </p>
              </article>
            </div>
          </section>

          <section className="section section--alt">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Ergebnisse, die wir ermöglichen
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">Mehr Effizienz durch klar definierte und automatisierte Abläufe.</li>
              <li className="card">Bessere Lead- und Kundenprozesse durch zentrale Systemlogik.</li>
              <li className="card">Weniger operative Reibung durch integrierte Daten und Workflows.</li>
              <li className="card">Skalierbarkeit ohne Tool-Chaos bei wachsendem Team und Umsatz.</li>
            </ul>
          </section>

          <section className="section">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Erfolg, der messbar ist
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card">
                <p className="text-white font-semibold">Projektname - Angebotsplattform KMU</p>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Hoher manueller Aufwand in der Angebotserstellung.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Individuelle Softwarelösung mit automatisierten Angebotsflows.
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Konkretes Ergebnis: 38 % schnellere Angebotserstellung.
                </p>
                <p className="mt-2 text-xs text-slate-400">Testimonial-Platzhalter</p>
              </article>
              <article className="card">
                <p className="text-white font-semibold">Projektname - Service-Steuerung</p>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Informationen aus E-Mail, Excel und Telefon waren verteilt.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Webbasierte Software mit Aufgabenlogik und Statusautomatisierung.
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Konkretes Ergebnis: 9 Stunden Zeitersparnis pro Woche.
                </p>
                <p className="mt-2 text-xs text-slate-400">Testimonial-Platzhalter</p>
              </article>
            </div>
          </section>

          <section className="section section--alt">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Häufige Fragen
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-3xl">
              Antworten zu individueller Softwarelösung, Business Software KMU,
              Entwicklungsdauer und webbasierter Software.
            </p>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </section>

          <section className="section">
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Bereit für ein skalierbares digitales System?
              </h2>
              <p className="mt-3 text-slate-200 text-sm md:text-base">
                Wenn Sie Software entwickeln lassen möchten, die direkt in Ihre
                Wertschöpfung einzahlt, planen wir im Strategiegespräch die sinnvollen
                nächsten Schritte.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  data-track-event="strategy_call_click,cta_primary_click"
                  data-track-label="Software Bottom Strategie"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
                >
                  Strategie-Call buchen
                </Link>
                <Link
                  href="/digitale-systeme"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
                >
                  Weiter zu Digitale Systeme
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
                >
                  Zur Startseite
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

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
