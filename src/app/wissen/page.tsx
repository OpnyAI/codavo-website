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
import {
  knowledgeArticles,
  knowledgeClusterMeta,
  knowledgeClusterOrder,
  type KnowledgeCluster,
  type KnowledgeSlug,
} from "@/lib/knowledge";
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
  "wann-lohnt-sich-ein-website-relaunch": Search,
  "was-gehoert-auf-eine-professionelle-unternehmenswebsite": Layers3,
  "was-ist-ein-funnel": Compass,
  "wann-lohnt-sich-individuelle-software-fuer-kmu": Code2,
  "was-ist-ein-digitales-unternehmenssystem": BarChart3,
} satisfies Record<KnowledgeSlug, typeof BookOpen>;

const clusterIcons = {
  unternehmenswebsites: Layers3,
  landingpages: Compass,
  "funnel-systeme": Compass,
  "seo-aeo-llmo": Sparkles,
  "tracking-analytics": BarChart3,
  "web-apps-software": Code2,
  "hosting-wartung": BookOpen,
  "digitalisierung-mittelstand": BarChart3,
} satisfies Record<KnowledgeCluster, typeof BookOpen>;

const knowledgeSlugs = Object.keys(knowledgeArticles) as KnowledgeSlug[];

const clusterAnchorIds = {
  unternehmenswebsites: "unternehmenswebsites",
  landingpages: "landingpages-funnel",
  "funnel-systeme": "funnel-systeme",
  "seo-aeo-llmo": "seo-aeo-llmo",
  "tracking-analytics": "tracking-analytics",
  "web-apps-software": "software-web-apps",
  "hosting-wartung": "hosting-wartung",
  "digitalisierung-mittelstand": "digitalisierung-mittelstand",
} satisfies Record<KnowledgeCluster, string>;

const topicClusters = knowledgeClusterOrder.map((id) => ({
  title: knowledgeClusterMeta[id].title,
  id: clusterAnchorIds[id],
  href: `#${clusterAnchorIds[id]}`,
  description: knowledgeClusterMeta[id].description,
  slugs: knowledgeSlugs.filter((slug) => knowledgeArticles[slug].cluster === id),
  icon: clusterIcons[id],
}));

const articleGroups = knowledgeClusterOrder.map((id) => ({
  title: knowledgeClusterMeta[id].title,
  id: clusterAnchorIds[id],
  description: knowledgeClusterMeta[id].description,
  slugs: knowledgeSlugs.filter((slug) => knowledgeArticles[slug].cluster === id),
}));

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
                Im kostenlosen Erstgespräch ordnen wir ein, welche
                Inhalte, technischen Grundlagen und nächsten Schritte für Ihr
                Unternehmen relevant sind.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Link
                  href="/kontakt"
                  data-track-event="cta_contact_click"
                  data-track-label="Wissen Hub Abschluss Erstgespraech"
                  className="cta-primary"
                >
                  Kostenloses Erstgespräch
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
