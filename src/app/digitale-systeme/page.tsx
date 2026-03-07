import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import HeroChips from "@/components/hero/HeroChips";

export const metadata: Metadata = {
  title: "Digitale Systeme für skalierbares Wachstum | Codavo Webstudio",
  description:
    "Integrierte Systemarchitektur aus Website, Software und Automatisierung. Weniger manuell, schnellere Prozesse, mehr Conversion und klare Daten.",
  alternates: {
    canonical: "/digitale-systeme",
  },
  openGraph: {
    url: "/digitale-systeme",
    siteName: "Codavo Webstudio",
    title: "Digitale Systeme für skalierbares Wachstum | Codavo Webstudio",
    description:
      "Integrierte Systemarchitektur aus Website, Software und Automatisierung. Weniger manuell, schnellere Prozesse, mehr Conversion und klare Daten.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Codavo Webstudio",
      },
    ],
  },
  twitter: {
    title: "Digitale Systeme für skalierbares Wachstum | Codavo Webstudio",
    description:
      "Integrierte Systemarchitektur aus Website, Software und Automatisierung. Weniger manuell, schnellere Prozesse, mehr Conversion und klare Daten.",
    images: ["/og.jpg"],
  },
};

const faqs = [
  {
    q: "Für wen sind digitale Systeme besonders sinnvoll?",
    a: "Vor allem für Unternehmen mit 20 bis 250 Mitarbeitenden, die Wachstum nicht mehr mit manuellen Prozessen steuern wollen.",
  },
  {
    q: "Was ist der Unterschied zwischen Website und digitalem System?",
    a: "Eine Website informiert und generiert Anfragen. Ein digitales System verbindet Kundengewinnung, Operations und Datenflüsse in einem steuerbaren Gesamtprozess.",
  },
  {
    q: "Wie schnell sind erste Ergebnisse sichtbar?",
    a: "Nach der ersten Umsetzungsphase sind häufig bereits in wenigen Wochen messbare Verbesserungen bei Durchlaufzeiten und Lead-Qualität sichtbar.",
  },
  {
    q: "Kann ein bestehendes Team das System selbst nutzen?",
    a: "Ja. Wir entwickeln mit Fokus auf klare Bedienlogik, damit Vertrieb, Backoffice und Management effizient im selben System arbeiten.",
  },
  {
    q: "Wie läuft der Strategie-Call ab?",
    a: "Wir prüfen Ihre aktuelle Situation, priorisieren Hebel mit hohem ROI und definieren die sinnvollste Roadmap für ein skalierbares digitales System.",
  },
];

