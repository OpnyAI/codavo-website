import { Instagram, Linkedin, Youtube } from "lucide-react";

import { cn } from "@/lib/utils";
import { socialLinks, type SocialIcon } from "@/lib/socialLinks";

type SocialLinksProps = {
  size?: "sm" | "md";
  variant?: "header" | "footer";
  className?: string;
};

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M15.5 2h3.02a5.5 5.5 0 0 0 3.31 3.42v3.13a8.6 8.6 0 0 1-3.34-.65v6.23a7.13 7.13 0 1 1-7.24-7.12v3.18a3.95 3.95 0 1 0 4.25 3.94z" />
    </svg>
  );
}

function SocialIcon({ icon, className }: { icon: SocialIcon; className: string }) {
  if (icon === "linkedin") {
    return <Linkedin className={className} aria-hidden="true" />;
  }
  if (icon === "instagram") {
    return <Instagram className={className} aria-hidden="true" />;
  }
  if (icon === "youtube") {
    return <Youtube className={className} aria-hidden="true" />;
  }
  return <TikTokIcon className={className} />;
}

export default function SocialLinks({
  size = "md",
  variant = "footer",
  className,
}: SocialLinksProps) {
  const isSmall = size === "sm";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className={cn(
            "inline-flex items-center justify-center rounded-full border transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e19]",
            isSmall ? "h-8 w-8" : "h-9 w-9",
            variant === "header"
              ? "border-white/15 text-slate-300 hover:border-white/35 hover:text-white"
              : "border-white/12 text-white/70 hover:border-white/30 hover:text-white"
          )}
        >
          <SocialIcon
            icon={social.icon}
            className={isSmall ? "h-4 w-4" : "h-[18px] w-[18px]"}
          />
        </a>
      ))}
    </div>
  );
}
