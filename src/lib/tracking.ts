import { safeReadStoredConsent } from "@/lib/consent";

const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-97DHW1DWSM";

export const TRACKING_EVENTS = {
  contactCta: "cta_contact_click",
  websiteCheckCta: "cta_website_check_click",
  casesCta: "cta_cases_click",
  contactNav: "nav_contact_click",
  mobileCta: "mobile_cta_click",
  websiteCheckSubmit: "website_check_submit",
  formStart: "form_start",
  formStepComplete: "form_step_complete",
  formValidationError: "form_validation_error",
  generateLead: "generate_lead",
  contactApplicationSubmit: "contact_application_submit",
} as const;

export type TrackingEventName =
  (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS];

export type TrackingEventParams = Record<
  string,
  string | number | boolean | undefined
>;

type GoogleAnalyticsEventParams = TrackingEventParams & {
  send_to: string;
};

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

  const trackedWindow = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      eventName: string,
      params?: GoogleAnalyticsEventParams,
    ) => void;
  };

  if (typeof trackedWindow.gtag === "function") {
    // gtag writes this event into dataLayer itself. Pushing an additional
    // object event here would make GTM and GA4 process the same action twice.
    trackedWindow.gtag("event", eventName, {
      ...params,
      send_to: GOOGLE_ANALYTICS_ID,
    });
  } else {
    trackedWindow.dataLayer = trackedWindow.dataLayer || [];
    trackedWindow.dataLayer.push({ event: eventName, ...params });
  }

  return true;
}
