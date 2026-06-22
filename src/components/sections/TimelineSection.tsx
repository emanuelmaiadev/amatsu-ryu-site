"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Entre em Contato",
    description:
      "Envie uma mensagem pelo WhatsApp ou formulário e tire suas dúvidas sobre o treinamento, horários e funcionamento do dōjō.",
  },
  {
    step: "02",
    title: "Conheça o Dōjō",
    description:
      "Agende uma visita para conhecer o espaço, conversar com o instrutor e compreender melhor a proposta da Bujinkan.",
  },
  {
    step: "03",
    title: "Participe de uma Aula Experimental",
    description:
      "Vivencie o treinamento na prática, conheça a dinâmica das aulas e descubra se este caminho faz sentido para você.",
  },
  {
    step: "04",
    title: "Inicie sua Jornada",
    description:
      "Caso deseje continuar, você poderá realizar sua matrícula e iniciar seus estudos dentro do Budō Japonês no seu próprio ritmo.",
  },
];

export function TimelineSection() {
  return (
    <SectionWrapper tone="elevated">
      <SectionHeading
        eyebrow="Primeiros Passos"
        title="Como Funciona"
        description="Um processo simples e acolhedor para quem deseja conhecer o dōjō."
        align="center"
      />

      {/* Mobile */}
      <div className="space-y-8 md:hidden">
        {steps.map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-primary/50 bg-background font-display text-sm text-gold-secondary">
              {item.step}
            </div>
            <div>
              <h3 className="font-display text-lg text-gold-secondary">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop — alternating without invisible columns */}
      <div className="relative mx-auto hidden max-w-4xl md:block">
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gold-primary/25"
          aria-hidden="true"
        />

        {steps.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={item.step} className="relative mb-12 last:mb-0">
              <div
                className={cn(
                  "w-[calc(50%-2rem)]",
                  isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left",
                )}
              >
                <h3 className="font-display text-lg text-gold-secondary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold-primary/50 bg-background font-display text-sm text-gold-secondary">
                {item.step}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
