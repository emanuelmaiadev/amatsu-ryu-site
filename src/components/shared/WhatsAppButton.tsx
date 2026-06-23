import { MessageCircle } from "lucide-react";

import { ContactActionButton } from "./ContactActionButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  variant = "outline",
  size = "default",
  className,
}: WhatsAppButtonProps) {
  if (!env.whatsapp) return null;

  return (
    <ContactActionButton
      href={buildWhatsAppUrl(message)}
      label={label}
      icon={MessageCircle}
      variant={variant}
      size={size}
      className={cn(className)}
    />
  );
}