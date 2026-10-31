"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { useSceneCapability } from "@/hooks/useSceneCapability";
import { cn } from "@/lib/utils";
import { StaticHeroArt } from "./StaticHeroArt";

// three.js is only downloaded when the 3D scene will actually be shown.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

type BoundaryProps = { fallback: ReactNode; children: ReactNode };

/** Falls back to the static art if WebGL context creation or rendering throws. */
class SceneBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export const HeroVisual = () => {
  const capability = useSceneCapability();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [ready, setReady] = useState(false);

  // Stop rendering frames while the hero is off-screen.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry && setInView(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const show3d = capability === "full" || capability === "lite";

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0" aria-hidden>
      <div className={cn("absolute inset-0 transition-opacity duration-700", ready ? "opacity-0" : "opacity-100")}>
        <StaticHeroArt />
      </div>
      {show3d && (
        <div className={cn("absolute inset-0 transition-opacity duration-700", ready ? "opacity-100" : "opacity-0")}>
          <SceneBoundary fallback={null}>
            <HeroScene lite={capability === "lite"} active={inView} onReady={() => setReady(true)} />
          </SceneBoundary>
        </div>
      )}
    </div>
  );
};
