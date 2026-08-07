"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  capturePageAttributionCandidate,
  persistAttributionForConsent,
} from "@/lib/attribution";
import {
  CONSENT_DENIED,
  CONSENT_GRANTED_ALL,
  CONSENT_STORAGE_KEY,
  applyConsent,
  safeReadStoredConsent,
  safeStoreConsent,
  type ConsentState,
} from "@/lib/consent";

type BannerState = "hidden" | "visible";

export default function ConsentBanner() {
  const [state, setState] = useState<BannerState>("hidden");
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  const hasChoice = useMemo(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    capturePageAttributionCandidate();

    // Show banner only if no stored choice
    if (!hasChoice) setState("visible");
  }, [hasChoice]);

  // Safety: If user already has a choice stored, make sure it’s applied client-side as well
  useEffect(() => {
    const stored = safeReadStoredConsent();
    if (stored) {
      applyConsent(stored);
      persistAttributionForConsent(stored);
    }
  }, []);

  function setConsent(consent: ConsentState) {
    safeStoreConsent(consent);
    applyConsent(consent);
    persistAttributionForConsent(consent);
    setState("hidden");
  }

  function saveCustomConsent() {
    setConsent({
      ad_storage: marketingAllowed ? "granted" : "denied",
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: marketingAllowed ? "granted" : "denied",
    });
  }

  if (state === "hidden") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Cookies & Datenschutz
            </p>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              Mit deiner Einwilligung helfen uns Statistik und Marketing, die
              Website zu verbessern und relevante Werbung auszuspielen. Deine
              Auswahl kannst du jederzeit ändern.
            </p>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Mehr zum Datenschutz
              </Link>
            </p>
          </div>

          <div className="sm:min-w-[320px]">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setConsent(CONSENT_GRANTED_ALL)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Alle akzeptieren
              </button>

              <button
                type="button"
                onClick={() => setConsent(CONSENT_DENIED)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              >
                Nur notwendige
              </button>
            </div>

            <button
              type="button"
              aria-expanded={showSettings}
              aria-controls="cookie-settings"
              onClick={() => setShowSettings((current) => !current)}
              className="mx-auto mt-2 block px-2 py-1 text-xs font-medium text-neutral-600 underline decoration-neutral-400/60 underline-offset-4 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {showSettings ? "Einstellungen schließen" : "Einstellungen"}
            </button>
          </div>
        </div>

        {showSettings && (
          <div
            id="cookie-settings"
            className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800"
          >
            <fieldset>
              <legend className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Individuelle Auswahl
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <div className="flex items-start justify-between gap-3 rounded-xl border border-neutral-200 p-3 dark:border-neutral-800">
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Notwendig
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                      Grundfunktionen und deine Auswahl
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                    Immer aktiv
                  </span>
                </div>

                <label className="flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-neutral-200 p-3 transition hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                  <span>
                    <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Statistik
                    </span>
                    <span className="mt-0.5 block text-xs text-neutral-500 dark:text-neutral-400">
                      Hilft uns, die Website zu verbessern
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(event) =>
                      setAnalyticsAllowed(event.target.checked)
                    }
                    className="mt-1 size-4 shrink-0 accent-indigo-500"
                  />
                </label>

                <label className="flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-neutral-200 p-3 transition hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900/50">
                  <span>
                    <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Marketing
                    </span>
                    <span className="mt-0.5 block text-xs text-neutral-500 dark:text-neutral-400">
                      Ermöglicht relevante Werbung und Erfolgsmessung
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(event) =>
                      setMarketingAllowed(event.target.checked)
                    }
                    className="mt-1 size-4 shrink-0 accent-indigo-500"
                  />
                </label>
              </div>
            </fieldset>

            <button
              type="button"
              onClick={saveCustomConsent}
              className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 sm:w-auto"
            >
              Auswahl speichern
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
