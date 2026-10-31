"use client";

import { useEffect, useState } from "react";

export type SceneCapability = "pending" | "full" | "lite" | "none";

const hasWebGL = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

/**
 * Decides how much 3D to render. Runs only on the client, so server and first
 * client render both output the static fallback and hydration never mismatches.
 */
export const useSceneCapability = (): SceneCapability => {
  const [capability, setCapability] = useState<SceneCapability>("pending");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");

    const evaluate = () => {
      if (reduce.matches || !hasWebGL()) return setCapability("none");
      setCapability(narrow.matches ? "lite" : "full");
    };

    evaluate();
    reduce.addEventListener("change", evaluate);
    narrow.addEventListener("change", evaluate);
    return () => {
      reduce.removeEventListener("change", evaluate);
      narrow.removeEventListener("change", evaluate);
    };
  }, []);

  return capability;
};
