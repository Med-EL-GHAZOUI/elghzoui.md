import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
};

export const SectionHeading = ({ id, eyebrow, title, intro }: SectionHeadingProps) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 id={id} className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
      {title}
    </h2>
    {intro && <p className="mt-4 text-base leading-relaxed text-mute">{intro}</p>}
  </Reveal>
);
