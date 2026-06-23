import Link from "next/link";
import { ElementType } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactActionButtonProps = {
  href: string;
  label: string;
  icon: ElementType;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function ContactActionButton({
  href,
  label,
  icon: Icon,
  variant = "outline",
  size = "default",
  className,
}: ContactActionButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "min-w-[220px]",
        className
      )}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span>{label}</span>
      </Link>
    </Button>
  );
}