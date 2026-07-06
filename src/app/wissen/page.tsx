import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Code2,
  Compass,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import { knowledgeArticles, type KnowledgeSlug } from "@/lib/knowledge";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/wissen",
  title: "Wissen für moderne Unternehmenswebsites | Codavo",
  description:
    "Praxisnahes Wissen zu Webdesign, SEO, AEO, LLMO, Landingpages, Funnel, Technik und Website-Betreuung.",
});

const articleIcons = {
  "was-kostet-eine-website": Search,
  "seo-aeo-llmo": Sparkles,
  "website-landingpage-funnel": Compass,
  "individuelle-website-vs-baukasten": Code2,
  "ki-systeme-website-verstehen": BookOpen,
} satisfies Record<KnowledgeSlug, typeof BookOpen>;

const topicClusters = [
  {
    title: "Unternehmenswebsites",
    id: "unternehmenswebsites",
    href: "#unternehmenswebsites",
    description:
      "Strategie, Kosten, Struktur und technische Grundlagen für professionelle Firmenauftritte.",
    slugs: ["was-kostet-eine-website", "individuelle-website-vs-baukasten"],
    icon: Layers3,
  },
  {
    title: "Landingpages & Funnel",
    id: "landingpages-funnel",
    href: "#landingpages-funnel",
    description:
      "Unterschiede, Einsatzbereiche und Entscheidungslogik für Kampagnen, Angebote und Leadstrecken.",
    slugs: ["website-landingpage-funnel"],
    icon: Compass,
  },
  {
    title: "Software & Web-Apps",
    id: "software-web-apps",
    href: "#software-web-apps",
    description:
      "Orientierung für individuelle Entwicklung, Erweiterbarkeit und digitale Prozesse.",
    slugs: [],
    icon: Code2,
  },
  {
    title: "SEO / AEO / LLMO",
    id: "seo-aeo-llmo",
    href: "#seo-aeo-llmo",
    description:
      "Sichtbarkeit in klassischen Suchmaschinen, Antwortsystemen und KI-Modellen verständlich eingeordnet.",
    slugs: ["seo-aeo-llmo", "ki-systeme-website-verstehen"],
    icon: Sparkles,
  },
  {
    title: "Tracking & Analytics",
    id: "tracking-analytics",
    href: "#tracking-analytics",
    description:
      "Grundlagen für messbare Nutzerwege, Funnel-Verständnis und bessere digitale Entscheidungen.",
    slugs: [],
    icon: BarChart3,
  },
] as const satisfies readonly {
  title: string;
  id: string;
  href: `#${string}`;
  description: string;
  slugs: readonly KnowledgeSlug[];
  icon: typeof BookOpen;
}[];

const articleGroups = [
  {
    title: "Unternehmenswebsites",
    id: "unternehmenswebsites",
    description:
      "Kosten, Projektumfang und technische Entscheidungen für Websites, die langfristig erweiterbar bleiben sollen.",
    slugs: ["was-kostet-eine-website", "individuelle-website-vs-baukasten"],
  },
  {
    title: "Landingpages & Funnel",
    id: "landingpages-funnel",
    description:
      "Orientierung für Unternehmen, die Website, Landingpage und Funnel richtig einordnen möchten.",
    slugs: ["website-landingpage-funnel"],
  },
  {
    title: "Software & Web-Apps",
    id: "software-web-apps",
    description:
      "Dieser Themenbereich ist für Wissen zu Web-Apps, Softwareprojekten und individuellen digitalen Systemen vorbereitet.",
    slugs: [],
  },
  {
    title: "SEO / AEO / LLMO",
    id: "seo-aeo-llmo",
    description:
      "Antworten zu SEO, AEO, LLMO und dazu, wie KI-Systeme Websites semantisch einordnen.",
    slugs: ["seo-aeo-llmo", "ki-systeme-website-verstehen"],
  },
  {
    title: "Tracking & Analytics",
    id: "tracking-analytics",
    description:
      "Dieser Themenbereich ist für Wissen zu Tracking, Analytics, Consent und Conversion-Messung vorbereitet.",
    slugs: [],
  },
] as const satisfies readonly {
  title: string;
  id: string;
  description: string;
  slugs: readonly KnowledgeSlug[];
}[];

