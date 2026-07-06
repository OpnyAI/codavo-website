# Codavo Development Standards

Diese Standards definieren technische und organisatorische Regeln für zukünftige Arbeiten am Codavo-Projekt.

## 1. Grundprinzipien

Jede Änderung soll:

- minimalinvasiv sein
- die bestehende Architektur respektieren
- keine unnötigen Refactorings auslösen
- keine bestehenden URLs ändern
- SEO, AEO, LLMO und Conversion nicht schwächen
- TypeScript, ESLint und Production Build bestehen

Bei unklarer Aufgabenstellung gilt:

- erst analysieren
- dann gezielt ändern
- keine implizite Erweiterung des Scopes

## 2. Projektkontext

Das Projekt basiert auf Next.js mit App Router, React-Komponenten, TypeScript und Tailwind-ähnlichen Utility-Klassen.

Wichtige Bereiche:

- `src/app/` für Routes und Pages
- `src/components/` für wiederverwendbare Komponenten
- `src/lib/` für zentrale Daten und Konfiguration
- `public/` für statische Assets
- `src/app/sitemap.ts` für Sitemap
- `src/app/robots.ts` für robots.txt

## 3. Arbeitsgrenzen

Wenn eine Aufgabe bestimmte Dateien nennt, dürfen nur diese Dateien geändert werden.

Nicht ohne ausdrückliche Freigabe:

- neue Seiten erstellen
- URLs ändern
- Navigation ändern
- Header oder Footer ändern
- Preise ändern
- FAQ umbauen
- strukturierte Daten verändern
- Sitemap oder robots.txt verändern
- neue Libraries installieren
- generische Bilder hinzufügen
- große Design-Refactorings durchführen

## 4. Qualitätsprüfung

Standardprüfungen nach technischen Änderungen:

```bash
npx tsc --noEmit
npm run lint
npm run build
git diff --check
```

Bei UI-Änderungen zusätzlich prüfen:

- Mobile 390 px
- Tablet 768 px
- Desktop 1440 px
- kein horizontaler Overflow
- keine überlappenden Sections
- keine abgeschnittenen Cards
- keine Layoutverschiebungen außerhalb des Zielbereichs

## 5. Git- und Worktree-Regeln

Der Worktree kann bereits Änderungen enthalten.

Regeln:

- bestehende Änderungen nicht überschreiben
- keine fremden Änderungen zurücksetzen
- keine destruktiven Git-Befehle ohne ausdrückliche Freigabe
- vor Änderungen relevante Diffs prüfen
- am Ende geänderte Dateien dokumentieren

## 6. Styling-Standards

Bestehendes Dark-Premium-Design beibehalten.

Erlaubt:

- vorhandene Section- und Container-Klassen
- bestehende Card-Stile
- dezente Gradients
- CSS-basierte UI-Flächen
- Browser-Frames
- Linien, Glows und abstrakte Visuals

Nicht ohne Freigabe:

- neue Bildwelten
- Stockbilder
- KI-generierte Agentur-Mockups
- dekorative Screenshots
- fremde Produktbilder
- große visuelle Neuausrichtungen

## 7. Bild- und Asset-Regeln

Erlaubte visuelle Assets:

- vorhandene echte Case-Screenshots aus `/public/cases`
- vorhandene Codavo-Brand-Assets
- abstrakte CSS-Visuals
- Gradients, Linien, Browser-Frames und UI-Previews

Nicht erlaubt ohne ausdrückliche Freigabe:

- neue generische Bilder
- Stockfotos
- KI-generierte Mockups
- fremde Produktbilder
- dekorative Screenshots ohne echten Bezug

OpenGraph:

- konsistent `/og.jpg` verwenden
- keine Referenzen auf `/og.png`

## 8. Komponenten- und Layout-Regeln

Layoutänderungen sollen lokal begrenzt bleiben.

Zu vermeiden:

- `position: absolute` ohne reservierte Containerhöhe
- Sticky-Layouts, die Folge-Sections überlagern
- Scroll-Animationen mit unklarer Parent-Höhe
- große `min-height`-Experimente
- Overflows auf Mobile

Bei Cards:

- gleiche Höhen nur bei echtem Nutzen erzwingen
- CTA-Ausrichtung über Flexbox lösen
- keine künstlichen Abstände außerhalb des Zielbereichs verändern

## 9. Tracking-Standards

Einheitliches Event-Schema:

- `cta_contact_click`
- `cta_website_check_click`
- `cta_cases_click`
- `nav_contact_click`
- `mobile_cta_click`
- `website_check_submit`

Regeln:

- `data-track-event` für DOM-Tracking verwenden
- Consent-Logik respektieren
- Google Ads Konfiguration nicht beschädigen
- keine doppelte Tracking-Logik einbauen
- zentrale CTAs mit passenden Labels versehen

## 10. SEO-Technikstandards

Zentrale SEO-Konfiguration nutzen für:

- Domain
- Firmenname
- Beschreibung
- OG-Bild
- Adresse
- Social Links
- Standard Title/Description

Sitemap:

- keine `new Date()`-Werte
- stabile `lastModified`-Werte
- noindex-Seiten nicht aufnehmen
- strategische Prioritäten einhalten

Robots:

```txt
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: https://www.codavo-webstudio.de/sitemap.xml
```

Manifest:

- `theme_color`: `#09090B`
- `background_color`: `#09090B`
- Name: `Codavo Webstudio` oder `Codavo`
- Short name: `Codavo`

## 11. Strukturierte Daten

Grundregeln:

- keine doppelten JSON-LD-Blöcke
- Organization, WebSite und LocalBusiness konsolidiert behandeln
- FAQ nur aus sichtbaren FAQs generieren
- Breadcrumbs konsistent halten
- LocalBusiness nur mit echter Adresse
- Stuttgart und andere Städte nicht als falsche Geschäftsadresse darstellen

## 12. Content- und Code-Kopplung

Wenn Content-Daten zentral liegen, dort erweitern statt Text mehrfach zu duplizieren.

Beispiele:

- Case-Daten in `src/components/case-studies-data.ts`
- Wissensartikel in `src/lib/knowledge.ts`
- Standortdaten in `src/lib/locations.ts`

Neue Felder nur ergänzen, wenn:

- sie tatsächlich ausgespielt werden
- TypeScript sauber bleibt
- bestehende Komponenten nicht unnötig angepasst werden

## 13. Dokumentationspflicht nach Änderungen

Jede Umsetzung soll kurz dokumentieren:

- geänderte Dateien
- was geändert wurde
- bewusst nicht umgesetzte Punkte
- Prüfungsresultate
- offene manuelle Review-Punkte

Bei reiner Analyse:

- keine Dateien ändern
- klare Empfehlungen priorisieren
- keine Code-Vorschläge liefern, wenn ausdrücklich nicht gewünscht

