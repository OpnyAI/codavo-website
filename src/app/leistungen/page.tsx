import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { automationOffers } from "@/lib/automation";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/leistungen",
  automationImage: true,
  title: "KI-Automatisierung und KI-Beratung für den Mittelstand | Codavo",
  description: "Die Leistungen von Codavo im Überblick. KI-Beratung, Prozessautomatisierung, individuelle KI-Lösungen und Webdesign.",
});

const offers = [
  {
    title: "Unternehmenswebsites",
    text: "Individuelle Websites für Positionierung, Vertrauen, Sichtbarkeit und eine klare digitale Grundlage.",
    href: "/webdesign",
  },
  {
    title: "Landingpages",
    text: "Fokussierte Seiten für einzelne Angebote, Kampagnen und konkrete Anfrage- oder Kontaktziele.",
    href: "/landingpage-erstellen-lassen",
  },
  {
    title: "Funnel-Systeme",
    text: "Strukturierte Nutzerwege für Leadgenerierung, Qualifizierung, Terminbuchung und Folgeprozesse.",
    href: "/funnel-erstellen-lassen",
  },
  {
    title: "Hosting & Wartung",
    text: "Technischer Betrieb, Wartung, Kontrolle und planbare Weiterentwicklung nach dem Launch.",
    href: "/hosting-wartung",
  },
  {
    title: "Web-Apps",
    text: "Web-Apps werden in der Regel als individuelle Software anhand von Funktionen, Rollen und Integrationen kalkuliert.",
    href: "/web-app-entwicklung",
  },
] as const;

export default function Page() {
  return (
    <>
      <main className="min-h-screen pt-24">
        <section className="section text-center">
          <div className="container max-w-4xl">
            <p className="eyebrow">Codavo Leistungen</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">KI-Automatisierung für den industriellen Mittelstand</h1>
            <p className="lede mx-auto mt-6 max-w-3xl">Weniger Daten übertragen, Dokumente suchen und Vorgänge nachhalten: Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und entwickeln passende KI-Lösungen. Von der Auswahl sinnvoller Einsatzfälle bis zur Einführung und Betreuung.</p>
          </div>
        </section>


        <section className="section section--quiet"><div className="container max-w-6xl"><p className="eyebrow">KI-Beratung und Umsetzung</p><h2 className="section-title mt-4 text-white">Weniger manuelle Arbeit im industriellen Mittelstand</h2><Link href="/automatisierung" className="mt-5 inline-block font-medium text-indigo-300">KI-Automatisierung im Überblick →</Link><div className="mt-8 grid gap-5 md:grid-cols-2">{automationOffers.map((offer) => <Link key={offer.id} href={offer.href} className="card group"><p className="mb-3 text-sm text-indigo-200">{offer.need}</p><h3 className="text-2xl font-semibold text-white">{offer.title}</h3><p className="mt-4 leading-7 text-slate-300">{offer.summary}</p><span className="mt-6 inline-flex text-sm font-medium text-indigo-300">Leistung ansehen →</span></Link>)}</div></div></section>

        <section className="section section--alt"><div className="container mb-8 max-w-6xl"><p className="eyebrow">Ergänzende Leistungen: Webdesign und Anwendungen</p><h2 className="section-title mt-4 text-white">Auch für Ihren Webauftritt der richtige Ansprechpartner</h2></div>
          <div className="container max-w-6xl">
            <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => (
                <Link key={offer.href} href={offer.href} className="card group flex h-full min-w-0 flex-col">
                  <h3 className="break-words text-2xl font-semibold tracking-tight text-white">{offer.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 md:text-base">{offer.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                    Details ansehen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>

            <aside className="mt-8 rounded-3xl border border-indigo-300/15 bg-indigo-400/[0.06] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Tracking und Analytics als ergänzende Projektleistung</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                Tracking-Setups, z. B. Google Analytics, Google Ads Conversion Tracking oder Meta Pixel, werden nach Bedarf passend zum Projektziel und zur Einwilligungslogik integriert. Umfang und eingesetzte Tools richten sich nach dem jeweiligen Website-, Landingpage- oder Funnel-Projekt.
              </p>
            </aside>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <aside className="rounded-3xl border border-white/8 bg-white/[0.025] p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white">Website-Referenzen</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                  Beispiele für Unternehmenswebsites und Landingpages, die Codavo umgesetzt hat.
                </p>
                <Link href="/cases" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white">
                  Website-Referenzen ansehen <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </aside>

              <aside className="rounded-3xl border border-white/8 bg-white/[0.025] p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white">Unsicher, welche Lösung passt?</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                  Im kostenlosen Erstgespräch klären wir Ihre Ausgangslage, die wichtigsten Ziele und einen sinnvollen nächsten Schritt.
                </p>
                <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Leistungen Erstgespräch Orientierung" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white">
                  Kostenloses Erstgespräch <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </aside>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-white">Welcher Ablauf kostet Ihr Team zu viel Zeit?</h2>
            <p className="mt-4 text-slate-300">Im kostenlosen Erstgespräch besprechen wir Ihre manuellen Abläufe, vorhandenen Systeme und Ziele. Gemeinsam klären wir, welcher Einstieg in die KI-Automatisierung sinnvoll ist.</p>
            <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Leistungen Abschluss" className="cta-primary mt-7">Kostenloses Erstgespräch</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
