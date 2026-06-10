"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import FadeUp from "@/components/motion/FadeUp";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const faqs = [
  "valueTime",
  "ownership",
  "production",
  "incomeModel",
  "minimumInvestment",
  "exit",
] as const;

type FaqKey =
  | "valueTime"
  | "ownership"
  | "production"
  | "incomeModel"
  | "minimumInvestment"
  | "exit";

const leftFaqs: FaqKey[] = ["valueTime", "production", "minimumInvestment"];

const rightFaqs: FaqKey[] = ["ownership", "incomeModel", "exit"];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function FaqCtaSection() {
  const t = useTranslations("vineyardInvestment.faq");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  const [openItem, setOpenItem] = useState<string | null>("");

  const renderFaq = (item: (typeof faqs)[number]) => {
    const isOpen = openItem === item;

    return (
      <button
        key={item}
        type="button"
        onClick={() => setOpenItem(isOpen ? null : item)}
        className={cn(
          "w-full rounded-md border p-5 text-left transition",
          isOpen
            ? "border-brand-gold/35 bg-brand-ivory/[0.07]"
            : "border-brand-ivory/12 bg-brand-ivory/[0.045] hover:border-brand-gold/30 hover:bg-brand-ivory/[0.07]",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-brand-ivory">
            {t(`${item}.question`)}
          </span>

          <ChevronDown
            size={17}
            className={cn(
              "shrink-0 text-brand-gold transition",
              isOpen && "rotate-180",
            )}
          />
        </div>

        {isOpen && (
          <p className="mt-5 text-sm leading-7 text-brand-ivory/66">
            {t(`${item}.answer`)}
          </p>
        )}
      </button>
    );
  };

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <Image
        src="/images/vineyard-investment/faq-cta-bg.webp"
        alt={t("cta.imageAlt")}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030805_0%,rgba(3,8,5,0.92)_34%,rgba(3,8,5,0.68)_58%,rgba(3,8,5,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(214,177,104,0.24),transparent_34%)]" />
      <div className="absolute inset-0 bg-brand-night/28" />
      <div className="grid items-start lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative px-6 py-16 lg:px-14 lg:py-20">
          <div className="absolute inset-0 dark-gradient opacity-70" />

          <FadeUp className="relative z-10">
            <div className="mb-8 flex items-center gap-5">
              <p className="text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>
              <div className="h-px w-16 bg-brand-gold/50" />
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="space-y-5">
                {leftFaqs.map((item) => renderFaq(item))}
              </div>

              <div className="space-y-5">
                {rightFaqs.map((item) => renderFaq(item))}
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="px-6 py-16 lg:px-14 lg:py-20">
          <div className="relative min-h-[420px] overflow-hidden lg:sticky lg:top-28 lg:h-[420px] lg:min-h-0">
           
            <div className="relative z-10 flex h-full max-w-lg flex-col justify-center">
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl">
                {t.rich("cta.title", {
                  gold: (chunks) => (
                    <span className="text-brand-gold">{chunks}</span>
                  ),
                })}
              </h2>

              <p className="mt-5 text-base leading-8 text-brand-ivory/78">
                {t("cta.description")}
              </p>

              <Link
                href={getLocalizedRoute(locale, "contact")}
                className="gold-gradient mt-7 inline-flex w-fit items-center justify-center gap-3 rounded-md px-7 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
              >
                {t("cta.button")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold/25" />
    </section>
  );
}
