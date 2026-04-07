import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import TrackedContactLink from "@/components/TrackedContactLink";

export const metadata: Metadata = {
  title: "Kontakt & Strategie-Call | Codavo Webstudio",
  description:
    "Projektanfrage oder Strategie-Call: Wir klären Ziel, Scope und Hebel für Webdesign, Software und digitale Systeme - strukturiert und effizient.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    url: "/kontakt",
    siteName: "Codavo Webstudio",
    title: "Kontakt & Strategie-Call | Codavo Webstudio",
    description:
      "Projektanfrage oder Strategie-Call: Wir klären Ziel, Scope und Hebel für Webdesign, Software und digitale Systeme - strukturiert und effizient.",
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
    title: "Kontakt & Strategie-Call | Codavo Webstudio",
    description:
      "Projektanfrage oder Strategie-Call: Wir klären Ziel, Scope und Hebel für Webdesign, Software und digitale Systeme - strukturiert und effizient.",
    images: ["/og.jpg"],
  },
};

export default function KontaktPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        <div id="kontakt" className="container mt-10 md:mt-6 lg:mt-4 section">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Kontakt
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Du möchtest eine neue Website, einen Relaunch oder eine individuelle
            Web-App umsetzen? Codavo Webstudio arbeitet mit Kund:innen in Stuttgart,
            deutschlandweit und in der gesamten DACH-Region. Je nach Umfang ist dein
            Projekt in der Regel innerhalb von{" "}
            <span className="font-semibold text-white">1-4 Wochen</span> online -
            mit klarer UX, performanter Technik und sauberem Setup.
          </p>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Am direktesten erreichst du uns per Telefon oder WhatsApp. Alternativ
            kannst du uns auch bequem per E-Mail schreiben.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-lg font-semibold text-white">Telefon</h2>
              <p className="mt-2 text-sm text-slate-300">
                Direkt und persönlich - ideal für ein kurzes erstes Kennenlernen
                oder Rückfragen zum Projekt.
              </p>
              <TrackedContactLink
                url="tel:+4915111956479"
                data-track-event="contact_submit"
                data-track-label="Kontaktseite Telefon"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="phone"
              >
                +49 1511 195 64 79
              </TrackedContactLink>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-300">
                Schnelle Projektanfrage, Sprachnachricht oder ein Link zur
                bestehenden Website - alles bequem per Chat.
              </p>
              <TrackedContactLink
                url="https://wa.me/4915111956479"
                data-track-event="contact_submit"
                data-track-label="Kontaktseite WhatsApp"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="whatsapp"
              >
                WhatsApp-Chat starten ↗
              </TrackedContactLink>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">E-Mail</h2>
              <p className="mt-2 text-sm text-slate-300">
                Ideal, wenn du bereits ein Briefing, ein PDF oder konkrete
                Anforderungen teilen möchtest.
              </p>
              <TrackedContactLink
                url="mailto:kontakt@codavo-webstudio.de"
                data-track-event="contact_submit"
                data-track-label="Kontaktseite E-Mail"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="email"
              >
                kontakt@codavo-webstudio.de
              </TrackedContactLink>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500 max-w-2xl">
            Hinweis: Mit deiner Kontaktaufnahme per Telefon, E-Mail oder WhatsApp
            verarbeiten wir deine Angaben ausschließlich zur Beantwortung deiner
            Anfrage und zur Vorbereitung bzw. Durchführung eines möglichen Projekts.
            Details findest du in unserer{" "}
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
