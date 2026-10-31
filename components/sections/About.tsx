import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { biography, principles, profile } from "@/data/profile";

export const About = () => (
  <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
    <div className="container-page">
      <SectionHeading id="about-title" eyebrow="About" title="Beyond the code." />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <Reveal className="space-y-6">
          <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-card border border-line sm:aspect-[4/4.2]">
            <Image
              src={profile.photoPath}
              alt="Portrait of Mohamed EL-GHAZOUI"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" aria-hidden />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-mute">
            {biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ol className="space-y-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} as="li" delay={index * 0.08}>
              <div className="card group flex gap-5 p-6 transition-colors duration-300 hover:border-cyan/40">
                <span className="font-mono text-sm text-cyan">{principle.number}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-2 leading-relaxed text-mute">{principle.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
