import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import WebsiteCheckForm from "@/components/website-check/WebsiteCheckForm";
import ScrollToFormButton from "@/components/website-check/ScrollToFormButton";
import { caseStudies } from "@/components/case-studies-data";

export const metadata: Metadata = {
  title: "Kostenloser Website-Quick-Check für KMU | Codavo",
  description:
    "Lassen Sie Ihre Website professionell prüfen und erhalten Sie 3 konkrete Hinweise zu Vertrauen, Nutzerführung und Anfragen.",
  alternates: {
    canonical: "/website-check",
  },
  openGraph: {
    url: "/website-check",
    siteName: "Codavo Webstudio",
    title: "Kostenloser Website-Quick-Check für KMU | Codavo",
    description:
      "Lassen Sie Ihre Website professionell prüfen und erhalten Sie 3 konkrete Hinweise zu Vertrauen, Nutzerführung und Anfragen.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Kostenloser Website-Quick-Check für KMU | Codavo",
      },
    ],
  },
  twitter: {
    title: "Kostenloser Website-Quick-Check für KMU | Codavo",
    description:
      "Lassen Sie Ihre Website professionell prüfen und erhalten Sie 3 konkrete Hinweise zu Vertrauen, Nutzerführung und Anfragen.",
    images: ["/og.jpg"],
  },
};

const problemPoints = [
  "Die Website wirkt ordentlich, aber nicht wirklich überzeugend",
  "Das Angebot wird nicht klar genug vermittelt",
  "Nutzer finden nicht schnell genug zum nächsten Schritt",
  "Mobil funktioniert die Seite nicht stark genug",
  "Vertrauen wird nicht systematisch aufgebaut",
  "Es kommen zu wenige qualifizierte Anfragen an",
];

const whatYouGet = [
  {
    title: "Kompakte Ersteinschätzung Ihrer Website",
    text: "Wir prüfen Ihren aktuellen Auftritt auf Klarheit, Wirkung und Nutzerführung.",
  },
  {
    title: "3 konkrete Optimierungspunkte",
    text: "Sie sehen klar, an welchen Stellen Ihre Website Potenzial verschenkt.",
  },
  {
    title: "Einordnung des sinnvollen nächsten Schritts",
    text: "Wir ordnen ein, ob eher Optimierung, Redesign oder eine technische Lösung sinnvoll ist.",
  },
  {
    title: "Keine generischen Standardempfehlungen",
    text: "Keine Checkliste, sondern eine kurze Einschätzung Ihrer konkreten Website.",
  },
];

const suitableFor = [
  "KMU mit bestehender Website",
  "Unternehmen, die professioneller auftreten möchten",
  "Firmen mit zu wenigen qualifizierten Anfragen",
  "Unternehmen, die unsicher sind, ob ihre Website noch zeitgemäß wirkt",
];

const lessSuitableFor = [
  "Reine Ideen ohne bestehende Website",
  "Sehr große Enterprise-Plattformprojekte",
  "Nutzer, die nur allgemeine Gratis-Tipps suchen",
  "Reine Shop-Projekte ohne Beratungsbedarf",
];

const whyCodavo = [
  "Professionelle Websites mit Fokus auf Wirkung, Klarheit und Nutzerführung",
  "Keine generischen Agenturfloskeln, sondern konkrete Einschätzungen",
  "Individuelle Betrachtung statt automatisierter Standardanalyse",
  "Verständnis für moderne digitale Auftritte und Business-Nutzen",
];

const heroMicroTrust = [
  "Individuelle Ersteinschätzung statt Standard-Tool",
  "Anfrage in wenigen Schritten",
  "Kein automatisierter Standardreport",
];

const industryTrustChips = [
  "Energieberatung",
  "Ingenieurbüro",
  "Sanierung & Modernisierung",
];

const faqItems = [
  {
    q: "Ist der Check wirklich kostenlos?",
    a: "Ja. Der Website-Quick-Check ist kostenlos und unverbindlich.",
  },
  {
    q: "Wie läuft der Check ab?",
    a: "Sie senden uns Ihre Website. Wir prüfen den Auftritt kompakt und melden uns mit einer ersten Einschätzung zurück.",
  },
  {
    q: "Für wen ist der Check gedacht?",
    a: "Für KMU mit bestehender Website, die Wirkung, Vertrauen und Anfragen verbessern möchten.",
  },
  {
    q: "Erhalte ich einen automatisierten Bericht?",
    a: "Nein. Sie erhalten keine generische Standardauswertung, sondern eine individuelle Ersteinschätzung.",
  },
  {
    q: "Muss ich danach etwas buchen?",
    a: "Nein. Der Check ist unverbindlich.",
  },
];

