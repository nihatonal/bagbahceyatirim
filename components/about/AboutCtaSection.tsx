"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function AboutCtaSection() {
  const t = useTranslations("about.cta");

  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="relative min-h-[460px]">
        <Image
          src="/images/about/about-cta-bg.webp"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.55)_0%,rgba(3,8,5,0.68)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,168,107,0.08),transparent_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1440px] items-center justify-center px-6 py-20 text-center lg:px-14">
          <div className="max-w-4xl">
            <FadeUp>
              <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-ivory/78">
                {t("description")}
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href={getLocalizedRoute(locale, "contact")}
                  className="gold-gradient inline-flex items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
                >
                  {t("primaryCta")}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={getLocalizedRoute(locale, "investmentModel")}
                  className="inline-flex items-center justify-center rounded-md border border-brand-gold/40 bg-brand-night/20 px-8 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
                >
                  {t("secondaryCta")}
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}