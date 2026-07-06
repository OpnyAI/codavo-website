# Codavo AI Workflow

Dieses Dokument definiert den verbindlichen Workflow für KI-gestützte Arbeit am Codavo-Projekt. Es ergänzt die Development Standards und gilt für Analyse, Content, SEO, UI, technische Änderungen und Dokumentation.

## 1. Grundprinzip

KI-Arbeit im Codavo-Projekt folgt einem kontrollierten Ablauf:

> Analyse → Entscheidung → Umsetzung → QA → Commit → Push → Deployment

Nicht jeder Auftrag durchläuft alle Schritte. Analyseaufträge enden bei der Empfehlung. Umsetzungsaufträge enden erst nach angemessener Qualitätssicherung.

## 2. Analyse vor Umsetzung

Vor jeder relevanten Änderung ist der bestehende Projektstand zu prüfen.

Zu prüfen:

- betroffene Dateien
- bestehende Komponenten
- Seitenrolle
- SEO-/AEO-/LLMO-Kontext
- bestehende Inhalte
- vorhandene Diffs
- Risiken für Layout, Routing, Tracking oder Indexierung

Keine Annahmen treffen, wenn die Information im Projekt überprüfbar ist.

## 3. Minimal-Change-Prinzip

Änderungen müssen so klein wie möglich bleiben.

Regeln:

- nur Dateien ändern, die für die Aufgabe nötig sind
- keine Refactorings ohne Auftrag
- keine Designänderungen außerhalb des Zielbereichs
- keine neuen Seiten ohne ausdrückliche Freigabe
- keine URL-Änderungen ohne ausdrückliche Freigabe
- keine Navigation ändern, wenn nicht gefordert

## 4. Wann nur analysiert wird

Nur analysieren, wenn der Auftrag Formulierungen enthält wie:

- „Noch nichts ändern“
- „Nur analysieren“
- „Keine Dateien ändern“
- „Prüfe ausschließlich“
- „Liefere nur Analyse“

In diesen Fällen sind nicht erlaubt:

- Codeänderungen
- Contentänderungen
- neue Dateien
- Formatierungen
- automatische Fixes

## 5. Wann Änderungen erlaubt sind

Änderungen sind erlaubt, wenn der Auftrag eindeutig eine Umsetzung verlangt.

Beispiele:

- „Setze um“
- „Behebe“
- „Ergänze“
- „Erstelle“
- „Passe an“

Auch dann gilt:

- Scope beachten
- nur genannte Dateien ändern, wenn Dateien explizit begrenzt wurden
- bestehende Standards einhalten
- keine stillen Zusatzänderungen vornehmen

## 6. Dokumentationspflicht

Jede Umsetzung wird am Ende dokumentiert.

Dokumentation enthält:

- geänderte Dateien
- konkrete Änderungen
- bewusst nicht umgesetzte Punkte
- Prüfungsresultate
- offene manuelle Review-Punkte

Bei reiner Dokumentationsarbeit:

- neu erstellte Dateien
- Kapitelübersicht
- Bestätigung, dass keine Website-Dateien geändert wurden

## 7. QA-Checkliste

Standard-QA je nach Änderung:

- TypeScript
- ESLint
- Production Build
- `git diff --check`
- responsive Prüfung bei UI-Änderungen
- Linkprüfung bei interner Verlinkung
- Sitemap-/robots-Prüfung bei SEO-Technikänderungen
- Sichtprüfung bei visuellen Änderungen

## 8. Build-Check

Production Build:

```bash
npm run build
```

Regeln:

- Build ist bei technischen Änderungen Pflicht
- Build-Fehler müssen dokumentiert oder behoben werden
- wenn ein Fehler nicht durch die aktuelle Änderung verursacht wurde, sauber benennen
- keine Build-Probleme verschweigen

## 9. ESLint

Linting:

```bash
npm run lint
```

Regeln:

- keine neuen Lint-Fehler einführen
- bestehende Fehler nicht ungefragt refactoren
- bei reiner Dokumentation ist ESLint normalerweise nicht erforderlich

## 10. TypeScript

TypeScript-Check:

```bash
npx tsc --noEmit
```

Regeln:

- neue Typen sauber definieren
- zentrale Datenstrukturen nicht untypisiert erweitern
- optionale Felder nur verwenden, wenn Komponenten damit umgehen können
- keine `any`-Ausweichlösungen ohne starken Grund

## 11. Responsive Check

Bei UI-Änderungen prüfen:

- 390 px
- 768 px
- 1440 px

Zu kontrollieren:

- kein horizontaler Overflow
- keine abgeschnittenen Inhalte
- keine überlappenden Sections
- CTA-Positionen
- lesbare Headline-Umbrüche
- Cookie-Banner-Auswirkungen, falls relevant

## 12. Git-Workflow

