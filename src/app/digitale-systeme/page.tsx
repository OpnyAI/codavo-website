import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/digitale-systeme",
  title: "Digitale Systeme für Unternehmen | Website, Software & Automatisierung",
  description:
    "Codavo verbindet Website, Funnel, Software, Tracking, Automatisierung und KI zu digitalen Systemen für Unternehmen. Für klare Prozesse, bessere Übersicht und skalierbare digitale Strukturen.",
});

const disconnectedProcesses = [
  {
    title: "Anfragen ohne Leadprozess",
    text: "Die Website erzeugt Kontakte, doch Übergabe, Qualifizierung und Nachverfolgung erfolgen weiterhin manuell über E-Mail oder Tabellen.",
  },
  {
    title: "Funnel ohne Folgeprozess",
    text: "Ein Funnel sammelt Leads, aber CRM, Zuständigkeiten und nächste Schritte sind nicht sauber mit dem Anfrageweg verbunden.",
  },
  {
    title: "Software ohne gemeinsame Datenbasis",
    text: "Mehrere Anwendungen erfüllen Einzelaufgaben, während relevante Informationen doppelt gepflegt oder zwischen Systemen übertragen werden.",
  },
  {
    title: "Tracking ohne klare Entscheidungen",
    text: "Daten werden erfasst, aber Ereignisse, Ziele und Reports liefern keine verlässliche Grundlage für konkrete Verbesserungen.",
  },
] as const;

const architectureInputs = [
  {
    title: "Website",
    text: "Erklärt das Angebot und schafft relevante Kontaktpunkte.",
  },
  {
    title: "Landingpage / Funnel",
    text: "Führt Zielgruppen strukturiert bis zur Anfrage.",
  },
  {
    title: "Leadprozess / CRM",
    text: "Qualifiziert, verteilt und dokumentiert eingehende Leads.",
  },
  {
    title: "Interne Prozesse",
    text: "Übernehmen Aufgaben, Zuständigkeiten und Folgeschritte.",
  },
] as const;

const architectureEnablers = [
  {
    title: "Tracking & Analytics",
    text: "Macht Quellen, Verhalten und relevante Ereignisse sichtbar.",
  },
  {
    title: "Automatisierung",
    text: "Übergibt Daten und stößt wiederkehrende Abläufe an.",
  },
  {
    title: "Dashboard / Reporting",
    text: "Verdichtet Status und Kennzahlen zu einem klaren Überblick.",
  },
  {
    title: "KI-Unterstützung",
    text: "Unterstützt Analyse, Inhalte oder Prozesse auf Basis klarer Daten.",
  },
] as const;

const systemBuildingBlocks = [
  {
    title: "Unternehmenswebsite",
    text: "Schafft Orientierung, Vertrauen und eine klare Grundlage für Sichtbarkeit, Inhalte und qualifizierte Kontaktwege.",
    href: "/webdesign",
    linkLabel: "Webdesign ansehen",
  },
  {
    title: "Funnel-Systeme",
    text: "Führen definierte Zielgruppen von einer Kampagne über Qualifizierung und Formular bis zum nächsten Prozessschritt.",
    href: "/funnel-erstellen-lassen",
    linkLabel: "Funnel-Systeme ansehen",
  },
  {
    title: "Individuelle Software",
    text: "Bildet geschäftlich relevante Abläufe, Rollen, Daten und Funktionen ab, die Standardsoftware nicht sinnvoll löst.",
    href: "/softwareloesungen-fuer-kmu",
    linkLabel: "Softwarelösungen ansehen",
  },
  {
    title: "Hosting & Wartung",
    text: "Sichert technischen Betrieb, laufende Prüfung und die kontrollierte Weiterentwicklung der digitalen Grundlage.",
    href: "/hosting-wartung",
    linkLabel: "Betreuung ansehen",
  },
  {
    title: "Kostenloses Erstgespräch",
    text: "Ordnet Ausgangslage, Ziele und den wirtschaftlich sinnvollen nächsten Schritt gemeinsam mit Codavo ein.",
    href: "/kontakt",
    linkLabel: "Kostenloses Erstgespräch",
  },
  {
    title: "Wissen",
    text: "Erklärt zentrale Entscheidungen rund um Websites, Funnel, Sichtbarkeit und digitale Systeme verständlich.",
    href: "/wissen",
    linkLabel: "Wissen entdecken",
  },
] as const;

