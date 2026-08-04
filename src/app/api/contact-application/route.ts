import { NextResponse } from "next/server";
import type { ContactApplicationPayload } from "@/lib/contact-application";
import { sendMetaLeadEvent } from "@/lib/meta-conversions";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL =
  process.env.CONTACT_APPLICATION_TO_EMAIL ||
  process.env.WEBSITE_CHECK_TO_EMAIL ||
  "kontakt@codavo-webstudio.de";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_APPLICATION_FROM_EMAIL ||
  process.env.WEBSITE_CHECK_FROM_EMAIL;

const requestStore = new Map<string, number[]>();

function toSafeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeUrl(value: string) {
  if (!value) return "";
  const normalized = value.startsWith("http") ? value : `https://${value}`;
  return new URL(normalized).toString();
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
  const recentEntries = (requestStore.get(identifier) || []).filter(
    (timestamp) => timestamp > windowStart,
  );

  if (recentEntries.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestStore.set(identifier, recentEntries);
    return true;
  }

  recentEntries.push(now);
  requestStore.set(identifier, recentEntries);
  return false;
}

function labelValue(label: string, value: string) {
  return `<tr><td style="padding:8px 12px 8px 0;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 0;vertical-align:top;">${escapeHtml(value || "Nicht angegeben")}</td></tr>`;
}

