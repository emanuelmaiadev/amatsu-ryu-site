"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { images } from "@/config/site";
import { env } from "@/lib/env";

const DRAGON_BG = "/images/dragonbg.png";

const biography = [
  "Emanuel Maia iniciou sua jornada na Bujinkan Budō Taijutsu em 2011, dedicando-se ao estudo contínuo da arte marcial japonesa, seus princípios estratégicos e sua aplicação prática na vida contemporânea.",
  "Ao longo de sua trajetória treinou com diferentes instrutores ligados à linhagem da Bujinkan em Fortaleza e Vitória, ampliando sua compreensão técnica e aprofundando o contato com as tradições marciais japonesas.",
  "Em 2018 recebeu a graduação de Shodan (Faixa Preta 1º Dan) e posteriormente assumiu a condução do Banpen Fugyō Dōjō, ministrando aulas, organizando seminários e promovendo atividades voltadas à defesa pessoal e ao desenvolvimento humano.",
  "Atualmente mantém seus estudos sob orientação do Sensei Higashi, residente no Japão, buscando constante evolução técnica através da prática da Bujinkan e do estudo de estratégia, movimento e desenvolvimento humano.",
];

export function InstructorSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SectionWrapper id="instrutor">
      <SectionHeading eyebrow="Instrutor" title="Conheça quem conduz o Dōjō" />

      <div className="mx-auto mt-12 max-w-6xl">
        <div
          onClick={() => setExpanded(!expanded)}
          className={`cursor-pointer ${expanded ? "grid lg:grid-cols-[420px_1fr]" : ""}`}
        >
          {/* FOTO */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={images.instructor}
              alt={env.instructorName}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
              priority
            />

            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="font-display text-2xl text-gold-primary">
                  {env.instructorName}
                </h3>
                <Badge className="mt-2">{env.instructorRank}</Badge>
                <p className="mt-3 text-sm text-white/70">
                  Clique para conhecer a trajetória
                </p>
              </div>
            )}
          </div>

          {/* TEXTO EXPANDIDO */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative isolate overflow-hidden p-8 lg:p-12"
                style={{
                  backgroundImage: `url(${DRAGON_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Escurecedor (mais leve pra ver o dragão) */}
                <div className="absolute inset-0 -z-10 bg-black/55" />

                {/* Glow dourado */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(200,162,74,0.22),transparent_70%)]" />

                {/* Vinheta */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85))]" />

                <h3 className="relative z-10 font-display text-4xl text-gold-primary">
                  {env.instructorName}
                </h3>

                <div className="relative z-10 mt-3">
                  <Badge>{env.instructorRank}</Badge>
                </div>

                <div className="relative z-10 mt-6 space-y-4 leading-relaxed text-white/90">
                  {biography.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(false);
                  }}
                  className="relative z-10 mt-6 w-fit border border-gold-primary/30 px-5 py-2 text-sm uppercase tracking-wider text-gold-secondary transition hover:bg-gold-primary/10"
                >
                  Fechar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
