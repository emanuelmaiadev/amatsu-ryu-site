"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { AtmosphericParticles } from "@/components/shared/AtmosphericParticles";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/herobackground.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background" />

      <AtmosphericParticles count={20} className="opacity-60" />

      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gold-primary"
        >
          Arte Marcial Japonesa • Estratégia • Desenvolvimento Humano
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl font-semibold tracking-[0.12em] text-gold-secondary sm:text-6xl lg:text-8xl"
        >
          AMATSU RYŪ
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-3 text-xl tracking-[0.3em] text-gold-primary sm:text-2xl lg:text-3xl"
        >
          BUJINKAN DŌJŌ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 max-w-3xl text-xl italic text-muted-foreground"
        >
          “Técnica sem entendimento é só movimento vazio.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
        >
          Um espaço dedicado ao estudo da arte marcial japonesa, da estratégia
          e do desenvolvimento humano através da prática da Bujinkan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#contato">
              Conhecer o Dōjō
            </Link>
          </Button>

          <a
            href="https://wa.me/5585992204871"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-md
              border
              border-gold-primary
              px-8
              text-sm
              font-medium
              text-gold-primary
              transition-colors
              hover:bg-gold-primary/10
            "
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16"
        >
          <div className="flex flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-gold-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}