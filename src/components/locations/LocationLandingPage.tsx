import Link from "next/link";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import type { LocationProfile } from "@/lib/locations";
import { locationBySlug } from "@/lib/locations";
import { ORGANIZATION_ID, SEO_CONFIG } from "@/lib/seo";

const services = [
  {
    href: "/webdesign",
    title: "Webdesign",
    text: "Individuelle Unternehmenswebsites mit klarer Positionierung, hochwertigem Interface und performanter Technik.",
  },
  {
    href: "/landingpage-erstellen-lassen",
    title: "Landingpages",
    text: "Fokussierte Zielseiten für ein Angebot, eine Kampagne und einen eindeutig messbaren nächsten Schritt.",
  },
  {
    href: "/funnel-erstellen-lassen",
    title: "Funnel",
    text: "Nachvollziehbare Nutzerwege von der ersten Botschaft bis zu Formular, Termin oder qualifizierter Anfrage.",
  },
  {
    href: "/softwareloesungen-fuer-kmu",
    title: "Individuelle Software",
    text: "Webbasierte Systeme, Portale und Automatisierungen für Prozesse, die mit Standardsoftware nicht sauber abbildbar sind.",
  },
] as const;

function buildFaqs(location: LocationProfile): FAQItem[] {
  return [
    {
      q: `Bietet Codavo Webdesign für Unternehmen in ${location.city} an?`,
      a: `Ja. Codavo entwickelt professionelles Webdesign für Unternehmen in ${location.city}. Im Fokus stehen individuelle Unternehmenswebsites, Landingpages und Funnel-Systeme mit klarer Nutzerführung und performanter technischer Umsetzung.`,
    },
    {
      q: `Was kostet eine professionelle Website für Unternehmen in ${location.city}?`,
      a: `Die Kosten hängen vom konkreten Projektumfang ab. Seitenzahl, Inhalte, individuelles Design, Funktionen, Integrationen und Betreuung bestimmen das Angebot. Nach der Analyse erhalten Unternehmen eine transparente Leistungsabgrenzung ohne pauschale Preisversprechen.`,
    },
    {
      q: `Wie kann eine Website Unternehmen in ${location.city} mehr Anfragen bringen?`,
      a: `Eine professionelle Website kann Anfragen unterstützen, indem sie Positionierung, Leistungen und Nutzen verständlich erklärt. Klare Belege, schnelle Ladezeiten und eindeutige Kontaktwege reduzieren Unsicherheit und führen passende Interessenten gezielt zum nächsten Schritt. Eine feste Anfragezahl lässt sich nicht garantieren.`,
    },
    {
      q: "Wird die Website auch für Google und KI-Systeme wie ChatGPT oder Gemini optimiert?",
      a: "Ja. Codavo berücksichtigt SEO, AEO und LLMO durch klare Themenstrukturen, direkte Antworten, semantisches HTML und strukturierte Daten. Das verbessert die Verständlichkeit für Google, ChatGPT, Gemini und andere KI-Systeme, ohne Rankings oder Erwähnungen zu versprechen.",
    },
    {
      q: `Welche Leistungen bietet Codavo für Unternehmen in ${location.city} an?`,
      a: `Codavo bietet Webdesign, Unternehmenswebsites, Landingpages, Funnel, Web-Apps sowie Hosting und Wartung an. Welche Kombination sinnvoll ist, richtet sich nach Geschäftsziel, bestehender Website und den tatsächlichen Anforderungen an Sichtbarkeit und Kundengewinnung.`,
    },
    {
      q: "Wie läuft ein Website-Projekt mit Codavo ab?",
      a: "Der Ablauf beginnt mit Analyse und Zielklärung. Danach folgen Content- und UX-Konzept, individuelles UI-Design, Entwicklung, Qualitätssicherung und Launch. Abstimmungen, Freigaben und nächste Schritte werden während des Projekts transparent dokumentiert.",
    },
  ];
}

