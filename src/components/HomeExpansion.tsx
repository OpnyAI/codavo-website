import Link from "next/link";
import { ArrowUpRight, BookOpen, Check } from "lucide-react";

const packages = [
  {
    name: "Launch",
    price: "ab 4.900 €",
    text: "Für Unternehmen, die professionell online auftreten und eine starke digitale Grundlage schaffen möchten.",
    result: "Ein professioneller digitaler Auftritt, der Vertrauen schafft, Leistungen klar erklärt und technisch sauber aufgebaut ist.",
    features: ["Professionelle Unternehmenswebsite", "Individuelles UX/UI-Design", "Entwicklung mit React/Next.js", "SEO-, AEO- und LLMO-Grundstruktur", "Optimierung für Suchmaschinen und KI-Systeme", "Kontaktformular oder Anfragefunktion", "Responsive Umsetzung", "Launch-Betreuung"],
  },
  {
    name: "Growth",
    price: "ab 7.900 €",
    text: "Für Unternehmen, die ihre Website aktiv zur Kundengewinnung einsetzen möchten.",
    result: "Eine Website, die professionell wirkt und gezielt Sichtbarkeit, Vertrauen sowie qualifizierte Anfragen unterstützt.",
    badge: "Am häufigsten gewählt",
    features: ["Erweiterte Seiten- und Leistungsstruktur", "Conversion-orientierte Nutzerführung", "FAQ- und Antwortbereiche", "Erweiterte interne Verlinkung", "Strukturierte Daten und technische SEO-Grundlagen", "Website-Check inklusive", "Vorbereitung für Landingpages oder Funnel"],
  },
  {
    name: "Growth Plus",
    price: "ab 14.900 €",
    text: "Für Unternehmen mit individuellen Anforderungen, Funnel-Systemen oder komplexeren digitalen Funktionen.",
    result: "Eine maßgeschneiderte digitale Lösung für Unternehmen, die mehr benötigen als eine klassische Website.",
    features: ["Alles aus Growth", "Funnel-Systeme für Kampagnen", "Individuelle Funktionen", "Kundenportale oder Dashboards", "Schnittstellen und API-Anbindungen", "Erweiterte SEO-/AEO-/LLMO-Struktur", "Skalierbare technische Architektur", "Individuelle Projektplanung"],
  },
] as const;

const knowledge = [
  ["/wissen/was-kostet-eine-website", "Was kostet eine professionelle Website?"],
  ["/wissen/seo-aeo-llmo", "Was ist AEO?"],
  ["/wissen/seo-aeo-llmo", "Was ist LLMO?"],
  ["/wissen/website-landingpage-funnel", "Website, Landingpage oder Funnel?"],
  ["/wissen/individuelle-website-vs-baukasten", "React/Next.js oder Baukastensystem?"],
  ["/wissen/ki-systeme-website-verstehen", "Wie verstehen KI-Systeme Websites?"],
] as const;

export function PackagesSection() {
  return (
    <section className="section section--feature section--compact">
      <div className="container max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title text-white">
            Drei Pakete für unterschiedliche Projektziele
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {packages.map((item) => {
            const featured = item.name === "Growth";

            return (
              <article
                key={item.name}
                className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 transition duration-300 md:p-8 ${
                  featured
                    ? "border-indigo-300/35 bg-[linear-gradient(155deg,rgba(79,70,229,0.2),rgba(15,23,42,0.92))] shadow-[0_34px_90px_rgba(49,46,129,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] lg:-my-3 lg:px-9 lg:py-9"
                    : "border-white/8 bg-slate-950/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] lg:my-3"
                }`}
              >
                {"badge" in item ? (
                  <span className="mb-6 inline-flex w-fit rounded-full border border-indigo-200/20 bg-indigo-300/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-indigo-100">
                    {item.badge}
                  </span>
                ) : (
                  <span className="mb-6 h-7" aria-hidden />
                )}

                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.name}
                </h3>
                <p className={`mt-3 font-semibold tracking-tight ${featured ? "text-3xl text-white" : "text-2xl text-indigo-200"}`}>
                  {item.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>

                <div className="my-6 h-px bg-white/8" />

                <ul className="space-y-2.5 text-sm leading-6 text-slate-300">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-indigo-300/15 text-indigo-200" : "bg-white/5 text-slate-400"}`}>
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 flex-1 border-t border-white/8 pt-5 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">Ergebnis: </span>
                  {item.result}
                </p>

                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label={`Paket ${item.name}`}
                  className={`mt-7 ${featured ? "cta-primary" : "cta-secondary"}`}
                >
                  {item.name} anfragen
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Die Pakete dienen als Orientierung. Der finale Umfang richtet sich
          nach Ziel, Seitenstruktur, Funktionen und individuellen Anforderungen.
        </p>
      </div>
    </section>
  );
}

export function KnowledgeSection() {
  return (
    <section className="section section--alt section--compact">
      <div className="container max-w-6xl">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="section-title mt-6 text-white">
              Wissen für moderne Unternehmenswebsites
            </h2>
          </div>
          <div>
            <p className="lede max-w-xl">
              Viele Unternehmen wissen nicht, woran eine gute Website wirklich
              gemessen wird. Deshalb erklärt Codavo Webdesign, Sichtbarkeit,
              KI-Systeme, Funnel und technische Umsetzung verständlich und praxisnah.
            </p>
            <Link href="/wissen" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white">
              Alle Wissensartikel <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {knowledge.map(([href, label], index) => (
            <Link
              key={label}
              href={href}
              className="group flex min-h-28 items-center gap-4 rounded-2xl border border-white/8 bg-slate-950/30 px-5 py-4 transition hover:border-indigo-300/20 hover:bg-white/[0.035]"
            >
              <span className="text-xs font-semibold tabular-nums text-slate-500">
                0{index + 1}
              </span>
              <h3 className="flex-1 text-sm font-semibold leading-snug text-slate-100 sm:text-base">
                {label}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
