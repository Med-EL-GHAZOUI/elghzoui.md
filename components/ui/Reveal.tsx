"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

const MotionTags = { div: motion.div, li: motion.li, article: motion.article } as const;

/** Scroll-triggered fade and rise. Uses only opacity and transform. */
export const Reveal = ({ children, delay = 0, className, as = "div" }: RevealProps) => {
  const Tag = MotionTags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};
