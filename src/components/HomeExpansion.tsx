import Link from "next/link";

const packages = [
  { name: "Launch", price: "ab 4.900 €", text: "Für Unternehmen, die professionell online auftreten und eine starke digitale Grundlage schaffen möchten.", result: "Ein professioneller digitaler Auftritt, der Vertrauen schafft, Leistungen klar erklärt und technisch sauber aufgebaut ist.", features: ["Professionelle Unternehmenswebsite", "Individuelles UX/UI-Design", "Entwicklung mit React/Next.js", "SEO-, AEO- und LLMO-Grundstruktur", "Optimierung für Suchmaschinen und KI-Systeme", "Kontaktformular oder Anfragefunktion", "Responsive Umsetzung", "Launch-Betreuung"] },
  { name: "Growth", price: "ab 7.900 €", text: "Für Unternehmen, die ihre Website aktiv zur Kundengewinnung einsetzen möchten.", result: "Eine Website, die professionell wirkt und gezielt Sichtbarkeit, Vertrauen sowie qualifizierte Anfragen unterstützt.", badge: "Am häufigsten gewählt", features: ["Erweiterte Seiten- und Leistungsstruktur", "Conversion-orientierte Nutzerführung", "FAQ- und Antwortbereiche", "Erweiterte interne Verlinkung", "Strukturierte Daten und technische SEO-Grundlagen", "Website-Check inklusive", "Vorbereitung für Landingpages oder Funnel"] },
  { name: "Growth Plus", price: "ab 14.900 €", text: "Für Unternehmen mit individuellen Anforderungen, Funnel-Systemen oder komplexeren digitalen Funktionen.", result: "Eine maßgeschneiderte digitale Lösung für Unternehmen, die mehr benötigen als eine klassische Website.", features: ["Alles aus Growth", "Funnel-Systeme für Kampagnen", "Individuelle Funktionen", "Kundenportale oder Dashboards", "Schnittstellen und API-Anbindungen", "Erweiterte SEO-/AEO-/LLMO-Struktur", "Skalierbare technische Architektur", "Individuelle Projektplanung"] },
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
      <section className="section section--alt">
        <div className="container max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-white md:text-5xl">Drei Pakete für unterschiedliche Projektziele</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{packages.map((item) => <article key={item.name} className={"card relative flex h-full flex-col " + (item.name === "Growth" ? "border-indigo-400/50 bg-indigo-500/10" : "")}>{"badge" in item ? <span className="absolute right-4 top-4 rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">{item.badge}</span> : null}<h3 className="text-2xl font-semibold text-white">{item.name}</h3><p className="mt-2 text-xl font-semibold text-indigo-300">{item.price}</p><p className="mt-4 text-sm leading-6 text-slate-300">{item.text}</p><ul className="mt-5 space-y-2 text-sm text-slate-300">{item.features.map((f) => <li key={f}>• {f}</li>)}</ul><p className="mt-5 flex-1 text-sm leading-6 text-slate-200"><span className="font-semibold text-white">Ergebnis: </span>{item.result}</p><Link href="/kontakt" data-track-event="cta_contact_click" data-track-label={"Paket " + item.name} className="mt-6 inline-flex justify-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10">{item.name} anfragen</Link></article>)}</div>
          <p className="mt-6 text-center text-sm text-slate-400">Die Pakete dienen als Orientierung. Der finale Umfang richtet sich nach Ziel, Seitenstruktur, Funktionen und individuellen Anforderungen.</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-white md:text-5xl">Warum individuelle Entwicklung statt Baukastensystem?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">Baukastensysteme können für einfache Anforderungen sinnvoll sein. Wenn eine Website jedoch professionell wirken, langfristig wachsen und für Suchmaschinen sowie KI-Systeme sauber strukturiert sein soll, bietet individuelle Entwicklung mehr Kontrolle.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2"><article className="card"><h3 className="text-xl font-semibold text-white">Standardlösung</h3><ul className="mt-4 space-y-2 text-slate-300"><li>• Schneller Einstieg und Templates</li><li>• Standardisierte technische Struktur</li><li>• Begrenztere Erweiterbarkeit</li><li>• Häufig weniger Kontrolle über Architektur</li></ul></article><article className="card border-indigo-400/30"><h3 className="text-xl font-semibold text-white">Codavo</h3><ul className="mt-4 space-y-2 text-slate-300"><li>• Individuelles Design und eigener Code</li><li>• Erweiterbar für Landingpages, Funnel und Web-Apps</li><li>• Struktur für SEO, AEO und LLMO</li><li>• Langfristige technische Kontrolle</li></ul></article></div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container max-w-5xl"><h2 className="text-center text-3xl font-semibold text-white md:text-5xl">Wissen für moderne Unternehmenswebsites</h2><p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">Viele Unternehmen wissen nicht, woran eine gute Website wirklich gemessen wird. Deshalb erklärt Codavo Webdesign, Sichtbarkeit, KI-Systeme, Funnel und technische Umsetzung verständlich und praxisnah.</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{knowledge.map(([href, label]) => <Link key={label} href={href} className="card flex items-center justify-between gap-4"><h3 className="font-semibold text-white">{label}</h3><span className="text-indigo-300">→</span></Link>)}</div><div className="mt-7 text-center"><Link href="/wissen" className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">Alle Wissensartikel</Link></div></div>
      </section>
    </>
  );
}
