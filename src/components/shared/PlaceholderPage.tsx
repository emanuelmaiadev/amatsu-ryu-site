import Link from "next/link";

import { Button } from "@/components/ui/button";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-gold-secondary">{title}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">{description}</p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </main>
  );
}
