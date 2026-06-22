export const env = {
  dojoName: process.env.NEXT_PUBLIC_DOJO_NAME ?? "",

  instructorName: process.env.NEXT_PUBLIC_INSTRUCTOR_NAME ?? "",

  instructorRank: process.env.NEXT_PUBLIC_INSTRUCTOR_RANK ?? "",

  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",

  email: process.env.NEXT_PUBLIC_EMAIL ?? "",

  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",

  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "",

  address: process.env.NEXT_PUBLIC_ADDRESS ?? "",

  city: process.env.NEXT_PUBLIC_CITY ?? "",

  state: process.env.NEXT_PUBLIC_STATE ?? "",

  country: process.env.NEXT_PUBLIC_COUNTRY ?? "",

  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",

  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",

  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",

  trialClassEnabled: process.env.NEXT_PUBLIC_TRIAL_CLASS_ENABLED === "true",

  seminarEnabled: process.env.NEXT_PUBLIC_SEMINAR_ENABLED === "true",

  whatsappDefaultMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ?? "",

  siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE ?? "",

  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "",

  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR ?? "#D4AF37",

  secondaryColor: process.env.NEXT_PUBLIC_SECONDARY_COLOR ?? "#F5D76E",

  accentColor: process.env.NEXT_PUBLIC_ACCENT_COLOR ?? "#8B0000",

  backgroundColor: process.env.NEXT_PUBLIC_BACKGROUND_COLOR ?? "#050505",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export function getFullAddress(): string {
  return `${env.address}, ${env.city} - ${env.state}, ${env.country}`;
}
