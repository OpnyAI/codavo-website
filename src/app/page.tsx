import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FirstConsultation from "@/components/FirstConsultation";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Codavo Webstudio | Websites, Funnel & Software",
  description:
    "Codavo entwickelt Websites, Landingpages, Funnel und webbasierte Software für Unternehmen, die sichtbarer werden, Anfragen erhöhen und Prozesse vereinfachen möchten.",
});

const problems = [
  {
    title: "Der Auftritt bleibt hinter der eigenen Qualität zurück",
    description:
      "Die Leistungen sind hochwertig, doch die Website wirkt veraltet, austauschbar oder erklärt den Mehrwert nicht überzeugend.",
  },
  {
    title: "Es kommen zu wenige passende Anfragen",
    description:
      "Interessenten finden nicht schnell genug die richtigen Argumente, Belege und nächsten Schritte – und verlassen die Seite ohne Kontaktaufnahme.",
  },
  {
    title: "Bei Google und KI-Systemen kaum präsent",
    description:
      "Wenn Inhalte, Struktur und technische Signale fehlen, wird nicht klar genug verstanden, wofür das Unternehmen steht und bei welchen Fragen es relevant ist.",
  },
  {
    title: "Wichtige Verbesserungen bleiben liegen",
    description:
      "Im Alltag fehlen Zeit, Know-how oder eine verlässliche technische Grundlage, um Inhalte, Angebote und Funktionen laufend weiterzuentwickeln.",
  },
] as const;

const solutions = [
  {
    title: "Qualität sichtbar machen",
    benefit:
      "Positionierung, Inhalte und individuelles Design werden so verbunden, dass der digitale Auftritt dem tatsächlichen Leistungsniveau entspricht.",
    example:
      "Besucher erkennen schneller, warum das Unternehmen die richtige Wahl ist, und fassen bereits vor dem ersten Gespräch Vertrauen.",
    detail:
      "Ein Standardtemplate kann Farben und Bilder austauschen. Eine klare Positionierung, eine eigenständige Nutzerführung und passgenaue Funktionen entstehen dadurch jedoch nicht automatisch.",
    href: "/webdesign",
    linkLabel: "Webdesign ansehen",
  },
  {
    title: "Sichtbarkeit für Google und KI",
    benefit:
      "Inhalte, Metadaten, FAQ, interne Verlinkung und strukturierte Daten werden für Suchmaschinen und KI-Systeme verständlich aufgebaut.",
    example:
      "So entstehen starke Voraussetzungen für gute Platzierungen bei Google und Sichtbarkeit in Antworten von ChatGPT, Gemini, Claude und Perplexity.",
    detail: null,
    href: "/wissen/seo-aeo-llmo",
    linkLabel: "SEO, AEO und LLMO verstehen",
  },
  {
    title: "Conversion statt nur Design",
    benefit:
      "Die Website soll Vertrauen aufbauen, Leistungen verständlich erklären und Besucher gezielt zur passenden Anfrage führen.",
    example:
      "Klare Botschaften, Belege und CTAs werden zu einem nachvollziehbaren Nutzerweg verbunden.",
    detail: null,
    href: "/landingpage-erstellen-lassen",
    linkLabel: "Landingpages ansehen",
  },
  {
    title: "Eine Website, die mitwächst",
    benefit:
      "Die Website wird auf einer flexiblen Grundlage aufgebaut und kann nach dem Launch betreut, erweitert und laufend optimiert werden.",
    example:
      "Neue Leistungsseiten, Landingpages, Funnel oder Schnittstellen lassen sich ergänzen, ohne jedes Mal von vorne anzufangen.",
    detail: null,
    href: "/hosting-wartung",
    linkLabel: "Hosting und Wartung ansehen",
  },
] as const;

