import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Certification, Education as EducationType } from "@/types";

type EducationProps = { education: EducationType[]; certifications: Certification[] };

export const Education = ({ education, certifications }: EducationProps) => (
  <section id="education" aria-labelledby="education-title" className="border-t border-line py-24 sm:py-32">
    <div className="container-page">
      <SectionHeading id="education-title" eyebrow="Education" title="Education and certifications." />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-mute">
            <GraduationCap size={16} aria-hidden /> Education
          </h3>
          <ol className="relative mt-6 space-y-5 border-l border-line pl-6">
            {education.map((entry, index) => (
              <Reveal key={entry.id} as="li" delay={index * 0.08} className="relative">
                <span className="absolute -left-[1.85rem] top-2 size-2.5 rounded-full border-2 border-cyan bg-ink-950" aria-hidden />
                <p className="font-mono text-xs text-cyan">{entry.period}</p>
                <h4 className="mt-1 font-display text-lg font-semibold leading-snug">{entry.title}</h4>
                <p className="mt-1 text-sm text-mute">{entry.institution}</p>
                {entry.detail && <p className="mt-2 text-sm text-paper/80">{entry.detail}</p>}
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-mute">
            <Award size={16} aria-hidden /> Certifications
          </h3>
          <ul className="mt-6 space-y-4">
            {certifications.map((cert, index) => (
              <Reveal key={cert.id} as="li" delay={index * 0.08}>
                <div className="card p-5 transition-colors duration-300 hover:border-cyan/40">
                  <p className="font-mono text-xs text-cyan">{cert.date}</p>
                  <h4 className="mt-1 font-display text-lg font-semibold leading-snug">{cert.title}</h4>
                  <p className="mt-1 text-sm text-mute">{cert.issuer}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-cyan hover:text-cyan-soft"
                    >
                      Verify credential
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
