"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;

    if (!video) return;
    if (video.ended) video.currentTime = 0;

    void video.play().catch(() => undefined);
  };

  return (
    <figure>
      <div className="relative">
        <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-indigo-500/15 blur-3xl" />
        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#030711] p-1.5 shadow-[0_35px_90px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-[1.75rem] sm:p-2">
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-0 z-20 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent"
          />

          <video
            ref={videoRef}
            className="aspect-video w-full rounded-[0.95rem] bg-[#050816] object-contain sm:rounded-[1.3rem]"
            controls={hasStarted}
            playsInline
            preload="metadata"
            poster="/videos/startseite/website-wachstumshebel-poster.jpg"
            aria-label="Codavo Präsentation: Wie Ihre Website zum Wachstumshebel wird"
            onPlay={() => {
              setHasStarted(true);
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src="/videos/startseite/website-wachstumshebel.mp4"
              type="video/mp4"
            />
            Ihr Browser unterstützt die Videowiedergabe nicht. Sie können das{" "}
            <a href="/videos/startseite/website-wachstumshebel.mp4">
              Video direkt öffnen
            </a>
            .
          </video>

          {!isPlaying ? (
            <div className="pointer-events-none absolute inset-1.5 flex items-center justify-center rounded-[0.95rem] bg-[#030711]/10 sm:inset-2 sm:rounded-[1.3rem]">
              <button
                type="button"
                onClick={playVideo}
                className="pointer-events-auto group flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_18px_55px_rgba(99,102,241,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_22px_65px_rgba(168,85,247,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050816] sm:h-24 sm:w-24"
                aria-label="Video Wie Ihre Website zum Wachstumshebel wird abspielen"
              >
                <Play
                  className="ml-1 h-8 w-8 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : null}

        </div>
      </div>

      <figcaption className="mt-4 flex flex-col gap-1 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-2 lg:justify-start lg:text-left">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">
          Präsentation
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" aria-hidden="true" />
        <span className="min-w-0 text-sm text-slate-400">
          Für mehr organische Sichtbarkeit und qualifizierte Anfragen.
        </span>
      </figcaption>
    </figure>
  );
}
