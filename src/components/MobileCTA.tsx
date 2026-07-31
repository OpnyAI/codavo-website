"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";

const HIDE_ROUTES = [
  "/kontakt",
  "/website-check",
  "/impressum",
  "/datenschutz",
] as const;

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHiddenRoute = HIDE_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  useEffect(() => {
    if (isHiddenRoute) {
      setVisible(false);
      return;
    }

    const SHOW_SCROLL_Y = 200;
    const FOOTER_THRESHOLD = 160;

    let finalCtaInView = false;

    const computeBottomDistance = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const viewport = window.innerHeight;
      const fullHeight = Math.max(
        body.scrollHeight,
        doc.scrollHeight,
        body.offsetHeight,
        doc.offsetHeight,
        body.clientHeight,
        doc.clientHeight,
      );
      return fullHeight - (scrollTop + viewport);
    };

    const sync = () => {
      const nearFooter = computeBottomDistance() < FOOTER_THRESHOLD;
      const shouldShow =
        window.scrollY > SHOW_SCROLL_Y && !nearFooter && !finalCtaInView;
      setVisible(shouldShow);
    };

    const onScroll = () => sync();
    const onResize = () => sync();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const finalCta = document.querySelector("[data-mobile-cta-stop]");
    const io = finalCta
      ? new IntersectionObserver(
          (entries) => {
            finalCtaInView = entries.some((entry) => entry.isIntersecting);
            sync();
          },
          { rootMargin: "0px 0px -40% 0px", threshold: 0.01 },
        )
      : null;

    if (finalCta && io) io.observe(finalCta);

    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
    };
  }, [isHiddenRoute]);

  if (isHiddenRoute) {
    return null;
  }

  return (
    <div
      className={[
        "fixed inset-x-3 z-30 md:hidden",
        "bottom-[calc(env(safe-area-inset-bottom)_+_10px)]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-md rounded-3xl border border-white/12 bg-slate-950/88 p-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <Link
          href="/kontakt"
          scroll
          data-track-event="cta_contact_click"
          data-track-label="Mobile Erstgespraech"
          aria-label="Kostenloses Erstgespräch vereinbaren"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all hover:brightness-110 active:brightness-95"
        >
          <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Kostenloses Erstgespräch</span>
        </Link>
      </div>
    </div>
  );
}
