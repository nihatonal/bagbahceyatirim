"use client";

import { useLocale, useTranslations } from "next-intl";

import PageHero from "@/components/sections/PageHero";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";

const features = ["selectedLand", "managedPortfolio", "longTermValue"] as const;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function VineyardsHero() {
  const t = useTranslations("vineyards.hero");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";
  return (
    <PageHero
      desktopImage="/images/vineyards/hero-desktop.webp"
      mobileImage="/images/vineyards/hero-mobile.webp"
      imageAlt={t("imageAlt")}
      titleLines={[
        { text: t("titleLine1") },
        { text: t("titleLine2"), gold: true },
      ]}
      description={t("description")}
      ctas={[
        {
          label: t("primaryCta"),
          href: getLocalizedRoute(locale, "contact"),
        },
        {
          label: t("secondaryCta"),
          href: getLocalizedRoute(locale, "vineyards"),
          variant: "secondary",
        },
      ]}
      features={features.map((feature) => ({
        label: t(`features.${feature}`),
      }))}
    />
  );
}
