"use client";

import { useEffect } from "react";
import { flushQueuedMetaLead, type MetaLeadSource } from "@/lib/meta-pixel";

const TRACKING_WINDOW_MS = 30_000;
const TRACKING_RETRY_DELAY_MS = 250;

export default function ContactThankYouTracking({ source }: { source: MetaLeadSource }) {
  useEffect(() => {
    let cancelled = false;
    let timeoutId: number | undefined;
    const deadline = Date.now() + TRACKING_WINDOW_MS;

    const flushLead = () => {
      if (cancelled) return;

      const result = flushQueuedMetaLead(source);

      if (result === "pending" && Date.now() < deadline) {
        timeoutId = window.setTimeout(flushLead, TRACKING_RETRY_DELAY_MS);
      }
    };

    flushLead();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [source]);

  return null;
}
