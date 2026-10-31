"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import CertificationSlider from "@/components/CertificationSlider";
import { fadeIn } from "@/variants";

const Certifications = () => {
  return (
    <div className="min-h-full xl:h-full bg-primary/30 py-28 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Mes certifications <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-100 mx-auto lg:mx-0"
            >
              16 certifications : Oracle, Google, IBM, Meta, EPFL, Johns Hopkins, HKUST, University of Michigan, CrossKnowledge…
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <CertificationSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Certifications;
