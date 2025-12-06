import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Codavo Webstudio",
  description:
    "Impressum von Codavo Webstudio – gesetzliche Pflichtangaben gemäß § 5 TMG und § 18 MStV.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
      <div className="container mt-10 md:mt-6 lg:mt-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Impressum
        </h1>

        <section className="mt-8 space-y-6 text-sm md:text-base text-slate-200">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              Codavo Webstudio
              <br />
              Inhaber: Mehmet Çatalsakal
              <br />
              Naumannstraße 3
              <br />
              73663 Berglen
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Kontakt</h2>
            <p className="mt-2">
              Telefon: +49 1511 195 64 79
              <br />
              E-Mail: kontakt@codavo-webstudio.de
              <br />
              Web: www.codavo-webstudio.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              <span className="font-semibold">DE367221694</span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2">
              Verantwortlich im Sinne von § 18 Abs. 2 MStV:
              <br />
              Mehmet Çatalsakal
              <br />
              Naumannstraße 3
              <br />
              73663 Berglen
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Haftung für Inhalte
            </h2>
            <p className="mt-2 text-slate-300">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2 text-slate-300">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Haftung für Links
            </h2>
            <p className="mt-2 text-slate-300">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="mt-2 text-slate-300">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Urheberrecht</h2>
            <p className="mt-2 text-slate-300">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
