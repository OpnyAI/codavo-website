import Image from "next/image";

export default function GermanyMapVisual() {
  return (
    <div className="relative mx-auto flex min-h-[28rem] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(19,28,48,0.7),rgba(8,14,27,0.82))] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.28)] sm:min-h-[34rem] sm:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(99,102,241,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative w-full max-w-[22rem] drop-shadow-[0_0_28px_rgba(129,140,248,0.28)]">
        <Image
          src="/images/germany/germany-outline.png"
          alt="Umrisskarte von Deutschland als Symbol für die deutschlandweite Zusammenarbeit mit Codavo"
          width={815}
          height={1058}
          sizes="(max-width: 1023px) 80vw, 32vw"
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent" />
    </div>
  );
}
