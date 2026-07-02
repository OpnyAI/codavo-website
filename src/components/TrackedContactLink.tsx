"use client";

import type { ReactNode } from "react";
import { handleConversionRedirect } from "@/lib/google-ads";
import type { TrackingEventName } from "@/lib/tracking";

type TrackedContactLinkProps = {
  url: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
  dataTrackEvent: TrackingEventName;
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
  contactMethod,
  type = "button",
}: TrackedContactLinkProps) {
  return (
    <button
      type={type}
      onClick={() => handleConversionRedirect(url)}
      className={className}
      aria-label={ariaLabel}
      data-track-event={dataTrackEvent}
      {...(dataTrackLabel ? { "data-track-label": dataTrackLabel } : {})}
      data-contact-method={contactMethod}
    >
      {children}
    </button>
  );
}
