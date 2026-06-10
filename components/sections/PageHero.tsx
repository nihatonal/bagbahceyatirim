"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import ImageParallax from "@/components/motion/ImageParallax";
import { cn } from "@/lib/utils";

type HeroFeature = {
  label: string;
};

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  titleLines: {
    text: string;
    gold?: boolean;
  }[];
  description?: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  ctas?: HeroCta[];
  features?: HeroFeature[];
  mobileObjectPosition?: string;
  desktopParallaxOffset?: number;
};

export default function PageHero({
  eyebrow,
  titleLines,
  description,
  desktopImage,
  mobileImage,
  imageAlt,
  ctas = [],
  features = [],
  mobileObjectPosition = "object-center",
  desktopParallaxOffset = 34,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-brand-night text-brand-ivory lg:h-[70vh] lg:min-h-[680px]">
      <div className="absolute inset-0 hidden lg:block">
        <ImageParallax
          className="h-full"
          innerClassName="h-[108%]"
          offset={desktopParallaxOffset}
        >
          <Image
            src={desktopImage}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </ImageParallax>
      </div>

      <div className="absolute inset-0 lg:hidden">
        <Image
          src={mobileImage}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw"
          className={cn("object-cover", mobileObjectPosition)}
        />
      </div>

      {/* Desktop overlay */}
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,rgba(3,8,5,0.92)_0%,rgba(3,8,5,0.82)_22%,rgba(3,8,5,0.48)_46%,rgba(3,8,5,0.08)_72%,rgba(3,8,5,0)_100%)]" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(180deg,rgba(3,8,5,0.04)_0%,rgba(3,8,5,0.10)_45%,rgba(3,8,5,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_88%_14%,rgba(230,196,125,0.22),transparent_28%)]" />

      {/* Mobile overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,5,0.78)_0%,rgba(3,8,5,0.46)_48%,rgba(3,8,5,0.02)_100%)] lg:hidden" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.18)_0%,rgba(3,8,5,0.18)_45%,rgba(3,8,5,0.68)_100%)] lg:hidden" />

      <div className="relative z-10 mx-auto flex h-full min-h-[680px] max-w-[1440px] items-center px-6 pb-6 pt-28 lg:px-14 lg:pb-0 lg:pt-24">
        <div className="max-w-[720px]">
          {eyebrow && (
            <FadeUp>
              <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold lg:text-sm">
                {eyebrow}
              </p>
            </FadeUp>
          )}

          <h1 className="font-display text-[3.25rem] leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]">
            {titleLines.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={cn("block", line.gold && "text-brand-gold")}
              >
                <TextReveal delay={index * 0.12}>{line.text}</TextReveal>
              </span>
            ))}
          </h1>

          {description && (
            <FadeUp delay={0.28}>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-ivory/88 lg:text-lg">
                {description}
              </p>
            </FadeUp>
          )}

          {ctas.length > 0 && (
            <FadeUp delay={0.36}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {ctas.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-3 rounded-md px-7 py-4 text-sm font-semibold transition",
                      cta.variant === "secondary"
                        ? "border border-brand-gold/45 bg-brand-night/20 text-brand-ivory hover:bg-brand-gold hover:text-brand-deep"
                        : "gold-gradient text-brand-deep shadow-gold hover:brightness-110",
                    )}
                  >
                    {cta.label}
                    {cta.variant !== "secondary" && <ArrowRight size={18} />}
                  </Link>
                ))}
              </div>
            </FadeUp>
          )}

          {features.length > 0 && (
            <FadeUp delay={0.44}>
              <div className="mt-9 flex flex-col gap-4 text-sm font-medium text-brand-ivory/86 sm:flex-row sm:items-center sm:gap-8">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full border border-brand-gold/35 bg-brand-night/35">
                      <span className="size-1.5 rounded-full bg-brand-gold" />
                    </span>
                    {feature.label}
                  </div>
                ))}
              </div>
            </FadeUp>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/20" />
    </section>
  );
}
