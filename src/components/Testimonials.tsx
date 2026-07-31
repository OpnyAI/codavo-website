import Image from "next/image";
import { CheckCircle2, Target, TriangleAlert } from "lucide-react";
import {
  caseStudies,
  type CaseStudyItem,
} from "@/components/case-studies-data";

const testimonialCompanies = [
  "TPV-AV",
  "Taner Care Gruppe",
  "Creamy Catering",
] as const;

const testimonialCases = testimonialCompanies
  .map((company) => caseStudies.find((item) => item.company === company))
  .filter(
    (item): item is CaseStudyItem =>
      Boolean(item?.img && item?.googleReview),
  );

const storyRows = [
  { key: "problem", label: "Problem", icon: TriangleAlert },
  { key: "goal", label: "Ziel", icon: Target },
  { key: "result", label: "Ergebnis", icon: CheckCircle2 },
] as const;

export default function Testimonials() {
  return (
    <section className="section section--alt section--compact">
      <div className="container max-w-6xl">
        <div className="max-w-4xl">
          <p className="eyebrow">Kundenstimmen und Ergebnisse</p>
          <h2 className="section-title mt-5 text-white">
            Warum Unternehmen mit Codavo zusammenarbeiten.
          </h2>
          <p className="lede mt-5 max-w-3xl">
            Ausgangslage, gemeinsames Ziel und Ergebnis zeigen, was sich durch
            einen professionell geplanten Webauftritt konkret verändern kann.
          </p>
        </div>

        <div className="mt-12 space-y-6 lg:mt-16">
          {testimonialCases.map((project, index) => (
            <article
              key={project.company}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101d]/90 shadow-[0_30px_90px_rgba(0,0,0,0.24)]"
            >
              <div
                className={[
                  "grid",
                  index % 2 === 1
                    ? "lg:grid-cols-[0.92fr_1.08fr]"
                    : "lg:grid-cols-[1.08fr_0.92fr]",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex flex-col justify-center border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.13),transparent_55%)] p-5 sm:p-7 lg:border-b-0 lg:p-8",
                    index % 2 === 1
                      ? "lg:order-2 lg:border-l"
                      : "lg:border-r",
                  ].join(" ")}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050914] shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                    <div className="flex h-9 items-center gap-2 border-b border-white/8 bg-white/[0.045] px-3">
                      <span className="h-2 w-2 rounded-full bg-red-400/75" />
                      <span className="h-2 w-2 rounded-full bg-amber-300/75" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400/75" />
                      <span className="ml-2 truncate text-[10px] text-slate-500">
                        {project.href?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={project.img!}
                        alt={project.alt ?? `Website-Projekt von ${project.company}`}
                        fill
                        sizes="(max-width: 1023px) 100vw, 48vw"
                        className="object-contain object-top"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">
                      {project.industry}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.company}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="grid gap-5 md:grid-cols-3">
                    {storyRows.map(({ key, label, icon: Icon }) => (
                      <div key={key}>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-300">
                          <Icon className="h-4 w-4" aria-hidden />
                          {label}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {project[key]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {project.googleReview ? (
                    <a
                      href={project.googleReview.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 block rounded-2xl border border-white/8 bg-white/[0.035] p-5 transition hover:border-indigo-300/20 hover:bg-white/[0.055]"
                      aria-label={`Google-Rezension von ${project.googleReview.author} öffnen`}
                    >
                      <div className="flex items-center gap-2 text-amber-300" aria-label={`${project.googleReview.rating} von 5 Sternen`}>
                        <span aria-hidden>★★★★★</span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Google-Rezension
                        </span>
                      </div>
                      <blockquote className="mt-3 text-sm leading-7 text-slate-200">
                        „{project.googleReview.quote}“
                      </blockquote>
                      <p className="mt-3 text-xs text-slate-400">
                        <strong className="font-semibold text-white">
                          {project.googleReview.author}
                        </strong>
                        <span aria-hidden> · </span>
                        {project.googleReview.role}
                      </p>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
