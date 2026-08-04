import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ContactThankYouTracking from "@/components/contact/ContactThankYouTracking";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/danke",
  title: "Vielen Dank für Ihre Bewerbung | Codavo",
  description:
    "Vielen Dank für Ihre Bewerbung bei Codavo. Wir prüfen Ihre Angaben persönlich und melden uns zeitnah bei Ihnen.",
  noIndex: true,
});

export default function DankePage() {
  return (
    <>
      <ContactThankYouTracking />
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36">
        <section className="container section pt-12 md:pt-16">
          <div className="card mx-auto max-w-3xl border border-emerald-400/20 bg-emerald-500/10 p-7 sm:p-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow text-emerald-300">Anfrage eingegangen</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Vielen Dank für Ihre Bewerbung
                </h1>
                <p className="mt-5 leading-7 text-slate-200">
                  Wir prüfen Ihre Angaben persönlich und melden uns zeitnah bei
                  Ihnen, wenn ein kostenloses Erstgespräch sinnvoll erscheint.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer
                  Anfrage und zur Vorbereitung eines möglichen Projekts
                  verwendet.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-px"
                  >
                    Zur Startseite
                  </Link>
                  <Link
                    href="/leistungen"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
