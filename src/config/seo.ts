import { env, getFullAddress } from "@/lib/env";

export const SEO_KEYWORDS = [
  "Amatsu Ryū",
  "Bujinkan Fortaleza",
  "Ninjutsu Fortaleza",
  "Bujinkan Ceará",
  "Budō Taijutsu Fortaleza",
  "Defesa Pessoal Fortaleza",
  "Artes Marciais Japonesas Fortaleza",
  "Consciência Situacional",
  "Budō Japonês",
] as const;

export const siteConfig = {
  name: env.siteTitle,
  description: env.siteDescription,
  url: env.siteUrl,
  keywords: SEO_KEYWORDS,
  locale: "pt_BR",
  ogImage: "/images/og-image.svg",
} as const;

export function getMartialArtsSchoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: env.dojoName,
    description: env.siteDescription,
    url: env.siteUrl,
    image: `${env.siteUrl}/images/logo-dragon-only.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: env.address,
      addressLocality: env.city,
      addressRegion: env.state,
      addressCountry: env.country,
    },
    telephone: env.whatsapp,
    email: env.email,
    sameAs: [env.instagramUrl].filter(Boolean),
    instructor: {
      "@type": "Person",
      name: env.instructorName,
      jobTitle: env.instructorRank,
    },
    areaServed: { "@type": "City", name: env.city },
    knowsAbout: [
      "Bujinkan Budō Taijutsu",
      "Ninjutsu",
      "Budō Japonês",
      "Defesa Pessoal",
      "Consciência Situacional",
    ],
    fullAddress: getFullAddress(),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: env.dojoName,
    url: env.siteUrl,
    logo: `${env.siteUrl}/images/logo-dragon-only.png`,
    description: env.siteDescription,
    sameAs: [env.instagramUrl, env.youtubeUrl, env.facebookUrl].filter(Boolean),
  };
}

export function getFaqSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
