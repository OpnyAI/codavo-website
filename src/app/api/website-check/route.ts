import { NextResponse } from "next/server";
import { sendMetaLeadEvent } from "@/lib/meta-conversions";

type WebsiteCheckPayload = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  websiteUrl?: string;
  phone?: string;
  industry?: string;
  biggestProblem?: string;
  budgetRange?: string;
  fax?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_id?: string;
  fbclid?: string;
  metaEventId?: string;
  marketingConsent?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const WEBSITE_CHECK_TO_EMAIL =
  process.env.WEBSITE_CHECK_TO_EMAIL || "kontakt@codavo-webstudio.de";
// Use a verified custom sender domain/subdomain in Resend, not a resend.dev address.
const WEBSITE_CHECK_FROM_EMAIL = process.env.WEBSITE_CHECK_FROM_EMAIL;

const requestStore = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeUrl(value: string) {
  const normalized = value.startsWith("http") ? value : `https://${value}`;
  return new URL(normalized).toString();
}

function toSafeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const currentEntries = requestStore.get(identifier) || [];
  const recentEntries = currentEntries.filter((timestamp) => timestamp > windowStart);

  if (recentEntries.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestStore.set(identifier, recentEntries);
    return true;
  }

  recentEntries.push(now);
  requestStore.set(identifier, recentEntries);
  return false;
}

