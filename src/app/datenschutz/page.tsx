import Footer from "@/components/Footer";
import ConsentSettingsButton from "@/components/ConsentSettingsButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/datenschutz",
  title: "Datenschutz | Codavo Webstudio",
  description:
    "Datenschutzhinweise zur Nutzung dieser Website und zu den eingesetzten Diensten.",
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        <div className="container mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Datenschutzerklärung
          </h1>

          <div className="mt-8 space-y-8 text-sm md:text-base text-slate-200">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                1. Verantwortlicher
              </h2>
              <p className="mt-2">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Codavo Webstudio <br />
                Inhaber: Mehmet Çatalsakal <br />
                Naumannstraße 3 <br />
                73663 Berglen <br />
                E-Mail: kontakt@codavo-webstudio.de
              </p>
            </section>

            {/* 2. Allgemeine Hinweise */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p className="mt-2 text-slate-300">
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung dieser Website, zur Kommunikation mit dir oder
                zur Vorbereitung und Durchführung von Projekten erforderlich
                ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b
                und f DSGVO.
              </p>
              <p className="mt-2 text-slate-300">
                Personenbezogene Daten werden nur so lange gespeichert, wie es
                für den jeweiligen Zweck erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            {/* 3. Server-Logfiles & Hosting */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                3. Server-Logfiles & Hosting
              </h2>
              <p className="mt-2 text-slate-300">
                Beim Aufruf unserer Website werden durch unseren
                Hosting-Provider automatisch Informationen erfasst und in
                sogenannten Server-Logfiles gespeichert.
              </p>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>aufgerufene Seite</li>
                <li>Browsertyp und Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-2 text-slate-300">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an technisch fehlerfreier
                Darstellung und Optimierung).
              </p>
            </section>

            {/* 4. Cookies & Einwilligung */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                4. Cookies & Einwilligung
              </h2>
              <p className="mt-2 text-slate-300">
                Unsere Website verwendet technisch notwendige Technologien
                sowie – nach deiner ausdrücklichen Einwilligung – Statistik-
                und Marketing-Technologien.
              </p>
              <p className="mt-2 text-slate-300">
                Die Einwilligung erfolgt über ein Consent-Banner beim
                erstmaligen Besuch unserer Website. Du kannst Statistik und
                Marketing gemeinsam akzeptieren, nur Statistik zulassen oder
                beides ablehnen. Ohne deine Zustimmung werden keine optionalen
                Statistik- oder Marketing-Cookies gesetzt.
              </p>
              <p className="mt-2 text-slate-300">
                Deine Auswahl wird lokal im Browser gespeichert. Du kannst deine
                Einwilligung jederzeit über <ConsentSettingsButton /> ändern oder
                widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Verarbeitung bleibt unberührt.
              </p>
              <p className="mt-2 text-slate-300">
                Nach deiner Marketing-Einwilligung können wir während des
                aktuellen Website-Besuchs die ursprüngliche Landingpage, die
                Referrer-Domain, Kampagnenparameter (UTM) und vorhandene
                Werbe-Klick-IDs im Sitzungsspeicher des Browsers erfassen. Diese
                Angaben helfen uns, eine von dir abgesendete Kontaktanfrage dem
                auslösenden Marketingkanal zuzuordnen. Die Sitzungsdaten werden
                spätestens nach zwölf Stunden verworfen.
              </p>
            </section>

            {/* 5. Google Tag Manager */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                5. Google Tag Manager
              </h2>
              <p className="mt-2 text-slate-300">
                Wir verwenden den Google Tag Manager. Anbieter ist die Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-2 text-slate-300">
                Der Tag Manager dient der Verwaltung und Ausspielung von
                Website-Tags. Welche optionalen Tags ausgeführt werden, richtet
                sich nach deiner Auswahl im Consent-Banner. Rechtsgrundlage für
                optionale Tags ist Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            {/* 6. Google Analytics 4 */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                6. Google Analytics 4
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du eingewilligt hast, verwenden wir Google Analytics 4.
                Anbieter ist die Google Ireland Limited.
              </p>
              <p className="mt-2 text-slate-300">
                Google Analytics ermöglicht die Analyse des Nutzungsverhaltens
                (z. B. Seitenaufrufe, Interaktionen). Die IP-Adresse wird
                innerhalb der EU anonymisiert.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
              <p className="mt-2 text-slate-300">
                Eine Datenübertragung in die USA kann nicht ausgeschlossen
                werden. Google ist nach dem EU-U.S. Data Privacy Framework
                zertifiziert.
              </p>
            </section>

            {/* 7. Google Ads */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                7. Google Ads und Conversion-Tracking
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du Marketing zugestimmt hast, verwenden wir Google Ads
                Conversion-Tracking und können Remarketing-Funktionen nutzen.
                Dabei kann erfasst werden, ob ein Websitebesuch nach dem Kontakt
                mit einer Anzeige zu einer von uns definierten Handlung führt.
              </p>
              <p className="mt-2 text-slate-300">
                Anbieter ist die Google Ireland Limited. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. a DSGVO. Eine Datenübertragung in die USA kann
                nicht ausgeschlossen werden. Weitere Informationen findest du
                in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            {/* 8. Meta */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                8. Meta Pixel und Conversions API
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du Marketing zugestimmt hast, können wir den Meta Pixel
                sowie die Meta Conversions API der Meta Platforms Ireland
                Limited einsetzen. Sie dienen der Messung von
                Website-Ereignissen, der Zuordnung von Conversions und der
                Bildung von Zielgruppen für Werbung auf Facebook und Instagram.
              </p>
              <p className="mt-2 text-slate-300">
                Nach einer erfolgreich abgesendeten Formularanfrage kann das
                Ereignis „Lead“ zusätzlich serverseitig an Meta übermittelt
                werden. Dabei können Ereignisart und -zeit, die Quellseite,
                Browser- und Klick-IDs, IP-Adresse, Browserinformationen sowie
                gehashte Kontaktangaben wie E-Mail-Adresse, Telefonnummer und
                Name verarbeitet werden. Die serverseitige Übermittlung erfolgt
                nur, wenn zuvor eine Marketing-Einwilligung erteilt wurde.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Eine
                Datenübertragung in Drittländer kann nicht ausgeschlossen
                werden. Weitere Informationen findest du in der{" "}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Datenschutzrichtlinie von Meta
                </a>
                .
              </p>
            </section>

            {/* 9. LinkedIn */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                9. LinkedIn Insight Tag
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du Marketing zugestimmt hast, können wir das LinkedIn
                Insight Tag der LinkedIn Ireland Unlimited Company einsetzen.
                Es unterstützt die Conversion-Messung und die Bildung von
                Website-Zielgruppen für LinkedIn-Werbung.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Weitere
                Informationen findest du in der{" "}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Datenschutzrichtlinie von LinkedIn
                </a>
                .
              </p>
            </section>

            {/* 10. TikTok */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                10. TikTok Pixel
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du Marketing zugestimmt hast, können wir den TikTok Pixel
                der TikTok Technology Limited einsetzen. Er unterstützt die
                Messung von Website-Ereignissen, die Zuordnung von Conversions
                und die Bildung von Zielgruppen für TikTok-Werbung.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Weitere
                Informationen findest du in der{" "}
                <a
                  href="https://www.tiktok.com/legal/page/eea/privacy-policy/de"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Datenschutzerklärung von TikTok
                </a>
                .
              </p>
            </section>

            {/* 11. Kontakt */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                11. Kontaktaufnahme
              </h2>
              <p className="mt-2 text-slate-300">
                Wenn du uns über ein Kontaktformular, per E-Mail, Telefon oder
                WhatsApp kontaktierst, verarbeiten wir deine Angaben zur
                Bearbeitung deiner Anfrage. Bei einer Projektanfrage können
                hierzu insbesondere Kontakt-, Unternehmens-, Umsatz-, Budget-
                und Projektdaten gehören.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung/-durchführung) bzw. Art. 6 Abs. 1 lit. f
                DSGVO. Soweit wir im Formular eine Einwilligung abfragen,
                erfolgt die Verarbeitung zusätzlich auf Grundlage von Art. 6
                Abs. 1 lit. a DSGVO.
              </p>
            </section>

            {/* 12. Dienstleister */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                12. Einsatz von Dienstleistern
              </h2>
              <p className="mt-2 text-slate-300">
                Wir setzen externe Dienstleister (z. B. Hosting-Provider) ein,
                die im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO
                tätig sind.
              </p>
              <p className="mt-2 text-slate-300">
                Für die technische Übermittlung von Formularanfragen per E-Mail
                nutzen wir den Versanddienst Resend. Dabei werden die im
                Formular angegebenen Daten an Resend übermittelt, soweit dies
                für den E-Mail-Versand erforderlich ist.
              </p>
            </section>

            {/* 13. Deine Rechte */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                13. Deine Rechte
              </h2>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht</li>
                <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            {/* 14. Stand */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                14. Stand dieser Datenschutzerklärung
              </h2>
              <p className="mt-2 text-slate-300">
                Stand: August 2026. Änderungen können sich durch technische oder
                gesetzliche Anpassungen ergeben.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
