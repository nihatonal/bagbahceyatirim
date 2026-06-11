import Image from "next/image";
import { BarChart3, FileCheck2, ShieldCheck, SquareChartGantt } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const items = [
  { key: "monthlyReports", icon: SquareChartGantt },
  { key: "fieldUpdates", icon: FileCheck2 },
  { key: "productionData", icon: BarChart3 },
  { key: "financialTransparency", icon: ShieldCheck },
] as const;

export default function TransparentManagementSection() {
  const t = useTranslations("investmentModel.transparentManagement");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <Image
        src="/images/investment-model/transparent-management-bg.webp"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030805_0%,rgba(3,8,5,0.82)_32%,rgba(3,8,5,0.05)_58%,rgba(3,8,5,0)_100%)]" />
      

      <div className="relative z-10 mx-auto grid min-h-[520px] max-w-[1440px] items-center gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-20">
        <div>
          <FadeUp>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-brand-ivory/74">
              {t("description")}
            </p>
          </FadeUp>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.key}>
                  <article className="border-l border-brand-gold/22 pl-5">
                    <Icon
                      size={28}
                      strokeWidth={1.35}
                      className="mb-4 text-brand-gold"
                    />

                    <h3 className="text-base font-semibold text-brand-ivory">
                      {t(`${item.key}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-brand-ivory/62">
                      {t(`${item.key}.description`)}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/20" />
    </section>
  );
}