"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const pushEvent = (eventName: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

export default function TrackingEvents() {
  const pathname = usePathname();
  const hasTrackedScrollRef = useRef(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-track-event]");
      if (!trigger) return;

      const raw = trigger.getAttribute("data-track-event") || "";
      const events = raw
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean);

      if (!events.length) return;

      const label =
        trigger.getAttribute("data-track-label") ||
        trigger.textContent?.trim().slice(0, 80) ||
        "cta";

      events.forEach((eventName) => {
        pushEvent(eventName, {
          page_path: pathname,
          cta_label: label,
        });
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  useEffect(() => {
    hasTrackedScrollRef.current = false;

    const handleScroll = () => {
      if (hasTrackedScrollRef.current) return;

      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = scrollTop / scrollHeight;
      if (progress >= 0.75) {
        hasTrackedScrollRef.current = true;
        pushEvent("scroll_75_percent", {
          page_path: pathname,
          scroll_depth: 75,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/softwareloesungen-fuer-kmu") {
      pushEvent("software_page_view", { page_path: pathname });

      const timeout = window.setTimeout(() => {
        pushEvent("software_page_60s", {
          page_path: pathname,
          engaged_seconds: 60,
        });
      }, 60000);

      return () => window.clearTimeout(timeout);
    }

    if (pathname === "/digitale-systeme") {
      pushEvent("high_ticket_page_view", { page_path: pathname });
    }

    return undefined;
  }, [pathname]);

  return null;
}
