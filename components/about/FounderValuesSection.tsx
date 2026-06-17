import Image from "next/image";
import { Eye, Mountain, ShieldCheck, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const values = [
  { key: "longTermVision", icon: Mountain },
  { key: "transparency", icon: Eye },
  { key: "sustainability", icon: Sprout },
  { key: "disciplinedManagement", icon: ShieldCheck },
] as const;

export default function FounderValuesSection() {
  const t = useTranslations("about.founderValues");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-70" />

      <div className="relative z-10">
        <div className="grid border-b border-brand-gold/18 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden">
            <Image
              src="/images/about/founder-message.webp"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center grayscale"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,5,0.20)_0%,rgba(3,8,5,0.78)_100%)]" />
          </div>
          <Container>
            <div className="flex items-center py-16 lg:py-20">
              <FadeUp className="max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("eyebrow")}
                </p>

                <blockquote>
                  <div className="mb-5 font-display text-6xl leading-none text-brand-gold">
                    “
                  </div>

                  <p className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-4xl">
                    {t("quote")}
                  </p>

                  <div className="mt-7 h-px w-20 bg-brand-gold/60" />

                  <p className="mt-7 max-w-2xl text-base leading-8 text-brand-ivory/70">
                    {t("description")}
                  </p>

                  <footer className="mt-6">
                    <p className="font-semibold text-brand-gold">{t("name")}</p>
                    <p className="mt-1 text-sm text-brand-ivory/58">
                      {t("role")}
                    </p>
                  </footer>
                </blockquote>
              </FadeUp>
            </div>
          </Container>
        </div>
        <Container>
          <div className="py-14 lg:py-16">
            <FadeUp>
              <div className="mb-10 flex items-center justify-center gap-5">
                <p className="text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("valuesEyebrow")}
                </p>
                <div className="h-px w-16 bg-brand-gold/50" />
              </div>
            </FadeUp>

            <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <StaggerItem key={value.key}>
                    <article className="relative h-full rounded-xl border border-brand-gold/12 bg-brand-ivory/[0.035] p-6 transition hover:border-brand-gold/30 hover:bg-brand-ivory/[0.055] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-9">
                      {index !== values.length - 1 && (
                        <div className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-brand-gold/18 lg:block" />
                      )}

                      <Icon
                        size={34}
                        strokeWidth={1.35}
                        className="mb-5 text-brand-gold"
                      />

                      <h3 className="font-display text-2xl leading-tight text-brand-ivory">
                        {t(`values.${value.key}.title`)}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-brand-ivory/64">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Container>
      </div>
    </section>
  );
}
