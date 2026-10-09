import Image from "next/image";
import Link from "next/link";

const heroProjects = [
  {
    company: "TPV-AV",
    domain: "tpv-av.de",
    image: "/cases/2026/tpv.png",
    position:
      "left-0 top-[3%] z-10 w-[76%] -rotate-[2.5deg] sm:w-[72%] lg:-left-[6%] lg:top-0 lg:w-[72%]",
  },
  {
    company: "Creamy Catering",
    domain: "creamy-catering.de",
    image: "/cases/2026/creamy-full-hero.png",
    position:
      "left-1/2 top-1/2 z-30 w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[0.5deg] sm:w-[74%] lg:left-[54%] lg:w-[72%]",
  },
  {
    company: "HWK Sanierung",
    domain: "hwksanierung.de",
    image: "/cases/2026/hwk.png",
    position:
      "bottom-[3%] right-0 z-20 w-[76%] rotate-[2deg] sm:w-[72%] lg:bottom-0 lg:-right-[12%] lg:w-[72%]",
  },
] as const;

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
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
      <Image
        src="/images/hero/stuttgart-schlossplatz-nacht.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[47%_center] lg:object-center"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#050914]/32" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,9,20,0.96)_0%,rgba(7,12,24,0.88)_39%,rgba(7,12,24,0.24)_68%,rgba(7,12,24,0.20)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(750px_520px_at_22%_42%,rgba(99,102,241,0.22),transparent_72%),linear-gradient(to_bottom,rgba(5,9,20,0.03),rgba(5,9,20,0.34))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050914]/20 lg:hidden" />

      <div className="container container--wide grid w-full grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <p className="eyebrow fade-up text-white/65">
            Webdesign aus Stuttgart · Individuell entwickelt
          </p>

          <h1 className="display-title fade-up delay-1 mx-auto mt-5 max-w-4xl text-white lg:mx-0">
            Professionelle Websites, die Vertrauen schaffen und neue Kunden
            gewinnen.
          </h1>

          <p className="lede fade-up delay-2 mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-xl">
            Codavo entwickelt individuelle Websites für Unternehmen aus
            Stuttgart und der Umgebung – mit klarer Positionierung,
            professioneller Gestaltung und einer Nutzerführung, die aus
            Besuchern qualifizierte Anfragen macht.
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
              Kostenloses Erstgespräch
            </Link>
            <Link
              href="#cases"
              data-track-event="cta_cases_click"
              data-track-label="Hero Projekte"
              className="cta-secondary"
            >
              Projekte ansehen
            </Link>
          </div>

          <GoogleRating className="mx-auto mt-7 flex lg:mx-0 lg:mt-6" />
        </div>

        <div className="fade-up delay-2 relative mx-auto min-h-[350px] w-full max-w-[820px] sm:min-h-[480px] lg:min-h-[700px] lg:max-w-none">
          {heroProjects.map((project) => (
            <figure
              key={project.company}
              className={`pointer-events-none absolute overflow-hidden rounded-2xl border border-white/15 bg-[#080e1a]/95 shadow-[0_32px_90px_rgba(0,0,0,0.48)] backdrop-blur-sm ${project.position}`}
            >
              <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-[#080e1a]/95 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <span className="ml-2 truncate text-[9px] font-medium tracking-[0.08em] text-white/55 sm:text-[10px]">
                  {project.domain}
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.company} Website`}
                  fill
                  sizes="(max-width: 639px) 72vw, (max-width: 1023px) 68vw, 560px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          ))}

        </div>
      </div>
    </section>
  );
}
