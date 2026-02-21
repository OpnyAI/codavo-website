export type ConsentState = {
  ad_storage: "granted" | "denied";
  analytics_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
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

export function safeReadStoredConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (!parsed) return null;

    const merged: ConsentState = {
      ...CONSENT_DENIED,
      ...parsed,
    };

    // minimal validation
    const allowed = new Set(["granted", "denied"]);
    if (
      !allowed.has(merged.ad_storage) ||
      !allowed.has(merged.analytics_storage) ||
      !allowed.has(merged.ad_user_data) ||
      !allowed.has(merged.ad_personalization)
    ) {
      return null;
    }

    return merged;
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

export function applyConsent(consent: ConsentState) {
  // Works with GTM because gtag() is just pushing to dataLayer
  // (we define it early in layout.tsx)
  const gtagFn = (window as any).gtag as ((...args: any[]) => void) | undefined;

  if (typeof gtagFn === "function") {
    gtagFn("consent", "update", consent);
  } else {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(["consent", "update", consent]);
  }

  // optional custom event for GTM debugging/triggers
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: "consent_updated", ...consent });
}
