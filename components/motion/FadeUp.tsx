'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type FadeUpProps = HTMLMotionProps<'div'> & {
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}