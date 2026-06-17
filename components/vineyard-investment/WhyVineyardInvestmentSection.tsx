import Image from "next/image";
import { BarChart3, Grape, ShieldCheck, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const benefits = [
  {
    key: "realAsset",
    icon: Sprout,
  },
  {
    key: "productionPower",
    icon: Grape,
  },
  {
    key: "inflationProtection",
    icon: ShieldCheck,
  },
  {
    key: "longTermGrowth",
    icon: BarChart3,
  },
] as const;

export default function WhyVineyardInvestmentSection() {
  const t = useTranslations("vineyardInvestment.why");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="relative">
        <Image
          src="/images/vineyard-investment/why-vineyard-bg.webp"
          alt={t("imageAlt")}
          fill
          sizes="(max-width: 1024px) 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(247,243,234,1)_80%,rgba(247,243,234,1)_100%)]" />
        <Container>
          <div className="relative min-h-[560px] overflow-hidden py-16 lg:py-20">
            <div className="relative z-10">
              <FadeUp>
                <div className="max-w-2xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                    {t("eyebrow")}
                  </p>

                  <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                    {t.rich("title", {
                      gold: (chunks) => (
                        <span className="block text-brand-bronze">
                          {chunks}
                        </span>
                      ),
                    })}
                  </h2>

                  <div className="mt-6 h-px w-20 bg-brand-gold/60" />

                  <p className="mt-6 max-w-lg text-base leading-8 text-brand-charcoal/72">
                    {t("description")}
                  </p>
                </div>
              </FadeUp>

              <Stagger className="mt-14 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <StaggerItem key={benefit.key}>
                      <div className="relative h-full">
                        {index !== benefits.length - 1 && (
                          <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                        )}

                        <div className="flex gap-5 lg:px-6">
                          <div className="grid size-20 shrink-0 place-items-center rounded-full border border-brand-gold/35 bg-brand-ivory/70 text-brand-gold shadow-soft">
                            <Icon size={36} strokeWidth={1.35} />
                          </div>

                          <div className="pt-2">
                            <h3 className="text-lg font-semibold text-brand-charcoal">
                              {t(`${benefit.key}.title`)}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-brand-charcoal/68">
                              {t(`${benefit.key}.description`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
