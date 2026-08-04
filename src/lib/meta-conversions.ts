import "server-only";

import { createHash } from "node:crypto";

const META_PIXEL_ID = "1592509072445980";
const DEFAULT_META_GRAPH_API_VERSION = "v23.0";

type MetaLeadEvent = {
  request: Request;
  eventId: string;
  eventSourceUrl: string;
  contentName: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  fbclid?: string;
  firstSeenAt?: string;
};

type MetaConversionsResult =
  | { sent: true }
  | { sent: false; reason: "not_configured" | "invalid_event_id" | "api_error" };

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function normalizeName(value: string) {
  return value.trim().toLowerCase();
}

function hashIfPresent(value: string) {
  return value ? [sha256(value)] : undefined;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || undefined;
  return request.headers.get("x-real-ip") || undefined;
}

function getCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return undefined;

  for (const entry of cookieHeader.split(";")) {
    const [cookieName, ...valueParts] = entry.trim().split("=");
    if (cookieName === name) return decodeURIComponent(valueParts.join("="));
  }

  return undefined;
}

function createFbc(fbclid: string | undefined, firstSeenAt: string | undefined) {
  if (!fbclid) return undefined;

  const parsedTimestamp = firstSeenAt ? Date.parse(firstSeenAt) : Number.NaN;
  const timestamp = Number.isFinite(parsedTimestamp)
    ? Math.floor(parsedTimestamp)
    : Date.now();

  return `fb.1.${timestamp}.${fbclid}`;
}

function isValidEventId(value: string) {
  return /^[a-z0-9][a-z0-9-]{15,120}$/i.test(value);
}

export async function sendMetaLeadEvent({
  request,
  eventId,
  eventSourceUrl,
  contentName,
  email,
  phone,
  firstName,
  lastName,
  fbclid,
  firstSeenAt,
}: MetaLeadEvent): Promise<MetaConversionsResult> {
  const accessToken = process.env.META_CONVERSIONS_API_ACCESS_TOKEN;
  if (!accessToken) return { sent: false, reason: "not_configured" };
  if (!isValidEventId(eventId)) {
    return { sent: false, reason: "invalid_event_id" };
  }

  const userData = {
    em: hashIfPresent(normalizeEmail(email)),
    ph: hashIfPresent(normalizePhone(phone)),
    fn: hashIfPresent(normalizeName(firstName)),
    ln: hashIfPresent(normalizeName(lastName)),
    client_ip_address: getClientIp(request),
    client_user_agent: request.headers.get("user-agent") || undefined,
    fbp: getCookie(request, "_fbp"),
    fbc: getCookie(request, "_fbc") || createFbc(fbclid, firstSeenAt),
  };

  const graphApiVersion =
    process.env.META_GRAPH_API_VERSION || DEFAULT_META_GRAPH_API_VERSION;
  const testEventCode = process.env.META_CONVERSIONS_API_TEST_EVENT_CODE;
  const endpoint = `https://graph.facebook.com/${graphApiVersion}/${META_PIXEL_ID}/events`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: eventSourceUrl,
            action_source: "website",
            user_data: userData,
            custom_data: {
              content_name: contentName,
            },
          },
        ],
        ...(testEventCode ? { test_event_code: testEventCode } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Meta Conversions API Lead failed", {
        status: response.status,
        body: errorText.slice(0, 1000),
      });
      return { sent: false, reason: "api_error" };
    }

    return { sent: true };
  } catch (error) {
    console.error("Meta Conversions API Lead exception", error);
    return { sent: false, reason: "api_error" };
  }
}
