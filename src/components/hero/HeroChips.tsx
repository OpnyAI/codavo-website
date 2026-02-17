import Link from "next/link";

export default function HeroChips() {
  const chips = [
    { label: "Webdesign", href: "/webdesign", ariaLabel: "Zu Webdesign" },
    {
      label: "Individuelle Softwarelösungen",
      href: "/softwareloesungen-fuer-kmu",
      ariaLabel: "Zu individuellen Softwarelösungen",
    },
    {
      label: "Digitale Systemarchitektur",
      href: "/digitale-systeme",
      ariaLabel: "Zu digitaler Systemarchitektur",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {chips.map((chip) => (
        <Link
          key={chip.label}
          href={chip.href}
          aria-label={chip.ariaLabel}
          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 md:px-5 md:py-2.5 text-sm md:text-base leading-none font-medium text-slate-200 backdrop-blur transition-colors hover:bg-white/10 hover:border-white/25 active:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C18]"
        >
          {chip.label}
        </Link>
      ))}
    </div>
  );
}
