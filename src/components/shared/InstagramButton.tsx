import { InstagramIcon } from "./InstagramIcon";
import { ContactActionButton } from "./ContactActionButton";

import { env } from "@/lib/env";

type InstagramButtonProps = {
  label?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function InstagramButton({
  label = "Instagram",
  variant = "outline",
  size = "default",
  className,
}: InstagramButtonProps) {
  if (!env.instagramUrl) return null;

  return (
    <ContactActionButton
      href={env.instagramUrl}
      label={label}
      icon={InstagramIcon}
      variant={variant}
      size={size}
      className={className}
    />
  );
}