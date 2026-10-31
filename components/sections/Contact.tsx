import { Download, Github, Linkedin, Mail, MapPin, Navigation } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";

const formEnabled = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

const facts = [
  { icon: MapPin, text: profile.location },
  { icon: Navigation, text: profile.mobility },
  { icon: Mail, text: "PFE availability starting February 2027" },
] as const;

export const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="relative border-t border-line py-24 sm:py-32">
    <div className="container-page">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Have a project or opportunity in mind?"
        intro="Let's discuss how I can contribute to your team."
      />

      <div className={formEnabled ? "grid gap-10 lg:grid-cols-2" : "max-w-2xl"}>
        <Reveal className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden /> {profile.email}
            </ButtonLink>
            <ButtonLink href={profile.cvPath} variant="secondary" download>
              <Download size={16} aria-hidden /> Download CV
            </ButtonLink>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={profile.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} aria-hidden /> LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
            <ButtonLink href={profile.github} variant="secondary" target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden /> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
          </div>
          <ul className="space-y-3 border-t border-line pt-6">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-mute">
                <Icon size={16} className="text-cyan" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        {formEnabled && (
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        )}
      </div>
    </div>
  </section>
);
