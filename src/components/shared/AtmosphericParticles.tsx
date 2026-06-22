import { cn } from "@/lib/utils";

type AtmosphericParticlesProps = {
  count?: number;
  className?: string;
};

export function AtmosphericParticles({ count = 10, className }: AtmosphericParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    delay: `${(i % 5) * 1.2}s`,
    size: i % 3 === 0 ? 3 : 2,
  }));

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold-primary/60 animate-ember-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
