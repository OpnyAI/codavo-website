"use client";
import { GaugeCircle, Layout, LineChart } from "lucide-react";

const items = [
  {
    icon: GaugeCircle,
    title: "Performance, die überzeugt",
    text: "Lighthouse-Score 100 ist unser Standard, nicht unser Ziel.",
  },
  {
    icon: Layout,
    title: "Design trifft Struktur",
    text: "UX von Anfang bis Ende – intuitiv, klar, elegant.",
  },
  {
    icon: LineChart,
    title: "SEO & Conversion",
    text: "Sichtbarkeit, die Anfragen bringt – nicht nur Klicks.",
  },
];

export default function USP() {
  return (
    <section id="leistungen" className="section relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(59,130,246,0.12)_0%,rgba(255,255,255,0)_55%)]" />
      <div className="container relative">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
          Warum Lunova Webdesign?
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-center">
          Ästhetik moderner Marken trifft präzise Entwicklung – für Websites,
          die schneller laden, besser ranken und Nutzer begeistern.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <it.icon className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-slate-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
