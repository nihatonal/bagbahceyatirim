'use client';

import Image from 'next/image';
import ImageParallax from '@/components/motion/ImageParallax';
import { cn } from '@/lib/utils';

type DepthImageCardProps = {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  quality?: number;
  offset?: number;
  className?: string;
};

export default function DepthImageCard({
  src,
  alt,
  ratio = 'aspect-[4/5]',
  sizes = '(max-width: 768px) 100vw, 33vw',
  quality = 75,
  offset = 24,
  className,
}: DepthImageCardProps) {
  return (
    <div className={cn('group [perspective:1200px]', className)}>
      <div className={cn('relative w-full', ratio)}>
        <ImageParallax
          offset={offset}
          className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-soft transition-transform duration-700 ease-out group-hover:[transform:rotateX(1.2deg)_rotateY(-1.2deg)_translateZ(0)]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            quality={quality}
            className="scale-[1.06] object-cover transition duration-1000 ease-out group-hover:scale-[1.1]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-flora-night/30 via-transparent to-white/8" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_70px_rgba(3,8,5,0.22)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/14 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
        </ImageParallax>
      </div>
    </div>
  );
}