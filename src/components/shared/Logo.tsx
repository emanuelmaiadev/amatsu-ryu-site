import Image from "next/image";
import Link from "next/link";

import { images } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const sizes = {
  sm: { container: 70 },
  md: { container: 120 },
  lg: { container: 150 },
};

export function Logo({
  size = "md",
  showText = false,
  className,
}: LogoProps) {
  const config = sizes[size];

  return (
    <Link
      href="#home"
      className={cn(
        "group flex shrink-0 items-center gap-3",
        className
      )}
      aria-label="Amatsu Ryū — voltar ao início"
    >
      <div
        className="
          relative
          flex
          shrink-0
          items-center
          justify-center
          transition-all
          duration-300
        "
        style={{
          width: config.container,
          height: config.container,
        }}
      >
        <Image
          src={images.logo}
          alt="Dragão celestial Amatsu Ryū"
          fill
          priority
          sizes="110px"
          className="
          object-contain
          object-center
          transition-all
          duration-300
          group-hover:scale-105
          [filter:drop-shadow(0_0_18px_rgba(212,175,55,0.55))]
        "
        />
      </div>

      {showText && (
        <div className="hidden flex-col sm:flex">
          <span className="font-display text-xl font-semibold tracking-[0.15em] text-gold-secondary text-gold-glow">
            AMATSU RYŪ
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Bujinkan Dōjō
          </span>
        </div>
      )}
    </Link>
  );
}