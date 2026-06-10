import { CloudSun, Grape, Settings, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const risks = [
  {
    key: "climate",
    icon: CloudSun,
  },
  {
    key: "operation",
    icon: Settings,
  },
  {
    key: "production",
    icon: Grape,
  },
  {
    key: "management",
    icon: UsersRound,
  },
] as const;

export default function RiskManagementSection() {
  const t = useTranslations("vineyardInvestment.risk");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.12),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 lg:px-14 lg:py-16">
        <FadeUp>
          <div className="mb-10 text-center">
            <h2 className="font-display text-xl uppercase tracking-[0.18em] text-brand-charcoal md:text-2xl">
              {t("title")}
            </h2>
            <div className="mx-auto mt-3 h-px w-14 bg-brand-gold/70" />
          </div>
        </FadeUp>

        <Stagger>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {risks.map((risk, index) => {
              const Icon = risk.icon;

              return (
                <StaggerItem key={risk.key}>
                  <div className="relative flex gap-5 lg:px-8">
                    {index !== risks.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                    )}

                    <div className="grid size-16 shrink-0 place-items-center rounded-full text-brand-gold">
                      <Icon size={42} strokeWidth={1.35} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-brand-charcoal">
                        {t(`${risk.key}.title`)}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-brand-charcoal/68">
                        {t(`${risk.key}.description`)}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
}