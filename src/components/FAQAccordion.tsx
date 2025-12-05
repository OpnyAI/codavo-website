"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };
export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0); // 0 = erste Frage offen

  return (
    <div className="mt-10 space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className="rounded-xl border border-white/10 bg-white/5"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
            >
              <span className="font-medium text-white text-lg">{it.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* animiertes Auf-/Zuklappen (ohne Layout-Jump) */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-hidden={!isOpen}
              className={`px-5 pb-5 grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-slate-300 leading-relaxed">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
