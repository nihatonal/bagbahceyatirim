import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import Container from "../ui/Container";

const stats = [
  { key: "experience", value: 5 },
  { key: "land", value: 50 },
  { key: "investors", value: 250 },
  { key: "projects", value: 15 },
] as const;

export default function StatsSection() {
  const t = useTranslations("home.stats");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 opacity-30">
        <div className="dark-gradient h-full w-full" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(191,164,106,0.18),transparent_55%)]" />
      <Container>
        <div className="relative z-10 px-6 py-16 lg:px-14 lg:py-20">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <div className="mx-auto mt-3 h-px w-16 bg-brand-gold/60" />
            </div>
          </FadeUp>

          <Stagger>
            <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
              {stats.map((item, index) => (
                <StaggerItem key={item.key}>
                  <div className="relative text-center">
                    {index !== stats.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                    )}

                    <AnimatedCounter
                      value={item.value}
                      className="block font-display text-5xl text-brand-gold md:text-6xl lg:text-7xl"
                    />

                    <div className="mt-4 text-base leading-7 text-brand-ivory/85">
                      {t(`${item.key}.label`)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
