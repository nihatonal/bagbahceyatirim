import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Container from "../ui/Container";

export default function FutureVisionSection() {
  const t = useTranslations("about.futureVision");

  return (
    <section className="relative overflow-hidden bg-brand-ivory">
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.08] lg:block">
        <svg
          width="140"
          height="180"
          viewBox="0 0 140 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 10C70 60 40 90 40 140"
            stroke="#C8A86B"
            strokeWidth="2"
          />
          <path
            d="M70 60C90 40 110 40 120 60"
            stroke="#C8A86B"
            strokeWidth="2"
          />
          <path
            d="M70 90C95 70 115 75 125 95"
            stroke="#C8A86B"
            strokeWidth="2"
          />
          <path
            d="M70 120C95 105 115 110 125 130"
            stroke="#C8A86B"
            strokeWidth="2"
          />
          <path d="M70 60C50 40 30 40 20 60" stroke="#C8A86B" strokeWidth="2" />
          <path d="M70 90C45 70 25 75 15 95" stroke="#C8A86B" strokeWidth="2" />
          <path
            d="M70 120C45 105 25 110 15 130"
            stroke="#C8A86B"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <FadeUp>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("eyebrow")}
                </p>

                <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-brand-charcoal md:text-5xl lg:text-6xl">
                  {t.rich("title", {
                    gold: (chunks) => (
                      <span className="text-brand-bronze">{chunks}</span>
                    ),
                  })}
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="space-y-6 text-base leading-8 text-brand-charcoal/72">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
