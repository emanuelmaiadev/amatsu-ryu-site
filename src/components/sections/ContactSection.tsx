import { SectionWrapper } from "@/components/shared/SectionWrapper";

import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AddressButton } from "@/components/shared/AddressButton";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { EmailButton } from "@/components/shared/EmailButton";

export function ContactSection() {
  return (
    <SectionWrapper id="contato" className="py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-serif text-4xl text-bone sm:text-5xl">
          Pronto para treinar?
        </h2>

        <p className="mt-4 font-serif text-lg text-bone/70">
          Agende sua aula experimental gratuita.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppButton />
          <AddressButton />
          <InstagramButton />
          <EmailButton />
        </div>
      </div>
    </SectionWrapper>
  );
}