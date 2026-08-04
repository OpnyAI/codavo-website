import { safeReadStoredConsent } from "@/lib/consent";

type MetaPixelFn = (
  command: "track",
  eventName: "Lead",
  params: Record<string, string>,
  options: { eventID: string },
) => void;

type PendingMetaLead = {
  eventId: string;
  contentName: string;
  queuedAt: number;
};

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

export function createMetaEventId(prefix: string) {
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
    "track",
    "Lead",
    { content_name: contentName },
    { eventID: eventId },
  );

  return true;
}

export function queueMetaLead(eventId: string, contentName: string) {
  if (!hasMarketingConsent()) return false;

  try {
    const pendingLead: PendingMetaLead = {
      eventId,
      contentName,
      queuedAt: Date.now(),
    };
    window.sessionStorage.setItem(
      PENDING_META_LEAD_KEY,
      JSON.stringify(pendingLead),
    );
    return true;
  } catch {
    return false;
  }
}

export function flushQueuedMetaLead() {
  if (typeof window === "undefined") return "empty" as const;

  try {
    const raw = window.sessionStorage.getItem(PENDING_META_LEAD_KEY);
    if (!raw) return "empty" as const;

    const pendingLead = JSON.parse(raw) as Partial<PendingMetaLead>;
    const { eventId, contentName, queuedAt } = pendingLead;
    if (
      typeof eventId !== "string" ||
      typeof contentName !== "string" ||
      typeof queuedAt !== "number" ||
      Date.now() - queuedAt > PENDING_META_LEAD_MAX_AGE_MS
    ) {
      window.sessionStorage.removeItem(PENDING_META_LEAD_KEY);
      return "empty" as const;
    }

    if (!trackMetaLead(eventId, contentName)) {
      return "pending" as const;
    }

    window.sessionStorage.removeItem(PENDING_META_LEAD_KEY);
    return "tracked" as const;
  } catch {
    window.sessionStorage.removeItem(PENDING_META_LEAD_KEY);
    return "empty" as const;
  }
}