const scenarios = [
  {
    number: "01",
    title: "Mehr Anfragen, aber kein strukturierter Leadprozess",
    text: "Kontakte kommen über Website oder Kampagnen, werden danach jedoch uneinheitlich bewertet, verteilt und weiterverfolgt.",
  },
  {
    number: "02",
    title: "Viele manuelle Schritte zwischen Anfrage und Angebot",
    text: "Informationen werden wiederholt übertragen, Rückfragen entstehen und der aktuelle Bearbeitungsstand ist nicht für alle Beteiligten sichtbar.",
  },
  {
    number: "03",
    title: "Mehrere Tools, aber keine saubere Datenlogik",
    text: "Einzellösungen sind vorhanden, doch Schnittstellen, Zuständigkeiten und eine verlässliche Datenquelle fehlen.",
  },
  {
    number: "04",
    title: "Bedarf an Dashboard, Reporting oder Automatisierung",
    text: "Wichtige Kennzahlen und Abläufe sollen nachvollziehbar werden, ohne weitere isolierte Werkzeuge einzuführen.",
  },
] as const;

const processSteps = [
  {
    title: "Analyse",
    text: "Ziele, Nutzer, bestehende Systeme, Medienbrüche und wiederkehrende Reibung werden gemeinsam eingeordnet.",
  },
  {
    title: "Zielarchitektur",
    text: "Codavo beschreibt, welche Bausteine zusammenarbeiten sollen und wo Daten, Rollen und Übergaben liegen.",
  },
  {
    title: "Priorisierung",
    text: "Notwendige Grundlagen werden von späteren Ausbaustufen getrennt, damit ein wirtschaftlich sinnvoller Startumfang entsteht.",
  },
  {
    title: "Modulare Umsetzung",
    text: "Website, Funnel, Software oder Integrationen werden in nachvollziehbaren Modulen entwickelt und verbunden.",
  },
  {
    title: "Tracking & Qualitätssicherung",
    text: "Funktionen, Datenflüsse und relevante Ereignisse werden geprüft; Tracking wird passend zu Ziel und Einwilligungslogik umgesetzt.",
  },
  {
    title: "Weiterentwicklung",
    text: "Nach dem Launch wird anhand realer Nutzung entschieden, welche Optimierung oder Erweiterung als Nächstes sinnvoll ist.",
  },
] as const;

const technicalPrinciples = [
  {
    title: "Tracking mit klarer Einwilligungslogik",
    text: "Analytics- und Conversion-Ereignisse werden nur nach Bedarf und passend zu Projektziel, Consent-Konzept und eingesetzten Diensten geplant.",
  },
  {
    title: "Bestehende Systeme zuerst prüfen",
    text: "CRM, Kalender, ERP oder andere Werkzeuge können über vorhandene Schnittstellen angebunden werden. Vorab werden Datenqualität und technische Grenzen bewertet.",
  },
  {
    title: "Automatisierung mit erkennbarem Nutzen",
    text: "Nicht jeder manuelle Schritt sollte automatisiert werden. Entscheidend sind Wiederholbarkeit, Fehleranfälligkeit und ein sinnvoller Betrieb der Lösung.",
  },
  {
    title: "KI mit Datenbasis und Kontrolle",
    text: "KI-Unterstützung braucht geeignete Daten, definierte Aufgaben und menschliche Kontrolle. Sie wird dort eingesetzt, wo Ergebnisse verlässlich geprüft werden können.",
  },
] as const;

