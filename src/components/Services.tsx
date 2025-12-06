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
    title: "Website-Relaunch & neue Websites",
    lead: "Moderne, schnelle Websites auf Basis von Next.js – mit klarer Struktur und Fokus auf Ergebnisse.",
    bullets: [
      "Relaunch oder komplett neue Website",
      "Klarer Aufbau statt „Seitenfriedhof“",
      "Schnelle Ladezeiten & saubere Technik",
      "SEO-Basis & Tracking inklusive",
    ],
  },
  {
    icon: Layers,
    title: "Web-Apps & Tools",
    lead: "Individuelle Web-Apps – z. B. Dashboards, Portale oder interne Tools – schlank, stabil und skalierbar.",
    bullets: [
      "Auf deine Prozesse und Use-Cases zugeschnitten",
      "Einfach zu bedienen – auch mobil",
      "Sauberer Code, gut erweiterbar",
    ],
  },
  {
    icon: Sparkles,
    title: "UI/UX-Design",
    lead: "Benutzerführung, die sich logisch anfühlt – weniger Klicks, mehr Ergebnisse.",
    bullets: [
      "Klare User-Flows statt Sackgassen",
      "Designsystem statt Einzellösungen",
      "Interaktive Prototypen vor dem Aufbau",
    ],
  },
  {
    icon: BadgeCheck,
    title: "SEO & Performance",
    lead: "Gefunden werden und schnell laden – die Basis für Anfragen & Umsatz.",
    bullets: [
      "Strukturierte Inhalte & saubere Technik",
      "Suchmaschinenfreundliche Inhalte",
      "Fortlaufende Optimierung nach Bedarf",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Barrierefreiheit & Rechtliches",
    lead: "Für alle nutzbar und rechtlich sauber – inklusive DSGVO-Themen.",
    bullets: [
      "Gute Kontraste & Tastaturbedienung",
      "Analytics auch ohne Cookies möglich",
      "Datenschutz-Hinweise korrekt umgesetzt",
    ],
  },
  {
    icon: Wrench,
    title: "Wartung & Weiterentwicklung",
    lead: "Langfristige Begleitung – Updates, Sicherheit und kleine Features, wenn du sie brauchst.",
    bullets: [
      "Regelmäßige Updates & Backups",
      "Monitoring & schnelle Fehlerbehebung",
      "Iterative Weiterentwicklung",
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section section-glow-top scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Leistungen
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Wir bündeln Webdesign, Entwicklung und laufende Betreuung in einem
              Setup: moderne Websites, Web-Apps und Landingpages – ergänzt um
              SEO, Performance, Barrierefreiheit und Wartung, damit dein
              Auftritt langfristig funktioniert.
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
