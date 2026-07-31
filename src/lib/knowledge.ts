import type { ContentSection } from "@/components/content/ServiceLandingPage";
import type { FAQItem } from "@/components/FAQAccordion";

export type KnowledgeCluster =
  | "unternehmenswebsites"
  | "landingpages"
  | "funnel-systeme"
  | "seo-aeo-llmo"
  | "tracking-analytics"
  | "web-apps-software"
  | "hosting-wartung"
  | "digitalisierung-mittelstand";

export const knowledgeClusterMeta = {
  unternehmenswebsites: {
    title: "Unternehmenswebsites",
    description:
      "Strategie, Kosten, Struktur und technische Grundlagen für professionelle Firmenauftritte.",
  },
  landingpages: {
    title: "Landingpages",
    description:
      "Fokussierte Seiten für Angebote, Kampagnen und klare Conversion-Ziele.",
  },
  "funnel-systeme": {
    title: "Funnel-Systeme",
    description:
      "Mehrstufige Anfrageprozesse mit Landingpage, Formular, Tracking und Folgeprozess.",
  },
  "seo-aeo-llmo": {
    title: "SEO / AEO / LLMO",
    description:
      "Sichtbarkeit in klassischen Suchmaschinen, Antwortsystemen und KI-Modellen verständlich eingeordnet.",
  },
  "tracking-analytics": {
    title: "Tracking & Analytics",
    description:
      "Grundlagen für messbare Nutzerwege, Funnel-Verständnis und bessere digitale Entscheidungen.",
  },
  "web-apps-software": {
    title: "Web-Apps / Software",
    description:
      "Orientierung für individuelle Entwicklung, interne Tools, Portale und digitale Prozesse.",
  },
  "hosting-wartung": {
    title: "Hosting / Wartung",
    description:
      "Betrieb, Pflege, Updates und Weiterentwicklung professioneller Websites.",
  },
  "digitalisierung-mittelstand": {
    title: "Digitalisierung im Mittelstand",
    description:
      "Wie Website, Funnel, Software, Tracking, Automatisierung und KI sinnvoll zusammenspielen.",
  },
} as const satisfies Record<KnowledgeCluster, { title: string; description: string }>;

export const knowledgeClusterOrder = [
  "unternehmenswebsites",
  "landingpages",
  "funnel-systeme",
  "seo-aeo-llmo",
  "tracking-analytics",
  "web-apps-software",
  "hosting-wartung",
  "digitalisierung-mittelstand",
] as const satisfies readonly KnowledgeCluster[];

export type KnowledgeLink = {
  href: string;
  label: string;
  description: string;
};

type KnowledgeArticleEntry = {
  title: string;
  description: string;
  intro: string;
  answer: string;
  cluster: KnowledgeCluster;
  primaryMoneyPage: KnowledgeLink;
  secondaryLinks: readonly KnowledgeLink[];
  sections: readonly ContentSection[];
  faqs: readonly FAQItem[];
  related: readonly string[];
};

