"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const smoothEase = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

type EntranceProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Entrance({ children, className, delay = 0 }: EntranceProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
