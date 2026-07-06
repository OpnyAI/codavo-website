# Codavo Design System

Dieses Dokument definiert verbindliche UI- und UX-Standards für Codavo. Es ergänzt die bestehenden Content-, SEO- und Development-Standards, ohne diese zu ersetzen.

## 1. Designphilosophie

Codavo wirkt ruhig, hochwertig, präzise und technisch kompetent. Das Design soll Vertrauen aufbauen, komplexe digitale Leistungen verständlich machen und klare nächste Schritte ermöglichen.

Design ist kein Selbstzweck. Jede visuelle Entscheidung muss mindestens eines leisten:

- Orientierung verbessern
- Vertrauen erhöhen
- Inhalte leichter erfassbar machen
- Conversion unterstützen
- technische Qualität sichtbar machen

## 2. Premium-Anspruch

Premium entsteht durch:

- klare Hierarchie
- großzügigen Weißraum bzw. Dark-Space
- hochwertige Typografie
- reduzierte Animationen
- präzise Cards
- echte Referenzen
- saubere responsive Umsetzung

Premium entsteht nicht durch:

- generische Stockbilder
- übertriebene Neon-Effekte
- dekorative Mockups ohne echten Bezug
- visuelle Überladung
- aggressive CTA-Flächen

## 3. Dark Mode

Codavo nutzt ein Dark-Premium-System.

Standards:

- dunkle Grundflächen
- weiche Kontraste
- helle Headlines
- gedämpfte Fließtexte
- blaue/violette Akzente
- dezente Glow-Flächen

Dark Mode darf nicht bedeuten:

- zu geringe Lesbarkeit
- rein schwarze, harte Flächen ohne Tiefe
- zu grelle Neonoptik
- fehlende Focus-States

## 4. Typografie

Typografie soll ruhig, präzise und hochwertig wirken.

Regeln:

- große Headlines nur dort, wo echte Orientierung entsteht
- keine unnötig langen Zeilen
- klare Abstufung zwischen Headline, Subline, Body und Meta-Text
- keine künstlichen Worttrennungen auf Desktop
- lange Begriffe auf Mobile ohne horizontalen Overflow behandeln

## 5. Heading-Hierarchie

Jede Seite hat genau eine primäre H1.

Hierarchie:

- H1: Seitenversprechen oder primäre Suchintention
- H2: zentrale Abschnittsebene
- H3: Cards, Schritte, Detailpunkte
- H4 nur bei tiefer Struktur

Headlines müssen:

- konkret sein
- zur Seitenrolle passen
- nicht mehrere Suchintentionen vermischen
- keine übertriebenen Claims enthalten

## 6. Textbreiten

Textbreiten müssen Lesbarkeit priorisieren.

Standards:

- Fließtext nicht übermäßig breit ziehen
- Intro- und Lead-Texte mit begrenzter Maximalbreite setzen
- Cards nicht mit langen Textblöcken überladen
- FAQ-Antworten kurz und scanbar halten

## 7. Containerbreiten

Container sollen konsistent wirken.

Regeln:

- bestehende `container`-Klassen nutzen
- breite Layouts nur für Grids, Cases, Visuals oder komplexe Vergleiche
- schmale Container für FAQ, Artikel, CTA und erklärende Abschnitte
- keine Sonderbreiten ohne klaren Layoutgrund

## 8. Grid-System

Grids dienen der Orientierung.

Standards:

- Mobile: meist einspaltig
- Tablet: zwei Spalten, wenn Inhalte vergleichbar sind
- Desktop: drei bis fünf Spalten nur bei kurzen Cards
- gleichartige Cards in einem gemeinsamen Grid
- keine asymmetrischen Experimente ohne fachlichen Nutzen

## 9. Spacing-System

Spacing soll Sections klar trennen.

Regeln:

- jede Section beginnt sauber nach der vorherigen
- keine Sticky- oder Absolute-Layouts mit Überlappungsrisiko
- vertikale Abstände müssen auf Mobile funktionieren
- keine großen Leerflächen ohne inhaltlichen Grund
- keine künstliche Kompression, die Lesbarkeit schwächt

## 10. Cards

Cards sind zentrale UI-Elemente.

Standards:

- ruhige Flächen
- klare Innenabstände
- konsistente Border
- dezente Hintergrundtönung
- kurze Texte
- klare CTA-Positionierung

Bei CTA-Zeilen in Cards:

- Karte als Flex-Container aufbauen
- Inhaltsbereich flexibel wachsen lassen
- CTA mit `mt-auto` an den unteren Rand setzen, wenn eine bündige Ausrichtung gewünscht ist

## 11. Border Radius

Codavo nutzt weiche, moderne Radien.

Regeln:

- große Cards: großzügige Radien
- Buttons: pill oder leicht gerundet, je nach bestehendem System
- kleine Badges: kompakt und rund
- keine abrupt wechselnden Radien innerhalb derselben Section

## 12. Shadows

Shadows sind dezent einzusetzen.

Erlaubt:

- weiche Tiefenwirkung
- leichte innere Highlights
- subtile Card-Abhebung

