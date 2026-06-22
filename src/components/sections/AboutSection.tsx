"use client";

import Image from "next/image";
import {
  Brain,
  Compass,
  Eye,
  Flame,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionWrapper } from "@/components/shared/SectionWrapper";

const values: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Compass,
    title: "PRINCÍPIOS DA BUJINKAN",
    description:
      "Nove escolas estudadas como um sistema vivo de estratégia, adaptação e movimento.",
  },
  {
    icon: Sparkles,
    title: "DESENVOLVIMENTO HUMANO",
    description:
      "Treinar corpo, mente e postura para enfrentar desafios dentro e fora do tatame.",
  },
  {
    icon: Brain,
    title: "ESTRATÉGIA",
    description:
      "Compreender situações, evitar conflitos desnecessários e agir com clareza quando necessário.",
  },
  {
    icon: Shield,
    title: "DEFESA PESSOAL",
    description:
      "Resultado natural do treinamento, construído através de percepção, posicionamento e decisão.",
  },
  {
    icon: Eye,
    title: "CONSCIÊNCIA SITUACIONAL",
    description:
      "Observar o ambiente, interpretar intenções e reconhecer oportunidades antes que o problema aconteça.",
  },
  {
    icon: Flame,
    title: "EVOLUÇÃO CONTÍNUA",
    description:
      "Cada treino é um passo adiante. O aprendizado não termina na graduação.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="dojo" tone="elevated">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.4em] text-gold-primary/70">
            DŌJŌ (道場)
          </p>

          <h2 className="font-display text-5xl text-gold-secondary md:text-7xl">
            O DŌJŌ
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-gold-primary/40" />

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            O Amatsu Ryū é um espaço dedicado ao estudo da Bujinkan Budō
            Taijutsu, integrando estratégia, desenvolvimento humano e prática
            marcial em uma abordagem relevante para o mundo atual.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-px bg-gold-primary/10 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden

                  bg-background

                  px-8
                  py-12

                  transition-all
                  duration-500

                  hover:-translate-y-2

                  hover:bg-gradient-to-br
                  hover:from-[#4d3d11]
                  hover:via-[#241b09]
                  hover:to-[#080808]

                  hover:shadow-[0_0_80px_rgba(212,175,55,.30)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    transition-all
                    duration-700

                    group-hover:opacity-100

                    bg-[radial-gradient(circle_at_center,rgba(212,175,55,.18),transparent_75%)]
                  "
                />

                {/* Marca d'água */}
                <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                  <div
                    className="
                      relative
                      h-96
                      w-96

                      transition-all
                      duration-700

                      group-hover:scale-140
                    "
                  >
                    <Image
                      src="/images/bujin.png"
                      alt="Símbolo da Bujinkan"
                      fill
                      className="
                        object-contain

                        opacity-[0.12]
                        group-hover:opacity-[0.35]

                        transition-all
                        duration-700
                      "
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <Icon
                    className="
                      mb-6
                      h-6
                      w-6

                      text-gold-primary

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:text-[#f0d37a]
                    "
                  />

                  <h3
                    className="
                      font-display
                      text-2xl
                      text-gold-secondary

                      transition-all
                      duration-300

                      group-hover:text-[#f6de8b]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      h-px
                      w-12

                      bg-gold-primary/30

                      transition-all
                      duration-300

                      group-hover:w-24
                      group-hover:bg-gold-primary
                    "
                  />

                  <p
                    className="
                      mt-6
                      leading-relaxed
                      text-muted-foreground

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}