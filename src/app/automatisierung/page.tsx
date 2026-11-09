import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  FolderInput,
  PackageCheck,
  Search,
} from "lucide-react";
import AutomationCalculator from "@/components/AutomationCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { automationFaqs } from "@/lib/automation-faq";
import { calculateAutomationScenario, initialScenario, weeksPerYear } from "@/lib/automation-scenario";
import { automationOffers } from "@/lib/automation";
import { createPageMetadata, SEO_CONFIG } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/automatisierung",
  title: "KI-Automatisierung für den industriellen Mittelstand | Codavo",
  description: "Codavo automatisiert manuelle Abläufe im industriellen Mittelstand. Wir verbinden Systeme, automatisieren CRM-Abläufe und entwickeln individuelle KI-Lösungen.",
  automationImage: true,
});

const situations = [
  {
    area: "Vertrieb und CRM",
    title: "Kontakte recherchieren und nachhalten",
    detail: "Zielunternehmen und Ansprechpartner recherchieren, Informationen aus mehreren Quellen zusammentragen, Kontakte ins CRM übernehmen und Wiedervorlagen pflegen.",
    outcome: "Ihr Vertrieb spart Zeit bei der CRM-Pflege und sieht sofort, welche Kontakte nachzufassen sind.",
    icon: Search,
    project: { href: "#sales-intelligence", label: "Zur Sales Intelligence Plattform" },
  },
  {
    area: "Einkauf und Lieferanten",
    title: "Auftragsbestätigungen mit Bestellungen abgleichen",
    detail: "Bestätigungen aus dem Postfach öffnen, Preise, Mengen und Liefertermine mit der Bestellung im ERP vergleichen und Abweichungen mit dem Lieferanten klären.",
    outcome: "Der automatische Abgleich erspart Ihrem Einkauf die Routineprüfung. Er bekommt die Fälle vorgelegt, bei denen Preis, Menge oder Termin abweichen.",
    icon: PackageCheck,
  },
  {
    area: "Projektstart und interne Übergabe",
    title: "Unterlagen für das nächste Team zusammentragen",
    detail: "Anforderungen und Zeichnungen aus E-Mails und Ordnern sammeln, fehlende Angaben nachfragen und den aktuellen Stand an Konstruktion, Arbeitsvorbereitung oder Umsetzung übergeben.",
    outcome: "Das nächste Team bekommt die Unterlagen gebündelt. Fehlende Angaben fallen vor der Übergabe auf und müssen später seltener nachgefordert werden.",
    icon: FolderInput,
    project: { href: "#projekt-onboarding", label: "Zum Projekt-Onboarding" },
  },
  {
    area: "Qualität und Dokumentation",
    title: "Prüfergebnisse erfassen und Nachweise bereitstellen",
    detail: "Messwerte aus Prüfprotokollen übertragen, Auffälligkeiten dem richtigen Bauteil zuordnen und die Unterlagen für die Freigabe zusammenstellen.",
    outcome: "Die Qualitätssicherung findet Messwerte und Nachweise direkt beim Bauteil und spart sich das Zusammensuchen vor der Freigabe.",
    icon: ClipboardCheck,
  },
] as const;

