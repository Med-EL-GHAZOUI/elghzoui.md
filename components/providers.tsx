"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Makes every Framer Motion animation honour `prefers-reduced-motion`. */
export const Providers = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
