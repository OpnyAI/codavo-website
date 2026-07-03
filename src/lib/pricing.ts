export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  badge?: string;
};

export const websitePackages: readonly PricingPackage[] = [
  {
    name: "Launch",
    price: "ab 4.900 €",
    description: "Für Unternehmen, die professionell online auftreten und eine starke digitale Grundlage schaffen möchten.",
    features: [
      "Professionelle Unternehmenswebsite",
      "Individuelles UX/UI-Design",
      "Entwicklung mit React/Next.js",
      "SEO-, AEO- und LLMO-Grundstruktur",
      "Optimierung für Suchmaschinen und KI-Systeme",
      "Kontaktformular oder Anfragefunktion",
      "Responsive Umsetzung",
      "Launch-Betreuung",
    ],
  },
  {
    name: "Growth",
    price: "ab 7.900 €",
    badge: "Am häufigsten gewählt",
    description: "Für Unternehmen, die ihre Website aktiv zur Kundengewinnung einsetzen möchten.",
    features: [
      "Erweiterte Seitenstruktur und Leistungsseiten",
      "Conversion-optimierte Nutzerführung",
      "FAQ-/Antwortbereiche für SEO, AEO und LLMO",
      "Erweiterte interne Verlinkung",
      "Strukturierte Daten für Suchmaschinen und KI-Systeme",
      "Technische SEO-Grundlagen",
      "Website-Check inklusive",
      "Tracking-Grundsetup nach Bedarf und passend zur Einwilligungslogik",
      "Vorbereitung für Landingpages oder Funnel",
    ],
  },
  {
    name: "Enterprise",
    price: "ab 14.900 €",
    description: "Für Unternehmen mit individuellen Anforderungen, komplexeren Funktionen oder digitalen Vertriebssystemen.",
    features: [
      "Alles aus Growth",
      "Funnel-Systeme für Kampagnen und Leadgenerierung",
      "Individuelle Funktionen",
      "Kundenportale oder Dashboards",
      "Schnittstellen/API-Anbindungen",
      "Erweiterte Tracking- und Conversion-Struktur nach Bedarf",
      "Skalierbare technische Architektur",
      "Individuelle Projektplanung",
    ],
  },
];

export const landingPagePackages: readonly PricingPackage[] = [
  {
    name: "Launch",
    price: "ab 2.900 €",
    description: "Für einzelne Angebote, Kampagnen oder Dienstleistungen, die klar und professionell präsentiert werden sollen.",
    features: [
      "Individuelle Landingpage",
      "Fokussierte Nutzerführung",
      "Klare Angebotsstruktur",
      "Anfrage- oder Kontaktziel",
      "Responsive Umsetzung",
      "SEO-, AEO- und LLMO-Basis",
      "Technische Launch-Betreuung",
    ],
  },
  {
    name: "Growth",
    price: "ab 4.900 €",
    badge: "Empfohlen",
    description: "Für Unternehmen, die Landingpages gezielt zur Leadgenerierung und Kampagnensteuerung einsetzen möchten.",
    features: [
      "Alles aus Launch",
      "Erweiterte Conversion-Struktur",
      "Formular- oder Terminlogik",
      "Tracking-Setup nach Bedarf und passend zur Einwilligungslogik",
      "Kampagnenfähige Seitenstruktur",
      "Erweiterte FAQ-/Antwortstruktur",
      "Optimierung für Suchmaschinen und KI-Systeme",
    ],
  },
  {
    name: "Enterprise",
    price: "ab 7.900 €",
    description: "Für anspruchsvollere Kampagnen, mehrere Zielgruppen oder Landingpages mit erweiterten Funktionen.",
    features: [
      "Alles aus Growth",
      "Mehrere Landingpage-Varianten",
      "Segmentierte Zielgruppenansprache",
      "Erweiterte Tracking-Events nach Bedarf",
      "A/B-Test-Vorbereitung",
      "Schnittstellen nach Absprache",
      "Individuelle Projektplanung",
    ],
  },
];

