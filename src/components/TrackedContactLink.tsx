"use client";

import type { ReactNode } from "react";
import { handleConversionRedirect } from "@/lib/google-ads";

type TrackedContactLinkProps = {
  url: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
  dataTrackEvent?: string;
  dataTrackLabel?: string;
  contactMethod: "whatsapp" | "phone" | "email";
  type?: "button" | "submit" | "reset";
};

export default function TrackedContactLink({
  url,
  className,
  children,
  ariaLabel,
  dataTrackEvent,
  dataTrackLabel,
  type = "button",
}: TrackedContactLinkProps) {
  return (
    <button
      type={type}
      onClick={() => handleConversionRedirect(url)}
      className={className}
      aria-label={ariaLabel}
      {...(dataTrackEvent ? { "data-track-event": dataTrackEvent } : {})}
      {...(dataTrackLabel ? { "data-track-label": dataTrackLabel } : {})}
    >
      {children}
    </button>
  );
}
