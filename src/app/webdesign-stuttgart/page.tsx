// src/app/webdesign-stuttgart/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Webdesign Stuttgart – Moderne Websites & Webdesigner | Codavo Webstudio",
  description:
    "Webdesign in Stuttgart: Codavo Webstudio entwickelt moderne, schnelle Websites für Selbstständige & Unternehmen. Fokus auf Anfragen, Performance und klare UX – in 1–4 Wochen online.",
};

export default function WebdesignStuttgartPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Codavo Webstudio – Webdesign Stuttgart",
    url: "https://www.codavo-webstudio.de/webdesign-stuttgart",
    telephone: "+49 1511 1956479",
    image: "https://www.codavo-webstudio.de/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Naumannstr. 3",
      addressLocality: "Berglen",
      postalCode: "73663",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    areaServed: ["Stuttgart", "Ludwigsburg", "Esslingen", "Rems-Murr-Kreis"],
    description:
      "Webdesign in Stuttgart – moderne, schnelle Websites & Landingpages mit Fokus auf Anfragen und Performance.",
    sameAs: ["https://www.linkedin.com/company/codavo-webstudio"],
    // optionale Service-Beschreibung
    makesOffer: [
      {
        "@type": "Offer",
        name: "Webdesign Stuttgart – neue Website",
        description:
          "Erstellung einer modernen, performanten Website für Unternehmen und Selbstständige im Raum Stuttgart.",
      },
      {
        "@type": "Offer",
        name: "Webdesign Stuttgart – Website-Relaunch",
        description:
          "Relaunch bestehender Websites mit Fokus auf Struktur, UX und Performance.",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[calc(100vh-4rem)] pt-28 md:pt-32 pb-20">
        <div className="container max-w-4xl">
          {/* HERO / ABOVE THE FOLD – kompakt, klar auf Stuttgart */}
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Webdesign Stuttgart · Websites · Landingpages
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Webdesign in Stuttgart – Websites, die Anfragen bringen.
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base">
              Codavo Webstudio entwickelt moderne Websites und Landingpages für
              Unternehmen, Dienstleister und Selbstständige im Raum{" "}
              <span className="font-semibold text-white">
                Stuttgart & Region
              </span>
              . Fokus: klare Inhalte, schnelle Ladezeiten und ein Auftritt, der
              dir wirklich neue Anfragen bringt – statt nur „schön“ auszusehen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Kostenloses Erstgespräch sichern
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Referenzen ansehen
              </Link>
            </div>

            <p className="mt-3 text-xs md:text-sm text-slate-400">
              Typische Projektlaufzeit:{" "}
              <span className="font-semibold text-white">1–4 Wochen</span> vom
              Kick-off bis zum Go-Live – je nach Umfang.
            </p>
          </header>

          {/* SECTION 1 – Warum Codavo im Raum Stuttgart */}
          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Webdesign aus der Region – für Stuttgart und Umgebung.
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Wir arbeiten remote und gleichzeitig nah dran: Viele Projekte
              kommen aus Stuttgart, dem Rems-Murr-Kreis und dem Großraum
              Stuttgart. Der Ablauf ist schlank – egal, ob wir uns persönlich
              sehen oder alles digital läuft.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Klare Positionierung
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Deine Website zeigt klar, was du anbietest, für wen und warum
                  man dich wählen sollte – ohne Marketing-Buzzword-Overkill.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Fokus auf Anfragen
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Struktur, Content und Layout werden so aufgebaut, dass
                  Kontaktanfragen, Buchungen oder Leads im Mittelpunkt stehen.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Moderne Technik & SEO-Basis
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Umsetzung mit React/Next.js, schnelle Ladezeiten, saubere
                  Struktur – eine solide Grundlage für Google & Co.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 – Typische Webdesign-Pakete, kompakt */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Was wir im Webdesign für Kund:innen in Stuttgart umsetzen.
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Die meisten Projekte fallen in eine dieser Kategorien:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Neue Website für Unternehmen & Selbstständige
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Wenn du bisher keine starke Website hast oder von einem
                  Baukastensystem auf etwas Stabiles und Schnelles wechseln
                  möchtest.
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-300">
                  <li>• Individuelles Design statt generischer Templates</li>
                  <li>• Mobil-optimiert für Smartphone & Tablet</li>
                  <li>• Saubere Technik & Grundlage für SEO</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Website-Relaunch für bestehende Auftritte
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Ideal, wenn deine aktuelle Seite veraltet wirkt, zu langsam
                  ist oder kaum Anfragen bringt.
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-300">
                  <li>• Struktur & Inhalte werden geschärft</li>
                  <li>• Design wird modernisiert</li>
                  <li>• Performance & UX werden sichtbar verbessert</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Lokale Landingpages für Stuttgart
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Spezielle Seiten, die gezielt auf Suchanfragen wie „Webdesign
                  Stuttgart“ oder branchenspezifische Begriffe ausgerichtet
                  sind.
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-300">
                  <li>• Klar auf ein Thema & eine Region fokussiert</li>
                  <li>• Ideal für Google Ads & organische Suche</li>
                  <li>• Mit klarer Handlungsaufforderung</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Erweiterbare Basis für Web-Apps
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Wenn perspektivisch mehr als „nur Website“ geplant ist –
                  z.&nbsp;B. Kundenportal, Dashboard oder Web-App.
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-300">
                  <li>• Saubere Code-Basis</li>
                  <li>• Skalierbare Architektur</li>
                  <li>• Vorbereitung für spätere Erweiterungen</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 – Ablauf kurz & knackig */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              So läuft ein Webdesign-Projekt mit uns ab.
            </h2>
            <ol className="mt-4 space-y-3 text-sm md:text-base text-slate-300">
              <li>
                <span className="font-semibold text-white">
                  1. Kurzes Erstgespräch
                </span>{" "}
                – telefonisch oder per Video: Ziele, Status Quo, Budgetrahmen.
              </li>
              <li>
                <span className="font-semibold text-white">
                  2. Struktur & Inhalte
                </span>{" "}
                – wir schlagen einen Seitenaufbau vor und definieren die
                wichtigsten Botschaften.
              </li>
              <li>
                <span className="font-semibold text-white">
                  3. Design & Umsetzung
                </span>{" "}
                – modernes Layout, technische Umsetzung, Performance- &
                SEO-Basics.
              </li>
              <li>
                <span className="font-semibold text-white">4. Go-Live</span> –
                Domain, Hosting, Launch und kleiner Feinschliff nach dem Start.
              </li>
            </ol>
          </section>

          {/* SECTION 4 – Vertrauensanker / Für wen */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Für wen eignet sich unser Webdesign in Stuttgart?
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Besonders sinnvoll ist die Zusammenarbeit, wenn du:
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-300">
              <li>
                • als Selbstständige:r oder kleines Unternehmen sichtbar werden
                möchtest,
              </li>
              <li>
                • als Dienstleister oder Beratung mehr qualifizierte Anfragen
                willst,
              </li>
              <li>
                • als Tech-, SaaS- oder KI-Unternehmen ein komplexes Angebot
                verständlich darstellen musst,
              </li>
              <li>
                • im Raum Stuttgart einen modernen Auftritt brauchst, der zu
                deiner Positionierung passt.
              </li>
            </ul>
          </section>

          {/* FINAL CTA – klar auf Conversion */}
          <section className="mt-12 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Webdesign in Stuttgart anfragen.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-200">
              Wenn du über eine neue Website, einen Relaunch oder eine
              konvertierende Landingpage nachdenkst, lass uns kurz sprechen. In
              wenigen Minuten klären wir, ob und wie wir dir helfen können – und
              welche nächsten Schritte sinnvoll sind.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Unverbindliches Erstgespräch vereinbaren
              </Link>
              <a
                href="tel:+4915111956479"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Direkt anrufen: +49 1511 195 64 79
              </a>
            </div>
          </section>
        </div>

        {/* Local SEO JSON-LD nur auf dieser Seite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <Footer />
    </>
  );
}
