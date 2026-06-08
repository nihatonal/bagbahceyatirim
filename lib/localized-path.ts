import { locales, type Locale } from "@/i18n/routing";

type RouteTranslation = Record<Locale, string>;

export const routeTranslations = {
  vineyardInvestment: {
    tr: "bag-yatirimi",
    en: "vineyard-investment",
  },
  vineyards: {
    tr: "baglarimiz",
    en: "our-vineyards",
  },
  investmentModel: {
    tr: "yatirim-modeli",
    en: "investment-model",
  },
  about: {
    tr: "hakkimizda",
    en: "about",
  },
  contact: {
    tr: "iletisim",
    en: "contact",
  },
  journal: {
    tr: "journal",
    en: "journal",
  },
} satisfies Record<string, RouteTranslation>;

export type RouteKey = keyof typeof routeTranslations;

function translateRouteSegment(
  segment: string,
  fromLocale: Locale,
  toLocale: Locale
) {
  const routes = Object.values(routeTranslations) as RouteTranslation[];

  for (const route of routes) {
    if (route[fromLocale] === segment) {
      return route[toLocale];
    }
  }

  return segment;
}

export function getLocalizedPathname(
  pathname: string,
  currentLocale: Locale,
  nextLocale: Locale
) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  const routeSegmentIndex = 1;
  const currentRouteSegment = segments[routeSegmentIndex];

  if (currentRouteSegment) {
    segments[routeSegmentIndex] = translateRouteSegment(
      currentRouteSegment,
      currentLocale,
      nextLocale
    );
  }

  return `/${segments.join("/")}`;
}

export function getLocalizedRoute(locale: Locale, routeKey?: RouteKey) {
  if (!routeKey) {
    return `/${locale}`;
  }

  return `/${locale}/${routeTranslations[routeKey][locale]}`;
}

export function getRouteKeyBySlug(locale: Locale, slug: string): RouteKey | null {
  const entries = Object.entries(routeTranslations) as [
    RouteKey,
    RouteTranslation
  ][];

  const match = entries.find(([, route]) => route[locale] === slug);

  return match?.[0] ?? null;
}