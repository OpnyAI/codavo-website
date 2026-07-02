import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center sm:px-6 md:pb-20 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_700px_at_50%_22%,rgba(99,102,241,0.2),rgba(139,92,246,0.1)_38%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1a]/45 via-[#070c18]/22 to-[#070C18]/5" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#070C18] md:h-32" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs">
          Unternehmenswebsites · Landingpages · Funnel-Systeme
        </p>

        <h1 className="mx-auto mt-4 max-w-5xl text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
          Professionelle Websites, die Vertrauen schaffen und neue Kunden
          gewinnen.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:mt-8 md:text-lg">
          Codavo Webstudio entwickelt hochwertige Unternehmenswebsites,
          Landingpages und Funnel-Systeme für Unternehmen, die professionell
          auftreten, bei Suchmaschinen und KI-Systemen gefunden werden und aus
          Besuchern qualifizierte Anfragen machen möchten.
        </p>

        <p className="mx-auto mt-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200">
          Individuell entwickelt · Kein Baukastensystem
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center md:mt-10">
          <Link
            href="/kontakt"
            data-track-event="cta_contact_click"
            data-track-label="Hero Erstgespraech"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 font-medium text-white shadow transition hover:shadow-lg sm:w-auto"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>

          <Link
            href="/website-check"
            data-track-event="cta_website_check_click"
            data-track-label="Hero Website Check"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/30 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10 sm:w-auto"
          >
            Website-Check starten
          </Link>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm">
          React/Next.js · SEO, AEO &amp; LLMO · Hosting &amp; Wartung ·
          Individueller Code
        </p>
        <p className="mx-auto mt-4 max-w-4xl text-xs leading-6 text-slate-500 sm:text-sm">
          Bereits umgesetzt für Unternehmen aus Energieberatung, Technologie,
          Ingenieurwesen, Gebäudeservice, Sanierung und Mobilität.
        </p>
      </div>
    </section>
  );
}