const faqs = [
  {
    q: "Was ist ein digitales Unternehmenssystem?",
    a: "Ein digitales Unternehmenssystem verbindet Website, Funnel, Software, Daten und Prozesse zu einem abgestimmten Ablauf. Tracking, Analytics, Automatisierung, CRM und KI-Unterstützung können ergänzen, wenn sie für das Projektziel sinnvoll sind. Entscheidend ist nicht die Anzahl der Tools, sondern ihr nachvollziehbares Zusammenspiel.",
  },
  {
    q: "Wann lohnt sich ein digitales System statt einzelner Website-Maßnahmen?",
    a: "Ein digitales System lohnt sich, wenn Probleme nicht mehr nur auf einer einzelnen Website-Seite entstehen. Typische Hinweise sind manuelle Übergaben, doppelte Datenpflege, unklare Zuständigkeiten oder fehlende Folgeprozesse nach einer Anfrage. Dann sollte zuerst der gesamte Ablauf betrachtet werden.",
  },
  {
    q: "Welche Bausteine kann Codavo miteinander verbinden?",
    a: "Codavo kann Unternehmenswebsite, Landingpage, Funnel, Formulare, CRM-Prozesse, individuelle Software, interne Tools, Tracking, Analytics und Reporting konzeptionell verbinden. Welche Bausteine tatsächlich benötigt werden, ergibt sich aus den bestehenden Prozessen und dem gewünschten Zielbild. Nicht jedes Projekt braucht alle Komponenten.",
  },
  {
    q: "Kann Codavo bestehende Tools oder CRM-Systeme anbinden?",
    a: "Ja, bestehende Tools und CRM-Systeme können nach technischer Prüfung angebunden werden. Voraussetzung sind geeignete Schnittstellen, ausreichende Datenqualität und nachvollziehbare Zugriffsrechte. Falls eine direkte Integration nicht sinnvoll ist, wird eine realistische Alternative eingeordnet.",
  },
  {
    q: "Welche Rolle spielen Tracking und Analytics?",
    a: "Tracking und Analytics schaffen eine Datengrundlage für die Bewertung wichtiger Schritte im System. Erfasst werden nur Ereignisse, die zum Projektziel beitragen und sinnvoll ausgewertet werden können. Die Umsetzung erfolgt nach Bedarf und passend zur Einwilligungslogik; pauschale Erfolgsgarantien entstehen daraus nicht.",
  },
  {
    q: "Welche Rolle spielt KI in digitalen Systemen?",
    a: "KI kann klar abgegrenzte Aufgaben unterstützen, etwa bei Klassifizierung, Zusammenfassung oder vorbereitender Verarbeitung. Dafür braucht sie eine geeignete Datenbasis, definierte Qualitätskriterien und menschliche Kontrolle. Codavo setzt KI nicht als Selbstzweck ein, sondern prüft ihren konkreten Nutzen im Prozess.",
  },
  {
    q: "Was kostet ein digitales System?",
    a: "Die Kosten werden individuell anhand des tatsächlichen Projektumfangs kalkuliert. Relevant sind vorhandene Systeme, benötigte Funktionen, Nutzerrollen, Schnittstellen, Datenlogik und der gewünschte Automatisierungsgrad. Nach der Analyse erhalten Sie eine priorisierte Roadmap und einen transparent abgegrenzten Startumfang.",
  },
  {
    q: "Wie startet ein Projekt für ein digitales Unternehmenssystem?",
    a: "Ein Projekt startet mit einer Analyse der Ziele, bestehenden Werkzeuge und aktuellen Prozessbrüche. Daraus entsteht eine Zielarchitektur mit priorisierten Bausteinen und klaren Abhängigkeiten. Die Umsetzung kann anschließend modular erfolgen, statt alle Komponenten gleichzeitig einzuführen.",
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
      <main className="min-h-screen pt-20">
        <header className="section section--feature">
          <div className="container max-w-6xl text-center">
            <p className="eyebrow">Digitale Unternehmenssysteme</p>
            <h1 className="display-title mx-auto mt-6 max-w-5xl text-white">
              Digitale Systeme für Unternehmen, die Website, Prozesse und Software verbinden
            </h1>
            <p className="lede mx-auto mt-7 max-w-4xl">
              Ein digitales Unternehmenssystem verbindet Website, Funnel, Software, Tracking, Automatisierung und klare Prozesse zu einer skalierbaren digitalen Infrastruktur. Codavo unterstützt Unternehmen dabei, einzelne digitale Bausteine sinnvoll miteinander zu verbinden.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label="Digitale Systeme Hero Systemstrategie"
                className="cta-primary"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-2 text-xs text-slate-400 sm:grid-cols-3 md:grid-cols-6">
              {["Website", "Funnel", "Software", "Tracking", "Automatisierung", "KI"].map((item) => (
                <span key={item} className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-2.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Der Wendepunkt</p>
              <h2 className="section-title mt-5 text-white">Wann einzelne Maßnahmen nicht mehr ausreichen</h2>
              <p className="lede mt-6">
                Website, Funnel oder Software können jeweils eine konkrete Aufgabe lösen. Sobald Übergaben, Daten und Zuständigkeiten mehrere Bereiche betreffen, muss jedoch der gesamte Prozess betrachtet werden.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {disconnectedProcesses.map((item) => (
                <article key={item.title} className="card h-full">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">Systemarchitektur</p>
              <h2 className="section-title mt-5 text-white">Bausteine werden wertvoll, wenn Übergaben funktionieren</h2>
              <p className="lede mx-auto mt-6 max-w-3xl">
                Ein digitales System definiert, wie Nutzer, Informationen und Aufgaben zwischen sichtbarer Website, internen Prozessen und vorhandenen Werkzeugen weitergegeben werden.
              </p>
            </div>

            <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-indigo-300/15 bg-[linear-gradient(145deg,rgba(15,23,42,0.88),rgba(8,13,25,0.96))] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-x-[12%] top-8 bottom-8 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_68%)]" aria-hidden />
              <div className="pointer-events-none absolute top-12 bottom-12 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-300/15 to-transparent sm:hidden" aria-hidden />

              <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {architectureInputs.map((module) => (
                  <article key={module.title} className="flex min-w-0 flex-col rounded-2xl border border-white/8 bg-[#111a2d]/90 p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:min-h-44 sm:p-6">
                    <h3 className="break-words text-base font-semibold text-white sm:text-lg">{module.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm">{module.text}</p>
                    <div className="mt-auto hidden pt-5 lg:flex lg:items-center lg:justify-center" aria-hidden>
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/80 shadow-[0_0_12px_rgba(165,180,252,0.75)]" />
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative hidden grid-cols-4 lg:grid" aria-hidden>
                {architectureInputs.map((module) => (
                  <div key={module.title} className="flex justify-center">
                    <span className="h-8 w-px bg-gradient-to-b from-indigo-300/45 to-indigo-300/10" />
                  </div>
                ))}
              </div>

              <div className="relative my-5 flex items-center gap-3 lg:my-0">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300/15 to-indigo-300/55" aria-hidden />
                <div className="max-w-[16rem] rounded-2xl border border-indigo-200/45 bg-[linear-gradient(135deg,rgba(79,70,229,0.32),rgba(168,85,247,0.16))] px-5 py-4 text-center shadow-[0_0_55px_rgba(99,102,241,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] sm:max-w-none sm:rounded-full sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-white sm:text-sm">Digitales Unternehmenssystem</p>
                  <p className="mt-1.5 text-[11px] leading-5 text-indigo-100/75 sm:text-xs">Verbindet Daten, Zuständigkeiten und Folgeschritte</p>
                </div>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-fuchsia-300/15 to-fuchsia-300/55" aria-hidden />
              </div>

              <div className="relative hidden grid-cols-4 lg:grid" aria-hidden>
                {architectureEnablers.map((module) => (
                  <div key={module.title} className="flex justify-center">
                    <span className="h-8 w-px bg-gradient-to-b from-fuchsia-300/10 to-fuchsia-300/45" />
                  </div>
                ))}
              </div>

              <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {architectureEnablers.map((module) => (
                  <article key={module.title} className="flex min-w-0 flex-col rounded-2xl border border-white/8 bg-[#111a2d]/90 p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:min-h-44 sm:p-6">
                    <div className="hidden pb-5 lg:flex lg:items-center lg:justify-center" aria-hidden>
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300/80 shadow-[0_0_12px_rgba(240,171,252,0.7)]" />
                    </div>
                    <h3 className="break-words text-base font-semibold text-white sm:text-lg">{module.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm">{module.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-300 md:text-base">
              So werden Anfragen, Daten und Aufgaben nicht mehrfach erfasst, manuell übertragen oder in einzelnen Tools verloren, sondern sauber zwischen Website, Vertrieb und internen Prozessen weitergegeben.
              Web-Apps, Kundenportale oder Dashboards können dabei als konkrete Anwendungsbausteine Teil eines digitalen Unternehmenssystems sein. Mehr dazu auf der Seite zur <Link href="/web-app-entwicklung" className="font-medium text-indigo-300 transition hover:text-white">Web-App Entwicklung</Link>.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Leistungsbausteine</p>
              <h2 className="section-title mt-5 text-white">Die Bausteine eines digitalen Systems</h2>
              <p className="lede mt-6">
                Die passende Architektur richtet sich nach dem Prozess. Jede Detailseite erklärt den jeweiligen Baustein, ohne daraus ein unnötig komplexes Gesamtsystem zu machen.
              </p>
            </div>
            <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {systemBuildingBlocks.map((item) => (
                <article key={item.href} className="card flex h-full min-w-0 flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 md:text-base">{item.text}</p>
                  <Link href={item.href} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white">
                    {item.linkLabel} <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Typische Szenarien</p>
              <h2 className="section-title mt-5 text-white">Wenn nicht ein Tool, sondern der Ablauf das Problem ist</h2>
            </div>
            <div className="mt-12 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <article key={scenario.number} className="flex gap-5 border-t border-white/8 py-7">
                  <span className="pt-1 text-xs font-semibold tracking-[0.18em] text-indigo-300">{scenario.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-white">{scenario.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{scenario.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">Vorgehen</p>
              <h2 className="section-title mt-5 text-white">Vom Prozessproblem zur modularen Umsetzung</h2>
              <p className="lede mx-auto mt-6 max-w-3xl">
                Nicht jeder Baustein muss gleichzeitig entstehen. Eine klare Reihenfolge reduziert technische Abhängigkeiten und macht Entscheidungen nachvollziehbar.
              </p>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <li key={step.title} className="card h-full">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-300/20 bg-indigo-300/10 text-sm font-semibold text-indigo-200">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <p className="eyebrow">Arbeitsweise</p>
            <h2 className="section-title mt-5 text-white">Qualität entsteht nicht zufällig</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Ziele, Systeme und Abhängigkeiten klären",
                "Übergaben zwischen Website, Funnel und Prozessen definieren",
                "Datenflüsse und Verantwortlichkeiten nachvollziehbar machen",
                "Automatisierung nur mit erkennbarem Nutzen planen",
                "Tracking passend zu Ziel und Einwilligungslogik prüfen",
                "Schnittstellen und technische Grenzen früh einordnen",
                "Qualitätssicherung vor dem Launch",
                "Betreuung und Weiterentwicklung einplanen",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 text-sm leading-7 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <div className="max-w-4xl">
              <p className="eyebrow">Technische Verantwortung</p>
              <h2 className="section-title mt-5 text-white">Datenschutz, Schnittstellen und technische Grenzen</h2>
              <p className="lede mt-6">
                Eine belastbare Architektur berücksichtigt nicht nur Funktionen. Datenzugriffe, Einwilligungen, Wartbarkeit und kontrollierbare Abläufe gehören von Anfang an zur Planung.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {technicalPrinciples.map((principle) => (
                <article key={principle.title} className="rounded-3xl border border-white/8 bg-slate-950/30 p-6 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-5xl">
            <div className="max-w-3xl">
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title mt-5 text-white">Häufige Fragen zu digitalen Unternehmenssystemen</h2>
              <p className="lede mt-6">
                Direkte Antworten zu Architektur, bestehenden Tools, Tracking, KI, Kosten und Projektstart.
              </p>
            </div>
            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl text-center">
            <div className="rounded-[2rem] border border-indigo-300/20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_65%)] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.2)] sm:p-10 lg:p-14">
              <h2 className="section-title text-white">Lassen Sie uns prüfen, welche digitalen Bausteine Ihr Unternehmen wirklich braucht.</h2>
              <p className="lede mx-auto mt-6 max-w-3xl">
                Im Erstgespräch ordnen wir bestehende Systeme, aktuelle Prozessbrüche und sinnvolle nächste Schritte ein. Ziel ist ein klarer Startumfang statt unnötiger technischer Komplexität.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Digitale Systeme Abschluss Systemstrategie"
                  className="cta-primary"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Footer />
    </>
  );
}
