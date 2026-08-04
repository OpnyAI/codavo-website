# Tracking- und Retargeting-Setup

Stand: 4. August 2026

## Sicherheits- und Freigabegrenze

- Keine kostenpflichtige Kampagne wurde erstellt, aktiviert oder veröffentlicht.
- Retargeting-Anzeigen werden erst nach ausdrücklicher Budget- und Kampagnenfreigabe live geschaltet.
- Die Meta Business Tools Terms wurden nach ausdrücklicher Freigabe des Kontoinhabers akzeptiert. Weitere Plattformverträge werden nicht ohne separate Freigabe bestätigt.

## Bestandsaufnahme

### Website und Google Tag Manager

- Auf der Live-Website ist der Container `GTM-M2SSF8SZ` eingebunden.
- Zusätzlich war das Google-Tag `AW-18059484807` direkt im Website-Code vorgesehen. Bei aktivem GTM konnte dies zu doppelten Google-Aufrufen führen.
- Bereits vorhandene Datenebenen-Ereignisse umfassen unter anderem Kontakt-, Telefon-, WhatsApp-, Website-Check- und Formularaktionen.
- Der bisherige Cookie-Banner bot nur Statistik-Zustimmung an und erklärte ausdrücklich, dass keine Marketing-Cookies eingesetzt werden. Das entsprach nicht dem geplanten Retargeting-Setup.
- Vor den lokalen Änderungen wurden keine Meta-, LinkedIn- oder TikTok-Tags auf der ausgelieferten Website erkannt.

### Google Ads

- Google-Tag-ID: `AW-18059484807`.
- Vorhandene Kontakt-Conversion: `AW-18059484807/bZjUCLuPwJQcEIe9t6ND`.
- Google-Ads-Konto: `817-373-9166`.
- Der verwendete und bestätigte Google-Zugang ist `mehmet_ctskl@hotmail.de`.
- GTM-Konto `Codavo Webstudio`, Konto-ID `6340470404`; Container `www.codavo-webstudio.de`, Container-ID `GTM-M2SSF8SZ` / `244241771`.
- GA4-Mess-ID: `G-97DHW1DWSM`.
- Im getrennten GTM-Arbeitsbereich `Codavo Tracking 2026` wurden ein consent-gebundenes Meta-Basispixel und ein consent-gebundenes Google-Ads-Basis-/Remarketing-Tag ergänzt. Die zwei vorhandenen Analytics-Tags und die älteren, unveröffentlichten Telefon-Änderungen im Standard-Arbeitsbereich blieben unverändert.

### Meta

- Business-Portfolio-ID: `1471546707071946`.
- Werbekonto `Codavo Webstudio Ads`, ID `3112738788919713`, ist vorhanden. Es wurde keine Kampagne aktiviert.
- Die Domain `codavo-webstudio.de` wurde als Business-Asset angelegt, Asset-ID `1628145275545570`.
- Der notwendige Meta-Verifizierungscode wurde in die Website aufgenommen und ist auf der Live-Domain ausgeliefert. `codavo-webstudio.de` wurde anschließend in Meta erfolgreich als `Verified` bestätigt.
- Der Datensatz `Codavo Webstudio Pixel`, ID `1592509072445980`, wurde erstellt und mit dem Werbekonto verbunden.
- Die Meta Business Tools Terms wurden nach ausdrücklicher Freigabe akzeptiert. Automatisches erweitertes Matching bleibt deaktiviert.
- Das Basispixel ist im GTM veröffentlicht und an `ad_storage`, `ad_user_data` und `ad_personalization` gebunden. Im positiven Tag-Assistant-Test wurde `PageView` nach Marketing-Einwilligung genau einmal ausgelöst.
- Die manuelle Conversions-API-Anbindung über die vorhandenen Next.js-Formularrouten ist umgesetzt. Erfolgreiche Kontaktbewerbungen und Website-Checks werden nach Marketing-Einwilligung als Meta-Standardereignis `Lead` browser- und serverseitig mit identischer `event_id` gesendet. Nach einer erfolgreichen Kontaktbewerbung wird auf die eigenständige, nicht indexierbare Seite `/danke` weitergeleitet; dort wird das Browser-Event einmalig mit der bereits serverseitig verwendeten Event-ID ausgelöst. Ein direkter oder erneuter Aufruf von `/danke` erzeugt ohne den kurzlebigen Erfolgsnachweis aus dem Formular kein zusätzliches `Lead`-Event. Der Zugriffsschlüssel wurde am 4. August 2026 erzeugt und ausschließlich als sensibles, auf Produktion begrenztes Vercel-Secret gespeichert.
- Im Business-Portfolio fehlen derzeit unter anderem verifizierte Firmendaten, eine primäre Facebook-Seite und eine verpflichtende Zwei-Faktor-Authentifizierung.

### LinkedIn

