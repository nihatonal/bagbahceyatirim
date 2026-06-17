import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  ChartNoAxesCombined,
  Grape,
  Map,
} from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const steps = [
  {
    key: "analysis",
    icon: Map,
    image: "/images/investment-model/step-analysis.webp",
  },
  {
    key: "portfolio",
    icon: Briefcase,
    image: "/images/investment-model/step-portfolio.webp",
  },
  {
    key: "management",
    icon: Grape,
    image: "/images/investment-model/step-management.webp",
  },
  {
    key: "value",
    icon: ChartNoAxesCombined,
    image: "/images/investment-model/step-value.webp",
  },
] as const;

export default function InvestmentStepsSection() {
  const t = useTranslations("investmentModel.steps");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-60" />

      <div className="relative z-10 py-16 lg:py-20">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="sr-only">{t("seoTitle")}</h2>
          </div>
        </FadeUp>
        <Container>
          <Stagger className="grid gap-8 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <StaggerItem key={step.key}>
                  <article className="group flex flex-col relative h-full border border-transparent">
                    {index !== steps.length - 1 && (
                      <div className="absolute right-[-22px] top-[118px] hidden items-center text-brand-gold/55 lg:flex">
                        <div className="h-px w-8 bg-brand-gold/30" />
                        <ArrowRight size={18} />
                      </div>
                    )}

                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <span className="font-display text-5xl leading-none text-brand-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-4 font-display text-2xl leading-tight text-brand-ivory">
                          {t(`${step.key}.title`)}
                        </h3>
                      </div>

                      <div className="grid size-11 place-items-center rounded-full border border-brand-gold/24 bg-brand-ivory/[0.04] text-brand-gold">
                        <Icon size={22} strokeWidth={1.4} />
                      </div>
                    </div>

                    <p className="min-h-[104px] text-sm leading-7 text-brand-ivory/68 mb-4">
                      {t(`${step.key}.description`)}
                    </p>

                    <div className="relative mt-auto h-56 overflow-hidden rounded-xl border border-brand-gold/12 bg-brand-ivory/[0.035]">
                      <Image
                        src={step.image}
                        alt={t(`${step.key}.imageAlt`)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,8,5,0.34)_100%)]" />
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </div>
    </section>
  );
}
