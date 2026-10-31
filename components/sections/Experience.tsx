"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { Experience as ExperienceType } from "@/types";

const ExperienceCard = ({ experience, index }: { experience: ExperienceType; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  const panelId = `experience-${experience.id}`;

  return (
    <article className="card p-6 sm:p-7">
      <p className="font-mono text-xs text-cyan">{experience.period}</p>
      <h3 className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">{experience.role}</h3>
      <p className="mt-1 text-sm text-mute">{experience.organization}</p>
      <p className="mt-4 leading-relaxed text-paper/85">{experience.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {experience.stack.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-cyan-soft"
      >
        Responsibilities
        <ChevronDown size={16} aria-hidden className={cn("transition-transform duration-300", open && "rotate-180")} />
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        {/* `invisible` removes the collapsed content from the tab order and accessibility tree. */}
        <div className={cn("overflow-hidden transition-[visibility] duration-300", open ? "visible" : "invisible")}>
          <ul className="space-y-2 pt-2">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-mute">
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 sm:py-32">
    <div className="container-page">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Two internships, two technology stacks."
        intro="Hands-on work across a TypeScript stack (Angular and NestJS) and a .NET stack (Blazor and OCR)."
      />

      <ol className="relative space-y-6 sm:pl-10">
        <span className="absolute bottom-2 left-3 top-2 hidden w-px bg-gradient-to-b from-cyan/60 via-line to-transparent sm:block" aria-hidden />
        {experiences.map((experience, index) => (
          <Reveal key={experience.id} as="li" delay={index * 0.08} className="relative">
            <span
              className="absolute -left-[2.15rem] top-8 hidden size-3 rounded-full border-2 border-cyan bg-ink-950 sm:block"
              aria-hidden
            />
            <ExperienceCard experience={experience} index={index} />
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
