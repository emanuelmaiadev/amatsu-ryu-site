import { AtmosphericParticles } from "@/components/shared/AtmosphericParticles";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "elevated" | "deep" | "warm" | "accent";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  backgroundImage?: string;
  withParticles?: boolean;
};

const toneStyles: Record<SectionTone, string> = {
  default: "bg-background border-t border-white/[0.04]",
  elevated: "bg-[#080808] border-t border-gold-primary/10",
  deep: "bg-[#030303] border-t border-white/[0.06]",
  warm: "bg-gradient-to-b from-[#0a0906] to-background border-t border-gold-primary/15",
  accent: "bg-gradient-to-b from-background via-[#0c0a07] to-background border-t border-gold-primary/20",
};

export function SectionWrapper({
  id,
  children,
  className,
  tone = "default",
  backgroundImage,
  withParticles = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-16 md:py-24", toneStyles[tone], className)}
    >
      {backgroundImage && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      {withParticles && <AtmosphericParticles count={12} className="opacity-40" />}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