- Die Codavo-Unternehmensseite ist vorhanden.
- Werbekonto `Codavo Webstudio Ads`, ID `549790685`, ist vorhanden und mit der Codavo-Unternehmensseite, ID `111746545`, verknüpft.
- Zwei-Faktor-Authentifizierung ist aktiv; es wurden keine Kampagnen, Ausgaben oder Zahlungsdaten angelegt.
- LinkedIn kennzeichnet das Konto als `Gesperrt`. Der direkte Aufruf der Insight-Tag-Verwaltung wird deshalb blockiert; Partner-ID und Insight Tag können erst nach Entsperrung eingerichtet werden.

### TikTok

- Die TikTok-for-Business-Anmeldung ist erfolgt; das Werbekonto `Codavo_adv` mit Advertiser-ID `7669851332597383189` wurde angelegt.
- TikTok führt anschließend direkt in die Kampagnenerstellung. Dieser Schritt wurde bewusst nicht fortgesetzt: Pixel-/GTM-Einrichtung und Test werden wie vereinbart später abgeschlossen, und es wurde keine Kampagne erstellt oder aktiviert.

## Lokal umgesetzte Website-Änderungen

- Google-Tags werden bei vorhandenem GTM nicht zusätzlich direkt geladen, um doppelte Messungen zu vermeiden.
- Consent Mode v2 bleibt standardmäßig für `analytics_storage`, `ad_storage`, `ad_user_data` und `ad_personalization` abgelehnt.
- Der Cookie-Banner bietet jetzt `Alle akzeptieren`, `Nur Statistik` und `Ablehnen` sowie dauerhaft erreichbare Cookie-Einstellungen.
- Meta, LinkedIn und TikTok werden im Banner und in der Datenschutzerklärung als Marketing-Dienste benannt.
- Google-Ads-Conversions werden nur noch ausgelöst, wenn alle erforderlichen Marketing-Zustimmungen erteilt sind.
- Nach Marketing-Einwilligung wird die First-Touch-Herkunft eines Besuchs für höchstens zwölf Stunden im Sitzungsspeicher gehalten. Kontaktanfragen enthalten dadurch Landingpage, Referrer-Domain, UTM-Parameter und vorhandene Plattform-Klick-IDs auch nach interner Navigation.
- Der Meta-Domain-Verifizierungscode wurde in die Website-Metadaten aufgenommen.
- Die Datenschutzerklärung wurde um Google Ads, Meta Pixel, Meta Conversions API, LinkedIn Insight Tag und TikTok Pixel ergänzt. Vor der Veröffentlichung wird eine rechtliche Prüfung empfohlen.

## Umgesetzte GTM-Konfiguration

Alle Marketing-Tags müssen zusätzlich zur Plattformkonfiguration im GTM an Marketing-Zustimmung gebunden werden. Nicht-Google-Tags dürfen weder beim ersten Seitenaufruf noch bei einer nachträglichen Zustimmungsänderung ohne Einwilligung feuern.

1. Das vorhandene Google-Tag `GA4 – Base Configuration` und das vorhandene WhatsApp-Ereignis wurden unverändert übernommen.
2. `Google Ads - Base Tag - Remarketing` wurde für `AW-18059484807` ergänzt.
3. `Meta - Base Pixel - PageView` wurde für Pixel `1592509072445980` ergänzt.
4. Der Trigger `Consent - Marketing granted or loaded` reagiert auf `consent_loaded` und `consent_updated`.
5. Beide Marketing-Tags verlangen zusätzlich `ad_storage`, `ad_user_data` und `ad_personalization` und werden pro Seitenaufruf höchstens einmal ausgeführt.
6. LinkedIn bleibt bis zur Entsperrung technisch blockiert. TikTok wurde auf ausdrücklichen Wunsch zurückgestellt. Beide Plattformen wurden deshalb nicht mit Platzhalter-IDs veröffentlicht.
7. Der GTM-Arbeitsbereich enthielt genau drei isolierte Änderungen; es wurden keine vorhandenen Tags oder Trigger gelöscht oder verändert.
8. Der Arbeitsbereich wurde am 3. August 2026 als GTM-Version 4 `Codavo Meta + Google Ads Tracking 2026-08-03` veröffentlicht.

## Ereignis- und Conversion-Plan

| Website-Aktion | Datenebenen-Ereignis | Messziel |
| --- | --- | --- |
| Kontakt-CTA | `cta_contact_click` / `nav_contact_click` / `mobile_cta_click` | Mikro-Conversion, nicht als Lead doppelt zählen |
| Telefon | vorhandenes Telefon-Conversion-Ereignis | qualifizierte Kontaktabsicht |
| WhatsApp | vorhandenes WhatsApp-Conversion-Ereignis | qualifizierte Kontaktabsicht |
| Website-Check abgesendet | `website_check_submit` | Meta `Lead` per Pixel + Conversions API nach erfolgreicher Übermittlung und Marketing-Einwilligung |
| Kontaktbewerbung abgesendet | `contact_application_submit`, anschließend `/danke` | Meta `Lead` per Pixel auf `/danke` + Conversions API nach erfolgreicher Übermittlung und Marketing-Einwilligung |
| Referenzen angesehen | `cta_cases_click` | Interesse, keine primäre Conversion |

