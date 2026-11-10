import BusinessApplicationForm from "@/components/contact/BusinessApplicationForm";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/kontakt",
  title: "Für kostenloses Erstgespräch bewerben | Codavo",
  description:
    "Kostenloses Erstgespräch mit Codavo für Unternehmenswebsite, Relaunch, organische Sichtbarkeit, Funnel oder individuelle Software anfragen.",
});

export default function KontaktPage() {
  return (
    <>
      <main className="min-h-screen pt-24 md:pt-28">
        <section id="kontakt" className="container pb-16 pt-6 md:pb-20 md:pt-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Ihr kostenloses Erstgespräch
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns persönlich bei Ihnen.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-3xl sm:mt-8">
            <BusinessApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
