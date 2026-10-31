import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-[background-color,border-color,transform,color] duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-cyan text-ink-950 hover:bg-cyan-soft",
  secondary: "border border-line-strong bg-white/[0.03] text-paper hover:border-cyan/60 hover:bg-white/[0.06]",
  ghost: "text-mute hover:text-paper",
};

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };

export const ButtonLink = ({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cn(base, variants[variant], className)} {...rest}>
    {children}
  </a>
);

export const Button = ({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cn(base, variants[variant], className)} {...rest}>
    {children}
  </button>
);
