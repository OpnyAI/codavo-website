import {
  safeReadStoredConsent,
  type ConsentState,
} from "@/lib/consent";

export const ATTRIBUTION_READY_EVENT = "codavo:attribution-ready";

const ATTRIBUTION_STORAGE_KEY = "codavo_attribution_v1";
const ATTRIBUTION_MAX_AGE_MS = 12 * 60 * 60 * 1000;

export type AttributionData = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  utm_id: string;
  fbclid: string;
  gclid: string;
  msclkid: string;
  ttclid: string;
  li_fat_id: string;
  landing_page: string;
  referrer: string;
  first_seen_at: string;
};

export const EMPTY_ATTRIBUTION: AttributionData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  utm_id: "",
  fbclid: "",
  gclid: "",
  msclkid: "",
  ttclid: "",
  li_fat_id: "",
  landing_page: "",
  referrer: "",
  first_seen_at: "",
};

let pendingAttribution: AttributionData | null = null;
let expiryTimer: number | null = null;

function hasMarketingConsent(consent: ConsentState | null) {
  return (
    consent?.ad_storage === "granted" &&
    consent.ad_user_data === "granted" &&
    consent.ad_personalization === "granted"
  );
}

function getExternalReferrer() {
  if (!document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    if (referrer.hostname === window.location.hostname) return "";
    return referrer.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function isAttributionData(value: unknown): value is AttributionData {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;

  return Object.keys(EMPTY_ATTRIBUTION).every(
    (key) => typeof candidate[key] === "string",
  );
}

function clearStoredAttribution() {
  try {
    window.sessionStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
    if (expiryTimer !== null) window.clearTimeout(expiryTimer);
    expiryTimer = null;
  } catch {
    // ignore
  }
}

function scheduleAttributionExpiry(attribution: AttributionData) {
  const firstSeen = Date.parse(attribution.first_seen_at);
  const remaining = Number.isFinite(firstSeen)
    ? Math.max(0, ATTRIBUTION_MAX_AGE_MS - (Date.now() - firstSeen))
    : 0;

  if (expiryTimer !== null) window.clearTimeout(expiryTimer);
  expiryTimer = window.setTimeout(() => {
    clearStoredAttribution();
    window.dispatchEvent(new Event(ATTRIBUTION_READY_EVENT));
  }, remaining);
}

export function capturePageAttributionCandidate() {
  if (typeof window === "undefined" || pendingAttribution) {
    return pendingAttribution;
  }

  const searchParams = new URLSearchParams(window.location.search);
  pendingAttribution = {
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_content: searchParams.get("utm_content") || "",
    utm_term: searchParams.get("utm_term") || "",
    utm_id: searchParams.get("utm_id") || "",
    fbclid: searchParams.get("fbclid") || "",
    gclid: searchParams.get("gclid") || "",
    msclkid: searchParams.get("msclkid") || "",
    ttclid: searchParams.get("ttclid") || "",
    li_fat_id: searchParams.get("li_fat_id") || "",
    landing_page: `${window.location.origin}${window.location.pathname}`,
    referrer: getExternalReferrer(),
    first_seen_at: new Date().toISOString(),
  };

  return pendingAttribution;
}

export function safeReadStoredAttribution(): AttributionData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!isAttributionData(parsed)) return null;

    const firstSeen = Date.parse(parsed.first_seen_at);
    if (!Number.isFinite(firstSeen) || Date.now() - firstSeen > ATTRIBUTION_MAX_AGE_MS) {
      clearStoredAttribution();
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function persistAttributionForConsent(consent: ConsentState) {
  const candidate = capturePageAttributionCandidate();
  if (!candidate) return;

  if (!hasMarketingConsent(consent)) {
    clearStoredAttribution();
    window.dispatchEvent(new Event(ATTRIBUTION_READY_EVENT));
    return;
  }

  try {
    const stored = safeReadStoredAttribution();
    if (!stored) {
      window.sessionStorage.setItem(
        ATTRIBUTION_STORAGE_KEY,
        JSON.stringify(candidate),
      );
    }
    scheduleAttributionExpiry(stored || candidate);
    window.dispatchEvent(new Event(ATTRIBUTION_READY_EVENT));
  } catch {
    // Attribution must never block the website or form.
  }
}

export function getAttributionForForm(): AttributionData {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;
  if (!hasMarketingConsent(safeReadStoredConsent())) return EMPTY_ATTRIBUTION;

  return (
    safeReadStoredAttribution() ||
    capturePageAttributionCandidate() ||
    EMPTY_ATTRIBUTION
  );
}
