"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildInterestFormWhatsAppUrl } from "@/lib/whatsapp";

const formSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
  hasExperience: z.enum(["Sim", "Não"], {
    message: "Selecione uma opção",
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function InterestFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasExperience: "Não",
    },
  });

  const onSubmit = (data: FormData) => {
    window.open(
      buildInterestFormWhatsAppUrl({
        ...data,
        email: "",
      }),
      "_blank",
      "noopener,noreferrer"
    );
  
    reset({
      name: "",
      whatsapp: "",
      hasExperience: "Não",
      message: "",
    });
  };
  
  return (
    <SectionWrapper tone="warm">
      <SectionHeading
        eyebrow="Primeiro Contato"
        title="Quer Conhecer o Dōjō?"
        description="Preencha os dados abaixo e uma mensagem será preparada automaticamente no WhatsApp."
        align="center"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          mx-auto
          max-w-lg
          space-y-5
          rounded-sm
          border
          border-gold-primary/15
          bg-white/[0.02]
          p-6
          md:p-8
        "
      >
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>

          <Input
            id="name"
            {...register("name")}
            placeholder="Seu nome"
          />

          {errors.name && (
            <p className="text-sm text-accent-red">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp</Label>

          <Input
            id="whatsapp"
            {...register("whatsapp")}
            placeholder="(85) 99999-9999"
          />

          {errors.whatsapp && (
            <p className="text-sm text-accent-red">
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="hasExperience">
            Já treinou artes marciais?
          </Label>

          <select
            id="hasExperience"
            {...register("hasExperience")}
            className="
              flex
              h-10
              w-full
              rounded-sm
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              text-sm
              text-foreground
            "
          >
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
          </select>

          {errors.hasExperience && (
            <p className="text-sm text-accent-red">
              {errors.hasExperience.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            O que despertou seu interesse? (opcional)
          </Label>

          <Textarea
            id="message"
            {...register("message")}
            placeholder="Defesa pessoal, cultura japonesa, condicionamento físico, desenvolvimento pessoal..."
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          Continuar pelo WhatsApp
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Nenhum cadastro é realizado. Ao clicar, será aberta uma conversa no
          WhatsApp com seus dados já preenchidos.
        </p>
      </form>
    </SectionWrapper>
  );
}