"use client";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section section-glow-top scroll-mt-24">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Über Codavo Webstudio
            </h2>
            <p className="mt-4 text-slate-300">
              Codavo Webstudio entwickelt moderne Websites und Web-Apps, die
              nicht nur gut aussehen, sondern ein klares Ziel haben: für dich
              Anfragen, Leads oder Nutzer zu bringen. Geleitet von{" "}
              <span className="text-white">Mehmet Çatalsakal</span> verbinden
              wir saubere Webentwicklung mit einem strukturierten, greifbaren
              Prozess – von der ersten Idee bis zum Go-Live.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05}>
            <article className="card h-full">
              <h3 className="text-xl font-semibold text-white">Strategie</h3>
              <p className="mt-2 text-slate-300">
                Wir definieren gemeinsam Ziele, priorisieren Inhalte und
                entwickeln eine klare Struktur – damit deine Website oder
                Web-App genau das leistet, was du brauchst.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Zielbild & Positionierung</li>
                <li>• Informationsarchitektur</li>
                <li>• Content-Plan & SEO-Grundlage</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card h-full">
              <h3 className="text-xl font-semibold text-white">Design</h3>
              <p className="mt-2 text-slate-300">
                Ein ruhiges, hochwertiges UI mit klarer UX-Führung – damit
                Inhalte wirken und Nutzer ohne Umwege dort landen, wo du sie
                haben möchtest.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Designsystem statt Einzelseiten</li>
                <li>• Dezente, sinnvolle Interaktionen</li>
                <li>• Von Anfang an responsive gedacht</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.15}>
            <article className="card h-full">
              <h3 className="text-xl font-semibold text-white">Entwicklung</h3>
              <p className="mt-2 text-slate-300">
                Next.js-basierte Websites & Web-Apps: saubere Komponenten,
                schnelle Ladezeiten, Barrierefreiheit und Tracking – alles aus
                einem Guss und bereit für Wachstum.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Next.js 15 (App Router)</li>
                <li>• Core Web Vitals & SEO</li>
                <li>• CMS- & Analytics-ready</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
