"use client";

import { motion } from "framer-motion";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-full xl:h-full">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center py-8 xl:py-0 xl:pt-40 xl:text-left min-h-full xl:h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Développeur <br /> <span className="text-accent">Full-Stack</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Étudiant ingénieur en 5ème année à l&apos;EMSI Rabat, certifié Oracle Java SE 17. Je conçois des applications web avec Java / Spring Boot, Angular, NestJS, Next.js et .NET. Deux stages réalisés — je recherche un stage PFE de 6 mois en développement full-stack.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-7xl h-full absolute right-0 bottom-0 pointer-events-none">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-184.25 max-h-169.5 absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
