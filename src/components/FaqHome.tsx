"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "Wie läuft ein Projekt mit Codavo Webstudio ab?",
    a: "Wir starten mit einem kurzen Kennenlerngespräch, klären Ziele, Umfang und Budgetrahmen und erstellen dann ein klares Konzept. Danach folgen Design, Entwicklung, Launch und auf Wunsch laufende Betreuung.",
  },
  {
    q: "Was kostet eine Website oder Web-App?",
    a: "Das hängt stark vom Umfang ab. Eine fokussierte Website startet meist im niedrigen vierstelligen Bereich. Individuelle Web-Apps, Dashboards oder Portale liegen darüber. Wichtig ist: Du bekommst vorher einen klar definierten Leistungsumfang und ein transparentes Angebot.",
  },
  {
    q: "Wie lange dauert es, bis meine Website oder Web-App online ist?",
    a: "Für eine fokussierte Website kannst du grob mit 3–6 Wochen rechnen – je nachdem, wie schnell Inhalte (Texte, Bilder) vorliegen. Web-Apps können länger dauern, je nach Funktionsumfang. Wir legen zu Beginn einen realistischen Zeitplan fest.",
  },
  {
    q: "Kann ich Inhalte später selbst bearbeiten?",
    a: "Ja. Wenn du das möchtest, binden wir ein Headless CMS ein. Du kannst dann Texte, Bilder, Referenzen oder Blogbeiträge über eine Oberfläche pflegen – ganz ohne Code. Das Frontend bleibt trotzdem mit Next.js und Tailwind umgesetzt.",
  },
  {
    q: "Mit welchen Technologien arbeitet ihr?",
    a: "Wir setzen vor allem auf moderne Webtechnologien wie Next.js, React und Tailwind CSS. Je nach Projekt kommen APIs, Headless CMS oder Datenbanken hinzu. Ziel ist immer: schnell, stabil und gut wartbar.",
  },
  {
    q: "Übernehmt ihr auch nur Design oder nur Entwicklung?",
    a: "Ja. Wir können entweder das komplette Projekt übernehmen oder nur bestimmte Teile – etwa UI/UX-Design, Frontend-Entwicklung auf Basis bestehender Designs oder die technische Umsetzung eines bereits geplanten Projekts.",
  },
  {
    q: "Könnt ihr bestehende Websites optimieren, statt alles neu zu bauen?",
    a: "Ja. Gerade beim Relaunch schauen wir zuerst, was gut funktioniert und was nicht. Oft reicht es, Struktur, Technik und einzelne Seiten deutlich zu verbessern, statt alles komplett neu aufzusetzen.",
  },
  {
    q: "Gibt es eine laufende Betreuung nach dem Launch?",
    a: "Wenn du möchtest, ja. Wir bieten Wartung, Updates, kleinere Weiterentwicklungen und auf Wunsch regelmäßige Reviews zur Performance und Conversion an. Das kann als Paket oder flexibel nach Bedarf laufen.",
  },
];

export default function FaqHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="section section-glow-top border-t border-white/5 scroll-mt-24"
    >
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              FAQ – häufige Fragen
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Ein paar der Fragen, die uns am häufigsten gestellt werden. Auf
              der separaten FAQ-Seite kannst du später noch mehr Details
              nachlesen.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`card transition-colors cursor-pointer ${
                  isOpen ? "border-white/25" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-white">
                    {item.q}
                  </span>
                  <span className="mt-1 text-xs text-slate-400">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-slate-300">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
