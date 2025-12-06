import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt | Codavo Webstudio",
  description:
    "Nimm Kontakt mit Codavo Webstudio auf – für Websites & Web-Apps, die für dich arbeiten. Schnelle, moderne Umsetzung in 1–4 Wochen für Kund:innen in Deutschland und der DACH-Region.",
};

export default function KontaktPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        <div id="kontakt" className="container mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Kontakt
          </h1>

          <p className="mt-4 text-slate-300 max-w-2xl">
            Du möchtest eine neue Website, einen Relaunch oder eine individuelle
            Web-App umsetzen? Codavo Webstudio arbeitet mit Kund:innen in
            Stuttgart, deutschlandweit und in der gesamten DACH-Region. Je nach
            Umfang ist dein Projekt in der Regel innerhalb von{" "}
            <span className="font-semibold text-white">1–4 Wochen</span> online
            – mit klarer UX, performanter Technik und sauberem Setup.
          </p>

          <p className="mt-4 text-slate-300 max-w-2xl">
            Am direktesten erreichst du uns per Telefon oder WhatsApp.
            Alternativ kannst du uns auch bequem per E-Mail schreiben.
          </p>

          {/* Kontakt-Kacheln */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-lg font-semibold text-white">Telefon</h2>
              <p className="mt-2 text-sm text-slate-300">
                Direkt und persönlich – ideal für ein kurzes erstes Kennenlernen
                oder Rückfragen zum Projekt.
              </p>
              <a
                href="tel:+4915111956479"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
              >
                +49 1511 195 64 79
              </a>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-300">
                Schnelle Projektanfrage, Sprachnachricht oder ein Link zur
                bestehenden Website – alles bequem per Chat.
              </p>
              <a
                href="https://wa.me/4915111956479"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
              >
                WhatsApp-Chat starten ↗
              </a>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">E-Mail</h2>
              <p className="mt-2 text-sm text-slate-300">
                Ideal, wenn du bereits ein Briefing, ein PDF oder konkrete
                Anforderungen teilen möchtest.
              </p>
              <a
                href="mailto:kontakt@codavo-webstudio.de"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
              >
                kontakt@codavo-webstudio.de
              </a>
            </div>
          </div>

          {/* Hinweis zur Datenverarbeitung */}
          <p className="mt-8 text-xs text-slate-500 max-w-2xl">
            Hinweis: Mit deiner Kontaktaufnahme per Telefon, E-Mail oder
            WhatsApp verarbeiten wir deine Angaben ausschließlich zur
            Beantwortung deiner Anfrage und zur Vorbereitung bzw. Durchführung
            eines möglichen Projekts. Details findest du in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline underline-offset-2 hover:text-white"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
