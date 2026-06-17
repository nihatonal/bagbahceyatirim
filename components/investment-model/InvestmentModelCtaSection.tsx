"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import Container from "../ui/Container";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function InvestmentModelCtaSection() {
  const t = useTranslations("investmentModel.cta");

  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="relative min-h-[420px]">
        <Image
          src="/images/investment-model/cta-bg.webp"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.50)_0%,rgba(3,8,5,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,168,107,0.14),transparent_40%)]" />
        <Container>
          <div className="relative z-10 flex min-h-[420px] items-center justify-center py-20 text-center">
            <FadeUp className="max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {t.rich("title", {
                  gold: (chunks) => (
                    <span className="text-brand-gold">{chunks}</span>
                  ),
                })}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-brand-ivory/78">
                {t("description")}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://wa.me/905xxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient inline-flex items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
                >
                  <MessageCircle size={18} />
                  {t("whatsappCta")}
                </Link>

                <Link
                  href={getLocalizedRoute(locale, "contact")}
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-brand-gold/40 bg-brand-night/20 px-8 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
                >
                  {t("contactCta")}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </Container>
      </div>
    </section>
  );
}
