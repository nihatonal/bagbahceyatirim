import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const cycleSteps = [
  {
    key: "january",
    image: "/images/investment-model/cycle-january.webp",
  },
  {
    key: "march",
    image: "/images/investment-model/cycle-march.webp",
  },
  {
    key: "june",
    image: "/images/investment-model/cycle-june.webp",
  },
  {
    key: "september",
    image: "/images/investment-model/cycle-september.webp",
  },
  {
    key: "harvest",
    image: "/images/investment-model/cycle-harvest.webp",
  },
  {
    key: "result",
    image: "/images/investment-model/cycle-result.webp",
  },
] as const;

export default function AnnualCycleSection() {
  const t = useTranslations("investmentModel.annualCycle");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.12),transparent_42%)]" />
      <Container>
        <div className="relative z-10 py-16 lg:py-20">
          <FadeUp>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl">
                {t("title")}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-charcoal/68">
                {t("description")}
              </p>
            </div>
          </FadeUp>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-[8%] right-[8%] top-[154px] h-px bg-brand-gold/30" />

              <Stagger className="grid grid-cols-6 gap-6 pt-6">
                {cycleSteps.map((step, index) => (
                  <StaggerItem key={step.key}>
                    <article className="group relative text-center">
                      <div className="mb-5 min-h-[86px]">
                        <span className="font-display text-3xl text-brand-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 text-lg font-semibold text-brand-charcoal">
                          {t(`steps.${step.key}.month`)}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-brand-charcoal/80">
                          {t(`steps.${step.key}.title`)}
                        </p>
                      </div>

                      <div className="relative mx-auto mb-5 grid size-4 place-items-center rounded-full border border-brand-gold/50 bg-brand-ivory">
                        <span className="size-2 rounded-full bg-brand-gold" />
                      </div>

                      {index !== cycleSteps.length - 1 && (
                        <ArrowRight
                          size={18}
                          strokeWidth={1.45}
                          className="absolute right-[-20px] top-[45px] text-brand-gold/70"
                        />
                      )}

                      <div className="relative h-28 overflow-hidden rounded-xl border border-brand-gold/18 bg-brand-night/5 shadow-soft transition duration-500 group-hover:-translate-y-1 group-hover:shadow-premium">
                        <Image
                          src={step.image}
                          alt={t(`steps.${step.key}.imageAlt`)}
                          fill
                          sizes="16vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      <p className="mx-auto mt-4 max-w-[180px] text-sm leading-6 text-brand-charcoal/62">
                        {t(`steps.${step.key}.description`)}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden">
            <Stagger className="relative space-y-8">
              <div className="absolute bottom-0 left-5 top-0 w-px bg-brand-gold/22" />

              {cycleSteps.map((step, index) => (
                <StaggerItem key={step.key}>
                  <article className="relative pl-14">
                    <div className="absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-brand-gold/45 bg-brand-ivory text-sm font-semibold text-brand-gold shadow-soft">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-brand-gold/16 bg-white/45 shadow-soft">
                      <div className="relative h-56">
                        <Image
                          src={step.image}
                          alt={t(`steps.${step.key}.imageAlt`)}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                          {t(`steps.${step.key}.month`)}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-brand-charcoal">
                          {t(`steps.${step.key}.title`)}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-brand-charcoal/66">
                          {t(`steps.${step.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