export default function LocationLandingPage({ location }: { location: LocationProfile }) {
  const path = `/standorte/${location.slug}`;
  const pageUrl = `${SEO_CONFIG.domain}${path}`;
  const faqs = buildFaqs(location);
  const relatedLocations = location.related
    .map((slug) => locationBySlug.get(slug))
    .filter((item): item is LocationProfile => Boolean(item));

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: location.title,
        description: location.description,
        inLanguage: "de-DE",
        about: { "@id": `${pageUrl}#service` },
        isPartOf: { "@id": `${SEO_CONFIG.domain}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Webdesign, Landingpages, Funnel und Software für ${location.city}`,
        serviceType: ["Webdesign", "Landingpage-Entwicklung", "Funnel-Entwicklung", "Individuelle Softwareentwicklung"],
        description: location.description,
        url: pageUrl,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: {
          "@type": "City",
          name: location.city,
          containedInPlace: { "@type": "AdministrativeArea", name: location.state },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SEO_CONFIG.domain}/kontakt`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: `${SEO_CONFIG.domain}/` },
          { "@type": "ListItem", position: 2, name: "Standorte", item: `${SEO_CONFIG.domain}/standorte` },
          { "@type": "ListItem", position: 3, name: location.city, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-20">
        <section className="section section--feature pt-16 md:pt-24">
          <div className="container max-w-6xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="transition hover:text-white">Startseite</Link>
              <span aria-hidden>/</span>
              <Link href="/standorte" className="transition hover:text-white">Standorte</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-300">{location.city}</span>
            </nav>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.38fr] lg:items-end lg:gap-20">
              <div>
                <p className="eyebrow">Webdesign · {location.state}</p>
                <h1 className="display-title mt-5 max-w-5xl text-white">Webdesign in {location.city} für professionelle Unternehmenswebsites</h1>
                <p className="lede mt-7 max-w-3xl">{location.intro}</p>
                <div className="mt-9 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
                  <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label={`Standort ${location.city} Hero Kontakt`} className="cta-primary">
                    Kostenloses Erstgespräch
                  </Link>
                  <Link href="/website-check" data-track-event="cta_website_check_click" data-track-label={`Standort ${location.city} Hero Website Check`} className="cta-secondary">
                    Website-Check starten
                  </Link>
                </div>
              </div>
              <aside className="rounded-3xl border border-indigo-300/15 bg-indigo-400/[0.06] p-6 md:p-7">
                <Layers3 className="h-5 w-5 text-indigo-300" aria-hidden />
                <p className="mt-5 text-sm font-semibold text-white">Deutschlandweit begleitet</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Projekttermine sind digital oder nach Absprache persönlich möglich. Im Fokus stehen klare Entscheidungen, verlässliche Zwischenschritte und eine langfristig wartbare Lösung.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
              <p className="eyebrow">Direkte Antwort</p>
              <p className="text-xl font-medium leading-9 tracking-tight text-white md:text-2xl md:leading-10">
                Codavo entwickelt Webdesign für Unternehmen in {location.city}: individuelle Unternehmenswebsites, Landingpages und Funnel, die Leistungen verständlich erklären, Sichtbarkeit unterstützen und von Google, ChatGPT, Gemini sowie Google AI Overviews semantisch eingeordnet werden können.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
              <div>
                <p className="eyebrow">Relevanz vor Design</p>
                <h2 className="section-title mt-5 text-white">Warum Unternehmen in {location.city} professionelle Websites benötigen</h2>
              </div>
              <div>
                <p className="text-xl leading-9 text-slate-200 md:text-2xl md:leading-10">{location.why}</p>
                <p className="mt-6 leading-8 text-slate-400">{location.challengeIntro}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <p className="eyebrow">Typische Herausforderungen</p>
            <h2 className="section-title mt-5 max-w-4xl text-white">Wo digitale Auftritte im Alltag an Wirkung verlieren</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
              {location.challenges.map((challenge, index) => (
                <article key={challenge.title} className="card h-full">
                  <span className="text-xs font-semibold tabular-nums text-indigo-300/70">0{index + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-white md:text-2xl">{challenge.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">{challenge.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="eyebrow">Strategie, Design und Entwicklung</p>
                <h2 className="section-title mt-5 text-white">Was Codavo anders macht</h2>
                <p className="lede mt-6">{location.approach}</p>
              </div>
              <ol className="grid gap-4 sm:grid-cols-2">
                {["Analyse und Priorisierung", "Content und UX-Konzept", "Design und Entwicklung", "Qualität, Launch und Betreuung"].map((step, index) => (
                  <li key={step} className="rounded-3xl border border-white/8 bg-white/[0.025] p-6">
                    <span className="text-xs font-semibold text-indigo-300">0{index + 1}</span>
                    <h3 className="mt-5 font-semibold text-white">{step}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {[
                        "Ziele, Zielgruppen, bestehende Inhalte und technische Abhängigkeiten werden geprüft.",
                        "Botschaften, Seitenlogik und der konkrete nächste Schritt werden vor dem Interface festgelegt.",
                        "Ein individuelles, responsives System entsteht auf einer performanten technischen Basis.",
                        "Funktion, Metadaten und Darstellung werden geprüft; danach bleibt eine geregelte Weiterentwicklung möglich.",
                      ][index]}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-10 rounded-3xl border border-white/8 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Typisches Projektszenario in {location.city}</p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">{location.projectExample}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="section-title mt-5 max-w-4xl text-white">Digitale Bausteine passend zum tatsächlichen Problem</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="card group flex h-full min-h-72 flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{service.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-indigo-300">
                    Leistung ansehen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { href: "/website-check", label: "Website-Check", text: "Bestehenden Auftritt strukturiert prüfen" },
                { href: "/wissen", label: "Wissen", text: "Fundierte Antworten zu Website, SEO und KI" },
                { href: "/standorte", label: "Alle Standorte", text: "Deutschlandweite Leistungsgebiete entdecken" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition hover:border-indigo-300/20 hover:bg-white/[0.04]">
                  <span><strong className="block text-sm text-white">{item.label}</strong><span className="mt-1 block text-xs leading-5 text-slate-500">{item.text}</span></span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <p className="eyebrow">Pakete und Projektumfang</p>
            <h2 className="section-title mt-5 max-w-4xl text-white">Der Umfang folgt dem Ziel – nicht einem starren Seitenpaket</h2>
            <p className="lede mt-6 max-w-3xl">
              Codavo grenzt Inhalt, Funktionen, Integrationen und Betreuung vor Projektstart transparent ab. So bleibt nachvollziehbar, welche Lösung für das aktuelle Ziel wirtschaftlich sinnvoll ist und welche Erweiterungen später folgen können.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                { title: "Fokussierter Einstieg", text: "Für ein klar abgegrenztes Angebot, eine Landingpage oder einen überprüfbaren Conversion-Weg." },
                { title: "Unternehmenswebsite", text: "Für Positionierung, mehrere Leistungen, Cases, Wissen und eine langfristige SEO-/AEO-Struktur." },
                { title: "Individuelles System", text: "Für Web-App-Funktionen, Portale, Integrationen oder Prozesse außerhalb klassischer Website-Pakete." },
              ].map((scope) => (
                <article key={scope.title} className="card h-full">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{scope.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">{scope.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-4xl">
            <p className="eyebrow text-center">FAQ</p>
            <h2 className="section-title mt-5 text-center text-white">Häufige Fragen aus {location.city}</h2>
            <div className="mt-12 md:mt-16"><FAQAccordion items={faqs} /></div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
              <p className="eyebrow">Weitere Leistungsgebiete</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLocations.map((related) => (
                  <Link key={related.slug} href={`/standorte/${related.slug}`} className="flex items-center justify-between rounded-2xl border border-white/8 px-5 py-4 text-sm font-medium text-slate-300 transition hover:border-indigo-300/20 hover:text-white">
                    {related.city}<ArrowRight className="h-4 w-4 text-indigo-300" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center md:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_280px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">Welcher digitale Schritt ist für Ihr Unternehmen sinnvoll?</h2>
              <p className="lede relative mx-auto mt-5 max-w-2xl">Im Erstgespräch klären wir Ziel, Ausgangslage und den wirtschaftlich passenden Umfang – ohne vorab eine bestimmte Lösung zu erzwingen.</p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/kontakt" data-track-event="cta_contact_click" data-track-label={`Standort ${location.city} Abschluss Kontakt`} className="cta-primary">Erstgespräch vereinbaren</Link>
                <Link href="/website-check" data-track-event="cta_website_check_click" data-track-label={`Standort ${location.city} Abschluss Website Check`} className="cta-secondary"><Check className="mr-2 h-4 w-4" aria-hidden />Website prüfen lassen</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }} />
      <Footer />
    </>
  );
}
