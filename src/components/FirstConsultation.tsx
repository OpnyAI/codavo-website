import Link from "next/link";
import { ArrowRight, Compass, MessagesSquare, Route } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    number: "01",
    title: "Ausgangslage verstehen",
    description:
      "Wir sprechen über Ihr Unternehmen, Ihre aktuelle Website und die Herausforderungen, die Sie heute lösen möchten.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Ziele und Potenziale einordnen",
    description:
      "Gemeinsam klären wir, welcher professionelle Auftritt, welche Nutzerführung und welche Sichtbarkeit für Ihr Ziel relevant sind.",
  },
  {
    icon: Route,
    number: "03",
    title: "Sinnvollen nächsten Schritt festlegen",
    description:
      "Sie erhalten eine klare Einschätzung, ob Codavo Sie unterstützen kann und wie ein passender Projektumfang aussehen könnte.",
  },
] as const;

export default function FirstConsultation() {
  return (
    <section className="section section--feature" data-mobile-cta-stop>
      <div className="container max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.28)] md:p-12 lg:p-14">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow">Kostenloses Erstgespräch</p>
              <h2 className="section-title mt-5 text-white">
                Was passiert im ersten Gespräch?
              </h2>
            </div>
            <p className="lede max-w-xl">
              Das Erstgespräch schafft Klarheit, bevor über Design, Funktionen
              oder einen konkreten Projektumfang entschieden wird.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-[#09101d]/70 p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-slate-500">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Das Gespräch ist kostenlos. Entscheidend ist zunächst, ob Ihre
              Ziele, der notwendige Lösungsweg und eine Zusammenarbeit sinnvoll
              zusammenpassen.
            </p>
            <Link
              href="/kontakt"
              data-track-event="cta_contact_click"
              data-track-label="Home Erstgespraech Ablauf"
              className="cta-primary shrink-0"
            >
              Kostenloses Erstgespräch vereinbaren
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
