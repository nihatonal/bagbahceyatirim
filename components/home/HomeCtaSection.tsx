import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import Container from "../ui/Container";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function HomeCtaSection() {
  const t = useTranslations("home.cta");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="relative min-h-[420px] lg:min-h-[520px]">
        <Image
          src="/images/home/final-cta-vineyard.webp"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030805_0%,rgba(3,8,5,0.28)_34%,rgba(3,8,5,0.22)_68%,rgba(3,8,5,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.25)_0%,rgba(3,8,5,0.08)_45%,rgba(3,8,5,0.08)_100%)]" />
        <Container>
          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1440px] items-center px-6 py-20 lg:min-h-[520px] lg:px-14">
            <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <FadeUp>
                <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("eyebrow")}
                </p>

                <h2 className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                  {t.rich("title", {
                    gold: (chunks) => (
                      <span className="text-brand-gold">{chunks}</span>
                    ),
                  })}
                </h2>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="max-w-xl lg:ml-auto">
                  <p className="text-base leading-8 text-brand-ivory/82 lg:text-lg">
                    {t("description")}
                  </p>

                  <Link
                    href={getLocalizedRoute(locale, "contact")}
                    className="gold-gradient mt-8 inline-flex items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
                  >
                    {t("button")}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>

        <div className="absolute inset-x-0 top-0 h-px bg-brand-gold/30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/20" />
      </div>
    </section>
  );
}
