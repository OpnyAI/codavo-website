import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const strengths = [
  "Strategische Positionierung statt reiner Gestaltung",
  "UX/UI und individuelle Entwicklung aus einer Hand",
  "Direkte, verständliche Zusammenarbeit ohne unnötige Umwege",
] as const;

export default function About() {
  return (
    <section id="about" className="section section--feature section--compact scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <figure className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-indigo-500/15 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080e1a] shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/about/mehmet-catalsakal-fotoshooting-2026.jpg"
                alt="Mehmet Çatalsakal, Gründer und Ansprechpartner von Codavo Webstudio"
                fill
                sizes="(max-width: 1023px) 90vw, 40vw"
                className="object-cover object-[52%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/75 via-transparent to-transparent" />
            </div>
          </figure>

          <div>
            <p className="eyebrow">Ihr persönlicher Ansprechpartner</p>
            <h2 className="section-title mt-5 text-white">
              Mehmet Çatalsakal verbindet unternehmerisches Denken mit
              hochwertigem Webdesign.
            </h2>
            <p className="lede mt-6 max-w-2xl">
              Als Gründer von Codavo Webstudio begleitet Mehmet Unternehmen von
              der ersten Analyse bis zum Launch. Dabei geht es nicht darum, nur
              eine neue Oberfläche zu gestalten, sondern Leistungen
              verständlich zu positionieren, Vertrauen aufzubauen und den Weg
              zur Anfrage konsequent zu planen.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Sein Hintergrund als M.Sc. Wirtschaftsingenieur verbindet
              wirtschaftliche Ziele, klare Prozesse und technische Umsetzung.
              Sie arbeiten direkt mit dem Ansprechpartner zusammen, der Ihr
              Projekt versteht, Entscheidungen einordnet und die Umsetzung
              verantwortet.
            </p>

            <ul className="mt-7 space-y-3">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-400/10 text-indigo-300">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>

            <Link
              href="/kontakt"
              data-track-event="cta_contact_click"
              data-track-label="About Erstgespraech"
              className="cta-primary mt-8"
            >
              Kostenloses Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