export async function POST(request: Request) {
  let body: WebsiteCheckPayload;

  try {
    body = (await request.json()) as WebsiteCheckPayload;
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const firstName = toSafeString(body.firstName);
  const lastName = toSafeString(body.lastName);
  const companyName = toSafeString(body.companyName);
  const email = toSafeString(body.email);
  const phone = toSafeString(body.phone);
  const industry = toSafeString(body.industry);
  const biggestProblem = toSafeString(body.biggestProblem);
  const budgetRange = toSafeString(body.budgetRange);
  const honeypot = toSafeString(body.fax);
  const websiteValue = toSafeString(body.websiteUrl);
  const tracking = {
    utm_source: toSafeString(body.utm_source),
    utm_medium: toSafeString(body.utm_medium),
    utm_campaign: toSafeString(body.utm_campaign),
    utm_content: toSafeString(body.utm_content),
    utm_term: toSafeString(body.utm_term),
    utm_id: toSafeString(body.utm_id),
    fbclid: toSafeString(body.fbclid),
  };
  const ipAddress = getClientIp(request);

  if (honeypot) {
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht verarbeitet werden." },
      { status: 400 },
    );
  }

  if (isRateLimited(ipAddress)) {
    return NextResponse.json(
      {
        error:
          "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut.",
      },
      { status: 429 },
    );
  }

  if (
    !firstName ||
    !lastName ||
    !companyName ||
    !email ||
    !websiteValue ||
    !phone ||
    !biggestProblem
  ) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 400 },
    );
  }

  if (
    firstName.length > 80 ||
    lastName.length > 80 ||
    companyName.length > 120 ||
    email.length > 160 ||
    phone.length > 50 ||
    industry.length > 80 ||
    biggestProblem.length > 120 ||
    budgetRange.length > 80 ||
    websiteValue.length > 2083 ||
    tracking.utm_source.length > 200 ||
    tracking.utm_medium.length > 200 ||
    tracking.utm_campaign.length > 200 ||
    tracking.utm_content.length > 200 ||
    tracking.utm_term.length > 200 ||
    tracking.utm_id.length > 200 ||
    tracking.fbclid.length > 500
  ) {
    return NextResponse.json(
      { error: "Einige Angaben sind ungültig." },
      { status: 400 },
    );
  }

  let websiteUrl: string;

  try {
    websiteUrl = normalizeUrl(websiteValue);
  } catch {
    return NextResponse.json(
      { error: "Bitte eine gültige Website-URL angeben." },
      { status: 400 },
    );
  }

  if (!RESEND_API_KEY || !WEBSITE_CHECK_FROM_EMAIL) {
    return NextResponse.json(
      {
        error:
          "Der E-Mail-Versand ist aktuell nicht vollständig konfiguriert. Bitte kontaktieren Sie uns alternativ direkt per E-Mail.",
      },
      { status: 503 },
    );
  }

  const safe = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    companyName: escapeHtml(companyName),
    email: escapeHtml(email),
    websiteUrl: escapeHtml(websiteUrl),
    phone: escapeHtml(phone || "Nicht angegeben"),
    industry: escapeHtml(industry || "Nicht angegeben"),
    biggestProblem: escapeHtml(biggestProblem),
    budgetRange: escapeHtml(budgetRange || "Nicht angegeben"),
    tracking: {
      utm_source: escapeHtml(tracking.utm_source || "-"),
      utm_medium: escapeHtml(tracking.utm_medium || "-"),
      utm_campaign: escapeHtml(tracking.utm_campaign || "-"),
      utm_content: escapeHtml(tracking.utm_content || "-"),
      utm_term: escapeHtml(tracking.utm_term || "-"),
      utm_id: escapeHtml(tracking.utm_id || "-"),
      fbclid: escapeHtml(tracking.fbclid || "-"),
    },
  };

  const subject = `Neuer Website-Quick-Check: ${companyName}`;
  const text = [
    "Neue Anfrage für den Website-Quick-Check",
    "",
    `Vorname: ${firstName}`,
    `Nachname: ${lastName}`,
    `Firma: ${companyName}`,
    `E-Mail: ${email}`,
    `Website: ${websiteUrl}`,
    `Telefon / WhatsApp: ${phone || "Nicht angegeben"}`,
    `Branche: ${industry || "Nicht angegeben"}`,
    `Größtes Problem: ${biggestProblem}`,
    `Geplanter Budgetrahmen: ${budgetRange || "Nicht angegeben"}`,
    "",
    "Tracking / Herkunft",
    "",
    `UTM Source: ${tracking.utm_source || "-"}`,
    `UTM Medium: ${tracking.utm_medium || "-"}`,
    `UTM Campaign: ${tracking.utm_campaign || "-"}`,
    `UTM Content: ${tracking.utm_content || "-"}`,
    `UTM Term: ${tracking.utm_term || "-"}`,
    `UTM ID: ${tracking.utm_id || "-"}`,
    `FBCLID: ${tracking.fbclid || "-"}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin-bottom:16px;">Neue Anfrage für den Website-Quick-Check</h2>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;border-collapse:collapse;">
        <tbody>
          <tr><td style="padding:8px 0;font-weight:700;">Vorname</td><td style="padding:8px 0;">${safe.firstName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Nachname</td><td style="padding:8px 0;">${safe.lastName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Firma</td><td style="padding:8px 0;">${safe.companyName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">E-Mail</td><td style="padding:8px 0;">${safe.email}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Website</td><td style="padding:8px 0;"><a href="${safe.websiteUrl}">${safe.websiteUrl}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Telefon / WhatsApp</td><td style="padding:8px 0;">${safe.phone}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Branche</td><td style="padding:8px 0;">${safe.industry}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Größtes Problem</td><td style="padding:8px 0;">${safe.biggestProblem}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Geplanter Budgetrahmen</td><td style="padding:8px 0;">${safe.budgetRange}</td></tr>
        </tbody>
      </table>

      <h3 style="margin:24px 0 8px;">Tracking / Herkunft</h3>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;border-collapse:collapse;">
        <tbody>
          <tr><td style="padding:8px 0;font-weight:700;">UTM Source</td><td style="padding:8px 0;">${safe.tracking.utm_source}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">UTM Medium</td><td style="padding:8px 0;">${safe.tracking.utm_medium}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">UTM Campaign</td><td style="padding:8px 0;">${safe.tracking.utm_campaign}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">UTM Content</td><td style="padding:8px 0;">${safe.tracking.utm_content}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">UTM Term</td><td style="padding:8px 0;">${safe.tracking.utm_term}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">UTM ID</td><td style="padding:8px 0;">${safe.tracking.utm_id}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">FBCLID</td><td style="padding:8px 0;">${safe.tracking.fbclid}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: WEBSITE_CHECK_FROM_EMAIL,
        to: [WEBSITE_CHECK_TO_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Website check email failed", errorText);
      return NextResponse.json(
        {
          error:
            "Die Anfrage konnte gerade nicht verarbeitet werden. Bitte versuchen Sie es erneut.",
        },
        { status: 502 },
      );
    }

    if (body.marketingConsent === true && body.metaEventId) {
      await sendMetaLeadEvent({
        request,
        eventId: toSafeString(body.metaEventId),
        eventSourceUrl: "https://www.codavo-webstudio.de/website-check",
        contentName: "Website-Check Formular",
        email,
        phone,
        firstName,
        lastName,
        fbclid: tracking.fbclid,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Website check email exception", error);
    return NextResponse.json(
      {
        error:
          "Die Anfrage konnte gerade nicht verarbeitet werden. Bitte versuchen Sie es erneut.",
      },
      { status: 500 },
    );
  }
}
