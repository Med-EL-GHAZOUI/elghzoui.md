import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { certifications, education } from "@/data/education";
import { profile } from "@/data/profile";
import { Education } from "@/components/sections/Education";
import { siteUrl } from "@/lib/utils";

// Public contact details only: no phone number or street address is exposed.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: siteUrl(),
  address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
  alumniOf: "EMSI — École Marocaine des Sciences de l'Ingénieur",
  sameAs: [profile.linkedin, profile.github],
};

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <ScrollProgress />
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education education={education} certifications={certifications} />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default Page;
