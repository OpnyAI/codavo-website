import { safeReadStoredConsent } from "@/lib/consent";

export const TRACKING_EVENTS = {
  contactCta: "cta_contact_click",
  websiteCheckCta: "cta_website_check_click",
  casesCta: "cta_cases_click",
  contactNav: "nav_contact_click",
  mobileCta: "mobile_cta_click",
  websiteCheckSubmit: "website_check_submit",
} as const;

export type TrackingEventName =
  (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS];

export type TrackingEventParams = Record<
  string,
  string | number | boolean | undefined
>;

const trackingEventNames = new Set<string>(Object.values(TRACKING_EVENTS));

export function isTrackingEventName(
  value: string | null,
): value is TrackingEventName {
  return Boolean(value && trackingEventNames.has(value));
}

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return safeReadStoredConsent()?.analytics_storage === "granted";
}

export function trackAnalyticsEvent(
  eventName: TrackingEventName,
  params: TrackingEventParams = {},
) {
  if (!hasAnalyticsConsent()) return false;

  const usesGoogleTagManager = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

  const trackedWindow = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      eventName: string,
      params?: TrackingEventParams,
    ) => void;
  };

  if (usesGoogleTagManager) {
    trackedWindow.dataLayer = trackedWindow.dataLayer || [];
    trackedWindow.dataLayer.push({ event: eventName, ...params });
  } else if (typeof trackedWindow.gtag === "function") {
    trackedWindow.gtag("event", eventName, params);
  } else {
    trackedWindow.dataLayer = trackedWindow.dataLayer || [];
    trackedWindow.dataLayer.push({ event: eventName, ...params });
  }

  return true;
}
