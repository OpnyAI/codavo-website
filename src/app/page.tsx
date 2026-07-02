import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import HomeExpansion from "@/components/HomeExpansion";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Professionelle Unternehmenswebsites | Codavo Webstudio",
  description:
    "Codavo entwickelt individuelle Unternehmenswebsites, Landingpages und Funnel für mehr Vertrauen, qualifizierte Anfragen und Sichtbarkeit bei Google und KI-Systemen.",
});

const problems = [
  {
    title: "Kaum sichtbar bei Google und KI-Systemen",
    description:
      "Wenn Inhalte, Struktur und technische Signale fehlen, verstehen Suchmaschinen und KI-Systeme nicht klar genug, wofür Ihr Unternehmen steht.",
  },
  {
    title: "Besucher werden nicht zu Anfragen",
    description:
      "Viele Websites erklären zwar Leistungen, führen Besucher aber nicht gezielt zur Kontaktaufnahme, Anfrage oder Terminbuchung.",
  },
  {
    title: "Austauschbarer Auftritt",
    description:
      "Standardlayouts und generische Texte schaffen selten Vertrauen. Entscheidend ist, dass Ihr Unternehmen eigenständig, professionell und glaubwürdig wirkt.",
  },
  {
    title: "Technisch schwer erweiterbar",
    description:
      "Wenn eine Website technisch limitiert ist, werden spätere Anpassungen, neue Seiten, Funnel, Schnittstellen oder Web-App-Funktionen unnötig kompliziert.",
  },
] as const;

const solutions = [
  {
    title: "Individueller Code statt Baukasten",
    benefit:
      "Jede Website wird individuell mit moderner Webtechnologie entwickelt. Design, Performance, Struktur und Erweiterbarkeit bleiben kontrollierbar.",
    example:
      "React und Next.js schaffen eine saubere Grundlage für Leistungsseiten, Landingpages, Funnel und spätere Funktionen.",
    href: "/webdesign",
    linkLabel: "Webdesign ansehen",
  },
  {
    title: "Sichtbarkeit für Google und KI",
    benefit:
      "Inhalte, Metadaten, FAQ, interne Verlinkung und strukturierte Daten werden für Suchmaschinen und KI-Systeme verständlich aufgebaut.",
    example:
      "Das unterstützt die Einordnung durch Google, AI Overviews, ChatGPT, Gemini, Claude und Perplexity, ohne Rankings zu versprechen.",
    href: "/wissen/seo-aeo-llmo",
    linkLabel: "SEO, AEO und LLMO verstehen",
  },
  {
    title: "Conversion statt nur Design",
    benefit:
      "Die Website soll Vertrauen aufbauen, Leistungen verständlich erklären und Besucher gezielt zur passenden Anfrage führen.",
    example:
      "Klare Botschaften, Belege und CTAs werden zu einem nachvollziehbaren Nutzerweg verbunden.",
    href: "/landingpage-erstellen-lassen",
    linkLabel: "Landingpages ansehen",
  },
  {
    title: "Langfristige Betreuung",
    benefit:
      "Nach dem Launch kann Codavo Hosting, Wartung, Updates, technische Erweiterungen und laufende Optimierung übernehmen.",
    example:
      "Der Betreuungsumfang richtet sich transparent nach Betrieb, Änderungsbedarf und technischen Anforderungen.",
    href: "/hosting-wartung",
    linkLabel: "Hosting und Wartung ansehen",
  },
] as const;