const homeFaqs = [
  {
    q: "Wie entsteht das Angebot für eine professionelle Website?",
    a: "Der passende Projektumfang entsteht aus Ihren Zielen, der benötigten Seitenstruktur, den Inhalten, Funktionen und dem gewünschten Betreuungsmodell. Im Erstgespräch klären wir zunächst die Ausgangslage. Anschließend erhalten Sie ein transparent abgegrenztes Angebot für die tatsächlich sinnvolle Lösung.",
    link: {
      href: "/kontakt" as const,
      label: "Kostenloses Erstgespräch vereinbaren",
    },
  },
  {
    q: "Warum entwickelt Codavo nicht mit klassischen Baukastensystemen?",
    a: "Codavo setzt auf individuelle Entwicklung, weil Design, Performance, Erweiterbarkeit und technische Struktur dadurch besser kontrollierbar sind. Baukastensysteme können für einfache Projekte sinnvoll sein. Für einen eigenständigen, langfristig erweiterbaren Auftritt bietet individueller Code mehr Flexibilität.",
  },
  {
    q: "Was bedeutet SEO, AEO und LLMO?",
    a: "SEO verbessert die Auffindbarkeit in klassischen Suchmaschinen. AEO strukturiert Inhalte für direkte Antworten und AI Overviews. LLMO unterstützt KI-Modelle wie ChatGPT, Gemini, Claude oder Perplexity dabei, ein Unternehmen und seine Leistungen besser einzuordnen.",
  },
  {
    q: "Können KI-Systeme wie ChatGPT oder Gemini meine Website verstehen?",
    a: "KI-Systeme können Website-Inhalte besser einordnen, wenn diese klar formuliert, sinnvoll verlinkt und technisch sauber ausgezeichnet sind. Präzise Leistungsbeschreibungen, Antwortbereiche, Metadaten und strukturierte Daten schaffen dafür eine belastbare Grundlage.",
  },
  {
    q: "Was ist der Unterschied zwischen Website, Landingpage und Funnel?",
    a: "Eine Website stellt das Unternehmen und mehrere Leistungen umfassend dar. Eine Landingpage konzentriert sich auf ein Angebot oder eine Kampagne. Ein Funnel führt Besucher über mehrere definierte Schritte zu einer Anfrage, Buchung oder Bewerbung.",
  },
  {
    q: "Für welche Unternehmen eignet sich eine neue Website?",
    a: "Eine neue Website ist sinnvoll, wenn der aktuelle Auftritt nicht mehr zur Qualität des Unternehmens passt, Leistungen unklar erklärt, bei Google und in KI-Suchen kaum sichtbar ist oder zu wenige passende Anfragen unterstützt.",
  },
  { q: "Unterstützt Codavo auch nach dem Launch?", a: "Ja. Codavo kann Hosting, Wartung, Updates, technische Betreuung und spätere Erweiterungen übernehmen. Der konkrete Umfang richtet sich nach Website, Änderungsbedarf und Betriebsanforderungen." },
  { q: "Wie läuft ein Website-Projekt mit Codavo ab?", a: "Ein Projekt beginnt mit Analyse und Zielklärung. Danach folgen Strategie, Seitenstruktur, UX/UI, Entwicklung, Launch und auf Wunsch laufende Betreuung. Inhalte, Funktionen und Verantwortlichkeiten werden früh transparent festgelegt." },
];

const argumentPairs = [
  { problem: problems[0], solution: solutions[0] },
  { problem: problems[1], solution: solutions[2] },
  { problem: problems[2], solution: solutions[1] },
  { problem: problems[3], solution: solutions[3] },
] as const;

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <CaseStudies />

        <section className="section section--feature section--compact">
          <div className="container max-w-6xl">
            <div className="max-w-5xl">
              <h2 className="section-title text-white">
                Eine neue Optik allein macht noch keine wirksame Website
              </h2>
              <p className="lede mt-5 max-w-3xl">
                Viele Unternehmen glauben, ein moderneres Template oder ein
                schneller Baukasten-Relaunch reiche aus. Das eigentliche Problem:
                Die Website wurde nie als zusammenhängender Weg vom ersten
                Eindruck bis zur Anfrage geplant. Deshalb verbindet Codavo
                Positionierung, Inhalte, Nutzerführung, Sichtbarkeit und
                Entwicklung zu einem digitalen Vertriebsweg.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
              {argumentPairs.map(({ problem, solution }, index) => (
                <article key={problem.title} className="card group flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-semibold tabular-nums text-indigo-300/70">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Das zeigt sich so
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {problem.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {problem.description}
                  </p>

                  <div className="my-6 h-px bg-white/8" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-300/75">
                    So löst Codavo das
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {solution.benefit} {solution.example}
                  </p>
                  {solution.detail ? (
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {solution.detail}
                    </p>
                  ) : null}
                  <Link
                    href={solution.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200"
                  >
                    {solution.linkLabel} <span aria-hidden>→</span>
                  </Link>
                  </article>
                ))}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.07] p-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-300">
                  Nächster Schritt
                </p>
                <p className="mt-2 text-base leading-7 text-slate-200">
                  Im kostenlosen Erstgespräch klären wir, was Ihre Website heute
                  leisten muss und welcher Projektumfang dafür sinnvoll ist.
                </p>
              </div>
              <Link
                href="/kontakt"
                data-track-event="cta_contact_click"
                data-track-label="Home Argumentation Erstgespraech"
                className="cta-primary shrink-0"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>
          </div>
        </section>

        <Services />
        <About />
        <Testimonials />
        <Process />

        <section className="section section--quiet">
          <div className="container max-w-4xl">
            <div className="text-center">
              <h2 className="section-title text-white">
                Häufige Fragen unserer Kunden
              </h2>
              <p className="lede mx-auto mt-5 max-w-2xl">
                Konkrete Antworten zu Projektumfang, Technik, Zusammenarbeit und der
                Zeit nach dem Launch.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </section>

        <FirstConsultation />

        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
