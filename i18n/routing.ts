export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",

  "/bag-yatirimi": {
    tr: "/bag-yatirimi",
    en: "/vineyard-investment",
  },

  "/baglarimiz": {
    tr: "/baglarimiz",
    en: "/our-vineyards",
  },

  "/yatirim-modeli": {
    tr: "/yatirim-modeli",
    en: "/investment-model",
  },

  "/hakkimizda": {
    tr: "/hakkimizda",
    en: "/about",
  },

  "/iletisim": {
    tr: "/iletisim",
    en: "/contact",
  },

  "/journal": {
    tr: "/journal",
    en: "/journal",
  },
} as const;