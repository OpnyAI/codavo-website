import PricingCard from "@/components/pricing/PricingCard";
import type { PricingPackage } from "@/lib/pricing";

export default function PricingSection({
  title,
  intro,
  packages,
  trackingContext,
  note = "Die Pakete dienen als Orientierung. Der finale Umfang richtet sich nach Seitenstruktur, Funktionen, Inhalten und Projektziel.",
  eyebrow = "Pakete und Preise",
  compact = false,
}: {
  title: string;
  intro?: string;
  packages: readonly PricingPackage[];
  trackingContext: string;
  note?: string;
  eyebrow?: string;
  compact?: boolean;
}) {
  return (
    <section className={`section section--feature ${compact ? "section--compact" : ""}`}>
      <div className="container max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-5 text-white">{title}</h2>
          {intro ? <p className="lede mx-auto mt-6 max-w-3xl">{intro}</p> : null}
        </div>
        <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {packages.map((item) => (
            <PricingCard key={item.name} item={item} trackingContext={trackingContext} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">{note}</p>
      </div>
    </section>
  );
}
