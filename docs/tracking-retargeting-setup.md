# Tracking- und Retargeting-Setup

Stand: 3. August 2026

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
- Der notwendige Meta-Verifizierungscode wurde lokal in die Website aufgenommen. Die Domain bleibt bis zur Veröffentlichung und anschließenden Prüfung in Meta unbestätigt.
- Der Datensatz `Codavo Webstudio Pixel`, ID `1592509072445980`, wurde erstellt und mit dem Werbekonto verbunden.
- Die Meta Business Tools Terms wurden nach ausdrücklicher Freigabe akzeptiert. Automatisches erweitertes Matching bleibt deaktiviert.
- Das Basispixel ist im GTM-Arbeitsbereich vorbereitet und an `ad_storage`, `ad_user_data` und `ad_personalization` gebunden. Meta zeigt noch keine Aktivität, solange die GTM-Version nicht veröffentlicht und Marketing-Einwilligung nicht erteilt wurde.
- Im Business-Portfolio fehlen derzeit unter anderem verifizierte Firmendaten, eine primäre Facebook-Seite und eine verpflichtende Zwei-Faktor-Authentifizierung.

### LinkedIn

- Die Codavo-Unternehmensseite ist vorhanden.
- Werbekonto `Codavo Webstudio Ads`, ID `549790685`, ist vorhanden und mit der Codavo-Unternehmensseite, ID `111746545`, verknüpft.
- Zwei-Faktor-Authentifizierung ist aktiv; es wurden keine Kampagnen, Ausgaben oder Zahlungsdaten angelegt.
- LinkedIn kennzeichnet das Konto als `Gesperrt`. Der direkte Aufruf der Insight-Tag-Verwaltung wird deshalb blockiert; Partner-ID und Insight Tag können erst nach Entsperrung eingerichtet werden.

### TikTok

- Im Safari-Profil besteht keine aktive TikTok-for-Business-Sitzung.
- Der Login über TikTok wurde gestartet und verlangt eine QR-Code-Bestätigung auf dem Mobilgerät. Ohne diese Bestätigung können Werbekonto und Pixel-ID nicht geprüft oder angelegt werden.

## Lokal umgesetzte Website-Änderungen

- Google-Tags werden bei vorhandenem GTM nicht zusätzlich direkt geladen, um doppelte Messungen zu vermeiden.
- Consent Mode v2 bleibt standardmäßig für `analytics_storage`, `ad_storage`, `ad_user_data` und `ad_personalization` abgelehnt.
- Der Cookie-Banner bietet jetzt `Alle akzeptieren`, `Nur Statistik` und `Ablehnen` sowie dauerhaft erreichbare Cookie-Einstellungen.
- Meta, LinkedIn und TikTok werden im Banner und in der Datenschutzerklärung als Marketing-Dienste benannt.
- Google-Ads-Conversions werden nur noch ausgelöst, wenn alle erforderlichen Marketing-Zustimmungen erteilt sind.
- Der Meta-Domain-Verifizierungscode wurde in die Website-Metadaten aufgenommen.
- Die Datenschutzerklärung wurde um Google Ads, Meta Pixel, LinkedIn Insight Tag und TikTok Pixel ergänzt. Vor der Veröffentlichung wird eine rechtliche Prüfung empfohlen.

## Umgesetzte GTM-Konfiguration

Alle Marketing-Tags müssen zusätzlich zur Plattformkonfiguration im GTM an Marketing-Zustimmung gebunden werden. Nicht-Google-Tags dürfen weder beim ersten Seitenaufruf noch bei einer nachträglichen Zustimmungsänderung ohne Einwilligung feuern.

