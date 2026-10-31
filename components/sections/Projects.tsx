"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const MAX_TAGS = 4;

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work."
          intro="Four projects across internships and coursework. The illustrations are abstract artwork, not application screenshots."
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} as="li" delay={(index % 2) * 0.1}>
              <article className="card group flex h-full flex-col overflow-hidden transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-cyan/40">
                <ProjectVisual
                  theme={project.theme}
                  className="aspect-[400/220] w-full border-b border-line transition-opacity duration-300 group-hover:opacity-100 sm:opacity-90"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-cyan">
                    {project.index} · {project.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{project.name}</h3>
                  <p className="mt-1 text-sm text-mute">{project.type}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-paper/80">{project.summary}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies for ${project.name}`}>
                    {project.stack.slice(0, MAX_TAGS).map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                    {project.stack.length > MAX_TAGS && (
                      <li className="tag text-mute">+{project.stack.length - MAX_TAGS}</li>
                    )}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    aria-haspopup="dialog"
                    className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-cyan transition-colors hover:text-cyan-soft"
                  >
                    View project <span className="sr-only">: {project.name}</span>
                    <ArrowUpRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
