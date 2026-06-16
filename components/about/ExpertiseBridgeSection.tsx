import Image from "next/image";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";

export default function ExpertiseBridgeSection() {
  const t = useTranslations("about.expertiseBridge");

  return (
    <section className="bg-brand-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/about/expertise-bridge.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width:1024px)100vw,40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_100%)]" />
            </div>

            <div className="flex items-center px-8 py-12 lg:px-16 lg:py-16">
              <FadeUp>
                <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("eyebrow")}
                </p>

                <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-brand-charcoal md:text-5xl">
                  {t.rich("title", {
                    gold: (chunks) => (
                      <span className="text-brand-bronze">{chunks}</span>
                    ),
                  })}
                </h2>

                <div className="mt-6 h-px w-20 bg-brand-gold/50" />

                <p className="mt-6 max-w-2xl text-base leading-8 text-brand-charcoal/72">
                  {t("description1")}
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-brand-charcoal/72">
                  {t("description2")}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}