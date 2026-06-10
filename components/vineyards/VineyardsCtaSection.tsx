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

export default function VineyardsCtaSection() {
  const t = useTranslations("vineyards.cta");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="relative min-h-[420px]">
        <Image
          src="/images/vineyards/cta-bg.jpg"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-left"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030805_0%,rgba(3,8,5,0.86)_36%,rgba(3,8,5,0.02)_68%,rgba(3,8,5,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.20)_0%,rgba(3,8,5,0.42)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1440px] items-center px-6 py-20 lg:px-14">
          <FadeUp className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {t.rich("title", {
                gold: (chunks) => (
                  <span className="text-brand-gold">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ivory/74">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={getLocalizedRoute(locale, "contact")}
                className="gold-gradient inline-flex items-center justify-center gap-3 rounded-md px-7 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
              >
                {t("primaryCta")}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={getLocalizedRoute(locale, "vineyardInvestment")}
                className="inline-flex items-center justify-center rounded-md border border-brand-gold/40 bg-brand-night/30 px-7 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}