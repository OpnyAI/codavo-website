import Link from "next/link";
import { Check } from "lucide-react";
import { softwareProjectSizes, softwareTypicalServices } from "@/lib/pricing";

export default function ProjectSizeSection() {
  return (
    <section className="section section--feature">
      <div className="container max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Projektgrößen</p>
            <h2 className="section-title mt-5 text-white">Individuelle Softwareprojekte starten ab 14.900 €.</h2>
            <p className="lede mt-6">
              Individuelle Software wird nicht über starre Pakete kalkuliert. Entscheidend sind Prozesse, Nutzerrollen, Schnittstellen, Datenlogik und Integrationen. Nach einer Analyse entsteht ein passender Projektumfang.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {softwareProjectSizes.map((size) => (
              <article key={size.name} className="card flex min-h-48 flex-col justify-between">
                <h3 className="text-sm font-semibold text-slate-300">{size.name}</h3>
                <p className="mt-8 text-2xl font-semibold tracking-tight text-white">{size.price}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-[1.75rem] border border-white/8 bg-slate-950/35 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white">Typische Leistungen</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {softwareTypicalServices.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <Check className="mt-1 h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
                {service}
              </li>
            ))}
          </ul>
          <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label="Software Projektgröße" className="cta-primary mt-8">
            Projektumfang anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
