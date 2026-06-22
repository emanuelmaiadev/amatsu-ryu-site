"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const principles = [
  {
    title: "Compreensão",
    text: "Técnica sem entendimento é só movimento vazio. O treinamento busca compreender princípios, não apenas repetir formas.",
  },
  {
    title: "Adaptação",
    text: "Nenhuma situação é exatamente igual à outra. Aprender a adaptar-se é mais importante do que decorar respostas prontas.",
  },
  {
    title: "Responsabilidade",
    text: "O verdadeiro valor da prática marcial está na forma como ela influencia nossas decisões dentro e fora do tatame.",
  },
];

export function PhilosophySection() {
  return (
    <SectionWrapper tone="deep" withParticles>
      <SectionHeading
        eyebrow="Filosofia"
        title="Além da Técnica"
        description="A prática marcial vai além do combate. Ela é uma ferramenta para compreender movimento, estratégia, adaptação e desenvolvimento humano."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-sm border border-gold-primary/15 bg-white/[0.02] p-6"
          >
            <h3 className="mb-4 font-display text-xl text-gold-secondary">
              {item.title}
            </h3>

            <p className="leading-relaxed text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
