import { safeReadStoredConsent } from "@/lib/consent";

type MetaPixelFn = (
  command: "trackSingle",
  pixelId: string,
  eventName: "Lead",
  params: Record<string, string>,
  options: { eventID: string },
) => void;

type PendingMetaLead = {
  eventId: string;
  contentName: string;
  queuedAt: number;
};

export type MetaLeadSource = "contact-application" | "website-check";

const META_PIXEL_ID = "1592509072445980";
const PENDING_META_LEAD_KEY = "codavo_pending_meta_lead_v1";
const PENDING_META_LEAD_MAX_AGE_MS = 30 * 60 * 1000;

export function hasMarketingConsent() {
  if (typeof window === "undefined") return false;

  const consent = safeReadStoredConsent();
  return (
    consent?.ad_storage === "granted" &&
    consent.ad_user_data === "granted" &&
    consent.ad_personalization === "granted"
  );
}

export function createMetaEventId(prefix: MetaLeadSource) {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return `${prefix}-${id}`;
}

export function trackMetaLead(eventId: string, contentName: string) {
  if (!hasMarketingConsent()) return false;

  const trackedWindow = window as unknown as { fbq?: MetaPixelFn };
  if (typeof trackedWindow.fbq !== "function") return false;

  trackedWindow.fbq(
    "trackSingle",
    META_PIXEL_ID,
    "Lead",
    { content_name: contentName },
    { eventID: eventId },
  );

  return true;
}

export function queueMetaLead(source: MetaLeadSource, eventId: string, contentName: string) {
  if (!hasMarketingConsent()) return false;

  try {
    const pendingLead: PendingMetaLead = {
      eventId,
      contentName,
      queuedAt: Date.now(),
    };
    window.sessionStorage.setItem(
      `${PENDING_META_LEAD_KEY}:${source}`,
      JSON.stringify(pendingLead),
    );
    return true;
  } catch {
    return false;
  }
}

export function flushQueuedMetaLead(source: MetaLeadSource) {
  if (typeof window === "undefined") return "empty" as const;

  const key = `${PENDING_META_LEAD_KEY}:${source}`;

  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return "empty" as const;

    const pendingLead = JSON.parse(raw) as Partial<PendingMetaLead>;
    const { eventId, contentName, queuedAt } = pendingLead;
    if (
      typeof eventId !== "string" ||
      !eventId.startsWith(`${source}-`) ||
      typeof contentName !== "string" ||
      typeof queuedAt !== "number" ||
      Date.now() - queuedAt > PENDING_META_LEAD_MAX_AGE_MS
    ) {
      window.sessionStorage.removeItem(key);
      return "empty" as const;
    }

    if (!trackMetaLead(eventId, contentName)) {
      return "pending" as const;
    }

    window.sessionStorage.removeItem(key);
    return "tracked" as const;
  } catch {
    return "empty" as const;
  }
}