function getExistingArticleCount(slugs: readonly KnowledgeSlug[]) {
  return slugs.filter((slug) => knowledgeArticles[slug]).length;
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-20">
        <section className="section section--feature pt-16 md:pt-24">
          <div className="container max-w-6xl">
            <div className="grid min-w-0 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
              <div className="min-w-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                  <BookOpen className="h-5 w-5" aria-hidden />
                </div>
                <p className="eyebrow mt-8">Codavo Wissensplattform</p>
                <h1 className="display-title mt-5 max-w-4xl text-white">
                  Die Codavo Wissensplattform
                </h1>
              </div>
              <p className="lede min-w-0 max-w-2xl break-words lg:pb-2">
                Leitfäden, Vergleiche, Checklisten und Praxiswissen rund um
                Unternehmenswebsites, Landingpages, Funnel-Systeme,
                Softwareentwicklung, Tracking sowie SEO-, AEO- und
                LLMO-Optimierung.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <div className="grid min-w-0 gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
              <div className="min-w-0">
                <p className="eyebrow">Themencluster</p>
                <h2 className="section-title mt-5 max-w-3xl text-white">
                  Orientierung für moderne digitale Unternehmenssysteme
                </h2>
              </div>
              <p className="lede min-w-0 break-words">
                Alle Inhalte basieren auf der praktischen Erfahrung aus der
                Entwicklung individueller Unternehmenswebsites, Landingpages,
                Funnel-Systeme und Softwarelösungen.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {topicClusters.map((cluster) => {
                const Icon = cluster.icon;
                const count = getExistingArticleCount(cluster.slugs);

                return (
                  <Link
                    key={cluster.title}
                    href={cluster.href}
                    className="group flex h-full min-w-0 cursor-pointer flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C18]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                        {count} {count === 1 ? "Artikel" : "Artikel"}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h2 className="mt-6 text-lg font-semibold leading-tight tracking-tight text-white">
                        {cluster.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {cluster.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200">
                      Zum Themenbereich <span aria-hidden>→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Artikelübersicht</p>
              <h2 className="section-title mt-5 text-white">
                Wissen nach Themen geordnet
              </h2>
            </div>

            <div className="mt-12 space-y-14">
              {articleGroups.map((group) => (
                <section
                  key={group.id}
                  id={group.id}
                  aria-labelledby={`wissen-${group.id}`}
                  className="scroll-mt-28"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="min-w-0">
                      <h2
                        id={`wissen-${group.id}`}
                        className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
                      >
                        {group.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                        {group.description}
                      </p>
                    </div>
                    <p className="text-sm text-slate-500">
                      {getExistingArticleCount(group.slugs)}{" "}
                      {getExistingArticleCount(group.slugs) === 1
                        ? "Artikel"
                        : "Artikel"}
                    </p>
                  </div>

                  {group.slugs.length > 0 ? (
                    <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                      {group.slugs.map((slug, index) => {
                      const article = knowledgeArticles[slug];
                      const Icon = articleIcons[slug];

                      return (
                        <Link
                          key={slug}
                          href={`/wissen/${slug}`}
                          className="card group flex min-h-64 min-w-0 flex-col"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                              <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <span className="text-xs font-semibold tabular-nums text-slate-500">
                              0{index + 1}
                            </span>
                          </div>
                          <div className="mt-auto pt-14">
                            <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white">
                              {article.title}
                            </h3>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                              {article.description}
                            </p>
                            <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200">
                              Artikel lesen
                              <ArrowUpRight
                                className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden
                              />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-3xl border border-white/8 bg-white/[0.025] p-6 text-sm leading-7 text-slate-400">
                      Zu diesem Themenbereich sind aktuell noch keine eigenen
                      Wissensartikel veröffentlicht.
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--feature">
          <div className="container max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.25)] md:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_280px_at_50%_0%,rgba(129,140,248,0.14),transparent_70%)]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Welche Wissenslücke bremst Ihre Website?
              </h2>
              <p className="lede relative mx-auto mt-5 max-w-2xl text-slate-200">
                Im Website-Check oder Erstgespräch ordnen wir ein, welche
                Inhalte, technischen Grundlagen und nächsten Schritte für Ihr
                Unternehmen relevant sind.
              </p>
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/website-check"
                  data-track-event="cta_website_check_click"
                  data-track-label="Wissen Hub Abschluss Website Check"
                  className="cta-primary"
                >
                  Website-Check starten
                </Link>
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Wissen Hub Abschluss Kontakt"
                  className="cta-secondary"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
