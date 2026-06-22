import type { HeroMediaConfig } from "@/types";

export const navigationItems = [
  { label: "Início", href: "#home" },
  { label: "O Dōjō", href: "#dojo" },
  { label: "A Bujinkan", href: "#bujinkan" },
  { label: "Instrutor", href: "#instrutor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const images = {
  logo: "/images/logo-dragon-only.png",
  logoFull: "/images/logo-amatsu-ryu.png",
  hero: "/images/hero-ninja-dragon.svg",
  backgroundDragon: "/images/bg-dragon-ninja.svg",
  bujinkanKanji: "/images/bujinkan-kanji.svg",
  ogImage: "/images/og-image.svg",
  instructor: "/images/instructor.png",
} as const;

export const heroMedia: HeroMediaConfig = {
  type: "image",
  src: images.hero,
  alt: "Ninja e dragão celestial — Amatsu Ryū Bujinkan Dōjō",
  priority: true,
};

export const formattedAddress = {
  street: "Rua Tabelião Joaquim Coelho, 366 A",
  building: "Empresarial Francisco Colares",
  complement: "Sala 01",
  city: "Fortaleza - CE",
};
