'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type ImageParallaxProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  offset?: number;
};

export default function ImageParallax({
  children,
  className,
  innerClassName,
  offset = 40,
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={cn('relative h-full overflow-hidden', className)}>
      <motion.div
        style={{ y }}
        className={cn(
          'absolute inset-x-0 -top-[9%] h-[118%] will-change-transform',
          innerClassName
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}