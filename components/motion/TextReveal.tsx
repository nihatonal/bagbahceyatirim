"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  return (
    <motion.div
      initial={{ y: 72, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}