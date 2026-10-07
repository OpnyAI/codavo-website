import { SEO_CONFIG } from "@/lib/seo";

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
    href: SEO_CONFIG.founder.socialLinks.linkedin,
    icon: "linkedin",
    ariaLabel: "Mehmet Çatalsakal auf LinkedIn",
  },
  {
    name: "Instagram",
    href: SEO_CONFIG.founder.socialLinks.instagram,
    icon: "instagram",
    ariaLabel: "Mehmet Çatalsakal auf Instagram",
  },
  {
    name: "TikTok",
    href: SEO_CONFIG.founder.socialLinks.tiktok,
    icon: "tiktok",
    ariaLabel: "Mehmet Çatalsakal auf TikTok",
  },
  {
    name: "YouTube",
    href: SEO_CONFIG.founder.socialLinks.youtube,
    icon: "youtube",
    ariaLabel: "Mehmet Çatalsakal auf YouTube",
  },
];
