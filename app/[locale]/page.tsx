import type { Metadata } from "next";

import { locales, type Locale } from "@/i18n/routing";
import { getCanonicalUrl, pageSeo } from "@/lib/page-seo";

import HomeHero from "@/components/home/HomeHero";
import InvestmentIntroSection from "@/components/home/InvestmentIntroSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturedVineyardSection from "@/components/home/FeaturedVineyardSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import JournalPreviewSection from "@/components/home/JournalPreviewSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "tr";

  const seo = pageSeo.home[locale];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: getCanonicalUrl(locale),
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getCanonicalUrl(locale),
      siteName: "Bağ Bahçe Yatırım",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/og/bag-bahce-og.jpg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/og/bag-bahce-og.jpg"],
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <InvestmentIntroSection />
      <StatsSection />
      <ProcessSection />
      <FeaturedVineyardSection />
      <PhilosophySection />
      <JournalPreviewSection />
      <HomeCtaSection />
    </main>
  );
}