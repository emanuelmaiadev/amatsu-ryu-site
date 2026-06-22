export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PlaceholderRoute = {
  path: string;
  title: string;
  description: string;
};

export type HeroMediaType = "image" | "gif" | "video";

export type HeroMediaConfig = {
  type: HeroMediaType;
  src: string;
  alt: string;
  priority?: boolean;
  poster?: string;
};
