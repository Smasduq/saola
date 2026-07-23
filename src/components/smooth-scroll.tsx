"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { type ReactNode, useCallback } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();

  const easing = useCallback((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), []);

  return (
    <ReactLenis
      root
      options={{
        duration: prefersReduced ? 0 : 1.2,
        easing: prefersReduced ? (t: number) => t : easing,
        smoothWheel: !prefersReduced,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
