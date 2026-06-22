import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { Logo } from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
import { env } from "@/lib/env";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Logo size="sm" showText />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>{env.whatsapp}</span>

            <span className="hidden sm:block text-gold-primary/30">•</span>

            <span>{env.email}</span>

            {env.instagramUrl && (
              <>
                <span className="hidden sm:block text-gold-primary/30">•</span>

                <a
                  href={env.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-secondary"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {env.instagramHandle}
                </a>
              </>
            )}
          </div>

          <Separator />

          <p className="text-center text-xs text-muted-foreground">
            © {year} {env.dojoName}
          </p>
        </div>
      </div>
    </footer>
  );
}