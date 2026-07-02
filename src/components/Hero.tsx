import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(900px_600px_at_18%_20%,rgba(99,102,241,0.2),transparent_70%),radial-gradient(850px_650px_at_82%_45%,rgba(139,92,246,0.13),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1a]/30 via-[#070c18]/12 to-[#070C18]" />

      <div className="container grid w-full grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <p className="eyebrow fade-up text-white/65">
            Unternehmenswebsites · Landingpages · Funnel-Systeme
          </p>

          <h1 className="display-title fade-up delay-1 mx-auto mt-5 max-w-4xl text-white lg:mx-0">
            Professionelle Websites, die Vertrauen schaffen und neue Kunden
            gewinnen.
          </h1>

          <p className="lede fade-up delay-2 mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-xl">
            Codavo Webstudio entwickelt hochwertige Unternehmenswebsites,
            Landingpages und Funnel-Systeme für Unternehmen, die professionell
            auftreten, bei Suchmaschinen und KI-Systemen gefunden werden und aus
            Besuchern qualifizierte Anfragen machen möchten.
          </p>

          <p className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            Individuell entwickelt · Kein Baukastensystem
          </p>

          <div className="mx-auto mt-8 flex min-w-0 w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row lg:mx-0">
            <Link
              href="/kontakt"
              data-track-event="cta_contact_click"
              data-track-label="Hero Erstgespraech"
              className="cta-primary"
            >
              Kostenloses Erstgespräch vereinbaren
            </Link>

            <Link
              href="/website-check"
              data-track-event="cta_website_check_click"
              data-track-label="Hero Website Check"
              className="cta-secondary"
            >
              Website-Check starten
            </Link>
          </div>

          <div className="mx-auto mt-8 max-w-2xl border-t border-white/8 pt-5 lg:mx-0 lg:max-w-xl">
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              React/Next.js · SEO, AEO &amp; LLMO · Hosting &amp; Wartung ·
              Individueller Code
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-500">
              Bereits umgesetzt für Unternehmen aus Energieberatung, Technologie,
              Ingenieurwesen, Gebäudeservice, Sanierung und Mobilität.
            </p>
          </div>
        </div>

        <div className="fade-up delay-2 relative mx-auto min-w-0 w-full max-w-[680px] lg:max-w-none" aria-hidden="true">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-indigo-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080e1a]/90 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-3">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#0b1322]">
              <div className="flex h-10 items-center gap-2 border-b border-white/8 bg-white/[0.025] px-4 sm:h-12">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <div className="mx-auto h-5 w-2/5 rounded-full border border-white/8 bg-white/[0.025]" />
              </div>

              <div className="relative min-h-[360px] overflow-hidden p-5 sm:min-h-[500px] sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(500px_280px_at_24%_18%,rgba(99,102,241,0.16),transparent_70%),linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px]" />
                <div className="relative grid gap-5 sm:grid-cols-[1.15fr_0.85fr] sm:gap-6">
                  <div className="rounded-2xl border border-white/8 bg-[#0d1729]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7">
                    <div className="h-2.5 w-24 rounded-full bg-indigo-300/35" />
                    <div className="mt-7 h-5 w-11/12 rounded-full bg-white/80" />
                    <div className="mt-3 h-5 w-3/4 rounded-full bg-white/70" />
                    <div className="mt-6 h-2.5 w-full rounded-full bg-white/10" />
                    <div className="mt-2.5 h-2.5 w-5/6 rounded-full bg-white/8" />
                    <div className="mt-7 flex gap-3">
                      <div className="h-9 w-32 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-[0_8px_24px_rgba(99,102,241,0.25)]" />
                      <div className="h-9 w-24 rounded-full border border-white/12 bg-white/[0.03]" />
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-xl border border-white/8 bg-white/[0.025]" />
                      <div className="h-20 rounded-xl border border-white/8 bg-white/[0.025]" />
                    </div>
                  </div>

                  <div className="hidden space-y-4 sm:block">
                    <div className="rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] p-5">
                      <div className="flex items-center justify-between">
                        <div className="h-2.5 w-16 rounded-full bg-indigo-200/35" />
                        <div className="h-7 w-7 rounded-lg border border-white/8 bg-white/[0.035]" />
                      </div>
                      <div className="mt-8 h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-400/45 to-fuchsia-400/20" />
                      <div className="mt-6 h-3 w-4/5 rounded-full bg-white/30" />
                      <div className="mt-2.5 h-2.5 w-full rounded-full bg-white/8" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-2xl border border-white/8 bg-white/[0.025]" />
                      <div className="h-24 rounded-2xl border border-white/8 bg-white/[0.025]" />
                    </div>
                    <div className="h-24 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(99,102,241,0.1),rgba(255,255,255,0.02))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
