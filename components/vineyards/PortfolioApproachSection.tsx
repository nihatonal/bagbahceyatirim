import Image from "next/image";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";

export default function PortfolioApproachSection() {
  const t = useTranslations("vineyards.portfolioApproach");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(200,168,107,0.13),transparent_38%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.95fr_1.1fr] lg:gap-14 lg:px-14 lg:py-32">
        <FadeUp>
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {t.rich("title", {
                gold: (chunks) => (
                  <span className="block text-brand-bronze">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-brand-charcoal/72 lg:hidden">
              {t("lead")}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="border-brand-border/80 lg:border-l lg:pl-12">
            <p className="text-base leading-8 text-brand-charcoal/76">
              {t("lead")}
            </p>

            <div className="mt-7 space-y-5 text-sm leading-7 text-brand-charcoal/66">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] lg:min-h-[420px]">
            <Image
              src="/images/vineyards/portfolio-approach.webp"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,234,0.42)_0%,rgba(247,243,234,0.08)_45%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,8,5,0.24)_100%)]" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}