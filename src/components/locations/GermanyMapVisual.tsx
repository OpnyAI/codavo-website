import Image from "next/image";

const economicRegions = [
  { label: "Hamburg", left: "45%", top: "20%", labelClass: "left-full ml-2" },
  { label: "Berlin", left: "80%", top: "33%", labelClass: "right-full mr-2" },
  { label: "Leipzig", left: "70%", top: "48%", labelClass: "right-full mr-2" },
  { label: "Köln / NRW", left: "14%", top: "52%", labelClass: "left-full ml-2" },
  { label: "Frankfurt / Rhein-Main", left: "32%", top: "63%", labelClass: "left-full ml-2" },
  { label: "Stuttgart", left: "37%", top: "79%", labelClass: "left-full ml-2" },
  { label: "München", left: "62%", top: "88%", labelClass: "right-full mr-2" },
] as const;

export default function GermanyMapVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(18,27,47,0.78),rgba(7,13,25,0.94))] shadow-[0_35px_110px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="relative flex min-h-[29rem] items-center justify-center overflow-hidden px-6 py-8 sm:min-h-[36rem] sm:px-10 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/[0.07]" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/[0.09]" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[39%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/[0.08]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(79,70,229,0.2),transparent_45%),radial-gradient(circle_at_56%_62%,rgba(14,165,233,0.1),transparent_42%)]" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-indigo-500/[0.08] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/25 to-transparent" aria-hidden />

        <div className="relative w-full max-w-[15.5rem] sm:max-w-[21rem]">
          <div className="pointer-events-none absolute inset-[8%] rounded-[45%] bg-[radial-gradient(circle,rgba(129,140,248,0.13),rgba(79,70,229,0.035)_48%,transparent_72%)] blur-xl" aria-hidden />
          <Image
            src="/images/germany/germany-outline.png"
            alt="Deutschlandweite Angebotsabdeckung von Codavo Webstudio"
            width={815}
            height={1058}
            sizes="(max-width: 639px) 248px, (max-width: 1023px) 336px, 32vw"
            className="relative h-auto w-full object-contain opacity-75 [filter:invert(1)_brightness(1.12)_contrast(1.04)_drop-shadow(0_0_8px_rgba(165,180,252,0.42))_drop-shadow(0_0_28px_rgba(79,70,229,0.22))]"
            priority
          />

          <ul className="absolute inset-0" aria-label="Ausgewählte deutsche Wirtschaftsräume">
            {economicRegions.map((region) => (
              <li
                key={region.label}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: region.left, top: region.top }}
              >
                <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden>
                  <span className="absolute h-3 w-3 rounded-full bg-indigo-300/15 opacity-80 blur-[2px] transition duration-300 group-hover:scale-150 group-hover:bg-indigo-300/25" />
                  <span className="relative h-1.5 w-1.5 rounded-full border border-indigo-100/70 bg-indigo-300 shadow-[0_0_9px_rgba(165,180,252,0.8)]" />
                </span>
                <span className={`${region.labelClass} absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/8 bg-[#0a1120]/88 px-2.5 py-1 text-[9px] font-medium tracking-[0.04em] text-slate-300 shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-md sm:inline-flex`}>
                  {region.label}
                </span>
                <span className="sr-only">{region.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080e1b]/65 to-transparent" aria-hidden />
      </div>

      <figcaption className="relative border-t border-white/8 bg-[#080e1b]/72 px-6 py-5 text-center text-xs leading-6 text-slate-400 backdrop-blur-xl sm:px-8 sm:py-6 sm:text-sm">
        Codavo begleitet Website-, Landingpage-, Funnel- und Softwareprojekte für Unternehmen in ganz Deutschland.
      </figcaption>
    </figure>
  );
}
