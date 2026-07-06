import Link from "next/link";
import Footer from "@/components/Footer";
import TrackedContactLink from "@/components/TrackedContactLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/kontakt",
  title: "Kontakt & Strategie-Call | Codavo Webstudio",
  description:
    "Projektanfrage oder Strategie-Call: Wir klären Ziel, Scope und Hebel für Webdesign, Software und digitale Systeme - strukturiert und effizient.",
});

export default function KontaktPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        <div id="kontakt" className="container mt-10 md:mt-6 lg:mt-4 section">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Kontakt
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Sie möchten eine neue Website, einen Relaunch, eine Web-App oder ein
            digitales System einordnen? Codavo Webstudio arbeitet mit Unternehmen
            in Stuttgart, deutschlandweit und in der gesamten DACH-Region.
          </p>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Je nach Projektumfang unterscheiden sich Analyse, Konzeption,
            Entwicklung und Umsetzung. Im Erstgespräch klären wir gemeinsam Ziel,
            Budgetrahmen, passenden Projektumfang und einen realistischen Zeitplan.
          </p>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Telefon, WhatsApp oder E-Mail eignen sich für eine erste Zielklärung,
            konkrete Rückfragen oder den nächsten sinnvollen Schritt.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-lg font-semibold text-white">Telefon</h2>
              <p className="mt-2 text-sm text-slate-300">
                Für ein unverbindliches Erstgespräch, eine erste Zielklärung oder
                Rückfragen zum passenden Projektumfang.
              </p>
              <TrackedContactLink
                url="tel:+4915111956479"
                dataTrackEvent="cta_contact_click"
                dataTrackLabel="Kontaktseite Telefon"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="phone"
              >
                +49 1511 195 64 79
              </TrackedContactLink>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-300">
                Für kurze Rückfragen, einen Link zur bestehenden Website oder die
                Abstimmung eines nächsten sinnvollen Schritts.
              </p>
              <TrackedContactLink
                url="https://wa.me/4915111956479"
                dataTrackEvent="cta_contact_click"
                dataTrackLabel="Kontaktseite WhatsApp"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="whatsapp"
              >
                WhatsApp-Chat starten ↗
              </TrackedContactLink>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white">E-Mail</h2>
              <p className="mt-2 text-sm text-slate-300">
                Sinnvoll, wenn Sie bereits ein Briefing, ein PDF, Anforderungen
                oder einen Budgetrahmen teilen möchten.
              </p>
              <TrackedContactLink
                url="mailto:kontakt@codavo-webstudio.de"
                dataTrackEvent="cta_contact_click"
                dataTrackLabel="Kontaktseite E-Mail"
                className="mt-4 inline-flex text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                contactMethod="email"
              >
                kontakt@codavo-webstudio.de
              </TrackedContactLink>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500 max-w-2xl">
            Hinweis: Mit Ihrer Kontaktaufnahme per Telefon, E-Mail oder WhatsApp
            verarbeiten wir Ihre Angaben ausschließlich zur Beantwortung Ihrer
            Anfrage und zur Vorbereitung bzw. Durchführung eines möglichen Projekts.
            Details finden Sie in unserer{" "}
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
