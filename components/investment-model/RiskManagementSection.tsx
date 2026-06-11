import {
  BarChart3,
  CloudSun,
  Grape,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const risks = [
  { key: "climate", icon: CloudSun },
  { key: "operation", icon: Settings },
  { key: "production", icon: Grape },
  { key: "market", icon: BarChart3 },
  { key: "financial", icon: ShieldCheck },
] as const;

export default function RiskManagementSection() {
  const t = useTranslations("investmentModel.riskManagement");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gold/20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/20" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 lg:px-14 lg:py-16">
        <FadeUp>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="sr-only">{t("seoTitle")}</h2>
          </div>
        </FadeUp>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {risks.map((risk, index) => {
            const Icon = risk.icon;

            return (
              <StaggerItem key={risk.key}>
                <article className="relative h-full rounded-xl border border-brand-gold/12 bg-brand-ivory/[0.035] p-6 text-center transition hover:border-brand-gold/28 hover:bg-brand-ivory/[0.055] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8 lg:py-2">
                  {index !== risks.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                  )}

                  <div className="mx-auto grid size-14 place-items-center rounded-full border border-brand-gold/20 bg-brand-night/50 text-brand-gold lg:size-16">
                    <Icon size={30} strokeWidth={1.35} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-brand-ivory">
                    {t(`${risk.key}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-brand-ivory/66">
                    {t(`${risk.key}.description`)}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}