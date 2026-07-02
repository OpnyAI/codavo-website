"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
  link?: {
    href: "/kontakt" | "/website-check";
    label: string;
  };
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition duration-300 ${
              isOpen
                ? "border-indigo-300/20 bg-white/[0.055] shadow-[0_20px_55px_rgba(0,0,0,0.16)]"
                : "border-white/8 bg-white/[0.025] hover:border-white/14 hover:bg-white/[0.04]"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-5 text-left sm:min-h-20 sm:px-7 sm:py-6"
            >
              <span className="max-w-3xl text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
                {item.q}
              </span>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${isOpen ? "border-indigo-300/20 bg-indigo-300/10 text-indigo-200" : "border-white/10 bg-white/[0.025] text-slate-400"}`}>
                <ChevronDown
                  aria-hidden
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              className={`grid px-5 transition-all duration-500 ease-out sm:px-7 ${
                isOpen
                  ? "grid-rows-[1fr] pb-6 opacity-100 sm:pb-7"
                  : "grid-rows-[0fr] pb-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl border-t border-white/8 pt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  {item.a}
                </p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    tabIndex={isOpen ? undefined : -1}
                    data-track-event={
                      item.link.href === "/kontakt"
                        ? "cta_contact_click"
                        : "cta_website_check_click"
                    }
                    data-track-label={`FAQ ${item.link.label}`}
                    className="mt-4 inline-flex text-sm font-medium text-indigo-300 transition hover:text-white"
                  >
                    {item.link.label} <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