export const funnelPackages: readonly PricingPackage[] = [
  {
    name: "Launch",
    price: "ab 3.900 €",
    description: "Für Unternehmen, die erstmals einen professionellen Funnel zur Leadgenerierung einsetzen möchten.",
    features: [
      "Individuell entwickelter Funnel",
      "Klare Nutzerführung bis zur Anfrage",
      "Leadformular",
      "Leadversand an gewünschte E-Mail-Adresse",
      "Responsive Umsetzung",
      "Basis-Tracking nach Bedarf und passend zur Einwilligungslogik",
      "SEO-, AEO- und LLMO-Grundstruktur",
      "Launch-Betreuung",
    ],
  },
  {
    name: "Growth",
    price: "ab 6.900 €",
    badge: "Empfohlen",
    description: "Für Unternehmen, die Leads strukturierter erfassen, auswerten und weiterverarbeiten möchten.",
    features: [
      "Alles aus Launch",
      "CRM-Anbindung nach Absprache",
      "Automatische Lead-Erfassung",
      "Terminbuchung oder Qualifizierungsformular",
      "Erweiterte Conversion-Optimierung",
      "Tracking-Setup nach Bedarf und Einwilligungslogik",
      "Ereignis-Tracking",
      "Erweiterte Analytics-Struktur",
    ],
  },
  {
    name: "Enterprise",
    price: "ab 11.900 €",
    description: "Für Unternehmen mit komplexeren Vertriebsprozessen, mehreren Funnels oder individuellen Integrationen.",
    features: [
      "Alles aus Growth",
      "Mehrere Funnel-Strecken",
      "API- oder Systemanbindungen",
      "CRM-/ERP-Integrationen nach Bedarf",
      "Individuelle Dashboards",
      "Automatisierungen",
      "Erweiterte Analytics- und Conversion-Dashboards",
      "Individuelle Business-Logik und Funnel-Architektur",
    ],
  },
];

export const maintenancePackages: readonly PricingPackage[] = [
  {
    name: "Landingpage Care",
    price: "49 €/Monat",
    description: "Für einfache Landingpages mit laufender technischer Betreuung.",
    features: [
      "Hosting-Betreuung",
      "Technische Erreichbarkeit",
      "Kleine technische Korrekturen nach Absprache",
      "Basis-Monitoring",
      "Aktualisierung technischer Grundlagen",
    ],
  },
  {
    name: "Care",
    price: "99 €/Monat",
    description: "Für professionelle Websites, die zuverlässig betrieben und technisch betreut werden sollen.",
    features: [
      "Hosting-Betreuung",
      "Technische Wartung",
      "Regelmäßige Funktionsprüfung",
      "Kleine technische Anpassungen",
      "Sicherheits- und Stabilitätsprüfung",
      "Ansprechpartner für technische Fragen",
    ],
  },
  {
    name: "Care Plus",
    price: "249 €/Monat",
    badge: "Empfohlen",
    description: "Für Unternehmen, die ihre Website regelmäßig pflegen, verbessern und weiterentwickeln möchten.",
    features: [
      "Alles aus Care",
      "Monatliches Technik-Review",
      "Kleinere Inhalts- und Strukturänderungen",
      "Performance-Kontrolle",
      "SEO-/AEO-/LLMO-Basisprüfung",
      "Performance- und Tracking-Check nach Bedarf",
      "Priorisierte Bearbeitung",
      "Regelmäßige Optimierungsvorschläge",
    ],
  },
  {
    name: "Growth Care",
    price: "399 €/Monat",
    description: "Für Unternehmen, die ihre Website als aktiven Vertriebs- und Wachstumskanal betreiben möchten.",
    features: [
      "Alles aus Care Plus",
      "Laufende Conversion-Optimierung",
      "Erweiterte SEO-/AEO-/LLMO-Betreuung",
      "Neue Sektionen oder Landingpage-Erweiterungen nach Absprache",
      "Auswertung von Website-Performance und Nutzerverhalten",
      "Strategische Weiterentwicklung",
    ],
  },
];

export const softwareProjectSizes = [
  { name: "Einstieg", price: "ab 14.900 €" },
  { name: "Typische Projektgröße", price: "20.000–50.000 €" },
  { name: "Enterprise-Projekte", price: "ab 50.000 €" },
] as const;

export const softwareTypicalServices = [
  "Kundenportale",
  "Interne Tools",
  "Dashboards",
  "Buchungssysteme",
  "Angebots- oder Anfrageprozesse",
  "Schnittstellen/API-Anbindungen",
  "Automatisierungen",
  "Individuelle Web-Apps",
  "Daten-, Prozess- und Reporting-Logik nach Bedarf",
] as const;
