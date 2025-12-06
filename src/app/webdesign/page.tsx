// src/app/webdesign/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Webdesign Agentur – Moderne Websites für Stuttgart & DACH | Codavo Webstudio",
  description:
    "Codavo Webstudio ist deine Webdesign Agentur für moderne, schnelle Websites und Web-Apps. Wir erstellen individuelle Websites für Kund:innen in Stuttgart, ganz Deutschland und der DACH-Region – in 1–4 Wochen.",
};

export default function WebdesignPage() {
  return (
    <>
      <main className="min-h-[calc(100vh-4rem)] pt-28 md:pt-32 pb-20">
        <div className="container max-w-4xl">
          {/* Hero / Intro */}
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Webdesign · Websites · DACH-weit
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Webdesign & Websites, die für dich arbeiten – nicht nur gut
              aussehen.
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base">
              Codavo Webstudio entwickelt moderne Websites und Web-Apps für
              Solo-Selbstständige, Dienstleister und Unternehmen in{" "}
              <span className="font-semibold text-white">
                Stuttgart, ganz Deutschland und der DACH-Region
              </span>
              . Der Fokus: klare Inhalte, schnelle Ladezeiten und Projekte, die
              je nach Umfang in{" "}
              <span className="font-semibold text-white">1–4 Wochen</span>{" "}
              online sind.
            </p>
          </header>

          {/* Warum wir – kompakt */}
          <section className="mt-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Warum Codavo Webstudio als Webdesign-Agentur?
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Keine Baukasten-Optik, keine endlosen Agenturprozesse – sondern
              ein moderner Tech-Stack, klare Struktur und ein Ablauf, der auf
              Tempo ausgelegt ist.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  1–4 Wochen statt Monate
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Klare Schritte, kurze Feedbackschleifen – so kommen wir von
                  Idee zu Livegang ohne Umwege.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Fokus auf Inhalt & Klarheit
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Deine Leistungen werden so präsentiert, dass Besucher:innen
                  schnell verstehen, was du anbietest.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Moderner Stack & SEO-Basics
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Webdesign auf Basis von React / Next.js – mit Performance,
                  sauberem HTML und einer soliden Grundlage für SEO.
                </p>
              </div>
            </div>
          </section>

          {/* Leistungen – kurz & scannable */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Was wir im Webdesign für dich umsetzen
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Je nach Ausgangssituation sieht das Setup anders aus – die
              typischen Projekte:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Neue Website erstellen lassen
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Für alle, die bisher keinen professionellen Auftritt haben
                  oder komplett neu starten wollen.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Website-Relaunch & Modernisierung
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Wenn deine aktuelle Seite veraltet wirkt, langsam ist oder
                  kaum Anfragen bringt.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Landingpages, die konvertieren
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Fokussierte Seiten für einzelne Angebote, Kampagnen oder
                  Dienstleistungen – mit klarer Storyline und starken CTAs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Performance & SEO-Grundlagen
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  Technische Basis für Google: saubere Struktur, schnelle
                  Ladezeiten, ordentliche Überschriften-Hierarchie.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs md:text-sm text-slate-400">
              Eine ausführlichere Übersicht findest du auch unter{" "}
              <Link
                href="/leistungen"
                className="text-indigo-300 hover:text-white underline-offset-2 hover:underline"
              >
                Leistungen
              </Link>
              .
            </p>
          </section>

          {/* Ablauf – komprimiert */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              So laufen Webdesign-Projekte mit uns ab
            </h2>
            <ol className="mt-4 space-y-3 text-sm md:text-base text-slate-300">
              <li>
                <span className="font-semibold text-white">
                  1. Kennenlernen
                </span>{" "}
                – kurzes Gespräch zu Business, Zielgruppen und Zielen der
                Website.
              </li>
              <li>
                <span className="font-semibold text-white">
                  2. Struktur & Inhalte
                </span>{" "}
                – wir definieren Seitenstruktur, Inhalte und zentrale
                Botschaften.
              </li>
              <li>
                <span className="font-semibold text-white">
                  3. Design & Umsetzung
                </span>{" "}
                – modernes Layout, Entwicklung mit performanten Technologien,
                Performance- & SEO-Basics inklusive.
              </li>
              <li>
                <span className="font-semibold text-white">4. Launch</span> –
                wir begleiten Domain, Hosting & Go-Live und passen auf Wunsch
                nach.
              </li>
            </ol>
          </section>

          {/* Für wen – kurz gehalten */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Für wen ist unser Webdesign besonders sinnvoll?
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Besonders passend ist unsere Arbeitsweise für:
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-300">
              <li>• Solo-Selbstständige & kleine Unternehmen</li>
              <li>• Dienstleister, Beratungen & Agenturen</li>
              <li>• Tech-, SaaS- und KI-Unternehmen</li>
              <li>
                • alle, die schnell von „veraltet“ oder „gar nicht vorhanden“ zu
                einem modernen Auftritt wechseln möchten
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Webdesign-Projekt starten – in 1–4 Wochen live.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-200">
              Wenn du eine neue Website, einen Relaunch oder eine konvertierende
              Landingpage brauchst, lass uns kurz sprechen. Wir klären, was
              sinnvoll ist und welches Setup zu dir passt.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg transition"
              >
                Projekt anfragen
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                Case Studies ansehen
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
