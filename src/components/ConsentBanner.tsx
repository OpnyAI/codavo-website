"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CONSENT_DENIED,
  CONSENT_GRANTED_ANALYTICS_ONLY,
  CONSENT_STORAGE_KEY,
  applyConsent,
  safeReadStoredConsent,
  safeStoreConsent,
  type ConsentState,
} from "@/lib/consent";

type BannerState = "hidden" | "visible";

export default function ConsentBanner() {
  const [state, setState] = useState<BannerState>("hidden");

  const hasChoice = useMemo(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    // Show banner only if no stored choice
    if (!hasChoice) setState("visible");
  }, [hasChoice]);

  // Safety: If user already has a choice stored, make sure it’s applied client-side as well
  useEffect(() => {
    const stored = safeReadStoredConsent();
    if (stored) applyConsent(stored);
  }, []);

  function setConsent(consent: ConsentState) {
    safeStoreConsent(consent);
    applyConsent(consent);
    setState("hidden");
  }

  if (state === "hidden") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Cookies & Datenschutz
            </p>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              Wir verwenden Cookies, um die Website zu betreiben und – nur mit
              deiner Einwilligung – anonyme Nutzungsstatistiken (Google
              Analytics) zu erheben. Du kannst jederzeit ablehnen oder
              zustimmen.
            </p>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              Mehr Infos in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:min-w-[240px] sm:items-stretch">
            <button
              type="button"
              onClick={() => setConsent(CONSENT_GRANTED_ANALYTICS_ONLY)}
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              Akzeptieren (Analytics)
            </button>

            <button
              type="button"
              onClick={() => setConsent(CONSENT_DENIED)}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900/40"
            >
              Ablehnen
            </button>

            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Keine Marketing-Cookies, keine Werbung. Nur „Analytics“ optional.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
