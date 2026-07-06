export type CaseStudyItem = {
  title: string;
  background: string;
  goal: string;
  problem: string;
  solution: string;
  codavoWork: string;
  decision: string;
  result: string;
  serviceLinks?: {
    href: string;
    label: string;
  }[];
  img?: string;
  alt?: string;
  href?: string;
};

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Pioneer Solution — Energieberatung",
    background:
      "Ein fachlich starkes Beratungsangebot sollte online schneller verständlich und vertrauenswürdiger wirken.",
    goal: "Mehr Klarheit für Interessenten und ein direkterer Weg zur Anfrage.",
    problem: "Wenige Anfragen trotz starkem Angebot.",
    solution:
      "Startseite klarer aufgebaut, Nutzen deutlich gemacht, Anfrage-Buttons sichtbar platziert.",
    codavoWork:
      "Struktur, Nutzenkommunikation, visuelle Priorisierung und Kontaktführung auf der Website geschärft.",
    decision:
      "Die wichtigsten Argumente wurden früher sichtbar gemacht, damit Besucher schneller einschätzen können, ob das Angebot passt.",
    result:
      "Ein professionellerer Webauftritt mit klarerer Angebotsstruktur und besser sichtbaren Kontaktwegen.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/website-check", label: "Website-Check" },
    ],
    img: "/cases/projekt1.webp",
    alt: "Hero-Screenshot Pioneer Solution",
    href: "https://pioneer-solution.de",
  },
  {
    title: "Opny AI — KI-Tools für Unternehmen",
    background:
      "Ein erklärungsbedürftiges KI-Angebot brauchte eine Website, die Produktnutzen und Einsatzmöglichkeiten schneller einordnet.",
    goal: "Den Produktwert verständlicher machen und Demo-Anfragen besser vorbereiten.",
    problem: "Unklare Produktdarstellung, wenig Demo-Anfragen.",
    solution:
      "Nutzen in einer klaren Story erklärt, Produktabschnitte strukturiert, Ladezeiten reduziert.",
    codavoWork:
      "Produktstory, Abschnittslogik, Nutzerführung und technische Darstellung der Website überarbeitet.",
    decision:
      "Statt Funktionen isoliert zu zeigen, wurde der Nutzen entlang typischer Unternehmensfragen erklärt.",
    result:
      "Eine klarere Produktpräsentation mit verständlicherem Einstieg und fokussierterer Führung Richtung Demo.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/landingpage-erstellen-lassen", label: "Landingpages" },
    ],
    img: "/cases/projekt2.webp",
    alt: "Hero-Screenshot Opny AI",
    href: "https://opny.ai",
  },
  {
    title: "IB Bauwerksprüfung — Ingenieurbüro",
    background:
      "Die fachliche Kompetenz war vorhanden, wurde online aber nicht ausreichend strukturiert und greifbar dargestellt.",
    goal: "Leistungen, Referenzen und Kontaktwege für Auftraggeber nachvollziehbarer machen.",
    problem: "Leistungen technisch stark, online aber schwer greifbar.",
    solution:
      "Strukturierte Darstellung der Kernleistungen, Referenzen hervorgehoben, klare Kontaktwege.",
    codavoWork:
      "Leistungsstruktur, Referenzdarstellung, Seitenführung und Vertrauenselemente sichtbarer aufgebaut.",
    decision:
      "Technische Inhalte wurden in verständliche Leistungsbereiche übersetzt, ohne die fachliche Substanz zu verwässern.",
    result:
      "Ein seriöserer digitaler Auftritt, der Leistungen und Referenzen für potenzielle Auftraggeber leichter zugänglich macht.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/digitale-systeme", label: "Digitale Systeme" },
    ],
    img: "/cases/ib-bauwerkspruefung.webp",
    alt: "Hero-Screenshot IB Bauwerksprüfung",
    href: "https://ib-bauwerkspruefung.de",
  },
  {
    title: "Taner Care — Gebäudereinigung & Services",
    background:
      "Mehrere Servicebereiche sollten online geordnet dargestellt werden, ohne dass der Auftritt beliebig wirkt.",
    goal: "Zielgruppen, Leistungen und Vertrauenssignale klarer zusammenführen.",
    problem: "Breites Leistungsspektrum, aber wenig Differenzierung im Web.",
    solution:
      "Klarer Aufbau nach Zielgruppen, Leistungen sauber gegliedert, Vertrauen durch Referenzen und Bilder.",
    codavoWork:
      "Leistungsarchitektur, Zielgruppenführung, visuelle Struktur und Anfragewege auf der Website geschärft.",
    decision:
      "Die Inhalte wurden nach Nutzerbedürfnissen gegliedert, damit unterschiedliche Servicebereiche schneller auffindbar sind.",
    result:
      "Eine übersichtlichere Website, die das breite Leistungsspektrum klarer erklärt und Vertrauen sichtbarer macht.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/landingpage-erstellen-lassen", label: "Landingpages" },
    ],
    img: "/cases/taner-care.webp",
    alt: "Hero-Screenshot Taner Care",
    href: "https://taner-care.de",
  },
  {
    title: "HWK Sanierung — Sanierung & Modernisierung",
    background:
      "Sanierungsleistungen und Kompetenz sollten online professioneller, verständlicher und anfrageorientierter erscheinen.",
    goal: "Leistungen klarer erklären und den Weg zur Kontaktaufnahme vereinfachen.",
    problem: "Leistungen und Kompetenz online nicht klar genug transportiert.",
    solution:
      "Website strukturiert aufgebaut, Leistungen verständlich gegliedert und klare Kontaktwege für Anfragen geschaffen.",
    codavoWork:
      "Seitenstruktur, Leistungsdarstellung, Kontaktführung und visuelle Vertrauenselemente überarbeitet.",
    decision:
      "Die Website wurde stärker auf konkrete Leistungsbereiche und schnelle Orientierung ausgerichtet.",
    result:
      "Ein klarerer Unternehmensauftritt mit verständlicher Leistungsstruktur und sichtbaren Anfragewegen.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/funnel-erstellen-lassen", label: "Funnel" },
    ],
    img: "/cases/hwk.webp",
    alt: "Hero-Screenshot HWK Sanierung",
    href: "https://www.hwksanierung.de/",
  },
  {
    title: "Kreuz Fahrservice — Personenbeförderung",
    background:
      "Der bestehende digitale Auftritt sollte moderner wirken und mobile Nutzer schneller zu Kontakt- und Terminwegen führen.",
    goal: "Mobile Orientierung verbessern und relevante Kontaktmöglichkeiten deutlicher sichtbar machen.",
    problem:
      "Digitaler Auftritt wirkte nicht modern genug und wichtige Kontaktwege waren nicht optimal hervorgehoben.",
    solution:
      "Website modernisiert, mobile Nutzerführung verbessert und Termin- bzw. Kontaktmöglichkeiten sichtbar integriert.",
    codavoWork:
      "Modernisierung des Auftritts, mobile Nutzerführung und Einbindung zentraler Kontakt- bzw. Terminwege.",
    decision:
      "Die wichtigsten Handlungen wurden im mobilen Nutzungskontext stärker priorisiert.",
    result:
      "Ein modernerer Webauftritt mit besserer mobiler Orientierung und klarer hervorgehobenen Kontaktmöglichkeiten.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/funnel-erstellen-lassen", label: "Funnel" },
    ],
    img: "/cases/fahrservice.webp",
    alt: "Hero-Screenshot Kreuz Fahrservice",
    href: "https://www.kreuz-fahrservice.de/",
  },
];
