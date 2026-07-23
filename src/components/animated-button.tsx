"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const stripeEase = [0.4, 0, 0.2, 1] as const;

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: AnimatedButtonProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md bg-brown px-8 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      whileHover={prefersReduced ? undefined : { y: -2, boxShadow: "0 8px 25px -5px rgba(139, 111, 71, 0.4)" }}
      whileTap={prefersReduced ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: stripeEase }}
    >
      {children}
    </motion.button>
  );
}