export const knowledgeArticles = {
  "was-kostet-eine-website": {
    title: "Was kostet eine professionelle Website?",
    description:
      "Kosten, Pakete, Preisfaktoren und Entscheidungslogik professioneller Unternehmenswebsites verständlich erklärt.",
    intro:
      "Die Kosten einer Website hängen nicht nur von der Seitenzahl ab. Entscheidend sind Ziel, Inhalte, Nutzerführung, technische Grundlage, Sichtbarkeit und spätere Erweiterbarkeit.",
    answer:
      "Der passende Projektumfang richtet sich nach Ziel, Seitenstruktur, Content, Funktionen, SEO-/AEO-/LLMO-Grundlagen und gewünschter Weiterentwicklung. Deshalb klärt Codavo zuerst die Ausgangslage und erstellt anschließend ein individuelles, nachvollziehbares Angebot.",
    cluster: "unternehmenswebsites",
    primaryMoneyPage: {
      href: "/webdesign",
      label: "Webdesign für Unternehmenswebsites",
      description:
        "Die passende Leistungsseite für professionelle Unternehmenswebsites.",
    },
    secondaryLinks: [
      {
        href: "/website-check",
        label: "Website-Check",
        description:
          "Sinnvoll, wenn eine bestehende Website vor einem Relaunch eingeordnet werden soll.",
      },
      {
        href: "/hosting-wartung",
        label: "Hosting und Wartung",
        description:
          "Einordnung laufender Betreuung nach dem Launch.",
      },
      {
        href: "/landingpage-erstellen-lassen",
        label: "Landingpage erstellen lassen",
        description:
          "Vergleich, wenn kein vollständiger Unternehmensauftritt benötigt wird.",
      },
    ],
    sections: [
      {
        title: "Welche Faktoren bestimmen den Preis?",
        text: "Der Aufwand entsteht durch Entscheidungen, die später über Verständlichkeit, Erweiterbarkeit und Pflege entscheiden. Eine reine Seitenzahl ist deshalb kein belastbarer Preisanker.",
        bullets: [
          "Ziel und Positionierung",
          "Informationsarchitektur und Nutzerführung",
          "Content-Struktur und Leistungsseiten",
          "UX/UI, technische Umsetzung und Performance",
          "SEO-, AEO- und LLMO-Grundlagen",
          "Formulare, Tracking, Schnittstellen oder spätere Erweiterungen",
        ],
      },
      {
        title: "Launch, Growth oder Enterprise?",
        text: "Launch schafft eine professionelle Grundlage für einen klaren Unternehmensauftritt. Growth ergänzt mehr Struktur für Leistungen, Sichtbarkeit und Conversion. Enterprise eignet sich, wenn zusätzliche Funktionen, mehrere Seitentypen oder individuelle digitale Bausteine geplant sind.",
      },
      {
        title: "Was ist im Projektumfang typischerweise enthalten?",
        text: "Ein seriöser Website-Umfang umfasst nicht nur Design. Dazu gehören Zielklärung, Struktur, Nutzerführung, technische Umsetzung, mobile Darstellung, Basiseinstellungen für Sichtbarkeit und Qualitätssicherung vor dem Launch.",
      },
      {
        title: "Was ist nicht automatisch enthalten?",
        text: "Laufende Content-Arbeit, dauerhafte SEO-Betreuung, externe Tools, umfangreiche Textproduktion, Fotos, komplexe Schnittstellen oder Softwarefunktionen müssen separat eingeordnet werden. Das verhindert unrealistische Erwartungen und unklare Angebote.",
      },
      {
        title: "Entscheidungslogik: kleine Website oder größerer Relaunch?",
        text: "Eine kleinere Website reicht, wenn wenige Leistungen klar erklärt werden sollen. Ein größerer Relaunch ist sinnvoll, wenn mehrere Zielgruppen, Leistungen, Standorte, Content-Bereiche, Funnel oder technische Erweiterungen geplant sind.",
      },
      {
        title: "Typische Fehler bei Website-Angeboten",
        text: "Viele Angebote wirken vergleichbar, obwohl sie unterschiedliche Leistungen enthalten. Kritisch sind unklare Content-Verantwortung, fehlende mobile Prüfung, keine Wartungslogik, schwache SEO-Grundlagen oder spätere Abhängigkeiten von Templates.",
      },
      {
        title: "Praxisbeispiel: Dienstleister mit mehreren Leistungen",
        text: "Ein B2B-Dienstleister benötigt häufig mehr als eine Startseite und Kontaktformular. Sinnvoll sind klare Leistungsseiten, FAQ-Bereiche, Referenzen, Kontaktwege und eine technische Basis, die spätere Landingpages oder Funnel zulässt.",
      },
      {
        title: "Checkliste für die Budgetplanung",
        text: "Vor einer Anfrage sollte klar sein, welche Aufgabe die Website erfüllen soll und welche Inhalte, Funktionen und Folgeprozesse relevant sind.",
        bullets: [
          "Welche Leistungen sollen erklärt werden?",
          "Welche Zielgruppen sollen die Website verstehen?",
          "Gibt es bereits Texte, Bilder oder Cases?",
          "Soll die Website später um Landingpages oder Funnel erweitert werden?",
          "Wer übernimmt laufende Pflege und technische Betreuung?",
          "Soll eine bestehende Website zuerst geprüft werden?",
        ],
      },
    ],
    faqs: [
      {
        q: "Was kostet eine kleine Unternehmenswebsite?",
        a: "Der konkrete Umfang wird nach Ziel, Seitenstruktur, benötigten Inhalten und Funktionen festgelegt. Nach dem Erstgespräch erhalten Sie ein passendes Angebot.",
      },
      {
        q: "Warum gibt es keinen Einheitspreis?",
        a: "Unternehmen benötigen unterschiedliche Seiten, Inhalte, Funktionen und Integrationen. Ein Einheitspreis würde diese Unterschiede nicht seriös abbilden.",
      },
      {
        q: "Was kostet ein Website-Relaunch?",
        a: "Ein Relaunch hängt davon ab, ob nur Gestaltung und Struktur verbessert werden oder auch Inhalte, Technik, SEO-Grundlagen und Nutzerführung neu aufgebaut werden müssen.",
      },
      {
        q: "Sind SEO, AEO und LLMO enthalten?",
        a: "Die technische und inhaltliche Grundstruktur ist Bestandteil der Pakete. Laufende Content- oder SEO-Arbeit wird separat vereinbart.",
      },
      {
        q: "Was kostet eine Landingpage?",
        a: "Der Umfang einer Landingpage richtet sich nach Inhalt, Formularen, Tracking, Integrationen und möglicher Funnel-Logik. Diese Anforderungen werden vor dem Angebot gemeinsam geklärt.",
      },
      {
        q: "Gibt es laufende Kosten?",
        a: "Je nach Modell entstehen Kosten für Hosting, Wartung, Dienste und Weiterentwicklung. Diese werden transparent ausgewiesen.",
      },
    ],
    related: [
      "wann-lohnt-sich-ein-website-relaunch",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "individuelle-website-vs-baukasten",
      "website-landingpage-funnel",
    ],
  },
  "seo-aeo-llmo": {
    title: "SEO, AEO und LLMO: Was Unternehmen über moderne Sichtbarkeit wissen sollten",
    description:
      "SEO, AEO und LLMO sowie Sichtbarkeit in Google, AI Overviews und KI-Systemen verständlich erklärt.",
    intro:
      "Moderne Sichtbarkeit umfasst klassische Suchergebnisse, direkte Antworten und die Einordnung durch KI-Modelle.",
    answer:
      "SEO verbessert klassische Auffindbarkeit. AEO strukturiert direkte Antworten. LLMO hilft KI-Systemen, Unternehmen, Leistungen und Zusammenhänge eindeutiger einzuordnen. Gemeinsam schaffen diese Disziplinen starke Voraussetzungen für Sichtbarkeit bei Google und in KI-Suchen.",
    cluster: "seo-aeo-llmo",
    primaryMoneyPage: {
      href: "/webdesign",
      label: "Webdesign mit SEO-, AEO- und LLMO-Grundlagen",
      description:
        "Professionelle Unternehmenswebsites mit klarer Struktur und verständlichen Inhalten.",
    },
    secondaryLinks: [
      {
        href: "/website-check",
        label: "Website-Check",
        description:
          "Prüft, ob Inhalte, Struktur und Nutzerführung gut verständlich sind.",
      },
      {
        href: "/wissen/ki-systeme-website-verstehen",
        label: "Wie KI-Systeme Websites verstehen",
        description:
          "Vertiefung zu Entitäten, internen Links und maschineller Einordnung.",
      },
    ],
    sections: [
      {
        title: "SEO: klassische Suche",
        text: "Technik, Suchintention, Inhalte und interne Verlinkung helfen Google und anderen Suchmaschinen, relevante Seiten zu finden und zu bewerten.",
      },
      {
        title: "AEO: präzise Antworten",
        text: "AEO steht für Answer Engine Optimization. Klare Direktantworten, FAQ-Bereiche und semantische Struktur erleichtern die Nutzung in Antwortsystemen und AI Overviews.",
      },
      {
        title: "LLMO: verständlich für KI-Systeme",
        text: "LLMO beschreibt Maßnahmen, die Inhalte für große Sprachmodelle verständlicher machen. Wichtig sind eindeutige Entitäten, konsistente Leistungsbegriffe, Quellen und nachvollziehbare Zusammenhänge.",
      },
      {
        title: "Was Unternehmen praktisch tun können",
        text: "Hilfreich sind klare Leistungsseiten, präzise FAQs, saubere interne Links, technische Metadaten, strukturierte Daten und Inhalte, die echte Fragen beantworten.",
      },
      {
        title: "Typische Fehler",
        text: "Problematisch sind austauschbare Texte, widersprüchliche Leistungsbegriffe, fehlende FAQ-Struktur, versteckte Kontaktwege und Seiten, die mehrere Suchintentionen gleichzeitig bedienen wollen.",
      },
      {
        title: "Checkliste für moderne Sichtbarkeit",
        text: "Eine Website sollte nicht nur für Keywords, sondern für Verständnis optimiert werden.",
        bullets: [
          "Klare Seitenrolle je URL",
          "Direktantworten auf zentrale Fragen",
          "Konsistente Unternehmens- und Leistungsdaten",
          "Interne Links zwischen verwandten Themen",
          "FAQ-Bereiche mit echten Fragen",
          "Saubere technische Grundlagen und strukturierte Daten",
        ],
      },
    ],
    faqs: [
      {
        q: "Ersetzt AEO klassische SEO?",
        a: "Nein. AEO ergänzt SEO um klar strukturierte Antworten; technische Auffindbarkeit und Suchintention bleiben wichtig.",
      },
      {
        q: "Was ist LLMO?",
        a: "LLMO bezeichnet Maßnahmen, die Inhalte für große Sprachmodelle verständlicher und eindeutig zuordenbar machen.",
      },
      {
        q: "Kann Codavo Rankings garantieren?",
        a: "Nein. Rankings und KI-Nennungen hängen von vielen externen Faktoren ab und können nicht seriös garantiert werden.",
      },
      {
        q: "Welche Inhalte helfen KI-Systemen?",
        a: "Präzise Leistungsseiten, Direktantworten, FAQs, konsistente Unternehmensdaten und nachvollziehbare interne Links.",
      },
      {
        q: "Sind strukturierte Daten wichtig?",
        a: "Ja. Sie kennzeichnen Entitäten und Inhaltstypen, ersetzen aber keine verständlichen und hilfreichen Inhalte.",
      },
    ],
    related: [
      "ki-systeme-website-verstehen",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "website-landingpage-funnel",
    ],
  },
  "website-landingpage-funnel": {
    title: "Website, Landingpage oder Funnel: Was braucht Ihr Unternehmen?",
    description:
      "Unterschiede zwischen Unternehmenswebsite, Landingpage und Funnel mit Entscheidungslogik, Beispielen und typischen Fehlern.",
    intro:
      "Website, Landingpage und Funnel erfüllen unterschiedliche Aufgaben. Viele Unternehmen brauchen nicht sofort alles, sondern eine sinnvolle Reihenfolge.",
    answer:
      "Eine Website erklärt Unternehmen, Leistungen und Vertrauen dauerhaft. Eine Landingpage fokussiert ein einzelnes Angebot oder eine Kampagne. Ein Funnel verbindet mehrere Schritte wie Landingpage, Formular, Terminbuchung, Tracking und Folgeprozess zu einem strukturierten Anfrageweg.",
    cluster: "landingpages",
    primaryMoneyPage: {
      href: "/landingpage-erstellen-lassen",
      label: "Landingpage erstellen lassen",
      description:
        "Für einzelne Angebote, Kampagnen und fokussierte Conversion-Seiten.",
    },
    secondaryLinks: [
      {
        href: "/webdesign",
        label: "Webdesign",
        description:
          "Wenn ein vollständiger professioneller Unternehmensauftritt benötigt wird.",
      },
      {
        href: "/funnel-erstellen-lassen",
        label: "Funnel erstellen lassen",
        description:
          "Wenn mehrere Schritte, Tracking und Folgeprozesse zusammenkommen.",
      },
      {
        href: "/digitale-systeme",
        label: "Digitale Systeme",
        description:
          "Wenn Website, Funnel, Software und Prozesse gemeinsam geplant werden müssen.",
      },
    ],
    sections: [
      {
        title: "Die Unternehmenswebsite",
        text: "Eine Unternehmenswebsite schafft das dauerhafte Fundament. Sie erklärt Marke, Leistungen, Zielgruppen, Vertrauen, Cases, Kontaktwege und häufig auch Wissen oder Standortbezug.",
      },
      {
        title: "Die Landingpage",
        text: "Eine Landingpage konzentriert sich auf ein Angebot, eine Zielgruppe und eine Handlung. Sie eignet sich für Kampagnen, konkrete Dienstleistungen, lokale Aktionen oder erklärungsbedürftige Angebote.",
      },
      {
        title: "Das Funnel-System",
        text: "Ein Funnel entsteht, wenn mehrere Schritte verbunden werden: Landingpage, Formular, Terminbuchung, Bestätigung, Tracking, CRM oder Folgekommunikation.",
      },
      {
        title: "Entscheidungslogik",
        text: "Wenn Ihr Unternehmen grundsätzlich erklärt werden muss, ist die Website die Grundlage. Wenn ein einzelnes Angebot beworben wird, passt eine Landingpage. Wenn Leads qualifiziert, Termine ausgelöst oder Daten übergeben werden sollen, wird ein Funnel sinnvoll.",
        bullets: [
          "Website: dauerhaftes Unternehmensfundament",
          "Landingpage: ein Angebot, eine Zielgruppe, eine Handlung",
          "Funnel: mehrere Schritte bis zur Anfrage oder Qualifizierung",
          "Digitales System: mehrere Bausteine mit Prozess- und Datenlogik",
        ],
      },
      {
        title: "Typische Fehler",
        text: "Viele Unternehmen nutzen eine normale Unterseite als Kampagnenseite oder erwarten von einer Landingpage automatisch einen vollständigen Vertriebsprozess. Ebenso problematisch ist ein Funnel ohne klares Angebot, unklare Folgeprozesse oder fehlendes Tracking.",
      },
      {
        title: "Praxisbeispiele",
        text: "Ein Handwerksbetrieb mit mehreren Leistungen braucht meist zuerst eine Website. Ein einzelnes Förderangebot kann über eine Landingpage erklärt werden. Ein Beratungsunternehmen mit Qualifizierungsfragen, Terminbuchung und CRM-Übergabe benötigt eher einen Funnel.",
      },
      {
        title: "Checkliste für die richtige Entscheidung",
        text: "Die passende Form ergibt sich aus Ziel, Angebot, Zielgruppe und Folgeprozess.",
        bullets: [
          "Soll das gesamte Unternehmen erklärt werden?",
          "Gibt es nur ein konkretes Angebot?",
          "Soll ein Formular qualifizieren?",
          "Muss ein Termin gebucht werden?",
          "Sind Tracking und Auswertung relevant?",
          "Gibt es einen Folgeprozess nach der Anfrage?",
        ],
      },
      {
        title: "Wann mehrere Bausteine zusammengehören",
        text: "Website, Landingpage und Funnel schließen sich nicht aus. Häufig schafft die Website Vertrauen, Landingpages fokussieren Kampagnen und Funnel organisieren die nächsten Schritte.",
      },
    ],
    faqs: [
      {
        q: "Braucht jedes Unternehmen eine Website?",
        a: "Für einen dauerhaften professionellen Auftritt und mehrere Leistungen ist eine Website meist die sinnvollste Grundlage.",
      },
      {
        q: "Wann reicht eine Landingpage?",
        a: "Bei einer einzelnen Kampagne oder einem klar abgegrenzten Angebot kann eine Landingpage ausreichen.",
      },
      {
        q: "Wann ist ein Funnel sinnvoll?",
        a: "Ein Funnel ist sinnvoll, wenn Besucher über mehrere Schritte zu Lead, Termin, Bewerbung oder Registrierung geführt werden sollen.",
      },
      {
        q: "Ist eine Landingpage dasselbe wie ein Funnel?",
        a: "Nein. Eine Landingpage ist eine fokussierte Seite. Ein Funnel verbindet mehrere Schritte und häufig auch Folgeprozesse.",
      },
      {
        q: "Kann man alle drei kombinieren?",
        a: "Ja. Die Website schafft Vertrauen, Landingpages fokussieren Kampagnen und Funnel organisieren Folgeprozesse.",
      },
      {
        q: "Was sollte zuerst entstehen?",
        a: "Das hängt von Ziel, Angebot und vorhandenem Auftritt ab. Eine Analyse klärt die wirtschaftlich sinnvolle Reihenfolge.",
      },
    ],
    related: [
      "was-ist-ein-funnel",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "was-ist-ein-digitales-unternehmenssystem",
      "was-kostet-eine-website",
    ],
  },
  "individuelle-website-vs-baukasten": {
    title: "Individuelle Website oder Baukasten: Was ist sinnvoller?",
    description:
      "Baukastensystem und individuelle Website fair nach Kosten, Kontrolle und Erweiterbarkeit verglichen.",
    intro:
      "Beide Ansätze können sinnvoll sein. Entscheidend sind Anspruch, Budget, Differenzierung und zukünftige Anforderungen.",
    answer:
      "Ein Baukasten eignet sich für einfache, standardisierte Anforderungen. Individuelle Entwicklung bietet mehr Kontrolle über Design, Performance, Struktur und Erweiterbarkeit.",
    cluster: "unternehmenswebsites",
    primaryMoneyPage: {
      href: "/webdesign",
      label: "Webdesign für professionelle Unternehmenswebsites",
      description:
        "Individuelle Websites mit kontrollierter Struktur, Performance und Erweiterbarkeit.",
    },
    secondaryLinks: [
      {
        href: "/website-check",
        label: "Website-Check",
        description:
          "Einordnung, ob der bestehende Auftritt technisch und inhaltlich trägt.",
      },
      {
        href: "/hosting-wartung",
        label: "Hosting und Wartung",
        description:
          "Betrieb und Weiterentwicklung nach dem Launch einplanen.",
      },
    ],
    sections: [
      {
        title: "Wann ein Baukasten genügt",
        text: "Für kleine, zeitkritische Projekte mit Standardfunktionen kann ein Baukasten wirtschaftlich und ausreichend sein.",
      },
      {
        title: "Wann individuelle Entwicklung sinnvoll ist",
        text: "Bei eigenständiger Positionierung, hoher Performance, speziellen Integrationen oder langfristigem Ausbau bietet eigener Code mehr Kontrolle.",
      },
      {
        title: "Nicht nur den Startpreis vergleichen",
        text: "Wartung, Erweiterungen, Abhängigkeiten und spätere Migrationen gehören in eine langfristige Entscheidung.",
      },
    ],
    faqs: [
      {
        q: "Ist ein Baukasten grundsätzlich schlecht?",
        a: "Nein. Für einfache Anforderungen kann er eine sinnvolle und schnelle Lösung sein.",
      },
      {
        q: "Was ist der größte Vorteil individueller Entwicklung?",
        a: "Design, Architektur, Performance und Erweiterungen können gezielt auf das Unternehmen abgestimmt werden.",
      },
      {
        q: "Ist individueller Code wartbar?",
        a: "Ja, wenn Architektur, Abhängigkeiten und Dokumentation sauber gepflegt werden.",
      },
      {
        q: "Kann eine individuelle Website erweitert werden?",
        a: "Ja. Landingpages, Funnel, Schnittstellen und Web-App-Funktionen können geplant ergänzt werden.",
      },
      {
        q: "Welcher Ansatz ist günstiger?",
        a: "Kurzfristig ist ein Baukasten häufig günstiger. Langfristig hängt die Wirtschaftlichkeit von Anforderungen und Änderungsbedarf ab.",
      },
    ],
    related: [
      "was-kostet-eine-website",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "wann-lohnt-sich-ein-website-relaunch",
    ],
  },
  "ki-systeme-website-verstehen": {
    title: "Wie KI-Systeme wie ChatGPT oder Gemini Websites verstehen",
    description:
      "Wie klare Inhalte, Entitäten, interne Links und strukturierte Daten KI-Systemen bei der Einordnung helfen.",
    intro:
      "KI-Systeme verarbeiten Inhalte anders als Menschen, benötigen aber dieselben Grundlagen: Klarheit, Zusammenhang und verlässliche Signale.",
    answer:
      "KI-Systeme können Websites besser einordnen, wenn Leistungen eindeutig beschrieben, Fragen direkt beantwortet, Unternehmensdaten konsistent genannt und relevante Seiten sinnvoll miteinander verlinkt sind. Das verbessert die Verständlichkeit, garantiert aber keine Nennung in KI-Antworten.",
    cluster: "seo-aeo-llmo",
    primaryMoneyPage: {
      href: "/website-check",
      label: "Website-Check",
      description:
        "Prüft, ob Inhalte, Nutzerführung und technische Signale verständlich genug sind.",
    },
    secondaryLinks: [
      {
        href: "/webdesign",
        label: "Webdesign",
        description:
          "Professionelle Websites mit klarer Struktur für Nutzer, Suchmaschinen und KI-Systeme.",
      },
      {
        href: "/wissen/seo-aeo-llmo",
        label: "SEO, AEO und LLMO",
        description:
          "Grundlagen moderner Sichtbarkeit im Überblick.",
      },
      {
        href: "/digitale-systeme",
        label: "Digitale Systeme",
        description:
          "Wenn Website, Funnel, Software und Datenlogik zusammengedacht werden.",
      },
    ],
    sections: [
      {
        title: "Was KI-Systeme aus Websites ableiten",
        text: "KI-Systeme versuchen, Unternehmen, Leistungen, Zielgruppen, Orte, Begriffe und Zusammenhänge zu erkennen. Je eindeutiger Inhalte formuliert sind, desto leichter ist die maschinelle Einordnung.",
      },
      {
        title: "Entitäten klar benennen",
        text: "Firmenname, Leistungen, Zielgruppen, Standort und Verantwortlichkeiten sollten konsistent auftauchen. Widersprüchliche Begriffe erschweren die Zuordnung.",
      },
      {
        title: "Leistungsseiten und Direktantworten",
        text: "KI-Systeme profitieren von Seiten, die eine Suchintention klar bedienen. Kurze Direktantworten, präzise H2-Strukturen und FAQ-Bereiche machen Inhalte besser verständlich.",
      },
      {
        title: "Interne Verlinkung zeigt Zusammenhänge",
        text: "Links zwischen Website, Landingpage, Funnel, Software und Wissen helfen dabei, fachliche Beziehungen sichtbar zu machen. Sie sollten sparsam, aber semantisch sinnvoll gesetzt werden.",
      },
      {
        title: "Strukturierte Daten unterstützen die Einordnung",
        text: "Article-, FAQ-, Organization-, WebSite- und Breadcrumb-Daten können Entitäten und Inhaltstypen explizit markieren. Sie ersetzen aber keine hilfreichen Inhalte.",
      },
      {
        title: "Typische Fehler",
        text: "Austauschbare Claims, unklare Leistungsbegriffe, fehlende FAQs, widersprüchliche Standortangaben oder isolierte Seiten ohne interne Links machen eine Website schwerer einordenbar.",
      },
      {
        title: "Praxisbeispiel",
        text: "Eine Website für ein Beratungsunternehmen sollte nicht nur „digitale Lösungen“ sagen. Besser ist eine klare Einordnung der Leistungen, Zielgruppen, Projektarten, Beispiele, FAQ und Kontaktwege.",
      },
      {
        title: "Checkliste für KI-Verständlichkeit",
        text: "Eine Website wird verständlicher, wenn zentrale Informationen eindeutig, wiedererkennbar und strukturiert vorliegen.",
        bullets: [
          "Leistungen präzise benennen",
          "Zielgruppen und Einsatzfälle erklären",
          "Direktantworten und FAQ nutzen",
          "Interne Links semantisch setzen",
          "Metadaten und strukturierte Daten konsistent halten",
          "Keine falschen lokalen oder fachlichen Behauptungen machen",
        ],
      },
    ],
    faqs: [
      {
        q: "Liest ChatGPT jede Website direkt?",
        a: "Nicht zwingend. Zugriff, Indexierung, Datenquellen und Aktualität unterscheiden sich je nach System.",
      },
      {
        q: "Garantiert LLMO eine Nennung?",
        a: "Nein. Klare Strukturen verbessern die Einordnung, können eine Nennung aber nicht garantieren.",
      },
      {
        q: "Welche Rolle spielen FAQs?",
        a: "FAQs liefern direkte Fragen und präzise Antworten und schaffen damit gut verständliche Inhaltsblöcke.",
      },
      {
        q: "Was sind Entitäten?",
        a: "Entitäten sind eindeutig erkennbare Dinge wie Unternehmen, Leistungen, Personen, Orte oder Themen. Konsistente Entitäten helfen bei der maschinellen Einordnung.",
      },
      {
        q: "Brauche ich strukturierte Daten?",
        a: "Sie sind hilfreich, weil sie Entitäten und Inhaltstypen explizit kennzeichnen. Gute Inhalte bleiben trotzdem entscheidend.",
      },
      {
        q: "Wie prüfe ich meine Website?",
        a: "Ein Website-Check kann Inhalte, Nutzerführung, interne Verlinkung und technische Signale gemeinsam betrachten.",
      },
    ],
    related: [
      "seo-aeo-llmo",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "was-ist-ein-digitales-unternehmenssystem",
    ],
  },
  "wann-lohnt-sich-ein-website-relaunch": {
    title: "Wann lohnt sich ein Website-Relaunch?",
    description:
      "Entscheidungslogik, typische Anzeichen und Checkliste für Unternehmen, die ihre Website erneuern oder prüfen lassen möchten.",
    intro:
      "Ein Relaunch lohnt sich nicht nur, wenn eine Website alt aussieht. Entscheidend ist, ob sie Angebot, Vertrauen, Nutzerführung, Technik und nächste Schritte noch sauber unterstützt.",
    answer:
      "Ein Website-Relaunch lohnt sich, wenn der bestehende Auftritt Leistungen nicht verständlich erklärt, auf Mobile schwach funktioniert, technisch limitiert ist, kaum Anfragen unterstützt oder nicht mehr zur Qualität des Unternehmens passt. Bei unklarer Lage ist ein Website-Check der sinnvollere erste Schritt.",
    cluster: "unternehmenswebsites",
    primaryMoneyPage: {
      href: "/webdesign",
      label: "Webdesign für den Relaunch",
      description:
        "Professionelle Unternehmenswebsite neu strukturieren und technisch sauber aufsetzen.",
    },
    secondaryLinks: [
      {
        href: "/website-check",
        label: "Website-Check",
        description:
          "Sinnvoll, wenn noch nicht klar ist, ob Optimierung oder Relaunch wirtschaftlicher ist.",
      },
      {
        href: "/wissen/was-kostet-eine-website",
        label: "Website-Kosten verstehen",
        description:
          "Preisfaktoren und Projektumfang vor der Entscheidung einordnen.",
      },
    ],
    sections: [
      {
        title: "Relaunch ist mehr als neues Design",
        text: "Ein Relaunch sollte Struktur, Inhalte, Nutzerführung, Technik und Sichtbarkeit prüfen. Nur die Oberfläche zu ändern, löst selten grundlegende Probleme.",
      },
      {
        title: "Typische Anzeichen",
        text: "Ein Relaunch wird relevant, wenn Besucher das Angebot nicht schnell verstehen, Kontaktwege schwer zu finden sind, Inhalte veraltet wirken oder die Website auf mobilen Geräten nicht überzeugend funktioniert.",
        bullets: [
          "wenige oder unpassende Anfragen",
          "unklare Leistungsstruktur",
          "veraltete technische Grundlage",
          "schwache mobile Darstellung",
          "keine saubere SEO-/AEO-Struktur",
          "keine einfache Erweiterbarkeit",
        ],
      },
      {
        title: "Optimierung oder kompletter Relaunch?",
        text: "Kleinere Optimierungen reichen, wenn Struktur, Technik und Inhalte grundsätzlich tragen. Ein Relaunch ist sinnvoller, wenn zentrale Seitenrollen, Nutzerführung oder technische Grundlage neu gedacht werden müssen.",
      },
      {
        title: "Entscheidungslogik",
        text: "Prüfen Sie zuerst, ob die Website noch zur Positionierung passt. Danach folgen Nutzerführung, Content, Technik, Sichtbarkeit und Weiterentwicklung. Wenn mehrere Bereiche gleichzeitig schwach sind, ist ein Relaunch meist wirtschaftlicher als Einzelreparaturen.",
      },
      {
        title: "Typische Fehler beim Relaunch",
        text: "Häufig werden alte Inhalte ungeprüft übernommen, Rankings nicht berücksichtigt, CTAs erst spät geplant oder technische Entscheidungen nur nach Optik getroffen. Dadurch entsteht eine neue Website mit alten Problemen.",
      },
      {
        title: "Praxisbeispiel",
        text: "Ein Dienstleister mit mehreren Leistungen benötigt nach einigen Jahren oft klarere Leistungsseiten, bessere Kontaktwege, FAQ-Bereiche und eine technische Grundlage für spätere Landingpages oder Funnel.",
      },
      {
        title: "Relaunch-Checkliste",
        text: "Vor dem Relaunch sollte geklärt werden, welche Aufgabe die neue Website übernehmen soll.",
        bullets: [
          "Welche Leistungen sollen stärker sichtbar werden?",
          "Welche Seiten bringen heute Anfragen?",
          "Welche Inhalte sind veraltet?",
          "Welche Nutzerwege brechen ab?",
          "Welche technische Grundlage ist vorhanden?",
          "Welche Erweiterungen sind in den nächsten 12 Monaten wahrscheinlich?",
        ],
      },
    ],
    faqs: [
      {
        q: "Wann ist ein Relaunch besser als eine Optimierung?",
        a: "Wenn Struktur, Inhalte, Technik und Nutzerführung gleichzeitig nicht mehr tragen, ist ein Relaunch oft sinnvoller als viele kleine Einzelkorrekturen.",
      },
      {
        q: "Muss bei einem Relaunch alles neu geschrieben werden?",
        a: "Nicht zwingend. Bestehende Inhalte können übernommen werden, sollten aber auf Suchintention, Verständlichkeit und Aktualität geprüft werden.",
      },
      {
        q: "Kann ein Relaunch Rankings gefährden?",
        a: "Ja, wenn URLs, Inhalte, interne Links oder technische Signale unkontrolliert verändert werden. Deshalb braucht ein Relaunch SEO-Sorgfalt.",
      },
      {
        q: "Wie starte ich sinnvoll?",
        a: "Wenn unklar ist, ob Optimierung oder Relaunch passt, ist ein Website-Check der bessere erste Schritt.",
      },
      {
        q: "Was kostet ein Relaunch?",
        a: "Die Kosten hängen von Umfang, Content, Technik und Funktionen ab. Ein Relaunch kann kleiner oder umfangreicher als eine neue Website ausfallen.",
      },
    ],
    related: [
      "was-kostet-eine-website",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
      "individuelle-website-vs-baukasten",
    ],
  },
  "was-gehoert-auf-eine-professionelle-unternehmenswebsite": {
    title: "Was gehört auf eine professionelle Unternehmenswebsite?",
    description:
      "Die wichtigsten Inhalte, Seitenbereiche und Vertrauenselemente für professionelle Unternehmenswebsites.",
    intro:
      "Eine professionelle Unternehmenswebsite muss nicht möglichst viel zeigen. Sie muss schnell verständlich machen, wer das Unternehmen ist, welches Problem es löst und welcher nächste Schritt sinnvoll ist.",
    answer:
      "Auf eine professionelle Unternehmenswebsite gehören eine klare Positionierung, verständliche Leistungsseiten, Zielgruppen- und Nutzenargumente, Vertrauenselemente, FAQ, Cases oder Beispiele, Kontaktwege, technische SEO-/AEO-Grundlagen und eine mobile Nutzerführung ohne Hürden.",
    cluster: "unternehmenswebsites",
    primaryMoneyPage: {
      href: "/webdesign",
      label: "Webdesign für Unternehmenswebsites",
      description:
        "Die passende Leistungsseite für professionelle Website-Struktur und Umsetzung.",
    },
    secondaryLinks: [
      {
        href: "/wissen/website-landingpage-funnel",
        label: "Website, Landingpage oder Funnel",
        description:
          "Einordnung, wann eine Website allein reicht und wann weitere Bausteine sinnvoll werden.",
      },
      {
        href: "/cases",
        label: "Cases",
        description:
          "Reale Projekte mit Ausgangslage, Lösung und Ergebnis ansehen.",
      },
    ],
    sections: [
      {
        title: "Klare Startseite",
        text: "Die Startseite muss in wenigen Sekunden erklären, was das Unternehmen anbietet, für wen es arbeitet, welches Problem gelöst wird und welcher nächste Schritt sinnvoll ist.",
      },
      {
        title: "Verständliche Leistungsseiten",
        text: "Leistungen sollten nicht nur aufgezählt werden. Jede wichtige Leistung braucht Kontext, typische Anwendungsfälle, Nutzen, Grenzen und klare Kontaktwege.",
      },
      {
        title: "Vertrauenssignale",
        text: "Cases, Referenzen, reale Bilder, Methodik, klare Arbeitsweise und nachvollziehbare Projektlogik schaffen Vertrauen. Unbelegte Erfolgszahlen sollten vermieden werden.",
      },
      {
        title: "FAQ und Direktantworten",
        text: "FAQ-Bereiche beantworten echte Entscheidungsfragen. Sie helfen Nutzern, Suchmaschinen und KI-Systemen, Leistungen schneller einzuordnen.",
      },
      {
        title: "Kontakt- und Anfragewege",
        text: "Kontaktwege müssen sichtbar und eindeutig sein. Je nach Ziel passen Erstgespräch, Website-Check, Formular, Telefon oder E-Mail.",
      },
      {
        title: "Technische Grundlagen",
        text: "Mobile Darstellung, Performance, semantische Struktur, Metadaten, strukturierte Daten und klare interne Links sind Teil einer professionellen Grundlage.",
      },
      {
        title: "Typische Fehler",
        text: "Viele Websites erklären zu spät, was angeboten wird, verwenden austauschbare Claims, verstecken Kontaktwege oder mischen zu viele Zielgruppen auf einer Seite.",
      },
      {
        title: "Checkliste",
        text: "Eine professionelle Website sollte mindestens diese Fragen beantworten.",
        bullets: [
          "Was bietet das Unternehmen konkret an?",
          "Für wen ist das Angebot geeignet?",
          "Warum ist das Unternehmen vertrauenswürdig?",
          "Welche Leistungen sind besonders wichtig?",
          "Welche Fragen haben Interessenten vor der Anfrage?",
          "Wie geht es nach dem Kontakt weiter?",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie viele Seiten braucht eine Unternehmenswebsite?",
        a: "Das hängt von Leistungen, Zielgruppen und Suchintentionen ab. Häufig sind Startseite, Leistungsseiten, Cases, FAQ, Wissen und Kontakt sinnvoll.",
      },
      {
        q: "Sind FAQ wirklich wichtig?",
        a: "Ja. FAQ beantworten echte Entscheidungsfragen und helfen Nutzern sowie Such- und KI-Systemen bei der Einordnung.",
      },
      {
        q: "Braucht jede Website Cases?",
        a: "Nicht zwingend, aber reale Beispiele stärken Vertrauen. Wenn keine Cases vorhanden sind, sollte die Arbeitsweise besonders klar erklärt werden.",
      },
      {
        q: "Was ist der häufigste Fehler?",
        a: "Viele Websites sehen ordentlich aus, erklären aber nicht schnell genug, warum das Angebot relevant ist und welcher nächste Schritt sinnvoll ist.",
      },
      {
        q: "Wie bleibt eine Website erweiterbar?",
        a: "Durch klare Struktur, saubere Technik und eine Architektur, die spätere Landingpages, Funnel oder Funktionen nicht blockiert.",
      },
    ],
    related: [
      "was-kostet-eine-website",
      "wann-lohnt-sich-ein-website-relaunch",
      "website-landingpage-funnel",
      "ki-systeme-website-verstehen",
    ],
  },
  "was-ist-ein-funnel": {
    title: "Was ist ein Funnel?",
    description:
      "Funnel einfach erklärt: Aufbau, Einsatzbereiche, typische Bausteine und Abgrenzung zur Landingpage.",
    intro:
      "Ein Funnel ist kein einzelnes Design-Element. Er beschreibt einen geführten Prozess, der aus Interesse eine qualifizierte Anfrage, Buchung oder Registrierung machen soll.",
    answer:
      "Ein Funnel ist ein mehrstufiger digitaler Prozess. Er verbindet häufig Kampagne, Landingpage, Formular, Terminbuchung, Tracking und Folgekommunikation, damit Interessenten Schritt für Schritt zu einer passenden Handlung geführt werden.",
    cluster: "funnel-systeme",
    primaryMoneyPage: {
      href: "/funnel-erstellen-lassen",
      label: "Funnel erstellen lassen",
      description:
        "Individuelle Funnel-Systeme für Anfragen, Termine und digitale Kundengewinnung.",
    },
    secondaryLinks: [
      {
        href: "/landingpage-erstellen-lassen",
        label: "Landingpage erstellen lassen",
        description:
          "Der fokussierte Einstieg für Angebote und Kampagnen.",
      },
      {
        href: "/digitale-systeme",
        label: "Digitale Systeme",
        description:
          "Wenn Funnel, CRM, Tracking und interne Prozesse verbunden werden sollen.",
      },
    ],
    sections: [
      {
        title: "Funnel einfach erklärt",
        text: "Ein Funnel reduziert einen Entscheidungsweg auf sinnvolle Schritte. Jeder Schritt beantwortet eine Frage, reduziert Unsicherheit oder führt zur nächsten Handlung.",
      },
      {
        title: "Typische Bausteine",
        text: "Ein Funnel kann aus Anzeige, Landingpage, Formular, Terminbuchung, Bestätigungsseite, Tracking, CRM-Übergabe und Folgekommunikation bestehen. Nicht jedes Projekt braucht alle Bausteine.",
      },
      {
        title: "Landingpage oder Funnel?",
        text: "Eine Landingpage ist eine fokussierte Seite. Ein Funnel beginnt dort, wo mehrere Schritte und Folgeprozesse gesteuert werden müssen.",
      },
      {
        title: "Wann ein Funnel sinnvoll ist",
        text: "Ein Funnel lohnt sich, wenn Anfragen qualifiziert werden müssen, Termine gebucht werden sollen oder ein klarer Folgeprozess nach dem Formular nötig ist.",
      },
      {
        title: "Typische Fehler",
        text: "Funnel scheitern oft an unklarem Angebot, zu vielen Formularfragen, fehlendem Vertrauen, schlechtem Tracking oder einem unklaren Prozess nach dem Lead.",
      },
      {
        title: "Praxisbeispiel",
        text: "Ein Beratungsunternehmen kann eine Landingpage für ein konkretes Angebot nutzen, über ein Formular Bedarf und Unternehmensgröße abfragen und anschließend eine passende Terminbuchung anbieten.",
      },
      {
        title: "Checkliste",
        text: "Vor einem Funnel sollte der Prozess klar sein.",
        bullets: [
          "Welches Angebot steht im Fokus?",
          "Welche Zielgruppe soll erreicht werden?",
          "Welche Informationen braucht die Qualifizierung?",
          "Was passiert nach dem Formular?",
          "Welche Events sollen gemessen werden?",
          "Welche Systeme erhalten die Daten?",
        ],
      },
    ],
    faqs: [
      {
        q: "Ist ein Funnel immer sinnvoll?",
        a: "Nein. Wenn nur ein Angebot erklärt werden soll, kann eine Landingpage reichen. Ein Funnel lohnt sich bei mehreren Schritten oder Folgeprozessen.",
      },
      {
        q: "Braucht ein Funnel bezahlte Werbung?",
        a: "Nicht zwingend. Ein Funnel kann auch über organische Inhalte, E-Mail, QR-Codes oder bestehende Website-Besucher genutzt werden.",
      },
      {
        q: "Was ist der Unterschied zu einer Landingpage?",
        a: "Eine Landingpage ist eine Seite. Ein Funnel verbindet mehrere Schritte wie Formular, Terminbuchung, Tracking und Folgeprozess.",
      },
      {
        q: "Braucht ein Funnel Tracking?",
        a: "Ja, wenn Entscheidungen verbessert werden sollen. Tracking zeigt, welche Schritte funktionieren und wo Nutzer abbrechen.",
      },
      {
        q: "Kann ein Funnel an ein CRM angebunden werden?",
        a: "Ja, wenn Schnittstellen und Datenschutzanforderungen geklärt sind. Die Anbindung sollte einen erkennbaren Nutzen haben.",
      },
    ],
    related: [
      "website-landingpage-funnel",
      "was-ist-ein-digitales-unternehmenssystem",
      "was-gehoert-auf-eine-professionelle-unternehmenswebsite",
    ],
  },
  "wann-lohnt-sich-individuelle-software-fuer-kmu": {
    title: "Wann lohnt sich individuelle Software für KMU?",
    description:
      "Entscheidungslogik für mittelständische Unternehmen: Wann individuelle Software sinnvoll ist und wann Standardsoftware reicht.",
    intro:
      "Individuelle Software ist nicht für jedes Problem die richtige Lösung. Sie lohnt sich, wenn ein relevanter Prozess dauerhaft Reibung erzeugt und Standardsoftware die Aufgabe nicht wirtschaftlich abbildet.",
    answer:
      "Individuelle Software lohnt sich für KMU, wenn ein wiederkehrender, geschäftlich relevanter Prozess durch Excel, E-Mail, WhatsApp oder unpassende Standardtools gebremst wird und eine klare Lösung messbaren Steuerungsnutzen im Arbeitsalltag schafft.",
    cluster: "web-apps-software",
    primaryMoneyPage: {
      href: "/softwareloesungen-fuer-kmu",
      label: "Softwarelösungen für KMU",
      description:
        "Individuelle webbasierte Software, Schnittstellen und Automatisierung für mittelständische Unternehmen.",
    },
    secondaryLinks: [
      {
        href: "/web-app-entwicklung",
        label: "Web-App Entwicklung",
        description:
          "Für Portale, Dashboards und browserbasierte Anwendungen.",
      },
      {
        href: "/digitale-systeme",
        label: "Digitale Systeme",
        description:
          "Wenn Software mit Website, Funnel, Tracking und Prozessen zusammenspielt.",
      },
    ],
    sections: [
      {
        title: "Nicht jedes Problem braucht Individualsoftware",
        text: "Wenn ein Standardtool den Prozess gut abbildet, ist Eigenentwicklung selten sinnvoll. Individuelle Software lohnt sich erst, wenn der Prozess spezifisch, relevant und dauerhaft ist.",
      },
      {
        title: "Typische Auslöser",
        text: "Häufige Auslöser sind doppelte Datenerfassung, manuelle Übergaben, fehlende Übersicht, Medienbrüche, wiederkehrende Freigaben oder Prozesse, die in Excel, E-Mail und Chat verteilt sind.",
      },
      {
        title: "Entscheidungslogik",
        text: "Zuerst wird geprüft, wie wichtig der Prozess für das Geschäft ist. Danach folgen Häufigkeit, Fehleranfälligkeit, Nutzerrollen, Datenquellen, Schnittstellen und erwarteter Nutzen.",
      },
      {
        title: "Softwarelösung oder Web-App?",
        text: "Eine Web-App beschreibt häufig die browserbasierte Oberfläche. Eine Softwarelösung beschreibt den größeren Prozesskontext, inklusive Daten, Rollen, Schnittstellen und Automatisierung.",
      },
      {
        title: "Typische Fehler",
        text: "Risiken entstehen, wenn Unternehmen zu viele Funktionen auf einmal planen, den Prozess vorher nicht klären oder Software als Ersatz für organisatorische Entscheidungen verstehen.",
      },
      {
        title: "Praxisbeispiel",
        text: "Ein Service-Unternehmen kann Anfragen, Status, Dokumente und interne Freigaben in einem System bündeln, wenn der bisherige Ablauf über E-Mail und Tabellen zu unübersichtlich wird.",
      },
      {
        title: "Checkliste",
        text: "Diese Fragen helfen bei der Entscheidung.",
        bullets: [
          "Ist der Prozess geschäftlich relevant?",
          "Wiederholt sich die Aufgabe regelmäßig?",
          "Entstehen Fehler durch manuelle Übergaben?",
          "Sind mehrere Rollen oder Abteilungen beteiligt?",
          "Gibt es vorhandene Datenquellen oder Schnittstellen?",
          "Würde ein erster begrenzter Umfang bereits Nutzen stiften?",
        ],
      },
    ],
    faqs: [
      {
        q: "Wann ist Standardsoftware besser?",
        a: "Standardsoftware ist sinnvoll, wenn sie den Prozess gut abbildet und Anpassungen wirtschaftlich nicht nötig sind.",
      },
      {
        q: "Was ist der Unterschied zwischen Web-App und Softwarelösung?",
        a: "Eine Web-App beschreibt meist die browserbasierte Anwendung. Eine Softwarelösung umfasst zusätzlich Prozesslogik, Daten, Rollen und Schnittstellen.",
      },
      {
        q: "Muss individuelle Software groß starten?",
        a: "Nein. Ein sinnvoll abgegrenzter erster Umfang reduziert Risiko und schafft eine Grundlage für spätere Erweiterung.",
      },
      {
        q: "Kann KI Teil einer Softwarelösung sein?",
        a: "Ja, wenn Datenbasis, Datenschutz und menschliche Kontrolle geklärt sind. KI sollte einen konkreten Prozess unterstützen.",
      },
      {
        q: "Was muss vor Projektstart geklärt werden?",
        a: "Ziele, Nutzerrollen, Prozessschritte, Datenquellen, Schnittstellen, Datenschutz und Prioritäten sollten vor der Entwicklung geklärt werden.",
      },
    ],
    related: [
      "was-ist-ein-digitales-unternehmenssystem",
      "was-ist-ein-funnel",
      "website-landingpage-funnel",
    ],
  },
  "was-ist-ein-digitales-unternehmenssystem": {
    title: "Was ist ein digitales Unternehmenssystem?",
    description:
      "Wie Website, Funnel, Software, Tracking, Automatisierung und KI als zusammenhängende Architektur funktionieren.",
    intro:
      "Ein digitales Unternehmenssystem ist kein einzelnes Tool. Es beschreibt das Zusammenspiel der digitalen Bausteine, die Sichtbarkeit, Anfragen, Daten und interne Prozesse verbinden.",
    answer:
      "Ein digitales Unternehmenssystem verbindet Website, Landingpages, Funnel, Leadprozess, Software, Tracking, Automatisierung und KI-Unterstützung zu einer durchgängigen Architektur. Ziel ist, dass Anfragen, Daten und Aufgaben nicht in einzelnen Tools verloren gehen.",
    cluster: "digitalisierung-mittelstand",
    primaryMoneyPage: {
      href: "/digitale-systeme",
      label: "Digitale Systeme",
      description:
        "Architektur für Website, Funnel, Software, Tracking, Automatisierung und KI.",
    },
    secondaryLinks: [
      {
        href: "/softwareloesungen-fuer-kmu",
        label: "Softwarelösungen für KMU",
        description:
          "Wenn interne Prozesse oder Schnittstellen individuell abgebildet werden müssen.",
      },
      {
        href: "/funnel-erstellen-lassen",
        label: "Funnel erstellen lassen",
        description:
          "Wenn Anfrageprozesse mehrstufig geführt und gemessen werden sollen.",
      },
      {
        href: "/webdesign",
        label: "Webdesign",
        description:
          "Wenn die Unternehmenswebsite als sichtbares Fundament aufgebaut werden soll.",
      },
    ],
    sections: [
      {
        title: "Mehr als einzelne Tools",
        text: "Einzelne Tools können Aufgaben lösen. Wertvoll wird es, wenn Website, Funnel, Daten und interne Prozesse sinnvoll miteinander verbunden sind.",
      },
      {
        title: "Typische Bausteine",
        text: "Dazu gehören Unternehmenswebsite, Landingpages, Funnel, Formulare, Leadprozess, CRM, interne Software, Tracking, Dashboards, Automatisierung und KI-Unterstützung.",
      },
      {
        title: "Warum Übergaben entscheidend sind",
        text: "Viele Probleme entstehen nicht auf der Website, sondern danach: Anfragen werden manuell übertragen, Daten mehrfach gepflegt oder Aufgaben gehen zwischen Tools verloren.",
      },
      {
        title: "Entscheidungslogik",
        text: "Ein digitales System ist sinnvoll, wenn mehrere Bausteine voneinander abhängen. Wenn nur ein Angebot erklärt werden soll, reicht häufig eine Landingpage. Wenn Daten, Prozesse und Folgeaktionen beteiligt sind, braucht es Architektur.",
      },
      {
        title: "Typische Fehler",
        text: "Häufig werden Tools eingeführt, bevor Ziel, Datenlogik und Verantwortlichkeiten klar sind. Dadurch entstehen neue Inseln statt einfachere Abläufe.",
      },
      {
        title: "Praxisbeispiel",
        text: "Eine Website erzeugt Anfragen, ein Funnel qualifiziert Leads, ein CRM strukturiert die Weiterverarbeitung, ein Dashboard zeigt Status und KI kann Analyse oder Inhalte unterstützen.",
      },
      {
        title: "Checkliste",
        text: "Diese Fragen zeigen, ob ein digitales System sinnvoll ist.",
        bullets: [
          "Wo entstehen aktuell Anfragen?",
          "Wie werden Leads weiterverarbeitet?",
          "Welche Daten werden mehrfach gepflegt?",
          "Welche Prozesse laufen manuell?",
          "Welche Kennzahlen fehlen für Entscheidungen?",
          "Welche Automatisierung hätte einen erkennbaren Nutzen?",
        ],
      },
    ],
    faqs: [
      {
        q: "Ist ein digitales Unternehmenssystem eine Software?",
        a: "Nicht zwingend. Es kann Software enthalten, beschreibt aber vor allem das Zusammenspiel aus Website, Funnel, Daten, Prozessen und Tools.",
      },
      {
        q: "Braucht jedes Unternehmen ein digitales System?",
        a: "Nein. Wenn wenige digitale Abläufe vorhanden sind, reicht oft eine Website oder Landingpage. Ein System wird relevant, wenn mehrere Bausteine zusammenwirken müssen.",
      },
      {
        q: "Welche Rolle spielt Tracking?",
        a: "Tracking macht sichtbar, welche Quellen, Seiten und Schritte funktionieren. Es sollte zur Einwilligungslogik und zu echten Entscheidungen passen.",
      },
      {
        q: "Kann KI Teil des Systems sein?",
        a: "Ja, wenn klare Daten, Prozesse und Verantwortlichkeiten vorhanden sind. KI sollte unterstützen, nicht unklare Abläufe verdecken.",
      },
      {
        q: "Wie startet man sinnvoll?",
        a: "Sinnvoll ist eine Analyse der bestehenden Website, Tools, Datenflüsse und manuellen Übergaben. Daraus entsteht ein priorisierter Startumfang.",
      },
    ],
    related: [
      "wann-lohnt-sich-individuelle-software-fuer-kmu",
      "was-ist-ein-funnel",
      "website-landingpage-funnel",
      "ki-systeme-website-verstehen",
    ],
  },
} as const satisfies Record<string, KnowledgeArticleEntry>;

export type KnowledgeSlug = keyof typeof knowledgeArticles;
