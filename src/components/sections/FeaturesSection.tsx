"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Compass,
  Eye,
  Mountain,
  Shield,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Eye,
    title: "Percepção",
    description:
      "Aprender a observar o ambiente, as pessoas e as situações com mais clareza e consciência.",
  },
  {
    icon: Compass,
    title: "Adaptação",
    description:
      "Desenvolver a capacidade de responder de forma adequada às mudanças e desafios do cotidiano.",
  },
  {
    icon: Brain,
    title: "Compreensão",
    description:
      "Ir além da repetição mecânica das técnicas, buscando entender princípios e conceitos.",
  },
  {
    icon: Activity,
    title: "Movimento",
    description:
      "Explorar formas naturais e eficientes de movimentação através da prática marcial.",
  },
  {
    icon: Shield,
    title: "Responsabilidade",
    description:
      "Compreender o uso adequado das habilidades adquiridas e o impacto das próprias decisões.",
  },
  {
    icon: Mountain,
    title: "Constância",
    description:
      "Cultivar disciplina, paciência e evolução gradual através da prática contínua.",
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper tone="elevated">
      <SectionHeading
        eyebrow="Princípios"
        title="Princípios Cultivados no Treinamento"
        description="Elementos que buscamos desenvolver dentro e fora do tatame através da prática marcial."
        align="center"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
          >
            <Card
              className="
                group
                relative
                h-full
                overflow-hidden

                border-gold-primary/10
                bg-background

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-gold-primary/40

                hover:bg-gradient-to-br
                hover:from-[#3b2f0d]
                hover:via-[#1f1808]
                hover:to-[#080808]

                hover:shadow-[0_0_60px_rgba(212,175,55,.18)]
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

                  bg-[radial-gradient(circle_at_center,rgba(212,175,55,.12),transparent_70%)]
                "
              />

              {/* Marca d'água */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="
                    relative
                    h-64
                    w-64

                    transition-all
                    duration-700

                    group-hover:scale-110
                  "
                >
                  <Image
                    src="/images/bujin.png"
                    alt="Símbolo da Bujinkan"
                    fill
                    className="
                      object-contain

                      opacity-[0.08]
                      group-hover:opacity-[0.20]

                      transition-all
                      duration-700
                    "
                  />
                </div>
              </div>

              <CardHeader className="relative z-10">
                <feature.icon
                  className="
                    mb-2
                    h-6
                    w-6

                    text-gold-primary

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:text-[#f0d37a]
                  "
                />

                <CardTitle
                  className="
                    transition-all
                    duration-300

                    group-hover:text-[#f6de8b]
                  "
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-muted-foreground

                    transition-colors
                    duration-300

                    group-hover:text-white/95
                  "
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}