"use client";

import { useTranslations } from "next-intl";

import PageHero from "@/components/sections/PageHero";

export default function ContactHero() {
  const t = useTranslations("contact");

  return (
    <PageHero
      eyebrow={t("hero.eyebrow")}
      titleLines={[
        { text: t("hero.titleLine1") },
        { text: t("hero.titleLine2"), gold: true },
      ]}
      description={t("hero.description")}
      desktopImage="/images/contact/hero-desktop.webp"
      mobileImage="/images/contact/hero-mobile.webp"
      imageAlt={t("hero.imageAlt")}
      ctas={[
        {
          label: t("hero.primaryCta"),
          href: "https://wa.me/905075878088",
        },
        {
          label: t("hero.secondaryCta"),
          href: "mailto:info@bagbahceyatirim.com",
          variant: "secondary",
        },
      ]}
      features={[
        {
          label: t("hero.features.onlineMeeting"),
        },
        {
          label: t("hero.features.tailoredModel"),
        },
      ]}
    />
  );
}
