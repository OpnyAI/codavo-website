export const automationServices = {
  prozessautomatisierung: {
    eyebrow: "Tools & Systeme vernetzen",
    title: "Prozessautomatisierung, die Ihr Team von Routine entlastet.",
    description: "Codavo verbindet bestehende Systeme und automatisiert wiederkehrende Abläufe im industriellen Mittelstand.",
    intro: "Eine Anfrage kommt per E-Mail, die Daten landen im CRM und später im ERP. Dazwischen kopiert, prüft und erinnert Ihr Team. Wir verbinden diese Schritte zu einem nachvollziehbaren Ablauf.",
    flow: ["Eingang aus Postfach oder System", "Daten prüfen und zuordnen", "An zuständiges System übergeben", "Ausnahmen dem Team vorlegen"],
    outcomes: ["Weniger doppelte Dateneingabe", "Klare Zuständigkeiten und Übergaben", "Bearbeitungsstände nachvollziehen"],
    cases: [
      { title: "Auftragsbestätigungen im Einkauf", text: "Angaben aus Bestätigungen für den Abgleich mit Bestellungen vorbereiten. Abweichungen bei Preisen, Mengen und Terminen werden dem Einkauf zur Prüfung vorgelegt." },
      { title: "Anfragen zwischen Postfach und CRM", text: "Eingehende Anfragen strukturiert erfassen, dem zuständigen Team zuordnen und den nächsten Bearbeitungsschritt anlegen." },
      { title: "Projektunterlagen übergeben", text: "Benötigte Angaben und Dokumente bündeln, fehlende Unterlagen erkennen und die Übergabe an das nächste Team vorbereiten." },
    ],
    steps: [
      { title: "Aufwand sichtbar machen", text: "Wir erfassen Häufigkeit, Bearbeitungszeit, Systeme und Ausnahmen eines konkreten Vorgangs." },
      { title: "Systeme gezielt verbinden", text: "Schnittstellen, Datenregeln und Freigaben werden geprüft. KI kommt dort hinzu, wo unstrukturierte Inhalte verarbeitet werden müssen." },
      { title: "Mit realen Fällen prüfen", text: "Ein begrenzter erster Ablauf wird mit Ihrem Team getestet. Erst danach werden weitere Vorgänge angebunden." },
    ],
    faqs: [
      { q: "Geht das auch mit älteren ERP-Systemen?", a: "Das hängt von den verfügbaren Schnittstellen, Exporten und Zugriffsrechten ab. Wir prüfen die technische Grundlage zuerst und planen keine Anbindung, deren Voraussetzungen ungeklärt sind." },
      { q: "Muss jeder Schritt automatisch laufen?", a: "Nein. Bei Sonderfällen, kritischen Änderungen oder fehlenden Daten kann eine menschliche Entscheidung vorgesehen werden. Automatisierung und Freigaben gehören zum selben Ablauf." },
      { q: "Wie messen wir den Erfolg?", a: "Zum Beispiel anhand der Bearbeitungszeit pro Vorgang, der Zahl doppelter Eingaben, offener Rückfragen und notwendiger Korrekturen. Ausgangswert und Ziel werden vor der Umsetzung vereinbart." },
    ],
  },
  'crm-automatisierung': {
    eyebrow: "CRM einrichten & automatisieren",
    title: "Ihr Vertrieb soll verkaufen. Das CRM hält den nächsten Schritt fest.",
    description: "CRM-Einrichtung, Systemanbindung und Automatisierung für strukturierte Vertriebsabläufe im Mittelstand.",
    intro: "Kontakte liegen in Tabellen, Gesprächsnotizen im Postfach und Wiedervorlagen im Kopf. Wir richten Ihr CRM so ein, dass Ihr Team Informationen wiederfindet und offene Kontakte gezielt nachfasst.",
    flow: ["Kontakt erfassen", "Informationen zuordnen", "Zuständigkeit und Status festlegen", "Nächsten Schritt nachhalten"],
    outcomes: ["Weniger manuelle CRM-Pflege", "Nachfassen zum vereinbarten Zeitpunkt", "Gemeinsamer Überblick über offene Vorgänge"],
    cases: [
      { title: "Kontakte und Unternehmen zusammenführen", text: "Vorhandene Datenquellen prüfen, relevante Felder festlegen und Importe auf Dubletten und fehlende Angaben vorbereiten." },
      { title: "Wiedervorlagen und Übergaben", text: "Aus Gesprächsergebnissen werden zuständige Personen, Aufgaben und Termine. Der weitere Ablauf hängt nicht mehr von persönlichen Merklisten ab." },
      { title: "Recherche für den Vertrieb", text: "Informationen über Zielunternehmen aus freigegebenen Quellen zusammentragen und für die Bearbeitung im CRM strukturieren." },
    ],
    steps: [
      { title: "Vertriebsablauf klären", text: "Wir verstehen, wie Kontakte entstehen, welche Status benötigt werden und wo heute Informationen verloren gehen." },
      { title: "CRM und Regeln einrichten", text: "Felder, Rollen, Aufgaben und Übergaben werden an den tatsächlichen Ablauf angepasst. Bestehende Werkzeuge werden nach technischer Prüfung angebunden." },
      { title: "Mit dem Vertrieb einführen", text: "Ihr Team testet typische Vorgänge und erhält eine verständliche Einführung. Die Nutzung entscheidet über die nächsten Verbesserungen." },
    ],
    faqs: [
      { q: "Können wir unser bestehendes CRM behalten?", a: "Wir prüfen zuerst, ob es Ihren Ablauf abbilden kann und welche Schnittstellen vorhanden sind. Ein Wechsel ist nur dann sinnvoll, wenn die Anforderungen mit dem bestehenden System nicht wirtschaftlich erfüllt werden können." },
      { q: "Übernimmt die Automatisierung die Kundenansprache?", a: "Das hängt vom vereinbarten Umfang ab. Recherche, interne Aufgaben und Wiedervorlagen sind gute Ansatzpunkte. Externe Kommunikation braucht klare Regeln, passende Freigaben und eine Prüfung der jeweiligen Rahmenbedingungen." },
      { q: "Können bestehende Tabellen übernommen werden?", a: "Ja, sofern Format und Datenqualität passen. Vor einem Import klären wir Feldzuordnung, Dubletten, Zuständigkeiten und welche Angaben tatsächlich benötigt werden." },
    ],
  },
  'ki-beratung': {
    eyebrow: "KI-Strategie & Beratung",
    title: "Wo lohnt sich KI in Ihrem Unternehmen wirklich?",
    description: "KI-Beratung für den industriellen Mittelstand: Einsatzfälle bewerten, Daten prüfen und einen wirtschaftlichen Einstieg planen.",
    intro: "Zwischen einzelnen KI-Tools und einem verlässlichen Arbeitsablauf liegen viele Entscheidungen. Wir helfen Ihnen, passende Einsatzfälle auszuwählen und den nächsten Schritt fachlich, technisch und wirtschaftlich zu planen.",
    flow: ["Engpass verstehen", "Einsatzfälle priorisieren", "Daten und Grenzen prüfen", "Umsetzungsschritt festlegen"],
    outcomes: ["Prioritäten statt einer langen Tool-Liste", "Nutzen und Kosten nachvollziehen", "Klare Grundlage für eine Umsetzung"],
    cases: [
      { title: "Einsatzfelder im Tagesgeschäft finden", text: "Gemeinsam mit Vertrieb, Einkauf oder anderen Fachbereichen untersuchen wir wiederkehrende Such-, Prüf- und Übertragungsaufgaben." },
      { title: "Vorhandene KI-Nutzung einordnen", text: "Wir schauen, welche Werkzeuge bereits genutzt werden, welche Daten darin landen und wo verbindliche Regeln und Zuständigkeiten fehlen." },
      { title: "Eine erste Umsetzung vorbereiten", text: "Für einen priorisierten Ablauf definieren wir benötigte Daten, beteiligte Systeme, menschliche Freigaben und messbare Erfolgskriterien." },
    ],
    steps: [
      { title: "Ausgangslage aufnehmen", text: "Prozesse, Ziele, vorhandene Anwendungen und die Erfahrungen Ihres Teams werden gemeinsam betrachtet." },
      { title: "Potenziale bewerten", text: "Wir vergleichen wirtschaftlichen Nutzen, Datenverfügbarkeit, technischen Aufwand und betriebliche Risiken." },
      { title: "Entscheidung ermöglichen", text: "Sie erhalten priorisierte Ansatzpunkte und einen abgegrenzten nächsten Schritt mit Voraussetzungen und Verantwortlichkeiten." },
    ],
    faqs: [
      { q: "Brauchen wir schon eine KI-Strategie?", a: "Nein. Ein konkreter Ablauf und ein fachlicher Ansprechpartner reichen als Ausgangspunkt. Aus den betrieblichen Zielen leiten wir ab, welche Rolle KI sinnvoll übernehmen kann." },
      { q: "Ist die Beratung unabhängig von einem bestimmten KI-Tool?", a: "Wir gehen von Ihrer Aufgabe und vorhandenen Systemen aus. Erst danach vergleichen wir passende Werkzeuge, Integrationen und eine mögliche individuelle Entwicklung." },
      { q: "Kann Codavo die empfohlenen Maßnahmen auch umsetzen?", a: "Ja. Codavo bietet neben der Beratung Systemintegration, CRM-Automatisierung und individuelle KI-Lösungen an. Der Umsetzungsumfang wird gesondert und nachvollziehbar vereinbart." },
    ],
  },
  'individuelle-ki-loesungen': {
    eyebrow: "Individuelle KI-Lösungen",
    title: "Individuelle KI-Lösungen für Ihren Arbeitsablauf.",
    description: "Individuelle KI-Lösungen für Dokumente, Unternehmenswissen und systemübergreifende Abläufe im industriellen Mittelstand.",
    intro: "Ein allgemeines Chatfenster löst noch keinen betrieblichen Engpass. Wir entwickeln KI-Funktionen und Anwendungen rund um Ihre Daten, vorhandenen Systeme und die Entscheidungen Ihres Teams.",
    flow: ["Freigegebene Daten bereitstellen", "Informationen mit KI vorbereiten", "Ergebnis kontrollieren", "Im Arbeitsablauf weiterverwenden"],
    outcomes: ["Wissen schneller zugänglich machen", "Dokumente strukturiert vorbereiten", "KI mit bestehenden Anwendungen verbinden"],
    cases: [
      { title: "Dokumente auswerten", text: "Angaben aus unterschiedlich aufgebauten Dokumenten extrahieren, zuordnen und für einen fachlichen Abgleich aufbereiten." },
      { title: "Internes Wissen auffindbar machen", text: "Freigegebene Unterlagen gezielt durchsuchbar machen. Zugriffsrechte, Aktualität und nachvollziehbare Quellen werden bei der Planung berücksichtigt." },
      { title: "KI-Agenten mit begrenzten Rechten", text: "Mehrere definierte Schritte verbinden: Informationen sammeln, einen Vorschlag erstellen und nach Freigabe eine Aufgabe in einem angebundenen System anlegen." },
    ],
    steps: [
      { title: "Aufgabe und Grenzen definieren", text: "Wir legen fest, was die KI leisten soll, welche Daten sie nutzen darf und wann eine menschliche Prüfung nötig ist." },
      { title: "Lösung mit Ihren Daten erproben", text: "Ein begrenzter erster Stand wird mit typischen Fällen und Abweichungen getestet. Qualität und laufende Nutzungskosten werden gemeinsam bewertet." },
      { title: "In den Alltag integrieren", text: "Die Lösung wird mit Rollen, Schnittstellen und Zuständigkeiten eingebunden. Betrieb, Fehlerbehandlung und Weiterentwicklung werden vereinbart." },
    ],
    faqs: [
      { q: "Muss ein eigenes KI-Modell trainiert werden?", a: "Für viele Aufgaben reicht die passende Einbindung vorhandener Modelle und freigegebener Unternehmensinformationen. Ob weitere Anpassungen nötig sind, wird anhand Ihrer Aufgabe geprüft." },
      { q: "Wie zuverlässig sind die Ergebnisse?", a: "KI kann Fehler machen. Deshalb testen wir mit repräsentativen Fällen und vereinbaren Qualitätskriterien, Freigaben und den Umgang mit unklaren Ergebnissen. Ein automatischer Vorschlag ersetzt keine erforderliche fachliche Entscheidung." },
      { q: "Wie wird der Zugriff auf Unternehmensdaten geregelt?", a: "Wir klären Datenquellen, Berechtigungen, Anbieter und Speicherorte mit Ihren Verantwortlichen. Die Lösung soll nur auf Informationen zugreifen können, die für die jeweilige Aufgabe freigegeben sind." },
    ],
  },
} as const;
export type AutomationServiceSlug = keyof typeof automationServices;
