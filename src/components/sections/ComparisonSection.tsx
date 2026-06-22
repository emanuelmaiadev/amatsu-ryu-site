"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const items = [
  "Estudo da Bujinkan Budō Taijutsu e das nove tradições que compõem sua base técnica e filosófica",

  "Treinamento voltado para percepção, estratégia e desenvolvimento humano",

  "Defesa pessoal compreendida como consequência da prática marcial e não como único objetivo",

  "Aprendizado gradual, respeitando a experiência e o ritmo de cada praticante",

  "Ambiente acolhedor para iniciantes e praticantes experientes",

  "Contato com princípios marciais aplicáveis dentro e fora do tatame",

  "Busca contínua por adaptação, consciência e compreensão do movimento humano",
];

export function ComparisonSection() {
  return (
    <SectionWrapper tone="warm">
      <SectionHeading
        eyebrow="Nossa Abordagem"
        title="O Que Você Encontrará Aqui"
        description="Uma proposta de treinamento voltada ao estudo da arte marcial japonesa, da estratégia e do desenvolvimento humano."
        align="center"
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="border-l-2 border-gold-primary/30 pl-5">
            <p className="leading-relaxed text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