const homeFaqs = [
  {
    q: "Was kostet eine professionelle Website bei Codavo?",
    a: "Eine professionelle Unternehmenswebsite startet bei Codavo im Launch-Paket ab 4.900 €. Der finale Preis hängt vom Umfang, der Seitenstruktur, den Funktionen und dem gewünschten Betreuungsmodell ab. Growth ist ab 7.900 € vorgesehen, Growth Plus beginnt ab 14.900 €.",
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
    q: "Für wen eignet sich das Growth-Paket?",
    a: "Growth eignet sich für Unternehmen, die ihre Website aktiv zur Kundengewinnung einsetzen möchten. Das Paket ist sinnvoll, wenn mehrere Leistungen erklärt, Suchmaschinen und KI-Systeme besser bedient und Besucher gezielter zu Anfragen geführt werden sollen.",
  },
  { q: "Unterstützt Codavo auch nach dem Launch?", a: "Ja. Codavo kann Hosting, Wartung, Updates, technische Betreuung und spätere Erweiterungen übernehmen. Der konkrete Umfang richtet sich nach Website, Änderungsbedarf und Betriebsanforderungen." },
  { q: "Wie läuft ein Website-Projekt mit Codavo ab?", a: "Ein Projekt beginnt mit Analyse und Zielklärung. Danach folgen Strategie, Seitenstruktur, UX/UI, Entwicklung, Launch und auf Wunsch laufende Betreuung. Inhalte, Funktionen und Verantwortlichkeiten werden früh transparent festgelegt." },
];

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

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <div className="max-w-4xl">
              <h2 className="section-title text-white">
                Warum viele Unternehmenswebsites keine Kunden gewinnen
              </h2>
              <p className="lede mt-5 max-w-2xl">
                Gute Gestaltung allein reicht nicht. Entscheidend ist, ob Ihr
                Angebot verständlich wird, Vertrauen entsteht und Besucher den
                nächsten Schritt ohne Umwege finden.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-12 lg:mt-16 lg:gap-6">
              {problems.map((problem, index) => (
                <article
                  key={problem.title}
                  className={`card h-full md:col-span-6 ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}
                >
                  <span className="text-xs font-semibold tabular-nums text-indigo-300/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 max-w-md text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {problem.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                    {problem.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--feature section--codavo-flow">
          <div className="container max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div className="lg:self-start">
                <h2 className="section-title text-white">
                  Warum Codavo anders entwickelt
                </h2>
                <p className="lede mt-5 max-w-xl">
                  Strategie, Inhalte, UX/UI und Entwicklung werden gemeinsam
                  geplant. So entsteht eine Website, die heute funktioniert und
                  bei neuen Anforderungen weiterentwickelt werden kann.
                </p>
              </div>

              <div className="min-w-0 space-y-5">
                {solutions.map((solution, index) => (
                  <article key={solution.title} className="card group flex flex-col md:flex-row md:gap-8">
                    <span className="text-sm font-semibold tabular-nums text-indigo-300/70">
                      0{index + 1}
                    </span>
                    <div className="mt-5 flex-1 md:mt-0">
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
                        {solution.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                        {solution.benefit}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {solution.example}
                      </p>
                      <Link
                        href={solution.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200"
                      >
                        {solution.linkLabel} <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Services />
        <HomeExpansion />
        <CaseStudies />
        <Process />

        <section className="section section--quiet">
          <div className="container max-w-4xl">
            <div className="text-center">
              <h2 className="section-title text-white">
                Häufige Fragen unserer Kunden
              </h2>
              <p className="lede mx-auto mt-5 max-w-2xl">
                Konkrete Antworten zu Kosten, Technik, Zusammenarbeit und der
                Zeit nach dem Launch.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-400/25 bg-indigo-500/[0.08] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.28)] md:p-14 lg:p-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(129,140,248,0.16),transparent_70%)]" />
              <h2 className="section-title relative mx-auto max-w-4xl text-white">
                Bereit für eine Website, die mehr leistet als nur gut
                auszusehen?
              </h2>
              <p className="lede relative mx-auto mt-5 max-w-2xl text-slate-200">
                Im kostenlosen Erstgespräch klären wir, wie Ihre Website mehr
                Vertrauen schaffen, besser gefunden werden und qualifizierte
                Anfragen unterstützen kann.
              </p>
              <div className="relative mx-auto mt-9 flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Home Abschluss Erstgespraech"
                  className="cta-primary"
                >
                  Kostenloses Erstgespräch vereinbaren
                </Link>
                <Link
                  href="/website-check"
                  data-track-event="cta_website_check_click"
                  data-track-label="Home Abschluss Website Check"
                  className="cta-secondary"
                >
                  Website-Check starten
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
