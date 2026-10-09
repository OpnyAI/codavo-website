import Image from "next/image";
import Link from "next/link";

const heroProjects = [
  {
    company: "Creamy Catering",
    domain: "creamy-catering.de",
    image: "/cases/2026/creamy-full-hero.png",
    desktopPosition: "lg:-translate-y-3 lg:-rotate-[2deg]",
    mobilePosition:
      "max-sm:left-1/2 max-sm:top-1/2 max-sm:z-30 max-sm:w-[78%] max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:rotate-[0.5deg]",
  },
  {
    company: "TPV-AV",
    domain: "tpv-av.de",
    image: "/cases/2026/tpv.png",
    desktopPosition: "lg:translate-y-4 lg:rotate-[1deg]",
    mobilePosition:
      "max-sm:left-0 max-sm:top-[3%] max-sm:z-10 max-sm:w-[76%] max-sm:-rotate-[2.5deg]",
  },
  {
    company: "HWK Sanierung",
    domain: "hwksanierung.de",
    image: "/cases/2026/hwk.png",
    desktopPosition: "lg:translate-y-1 lg:rotate-[2deg]",
    mobilePosition:
      "max-sm:bottom-[3%] max-sm:right-0 max-sm:z-20 max-sm:w-[76%] max-sm:rotate-[2deg]",
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
    <section className="relative isolate min-h-[100svh] overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
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

      <div className="container container--wide">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
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

          <GoogleRating className="mx-auto mt-5 flex lg:mx-0" />
        </div>

        <figure className="mx-auto w-full max-w-[400px] lg:max-w-[460px]">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 bg-[#080e1a] shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
            <Image
              src="/images/hero/mehmet-catalsakal-founder-original.jpg"
              alt="Mehmet Çatalsakal, Gründer von Codavo Webstudio"
              fill
              priority
              sizes="(max-width: 639px) 90vw, (max-width: 1023px) 400px, 460px"
              className="object-cover object-[64%_center]"
            />
          </div>
          <figcaption className="mt-4 px-1 text-center lg:text-left">
            <span className="block text-base font-semibold text-white">
              Mehmet Çatalsakal
            </span>
            <span className="mt-1 block text-sm text-slate-300">
              Gründer von Codavo Webstudio
            </span>
            <span className="mt-1.5 block text-xs font-medium text-indigo-200">
              M.Sc. Wirtschaftsingenieurwesen
            </span>
          </figcaption>
        </figure>
        </div>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 max-sm:relative max-sm:mx-auto max-sm:block max-sm:h-[350px] max-sm:w-full max-sm:max-w-[400px] sm:grid-cols-3 lg:mt-12 lg:gap-6">
          {heroProjects.map((project) => (
            <figure
              key={project.company}
              className={`pointer-events-none mx-auto w-full max-w-[400px] overflow-hidden rounded-xl border border-white/15 bg-[#080e1a]/95 shadow-[0_12px_35px_rgba(0,0,0,0.25)] max-sm:absolute ${project.mobilePosition} ${project.desktopPosition}`}
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
                  sizes="(max-width: 639px) 70vw, (max-width: 1023px) 30vw, 400px"
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
