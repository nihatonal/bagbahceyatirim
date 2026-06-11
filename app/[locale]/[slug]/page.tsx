import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { locales, type Locale } from "@/i18n/routing";
import {
  getLocalizedRoute,
  getRouteKeyBySlug,
  routeTranslations,
  type RouteKey,
} from "@/lib/localized-path";
import { getCanonicalUrl, pageSeo } from "@/lib/page-seo";

import VineyardInvestmentHero from "@/components/vineyard-investment/VineyardInvestmentHero";
import WhyVineyardInvestmentSection from "@/components/vineyard-investment/WhyVineyardInvestmentSection";
import ComparisonSection from "@/components/vineyard-investment/ComparisonSection";
import ValueCreationSection from "@/components/vineyard-investment/ValueCreationSection";
import ReturnSourcesSection from "@/components/vineyard-investment/ReturnSourcesSection";
import RiskManagementSection from "@/components/vineyard-investment/RiskManagementSection";
import FaqCtaSection from "@/components/vineyard-investment/FaqCtaSection";
import VineyardsHero from "@/components/vineyards/VineyardsHero";
import PortfolioApproachSection from "@/components/vineyards/PortfolioApproachSection";
//import ActivePortfolioSection from "@/components/vineyards/ActivePortfolioSection";
import WhyKonyaSection from "@/components/vineyards/WhyKonyaSection";
import VineyardStorySection from "@/components/vineyards/VineyardStorySection";
import VineyardGallerySection from "@/components/vineyards/VineyardGallerySection";
import VineyardsCtaSection from "@/components/vineyards/VineyardsCtaSection";
import InvestmentModelHero from "@/components/investment-model/InvestmentModelHero";
import InvestmentStepsSection from "@/components/investment-model/InvestmentStepsSection";
import WhyModelWorksSection from "@/components/investment-model/WhyModelWorksSection";
import TransparentManagementSection from "@/components/investment-model/TransparentManagementSection";
import AnnualCycleSection from "@/components/investment-model/AnnualCycleSection";
import InvestmentModelCtaSection from "@/public/images/investment-model/InvestmentModelCtaSection";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.values(routeTranslations).map((route) => ({
      locale,
      slug: route[locale],
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const routeKey = getRouteKeyBySlug(rawLocale, slug);

  if (!routeKey) {
    return {};
  }

  const seo = pageSeo[routeKey][rawLocale];
  const canonical = getCanonicalUrl(rawLocale, `/${slug}`);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        tr: getLocalizedRoute("tr", routeKey),
        en: getLocalizedRoute("en", routeKey),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Bağ Bahçe Yatırım",
      locale: rawLocale === "tr" ? "tr_TR" : "en_US",
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

export default async function LocalizedSlugPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const routeKey = getRouteKeyBySlug(rawLocale, slug);

  if (!routeKey) {
    notFound();
  }

  if (routeKey === "vineyardInvestment") {
    return (
      <main>
        <VineyardInvestmentHero />
        <WhyVineyardInvestmentSection />
        <ComparisonSection />
        <ValueCreationSection />
        <ReturnSourcesSection />
        <RiskManagementSection />
        <FaqCtaSection />
      </main>
    );
  }

  if (routeKey === "vineyards") {
    return (
      <main>
        <VineyardsHero />
        <PortfolioApproachSection />
        {/* <ActivePortfolioSection /> */}
        <WhyKonyaSection />
        <VineyardStorySection />
        <VineyardGallerySection />
        <VineyardsCtaSection />
      </main>
    );
  }
  if (routeKey === "investmentModel") {
    return (
      <main>
        <InvestmentModelHero />
        <InvestmentStepsSection />
        <WhyModelWorksSection />
        <RiskManagementSection />
        <TransparentManagementSection />
        <AnnualCycleSection/>
        <InvestmentModelCtaSection/>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-ivory px-6 py-40 text-brand-charcoal">
      <h1 className="font-display text-5xl">{routeKey}</h1>
    </main>
  );
}
