"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Grape, Mountain, Ruler } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const stats = [
  {
    key: "altitude",
    icon: Mountain,
  },
  {
    key: "area",
    icon: Ruler,
  },
  {
    key: "grape",
    icon: Grape,
  },
  {
    key: "year",
    icon: Calendar,
  },
] as const;

export default function ActivePortfolioSection() {
  const t = useTranslations("vineyards.activePortfolio");

  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="bg-brand-night text-brand-ivory">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[0.95fr_1.15fr]">
        <div className="flex items-center px-6 py-14 lg:px-14 lg:py-20">
          <div className="max-w-[560px]">
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-5xl leading-[1.02] tracking-[-0.04em]">
                {t("title")}
              </h2>

              <p className="mt-8 text-brand-ivory/82 leading-8">
                {t("description")}
              </p>

              <Link
                href={`${getLocalizedRoute(
                  locale,
                  "vineyards"
                )}/konya-bozkiri-bagi`}
                className="mt-10 inline-flex items-center gap-3 rounded-md border border-brand-gold/40 px-6 py-4 text-sm font-medium transition hover:bg-brand-gold hover:text-brand-night"
              >
                {t("cta")}
                <ArrowRight size={16} />
              </Link>
            </FadeUp>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="flex items-start gap-4"
                  >
                    <Icon
                      size={24}
                      className="mt-1 text-brand-gold"
                    />

                    <div>
                      <div className="text-lg font-medium">
                        {t(`stats.${item.key}.value`)}
                      </div>

                      <div className="mt-1 text-sm text-brand-ivory/65">
                        {t(`stats.${item.key}.label`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <Image
            src="/images/vineyards/konya-bozkiri-cover.jpg"
            alt={t("imageAlt")}
            fill
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#030805_0%,rgba(3,8,5,0.72)_14%,transparent_42%)]" />
        </div>
      </div>
    </section>
  );
}