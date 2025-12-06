import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leistungen – Webdesign, Websites & Web-Apps | Codavo Webstudio",
  description:
    "Unsere Leistungen im Webdesign: moderne Websites, Landingpages und Web-Apps. Codavo Webstudio entwickelt schnelle, saubere Auftritte für Kund:innen in Stuttgart, ganz Deutschland und der DACH-Region – mit Fokus auf 1–4 Wochen Umsetzungszeit, Performance und klare UX.",
};

export default function LeistungenPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        {/* Intro-Bereich – Höhe analog FAQ-Seite */}
        <section className="container mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Leistungen: Webdesign, Websites & Web-Apps
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Codavo Webstudio entwickelt Websites und Web-Apps, die nicht nur gut
            aussehen, sondern messbar etwas bringen. Wir arbeiten remote mit
            Kund:innen in ganz Deutschland und der DACH-Region – mit klaren
            Prozessen und kurzen Projektlaufzeiten von etwa{" "}
            <span className="text-white font-medium">1–4 Wochen</span>.
          </p>
        </section>

        {/* Haupt-Leistungen */}
        <section className="container mt-10 grid gap-6 md:grid-cols-3">
          <div className="card h-full">
            <h2 className="text-xl font-semibold text-white">
              Moderne Websites
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Individuelle Websites für Selbstständige, Unternehmen und Teams –
              klar strukturiert, schnell, mobil-optimiert und mit Fokus auf
              Anfragen & Kontaktaufnahmen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Klarer Aufbau für deine Zielgruppen</li>
              <li>• Mobil-Optimierung (Mobile-First)</li>
              <li>• Schnelle Ladezeiten & saubere Technik</li>
              <li>• Basis-SEO & Tracking vorbereitet</li>
            </ul>
          </div>

          <div className="card h-full">
            <h2 className="text-xl font-semibold text-white">
              Landingpages & Kampagnenseiten
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Fokussierte Seiten für spezielle Angebote, Kampagnen oder
              Anzeigen-Traffic – klarer Aufbau, wenig Ablenkung, klare
              Handlungsaufforderung.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Für Ads, spezielle Aktionen oder Produkte</li>
              <li>• Conversion-orientiertes Design</li>
              <li>• A/B-Test-freundliche Struktur</li>
              <li>• Sauberes Tracking (z. B. Events)</li>
            </ul>
          </div>

          <div className="card h-full">
            <h2 className="text-xl font-semibold text-white">Web-Apps</h2>
            <p className="mt-3 text-sm text-slate-300">
              Individuelle, browserbasierte Anwendungen – z. B. Portale,
              Dashboards oder Tools, die genau zu deinen Prozessen passen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Moderne Stacks (z. B. React / Next.js)</li>
              <li>• Individuelle Logik & Funktionen</li>
              <li>• API-Anbindungen & Integrationen</li>
              <li>• Skalierbares Setup als Basis für später</li>
            </ul>
          </div>
        </section>

        {/* Prozess & Speed */}
        <section className="container mt-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Klarer Prozess, kurze Laufzeiten
            </h2>
            <p className="mt-4 text-slate-300">
              Statt endloser Abstimmungsschleifen setzen wir auf einen
              strukturierten Ablauf: Briefing, Struktur, Design, Umsetzung,
              Go-Live. Entscheidungen werden früh getroffen, damit du schnell
              live bist – in der Regel in{" "}
              <span className="text-white font-medium">1–4 Wochen</span>, je
              nach Umfang.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <span className="text-white font-semibold">1. Kick-off</span> –
                Ziele, Inhalte, Beispiele, Prioritäten.
              </li>
              <li>
                <span className="text-white font-semibold">
                  2. Struktur & Layout
                </span>{" "}
                – Seitenaufbau, Wireframes, erste Designs.
              </li>
              <li>
                <span className="text-white font-semibold">3. Umsetzung</span> –
                Entwicklung, Performance, SEO-Basics, Testing.
              </li>
              <li>
                <span className="text-white font-semibold">4. Launch</span> –
                Go-Live, Basis-Tracking, Feinschliff.
              </li>
            </ol>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white">
              Für wen ist Codavo Webstudio geeignet?
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Solo-Selbstständige, die einen klaren Auftritt wollen</li>
              <li>• Kleine und mittlere Unternehmen mit Fokus auf Anfragen</li>
              <li>• Teams, die eine saubere, moderne Web-Basis brauchen</li>
              <li>• Kund:innen aus ganz Deutschland und der DACH-Region</li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              Wenn dir Tempo, saubere Technik und ein aufgeräumtes Design
              wichtig sind, passen wir wahrscheinlich gut zusammen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mt-16">
          <div className="card text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Lass uns über dein Projekt sprechen
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
              Schick ein paar Stichpunkte zu dir und deinem Projekt – wir melden
              uns in der Regel innerhalb von 24–48 Stunden mit einer
              Einschätzung und einem Vorschlag für das weitere Vorgehen.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+4915111956479"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2.5 font-medium shadow hover:shadow-lg transition"
              >
                Direkt anrufen
              </a>
              <a
                href="mailto:kontakt@codavo-webstudio.de"
                className="rounded-full border border-white/30 text-white/90 px-5 py-2.5 font-medium hover:bg-white/10 transition"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
