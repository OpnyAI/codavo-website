// src/lib/consent.ts

export type ConsentValue = "granted" | "denied";

export type ConsentState = {
  ad_storage: ConsentValue;
  analytics_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

export const CONSENT_STORAGE_KEY = "codavo_consent_v1";

export const CONSENT_DENIED: ConsentState = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export const CONSENT_GRANTED_ANALYTICS_ONLY: ConsentState = {
  ad_storage: "denied",
  analytics_storage: "granted",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

type DataLayerPush = (...args: unknown[]) => number;

type GtagFn = (
  command: "consent",
  action: "default" | "update",
  params: ConsentState & { wait_for_update?: number },
) => void;

type DataLayer = {
  push: DataLayerPush;
};

function isConsentValue(v: unknown): v is ConsentValue {
  return v === "granted" || v === "denied";
}

function isConsentState(v: unknown): v is ConsentState {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as Record<string, unknown>;
  return (
    isConsentValue(obj.ad_storage) &&
    isConsentValue(obj.analytics_storage) &&
    isConsentValue(obj.ad_user_data) &&
    isConsentValue(obj.ad_personalization)
  );
}

export function safeReadStoredConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsedUnknown: unknown = JSON.parse(raw);
    if (!isConsentState(parsedUnknown)) return null;

    return parsedUnknown;
  } catch {
    return null;
  }
}

export function safeStoreConsent(consent: ConsentState) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore
  }
}

function getDataLayer(): DataLayer {
  const w = window as unknown as { dataLayer?: unknown };
  if (!Array.isArray(w.dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer = [];
  }
  // at this point it's an array with push()
  return (window as unknown as { dataLayer: DataLayer }).dataLayer;
}

function getGtag(): GtagFn | null {
  const w = window as unknown as { gtag?: unknown };
  return typeof w.gtag === "function" ? (w.gtag as GtagFn) : null;
}

export function applyConsent(consent: ConsentState) {
  // Ensure dataLayer exists (works before GTM is loaded)
  const dataLayer = getDataLayer();

  const gtag = getGtag();
  if (gtag) {
    gtag("consent", "update", consent);
  } else {
    // Fallback: push consent update shape into dataLayer
    // GTM will process it once loaded (common pattern)
    dataLayer.push(["consent", "update", consent]);
  }

  // Optional custom event for GTM debugging/triggers
  dataLayer.push({ event: "consent_updated", ...consent });
}
