import { env } from "@/lib/env";
import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    question: "Preciso ter experiência?",
    answer: "Não. O treinamento é adaptado ao nível de cada aluno, desde iniciantes sem qualquer experiência até praticantes com vivência em outras artes marciais.",
  },
  {
    question: "O treinamento é voltado apenas para defesa pessoal?",
    answer:
      "Não. A defesa pessoal é uma aplicação prática do treinamento. O estudo também envolve consciência situacional, estratégia, movimentação corporal, tradição marcial japonesa e desenvolvimento pessoal.",
  },
  {
    question: "Existe aula experimental?",
    answer: env.trialClassEnabled
      ? "Sim. Você pode conhecer o ambiente, conversar com o instrutor e participar de uma aula experimental."
      : "No momento as aulas experimentais estão indisponíveis. Entre em contato para mais informações.",
  },
  {
    question: "Qual a idade mínima?",
    answer: "A idade mínima pode variar conforme a turma disponível. Entre em contato para mais informações.",
  },
  {
    question: "Preciso comprar uniforme imediatamente?",
    answer:
      "Não. Inicialmente é possível participar utilizando roupas adequadas para atividade física até a compra do uniforme (Keiko gi - uniforme de treino).",
  },
  {
    question: "A Bujinkan participa de competições?",
    answer:
      "Não. A Bujinkan não possui foco esportivo ou competitivo. O treinamento busca o desenvolvimento marcial, a compreensão do movimento e a aplicação prática dos princípios tradicionais transmitidos pelas escolas da organização.",
  },
  {
    question: "O treinamento é seguro?",
    answer:
      "Sim. Os exercícios são conduzidos de forma progressiva e adaptados ao nível técnico de cada praticante, priorizando segurança, controle e aprendizado gradual.",
  },

{
  question: "A Bujinkan é um estilo de Ninja?",
  answer:
    "A Bujinkan preserva tradições marciais japonesas que incluem escolas historicamente associadas aos ninja, mas o treinamento vai muito além dessa imagem popular. O foco está no estudo do movimento, estratégia, defesa pessoal e desenvolvimento marcial."
},
{
  question: "Preciso estar em boa forma física para começar?",
  answer:
    "Não. O treinamento é adaptado às capacidades individuais de cada aluno, permitindo evolução gradual conforme o condicionamento físico melhora."
},
];
