export const projectTypeOptions = [
  "Neue Unternehmenswebsite",
  "Relaunch einer bestehenden Website",
  "Landingpage oder Funnel",
  "Web-App oder individuelle Software",
  "SEO, AEO und KI-Auffindbarkeit",
  "Noch unsicher – ich wünsche eine Einordnung",
] as const;

export const currentSituationOptions = [
  "Wir haben noch keine Website",
  "Unsere Website ist veraltet oder passt nicht mehr zu uns",
  "Unsere Website bringt zu wenige passende Anfragen",
  "Wir möchten ein neues Angebot oder eine Kampagne aufbauen",
  "Wir möchten einen Prozess digitalisieren",
  "Wir benötigen eine individuelle Lösung",
] as const;

export const primaryGoalOptions = [
  "Professioneller und hochwertiger auftreten",
  "Mehr qualifizierte Anfragen gewinnen",
  "Bei Google und in KI-Systemen besser gefunden werden",
  "Ein Angebot gezielt vermarkten",
  "Interne oder externe Prozesse digitalisieren",
  "Mehrere dieser Ziele miteinander verbinden",
] as const;

export const biggestProblemOptions = [
  "Die Website entspricht nicht unserer Qualität",
  "Es kommen zu wenige passende Anfragen",
  "Unser Angebot wird nicht klar verstanden",
  "Wir sind bei Google und in KI-Systemen kaum sichtbar",
  "Technik oder Baukastensystem begrenzen uns",
  "Uns fehlen Zeit und Know-how für die Umsetzung",
] as const;

export const marketingChannelOptions = [
  "Empfehlungen und persönliches Netzwerk",
  "Google und organische Suche",
  "Social Media",
  "Bezahlte Werbeanzeigen",
  "Vertrieb und Direktansprache",
  "Bisher keine systematische Kundengewinnung",
] as const;

export const paidAdsStatusOptions = [
  "Ja, wir schalten bereits regelmäßig Werbeanzeigen",
  "Ja, aber bisher nur vereinzelt oder testweise",
  "Nein, aktuell noch nicht",
  "Nein, das ist für unser Vorhaben derzeit nicht relevant",
] as const;

export const monthlyRevenueOptions = [
  "Unter 25.000 Euro Monatsumsatz",
  "25.000–50.000 Euro Monatsumsatz",
  "50.000–100.000 Euro Monatsumsatz",
  "100.000–250.000 Euro Monatsumsatz",
  "Über 250.000 Euro Monatsumsatz",
] as const;

export const employeeCountOptions = [
  "Keine / nur Freelancer",
  "1–3",
  "3–10",
  "10–20",
  "Über 20 Mitarbeitende",
] as const;

export const budgetRangeOptions = [
  "Eine Investition ist eingeplant – die Höhe ist noch offen",
  "Unter 5.000 €",
  "5.000–8.000 €",
  "8.000–15.000 €",
  "15.000–30.000 €",
  "Über 30.000 €",
] as const;

export const desiredStartOptions = [
  "So bald wie möglich",
  "In den nächsten 1–3 Monaten",
  "In den nächsten 3–6 Monaten",
  "Später als in 6 Monaten",
  "Ich orientiere mich zunächst",
] as const;

export type ContactApplicationPayload = {
  salutation?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  websiteUrl?: string;
  projectType?: string;
  currentSituation?: string;
  primaryGoal?: string;
  biggestProblem?: string;
  marketingChannel?: string;
  paidAdsStatus?: string;
  monthlyRevenue?: string;
  employeeCount?: string;
  budgetRange?: string;
  desiredStart?: string;
  qualification?: string;
  privacyAccepted?: boolean;
  fax?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_id?: string;
  fbclid?: string;
  gclid?: string;
  msclkid?: string;
  ttclid?: string;
  li_fat_id?: string;
  landing_page?: string;
  referrer?: string;
  first_seen_at?: string;
  metaEventId?: string;
  marketingConsent?: boolean;
};
