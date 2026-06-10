import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const steps = [
  "land",
  "planting",
  "care",
  "production",
  "harvest",
  "growth",
] as const;

export default function ValueCreationSection() {
  const t = useTranslations("vineyardInvestment.valueCreation");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.12),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <FadeUp>
          <div className="mb-14 text-center">
            <h2 className="font-display text-xl uppercase tracking-[0.18em] text-brand-charcoal md:text-2xl">
              {t("title")}
            </h2>
            <div className="mx-auto mt-3 h-px w-14 bg-brand-gold/70" />
          </div>
        </FadeUp>

        <Stagger>
          <div className="hidden lg:grid lg:grid-cols-6 lg:items-start">
            {steps.map((step, index) => (
              <StaggerItem key={step}>
                <div className="relative text-center">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[calc(50%+54px)] top-[88px] z-0 flex w-[calc(100%-108px)] items-center">
                      <div className="h-px flex-1 bg-brand-gold/45" />
                      <ArrowRight
                        size={18}
                        strokeWidth={1.4}
                        className="-ml-1 text-brand-gold/70"
                      />
                    </div>
                  )}

                  <div className="relative z-10 mx-auto mb-4 grid size-10 place-items-center rounded-full border border-brand-gold/45 bg-brand-ivory shadow-soft">
                    <span className="font-display text-lg text-brand-charcoal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mx-auto size-28 overflow-hidden rounded-full ring-1 ring-brand-gold/40">
                    <Image
                      src={t(`${step}.image`)}
                      alt={t(`${step}.imageAlt`)}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-brand-charcoal">
                    {t(`${step}.title`)}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[170px] text-sm leading-6 text-brand-charcoal/68">
                    {t(`${step}.description`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>

          <div className="space-y-8 lg:hidden">
            {steps.map((step, index) => (
              <StaggerItem key={step}>
                <div className="relative flex gap-5">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[39px] top-20 h-[calc(100%+32px)] w-px bg-brand-gold/35" />
                  )}

                  <div className="relative z-10 shrink-0">
                    <div className="mb-3 grid size-10 place-items-center rounded-full border border-brand-gold/45 bg-brand-ivory shadow-soft">
                      <span className="font-display text-lg text-brand-charcoal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative size-20 overflow-hidden rounded-full ring-1 ring-brand-gold/40">
                      <Image
                        src={t(`${step}.image`)}
                        alt={t(`${step}.imageAlt`)}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-brand-charcoal">
                      {t(`${step}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-brand-charcoal/68">
                      {t(`${step}.description`)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}