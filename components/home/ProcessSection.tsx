import { Handshake, Leaf, MapPinned, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const steps = [
  {
    key: "selection",
    icon: MapPinned,
  },
  {
    key: "acquisition",
    icon: Handshake,
  },
  {
    key: "management",
    icon: Leaf,
  },
  {
    key: "returns",
    icon: Sprout,
  },
] as const;

export default function ProcessSection() {
  const t = useTranslations("home.process");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.14),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="font-display text-xl uppercase tracking-[0.18em] text-brand-charcoal lg:text-2xl">
              {t("eyebrow")}
            </p>
            <div className="mx-auto mt-3 h-px w-14 bg-brand-gold/70" />
          </div>
        </FadeUp>

        <Stagger>
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <StaggerItem key={step.key}>
                  <div className="relative flex gap-5 lg:block lg:text-center">
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[34px] top-[68px] h-[calc(100%+40px)] w-px bg-brand-gold/30 lg:left-[calc(50%+42px)] lg:top-8 lg:h-px lg:w-[calc(100%-84px)]" />
                    )}

                    <div className="relative z-10 grid size-[68px] shrink-0 place-items-center rounded-full border border-brand-gold/55 bg-brand-ivory shadow-[0_0_0_8px_rgba(247,243,234,0.9)] lg:mx-auto">
                      <span className="font-display text-2xl text-brand-charcoal">
                        {number}
                      </span>
                    </div>

                    <div className="pt-1 lg:pt-8">
                      <div className="mb-5 hidden justify-center text-brand-bronze lg:flex">
                        <Icon size={38} strokeWidth={1.45} />
                      </div>

                      <div className="mb-3 flex text-brand-bronze lg:hidden">
                        <Icon size={32} strokeWidth={1.45} />
                      </div>

                      <h3 className="text-lg font-semibold text-brand-charcoal">
                        {t(`${step.key}.title`)}
                      </h3>

                      <p className="mx-auto mt-3 max-w-[230px] text-sm leading-7 text-brand-charcoal/68">
                        {t(`${step.key}.description`)}
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
