"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bujinkanSchools } from "@/data/bujinkan-schools";
import { cn } from "@/lib/utils";

export function BujinkanSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <SectionWrapper id="bujinkan" tone="deep" withParticles>
      <SectionHeading
        eyebrow="武神館"
        title="Conheça a Bujinkan."
        description="Mais do que técnicas de combate, a Bujinkan reúne diferentes formas de compreender movimento, estratégia, percepção e adaptação. Cada escola oferece uma perspectiva única, formando um sistema rico de aprendizado aplicável dentro e fora do tatame."
      />

      <div className="mb-12 text-center">
        <p className="font-display text-xl text-gold-secondary">Bujinkan</p>

        <p className="mt-1 text-sm tracking-[0.35em] text-gold-primary/70">
         é composta por:
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {bujinkanSchools.map((school) => {
          const expanded = activeId === school.id;

          return (
            <motion.div
              key={school.id}
              layout
              onMouseEnter={() => setActiveId(school.id)}
              onMouseLeave={() => setActiveId(null)}
              className={cn(
                "relative overflow-hidden rounded-sm border transition-all duration-300 cursor-pointer",
                expanded
                  ? "border-gold-primary bg-gold-primary/10 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:border-gold-primary/30",
              )}
            >
              <div className="relative p-6">
                {/* Kanji de fundo */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[5rem]
                    font-bold
                    text-gold-primary/[0.04]
                  "
                >
                  {school.kanji}
                </div>

                <motion.div layout>
                  <h3 className="font-display text-xl text-gold-secondary">
                    {school.name}
                  </h3>

                  <p className="mt-2 text-sm text-gold-primary/70">
                    {school.kanji}
                  </p>
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expanded ? "auto" : 0,
                    opacity: expanded ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {school.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="text-gold-primary">
                          Nome Completo:
                        </span>{" "}
                        {school.fullName}
                      </p>

                      <p>
                        <span className="text-gold-primary">Período:</span>{" "}
                        {school.century}
                      </p>

                      <p>
                        <span className="text-gold-primary">Fundador:</span>{" "}
                        {school.founder}
                      </p>

                      <p>
                        <span className="text-gold-primary">Região:</span>{" "}
                        {school.region}
                      </p>

                      <p>
                        <span className="text-gold-primary">
                          Características:
                        </span>{" "}
                        {school.characteristics}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Accordion
          type="single"
          collapsible
          defaultValue={bujinkanSchools[0]?.id}
        >
          {bujinkanSchools.map((school) => (
            <AccordionItem key={school.id} value={school.id}>
              <AccordionTrigger>
                <span>
                  {school.name}
                  <span className="ml-2 text-gold-primary/70">
                    ({school.kanji})
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-3">
                  <p className="font-display text-gold-secondary">
                    {school.fullName}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {school.description}
                  </p>

                  <p>
                    <span className="text-gold-primary">Período:</span>{" "}
                    {school.century}
                  </p>

                  <p>
                    <span className="text-gold-primary">Fundador:</span>{" "}
                    {school.founder}
                  </p>

                  <p>
                    <span className="text-gold-primary">Região:</span>{" "}
                    {school.region}
                  </p>

                  <p>
                    <span className="text-gold-primary">Características:</span>{" "}
                    {school.characteristics}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
