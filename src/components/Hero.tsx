import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

function GoogleRating({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-fit items-center gap-4 ${className}`}
      role="img"
      aria-label="5,0 von 5 Sternen – 5-Sterne-Bewertung auf Google"
    >
      <span className="flex h-20 w-20 shrink-0 items-center justify-center">
        <Image
          src="/images/logo/google-g.png"
          alt=""
          width={80}
          height={80}
          priority
          aria-hidden="true"
        />
      </span>
      <span className="flex flex-col items-start gap-1.5">
        <span className="flex items-center gap-4">
          <span
            className="text-2xl tracking-[0.1em] text-amber-300"
            aria-hidden="true"
          >
            ★★★★★
          </span>
          <span className="text-lg font-semibold text-white">5,0</span>
        </span>
        <span className="text-sm text-slate-300 sm:text-base">
          <strong className="font-semibold text-white">
            5-Sterne-Bewertung
          </strong>{" "}
          auf Google
        </span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(900px_600px_at_18%_20%,rgba(99,102,241,0.2),transparent_70%),radial-gradient(850px_650px_at_82%_45%,rgba(139,92,246,0.13),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1a]/30 via-[#070c18]/12 to-[#070C18]" />

      <div className="container container--wide grid w-full grid-cols-[minmax(0,1fr)] gap-y-8 sm:gap-y-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-x-10 lg:gap-y-0 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:gap-x-14">
        <div className="min-w-0 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <p className="eyebrow fade-up text-white/65">
            Unternehmenswebsites · Landingpages · Funnel-Systeme
          </p>

          <h1 className="display-title fade-up delay-1 mx-auto mt-5 max-w-4xl text-white lg:mx-0">
            Professionelle Websites, die Vertrauen schaffen und neue Kunden
            gewinnen.
          </h1>
        </div>

        <div className="fade-up delay-2 mx-auto min-w-0 w-full max-w-[720px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center lg:max-w-none">
          <HeroVideo />
        </div>

        <div className="min-w-0 text-center lg:col-start-1 lg:row-start-2 lg:text-left">
          <p className="lede fade-up delay-2 mx-auto max-w-2xl lg:mx-0 lg:mt-6 lg:max-w-xl">
            Codavo Webstudio entwickelt hochwertige Unternehmenswebsites,
            Landingpages und Funnel-Systeme für Unternehmen, die professionell
            auftreten, bei Suchmaschinen und KI-Systemen gefunden werden und aus
            Besuchern qualifizierte Anfragen machen möchten.
          </p>

          <p className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            Individuell entwickelt · Kein Baukastensystem
          </p>

          <div className="mx-auto mt-8 flex min-w-0 w-full max-w-md flex-col gap-3 sm:max-w-none lg:mx-0">
            <Link
              href="/kontakt"
              data-track-event="cta_contact_click"
              data-track-label="Hero Erstgespraech"
              className="cta-primary"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>

          <GoogleRating className="mx-auto mt-7 flex lg:mx-0 lg:mt-6" />
        </div>
      </div>
    </section>
  );
}
