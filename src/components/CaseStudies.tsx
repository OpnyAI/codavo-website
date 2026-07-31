import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/case-studies-data";

export default function CaseStudies() {
  const featuredCases = caseStudies.filter((item) => item.featured).slice(0, 4);

  return (
    <section id="cases" className="section section--feature section--compact scroll-mt-24">
      <div className="container max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
              Ausgewählte Projekte
            </p>
            <h2 className="section-title mt-4 text-white">
              So kann ein professioneller Webauftritt aussehen.
            </h2>
            <p className="lede mt-5 max-w-2xl">
              Vier reale Websites aus unterschiedlichen Branchen – individuell
              konzipiert, gestaltet und entwickelt.
            </p>
          </div>

          <Link
            href="/cases"
            data-track-event="cta_cases_click"
            data-track-label="Home Cases Uebersicht"
            className="cta-secondary hidden self-start md:inline-flex lg:self-auto"
          >
            Alle Projekte ansehen
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-7">
          {featuredCases.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#09101d]/90 shadow-[0_30px_90px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-indigo-300/25"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8 bg-[#101829]">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.alt ?? project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    priority={index < 2}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#050914]/80" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#050914]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                  {project.industry}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <h3 className="max-w-[75%] text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.company}
                  </h3>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.company} Website ansehen`}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-lg text-white backdrop-blur-md transition hover:bg-white hover:text-[#050914]"
                    >
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/cases"
            data-track-event="cta_cases_click"
            data-track-label="Home Cases Uebersicht Mobile"
            className="cta-secondary"
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
