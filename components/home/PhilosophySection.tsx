import { Leaf, TrendingUp, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const items = [
  {
    key: "respect",
    icon: Leaf,
  },
  {
    key: "management",
    icon: UsersRound,
  },
  {
    key: "longTerm",
    icon: TrendingUp,
  },
] as const;

export default function PhilosophySection() {
  const t = useTranslations("home.philosophy");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,168,107,0.12),transparent_38%)]" />
      <Container>
        <div className="relative z-10 px-6 py-16 lg:py-20">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display w-[250px] md:w-full mx-auto text-3xl leading-tight tracking-[-0.03em] text-brand-charcoal md:text-4xl lg:text-5xl">
                {t.rich("title", {
                  gold: (chunks) => (
                    <span className="text-brand-bronze">{chunks}</span>
                  ),
                })}
              </h2>
            </div>
          </FadeUp>

          <Stagger>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-0">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <StaggerItem key={item.key}>
                    <div className="relative flex gap-5 lg:px-10">
                      {index !== items.length - 1 && (
                        <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                      )}

                      <div className="grid size-16 shrink-0 place-items-center rounded-full bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                        <Icon size={32} strokeWidth={1.45} />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-brand-charcoal">
                          {t(`${item.key}.title`)}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-brand-charcoal/68">
                          {t(`${item.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