const approach = [
  {
    title: "Prozess analysieren",
    detail: "Wir gehen einen konkreten Vorgang mit den Beteiligten durch. Dabei erfassen wir, wer welche Daten bearbeitet, wie oft der Vorgang anfällt und wo Arbeitszeit durch Übertragen, Suchen oder Nachfragen gebunden ist.",
  },
  {
    title: "Automatisierungs- und KI-Potenziale bewerten",
    detail: "Wir stellen die mögliche Zeitersparnis dem Aufwand für Umsetzung und Betrieb gegenüber. Daraus ergibt sich, welche Schritte sich zuerst lohnen und welche Entscheidungen beim Team bleiben.",
  },
  {
    title: "Passende Lösung entwickeln",
    detail: "Wir verbinden vorhandene Systeme, richten CRM-Abläufe ein oder entwickeln individuelle KI-Lösungen. KI setzen wir gezielt ein, etwa um Angaben aus unterschiedlich aufgebauten Dokumenten zur Prüfung vorzubereiten.",
  },
  {
    title: "In die bestehende IT integrieren",
    detail: "Wir binden die Lösung an die vorhandenen Anwendungen an, testen sie mit typischen Fällen und Abweichungen und begleiten die Einführung im Fachbereich.",
  },
  {
    title: "Betreuen und verbessern",
    detail: "Auf Wunsch übernehmen wir die technische Betreuung und passen die Lösung an, wenn sich Zuständigkeiten, Datenquellen oder Prozesse ändern.",
  },
];


const textLink = "inline-flex items-center gap-2 font-medium text-indigo-300 underline-offset-4 hover:text-white hover:underline";

const percent = new Intl.NumberFormat("de-DE", { style: "percent", maximumFractionDigits: 2 });
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const { hoursNow, costReduction, firstYearImpact, operatingProfit, marginAfter } =
  calculateAutomationScenario(initialScenario);

