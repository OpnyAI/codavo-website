import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudies } from "@/components/case-studies-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/cases",
  title: "Webdesign Referenzen & Case Studies | Codavo",
  description:
    "Ausgewählte Codavo-Projekte aus Medientechnik, Catering, Sanierung, Pflege, Industrie, KI und Ingenieurwesen – mit Einblicken in Ausgangslage, Umsetzung und Kundenfeedback.",
});

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex gap-0.5 text-base leading-none"
      aria-label={`${rating} von 5 Sternen`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-amber-300" : "text-white/20"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function CasesPage() {
  return (
    <>
      <main className="min-h-screen pb-16 pt-28 md:pt-32 lg:pt-36">
        <section className="section pb-10">
          <div className="container max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
              Codavo Referenzen
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Wir lassen digitale Projekte für sich sprechen.
            </h1>
            <p className="lede mt-6 max-w-3xl">
              Websites für Unternehmen mit unterschiedlichen Zielgruppen und
              Geschäftsmodellen – individuell konzipiert, gestaltet und
              technisch umgesetzt.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Webdesign",
                "UX/UI",
                "Content-Struktur",
                "Individuelle Entwicklung",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt pt-10">
          <div className="container max-w-7xl">
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              {caseStudies.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#09101d]/92 shadow-[0_35px_100px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8 bg-[#111827]">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.alt ?? project.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                        priority={index < 2}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#050914]/85" />
                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-[#050914]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                        {project.industry}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-indigo-200/80">
                          Projekt 0{index + 1}
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {project.company}
                        </h2>
                      </div>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-[#050914] sm:inline-flex"
                        >
                          Website ansehen <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 lg:p-8">
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {project.background}
                    </p>

                    <div className="mt-7 grid gap-5 border-y border-white/8 py-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-300/70">
                          Herausforderung
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-300/70">
                          Codavo-Umsetzung
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-300/70">
                        Ergebnis
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">
                        {project.result}
                      </p>
                    </div>

                    {project.googleReview ? (
                      <a
                        href={project.googleReview.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 block rounded-2xl border border-indigo-300/15 bg-[linear-gradient(135deg,rgba(99,102,241,0.09),rgba(255,255,255,0.025))] p-5 transition hover:border-indigo-300/30"
                        aria-label={`Google-Rezension von ${project.googleReview.author} öffnen`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <Stars rating={project.googleReview.rating} />
                          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                            Google-Rezension
                          </span>
                        </div>
                        <blockquote className="mt-4 text-[15px] leading-7 text-slate-100">
                          „{project.googleReview.quote}“
                        </blockquote>
                        <div className="mt-4 text-xs leading-5 text-slate-400">
                          <span className="font-semibold text-white">
                            {project.googleReview.author}
                          </span>
                          <span aria-hidden> · </span>
                          {project.googleReview.role}
                        </div>
                      </a>
                    ) : null}

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.serviceLinks?.map((service) => (
                        <Link
                          key={`${project.title}-${service.href}`}
                          href={service.href}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-indigo-300/30 hover:text-white"
                        >
                          {service.label}
                        </Link>
                      ))}
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition hover:text-white sm:hidden"
                        >
                          Website ansehen <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.24)] md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(620px_260px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Welcher digitale Auftritt passt zu Ihrem Unternehmen?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Im Erstgespräch klären wir Ziele, Zielgruppen und den sinnvollen
                Umfang – von der fokussierten Unternehmenswebsite bis zum
                individuellen digitalen System.
              </p>
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Cases Abschluss Kontakt"
                  className="cta-primary"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
