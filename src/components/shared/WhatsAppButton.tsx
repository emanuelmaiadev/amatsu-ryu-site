import Link from "next/link";

import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
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
    <Button asChild variant={variant} size={size} className={className}>
      <Link
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — abre em nova aba`}
        className={cn(variant === "default" && "bg-[#25D366] text-white hover:bg-[#20bd5a]")}
      >
        {label}
      </Link>
    </Button>
  );
}
