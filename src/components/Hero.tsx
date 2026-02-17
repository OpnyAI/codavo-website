"use client";
import Link from "next/link";
import HeroChips from "@/components/hero/HeroChips";

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        min-h-[88svh] md:min-h-[100svh]
        flex flex-col justify-center items-center text-center
        py-20 md:py-32
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_700px_at_50%_22%,rgba(99,102,241,0.2),rgba(139,92,246,0.1)_38%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1a]/45 via-[#070c18]/22 to-[#070C18]/5" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#070C18] md:h-32" />

      <div className="max-w-4xl mx-auto px-4 w-full">
        <p className="text-xs md:text-[11px] tracking-[0.22em] text-white/60 uppercase">
          DIGITALE SYSTEME FÜR DEN MITTELSTAND
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-[clamp(42px,6.4vw,76px)] leading-tight font-semibold tracking-tight text-white">
          Webdesign & individuelle Softwarelösungen für KMU
        </h1>

        <p className="mt-6 max-w-xl md:max-w-2xl mx-auto text-slate-300 text-base leading-relaxed">
          Wir verbinden Webdesign und individuelle Softwarelösungen zu
          integrierten Systemarchitekturen - für automatisierte Prozesse und
          messbares Wachstum.
        </p>

        <div className="mt-8 md:mt-10">
          <HeroChips />
        </div>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 w-full md:w-auto max-w-md md:max-w-none mx-auto">
          <Link
            href="/kontakt"
            data-track-event="strategy_call_click,cta_primary_click"
            data-track-label="Hero Strategiegespraech"
            className="w-full md:w-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2.5 font-medium shadow hover:shadow-lg transition"
          >
            Strategie-Call vereinbaren
          </Link>
          <Link
            href="/cases"
            data-track-event="cta_primary_click"
            data-track-label="Hero Case ansehen"
            className="w-full md:w-auto rounded-full border border-white/30 text-white/90 px-5 py-2.5 font-medium hover:bg-white/10 transition"
          >
            Systemprojekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
