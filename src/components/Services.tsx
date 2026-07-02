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
  return (
    <section id="leistungen" className="section scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Was möchten Sie mit Ihrer Website erreichen?
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base">
            Wählen Sie den Einstieg über Ihr konkretes Geschäftsziel. Codavo
            verbindet Website-Strategie, Nutzerführung und technische Umsetzung.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article key={service.title} className="card flex h-full flex-col">
              <service.icon className="h-7 w-7 text-indigo-300" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-indigo-300">
                {service.solution}
              </p>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300 md:text-base">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-indigo-300 transition hover:text-white"
              >
                {service.linkLabel} <span aria-hidden>→</span>
              </Link>
              {"secondaryHref" in service ? (
                <Link
                  href={service.secondaryHref}
                  className="mt-2 inline-flex items-center text-sm font-medium text-indigo-300 transition hover:text-white"
                >
                  {service.secondaryLabel} <span aria-hidden>→</span>
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
