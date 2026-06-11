"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import Parallax from "../motion/Parallax";

const features = [
  "realLand",
  "professionalManagement",
  "longTermValue",
] as const;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function HomeHero() {
  const t = useTranslations("home.hero");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-brand-night text-brand-ivory lg:min-h-[760px]">
      <div className="absolute inset-0">
        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/home/hero-vineyard-mobile.webp"
            alt={t("imageAlt")}
            fill
            priority
            fetchPriority="high"
            quality={65}
            sizes="(max-width: 768px) 75vw, 100vw"
            className="object-cover object-center saturate-[1.05] contrast-[1.03]"
          />

          {/* Mobile cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* Desktop image */}
        <div className="absolute inset-0 hidden md:block">
          <Parallax offset={55}>
            <div className="relative h-[108svh] w-full scale-[1.015]">
              <Image
                src="/images/home/hero-vineyard-desktop.webp"
                alt={t("imageAlt")}
                fill
                priority
                quality={90}
                sizes="(min-width: 768px) 100vw, 0vw"
                className="object-cover object-center saturate-[1.05] contrast-[1.03]"
              />
            </div>
          </Parallax>

          {/* Desktop cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-tranparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Desktop Left Overlay */}
      <div className="absolute inset-0 lg:block bg-[linear-gradient(90deg,rgba(3,8,5,0.92)_0%,rgba(3,8,5,0.82)_22%,rgba(3,8,5,0.48)_46%,rgba(3,8,5,0.08)_72%,rgba(3,8,5,0)_100%)]" />

      {/* Bottom Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0)_0%,rgba(3,8,5,0)_85%,rgba(3,8,5,0.22)_100%)]" />

      {/* Sun Glow */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_88%_14%,rgba(230,196,125,0.22),transparent_28%)]" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 pt-24 lg:px-14 lg:pt-28">
        <div className="max-w-[720px] border-l border-brand-gold/70 pl-6 lg:pl-12">
          <FadeUp>
            <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold lg:text-sm">
              {t("eyebrow")}
            </p>
          </FadeUp>

          <h1 className="font-display text-[3.35rem] leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-[6.8rem]">
            <TextReveal className="text-brand-champagne ">
              {t("titleLine1")}
            </TextReveal>
            <span className="block text-brand-ivory">
              <TextReveal delay={0.15}>{t("titleLine2")}</TextReveal>
            </span>
          </h1>

          <FadeUp delay={0.25}>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-ivory/90 lg:text-xl">
              {t("description")}
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={getLocalizedRoute(locale, "vineyardInvestment")}
                className="gold-gradient inline-flex items-center justify-center gap-3 rounded-md px-7 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
              >
                {t("primaryCta")}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={getLocalizedRoute(locale, "vineyards")}
                className="inline-flex items-center justify-center rounded-md border border-brand-gold/45 bg-brand-night/20 px-7 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="mt-9 flex flex-col gap-4 text-sm font-medium text-brand-ivory/88 sm:flex-row sm:items-center sm:gap-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full border border-brand-gold/35 bg-brand-night/35">
                    <span className="size-1.5 rounded-full bg-brand-gold" />
                  </span>
                  {t(`features.${feature}`)}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
      {/* Scroll */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-sm text-brand-ivory/82 lg:flex">
        <span className="relative grid size-11 place-items-center rounded-full border border-brand-ivory/40">
          <span className="absolute inset-0 rounded-full border border-brand-gold/35 animate-ping" />
          <ArrowDown size={18} className="animate-bounce" />
        </span>
        {t("scroll")}
      </div>
    </section>
  );
}
