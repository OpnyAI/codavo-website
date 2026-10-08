import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import PresentationVideo from "@/components/PresentationVideo";
import TrackedContactLink from "@/components/TrackedContactLink";
import { createPageMetadata } from "@/lib/seo";

const pagePath = "/website-praesentation";

export const metadata = createPageMetadata({
  path: pagePath,
  title: "Präsentation: Website als Wachstumshebel | Codavo",
  description:
    "Erfahren Sie, wie eine strategisch aufgebaute Website organische Sichtbarkeit, qualifizierte Anfragen und nachhaltiges Wachstum unterstützt.",
  noIndex: true,
});

const takeaways = [
  "Mehr organische Sichtbarkeit bei Google und in KI-Systemen",
  "Mehr qualifizierte Anfragen durch eine klare Nutzerführung",
  "Eine digitale Grundlage, die sich gezielt weiterentwickeln lässt",
] as const;

export default function WebsitePraesentationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white pb-10 text-slate-950 sm:pb-14">
      <section className="relative px-4 pb-10 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Link href="/" aria-label="Codavo Webstudio – Startseite">
            <Image src="/images/logo/codavo-logo-light.png" alt="Codavo Webstudio" width={140} height={32} priority className="h-7 w-auto brightness-0" />
          </Link>
          <div className="mt-4 w-full">
            <h1 className="mx-auto max-w-3xl text-balance text-[clamp(1.65rem,2.8vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-slate-950">
              Wie Ihre Website zum{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Wachstumshebel
              </span>{" "}
              wird.
            </h1>
            <div className="mx-auto mt-5 w-full max-w-5xl sm:max-w-[min(64rem,calc((100svh-240px)*16/9))]">
              <PresentationVideo />
            </div>

            <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                scroll
                data-track-event="cta_contact_click"
                data-track-label="Praesentation Erstgespraech"
                className="cta-primary min-h-14 gap-2 px-6 sm:min-w-56"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <TrackedContactLink
                url="tel:+4915111956479"
                dataTrackEvent="cta_contact_click"
                dataTrackLabel="Praesentation Telefon"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-6 text-center text-[0.92rem] font-semibold text-indigo-950 shadow-sm transition hover:-translate-y-px hover:border-indigo-400 hover:bg-indigo-200 sm:min-w-56"
                contactMethod="phone"
                ariaLabel="Codavo unter +49 1511 195 64 79 anrufen"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Direkt anrufen
              </TrackedContactLink>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Persönlich, unverbindlich und passend zu Ihrer Ausgangssituation.
            </p>
          </div>

        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow !text-indigo-600">Die Idee dahinter</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
              Nicht nur sichtbar sein. Gezielt Wirkung aufbauen.
            </h2>
          </div>

          <ul className="grid gap-3">
            {takeaways.map((takeaway) => (
              <li
                key={takeaway}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 sm:text-base"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {takeaway}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-5 pt-7 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Codavo Webstudio</p>
        <nav aria-label="Rechtliche Informationen" className="flex gap-5">
          <Link href="/impressum" className="transition hover:text-slate-300">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-slate-300">
            Datenschutz
          </Link>
        </nav>
      </footer>
    </main>
  );
}
