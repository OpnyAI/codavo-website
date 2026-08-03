export type GoogleReview = {
  rating: number;
  quote: string;
  author: string;
  role: string;
  sourceUrl: string;
};

export type CaseStudyItem = {
  title: string;
  company: string;
  industry: string;
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
  featured?: boolean;
  googleReview?: GoogleReview;
};

const googleReviewSource = "https://share.google/2urKQQPWoFaAIicLU";

export const caseStudies: CaseStudyItem[] = [
  {
    title: "TPV — Medientechnik mit klarer Bühne",
    company: "TPV-AV",
    industry: "Medientechnik",
    background:
      "Das Angebot reicht von Konferenz- und Präsentationstechnik bis zu Digital Signage, LED-Walls und individuellen AV-Installationen.",
    goal:
      "Die technische Kompetenz hochwertig präsentieren und Interessenten schneller zu Leistungen, Referenzen und Kontakt führen.",
    problem:
      "Viele erklärungsbedürftige Leistungen mussten in einem eigenständigen, dennoch leicht erfassbaren Auftritt zusammengeführt werden.",
    solution:
      "Ein markanter Dark-Mode-Auftritt mit klarer Leistungsarchitektur, starken Projektmotiven und kurzen Wegen zur Beratung.",
    codavoWork:
      "Konzeption, UX/UI, Content-Struktur, individuelle Entwicklung und technische Umsetzung.",
    decision:
      "Großzügige Bildflächen und präzise Leistungsblöcke machen die Wirkung professioneller Medientechnik bereits im ersten Bildschirm sichtbar.",
    result:
      "Ein eigenständiger Webauftritt, der technische Tiefe, Projektqualität und persönliche Beratung klar miteinander verbindet.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/landingpage-erstellen-lassen", label: "Landingpages" },
    ],
    img: "/cases/2026/tpv.png",
    alt: "Startseite von TPV-AV mit professionellen Audio- und Video-Lösungen",
    href: "https://www.tpv-av.de",
    featured: true,
    googleReview: {
      rating: 5,
      quote:
        "War und ist aktuell eine super Zusammenarbeit mit Mehmet. Ich schätze besonders das ganzheitliche denken und die klaren / deutlichen Schritte die unseren Vorhaben erfolgreich gemacht haben. Kann ich nur weiterempfehlen.",
      author: "TPV",
      role: "Google-Rezension",
      sourceUrl: googleReviewSource,
    },
  },
  {
    title: "Creamy Catering — Genuss visuell erlebbar",
    company: "Creamy Catering",
    industry: "Event-Catering",
    background:
      "Ein mobiles Cateringkonzept für Specialty Coffee, Ceremonial Matcha und moderne Food-Ideen brauchte einen Auftritt mit Persönlichkeit und Atmosphäre.",
    goal:
      "Leistungen und Einsatzbereiche verständlich machen und zugleich die besondere Ästhetik der Marke transportieren.",
    problem:
      "Das vielseitige Angebot sollte hochwertig wirken, ohne Besucher mit Details oder unterschiedlichen Eventformaten zu überfordern.",
    solution:
      "Eine bildstarke Website mit klaren Angebotsbereichen, persönlicher Gründerstory, Galerie und direkter Event-Anfrage.",
    codavoWork:
      "Markenübertragung ins Web, Seitenstruktur, UX/UI, Content-Aufbereitung und individuelle Entwicklung.",
    decision:
      "Editoriale Typografie und großzügige Lifestyle-Bilder stellen Atmosphäre und Qualität vor technische Erklärungen.",
    result:
      "Eine warme, hochwertige Website, die Angebot, Person und Eventerlebnis in einem konsistenten Auftritt zusammenführt.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/landingpage-erstellen-lassen", label: "Landingpages" },
    ],
    img: "/cases/2026/creamy-full-hero.png",
    alt: "Startseite von Creamy Catering mit Coffee Catering und Matcha Catering",
    href: "https://www.creamy-catering.de",
    featured: true,
    googleReview: {
      rating: 5,
      quote:
        "Vielen Dank für die hervorragende Zusammenarbeit. Wir sind mit unserer neuen Website sehr zufrieden. Alle unsere Wünsche wurden nicht nur umgesetzt, sondern auch mitgedacht und sinnvoll ergänzt.",
      author: "Yasemin Tekin",
      role: "Gründerin von Creamy Catering",
      sourceUrl: googleReviewSource,
    },
  },
  {
    title: "HWK Sanierung — Kompetenz im Bestand",
    company: "HWK Sanierung",
    industry: "Sanierung",
    background:
      "Sanierung, Modernisierung sowie Brand- und Wasserschadensanierung sollten als zusammenhängendes Leistungsangebot erkennbar werden.",
    goal:
      "Kompetenz und Leistungsspektrum auf den ersten Blick vermitteln und den Weg zur Beratung verkürzen.",
    problem:
      "Die fachliche Breite brauchte eine klare Struktur, damit Interessenten das passende Angebot schnell einordnen können.",
    solution:
      "Eine fokussierte Unternehmenswebsite mit deutlichem Leistungsversprechen, nachvollziehbarem Prozess und prominenten Kontaktwegen.",
    codavoWork:
      "Seitenstrategie, Leistungsstruktur, UX/UI, Content-Aufbereitung und individuelle technische Umsetzung.",
    decision:
      "Das zentrale Sanierungsversprechen steht im Hero; Leistungen, Prozess und Kontakt folgen in einer konsequenten Entscheidungslogik.",
    result:
      "Ein klarer digitaler Unternehmensauftritt, der Sanierungskompetenz und direkte Erreichbarkeit überzeugend zusammenbringt.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/funnel-erstellen-lassen", label: "Funnel" },
    ],
    img: "/cases/2026/hwk.png",
    alt: "Startseite von HWK Sanierung mit modernisiertem Wohngebäude",
    href: "https://www.hwksanierung.de",
    featured: true,
    googleReview: {
      rating: 5,
      quote:
        "Meine Website für mein Bauunternehmen war innerhalb kürzester Zeit fertig . Sehr gute Arbeit geleistet bin begeistert!!!",
      author: "Ali K.",
      role: "Inhaber von HWK Sanierung",
      sourceUrl: googleReviewSource,
    },
  },
  {
    title: "Taner Care — Pflege verständlich erklärt",
    company: "Taner Care Gruppe",
    industry: "Pflege & Betreuung",
    background:
      "Alltagsbegleitung, Pflegeberatung und Pflegehilfsmittel sollten für Pflegebedürftige und Angehörige verständlich an einem Ort gebündelt werden.",
    goal:
      "Leistungen, Anspruchsvoraussetzungen und nächste Schritte ruhig, menschlich und strukturiert vermitteln.",
    problem:
      "Pflegeleistungen sind erklärungsbedürftig und betreffen Menschen häufig in einer emotional oder organisatorisch anspruchsvollen Situation.",
    solution:
      "Eine zugängliche Website mit klar getrennten Leistungswelten, verständlichen Abläufen und direkten Kontaktmöglichkeiten.",
    codavoWork:
      "Informationsarchitektur, UX/UI, verständliche Content-Struktur und individuelle Entwicklung.",
    decision:
      "Kurze Erklärungen, wiederkehrende Orientierungspunkte und klare Handlungsoptionen reduzieren Komplexität, ohne wichtige Informationen auszulassen.",
    result:
      "Nach dem Launch stieg der Umsatz um 30 Prozent. Aufgrund der gestiegenen Nachfrage stellte Taner Care inzwischen sieben neue Mitarbeiterinnen und Mitarbeiter ein.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/digitale-systeme", label: "Digitale Systeme" },
    ],
    img: "/cases/2026/taner-care.png",
    alt: "Startseite der Taner Care Gruppe für Pflege und Alltagsbegleitung",
    href: "https://www.taner-care.de",
    featured: true,
    googleReview: {
      rating: 5,
      quote:
        "Unsere Website wurde nicht nur technisch einwandfrei umgesetzt, sondern vor allem extrem lösungsorientiert aufgebaut. Jede Frage wurde verständlich beantwortet – ohne unnötiges Fachchinesisch, sondern klar, strukturiert und praxisnah erklärt.",
      author: "Yakup Taner",
      role: "Taner Care Gruppe",
      sourceUrl: googleReviewSource,
    },
  },
  {
    title: "MAG Group — Industrieauftritt mit Substanz",
    company: "MAG – Metall Advancement Group",
    industry: "Industrie & Engineering",
    background:
      "Gießereitechnologien, Metallverarbeitung, Engineering und internationale Lieferfähigkeit sollten in einem konsistenten B2B-Auftritt zusammenfinden.",
    goal:
      "Das breite industrielle Leistungsspektrum klar ordnen und die Gruppe als technisch starken Projektpartner positionieren.",
    problem:
      "Viele Fertigungs- und Engineering-Kompetenzen mussten verständlich strukturiert werden, ohne die fachliche Tiefe zu verlieren.",
    solution:
      "Eine bildstarke, mehrsprachige Unternehmenswebsite mit klaren Leistungswelten, Qualitätsnachweisen und projektorientierter Kontaktführung.",
    codavoWork:
      "Informationsarchitektur, UX/UI, mehrsprachige Seitenstruktur und individuelle technische Umsetzung.",
    decision:
      "Die Leistungen werden entlang industrieller Fertigungs- und Projektanforderungen gegliedert statt als unverbundene Einzeldisziplinen gezeigt.",
    result:
      "Ein souveräner Industrieauftritt, der technische Breite, Qualitätsanspruch und internationale Zusammenarbeit sichtbar macht.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/digitale-systeme", label: "Digitale Systeme" },
    ],
    img: "/cases/2026/mag-group.png",
    alt: "Startseite der MAG Group für Metallguss, Engineering und Metallverarbeitung",
    href: "https://www.mag-group.eu",
    featured: true,
  },
  {
    title: "Kreuz Fahrservice — Hilfe schnell erreichbar",
    company: "Kreuz-Fahrservice",
    industry: "Medizinischer Fahrdienst",
    background:
      "Ein medizinischer Fahrdienst braucht einen besonders direkten, gut lesbaren und auch mobil leicht bedienbaren Webauftritt.",
    goal:
      "Leistungen, Einsatzgebiet und Kontaktmöglichkeiten ohne Umwege zugänglich machen.",
    problem:
      "Menschen suchen häufig in einer konkreten Bedarfssituation und müssen schnell erkennen, ob der Fahrdienst für ihre Anfrage geeignet ist.",
    solution:
      "Eine ruhige, barrierearme Seitenstruktur mit gut sichtbaren Kontaktwegen, klaren Leistungsbereichen und lokalem Bezug.",
    codavoWork:
      "Modernisierung, mobile Nutzerführung, Content-Struktur und individuelle Entwicklung.",
    decision:
      "Telefon und Anfrage stehen früh im Nutzerweg; ergänzende Informationen bleiben leicht scannbar und führen nicht vom eigentlichen Anliegen weg.",
    result:
      "Ein moderner, zugänglicher Auftritt, der Leistungen und Kontaktmöglichkeiten schnell erfassbar macht.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/funnel-erstellen-lassen", label: "Funnel" },
    ],
    img: "/cases/2026/kreuz-fahrservice.png",
    alt: "Startseite von Kreuz-Fahrservice mit medizinischem Fahrdienst",
    href: "https://www.kreuz-fahrservice.de",
    featured: true,
    googleReview: {
      rating: 4,
      quote: "Wunderschöne Eindrücke und tolles Erlebnis. Weiter so",
      author: "Ingo Kreuz",
      role: "Kreuz-Fahrservice",
      sourceUrl: googleReviewSource,
    },
  },
  {
    title: "Opny — kontrollierte KI klar positioniert",
    company: "Opny",
    industry: "KI für Automotive",
    background:
      "Ein erklärungsbedürftiges KI-Angebot für Automotive-Zulieferer brauchte eine klare Positionierung, verständliche Produktlogik und belastbare Vertrauenssignale.",
    goal:
      "Den Nutzen kontrollierter KI verständlich machen und Interessenten gezielt zu Produkt- und Beratungsgesprächen führen.",
    problem:
      "Technische Tiefe, Governance und unterschiedliche Angebote mussten für Entscheider ohne unnötige Komplexität erfassbar werden.",
    solution:
      "Ein reduzierter B2B-Auftritt mit klarer Zielgruppe, differenzierten Angebotswegen und einer nachvollziehbaren Story rund um kontrollierte KI.",
    codavoWork:
      "Positionierungsübertragung, UX/UI, Content-Struktur, individuelle Entwicklung und technische SEO-Grundlage.",
    decision:
      "Die Seite startet mit Zielgruppe und Nutzen; Produkte, Beratung und Training erhalten anschließend jeweils eigene, klar benannte Wege.",
    result:
      "Eine fokussierte Produkt- und Unternehmensdarstellung für Automotive-Zulieferer mit klarer Führung zu Demo und Erstgespräch.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/landingpage-erstellen-lassen", label: "Landingpages" },
    ],
    img: "/cases/2026/opny.png",
    alt: "Startseite von Opny für kontrollierte KI bei Automotive-Zulieferern",
    href: "https://opny.ai",
  },
  {
    title: "IB Bauwerksprüfung — Fachlichkeit auf den Punkt",
    company: "IB Bauwerksprüfung",
    industry: "Ingenieurwesen",
    background:
      "Bauwerksprüfungen nach DIN 1076 und ergänzende Ingenieurleistungen sollten fachlich präzise, aber auch für Auftraggeber schnell erfassbar sein.",
    goal:
      "Leistungen, Vorgehen und Qualifikation seriös darstellen und den Weg zur Projektanfrage vereinfachen.",
    problem:
      "Technisch anspruchsvolle Leistungen liefen Gefahr, entweder zu abstrakt oder zu textlastig präsentiert zu werden.",
    solution:
      "Ein ruhiger, hochwertiger Auftritt mit klarer Leistungsstruktur, starken Infrastrukturmotiven und nachvollziehbarem Prüfprozess.",
    codavoWork:
      "Leistungsarchitektur, UX/UI, Content-Aufbereitung, individuelle Entwicklung und technische Struktur.",
    decision:
      "Fachbegriffe bleiben erhalten, werden aber durch klare Hierarchien und einen transparenten Ablauf leichter zugänglich.",
    result:
      "Ein seriöser Ingenieurauftritt, der Spezialisierung, Erfahrung und Projektablauf schnell verständlich vermittelt.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/digitale-systeme", label: "Digitale Systeme" },
    ],
    img: "/cases/2026/ib-bauwerkspruefung.png",
    alt: "Startseite von IB Bauwerksprüfung für Prüfungen nach DIN 1076",
    href: "https://ib-bauwerkspruefung.de",
  },
  {
    title: "Pioneer Solution — Energieberatung",
    company: "Pioneer Solution",
    industry: "Energieberatung",
    background:
      "Energieberatung, Fördermittel und Sanierungsfahrpläne sollten für Eigentümer verständlich und wirtschaftlich eingeordnet werden.",
    goal:
      "Das Beratungsangebot klar strukturieren und Interessenten direkt zu einem persönlichen Erstgespräch führen.",
    problem:
      "Fachbegriffe, Förderlogik und unterschiedliche Maßnahmen erschweren Eigentümern häufig die erste Orientierung.",
    solution:
      "Eine kompakte Website mit klaren Leistungsbereichen, transparentem Ablauf und verständlicher Nutzenkommunikation.",
    codavoWork:
      "Struktur, UX/UI, Nutzenkommunikation, visuelle Priorisierung und individuelle Umsetzung.",
    decision:
      "Die Beratung wird als nachvollziehbarer Weg von der Analyse bis zur Umsetzung erklärt, statt einzelne Förderbausteine isoliert zu zeigen.",
    result:
      "Ein professioneller Auftritt mit klarer Angebotsstruktur und gut sichtbaren Kontaktwegen.",
    serviceLinks: [
      { href: "/webdesign", label: "Webdesign" },
      { href: "/website-check", label: "Website-Check" },
    ],
    img: "/cases/projekt1.webp",
    alt: "Projektansicht von Pioneer Solution",
    href: "https://www.pioneer-solution.de",
  },
];
