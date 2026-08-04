import { safeReadStoredConsent } from "@/lib/consent";

type MetaPixelFn = (
  command: "track",
  eventName: "Lead",
  params: Record<string, string>,
  options: { eventID: string },
) => void;

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