const heroMetrics = [
  { value: percent.format(initialScenario.automation / 100), label: "weniger manuelle Bearbeitungszeit in den betrachteten Abläufen" },
  { value: percent.format(costReduction / (hoursNow * initialScenario.hourlyCost)), label: "weniger jährliche Kosten für die betrachteten manuellen Tätigkeiten nach laufenden Automatisierungskosten" },
  { value: percent.format(firstYearImpact / operatingProfit), label: "mehr operativer Gewinn gegenüber dem bisherigen Gewinn im ersten Jahr, nach Umsetzungskosten" },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="section section--feature">
          <div className="container container--wide grid items-start gap-10 pt-5 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            <div>
              <p className="eyebrow">KI-Beratung · Prozessautomatisierung · Individuelle KI-Lösungen</p>
              <h1 className="display-title mt-5 max-w-4xl text-white">
                Wir automatisieren manuelle Abläufe im industriellen Mittelstand.
              </h1>
              <p className="lede mt-6 max-w-2xl">
                <strong className="font-semibold text-white">Senken Sie den Aufwand und die Kosten wiederkehrender Abläufe.</strong> Wir verbinden ERP, CRM und andere Anwendungen, damit Ihr Team weniger Daten abtippt, Dokumente sucht und Vorgänge von Hand nachhält.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">Für Geschäftsführung und Verantwortliche in Vertrieb, Einkauf, Projektabwicklung und Qualität mittelständischer Industrieunternehmen.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/kontakt" className="cta-primary" data-track-event="cta_contact_click" data-track-label="Home Automatisierung Erstgespräch">
                  Kostenloses Erstgespräch <ArrowRight className="ml-2 size-4" aria-hidden />
                </Link>
                <a href="#automatisierungsrechner" className={textLink}>
                  Mit Ihren Zahlen berechnen <ArrowDown className="size-4" aria-hidden />
                </a>
              </div>
              <nav aria-label="Orientierung auf dieser Seite" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300"><a href="#arbeitsalltag" className="hover:text-white hover:underline">Beispiele aus Ihrem Alltag</a><a href="#leistungen" className="hover:text-white hover:underline">Passende Leistung finden</a><a href="#vorgehen" className="hover:text-white hover:underline">So läuft die Zusammenarbeit</a></nav>
            </div>

            <div>
              <Image
                src={SEO_CONFIG.founderImagePath}
                alt="Mehmet Çatalsakal, Gründer von Codavo"
                width={4000}
                height={2667}
                priority
                sizes="(min-width: 1400px) 480px, (min-width: 1024px) 35vw, 100vw"
                className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover object-center"
              />
              <div className="mt-5">
                <p className="text-xl font-semibold tracking-tight text-white">Mehmet Çatalsakal</p>
                <p className="mt-1 text-sm font-medium text-indigo-200">Wirtschaftsingenieur · Gründer von Codavo</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Rund zehn Jahre Automotive-Erfahrung bei Bosch, zuletzt als Teamleiter im internationalen Projekteinkauf. Bei Codavo verbinde ich dieses Prozessverständnis mit KI-Beratung, Prozessautomatisierung und individuellen KI-Lösungen. Als Mitgründer des KI-Startups OPNY habe ich mit unserem Team bereits mehrere KI-Produkte auf den Markt gebracht.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="potenzial-titel" className="py-8 md:py-12">
          <div className="container container--wide">
            <figure className="m-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-700 to-indigo-950 p-6 sm:p-9 lg:p-12">
              <figcaption>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">Ihr Automatisierungspotenzial</p>
                <h2 id="potenzial-titel" className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Weniger manuelle Arbeit.<br />Mehr Spielraum für Ihren Gewinn.
                </h2>
              </figcaption>
              <dl className="mt-8 grid gap-4 lg:grid-cols-3">
                {heroMetrics.map(({ value, label }) => (
                  <div key={label} className="flex min-w-0 flex-col-reverse justify-end gap-5 rounded-2xl border border-white/40 bg-white p-6 sm:p-7">
                    <dt className="max-w-sm text-base leading-7 text-slate-700">{label}</dt>
                    <dd className="text-5xl font-semibold tracking-tighter tabular-nums text-indigo-700 sm:text-6xl xl:text-7xl">{value}</dd>
                  </div>
                ))}
              </dl>
              {marginAfter !== null && (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-y border-white/25 py-5">
                  <p className="text-base text-indigo-100">Operative Gewinnmarge im ersten Jahr<span className="mt-1 block text-xs text-indigo-100/90">Anteil des operativen Gewinns am Umsatz</span></p>
                  <p className="text-3xl font-semibold tracking-tight tabular-nums text-white sm:text-4xl">
                    {percent.format(initialScenario.margin / 100)} → {percent.format(marginAfter / 100)}
                  </p>
                </div>
              )}
              <p className="mt-5 text-xs leading-relaxed text-indigo-100">
                <strong className="font-semibold text-white">Modellannahmen.</strong>{" "}
                {euro.format(initialScenario.revenue)} unveränderter Jahresumsatz und {euro.format(operatingProfit)} bisheriger operativer Gewinn.
                {" "}{initialScenario.team} Mitarbeitende mit je {initialScenario.hours} Stunden manueller Arbeit pro Woche bei {euro.format(initialScenario.hourlyCost)} pro Stunde und {weeksPerYear} Wochen im Jahr.
                {" "}{percent.format(initialScenario.realized / 100)} des Werts der frei werdenden Zeit vermeiden Ausgaben. Angesetzt sind {euro.format(initialScenario.running)} laufende Kosten pro Jahr und {euro.format(initialScenario.implementation)} einmalige Umsetzungskosten. Die Kosteneinsparung bezieht sich auf {euro.format(hoursNow * initialScenario.hourlyCost)} bisherige Arbeitskosten der betrachteten Tätigkeiten und beträgt {euro.format(costReduction)} pro Jahr. Der Mehrgewinn im ersten Jahr beträgt {euro.format(firstYearImpact)}.
              </p>
            </figure>
          </div>
        </section>

        <section id="arbeitsalltag" className="section section--quiet scroll-mt-16">
          <div className="container container--wide grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="eyebrow">Vier Situationen aus dem Arbeitsalltag</p>
              <h2 className="section-title mt-4 max-w-lg text-white">Wo Ihr Team im Alltag Zeit sparen kann</h2>
              <p className="lede mt-5 max-w-lg">Weniger Routine im Vertrieb und Einkauf, weniger Rückfragen bei der Projektübergabe und schneller verfügbare Prüfnachweise.</p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {situations.map(({ area, title, detail, outcome, icon: Icon, ...situation }) => (
                <article key={area} className="grid grid-cols-[auto_1fr] gap-4 py-5 sm:gap-5 sm:py-6">
                  <Icon className="mt-1 size-5 text-indigo-300 sm:size-6" aria-hidden />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">{area}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">{title}</h3>
                    <dl className="mt-3 space-y-3 leading-7 text-slate-300 sm:grid sm:grid-cols-[1fr_1fr] sm:gap-5 sm:space-y-0">
                      <div>
                        <dt className="text-sm font-semibold text-slate-200">Heute von Hand</dt>
                        <dd className="mt-1">{detail}</dd>
                      </div>
                      <div className="border-l border-indigo-300/35 pl-4">
                        <dt className="text-sm font-semibold text-indigo-200">So kann es laufen</dt>
                        <dd className="mt-1">{outcome}</dd>
                      </div>
                    </dl>
                    {"project" in situation && situation.project && (
                      <a href={situation.project.href} className={`mt-3 text-sm ${textLink}`}>
                        {situation.project.label} <ArrowDown className="size-4" aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="leistungen" className="section section--quiet scroll-mt-16">
          <div className="container container--wide grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="eyebrow">Unsere Leistungen</p>
              <h2 className="section-title mt-4 max-w-lg text-white">Welche Unterstützung passt zu Ihrem Engpass?</h2>
              <p className="lede mt-5 max-w-lg">Daten einmal erfassen, Wiedervorlagen automatisch anlegen und Dokumente für die Prüfung vorbereiten. Wir entwickeln die Lösung passend zu Ihrem Ablauf.</p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {automationOffers.map(({ id, title, summary, href, need }) => (
                <article key={id} className="py-5">
                  <p className="mb-2 text-sm text-indigo-200">{need}</p>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-slate-300">{summary}</p>
                  <Link href={href} className={`mt-2 text-sm ${textLink}`} aria-label={`${title} im Detail`}>
                    Leistung ansehen <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="automatisierungsrechner" className="scroll-mt-16 bg-[#e8ebf5] py-16 text-slate-950 md:py-24">
          <div className="container container--wide">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-800">Automatisierungsrechner</p>
            <h2 className="section-title mt-4 max-w-4xl">Was kosten manuelle Routineaufgaben?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Berechnen Sie den heutigen Aufwand für Ihr Team und sehen Sie, wie viel Arbeitszeit durch Automatisierung frei werden könnte.
            </p>
            <div className="mt-8"><AutomationCalculator /></div>
          </div>
        </section>

        <section id="vorgehen" className="section section--alt scroll-mt-16">
          <div className="container container--wide">
            <p className="eyebrow">So arbeitet Codavo</p>
            <h2 className="section-title mt-4 max-w-3xl text-white">In fünf Schritten vom manuellen Ablauf zur Umsetzung</h2>
            <ol className="mt-9 divide-y divide-white/15 border-y border-white/15">
              {approach.map(({ title, detail }, index) => (
                <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-2 py-5 md:grid-cols-[4rem_0.85fr_1.15fr] md:gap-7 md:py-6">
                  <span className="font-mono text-lg text-indigo-300" aria-hidden>0{index + 1}</span>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="col-start-2 max-w-2xl leading-7 text-slate-300 md:col-start-3">{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>



        <section id="about" className="section section--quiet scroll-mt-16">
          <div className="container grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-12">
            <Image
              src="/images/about/mehmet-catalsakal-fotoshooting-2026.jpg"
              alt="Mehmet Çatalsakal, Gründer von Codavo"
              width={1600}
              height={2400}
              sizes="(min-width: 768px) 384px, (min-width: 448px) 384px, 90vw"
              className="aspect-[4/5] w-full max-w-sm rounded-2xl border border-white/10 object-cover object-[50%_25%]"
            />
            <div>
              <p className="eyebrow">Ihr Ansprechpartner</p>
              <h2 className="section-title mt-4 text-white">Mehmet Çatalsakal</h2>
              <p className="lede mt-4">
                Ich bin Wirtschaftsingenieur und war rund zehn Jahre bei Bosch tätig, zuletzt als Teamleiter im internationalen Projekteinkauf. Bei Codavo verbinde ich diese Erfahrung mit KI-Beratung, Prozessautomatisierung und der Entwicklung individueller KI-Lösungen.
              </p>
              <p className="lede mt-4">
                Außerdem bin ich Mitgründer des KI-Startups OPNY. Gemeinsam mit unserem Team haben wir bereits mehrere KI-Produkte auf den Markt gebracht. Diese Erfahrung aus der Produktentwicklung bringe ich in die Planung und Umsetzung Ihrer KI-Lösungen ein.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container container--wide">
            <p className="eyebrow">Eigene Entwicklungen</p>
            <h2 className="section-title mt-4 text-white">Vertrieb und Projekt-Onboarding</h2>
            <div className="mt-9 grid gap-8 md:grid-cols-2 md:gap-12">
              <article id="sales-intelligence" className="scroll-mt-24 border-t border-indigo-300/40 pt-5">
                <p className="eyebrow">Eigene Anwendung</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Sales Intelligence Plattform</h3>
                <p className="mt-3 leading-7 text-slate-300">Eine eigene Anwendung für Lead-Recherche, CRM und Wiedervorlagen. Sie bündelt die Recherche und die weitere Bearbeitung im Vertrieb.</p>
              </article>
              <article id="projekt-onboarding" className="scroll-mt-24 border-t border-indigo-300/40 pt-5">
                <p className="eyebrow">Eigene Anwendung</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Projekt-Onboarding</h3>
                <p className="mt-3 leading-7 text-slate-300">Ein digitales Onboarding, das Projektangaben und Unterlagen an einer Stelle erfasst und dem Umsetzungsteam zur Prüfung übergibt.</p>
              </article>
            </div>
            <aside className="mt-10 flex items-start gap-4 border-t border-white/10 pt-6 text-sm leading-6 text-slate-300">
              <FileCheck2 className="mt-1 size-5 shrink-0 text-indigo-300" aria-hidden />
              <div>
                <h3 className="font-semibold text-white">Produkte von OPNY</h3>
                <p className="mt-1"><a className={textLink} href="https://www.opny.ai/produkte/nodex">NodeX</a> bündelt freigegebene KI-Zugänge und Nutzungsregeln. Weitere Produkte richten sich an betriebliche Audit- und Compliance-Prozesse.</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="faq" className="section section--quiet scroll-mt-24">
          <div className="container max-w-4xl">
            <h2 className="section-title text-white">Ihre Fragen zu KI-Automatisierung</h2>
            <p className="lede mt-5">Von Kosten und Systemanbindung bis zum sicheren Einsatz im Arbeitsalltag: die wichtigsten Antworten für Ihr Unternehmen.</p>
            <div className="mt-8"><FAQAccordion items={automationFaqs} /></div>
          </div>
        </section>

        <section className="section section--feature" data-mobile-cta-stop>
          <div className="container max-w-4xl">
            <h2 className="section-title text-white">Finden Sie heraus, wo Ihr Team Zeit sparen kann</h2>
            <p className="lede mt-5 max-w-2xl">Bringen Sie einen wiederkehrenden Vorgang mit. Im kostenlosen Erstgespräch klären wir, welche Arbeit sich abnehmen lässt und ob sich eine genauere Analyse lohnt.</p>
            <Link href="/kontakt" className="cta-primary mt-7" data-track-event="cta_contact_click" data-track-label="Home Automatisierung Abschluss">
              Erstgespräch anfragen <ArrowRight className="ml-2 size-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