1. Das vorhandene Google-Tag `GA4 – Base Configuration` und das vorhandene WhatsApp-Ereignis wurden unverändert übernommen.
2. `Google Ads - Base Tag - Remarketing` wurde für `AW-18059484807` ergänzt.
3. `Meta - Base Pixel - PageView` wurde für Pixel `1592509072445980` ergänzt.
4. Der Trigger `Consent - Marketing granted or loaded` reagiert auf `consent_loaded` und `consent_updated`.
5. Beide Marketing-Tags verlangen zusätzlich `ad_storage`, `ad_user_data` und `ad_personalization` und werden pro Seitenaufruf höchstens einmal ausgeführt.
6. LinkedIn und TikTok bleiben bis zur Entsperrung beziehungsweise Anmeldung technisch blockiert und wurden deshalb nicht mit Platzhalter-IDs veröffentlicht.
7. Der GTM-Arbeitsbereich enthält genau drei isolierte Änderungen; es wurden keine vorhandenen Tags oder Trigger gelöscht oder verändert.

## Ereignis- und Conversion-Plan

| Website-Aktion | Datenebenen-Ereignis | Messziel |
| --- | --- | --- |
| Kontakt-CTA | `cta_contact_click` / `nav_contact_click` / `mobile_cta_click` | Mikro-Conversion, nicht als Lead doppelt zählen |
| Telefon | vorhandenes Telefon-Conversion-Ereignis | qualifizierte Kontaktabsicht |
| WhatsApp | vorhandenes WhatsApp-Conversion-Ereignis | qualifizierte Kontaktabsicht |
| Website-Check abgesendet | `website_check_submit` | Lead/Conversion nach erfolgreicher Übermittlung |
| Kontaktbewerbung abgesendet | `contact_application_submit` | Lead/Conversion nach erfolgreicher Übermittlung |
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
- Telefon/WhatsApp/CTAs: höchstens eine vorgesehene Conversion pro Aktion.
- Google Tag Assistant/GTM Preview sowie die Diagnosetools aller Plattformen zeigen die erwarteten Events ohne Duplikate.
- Testdaten werden als Test markiert bzw. vor Kampagnenauswertung ausgeschlossen, soweit die Plattform dies unterstützt.

### Live-Prüfung im Google Tag Assistant

- Der richtige Container `GTM-M2SSF8SZ`, Google Ads `AW-18059484807` und GA4 `G-97DHW1DWSM` wurden auf `www.codavo-webstudio.de` erkannt.
- Im geprüften Negativfall standen `ad_storage`, `analytics_storage`, `ad_user_data` und `ad_personalization` vollständig auf `Abgelehnt`.
- Dabei feuerte ausschließlich die vorhandene GA4-Basiskonfiguration; Meta und Google Ads blieben blockiert. Der Consent-Negativtest ist damit bestanden.
- Der positive Live-Test und der erneute Aufruf mit gespeicherter Marketing-Einwilligung erfolgen nach Veröffentlichung der neuen Cookie-Oberfläche. Bis dahin wird der GTM-Arbeitsbereich nicht veröffentlicht.

## Bereits geprüfte Qualität

- Lint erfolgreich.
- Produktions-Build erfolgreich, 94 Seiten erzeugt.
- Lokaler UI-Test für Ablehnen, Statistik-Zustimmung, vollständige Zustimmung und erneutes Öffnen der Cookie-Einstellungen erfolgreich.
- Meta-Verifizierungs-Metatag lokal mit dem erwarteten Inhalt vorhanden.

## Noch benötigte Zugriffe und Entscheidungen

1. TikTok-Login per QR-Code auf dem Mobilgerät bestätigen; anschließend Werbekonto und Pixel prüfen/einrichten.
2. LinkedIn-Werbekonto `549790685` entsperren lassen; erst danach Insight Tag und Partner-ID einrichten.
3. Website-Änderungen veröffentlichen und den positiven Consent-Test durchführen; anschließend den isolierten GTM-Arbeitsbereich veröffentlichen.
4. Meta-Domain nach Livegang des Verifizierungs-Metatags in Meta bestätigen.
5. Firmendaten, primäre Meta-Seite und Zwei-Faktor-Pflicht im Meta Business-Portfolio festlegen.
6. Datenschutztext rechtlich prüfen.
7. Zielgruppen später anhand der Baulig-Vorgaben definieren und anlegen.
8. Erst nach vollständigem Test Freigabe für Kampagnenentwürfe, Tagesbudget und Live-Schaltung einholen.
