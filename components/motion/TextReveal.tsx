'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TextRevealProps = {
  children: string;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  const words = children.split(' ');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        staggerChildren: 0.045,
        delayChildren: delay,
      }}
      className={cn('overflow-hidden', className)}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden">
          <motion.span
            variants={{
              hidden: {
                y: '110%',
                opacity: 0,
              },
              visible: {
                y: '0%',
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}