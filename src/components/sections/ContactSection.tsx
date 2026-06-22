import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { formattedAddress } from "@/config/site";
import { env } from "@/lib/env";

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex gap-4 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const whatsappDigits = env.whatsapp.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappDigits}`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=0&data=${encodeURIComponent(
    whatsappLink,
  )}`;

  // Endereço fixo para o Google Maps
  const mapsAddress = "Rua Tabelião Joaquim Coelho, 366A - Sapiranga, Fortaleza - CE";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsAddress,
  )}`;

  return (
    <SectionWrapper id="contato">
      <SectionHeading title="Contato" />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* COLUNA ESQUERDA — card único com lista dividida */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">Nossos canais</h2>
            <p className="text-sm text-muted-foreground">
              Todas as formas de entrar em contato conosco.
            </p>
          </div>

          <div className="divide-y">
            <ContactItem icon={<MapPin className="h-5 w-5" />} title="Endereço">
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-primary"
              >
                <p>{formattedAddress.street}</p>
                <p>{formattedAddress.building}</p>
                <p>{formattedAddress.complement}</p>
                <p>{formattedAddress.city}</p>
                <span className="mt-1 inline-block text-xs font-medium text-primary">
                  Abrir no Google Maps →
                </span>
              </Link>
            </ContactItem>

            <ContactItem icon={<Phone className="h-5 w-5" />} title="Telefone">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {env.whatsapp}
              </a>
            </ContactItem>

            <ContactItem icon={<Mail className="h-5 w-5" />} title="E-mail">
              <a href={`mailto:${env.email}`}>{env.email}</a>
            </ContactItem>

            {env.instagramUrl && (
              <ContactItem icon={<InstagramIcon className="h-5 w-5" />} title="Instagram">
                <a href={env.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {env.instagramHandle}
                </a>
              </ContactItem>
            )}
          </div>
        </div>

        {/* COLUNA DIREITA — mesmo container, QR como herói */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">Fale agora pelo WhatsApp</h2>
            <p className="text-sm text-muted-foreground">
              Atendimento rápido e para dúvidas, visitas e matrículas.
            </p>
          </div>

          <div className="flex justify-center py-4">
            <div className="rounded-xl border bg-white p-4">
              <Image src={qrSrc} alt="QR Code WhatsApp" width={240} height={240} unoptimized />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Escaneie o QR Code com a câmera do seu celular ou clique abaixo.
          </p>

          <div className="mt-4 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
