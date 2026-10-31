import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { evidenceLegend, skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { Evidence } from "@/types";

const dotStyle: Record<Evidence, string> = {
  internship: "bg-cyan",
  project: "bg-violet",
  certified: "border border-paper bg-transparent",
  knowledge: "bg-mute/50",
};

const EvidenceDot = ({ evidence }: { evidence: Evidence }) => (
  <span className={cn("size-2 shrink-0 rounded-full", dotStyle[evidence])} aria-hidden />
);

export const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
    <div className="container-page">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="A Full-Stack toolkit, labelled honestly."
        intro="Each technology shows where it was used, so experience, projects and general knowledge are never blurred together."
      />

      <Reveal className="mb-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mute" aria-label="Legend">
          {(Object.keys(evidenceLegend) as Evidence[]).map((key) => (
            <li key={key} className="flex items-center gap-2" title={evidenceLegend[key].hint}>
              <EvidenceDot evidence={key} />
              <span>
                <span className="text-paper">{evidenceLegend[key].label}</span>
                <span className="hidden sm:inline"> — {evidenceLegend[key].hint}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mb-10">
        <div className="card relative overflow-hidden p-6 sm:p-8">
          <div className="absolute -right-20 -top-20 size-60 rounded-full bg-cyan/10 blur-3xl" aria-hidden />
          <p className="eyebrow">Java focus</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Java and the Spring ecosystem</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-mute">
            Oracle Certified Professional: Java SE 17 Developer (June 2026). Spring Boot and JPA/Hibernate are part of my
            technical knowledge and the direction I want to grow in professionally; my internship experience so far is
            on the TypeScript and .NET stacks.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.id}
            delay={(index % 2) * 0.08}
            className={cn(category.id === "backend" && "md:col-span-2")}
          >
            <section aria-labelledby={`skills-${category.id}`} className="card h-full p-6 sm:p-7">
              <h3 id={`skills-${category.id}`} className="font-display text-xl font-semibold">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-mute">{category.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    title={evidenceLegend[item.evidence].hint}
                    className="tag gap-2 transition-colors duration-200 hover:border-cyan/50 hover:text-paper"
                  >
                    <EvidenceDot evidence={item.evidence} />
                    {item.name}
                    <span className="sr-only"> ({evidenceLegend[item.evidence].label})</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
