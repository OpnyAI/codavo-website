import Link from "next/link";
import { LayoutTemplate, Megaphone, SearchCheck, ServerCog, Workflow } from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Professioneller auftreten",
    solution: "Unternehmenswebsite",
    description:
      "Für Unternehmen, die einen hochwertigen digitalen Auftritt benötigen, der Vertrauen schafft und Leistungen klar darstellt.",
    href: "/webdesign",
    linkLabel: "Unternehmenswebsite planen",
  },
  {
    icon: Megaphone,
    title: "Mehr Anfragen gewinnen",
    solution: "Landingpage oder Funnel-System",
    description:
      "Für Kampagnen, neue Angebote oder digitale Vertriebsprozesse mit klarer Nutzerführung und Anfrageziel.",
    href: "/landingpage-erstellen-lassen",
    linkLabel: "Landingpage ansehen",
    secondaryHref: "/funnel-erstellen-lassen",
    secondaryLabel: "Funnel ansehen",
  },
  {
    icon: SearchCheck,
    title: "Besser gefunden werden",
    solution: "SEO, AEO und LLMO",
    description:
      "Für Unternehmen, die nicht nur bei Google, sondern auch in KI-Systemen besser verstanden werden möchten.",
    href: "/wissen/seo-aeo-llmo",
    linkLabel: "Moderne Sichtbarkeit verstehen",
  },
  {
    icon: Workflow,
    title: "Prozesse digitalisieren",
    solution: "Web-App oder individuelle Software",
    description:
      "Für Unternehmen, die über eine Website hinaus Portale, Dashboards, Buchungssysteme oder interne Tools benötigen.",
    href: "/web-app-entwicklung",
    linkLabel: "Web-App ansehen",
    secondaryHref: "/softwareloesungen-fuer-kmu",
    secondaryLabel: "Software für KMU",
  },
  {
    icon: ServerCog,
    title: "Website verlässlich betreiben",
    solution: "Hosting, Wartung und Updates",
    description:
      "Hosting, Wartung und technische Weiterentwicklung halten die Website sicher, aktuell und erweiterbar.",
    href: "/hosting-wartung",
    linkLabel: "Hosting und Wartung ansehen",
  },
] as const;

export default function Services() {
  const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

  return (
    <section id="leistungen" className="section section--quiet section--compact scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="grid items-end gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="section-title text-white">
            Was möchten Sie mit Ihrer Website erreichen?
            </h2>
          </div>
          <p className="lede max-w-xl lg:pb-1">
            Wählen Sie den Einstieg über Ihr konkretes Geschäftsziel. Codavo
            verbindet Website-Strategie, Nutzerführung und technische Umsetzung.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:gap-6">
          {services.map((service, index) => (
            <article key={service.title} className={`card group flex h-full flex-col md:col-span-1 ${spans[index]}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <service.icon className="h-5 w-5 text-indigo-300" aria-hidden />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-indigo-300">
                {service.solution}
              </p>
              <p className="mt-4 max-w-xl flex-1 text-sm leading-7 text-slate-300 md:text-base">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200"
                >
                  {service.linkLabel} <span aria-hidden>→</span>
                </Link>
                {"secondaryHref" in service ? (
                  <Link
                    href={service.secondaryHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
                  >
                    {service.secondaryLabel} <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
