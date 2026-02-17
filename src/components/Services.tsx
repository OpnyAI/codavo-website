"use client";

import {
  BadgeCheck,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Rocket,
    title: "Kundengewinnungssysteme (Websites)",
    lead: "Websites, die Leads erzeugen - nicht nur gut aussehen.",
    bullets: [
      'Conversion-orientierte Struktur statt "Seitenfriedhof"',
      "Klare Funnel-Logik für messbare Anfragen",
      "SEO & Performance als solide Basis",
      "Tracking-Setup inklusive",
    ],
  },
  {
    icon: Layers,
    title: "Individuelle Softwarelösungen",
    lead: "Webbasierte Business-Software, die Daten, Prozesse und Workflows verbindet.",
    bullets: [
      "Portale, Dashboards & interne Tools",
      "Prozessautomatisierung statt manueller Arbeit",
      "Erweiterbar, wartbar, stabil",
      "Optional: KI-Unterstützung",
    ],
  },
  {
    icon: Sparkles,
    title: "Systemarchitektur & Nutzerführung",
    lead: "Struktur und UX über alle Module hinweg - für klare Abläufe und weniger Reibung.",
    bullets: [
      "Klare User-Flows statt Sackgassen",
      "Design-System statt Einzellösungen",
      "Interaktive Prototypen vor dem Build",
      "Konsistente Experience",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Sichtbarkeit & technischer Unterbau",
    lead: "Die Basis für Anfragen und Wachstum - technisch sauber, sichtbar und nachhaltig.",
    bullets: [
      "Technisches SEO & strukturierte Inhalte",
      "Core Web Vitals & Ladezeit-Optimierung",
      "Interne Link-Cluster für Themenrelevanz",
      "Monitoring & iterative Verbesserungen",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Sicherheit",
    lead: "Rechtssichere, barrierefreie und stabile digitale Systeme.",
    bullets: [
      "DSGVO-konformes Tracking & Consent",
      "Barrierefreiheit & A11y-Basics",
      "Saubere Datenschutz-Hinweise",
      "Audit-freundliche Struktur",
    ],
  },
  {
    icon: Wrench,
    title: "Skalierung & Weiterentwicklung",
    lead: "Dein System wächst mit deinem Unternehmen weiter - kontinuierlich und messbar.",
    bullets: [
      "Iterative Releases & Roadmap",
      "Feature-Ausbau nach Bedarf",
      "Performance-Optimierung",
      "KPI-Tracking für Erfolgsmessung",
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Die Architektur hinter deinem digitalen Wachstum
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Wir liefern keine Einzelleistungen, sondern ein integriertes Setup
              aus Webdesign, individueller Software und skalierbarer
              Systemarchitektur - ausgerichtet auf messbare Ergebnisse,
              Effizienz und Wachstum.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="flex items-center gap-3">
                <s.icon className="h-7 w-7 text-white" />
                <div className="h-7 w-7 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-sm" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-300">{s.lead}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {s.bullets.map((b) => (
                  <li key={b} className="pl-5 relative">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-xs text-slate-400">
                Maßgeschneidert. Skalierbar. Zukunftssicher.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
