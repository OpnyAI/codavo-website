import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Beispiele aus Projekten | Codavo Webstudio",
  description:
    "Ausgewählte Web-Projekte von Codavo Webstudio – von Energieberatung über Ingenieurbüro bis Gebäudereinigung. Beispiele aus Deutschland und der DACH-Region.",
};

type CaseItem = {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  href?: string;
};

const cases: CaseItem[] = [
  {
    title: "Pioneer Solution",
    sector: "Energieberatung",
    challenge: "Wenige Anfragen trotz starkem Angebot und Fachkompetenz.",
    solution:
      "Klarer Seitenaufbau, Nutzen auf den Punkt gebracht, sichtbare Anfrage-Buttons und strukturierte Darstellung der Leistungen.",
    result:
      "Mehr qualifizierte Anfragen pro Monat und deutlich professionellerer Webauftritt.",
    href: "https://pioneer-solution.de",
  },
  {
    title: "Opny AI",
    sector: "KI-Tools für Unternehmen",
    challenge:
      "Komplexes Produkt, wenig Zeit – schwierig zu erklären, was die Plattform leistet.",
    solution:
      "Story und Nutzen strukturiert, Produktabschnitte klar gegliedert, Ladezeiten optimiert und Demo-Anfrage im Fokus.",
    result:
      "Mehr Demo-Anfragen, längere Verweildauer und klarere Wahrnehmung des Angebots.",
    href: "https://opny.ai",
  },
  {
    title: "IB Bauwerksprüfung",
    sector: "Ingenieurbüro / Bauwerksprüfung",
    challenge:
      "Leistungen technisch sehr stark, aber online schwer greifbar für Interessenten.",
    solution:
      "Kernleistungen verständlich strukturiert, Referenzen hervorgehoben, klare Kontakt- und Anfragewege im sichtbaren Bereich.",
    result:
      "Professionellerer Außenauftritt für Ausschreibungen und Anfragen, klarere Positionierung.",
    href: "https://ib-bauwerkspruefung.de",
  },
  {
    title: "Taner Care",
    sector: "Gebäudereinigung & Services",
    challenge:
      "Breites Leistungsspektrum, aber wenig Differenzierung und Struktur im Web.",
    solution:
      "Aufbau nach Zielgruppen und Leistungsbereichen, Vertrauen durch Referenzen und Bilder, Kontaktmöglichkeiten sichtbar platziert.",
    result: "Höhere lokale Sichtbarkeit und mehr Anfragen über die Website.",
    href: "https://taner-care.de",
  },
  {
    title: "Gartenwelt Schmitz",
    sector: "Garten- & Landschaftsbau",
    challenge: "Leistungen waren zu versteckt, wenige Kontaktaufnahmen.",
    solution:
      "Leistungen mit Bildern greifbar gemacht, Bewertungen eingebunden, Kontakt im sichtbaren Bereich angeordnet.",
    result: "Mehr Anfragen und messbar bessere Wahrnehmung im lokalen Umfeld.",
    href: "https://gartenwelt-schmitz.de",
  },
];

export default function CasesPage() {
  return (
    <main className="pt-28 pb-16">
      <section className="container">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Case Studies
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          Eine Auswahl von Projekten, bei denen wir Websites oder Web-Apps für
          Kund:innen aus Deutschland und der DACH-Region umgesetzt haben.
          Unterschiedliche Branchen, aber immer mit einem klaren Ziel: ein
          Auftritt, der für das Unternehmen arbeitet.
        </p>
      </section>

      <section className="container mt-10 grid gap-6">
        {cases.map((c) => (
          <article key={c.title} className="card">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {c.title}
                </h2>
                <p className="text-sm text-slate-400">{c.sector}</p>
              </div>

              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-0 inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white underline-offset-2 hover:underline"
                >
                  Website ansehen <span aria-hidden>↗</span>
                </a>
              )}
            </div>

            <div className="mt-4 grid gap-4 text-sm text-slate-200 md:grid-cols-3">
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">
                  Ausgangssituation
                </div>
                <p className="mt-1">{c.challenge}</p>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">
                  Ansatz
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
          </article>
        ))}
      </section>
    </main>
  );
}
