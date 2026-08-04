"use client";

import { useEffect } from "react";
import { flushQueuedMetaLead } from "@/lib/meta-pixel";

const MAX_TRACKING_ATTEMPTS = 20;
const TRACKING_RETRY_DELAY_MS = 250;

export default function ContactThankYouTracking() {
  useEffect(() => {
    let cancelled = false;
    let timeoutId: number | undefined;
    let attempts = 0;

    const flushLead = () => {
      if (cancelled) return;

      const result = flushQueuedMetaLead();
      attempts += 1;

      if (result === "pending" && attempts < MAX_TRACKING_ATTEMPTS) {
        timeoutId = window.setTimeout(flushLead, TRACKING_RETRY_DELAY_MS);
      }
    };

    flushLead();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
