import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudies } from "@/components/case-studies-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/cases",
  title: "Case Studies | Codavo Webstudio",
  description:
    "Ausgewählte Codavo-Projekte aus Webdesign, Landingpages, Software und digitalen Systemen – mit Fokus auf Ausgangslage, Lösung und Umsetzung.",
});

export default function CasesPage() {
  return (
    <>
      <main className="pt-28 pb-16 min-h-screen md:pt-32 lg:pt-36">
        <section className="section">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Case Studies
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Die aktuellen Referenzen aus unserer Homepage als vollständige
              Übersicht: reale Projekte aus unterschiedlichen Branchen, jeweils
              mit klarem Problem, sauberer Lösung und sichtbarem Ergebnis.
            </p>
          </div>
        </section>

        <section className="section section--alt mt-10 pb-4">
          <div className="container grid gap-6">
            {caseStudies.map((c) => (
              <article key={c.title} className="card">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="relative aspect-[16/9]">
                    {c.img ? (
                      <>
                        <Image
                          src={c.img}
                          alt={c.alt ?? c.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 1200px"
                          className="
                            object-cover
                            object-[center_18%]
                            sm:object-[center_24%]
                            md:object-[center_30%]
                            lg:object-center
                          "
                        />
                        <div className="absolute top-0 left-0 right-0 h-3 sm:h-3.5 md:h-4 lg:h-5 bg-black/30 border-b border-white/10 backdrop-blur-md flex items-center gap-1.5 px-2 sm:px-3">
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400" />
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400" />
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400" />
                          <div className="ml-1 sm:ml-2 h-3 sm:h-3.5 flex-1 rounded bg-white/10 border border-white/10" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/30" />
                      </>
                    ) : null}
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        {c.title}
                      </h2>

                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 md:mt-0 inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                        >
                          Website ansehen <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </div>

                    <div className="mt-4 grid gap-4 text-sm text-slate-200 md:grid-cols-3">
                      <div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider">
                          Problem
                        </div>
                        <p className="mt-1">{c.problem}</p>
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider">
                          Lösung
                        </div>
                        <p className="mt-1">{c.solution}</p>
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs uppercase tracking-wider">
                          Ergebnis
                        </div>
                        <p className="mt-1">{c.result}</p>
                      </div>
                    </div>

                    {c.serviceLinks?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
                        {c.serviceLinks.map((link) => (
                          <Link
                            key={`${c.title}-${link.href}`}
                            href={link.href}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-indigo-300/30 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.24)] md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(620px_260px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Sie möchten ein ähnliches Projekt umsetzen?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Mit dem Website-Check oder einem kurzen Erstgespräch prüfen wir,
                welche digitale Lösung zu Ihrem Ziel, Ihrer aktuellen Website
                und Ihrem Unternehmen passt.
              </p>
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/website-check"
                  data-track-event="cta_website_check_click"
                  data-track-label="Cases Abschluss Website Check"
                  className="cta-primary"
                >
                  Website-Check starten
                </Link>
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Cases Abschluss Kontakt"
                  className="cta-secondary"
                >
                  Projekt besprechen
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
