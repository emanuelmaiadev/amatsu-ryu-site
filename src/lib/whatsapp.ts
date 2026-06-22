import { env } from "@/lib/env";

export function buildWhatsAppUrl(message?: string): string {
  const phone = env.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(message ?? env.whatsappDefaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildInterestFormWhatsAppUrl(data: {
  name: string;
  whatsapp: string;
  email: string;
  hasExperience: string;
  message?: string;
}): string {
  const body = [
    env.whatsappDefaultMessage,
    "",
    `*Nome:* ${data.name}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Email:* ${data.email}`,
    `*Já treinou artes marciais?* ${data.hasExperience}`,
    `*Mensagem:* ${data.message || "—"}`,
  ].join("\n");

  return buildWhatsAppUrl(body);
}
