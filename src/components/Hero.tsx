"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-[100svh]
        flex flex-col justify-center items-center text-center
        pt-24 md:pt-28
        bg-[#050814]
      "
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/codavo-studio-hero-v2.webp"
          alt="Modernes Webstudio in dunkler, hochwertiger Lichtstimmung"
          fill
          priority
          className="
            object-cover
            object-[50%_50%]
            md:object-[50%_45%]
            lg:object-[50%_40%]
          "
        />
      </div>

      {/* Grund-Overlay für Lesbarkeit */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#02030a]/95 via-[#050816]/82 to-[#020309]/96" />

      {/* Leichter Glow in der Mitte (Hero-Fokus) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1100px_650px_at_center,rgba(129,140,248,0.18),transparent_70%)]" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_72%)]" />

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
            className="rounded-full border border-white/30 text-white/90 px-5 py-2.5 font-medium hover:bgWHITE/10 hover:bg-white/10 transition"
          >
            Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
