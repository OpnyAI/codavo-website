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

export default function HomeExpansion() {
  return (
    <>
      <section className="section section--feature">
        <div className="container max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title text-white">
              Drei Pakete für unterschiedliche Projektziele
            </h2>
          </div>

          <div className="mt-14 grid items-stretch gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
            {packages.map((item) => {
              const featured = item.name === "Growth";

              return (
                <article
                  key={item.name}
                  className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 transition duration-300 md:p-8 ${
                    featured
                      ? "border-indigo-300/35 bg-[linear-gradient(155deg,rgba(79,70,229,0.2),rgba(15,23,42,0.92))] shadow-[0_34px_90px_rgba(49,46,129,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] lg:-my-4 lg:px-9 lg:py-10"
                      : "border-white/8 bg-slate-950/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] lg:my-4"
                  }`}
                >
                  {"badge" in item ? (
                    <span className="mb-7 inline-flex w-fit rounded-full border border-indigo-200/20 bg-indigo-300/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-indigo-100">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="mb-7 h-7" aria-hidden />
                  )}

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {item.name}
                  </h3>
                  <p className={`mt-3 font-semibold tracking-tight ${featured ? "text-3xl text-white" : "text-2xl text-indigo-200"}`}>
                    {item.price}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>

                  <div className="my-7 h-px bg-white/8" />

                  <ul className="space-y-3 text-sm leading-6 text-slate-300">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-indigo-300/15 text-indigo-200" : "bg-white/5 text-slate-400"}`}>
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 flex-1 border-t border-white/8 pt-6 text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Ergebnis: </span>
                    {item.result}
                  </p>

                  <Link
                    href="/kontakt"
                    data-track-event="cta_contact_click"
                    data-track-label={`Paket ${item.name}`}
                    className={`mt-8 ${featured ? "cta-primary" : "cta-secondary"}`}
                  >
                    {item.name} anfragen
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slate-500">
            Die Pakete dienen als Orientierung. Der finale Umfang richtet sich
            nach Ziel, Seitenstruktur, Funktionen und individuellen Anforderungen.
          </p>
        </div>
      </section>

      <section className="section section--quiet">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
            <div>
              <h2 className="section-title text-white">
                Warum individuelle Entwicklung statt Baukastensystem?
              </h2>
              <p className="lede mt-5 max-w-xl">
                Baukastensysteme können für einfache Anforderungen sinnvoll sein.
                Wenn eine Website jedoch professionell wirken, langfristig wachsen
                und für Suchmaschinen sowie KI-Systeme sauber strukturiert sein soll,
                bietet individuelle Entwicklung mehr Kontrolle.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/9 bg-slate-950/40 shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
              <div className="grid md:grid-cols-2">
                <article className="p-7 md:p-9">
                  <h3 className="text-xl font-semibold text-slate-200">Standardlösung</h3>
                  <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-400">
                    <li>• Schneller Einstieg und Templates</li>
                    <li>• Standardisierte technische Struktur</li>
                    <li>• Begrenztere Erweiterbarkeit</li>
                    <li>• Häufig weniger Kontrolle über Architektur</li>
                  </ul>
                </article>
                <article className="border-t border-indigo-300/15 bg-indigo-400/[0.07] p-7 md:border-l md:border-t-0 md:p-9">
                  <h3 className="text-xl font-semibold text-white">Codavo</h3>
                  <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-200">
                    <li>• Individuelles Design und eigener Code</li>
                    <li>• Erweiterbar für Landingpages, Funnel und Web-Apps</li>
                    <li>• Struktur für SEO, AEO und LLMO</li>
                    <li>• Langfristige technische Kontrolle</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                <BookOpen className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="section-title mt-8 text-white">
                Wissen für moderne Unternehmenswebsites
              </h2>
              <p className="lede mt-5 max-w-xl">
                Viele Unternehmen wissen nicht, woran eine gute Website wirklich
                gemessen wird. Deshalb erklärt Codavo Webdesign, Sichtbarkeit,
                KI-Systeme, Funnel und technische Umsetzung verständlich und praxisnah.
              </p>
              <Link href="/wissen" className="cta-secondary mt-8 w-auto">
                Alle Wissensartikel
              </Link>
            </div>

            <div className="divide-y divide-white/8 overflow-hidden rounded-[1.75rem] border border-white/9 bg-slate-950/35">
              {knowledge.map(([href, label], index) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center gap-5 px-5 py-5 transition hover:bg-white/[0.035] sm:px-7 sm:py-6"
                >
                  <span className="text-xs font-semibold tabular-nums text-slate-500">
                    0{index + 1}
                  </span>
                  <h3 className="flex-1 text-base font-semibold leading-snug text-slate-100 sm:text-lg">
                    {label}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
