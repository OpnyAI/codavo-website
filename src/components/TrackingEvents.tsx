"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  isGoogleAdsConversionName,
  trackGoogleAdsConversion,
} from "@/lib/google-ads";
import {
  isTrackingEventName,
  trackAnalyticsEvent,
} from "@/lib/tracking";

export default function TrackingEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const handleGoogleAdsConversion = (trigger: HTMLElement, label: string) => {
      const conversionName = trigger.getAttribute("data-google-ads-conversion");

      if (!isGoogleAdsConversionName(conversionName)) return;

      trackGoogleAdsConversion(conversionName, {
        pagePath: pathname,
        ctaLabel: label,
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const analyticsTrigger = target?.closest<HTMLElement>("[data-track-event]");
      const googleAdsTrigger = target?.closest<HTMLElement>("[data-google-ads-conversion]");

      if (!analyticsTrigger && !googleAdsTrigger) return;

      const trigger = analyticsTrigger ?? googleAdsTrigger;
      if (!trigger) return;

      const eventName =
        analyticsTrigger?.getAttribute("data-track-event") || null;

      const label =
        trigger.getAttribute("data-track-label") ||
        trigger.textContent?.trim().slice(0, 80) ||
        "cta";

      if (isTrackingEventName(eventName)) {
        trackAnalyticsEvent(eventName, {
          page_path: pathname,
          cta_label: label,
          contact_method:
            analyticsTrigger?.getAttribute("data-contact-method") || undefined,
        });
      }

      handleGoogleAdsConversion(trigger, label);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
