"use client";

import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/types";
import { ProjectVisual } from "./ProjectVisual";

type ProjectModalProps = { project: Project | null; onClose: () => void };

/**
 * Uses the native <dialog> element: it traps focus, closes on Escape, makes the
 * rest of the page inert, and returns focus to the trigger when it closes.
 */
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="project-dialog m-auto w-[min(44rem,calc(100vw-1.5rem))] max-h-[calc(100svh-1.5rem)] overflow-y-auto rounded-card border border-line-strong bg-ink-900 p-0 text-paper backdrop:bg-ink-950/80 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div>
          <div className="relative">
            <ProjectVisual theme={project.theme} className="aspect-[400/220] w-full" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-ink-950/80 text-paper transition-colors hover:border-cyan/60"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <header>
              <p className="font-mono text-xs text-cyan">
                {project.index} · {project.date}
              </p>
              <h3 id="project-dialog-title" className="mt-2 font-display text-2xl font-semibold leading-snug">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-mute">{project.type}</p>
              <p className="mt-4 leading-relaxed text-paper/85">{project.summary}</p>
              <p className="mt-2 text-sm text-mute">{project.context}</p>
            </header>

            <DetailList title="Technical focus" items={project.focus} />
            <DetailList title="Verified functionality" items={project.functionality} />

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-mute">Stack</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong px-4 text-sm hover:border-cyan/60"
                >
                  <Github size={16} aria-hidden /> Source code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan px-4 text-sm font-medium text-ink-950 hover:bg-cyan-soft"
                >
                  <ExternalLink size={16} aria-hidden /> Live demo
                </a>
              )}
              {!project.repoUrl && !project.demoUrl && (
                <p className="text-sm text-mute">No public repository or live demo is linked for this project.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-mute">{title}</h4>
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-paper/85">
          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
