"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "+",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 1800,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}