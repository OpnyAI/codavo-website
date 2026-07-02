"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/case-studies-data";

const neutralProjectGoal =
  "Ziel war ein professionellerer Auftritt, klarere Nutzerführung und eine technische Basis für weiteres Wachstum.";

export default function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const goTo = (idx: number) => {
    const scroller = scrollerRef.current;
    const card = cardRefs.current[idx];
    if (!scroller || !card) return;

    const paddingLeft = parseInt(
      getComputedStyle(scroller).paddingLeft || "0",
      10,
    );

    scroller.scrollTo({
      left: card.offsetLeft - paddingLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let rAF = 0;
    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const mid = scroller.scrollLeft + scroller.clientWidth / 2;
        let nearest = 0;
        let min = Infinity;

        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          const center = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(center - mid);
          if (d < min) {
            min = d;
            nearest = i;
          }
        });

        setActive(nearest);
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <section id="cases" className="section section--feature scroll-mt-24">
      <div className="container max-w-7xl">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="section-title text-white">
            Digitale Projekte mit klarem Anspruch
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Die Beispiele zeigen reale Ausgangslagen, den jeweils gewählten
            Lösungsweg und das Ziel des Projekts.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-0.5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 sm:px-1"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[i] = el;
              }}
              style={{ width: "min(92vw, 1080px)", flex: "0 0 auto" }}
              className="snap-start shrink-0"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1220]/85 shadow-[0_35px_100px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  {c.img ? (
                    <>
                      <Image
                        src={c.img}
                        alt={c.alt ?? c.title}
                        fill
                        sizes="(max-width: 768px) 96vw, 860px"
                        className="
                          object-cover
                          object-[center_18%]
                          sm:object-[center_24%]
                          md:object-[center_30%]
                          lg:object-center
                        "
                        priority={i === 0}
                      />
                      <div className="absolute top-0 left-0 right-0 h-3 sm:h-3.5 md:h-4 lg:h-5 bg-black/30 border-b border-white/10 backdrop-blur-md flex items-center gap-1.5 px-2 sm:px-3">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400" />
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400" />
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400" />
                        <div className="ml-1 sm:ml-2 h-3 sm:h-3.5 flex-1 rounded bg-white/10 border border-white/10" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/30" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_50%_-10%,rgba(99,102,241,0.35),transparent_65%)]" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
                    </>
                  )}
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {c.title}
                  </h3>
                  <div className="mt-7 grid gap-6 text-sm leading-7 text-slate-300 md:grid-cols-3 md:gap-8">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300/70">
                        Problem
                      </div>
                      <p className="mt-2">{c.problem}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300/70">
                        Lösung
                      </div>
                      <p className="mt-2">{c.solution}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300/70">
                        Ziel
                      </div>
                      <p className="mt-2">{neutralProjectGoal}</p>
                    </div>
                  </div>

                  {c.href && (
                    <div className="mt-6">
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white"
                      >
                        Projekt live ansehen <span aria-hidden>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                active === i
                  ? "w-6 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cases"
            data-track-event="cta_cases_click"
            data-track-label="Home Cases Uebersicht"
            className="cta-secondary"
          >
            Alle Cases ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
