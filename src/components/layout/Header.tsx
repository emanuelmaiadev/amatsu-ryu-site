"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { navigationItems } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

const sectionIds = navigationItems.map((item) => item.href.replace("#", ""));

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(20);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-gold-primary/15 bg-background/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[5.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="md" showText />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {navigationItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm tracking-wide transition-colors",
                  isActive
                    ? "text-gold-secondary"
                    : "text-muted-foreground hover:text-gold-secondary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-gold-secondary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-muted-foreground transition-colors hover:text-gold-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <WhatsAppButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
