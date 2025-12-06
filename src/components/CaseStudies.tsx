"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type CaseItem = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  img?: string;
  alt?: string;
  href?: string;
};

const cases: CaseItem[] = [
  {
    title: "Pioneer Solution — Energieberatung",
    problem: "Wenige Anfragen trotz starkem Angebot.",
    solution:
      "Startseite klarer aufgebaut, Nutzen deutlich gemacht, Anfrage-Buttons sichtbar platziert.",
    result: "Mehr qualifizierte Anfragen pro Monat und bessere Sichtbarkeit.",
    img: "/cases/projekt1.webp",
    alt: "Hero-Screenshot Pioneer Solution",
    href: "https://pioneer-solution.de",
  },
  {
    title: "Opny AI — KI-Tools für Unternehmen",
    problem: "Unklare Produktdarstellung, wenig Demo-Anfragen.",
    solution:
      "Nutzen in einer klaren Story erklärt, Produktabschnitte strukturiert, Ladezeiten reduziert.",
    result: "Mehr Demo-Anfragen und längere Verweildauer auf der Seite.",
    img: "/cases/projekt2.webp",
    alt: "Hero-Screenshot Opny AI",
    href: "https://opny.ai",
  },
  {
    title: "IB Bauwerksprüfung — Ingenieurbüro",
    problem: "Leistungen technisch stark, online aber schwer greifbar.",
    solution:
      "Strukturierte Darstellung der Kernleistungen, Referenzen hervorgehoben, klare Kontaktwege.",
    result:
      "Mehr qualifizierte Anfragen und professionellerer Außenauftritt für Ausschreibungen.",
    img: "/cases/ib-bauwerkspruefung.webp",
    alt: "Hero-Screenshot IB Bauwerksprüfung",
    href: "https://ib-bauwerkspruefung.de",
  },
  {
    title: "Taner Care — Gebäudereinigung & Services",
    problem: "Breites Leistungsspektrum, aber wenig Differenzierung im Web.",
    solution:
      "Klarer Aufbau nach Zielgruppen, Leistungen sauber gegliedert, Vertrauen durch Referenzen und Bilder.",
    result: "Höhere Sichtbarkeit lokal und mehr Anfragen über die Website.",
    img: "/cases/taner-care.webp",
    alt: "Hero-Screenshot Taner Care",
    href: "https://taner-care.de",
  },
  {
    title: "Gartenwelt Schmitz — Landschaftsbau",
    problem: "Leistungen zu versteckt, wenig Kontaktaufnahmen.",
    solution:
      "Leistungen mit Bildern greifbar gemacht, Bewertungen eingebunden, Kontaktmöglichkeiten sehr sichtbar platziert.",
    result: "Mehr Anfragen und messbar bessere lokale Sichtbarkeit.",
    img: "/cases/projekt3.webp",
    alt: "Hero-Screenshot Gartenwelt Schmitz",
    href: "https://gartenwelt-schmitz.de",
  },
];

const INTERVAL_S = 4;

export default function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const count = cases.length;

  const goTo = (idx: number) => {
    const scroller = scrollerRef.current;
    const card = cardRefs.current[idx];
    if (!scroller || !card) return;

    const paddingLeft = parseInt(
      getComputedStyle(scroller).paddingLeft || "0",
      10
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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let paused = false;

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

    const id = setInterval(() => {
      if (paused) return;
      const next = (active + 1) % count;
      goTo(next);
    }, INTERVAL_S * 1000);

    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("touchend", resume, { passive: true });
    scroller.addEventListener("touchcancel", resume, { passive: true });

    return () => {
      clearInterval(id);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("touchend", resume);
      scroller.removeEventListener("touchcancel", resume);
    };
  }, [active, count]);

  return (
    <section id="cases" className="section section-glow-top scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Case Studies
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Beispiele aus echten Projekten – unterschiedliche Branchen,
              unterschiedliche Ziele, aber immer mit einem klaren Problem, einer
              sauberen Lösung und einem sichtbaren Ergebnis. Die Seiten kannst
              du dir auf Wunsch direkt live ansehen.
            </p>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="relative overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 flex gap-6 px-1 sm:px-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {cases.map((c, i) => (
            <article
              key={c.title}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[i] = el;
              }}
              // HIER anpassen:
              style={{ width: "min(88vw, 980px)", flex: "0 0 auto" }}
              className="snap-start shrink-0"
            >
              <div className="card p-0 overflow-hidden">
                <div className="relative aspect-[16/9]">
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

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {c.title}
                  </h3>
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

                  {c.href && (
                    <div className="mt-6">
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                      >
                        Website ansehen
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {cases.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                active === i
                  ? "w-6 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
