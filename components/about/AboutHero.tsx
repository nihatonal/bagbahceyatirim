"use client";

import { useTranslations } from "next-intl";

import PageHero from "@/components/sections/PageHero";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      desktopImage="/images/about/hero-desktop.webp"
      mobileImage="/images/about/hero-mobile.webp"
      imageAlt={t("imageAlt")}
      titleLines={[
        { text: t("titleLine1") },
        { text: t("titleLine2"), gold: true },
      ]}
      description={t("description")}
      desktopParallaxOffset={28}
    />
  );
}