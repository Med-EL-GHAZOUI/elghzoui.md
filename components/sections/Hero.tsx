import { ArrowRight, Download, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { HeroVisual } from "@/components/three/HeroVisual";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const highlights = ["2 internships completed", "Oracle Certified: Java SE 17", "EMSI engineering · 2027"];

// Staggered CSS entrance: paints without waiting for JavaScript hydration.
const step = (index: number): CSSProperties => ({ "--i": index }) as CSSProperties;

export const Hero = () => (
  <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
    <div className="absolute -left-40 top-1/3 -z-10 size-[28rem] rounded-full bg-violet/10 blur-3xl" aria-hidden />

    <div className="absolute inset-y-0 right-0 -z-10 w-full opacity-35 lg:w-[56%] lg:opacity-100">
      <HeroVisual />
    </div>

    <div className="container-page pb-16 pt-28 lg:pb-20">
      <div className="max-w-xl lg:max-w-[34rem]">
        <p className="eyebrow hero-in" style={step(0)}>
          {profile.eyebrow}
        </p>

        <p className="hero-in mt-6 font-mono text-sm tracking-[0.2em] text-paper/90" style={step(1)}>
          {profile.name.toUpperCase()}
        </p>

        <h1
          id="hero-title"
          className="hero-in mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          style={step(2)}
        >
          <span className="sr-only">{profile.name} — </span>
          <span className="text-gradient">{profile.heading}</span>
        </h1>

        <p className="hero-in mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg" style={step(3)}>
          {profile.tagline}
        </p>

        <p
          className="hero-in mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-paper/90"
          style={step(4)}
        >
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </p>

        <div className="hero-in mt-8 flex flex-wrap gap-3" style={step(5)}>
          <ButtonLink href="#projects">
            Explore my work <ArrowRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            <Mail size={16} aria-hidden /> Get in touch
          </ButtonLink>
          <ButtonLink href={profile.cvPath} variant="ghost" download>
            <Download size={16} aria-hidden /> Download CV
          </ButtonLink>
        </div>

        <ul className="hero-in mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-mute" style={step(6)}>
          {highlights.map((text) => (
            <li key={text} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-cyan" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
