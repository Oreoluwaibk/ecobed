import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type PageIntroProps = {
  kicker: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ kicker, title, children }: PageIntroProps) {
  return (
    <header className="border-b border-line bg-card">
      <Reveal className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <p className="flex items-center gap-2 text-sm font-medium text-brand">
          <span className="inline-block h-2 w-2 bg-brand" aria-hidden="true" />
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          {children}
        </div>
      </Reveal>
    </header>
  );
}
