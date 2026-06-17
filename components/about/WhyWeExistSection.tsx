import Image from "next/image";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Container from "../ui/Container";

export default function WhyWeExistSection() {
  const t = useTranslations("about.whyWeExist");

  return (
    <section className="relative overflow-hidden bg-brand-ivory text-brand-charcoal">
      <Image
        src="/images/about/why-we-exist-bg.webp"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      
      <Container>
        <div className="relative min-h-[560px] overflow-hidden px-6 py-16 lg:px-14 lg:py-20">
          <div className="relative z-10 flex min-h-[420px] items-center">
            <FadeUp className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {t.rich("title", {
                  gold: (chunks) => (
                    <span className="text-brand-bronze">{chunks}</span>
                  ),
                })}
              </h2>

              <div className="mt-6 h-px w-20 bg-brand-gold/60" />

              <div className="mt-7 space-y-5 text-base leading-8 text-brand-charcoal/72">
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
