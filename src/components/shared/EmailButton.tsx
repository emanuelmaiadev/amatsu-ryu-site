import { Mail } from "lucide-react";

import { ContactActionButton } from "./ContactActionButton";
import { env } from "@/lib/env";

type EmailButtonProps = {
  label?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function EmailButton({
  label = "E-mail",
  variant = "outline",
  size = "default",
  className,
}: EmailButtonProps) {
  if (!env.email) return null;

  return (
    <ContactActionButton
      href={`mailto:${env.email}`}
      label={label}
      icon={Mail}
      variant={variant}
      size={size}
      className={className}
    />
  );
}