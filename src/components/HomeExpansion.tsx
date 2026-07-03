import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import PricingSection from "@/components/pricing/PricingSection";
import { websitePackages } from "@/lib/pricing";

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
    <PricingSection
      title="Drei Website-Pakete für unterschiedliche Projektziele"
      packages={websitePackages}
      trackingContext="Startseite Website-Paket"
      eyebrow="Unternehmenswebsites"
      compact
    />
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
