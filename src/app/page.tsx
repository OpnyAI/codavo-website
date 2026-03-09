import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Webdesign, Software & digitale Systeme für Unternehmen | Codavo Webstudio",
  description:
    "Codavo Webstudio entwickelt moderne Websites, individuelle Softwarelösungen und digitale Systeme für Unternehmen. Schnell, technisch sauber und auf Performance sowie Anfragen optimiert.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: "Codavo Webstudio",
    title:
      "Webdesign, Software & digitale Systeme für Unternehmen | Codavo Webstudio",
    description:
      "Codavo Webstudio entwickelt moderne Websites, individuelle Softwarelösungen und digitale Systeme für Unternehmen. Schnell, technisch sauber und auf Performance sowie Anfragen optimiert.",
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
    title:
      "Webdesign, Software & digitale Systeme für Unternehmen | Codavo Webstudio",
    description:
      "Codavo Webstudio entwickelt moderne Websites, individuelle Softwarelösungen und digitale Systeme für Unternehmen. Schnell, technisch sauber und auf Performance sowie Anfragen optimiert.",
    images: ["/og.jpg"],
  },
};

const homeFaqs = [
  {
    q: "Was kostet eine individuelle Softwarelösung für KMU?",
    a: "Der Aufwand hängt von Prozessen, Schnittstellen und Rollenlogik ab. Nach dem Strategiegespräch definieren wir Scope, Roadmap und ein transparentes Angebot.",
  },
  {
    q: "Für wen lohnt sich eine Web App Entwicklung?",
    a: "Für KMU, die wiederkehrende Abläufe digitalisieren, Angebote schneller erstellen oder interne Daten zentral nutzbar machen möchten.",
  },
  {
    q: "Wie lange dauert die Entwicklung eines digitalen Systems?",
    a: "Erste Module sind oft in wenigen Wochen produktiv. Größere Systeme setzen wir in Etappen um, damit Ergebnisse früh messbar werden.",
  },
  {
    q: "Kann Webdesign direkt mit Automatisierung kombiniert werden?",
    a: "Ja. Wir verbinden Webdesign, Webentwicklung und Automatisierungen in einem System, damit Leads, Daten und Prozesse durchgängig funktionieren.",
  },
  {
    q: "Wie startet die Zusammenarbeit mit Codavo?",
    a: "Wir beginnen mit einem Strategie-Call, analysieren Engpässe und definieren eine klare Systemarchitektur mit Prioritäten nach ROI.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Codavo Webstudio",
    url: "https://www.codavo-webstudio.de",
    logo: "https://www.codavo-webstudio.de/images/logo/codavo-logo-light.png",
    sameAs: ["https://www.linkedin.com/company/codavo-webstudio"],
  };

  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />

        <section className="section">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Das Problem vieler KMU
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">
                Manuelle Abläufe kosten täglich Zeit und binden Kapazität im
                Vertrieb.
              </li>
              <li className="card">
                Website, CRM und interne Tools arbeiten isoliert statt als
                durchgängiges System.
              </li>
              <li className="card">
                Angebots- und Follow-up-Prozesse sind langsam und schwer
                skalierbar.
              </li>
              <li className="card">
                Wachstum stockt, weil die digitale Infrastruktur nicht mit dem
                Unternehmen mitwächst.
              </li>
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Digitale Systeme statt Einzelprojekte
            </h2>
            <p className="mt-4 text-center text-slate-300 text-sm md:text-base max-w-3xl mx-auto">
              Wir verknüpfen Webdesign als Kundengewinnungssystem,
              Webentwicklung als skalierbare Infrastruktur und Web App
              Entwicklung als Business-Software. So entsteht ein integriertes
              Setup statt einzelner Insellösungen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/softwareloesungen-fuer-kmu"
                className="rounded-full border border-white/25 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
              >
                Zu Softwarelösungen für KMU
              </Link>
              <Link
                href="/digitale-systeme"
                className="rounded-full border border-white/25 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
              >
                Zu Digitale Systeme
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Ergebnisse, die wir ermöglichen
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 text-slate-300 text-sm md:text-base">
              <li className="card">
                Höhere Effizienz durch automatisierte Standardprozesse in
                Vertrieb und Operations.
              </li>
              <li className="card">
                Mehr qualifizierte Leads durch klare Nutzerführung und bessere
                Conversion-Strecken.
              </li>
              <li className="card">
                Entlastete Teams, weil wiederkehrende Aufgaben systematisch
                digitalisiert werden.
              </li>
              <li className="card">
                Skalierbare Systemarchitektur, die mit Umsatz, Team und
                Anforderungen wächst.
              </li>
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Erfolg, der messbar ist
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="card">
                <h4 className="text-lg font-semibold text-white">
                  Projektname: Sales-Workflow Plattform
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Angebote wurden manuell erstellt, Nachverfolgung war
                  uneinheitlich.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Webbasierte Software mit Angebotslogik,
                  Status-Tracking und CRM-Schnittstelle.
                </p>
                <p className="mt-2 text-sm text-slate-200 font-medium">
                  Ergebnis: 42 % schnellere Angebotsdurchlaufzeit in 90 Tagen.
                </p>
              </article>
              <article className="card">
                <h4 className="text-lg font-semibold text-white">
                  Projektname: Service-Portal KMU
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Problem: Anfragen und Übergaben liefen über E-Mail-Chaos.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Lösung: Digitales System aus Website, Kundenbereich und
                  automatisierten Workflows.
                </p>
                <p className="mt-2 text-sm text-slate-200 font-medium">
                  Ergebnis: 11 Stunden Zeitersparnis pro Woche im Team.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />

        <section className="section">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base text-center">
              Antworten für Unternehmen, die Webdesign, Webentwicklung und
              individuelle Softwarelösungen strategisch kombinieren möchten.
            </p>
            <div className="mt-10">
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-4xl text-center rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Bereit für ein skalierbares digitales System?
            </h2>
            <p className="mt-3 text-slate-200 text-sm md:text-base">
              Wenn Sie Webdesign, Webentwicklung und Business-Software in einem
              klaren System bündeln möchten, planen wir den sinnvollsten
              Startpunkt im Strategiegespräch.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                data-track-event="strategy_call_click,cta_primary_click"
                data-track-label="Home Strategie CTA"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Strategie-Call buchen
              </Link>
              <Link
                href="/cases"
                data-track-event="cta_primary_click"
                data-track-label="Home CTA Case"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Case ansehen
              </Link>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
