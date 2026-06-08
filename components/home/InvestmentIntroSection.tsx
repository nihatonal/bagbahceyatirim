import Image from "next/image";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";

export default function InvestmentIntroSection() {
  const t = useTranslations("home.investmentIntro");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="mx-auto grid min-h-[360px] max-w-[1440px] grid-cols-1 lg:grid-cols-[1.05fr_1fr_0.9fr]">
        <div className="flex items-center px-6 py-16 lg:px-14 lg:py-24">
          <FadeUp>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.035em] text-brand-charcoal md:text-5xl lg:text-6xl">
              {t.rich("title", {
                gold: (chunks) => (
                  <span className="text-brand-bronze">{chunks}</span>
                ),
              })}
            </h2>
          </FadeUp>
        </div>

        <div className="hidden items-center border-l border-brand-border px-10 lg:flex">
          <FadeUp delay={0.12}>
            <div className="max-w-md">
              <p className="text-base leading-8 text-brand-charcoal/72">
                {t("description")}
              </p>

              <p className="mt-6 text-base font-semibold leading-8 text-brand-charcoal">
                {t("emphasis")}
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="relative h-[260px] lg:h-auto">
          <Image
            src="/images/home/investment-intro-grapes.webp"
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-brand-ivory to-transparent lg:block" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-ivory to-transparent lg:hidden" />
        </div>

        <div className="px-6 pb-14 lg:hidden">
          <FadeUp delay={0.12}>
            <p className="text-base leading-8 text-brand-charcoal/72">
              {t("description")}
            </p>

            <p className="mt-5 text-base font-semibold leading-8 text-brand-charcoal">
              {t("emphasis")}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}