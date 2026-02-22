export type SocialIcon = "linkedin" | "instagram" | "tiktok" | "youtube";

export type SocialLink = {
  name: "LinkedIn" | "Instagram" | "TikTok" | "YouTube";
  href: string;
  icon: SocialIcon;
  ariaLabel: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mehmet-catalsakal-43264a15b/",
    icon: "linkedin",
    ariaLabel: "Opny auf LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/opny.ai?igsh=cDVzN25ibHp0Y3l6&utm_source=qr",
    icon: "instagram",
    ariaLabel: "Opny auf Instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@opny.ai?_r=1&_t=ZG-948DurHTZhZ",
    icon: "tiktok",
    ariaLabel: "Opny auf TikTok",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Opny_AI",
    icon: "youtube",
    ariaLabel: "Opny auf YouTube",
  },
];
