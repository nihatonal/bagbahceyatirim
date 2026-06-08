'use client';

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  offset?: number;
};

export default function Parallax({
  children,
  className,
  offset = 120,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-offset, offset]
  ) as MotionValue<number>;

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      <motion.div
        style={{ y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}