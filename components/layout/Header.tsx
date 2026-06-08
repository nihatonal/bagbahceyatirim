"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import {
  getLocalizedPathname,
  getLocalizedRoute,
  type RouteKey,
} from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navItems: {
  key: string;
  routeKey?: RouteKey;
}[] = [
  { key: "home" },
  { key: "vineyardInvestment", routeKey: "vineyardInvestment" },
  { key: "vineyards", routeKey: "vineyards" },
  { key: "investmentModel", routeKey: "investmentModel" },
  { key: "about", routeKey: "about" },
  { key: "contact", routeKey: "contact" },
];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function Header() {
  const t = useTranslations("header");
  const rawLocale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  const getLocalizedPath = (nextLocale: Locale) => {
    return getLocalizedPathname(pathname, locale, nextLocale);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-500 border-b border-brand-gold/0",
        isScrolled
          ? "border-brand-gold/15 bg-brand-deep/80 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 lg:px-14",
          isScrolled ? "h-20" : "h-24",
        )}
      >
        <Link
          href={getLocalizedRoute(locale)}
          className="flex items-center gap-3"
        >
          <div
            className={cn(
              "font-display leading-none text-brand-gold transition-all duration-500",
              isScrolled ? "text-3xl" : "text-4xl",
            )}
          >
            BB
          </div>

          <div className="leading-none">
            <div
              className={cn(
                "font-display tracking-[0.08em] text-brand-ivory transition-all duration-500",
                isScrolled ? "text-lg" : "text-xl",
              )}
            >
              BAĞ BAHÇE
            </div>

            <div
              className={cn(
                "mt-1 tracking-[0.35em] text-brand-gold transition-all duration-500",
                isScrolled ? "text-[9px]" : "text-[10px]",
              )}
            >
              YATIRIM
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const href = getLocalizedRoute(locale, item.routeKey);

            return (
              <Link
                key={item.key}
                href={href}
                className="relative text-sm font-medium text-brand-ivory/80 transition hover:text-brand-gold"
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-2 text-sm text-brand-ivory/75">
            {locales.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                {index > 0 && <span className="text-brand-gold/70">|</span>}

                <Link
                  href={getLocalizedPath(item)}
                  className={cn(
                    "uppercase transition hover:text-brand-gold",
                    item === locale ? "text-brand-gold" : "text-brand-ivory/70",
                  )}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="rounded-md border border-brand-gold/60 px-5 py-3 text-sm font-medium text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          type="button"
          className="text-brand-ivory lg:hidden"
          aria-label={t("menu")}
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}