import { notFound } from "next/navigation";

import { locales, type Locale } from "@/i18n/routing";
import {
  getRouteKeyBySlug,
  routeTranslations,
  type RouteKey,
} from "@/lib/localized-path";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const pageTitles: Record<RouteKey, string> = {
  vineyardInvestment: "Bağ Yatırımı",
  vineyards: "Bağlarımız",
  investmentModel: "Yatırım Modeli",
  about: "Hakkımızda",
  contact: "İletişim",
  journal: "Journal",
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.values(routeTranslations).map((route) => ({
      locale,
      slug: route[locale],
    }))
  );
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

  return (
    <main className="min-h-screen bg-brand-ivory px-6 py-32 text-brand-charcoal">
      <h1 className="font-display text-5xl">{pageTitles[routeKey]}</h1>
    </main>
  );
}