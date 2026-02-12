"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        min-h-[100svh]
        flex flex-col justify-center items-center text-center
        pt-24 md:pt-28
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_700px_at_50%_22%,rgba(99,102,241,0.2),rgba(139,92,246,0.1)_38%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070d1a]/45 via-[#070c18]/22 to-[#070C18]/5" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#070C18] md:h-32" />

      {/* Inhalt */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-[11px] tracking-[0.18em] text-white/60 uppercase">
          Webdesign · Webentwicklung · Web-Apps
        </p>

        <h1 className="mt-3 text-[clamp(36px,6.4vw,76px)] leading-[1.05] font-semibold tracking-tight text-white">
          Websites & Web-Apps, die für dich arbeiten.
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-sm md:text-base">
          Codavo Webstudio konzipiert und entwickelt individuelles Webdesign:
          performante Websites und Web-Apps mit klarer UX, schnellem Tech-Stack
          und messbaren Ergebnissen – für Solo-Selbstständige, Unternehmen und
          Teams in Stuttgart, ganz Deutschland und der DACH-Region.
        </p>

        <div className="mt-7 md:mt-8 flex items-center justify-center gap-3">
          <Link
            href="#kontakt"
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2.5 font-medium shadow hover:shadow-lg transition"
          >
            Projekt starten
          </Link>
          <Link
            href="#leistungen"
            className="rounded-full border border-white/30 text-white/90 px-5 py-2.5 font-medium hover:bg-white/10 transition"
          >
            Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
