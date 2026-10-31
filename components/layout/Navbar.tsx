"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = [...navItems.map((item) => item.id), "education"];

export const Navbar = () => {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (id: string) => active === id || (id === "skills" && active === "education");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        open ? "border-line bg-ink-950 backdrop-blur-md" : scrolled ? "border-line bg-ink-950/85 backdrop-blur-md" : "border-transparent",
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight"
          aria-label="Mohamed EL-GHAZOUI, back to top"
        >
          M<span className="text-cyan">.</span>EG
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isCurrent(item.id) ? "true" : undefined}
                className={cn(
                  "relative block rounded-lg px-3 py-2 text-sm transition-colors",
                  isCurrent(item.id) ? "text-paper" : "text-mute hover:text-paper",
                )}
              >
                {item.label}
                {isCurrent(item.id) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-px h-px bg-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line md:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(item.id) ? "true" : undefined}
                    className={cn(
                      "flex min-h-12 items-center border-b border-line/60 text-base",
                      isCurrent(item.id) ? "text-cyan" : "text-paper",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