export default function DigitaleSystemePage() {
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
        name: "Digitale Systeme",
        item: "https://www.codavo-webstudio.de/digitale-systeme",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[calc(100vh-4rem)] pt-28 md:pt-32 pb-20">
        <div className="container max-w-5xl">
          <header className="section text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Für kleine und mittelständische Unternehmen
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Digitale Systeme für skalierbares Wachstum
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-3xl mx-auto">
              Codavo agiert als Systemarchitekt und verbindet Website, Business
              Software und Automatisierung zu einer belastbaren Infrastruktur für
              Wachstum, Effizienz und Wettbewerbsvorteile.
            </p>
            <div className="mt-8 md:mt-10">
              <HeroChips />
            </div>
            <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 w-full md:w-auto max-w-md md:max-w-none mx-auto">
              <Link
                href="/kontakt"
                data-track-event="strategy_call_click,cta_primary_click"
                data-track-label="Digitale Systeme Hero Strategie"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Strategie-Call buchen
              </Link>
              <Link
                href="/cases"
                data-track-event="cta_primary_click"
                data-track-label="Digitale Systeme Hero Case"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Case ansehen
              </Link>
            </div>
          </header>

          <section className="section section--alt">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Autorität durch Systemarchitektur statt Einzelmaßnahmen
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-4xl">
              Wir bauen nicht nur Webseiten. Wir entwickeln digitale Systeme, die
              Vertrieb, Delivery und Operations strukturiert verbinden. Dadurch wird
              aus einem Marketingprojekt ein belastbarer Wachstumsmotor.
            </p>
          </section>

          <section className="section">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Das Problem vieler KMU
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">Skalierung scheitert an manuellen Übergaben zwischen Teams.</li>
              <li className="card">Vertrieb arbeitet mit anderen Daten als Operations und Management.</li>
              <li className="card">Neue Tools erhöhen Komplexität, statt Prozesse zu vereinfachen.</li>
              <li className="card">Wettbewerber reagieren schneller, weil Systeme besser integriert sind.</li>
            </ul>
          </section>

          <section className="section section--alt">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Unsere Lösung
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-4xl">
              Wir verknüpfen Website als Lead-System, individuelle Software als
              Prozesskern und Automatisierung als Skalierungshebel. Ergebnis ist ein
              integriertes digitales System mit klaren Verantwortlichkeiten,
              zuverlässigen Datenflüssen und hoher Anpassbarkeit.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="card">
                <h3 className="text-base font-semibold text-white">Skalierung</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Prozesse werden so strukturiert, dass Wachstum nicht linear mehr
                  Personal erfordert.
                </p>
              </article>
              <article className="card">
                <h3 className="text-base font-semibold text-white">Automatisierung</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Wiederkehrende Abläufe laufen systemgestützt und mit klarer
                  Nachvollziehbarkeit.
                </p>
              </article>
              <article className="card">
                <h3 className="text-base font-semibold text-white">Effizienz</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Teams arbeiten mit denselben Daten, weniger Abstimmung und höherer
                  Prozessgeschwindigkeit.
                </p>
              </article>
            </div>
          </section>

          <section className="section">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Ergebnisse, die wir ermöglichen
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">Höhere Effizienz durch automatisierte Übergaben und klare Workflows.</li>
              <li className="card">Bessere Lead-Qualität durch systematische Qualifizierung ab Erstkontakt.</li>
              <li className="card">Mehr Prozesssicherheit durch zentrale Daten- und Rollenlogik.</li>
              <li className="card">Nachhaltige Skalierbarkeit durch modulare Systemarchitektur.</li>
            </ul>
          </section>

          <section className="section section--alt">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Erfolg, der messbar ist
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card">
                <p className="text-white font-semibold">Projektname - Multi-Standort Servicebetrieb</p>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Aufträge, Status und Übergaben waren nicht zentral steuerbar.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Digitales System mit Vertriebsstrecke, Auftragslogik und
                  automatisierten Benachrichtigungen.
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Konkretes Ergebnis: 31 % schnellere Auftragsabwicklung.
                </p>
              </article>
              <article className="card">
                <p className="text-white font-semibold">Projektname - B2B-Dienstleister</p>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Hoher Abstimmungsaufwand zwischen Vertrieb und Projektteam.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Integrierte Business-Software mit klaren Übergaben und
                  Dashboard für Management.
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Konkretes Ergebnis: 47 % weniger interne Nachfragen pro Projekt.
                </p>
              </article>
            </div>
          </section>

          <section className="section">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Häufige Fragen
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-3xl">
              Die wichtigsten Antworten zu digitalen Systemen, Skalierung,
              Automatisierung und strategischer Umsetzung für KMU.
            </p>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </section>

          <section className="section section--alt">
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Bereit für ein skalierbares digitales System?
              </h2>
              <p className="mt-3 text-slate-200 text-sm md:text-base">
                Wenn Ihr Unternehmen von 20 auf 250 Mitarbeitende wachsen soll,
                braucht es eine digitale Infrastruktur, die Schritt hält. Im
                Strategie-Call definieren wir die priorisierten Hebel für Ihren
                Wachstumspfad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  data-track-event="strategy_call_click,cta_primary_click"
                  data-track-label="Digitale Systeme Bottom Strategie"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
                >
                  Exklusiven Strategie-Call buchen
                </Link>
                <Link
                  href="/softwareloesungen-fuer-kmu"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
                >
                  Zu Softwarelösungen für KMU
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
