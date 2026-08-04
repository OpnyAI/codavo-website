import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPackage } from "@/lib/pricing";

export default function PricingCard({
  item,
  trackingContext,
}: {
  item: PricingPackage;
  trackingContext: string;
}) {
  const featured = Boolean(item.badge);

  return (
    <article
      className={`relative flex h-full min-w-0 flex-col rounded-[1.75rem] border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8 ${
        featured
          ? "border-indigo-300/35 bg-[linear-gradient(155deg,rgba(79,70,229,0.2),rgba(15,23,42,0.92))] shadow-[0_34px_90px_rgba(49,46,129,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]"
          : "border-white/8 bg-slate-950/35"
      }`}
    >
      {item.badge ? (
        <span className="mb-6 inline-flex w-fit rounded-full border border-indigo-200/20 bg-indigo-300/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-indigo-100">
          {item.badge}
        </span>
      ) : (
        <span className="mb-6 h-7" aria-hidden />
      )}
      <h3 className="break-words text-2xl font-semibold tracking-tight text-white">{item.name}</h3>
      <p className={`mt-3 font-semibold tracking-tight ${featured ? "text-3xl text-white" : "text-2xl text-indigo-200"}`}>
        {item.price}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
      <div className="my-6 h-px bg-white/8" />
      <ul className="space-y-2.5 text-sm leading-6 text-slate-300">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-indigo-300/15 text-indigo-200" : "bg-white/5 text-slate-400"}`}>
              <Check className="h-3 w-3" aria-hidden />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Link
          href="/kontakt"
          data-track-event="cta_contact_click"
          data-track-label={`${trackingContext} ${item.name}`}
          className={`w-full ${featured ? "cta-primary" : "cta-secondary"}`}
        >
          Kostenloses Erstgespräch
        </Link>
      </div>
    </article>
  );
}