Vor Änderungen:

- `git status --short` prüfen
- relevante Diffs prüfen
- bestehende Nutzeränderungen respektieren

Während der Arbeit:

- keine fremden Änderungen überschreiben
- keine destruktiven Befehle ohne Freigabe
- keine pauschalen Formatierungen über das ganze Projekt

Nach Änderungen:

- Diff prüfen
- QA ausführen
- Ergebnis dokumentieren

## 13. Commit-Regeln

Commits erfolgen nur, wenn der Nutzer es verlangt oder freigibt.

Commit-Standards:

- kleine, thematische Commits
- klare Commit-Message
- keine Vermischung unabhängiger Änderungen
- keine ungewollten Dateien aufnehmen
- keine temporären Dateien committen

## 14. Push-Regeln

Push erfolgt nur mit ausdrücklicher Freigabe.

Vor Push:

- Status prüfen
- Commit prüfen
- Branch prüfen
- Build-/QA-Status dokumentieren

Keine automatischen Pushes nach lokaler Umsetzung.

## 15. Deployment

Deployment erfolgt nur mit ausdrücklicher Freigabe.

Vor Deployment:

- Production Build erfolgreich
- kritische Seiten geprüft
- SEO-relevante Dateien geprüft, falls betroffen
- keine bekannten Blocker
- offene manuelle Review-Punkte dokumentiert

## 16. Umgang mit SEO-Aufgaben

SEO-Aufgaben müssen Seitenrollen respektieren.

Regeln:

- keine Keyword-Kannibalisierung erzeugen
- keine Doorway Pages erstellen
- keine Duplicate-Content-Strategie
- keine noindex-Seiten in Sitemap
- keine `new Date()`-Werte in Sitemap
- keine falschen lokalen Angaben
- strukturierte Daten nicht duplizieren

Bei Content-SEO:

- Suchintention klären
- primäre Money Page festlegen
- interne Linklogik definieren
- Claims prüfen

## 17. Umgang mit UI-Aufgaben

UI-Aufgaben müssen das bestehende Dark-Premium-System respektieren.

Regeln:

- keine neuen Designideen einführen, wenn Optimierung genügt
- keine generischen Bilder ergänzen
- bestehende Komponenten und Klassen bevorzugen
- mobile Darstellung priorisieren
- Overlap- und Overflow-Risiken prüfen
- Accessibility nicht verschlechtern

## 18. Umgang mit Content-Aufgaben

Content-Aufgaben müssen Content Bible und Copywriting-Standards einhalten.

Regeln:

- „Sie“-Ansprache
- keine übertriebenen Claims
- keine erfundenen Kennzahlen
- keine Testimonials ohne Quelle
- klare Direktantworten
- fachliche Abgrenzung der Seitenrollen
- interne Links sparsam und sinnvoll

## 19. Umgang mit neuen Features

Neue Features brauchen:

- klare Zielbeschreibung
- betroffene Seiten oder Komponenten
- Risikoabschätzung
- Umsetzungsgrenze
- QA-Plan

Nicht erlaubt ohne Freigabe:

- neue Libraries
- neue Routen
- neue Datenmodelle mit Seiteneffekten
- externe Integrationen
- Tracking-Änderungen mit Consent-Risiko

## 20. Umgang mit Refactoring

Refactoring ist nur erlaubt, wenn:

- es ausdrücklich beauftragt wurde
- es zur sicheren Umsetzung notwendig ist
- es lokal begrenzt bleibt

Nicht erlaubt:

- „nebenbei“ Komponenten neu strukturieren
- ganze Seiten umbauen
- Styling-System wechseln
- Content und Technik gleichzeitig unnötig breit verändern

## 21. Standardworkflow

Verbindlicher Workflow:

1. Analyse
2. Entscheidung
3. Umsetzung
4. QA
5. Commit
6. Push
7. Deployment

Details:

- Analyse: Bestand prüfen, Scope verstehen, Risiken erkennen.
- Entscheidung: klären, ob Analyse reicht oder Umsetzung erlaubt ist.
- Umsetzung: kleinste sinnvolle Änderung im erlaubten Scope.
- QA: TypeScript, ESLint, Build und je nach Aufgabe weitere Checks.
- Commit: nur nach Freigabe.
- Push: nur nach Freigabe.
- Deployment: nur nach Freigabe.

## 22. Definition of Done

Eine Aufgabe ist abgeschlossen, wenn:

- der definierte Scope erfüllt ist
- keine unerlaubten Dateien geändert wurden
- relevante QA erfolgreich ist oder Blocker klar dokumentiert sind
- Änderungen kurz erklärt sind
- bewusst nicht umgesetzte Punkte genannt sind
- offene Review-Punkte benannt sind
- keine erfundenen Inhalte, Kennzahlen oder Claims ergänzt wurden