Die endgültige Zuordnung zu Meta-, LinkedIn-, TikTok- und Google-Events wird erst nach Prüfung der tatsächlichen Pixel-/Conversion-IDs veröffentlicht.

## Zurückgestellte Retargeting-Zielgruppen

Die Zielgruppendefinition und Zielgruppen-Erstellung wurden auf ausdrücklichen Wunsch zurückgestellt. Sie werden später anhand der Baulig-Vorgaben umgesetzt; aktuell wurde keine neue Retargeting-Zielgruppe angelegt.

Als bisherige Arbeitsnotizen, noch nicht als freigegebene Definition:

- Alle Besucher: 30, 90 und 180 Tage.
- Besucher wichtiger Leistungs- und Referenzseiten.
- Website-Check begonnen oder Kontakt-CTA genutzt, aber kein erfolgreiches Formularereignis.
- Erfolgreiche Leads/Conversions als Ausschlusszielgruppe, 180 Tage.
- Plattformübergreifend gleiche Logik, soweit die jeweilige Plattform und Zielgruppengröße dies erlauben.

Es werden keine sensiblen Merkmale oder daraus abgeleitete Zielgruppen verwendet.

## Abnahmetests

- Ohne Einwilligung: Consent-Status bleibt abgelehnt; keine zustimmungspflichtigen Statistik-/Marketing-Cookies und keine Meta-, LinkedIn- oder TikTok-Tags. Google-Tags dürfen nur das konfigurierte, cookielose Consent-Mode-Verhalten ausführen.
- Nur Statistik: Statistikmessung erlaubt; Google Ads, Meta, LinkedIn und TikTok bleiben blockiert.
- Alle akzeptieren: jedes Basis-Tag genau einmal; Consent-Update wird korrekt verarbeitet.
- Widerruf/Änderung: Einstellungen bleiben erreichbar und neue Aufrufe respektieren die geänderte Auswahl.
- Formulare: Conversion nur nach erfolgreicher Übermittlung, nicht beim bloßen Klick.
- Meta-Lead-Deduplizierung: Browser- und Serverereignis verwenden denselben Ereignisnamen `Lead` und dieselbe eindeutige `event_id`.
- Telefon/WhatsApp/CTAs: höchstens eine vorgesehene Conversion pro Aktion.
- Google Tag Assistant/GTM Preview sowie die Diagnosetools aller Plattformen zeigen die erwarteten Events ohne Duplikate.
- Testdaten werden als Test markiert bzw. vor Kampagnenauswertung ausgeschlossen, soweit die Plattform dies unterstützt.

### Live-Prüfung im Google Tag Assistant

- Der richtige Container `GTM-M2SSF8SZ`, Google Ads `AW-18059484807` und GA4 `G-97DHW1DWSM` wurden auf `www.codavo-webstudio.de` erkannt.
- Im geprüften Negativfall standen `ad_storage`, `analytics_storage`, `ad_user_data` und `ad_personalization` vollständig auf `Abgelehnt`.
- Dabei feuerte ausschließlich die vorhandene GA4-Basiskonfiguration; Meta und Google Ads blieben blockiert. Der Consent-Negativtest ist damit bestanden.
- Im Positivfall wechselten alle vier Consent-Signale auf `Gewährt`. `Meta - Base Pixel - PageView` und `Google Ads - Base Tag - Remarketing` wurden jeweils genau einmal ausgelöst.
- Der Auslöser wurde so korrigiert, dass beide Marketing-Tags ausschließlich auf `consent_loaded` beziehungsweise `consent_updated` reagieren; dadurch feuern sie nach einer nachträglichen Einwilligung zuverlässig und nicht vorher.
- GTM-Version 4 ist live. Sie enthält ausschließlich den neuen Consent-Trigger sowie das Meta- und das Google-Ads-Basis-Tag.

## Bereits geprüfte Qualität

- Lint erfolgreich.
- Produktions-Build erfolgreich, 94 Seiten erzeugt.
- Lokaler UI-Test für Ablehnen, Statistik-Zustimmung, vollständige Zustimmung und erneutes Öffnen der Cookie-Einstellungen erfolgreich.
- Meta-Verifizierungs-Metatag lokal mit dem erwarteten Inhalt vorhanden.
- Website-Änderungen auf der Produktions-Domain veröffentlicht; GTM-Container, Cookie-Einstellungen und Meta-Verifizierungs-Metatag live erkannt.

## Noch benötigte Zugriffe und Entscheidungen

1. TikTok-Pixel, GTM-Einbindung und Plattformtest später abschließen; Werbekonto `Codavo_adv` / `7669851332597383189` ist bereits angelegt.
2. LinkedIn-Werbekonto `549790685` entsperren lassen; erst danach Insight Tag und Partner-ID einrichten.
3. Firmendaten, primäre Meta-Seite und Zwei-Faktor-Pflicht im Meta Business-Portfolio festlegen.
4. Datenschutztext rechtlich prüfen.
5. Zielgruppen später anhand der Baulig-Vorgaben definieren und anlegen.
6. Erst nach vollständigem Test Freigabe für Kampagnenentwürfe, Tagesbudget und Live-Schaltung einholen.
