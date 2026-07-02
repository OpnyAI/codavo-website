const steps = [
  {
    title: "Analyse",
    description:
      "Wir prüfen Zielgruppe, aktuelles Auftreten, Wettbewerb, Suchintentionen und wirtschaftliches Ziel.",
  },
  {
    title: "Strategie",
    description:
      "Aus den Erkenntnissen entsteht eine klare Seitenstruktur mit Botschaften, Nutzerführung und Sichtbarkeitslogik.",
  },
  {
    title: "UX/UI",
    description:
      "Das Design wird hochwertig, verständlich und auf Vertrauen, Lesbarkeit und Anfragegewinnung ausgerichtet.",
  },
  {
    title: "Entwicklung",
    description:
      "Die Website wird mit moderner Webtechnologie umgesetzt – schnell, responsiv, sauber strukturiert und erweiterbar.",
  },
  {
    title: "Launch",
    description:
      "Vor Veröffentlichung werden Inhalte, Darstellung, Tracking, SEO-/AEO-/LLMO-Grundlagen und technische Funktion geprüft.",
  },
  {
    title: "Betreuung",
    description:
      "Auf Wunsch übernimmt Codavo Hosting, Wartung, Updates und spätere Erweiterungen.",
  },
] as const;

export default function Process() {
  return (
    <section id="prozess" className="section section--quiet section--compact scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="max-w-4xl">
          <h2 className="section-title text-white">
            So läuft ein Projekt mit Codavo ab
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Sechs nachvollziehbare Schritte sorgen dafür, dass Ziele,
            Entscheidungen und Verantwortlichkeiten transparent bleiben.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-0 border-l border-white/10 pl-8 md:mt-12 lg:grid-cols-6 lg:border-l-0 lg:border-t lg:pl-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pb-7 last:pb-0 lg:px-4 lg:pb-0 lg:pt-8 first:lg:pl-0 last:lg:pr-0">
              <span className="absolute -left-[3.05rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-300/25 bg-[#0b1324] text-xs font-semibold text-indigo-200 shadow-[0_0_0_6px_#070c18] lg:-top-4 lg:left-4 first:lg:left-0">
                  {index + 1}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-white lg:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
