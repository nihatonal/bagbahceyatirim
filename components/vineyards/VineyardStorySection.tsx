import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const values = ["sustainable", "management", "longTerm"] as const;

export default function VineyardStorySection() {
  const t = useTranslations("vineyards.story");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-70" />
      <Image
        src="/images/vineyards/vineyard-story.webp"
        alt={t("imageAlt")}
        fill
        sizes="(max-width: 1024px) 100vw, 52vw"
        className="object-cover object-center"
      />
      <Container>
        <div className="relative z-10 grid min-h-[560px] lg:grid-cols-[1.25fr_1.05fr]">
          <div className="flex items-center py-20 lg:py-28">
            <FadeUp className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-brand-ivory/72">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>

              <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
                {values.map((value) => (
                  <StaggerItem key={value}>
                    <div className="flex items-center gap-3 rounded-full border border-brand-gold/18 bg-brand-ivory/[0.045] px-4 py-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-gold/14 text-brand-gold">
                        <Check size={15} />
                      </span>

                      <span className="text-sm font-medium text-brand-ivory/84">
                        {t(`values.${value}`)}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
