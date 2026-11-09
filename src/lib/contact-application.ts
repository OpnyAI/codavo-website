export const projectTypeOptions = [
  "Prozessautomatisierung und Systemintegration",
  "CRM-Einrichtung und Automatisierung",
  "KI-Strategie und Beratung",
  "Individuelle KI-Lösung",
  "Neue Unternehmenswebsite",
  "Relaunch einer bestehenden Website",
  "Landingpage oder Funnel",
  "Web-App oder individuelle Software",
  "SEO, AEO und KI-Auffindbarkeit",
  "Noch unsicher – ich wünsche eine Einordnung",
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
