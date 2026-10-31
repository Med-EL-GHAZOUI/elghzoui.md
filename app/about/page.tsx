"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaAngular, FaDocker, FaGitAlt, FaJava, FaPython, FaReact } from "react-icons/fa";
import type { IconType } from "react-icons";
import { SiDotnet, SiNestjs, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { education, experiences, languages } from "@/lib/data";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  icons?: IconType[];
};

type AboutDataItem = {
  title: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "compétences",
    info: [
      { title: "Back-end : Java, Spring Boot, NestJS, Django, Flask, Laravel, .NET 9, Blazor", icons: [FaJava, SiSpringboot, SiNestjs, SiDotnet] },
      { title: "Front-end : Angular, React, Next.js, TypeScript, Tailwind CSS", icons: [FaAngular, FaReact, SiNextdotjs] },
      { title: "Bases de données : PostgreSQL, MySQL, MariaDB, Oracle, MongoDB, SQL Server" },
      { title: "Data / Python : Pandas, NumPy, modèles de prédiction, OCR", icons: [FaPython] },
      { title: "Outils : Git, Maven, Docker, Linux, Postman, UML, Agile / Scrum", icons: [FaGitAlt, FaDocker] },
    ],
  },
  { title: "expérience", info: experiences },
  { title: "formation", info: education },
  { title: "langues", info: languages },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-full xl:h-full bg-primary/30 py-28 xl:py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-92.5"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Un profil <span className="text-accent">full-stack</span> tourné vers le développement logiciel.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-125 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Étudiant en 5ème année du cycle d&apos;ingénieur en Informatique et Réseaux à l&apos;EMSI (option Développement Digital et Systèmes d&apos;Information). Deux stages réalisés (COPAG, Smart Data Innovation), certifié Oracle Java SE 17, à la recherche d&apos;un stage PFE de 6 mois.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Stages réalisés.
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Projets réalisés.
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={16} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Certifications.
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Années d&apos;études.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-120"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
