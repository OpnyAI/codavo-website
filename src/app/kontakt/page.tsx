import Link from "next/link";
import BusinessApplicationForm from "@/components/contact/BusinessApplicationForm";
import Footer from "@/components/Footer";
import TrackedContactLink from "@/components/TrackedContactLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/kontakt",
  title: "Für kostenloses Erstgespräch bewerben | Codavo",
  description:
    "Bewerben Sie sich für ein kostenloses Erstgespräch mit Codavo. Wir prüfen Ihr Vorhaben rund um Website, Relaunch, Auffindbarkeit oder individuelle Software persönlich.",
});

export default function KontaktPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36">
        <section id="kontakt" className="container section pt-12 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Bewerbung für Geschäftskunden</p>
            <h1 className="display-title mt-5 text-white">
              Ihr kostenloses Erstgespräch mit Codavo
            </h1>
            <p className="lede mx-auto mt-6 max-w-2xl">
              Bitte füllen Sie das folgende kurze Formular aus, damit wir
              wissen, wie wir Ihnen am besten helfen können.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Wir machen uns zunächst ein Bild von Ihrem Unternehmen und Ihrem
              Vorhaben. Anschließend entscheiden wir, ob und in welcher Form
              ein kostenloses Erstgespräch sinnvoll ist.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
            <BusinessApplicationForm />
          </div>
        </section>

        <section className="container section section--quiet">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Direkter Kontakt</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Sie möchten vorab nur eine kurze Frage klären?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Dann erreichen Sie uns auch direkt per Telefon, WhatsApp oder
              E-Mail.
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-3">
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

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
            Hinweis: Mit Ihrer Kontaktaufnahme per Telefon, E-Mail oder WhatsApp
            verarbeiten wir Ihre Angaben ausschließlich zur Beantwortung Ihrer
            Anfrage und zur Vorbereitung beziehungsweise Durchführung eines
            möglichen Projekts. Details finden Sie in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline underline-offset-2 hover:text-white"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
