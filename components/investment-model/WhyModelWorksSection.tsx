import { BarChart3, FileText, Sprout, Target } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const items = [
  { key: "dataSelection", icon: Target },
  { key: "professionalManagement", icon: Sprout },
  { key: "transparentReporting", icon: FileText },
  { key: "longTermGrowth", icon: BarChart3 },
] as const;

export default function WhyModelWorksSection() {
  const t = useTranslations("investmentModel.whyModelWorks");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.12),transparent_36%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="sr-only">{t("seoTitle")}</h2>
          </div>
        </FadeUp>

        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.key}>
                <article className="relative flex h-full flex-col items-center text-center lg:px-10">
                  {index !== items.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                  )}

                  <div className="grid size-20 place-items-center rounded-full bg-brand-night text-brand-gold shadow-soft ring-1 ring-brand-gold/20">
                    <Icon size={34} strokeWidth={1.35} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-brand-charcoal">
                    {t(`${item.key}.title`)}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-brand-charcoal/68">
                    {t(`${item.key}.description`)}
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