export type CaseStudyItem = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  img?: string;
  alt?: string;
  href?: string;
};

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Pioneer Solution — Energieberatung",
    problem: "Wenige Anfragen trotz starkem Angebot.",
    solution:
      "Startseite klarer aufgebaut, Nutzen deutlich gemacht, Anfrage-Buttons sichtbar platziert.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/projekt1.webp",
    alt: "Hero-Screenshot Pioneer Solution",
    href: "https://pioneer-solution.de",
  },
  {
    title: "Opny AI — KI-Tools für Unternehmen",
    problem: "Unklare Produktdarstellung, wenig Demo-Anfragen.",
    solution:
      "Nutzen in einer klaren Story erklärt, Produktabschnitte strukturiert, Ladezeiten reduziert.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/projekt2.webp",
    alt: "Hero-Screenshot Opny AI",
    href: "https://opny.ai",
  },
  {
    title: "IB Bauwerksprüfung — Ingenieurbüro",
    problem: "Leistungen technisch stark, online aber schwer greifbar.",
    solution:
      "Strukturierte Darstellung der Kernleistungen, Referenzen hervorgehoben, klare Kontaktwege.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/ib-bauwerkspruefung.webp",
    alt: "Hero-Screenshot IB Bauwerksprüfung",
    href: "https://ib-bauwerkspruefung.de",
  },
  {
    title: "Taner Care — Gebäudereinigung & Services",
    problem: "Breites Leistungsspektrum, aber wenig Differenzierung im Web.",
    solution:
      "Klarer Aufbau nach Zielgruppen, Leistungen sauber gegliedert, Vertrauen durch Referenzen und Bilder.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/taner-care.webp",
    alt: "Hero-Screenshot Taner Care",
    href: "https://taner-care.de",
  },
  {
    title: "HWK Sanierung — Sanierung & Modernisierung",
    problem: "Leistungen und Kompetenz online nicht klar genug transportiert.",
    solution:
      "Website strukturiert aufgebaut, Leistungen verständlich gegliedert und klare Kontaktwege für Anfragen geschaffen.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/hwk.webp",
    alt: "Hero-Screenshot HWK Sanierung",
    href: "https://www.hwksanierung.de/",
  },
  {
    title: "Kreuz Fahrservice — Personenbeförderung",
    problem:
      "Digitaler Auftritt wirkte nicht modern genug und wichtige Kontaktwege waren nicht optimal hervorgehoben.",
    solution:
      "Website modernisiert, mobile Nutzerführung verbessert und Termin- bzw. Kontaktmöglichkeiten sichtbar integriert.",
    result: "Professionellerer Auftritt, klarere Nutzerführung und eine technische Grundlage für weiteres Wachstum.",
    img: "/cases/fahrservice.webp",
    alt: "Hero-Screenshot Kreuz Fahrservice",
    href: "https://www.kreuz-fahrservice.de/",
  },
];
