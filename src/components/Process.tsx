"use client";
import Reveal from "@/components/Reveal";

const steps = [
  {
    k: "1. Kennenlernen & Ziele",
    d: "Wir sprechen darüber, wo du hinmöchtest und was deine Website oder Web-App leisten soll. Daraus entsteht ein klarer Plan.",
  },
  {
    k: "2. Struktur & Design",
    d: "Wir ordnen Inhalte, definieren Use-Cases und erstellen Layouts sowie Klick-Prototypen. So siehst du früh, wie sich alles später anfühlt.",
  },
  {
    k: "3. Entwicklung",
    d: "Wir bauen deine Website oder Web-App sauber und performant – inklusive Technik, Tracking, SEO-Grundlagen und CMS bzw. Admin-Bereich.",
  },
  {
    k: "4. Go-Live & Wachstum",
    d: "Launch mit Monitoring. Danach Feinschliff und Optimierungen anhand echter Nutzungsdaten – für mehr Anfragen, Leads oder aktive Nutzer.",
  },
];

export default function Process() {
  return (
    <section id="prozess" className="section section-glow-bottom scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Prozess
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Transparent und schlank – vom ersten Gespräch bis zur performanten
              Website oder Web-App.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-12 space-y-6">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-40" />
          {steps.map((s, i) => (
            <li key={s.k} className="relative pl-14">
              <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white font-semibold">
                {i + 1}
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-white">{s.k}</h3>
                <p className="mt-2 text-slate-300">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
