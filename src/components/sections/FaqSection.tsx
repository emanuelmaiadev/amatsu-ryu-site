"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" tone="default">
      <SectionHeading
        eyebrow="Dúvidas"
        title="Perguntas Frequentes"
        description="Respostas às perguntas mais comuns sobre o dōjō e o treinamento."
        align="center"
      />

      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
