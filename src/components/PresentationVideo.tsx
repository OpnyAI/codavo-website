"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function PresentationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[#030711] p-1.5 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:rounded-[1.75rem] sm:p-2">
      <video
        ref={videoRef}
        className="aspect-video w-full rounded-[1rem] bg-[#050816] object-contain sm:rounded-[1.3rem]"
        controls
        playsInline
        preload="metadata"
        poster="/videos/praesentation-kundengewinnung/website-als-wachstumshebel-poster.jpg"
        aria-label="Video: Wie Ihre Website zum Wachstumshebel wird"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/videos/praesentation-kundengewinnung/website-als-wachstumshebel.mp4" type="video/mp4" />
        Ihr Browser unterstützt die Videowiedergabe nicht. Sie können das{" "}
        <a href="/videos/praesentation-kundengewinnung/website-als-wachstumshebel.mp4">Video direkt öffnen</a>.
      </video>
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => { void videoRef.current?.play().catch(() => undefined); }}
            aria-label="Video abspielen"
            className="pointer-events-auto flex flex-col items-center gap-2 rounded-2xl border border-white/30 bg-slate-950/85 px-5 py-4 text-white shadow-xl transition hover:scale-105 hover:bg-indigo-700 sm:px-7 sm:py-5"
          >
            <Play className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" aria-hidden="true" />
            <span className="text-sm font-semibold">Video abspielen</span>
          </button>
        </div>
      )}
    </div>
  );
}