type TrackingData = {
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

function getAttributionLabel(tracking: TrackingData) {
  const source = tracking.utm_source.toLowerCase();
  const medium = tracking.utm_medium.toLowerCase();
  const referrer = tracking.referrer.toLowerCase();
  const isPaid = /(paid|cpc|ppc|advertising|ads?)/.test(medium);

  if (source.includes("instagram") || referrer.includes("instagram.com")) {
    return `Instagram · ${isPaid ? "bezahlt" : "organisch"}`;
  }
  if (
    source.includes("facebook") ||
    source === "meta" ||
    referrer.includes("facebook.com")
  ) {
    return `Facebook / Meta · ${isPaid ? "bezahlt" : "organisch"}`;
  }
  if (tracking.gclid || (source.includes("google") && isPaid)) {
    return "Google Ads";
  }
  if (tracking.msclkid || (source.includes("bing") && isPaid)) {
    return "Microsoft Ads";
  }
  if (tracking.ttclid || source.includes("tiktok") || referrer.includes("tiktok.com")) {
    return `TikTok · ${isPaid ? "bezahlt" : "organisch"}`;
  }
  if (
    tracking.li_fat_id ||
    source.includes("linkedin") ||
    referrer.includes("linkedin.com")
  ) {
    return `LinkedIn · ${isPaid ? "bezahlt" : "organisch"}`;
  }
  if (tracking.fbclid) return "Meta / Instagram / Facebook · Klick-ID";
  if (tracking.utm_source) {
    return [tracking.utm_source, tracking.utm_medium]
      .filter(Boolean)
      .join(" · ");
  }
  if (tracking.referrer) return tracking.referrer;
  return "Direkt / nicht zuordenbar";
}

function formatFirstSeen(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(date);
}

export async function POST(request: Request) {
  let body: ContactApplicationPayload;

  try {
    body = (await request.json()) as ContactApplicationPayload;
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const fields = {
    salutation: toSafeString(body.salutation),
    firstName: toSafeString(body.firstName),
    lastName: toSafeString(body.lastName),
    companyName: toSafeString(body.companyName),
    email: toSafeString(body.email),
    phone: toSafeString(body.phone),
    websiteUrl: toSafeString(body.websiteUrl),
    projectType: toSafeString(body.projectType),
    currentSituation: toSafeString(body.currentSituation),
    primaryGoal: toSafeString(body.primaryGoal),
    biggestProblem: toSafeString(body.biggestProblem),
    marketingChannel: toSafeString(body.marketingChannel),
    paidAdsStatus: toSafeString(body.paidAdsStatus),
    monthlyRevenue: toSafeString(body.monthlyRevenue),
    employeeCount: toSafeString(body.employeeCount),
    budgetRange: toSafeString(body.budgetRange),
    desiredStart: toSafeString(body.desiredStart),
    qualification: toSafeString(body.qualification),
  };
  const tracking = {
    utm_source: toSafeString(body.utm_source),
    utm_medium: toSafeString(body.utm_medium),
    utm_campaign: toSafeString(body.utm_campaign),
    utm_content: toSafeString(body.utm_content),
    utm_term: toSafeString(body.utm_term),
    utm_id: toSafeString(body.utm_id),
    fbclid: toSafeString(body.fbclid),
    gclid: toSafeString(body.gclid),
    msclkid: toSafeString(body.msclkid),
    ttclid: toSafeString(body.ttclid),
    li_fat_id: toSafeString(body.li_fat_id),
    landing_page: toSafeString(body.landing_page),
    referrer: toSafeString(body.referrer),
    first_seen_at: toSafeString(body.first_seen_at),
  };
  const honeypot = toSafeString(body.fax);

  if (honeypot) {
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht verarbeitet werden." },
      { status: 400 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      {
        error:
          "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut.",
      },
      { status: 429 },
    );
  }

  if (
    !fields.firstName ||
    !fields.lastName ||
    !fields.companyName ||
    !fields.email ||
    !fields.phone ||
    !fields.projectType ||
    !fields.currentSituation ||
    !fields.primaryGoal ||
    !fields.biggestProblem ||
    !fields.marketingChannel ||
    !fields.paidAdsStatus ||
    !fields.monthlyRevenue ||
    !fields.employeeCount ||
    !fields.budgetRange ||
    !fields.desiredStart ||
    !fields.qualification
  ) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 },
    );
  }

  if (body.privacyAccepted !== true) {
    return NextResponse.json(
      { error: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(fields.email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 400 },
    );
  }

  if (fields.qualification.length < 20) {
    return NextResponse.json(
      { error: "Bitte beschreiben Sie Ihr Vorhaben etwas genauer." },
      { status: 400 },
    );
  }

  if (
    fields.salutation.length > 40 ||
    fields.firstName.length > 80 ||
    fields.lastName.length > 80 ||
    fields.companyName.length > 120 ||
    fields.email.length > 160 ||
    fields.phone.length > 50 ||
    fields.websiteUrl.length > 2083 ||
    fields.projectType.length > 160 ||
    fields.currentSituation.length > 200 ||
    fields.primaryGoal.length > 180 ||
    fields.biggestProblem.length > 180 ||
    fields.marketingChannel.length > 160 ||
    fields.paidAdsStatus.length > 180 ||
    fields.monthlyRevenue.length > 80 ||
    fields.employeeCount.length > 80 ||
    fields.budgetRange.length > 80 ||
    fields.desiredStart.length > 100 ||
    fields.qualification.length > 3000 ||
    Object.values(tracking).some((value) => value.length > 500)
  ) {
    return NextResponse.json(
      { error: "Einige Angaben sind ungültig." },
      { status: 400 },
    );
  }

  let websiteUrl = "";
  try {
    websiteUrl = normalizeUrl(fields.websiteUrl);
  } catch {
    return NextResponse.json(
      { error: "Bitte eine gültige Website-Adresse angeben." },
      { status: 400 },
    );
  }

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    return NextResponse.json(
      {
        error:
          "Der E-Mail-Versand ist aktuell nicht vollständig konfiguriert.",
      },
      { status: 503 },
    );
  }

  const rows: Array<[string, string]> = [
    ["Anrede", fields.salutation],
    ["Vorname", fields.firstName],
    ["Nachname", fields.lastName],
    ["Unternehmen", fields.companyName],
    ["E-Mail", fields.email],
    ["Telefon", fields.phone],
    ["Website", websiteUrl],
    ["Projektart", fields.projectType],
    ["Ausgangslage", fields.currentSituation],
    ["Wichtigstes Ziel", fields.primaryGoal],
    ["Größter Engpass", fields.biggestProblem],
    ["Wichtigster Akquisekanal", fields.marketingChannel],
    ["Bezahlte Werbeanzeigen", fields.paidAdsStatus],
    ["Monatlicher Umsatz", fields.monthlyRevenue],
    ["Mitarbeitende", fields.employeeCount],
    ["Budgetrahmen", fields.budgetRange],
    ["Gewünschter Start", fields.desiredStart],
    ["Qualifizierung für die Zusammenarbeit", fields.qualification],
  ];
  const trackingRows: Array<[string, string]> = [
    ["Erkannte Herkunft", getAttributionLabel(tracking)],
    ["Erste Landingpage", tracking.landing_page],
    ["Referrer-Domain", tracking.referrer],
    ["Erster Besuch", formatFirstSeen(tracking.first_seen_at)],
    ["UTM Source", tracking.utm_source],
    ["UTM Medium", tracking.utm_medium],
    ["UTM Campaign", tracking.utm_campaign],
    ["UTM Content", tracking.utm_content],
    ["UTM Term", tracking.utm_term],
    ["UTM ID", tracking.utm_id],
    ["FBCLID", tracking.fbclid],
    ["GCLID", tracking.gclid],
    ["MSCLKID", tracking.msclkid],
    ["TTCLID", tracking.ttclid],
    ["LinkedIn Click ID", tracking.li_fat_id],
  ];
  const subject = `Neue B2B-Bewerbung: ${fields.companyName}`;
  const text = [
    "Neue Bewerbung für ein kostenloses Erstgespräch",
    "",
    ...rows.map(([label, value]) => `${label}: ${value || "Nicht angegeben"}`),
    "",
    "Tracking / Herkunft",
    "",
    ...trackingRows.map(
      ([label, value]) => `${label}: ${value || "Nicht angegeben"}`,
    ),
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin-bottom:16px;">Neue Bewerbung für ein kostenloses Erstgespräch</h2>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:760px;border-collapse:collapse;">
        <tbody>${rows.map(([label, value]) => labelValue(label, value)).join("")}</tbody>
      </table>
      <h3 style="margin:24px 0 8px;">Tracking / Herkunft</h3>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:760px;border-collapse:collapse;">
        <tbody>${trackingRows.map(([label, value]) => labelValue(label, value)).join("")}</tbody>
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
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Contact application email failed", errorText);
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
        eventSourceUrl: "https://www.codavo-webstudio.de/kontakt",
        contentName: "B2B-Bewerbung",
        email: fields.email,
        phone: fields.phone,
        firstName: fields.firstName,
        lastName: fields.lastName,
        fbclid: tracking.fbclid,
        firstSeenAt: tracking.first_seen_at,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact application email exception", error);
    return NextResponse.json(
      {
        error:
          "Die Anfrage konnte gerade nicht verarbeitet werden. Bitte versuchen Sie es erneut.",
      },
      { status: 500 },
    );
  }
}
