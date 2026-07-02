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
    <section id="prozess" className="section section--alt scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            So läuft ein Projekt mit Codavo ab
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base">
            Sechs nachvollziehbare Schritte sorgen dafür, dass Ziele,
            Entscheidungen und Verantwortlichkeiten transparent bleiben.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="card h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
