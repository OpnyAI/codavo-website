import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
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
    <main className="min-h-screen overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 lg:pt-32">
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[36rem] w-[58rem] -translate-x-1/2 rounded-full bg-indigo-500/[0.09] blur-[120px]"
        />

        <div className="mx-auto max-w-6xl text-center">
          <p className="eyebrow">Präsentation für Unternehmen</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.25rem,5.4vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
            Wie Ihre Website zum{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Wachstumshebel
            </span>{" "}
            wird.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Mehr organische Sichtbarkeit. Mehr qualifizierte Anfragen. Eine
            Website, die als digitale Infrastruktur für Ihr Unternehmen
            arbeitet.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#030711] p-1.5 shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(99,102,241,0.12)] sm:rounded-[1.75rem] sm:p-2">
            <div
              aria-hidden="true"
              className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent"
            />
            <video
              className="aspect-video w-full rounded-[1rem] bg-[#050816] object-contain sm:rounded-[1.3rem]"
              controls
              playsInline
              preload="metadata"
              poster="/videos/praesentation-kundengewinnung/website-als-wachstumshebel-poster.jpg"
              aria-label="Codavo Präsentation: Die Website als Wachstumshebel"
            >
              <source
                src="/videos/praesentation-kundengewinnung/website-als-wachstumshebel.mp4"
                type="video/mp4"
              />
              Ihr Browser unterstützt die Videowiedergabe nicht. Sie können das{" "}
              <a href="/videos/praesentation-kundengewinnung/website-als-wachstumshebel.mp4">
                Video direkt öffnen
              </a>
              .
            </video>
          </div>

          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              scroll
              data-track-event="cta_contact_click"
              data-track-label="Praesentation Erstgespraech"
              className="cta-primary min-h-14 gap-2 px-6 sm:min-w-64"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <TrackedContactLink
              url="tel:+4915111956479"
              dataTrackEvent="cta_contact_click"
              dataTrackLabel="Praesentation Telefon"
              className="cta-secondary min-h-14 gap-2 px-6 sm:min-w-64"
              contactMethod="phone"
              ariaLabel="Codavo unter +49 1511 195 64 79 anrufen"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Direkt anrufen
            </TrackedContactLink>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Persönlich, unverbindlich und passend zu Ihrer Ausgangssituation.
          </p>
        </div>
      </section>

      <section className="px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow">Die Idee dahinter</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Nicht nur sichtbar sein. Gezielt Wirkung aufbauen.
            </h2>
          </div>

          <ul className="grid gap-3">
            {takeaways.map((takeaway) => (
              <li
                key={takeaway}
                className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-slate-950/35 px-4 py-4 text-sm leading-6 text-slate-300 sm:text-base"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-400/12 text-indigo-300">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {takeaway}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/8 px-5 pt-7 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
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
