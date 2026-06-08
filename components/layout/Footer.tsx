"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  getLocalizedRoute,
  type RouteKey,
} from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";

const pageLinks: {
  key: string;
  routeKey?: RouteKey;
}[] = [
  { key: "vineyardInvestment", routeKey: "vineyardInvestment" },
  { key: "vineyards", routeKey: "vineyards" },
  { key: "investmentModel", routeKey: "investmentModel" },
  { key: "about", routeKey: "about" },
  { key: "contact", routeKey: "contact" },
];

const resourceLinks = [
  { key: "journal", href: "#" },
  { key: "faq", href: "#" },
  { key: "investmentGuide", href: "#" },
  { key: "privacy", href: "#" },
  { key: "terms", href: "#" },
];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function Footer() {
  const t = useTranslations("footer");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <footer className="relative overflow-hidden bg-brand-deep text-brand-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,151,63,0.13),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(201,151,63,0.08),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gold/40" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <Link
              href={getLocalizedRoute(locale)}
              className="inline-flex items-center gap-3"
            >
              <div className="font-display text-4xl leading-none text-brand-gold">
                BB
              </div>

              <div className="leading-none">
                <div className="font-display text-xl tracking-[0.08em] text-brand-ivory">
                  BAĞ BAHÇE
                </div>
                <div className="mt-1 text-[10px] tracking-[0.35em] text-brand-gold">
                  YATIRIM
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-brand-ivory/65">
              {t("description")}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: X, href: "#", label: "Instagram" },
                { icon: X, href: "#", label: "LinkedIn" },
                { icon: X, href: "#", label: "X" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ivory/20 text-brand-ivory/70 transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-deep"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-ivory">
              {t("pages.title")}
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {pageLinks.map((item) => (
                <Link
                  key={item.key}
                  href={getLocalizedRoute(locale, item.routeKey)}
                  className="text-sm text-brand-ivory/60 transition hover:text-brand-gold"
                >
                  {t(`pages.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-ivory">
              {t("resources.title")}
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {resourceLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm text-brand-ivory/60 transition hover:text-brand-gold"
                >
                  {t(`resources.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-ivory">
              {t("contact.title")}
            </h3>

            <div className="mt-5 space-y-4 text-sm text-brand-ivory/65">
              <Link
                href="tel:+902161234567"
                className="flex gap-3 transition hover:text-brand-gold"
              >
                <Phone size={18} className="mt-0.5 text-brand-gold" />
                <span>+90 507 987 00 88</span>
              </Link>

              <Link
                href="mailto:info@bagbahceyatirim.com"
                className="flex gap-3 transition hover:text-brand-gold"
              >
                <Mail size={18} className="mt-0.5 text-brand-gold" />
                <span>info@bagbahceyatirim.com</span>
              </Link>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                <span>{t("contact.address")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-ivory/10 pt-5 text-center text-xs text-brand-ivory/45">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}