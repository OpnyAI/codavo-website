import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/leistungen",
  title: "Leistungen für professionelle Unternehmenswebsites | Codavo",
  description: "Unternehmenswebsites, Landingpages, Funnel, Web-Apps, individuelle Software sowie Hosting und Wartung.",
});

const offers = [
  {
    title: "Unternehmenswebsites",
    price: "ab 4.900 €",
    text: "Individuelle Websites für Positionierung, Vertrauen, Sichtbarkeit und eine klare digitale Grundlage.",
    href: "/webdesign",
  },
  {
    title: "Landingpages",
    price: "ab 2.900 €",
    text: "Fokussierte Seiten für einzelne Angebote, Kampagnen und konkrete Anfrage- oder Kontaktziele.",
    href: "/landingpage-erstellen-lassen",
  },
  {
    title: "Funnel-Systeme",
    price: "ab 3.900 €",
    text: "Strukturierte Nutzerwege für Leadgenerierung, Qualifizierung, Terminbuchung und Folgeprozesse.",
    href: "/funnel-erstellen-lassen",
  },
  {
    title: "Individuelle Software",
    price: "ab 14.900 €",
    text: "Webbasierte Systeme für Portale, Dashboards, Schnittstellen, Automatisierung und spezifische Prozesse.",
    href: "/softwareloesungen-fuer-kmu",
  },
  {
    title: "Hosting & Wartung",
    price: "ab 49 €/Monat",
    text: "Technischer Betrieb, Wartung, Kontrolle und planbare Weiterentwicklung nach dem Launch.",
    href: "/hosting-wartung",
  },
  {
    title: "Web-Apps",
    price: "individueller Projektumfang",
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
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">Digitale Leistungen mit der Unternehmenswebsite im Mittelpunkt</h1>
            <p className="lede mx-auto mt-6 max-w-3xl">Codavo entwickelt professionelle Websites als Grundlage und ergänzt sie bei Bedarf um Landingpages, Funnel, Web-Apps, Software und laufende Betreuung.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer) => (
                <Link key={offer.href} href={offer.href} className="card group flex h-full min-w-0 flex-col">
                  <h2 className="break-words text-2xl font-semibold tracking-tight text-white">{offer.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-indigo-300">{offer.price}</p>
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
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-white">Welche Leistung passt zu Ihrem Ziel?</h2>
            <p className="mt-4 text-slate-300">Die Einstiegspreise dienen als Orientierung. Im Erstgespräch klären wir den finalen Umfang anhand von Anforderungen, Inhalten und Projektziel.</p>
            <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Leistungen Abschluss" className="cta-primary mt-7">Kostenloses Erstgespräch vereinbaren</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
