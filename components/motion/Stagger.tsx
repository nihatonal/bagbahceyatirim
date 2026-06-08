'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type StaggerProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
};

export default function Stagger({
  children,
  className,
  delay = 0,
  staggerDelay = 0.12,
  once = true,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}