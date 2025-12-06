"use client";

import Reveal from "@/components/Reveal";

type Testimonial = {
  name: string;
  role: string;
  rating: string; // Anzeige, kein echter Bewertungsnachweis
  short: string; // Kurztext für Mobile
  full: string; // Volltext ab sm
};

const testimonials: Testimonial[] = [
  {
    name: "Pioneer Solution",
    role: "Geschäftsführer, Energieberatung",
    rating: "5,0 von 5 Sternen",
    short:
      "Unsere alte Seite hat kaum Anfragen gebracht. Mit dem Relaunch durch Codavo Webstudio ist endlich klar erkennbar, was wir machen.",
    full: "Unsere alte Seite hat kaum Anfragen gebracht. Mit dem Relaunch durch Codavo Webstudio ist endlich klar erkennbar, was wir machen – und das merken wir direkt an den Anfragen.",
  },
  {
    name: "Opny AI",
    role: "Gründerteam, KI-Plattform",
    rating: "4,9 von 5 Sternen",
    short:
      "Komplexes Produkt, wenig Zeit – Codavo hat unsere Story klar strukturiert und die Plattform verständlich dargestellt.",
    full: "Komplexes Produkt, wenig Zeit. Codavo hat uns geholfen, die Story klar zu machen und die Plattform so darzustellen, dass auch Nicht-Tech-Leute verstehen, was wir tun.",
  },
  {
    name: "Gartenwelt Schmitz",
    role: "Inhaber, Garten- & Landschaftsbau",
    rating: "5,0 von 5 Sternen",
    short:
      "Die neue Website wirkt deutlich hochwertiger und wir werden online besser gefunden.",
    full: "Die neue Website wirkt deutlich hochwertiger und wir werden online besser gefunden. Viele neue Kunden erwähnen explizit unseren Webauftritt.",
  },
  {
    name: "Freelance-Coaching-Projekt",
    role: "Beratung & Coaching",
    rating: "4,8 von 5 Sternen",
    short:
      "Ich wollte eine ruhige Seite ohne Baukasten-Optik. Codavo hat genau das geliefert.",
    full: "Ich wollte eine klare, ruhige Seite ohne Baukasten-Optik. Codavo Webstudio hat genau das geliefert – inklusive Struktur, die ich später selbst erweitern kann.",
  },
  {
    name: "SaaS-Anbieter",
    role: "B2B-Software",
    rating: "4,9 von 5 Sternen",
    short:
      "Wir brauchten Landingpages, die wirklich konvertieren. Das hat merklich mehr Demo-Buchungen gebracht.",
    full: "Wir brauchten Landingpages, die wirklich konvertieren. Die Kombination aus UX, Textstruktur und Performance hat merklich mehr Demo-Buchungen gebracht.",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="section section-glow-top">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Ausgewählte Kunden & Feedback
            </h2>
            <div className="mt-4 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-yellow-300 text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-300 text-sm">
                Stimmen von Kund:innen, mit denen wir Websites & Web-Apps in
                Deutschland und der DACH-Region umgesetzt haben.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden">
          <div className="testimonial-track">
            {loopedTestimonials.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                // Breite: mobil ~95 % des Viewports, max. 720px auf Desktop
                style={{ width: "min(75vw, 720px)", flex: "0 0 auto" }}
              >
                <div className="card h-full min-h-[240px] sm:min-h-[230px] md:min-h-[220px] flex flex-col justify-between py-4 sm:py-6">
                  <div>
                    <div className="flex items-center gap-2 text-yellow-300 text-sm mb-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <p className="text-slate-300 text-sm md:text-base">
                      {/* Kurztext auf Mobile, Volltext ab sm */}
                      <span className="sm:hidden">„{t.short}“</span>
                      <span className="hidden sm:inline">„{t.full}“</span>
                    </p>
                  </div>

                  <div className="mt-4 text-sm text-slate-400">
                    <div className="text-white font-semibold">{t.name}</div>
                    <div>{t.role}</div>
                    <div className="mt-1 text-xs text-slate-400">
                      {t.rating}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
