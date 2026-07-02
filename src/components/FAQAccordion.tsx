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
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.q}
            className="rounded-xl border border-white/10 bg-white/5"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
            >
              <span className="text-base font-medium text-white sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                aria-hidden
                className={`h-5 w-5 shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              className={`grid px-4 transition-all duration-300 ease-out sm:px-5 ${
                isOpen
                  ? "grid-rows-[1fr] pb-5 opacity-100"
                  : "grid-rows-[0fr] pb-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-6 text-slate-300 sm:text-base">
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
