import { MapPin } from "lucide-react";

import { ContactActionButton } from "./ContactActionButton";
import { env } from "@/lib/env";

type AddressButtonProps = {
  label?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function AddressButton({
  label = "Como chegar",
  variant = "outline",
  size = "default",
  className,
}: AddressButtonProps) {
  if (!env.googleMapsUrl) return null;

  return (
    <ContactActionButton
      href={env.googleMapsUrl}
      label={label}
      icon={MapPin}
      variant={variant}
      size={size}
      className={className}
    />
  );
}