const featuredReferenceSummaries = [
  {
    ...caseStudies[0],
    problem: "Starkes Angebot, aber zu wenige passende Anfragen.",
    solution: "Nutzen, Struktur und Anfragewege klarer gemacht.",
    result: "Mehr qualifizierte Anfragen pro Monat.",
  },
  {
    ...caseStudies[2],
    problem: "Technische Leistungen waren online schwer greifbar.",
    solution: "Kernleistungen, Referenzen und Kontaktwege geschärft.",
    result: "Professionellerer Außenauftritt für Ausschreibungen.",
  },
  {
    ...caseStudies[4],
    problem: "Kompetenz wurde online nicht klar genug vermittelt.",
    solution: "Leistungen verständlich gegliedert und Anfragewege geklärt.",
    result: "Mehr Vertrauen und bessere Grundlage für Anfragen.",
  },
];

export default function WebsiteCheckPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kostenloser Website-Quick-Check für KMU",
    provider: {
      "@type": "Organization",
      name: "Codavo Webstudio",
      url: "https://www.codavo-webstudio.de",
    },
    areaServed: "DE",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Kostenloser Website-Quick-Check mit individueller Ersteinschätzung zu Vertrauen, Nutzerführung und Anfragen.",
  };

  return (
    <>
      <main className="overflow-x-hidden pt-14 md:pt-14">
        <section className="section pb-14 pt-0 md:pb-20 md:pt-0">
          <div className="container">
            <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                  KOSTENLOSER WEBSITE-QUICK-CHECK FÜR KMU
                </p>
                <h1 className="mt-3 max-w-4xl text-[2.2rem] font-semibold leading-[1.02] tracking-tight text-white md:mt-5 md:text-5xl md:leading-[1.05] lg:text-[3.65rem]">
                  Warum viele Unternehmenswebsites veraltet wirken und zu
                  wenige Anfragen bringen
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:mt-6 md:text-lg md:leading-8">
                  Sichern Sie sich einen kostenlosen Website-Quick-Check und
                  erfahren Sie, wo Vertrauen verloren geht, Nutzerführung
                  bremst und Anfragen liegen bleiben.
                </p>

                <ul className="mt-5 grid gap-2 text-xs text-slate-200 sm:grid-cols-3 sm:gap-3 sm:text-sm">
                  {[
                    "Kompakte Ersteinschätzung",
                    "Konkrete Optimierungspunkte",
                    "Kostenlos und unverbindlich",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 sm:min-h-11 sm:px-4 sm:py-3"
                    >
                      <Check className="h-4 w-4 text-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                  <ScrollToFormButton
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow transition hover:shadow-lg"
                    dataTrackEvent="website_check_hero_cta_click"
                    dataTrackLabel="Website-Check Hero CTA"
                  >
                    Kostenlosen Check anfordern
                    <ArrowRight className="h-4 w-4" />
                  </ScrollToFormButton>
                </div>

                <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] leading-5 text-slate-400 sm:mt-4 sm:gap-3 sm:text-xs">
                  {heroMicroTrust.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] leading-5 text-slate-300 sm:mt-4 sm:gap-2 sm:text-xs">
                  <span className="text-slate-500">Erfahrung aus</span>
                  {industryTrustChips.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 sm:px-3 sm:py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card overflow-hidden p-0">
                <div className="m-3 rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Quick-Check Vorschau
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-white">
                        Was Sie im ersten Blick von uns bekommen
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 px-5 pb-5">
                  <div className="rounded-[1.15rem] border border-white/10 bg-[#0b1222] p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-5 w-5 text-indigo-300" />
                      <div>
                        <h3 className="font-medium text-white">Vertrauen</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Wir prüfen, ob Ihre Website schnell Professionalität und
                          Glaubwürdigkeit vermittelt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.15rem] border border-white/10 bg-[#0b1222] p-4">
                    <div className="flex items-start gap-3">
                      <Search className="mt-0.5 h-5 w-5 text-indigo-300" />
                      <div>
                        <h3 className="font-medium text-white">
                          Nutzerführung
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Wir sehen, wie klar Besucher geführt werden und ob der
                          nächste Schritt sichtbar ist.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.15rem] border border-white/10 bg-[#0b1222] p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-5 w-5 text-indigo-300" />
                      <div>
                        <h3 className="font-medium text-white">Rückmeldung</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Sie erhalten eine kurze Einschätzung mit 3 konkreten
                          Ansatzpunkten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/[0.02] to-pink-500/10 p-4">
                    <p className="text-sm font-medium text-white">
                      Leichter nächster Schritt
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Sie senden Ihre Website und Kontaktdaten. Den Rest
                      übernehmen wir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Viele Unternehmenswebsites sind online – aber arbeiten nicht
                aktiv für das Unternehmen
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {problemPoints.map((point) => (
                <article key={point} className="card p-6">
                  <div className="flex items-start gap-3">
                    <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />
                    <p className="text-sm leading-7 text-slate-200">{point}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Was Sie im kostenlosen Website-Quick-Check erhalten
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {whatYouGet.map((item) => (
                <article key={item.title} className="card p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/80">
                    Website-Quick-Check
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Warum Codavo
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  Wir betrachten Websites nicht nur als Designfläche, sondern
                  als Werkzeug für Vertrauen, Orientierung und Anfragen.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {whyCodavo.map((item) => (
                  <article key={item} className="card p-6">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Ausgewählte Referenzen
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                Ein kompakter Blick auf Projekte, bei denen Klarheit und
                Vertrauen sichtbar gestärkt wurden.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {featuredReferenceSummaries.map((reference) => (
                <article
                  key={reference.title}
                  className="card flex h-full flex-col overflow-hidden p-0"
                >
                  <div className="relative aspect-[16/10] border-b border-white/10">
                    <Image
                      src={reference.img || "/og.jpg"}
                      alt={reference.alt || reference.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/25 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {reference.title}
                    </h3>

                    <div className="mt-5 flex flex-1 flex-col gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                          Ausgangslage
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-300">
                          {reference.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                          Verbessert
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-300">
                          {reference.solution}
                        </p>
                      </div>

                      <div className="mt-auto rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200/80">
                          Wirkung
                        </p>
                        <p className="mt-2 text-base font-semibold leading-6 text-white">
                          {reference.result}
                        </p>
                      </div>
                    </div>

                    {reference.href ? (
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 transition hover:text-white"
                      >
                        Projekt ansehen <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/cases"
                className="text-sm text-slate-300 underline underline-offset-4 transition hover:text-white"
              >
                Weitere Projekte auf der Hauptseite ansehen
              </Link>
            </div>
          </div>
        </section>

        <section id="website-check-form" className="section scroll-mt-28">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Fordern Sie jetzt Ihren kostenlosen Website-Quick-Check an
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                  Tragen Sie Ihre Daten und Ihre Website ein. Wir melden uns mit
                  einer ersten Einschätzung.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Was wir uns ansehen
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Die Wirkung Ihres Auftritts im ersten Eindruck
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Wir prüfen Vertrauen, Klarheit und den Weg zur Anfrage.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Was Sie zurückbekommen
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Eine kurze individuelle Ersteinschätzung
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Sie erhalten 3 konkrete Ansatzpunkte statt einer
                      Standardauswertung.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200/80">
                      Nach dem Absenden
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Wir prüfen Ihre Website individuell und melden uns
                      anschließend bei Ihnen.
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Sie erhalten eine erste Einschätzung ohne Druck und ohne
                      automatisierten Report.
                    </p>
                  </div>
                </div>
              </div>

              <WebsiteCheckForm />
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Häufige Fragen
              </h2>
            </div>
            <FAQAccordion items={faqItems} />

            <div className="mt-10">
              <h3 className="text-center text-lg font-semibold text-white">
                Für wen dieser Check sinnvoll ist
              </h3>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <article className="card p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/80">
                    Geeignet für
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                    {suitableFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                        <span className="leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="card p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200/80">
                    Weniger geeignet für
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                    {lessSuitableFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span className="leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl">
            <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-8 text-center md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Lassen Sie Ihre Website professionell einschätzen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                Wenn Sie wissen möchten, wo Ihre Website aktuell Potenzial
                verschenkt, fordern Sie jetzt Ihren kostenlosen
                Website-Quick-Check an.
              </p>
              <div className="mt-8">
                <ScrollToFormButton
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow transition hover:shadow-lg"
                  dataTrackEvent="website_check_final_cta_click"
                  dataTrackLabel="Website-Check Final CTA"
                >
                  Kostenlosen Check anfordern
                  <ArrowRight className="h-4 w-4" />
                </ScrollToFormButton>
                <p className="mt-4 text-xs text-slate-400">
                  Wenige Angaben, individuelle Einschätzung, unverbindlicher
                  nächster Schritt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090e19] py-8 text-sm text-slate-400">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Webstudio"
              width={140}
              height={32}
              className="h-6 w-auto"
            />
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Website-Quick-Check
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/impressum" className="transition hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
