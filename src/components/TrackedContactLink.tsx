"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
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
  contactMethod,
  type = "button",
}: TrackedContactLinkProps) {
  const pathname = usePathname();

  return (
    <button
      type={type}
      onClick={() =>
        handleConversionRedirect(url, {
          pagePath: pathname,
          ctaLabel: dataTrackLabel,
          contactMethod,
        })
      }
      className={className}
      aria-label={ariaLabel}
      {...(dataTrackEvent ? { "data-track-event": dataTrackEvent } : {})}
      {...(dataTrackLabel ? { "data-track-label": dataTrackLabel } : {})}
    >
      {children}
    </button>
  );
}
