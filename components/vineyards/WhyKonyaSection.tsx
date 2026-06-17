import Image from "next/image";
import { Leaf, Mountain, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const items = [
  {
    key: "altitude",
    icon: Mountain,
  },
  {
    key: "sunshine",
    icon: Sun,
  },
  {
    key: "soil",
    icon: Leaf,
  },
] as const;

export default function WhyKonyaSection() {
  const t = useTranslations("vineyards.whyKonya");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <Image
        src="/images/vineyards/konya-silhouette.webp"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="object-cover object-right opacity-20"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7F3EA_0%,rgba(247,243,234,0.96)_45%,rgba(247,243,234,0.76)_100%)]" />
      <Container>
        <div className="relative z-10 py-20 lg:py-28">
          <FadeUp>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {t.rich("title", {
                  gold: (chunks) => (
                    <span className="text-brand-bronze">{chunks}</span>
                  ),
                })}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-charcoal/70">
                {t("description")}
              </p>
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
                        <div className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-brand-gold/20 lg:block" />
                      )}

                      <div className="grid size-16 shrink-0 place-items-center rounded-full bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                        <Icon size={34} strokeWidth={1.35} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-brand-charcoal">
                          {t(`${item.key}.title`)}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-brand-charcoal/68">
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