Zu vermeiden:

- harte Schatten
- starke Drop-Shadows auf Text
- unruhige Mehrfachschatten ohne Zweck

## 13. Glassmorphism

Glassmorphism ist erlaubt, wenn es hochwertig und ruhig bleibt.

Standards:

- transparente Flächen sparsam nutzen
- Border und Blur dezent einsetzen
- Lesbarkeit immer priorisieren
- keine milchigen Flächen mit schwachem Kontrast

## 14. Buttons

Buttons müssen als Handlung klar erkennbar sein.

Standards:

- primäre CTA für Hauptaktion
- sekundäre CTA für Alternative
- konsistente Button-Klassen nutzen
- keine unnötig vielen CTA-Stile
- Hover- und Focus-States erhalten

## 15. CTA-Regeln

CTAs müssen zur Nutzerphase passen.

Typische CTAs:

- „Kostenloses Erstgespräch vereinbaren“
- „Website-Check starten“
- „Projekt besprechen“
- „Cases ansehen“
- „Artikel lesen“

Regeln:

- nicht aggressiv formulieren
- nicht mehrere Haupt-CTAs pro Section erzwingen
- Website-Check bei Analysebedarf einsetzen
- Kontakt bei konkreter Projektklärung einsetzen
- Tracking-Attribute nicht beschädigen

## 16. Icons

Icons unterstützen Orientierung, ersetzen aber keine Inhalte.

Regeln:

- Icons sparsam einsetzen
- gleiche Icon-Größe innerhalb einer Card-Gruppe
- keine dekorative Icon-Flut
- Icons müssen semantisch zur Aussage passen
- `aria-hidden` für rein dekorative Icons verwenden

## 17. Illustrationen

Erlaubt:

- abstrakte UI-Flächen
- CSS-basierte Browser-Frames
- Gradients
- Linien
- echte Case-Screenshots
- Codavo-Brand-Assets

Nicht erlaubt ohne ausdrückliche Freigabe:

- generische Stockbilder
- KI-generierte Agentur-Mockups
- fremde Produktbilder
- dekorative Screenshots ohne echten Bezug

## 18. Deutschlandkarte

Die Deutschlandkarte auf `/standorte` illustriert Angebotsabdeckung, nicht einen Hauptsitz.

Standards:

- vorhandene PNG-Datei als Basis nutzen
- keine neue Bilddatei ohne Freigabe
- keine Projektzentrale hervorheben
- kein Codavo-Marker
- keine Hub-and-Spoke-Verbindungslinien
- maximal wenige gleichwertige Marker für Wirtschaftsräume
- mobile Lesbarkeit sicherstellen

## 19. Hover-Effekte

Hover-Effekte müssen subtil sein.

Erlaubt:

- leichte Border-Aufhellung
- dezente Hintergrundänderung
- minimale Translation
- weichere Icon-Bewegung

Zu vermeiden:

- starke Skalierungen
- schnelle Bewegungen
- blinkende Effekte
- Hover-Effekte, die Layout verschieben

## 20. Animationen

Animationen sind optional, nicht notwendig.

Regeln:

- Performance priorisieren
- keine Scroll-Animationen mit Overlap-Risiko
- keine Animationen, die Inhalte schwer erfassbar machen
- reduzierte Bewegung respektieren, wenn technisch vorhanden
- Animationen dürfen mobile Darstellung nicht verschlechtern

## 21. Responsive Verhalten

Jede UI-Änderung muss auf folgenden Viewports funktionieren:

- 390 px Mobile
- 768 px Tablet
- 1440 px Desktop

Zu prüfen:

- kein horizontaler Overflow
- keine abgeschnittenen Inhalte
- keine überlappenden Sections
- lesbare Headline-Umbrüche
- Cards bleiben bedienbar

## 22. Mobile Standards

Mobile ist primär.

Regeln:

- wichtige Aussagen früh sichtbar machen
- CTAs gut erreichbar halten
- Cards einspaltig stapeln, wenn nötig
- keine zu kleinen Touch-Ziele
- Labels bei Platzmangel reduzieren statt Layout brechen
- Cookie-Banner und CTAs dürfen zentrale Inhalte nicht dauerhaft unbedienbar machen

## 23. Accessibility

Mindeststandards:

- ausreichende Kontraste
- sichtbare Focus-States
- semantische Headline-Struktur
- Buttons und Links klar unterscheidbar
- Alt-Texte für echte Bilder
- dekorative Icons mit `aria-hidden`
- keine reinen Farbunterscheidungen für wichtige Informationen

## 24. Konsistenzregeln

Vor jeder UI-Änderung prüfen:

- Gibt es bereits ein bestehendes Muster?
- Kann eine vorhandene Klasse genutzt werden?
- Wird die Seitenrolle gestärkt?
- Bleiben SEO, AEO, LLMO und Conversion intakt?
- Verändert die Änderung unbeabsichtigt andere Bereiche?

Neue UI-Muster sind nur sinnvoll, wenn bestehende Muster die Aufgabe nicht lösen.

