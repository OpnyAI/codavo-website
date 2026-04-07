export const GOOGLE_ADS_ID = "AW-18059484807";

const GOOGLE_ADS_CONTACT_CONVERSION = "AW-18059484807/bZjUCLuPwJQcEIe9t6ND";

export type GoogleAdsConversionName =
  | "contact"
  | "contact_whatsapp"
  | "contact_phone";

const GOOGLE_ADS_CONVERSION_NAMES: Record<GoogleAdsConversionName, true> = {
  contact: true,
  contact_whatsapp: true,
  contact_phone: true,
};

type GtagEventParams = {
  send_to?: string;
  page_path?: string;
  cta_label?: string;
  contact_method?: "whatsapp" | "phone" | "email";
  event_callback?: () => void;
  event_timeout?: number;
};

type GtagFn = {
  (command: "js", value: Date): void;
  (command: "config", targetId: string, config?: Record<string, unknown>): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    __codavoGoogleAdsEventTimestamps?: Record<string, number>;
  }
}

type ConversionParams = {
  pagePath?: string;
  ctaLabel?: string;
  dedupeKey?: string;
};

const EVENT_DEDUPE_WINDOW_MS = 1500;

const isBrowser = () => typeof window !== "undefined";

const getPagePath = (pagePath?: string) => {
  if (pagePath) return pagePath;
  if (!isBrowser()) return undefined;
  return window.location.pathname;
};

const markEventWithinCooldown = (key: string) => {
  if (!isBrowser()) return false;

  const timestamps = (window.__codavoGoogleAdsEventTimestamps ??= {});
  const now = Date.now();
  const lastTriggeredAt = timestamps[key];

  if (typeof lastTriggeredAt === "number" && now - lastTriggeredAt < EVENT_DEDUPE_WINDOW_MS) {
    return false;
  }

  timestamps[key] = now;
  return true;
};

const trackConversion = (
  sendTo: string,
  eventParams: GtagEventParams,
  dedupeKey: string,
) => {
  if (!isBrowser()) return false;
  if (typeof window.gtag !== "function") return false;
  if (!markEventWithinCooldown(dedupeKey)) return false;

  window.gtag("event", "conversion", {
    send_to: sendTo,
    ...eventParams,
  });

  return true;
};

export const trackContactConversion = ({
  pagePath,
  ctaLabel,
  dedupeKey,
}: ConversionParams = {}) => {
  const resolvedPagePath = getPagePath(pagePath);

  return trackConversion(
    GOOGLE_ADS_CONTACT_CONVERSION,
    {
      ...(resolvedPagePath ? { page_path: resolvedPagePath } : {}),
      ...(ctaLabel ? { cta_label: ctaLabel } : {}),
    },
    dedupeKey ?? `google-ads:contact:${resolvedPagePath ?? "unknown"}:${ctaLabel ?? "cta"}`,
  );
};

export const trackWhatsAppClickAsContactConversion = (
  { pagePath, ctaLabel, dedupeKey }: ConversionParams = {},
) => {
  const resolvedPagePath = getPagePath(pagePath);

  return trackConversion(
    GOOGLE_ADS_CONTACT_CONVERSION,
    {
      ...(resolvedPagePath ? { page_path: resolvedPagePath } : {}),
      ...(ctaLabel ? { cta_label: ctaLabel } : {}),
      contact_method: "whatsapp",
    },
    dedupeKey ??
      `google-ads:contact-whatsapp:${resolvedPagePath ?? "unknown"}:${ctaLabel ?? "cta"}`,
  );
};

export const trackPhoneClickAsContactConversion = ({
  pagePath,
  ctaLabel,
  dedupeKey,
}: ConversionParams = {}) => {
  const resolvedPagePath = getPagePath(pagePath);

  return trackConversion(
    GOOGLE_ADS_CONTACT_CONVERSION,
    {
      ...(resolvedPagePath ? { page_path: resolvedPagePath } : {}),
      ...(ctaLabel ? { cta_label: ctaLabel } : {}),
      contact_method: "phone",
    },
    dedupeKey ??
      `google-ads:contact-phone:${resolvedPagePath ?? "unknown"}:${ctaLabel ?? "cta"}`,
  );
};

export const trackGoogleAdsConversion = (
  conversionName: GoogleAdsConversionName,
  params: ConversionParams = {},
) => {
  switch (conversionName) {
    case "contact":
      return trackContactConversion(params);
    case "contact_whatsapp":
      return trackWhatsAppClickAsContactConversion(params);
    case "contact_phone":
      return trackPhoneClickAsContactConversion(params);
    default:
      return false;
  }
};

export const handleConversionRedirect = (
  url: string,
  eventTimeout = 900,
) => {
  if (typeof window === "undefined") return;

  const isWhatsApp = url.startsWith("https://wa.me/");
  let hasNavigated = false;

  const navigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;

    if (isWhatsApp) {
      window.location.assign(url);
    } else {
      window.location.href = url;
    }
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18059484807/bZjUCLuPwJQcEIe9t6ND",
    event_callback: navigate,
    event_timeout: eventTimeout,
  });

  window.setTimeout(navigate, eventTimeout);
};

export const isGoogleAdsConversionName = (
  value: string | null,
): value is GoogleAdsConversionName => {
  if (!value) return false;

  return GOOGLE_ADS_CONVERSION_NAMES[value as GoogleAdsConversionName] === true;
};
