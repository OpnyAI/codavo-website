import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Search, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { knowledgeArticles } from "@/lib/knowledge";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/wissen",
  title: "Wissen für moderne Unternehmenswebsites | Codavo",
  description:
    "Praxisnahes Wissen zu Webdesign, SEO, AEO, LLMO, Landingpages, Funnel, Technik und Website-Betreuung.",
});

const icons = [Search, Sparkles, Compass, BookOpen, Search] as const;

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden pt-20">
        <section className="section section--feature pt-16 md:pt-24">
          <div className="container max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.08] text-indigo-300">
                  <BookOpen className="h-5 w-5" aria-hidden />
                </div>
                <p className="eyebrow mt-8">Codavo Wissensplattform</p>
                <h1 className="display-title mt-5 text-white">
                  Wissen für moderne Unternehmenswebsites
                </h1>
              </div>
              <p className="lede max-w-2xl lg:pb-2">
                Hier erklärt Codavo zentrale Fragen rund um professionelle
                Websites, Webdesign, Sichtbarkeit bei Suchmaschinen und
                KI-Systemen, Landingpages, Funnel, Technik und laufende Betreuung.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
              {Object.entries(knowledgeArticles).map(([slug, article], index) => {
                const Icon = icons[index];
                const featured = index === 0;

                return (
                  <Link
                    key={slug}
                    href={`/wissen/${slug}`}
                    className={`card group flex min-h-72 flex-col ${
                      featured
                        ? "md:col-span-2 lg:col-span-7 lg:min-h-[25rem]"
                        : index === 1
                          ? "lg:col-span-5 lg:min-h-[25rem]"
                          : "lg:col-span-4"
                    }`}
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
                      <h2 className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} max-w-2xl font-semibold leading-tight tracking-tight text-white`}>
                        {article.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                        {article.description}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200">
                        Artikel lesen
                        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
