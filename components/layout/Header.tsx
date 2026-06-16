"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  getLocalizedPathname,
  getLocalizedRoute,
  type RouteKey,
} from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";
  const currentPath = pathname.replace(`/${locale}`, "") || "/";

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full border-b border-brand-gold/0 transition-all duration-500",
          isScrolled || isMenuOpen
            ? "border-brand-gold/15 bg-brand-deep/80 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 lg:px-14",
            isScrolled || isMenuOpen ? "h-20" : "h-24",
          )}
        >
          <Link
            href={getLocalizedRoute(locale)}
            className="relative z-50 flex items-center gap-1"
          >
            <div
              className={cn(
                "font-display leading-none text-brand-gold transition-all duration-500",
                isScrolled || isMenuOpen ? "text-3xl" : "text-4xl",
              )}
            >
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={34}
                height={34}
                className="w-full h-auto"
              />
            </div>

            <div className="leading-none">
              <div
                className={cn(
                  "font-display tracking-[0.08em] text-brand-ivory transition-all duration-500",
                  isScrolled || isMenuOpen ? "text-lg" : "text-xl",
                )}
              >
                BAĞ BAHÇE
              </div>

              <div
                className={cn(
                  "font-bold font-display tracking-[0.35em] text-brand-gold transition-all duration-500",
                  isScrolled || isMenuOpen ? "text-[9px]" : "text-[10px]",
                )}
              >
                YATIRIM
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const href = getLocalizedRoute(locale, item.routeKey);

              const isActive = item.routeKey
                ? currentPath === href.replace(`/${locale}`, "")
                : currentPath === "/";

              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "group relative text-sm font-medium transition",
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-ivory/80 hover:text-brand-gold",
                  )}
                >
                  {t(item.key)}

                  <span
                    className={cn(
                      "absolute -bottom-2 left-1/2 h-px bg-brand-gold transition-all duration-300",
                      isActive
                        ? "w-full -translate-x-1/2 opacity-100"
                        : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100",
                    )}
                  />
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
                      item === locale
                        ? "text-brand-gold"
                        : "text-brand-ivory/70",
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
            onClick={() => setIsMenuOpen((current) => !current)}
            className="relative z-50 grid size-11 place-items-center rounded-full border border-brand-gold/25 bg-brand-night/25 text-brand-ivory backdrop-blur-md lg:hidden"
            aria-label={t("menu")}
            aria-expanded={isMenuOpen}
          >
            <span className="relative block h-5 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-6 bg-brand-ivory transition-all duration-300",
                  isMenuOpen && "top-2.5 rotate-45 bg-brand-gold",
                )}
              />

              <span
                className={cn(
                  "absolute left-0 top-2.5 h-px w-6 bg-brand-ivory transition-all duration-300",
                  isMenuOpen && "translate-x-5 opacity-0",
                )}
              />

              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-6 bg-brand-ivory transition-all duration-300",
                  isMenuOpen && "bottom-2.5 -rotate-45 bg-brand-gold",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-night/70 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-40 h-dvh w-[86%] max-w-[420px] border-l border-brand-gold/18 bg-brand-deep/95 px-7 pb-8 pt-28 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0",
        )}
      >
        <div className="absolute right-8 top-24 size-40 rounded-full bg-brand-gold/10 blur-3xl" />

        <nav className="relative z-10 space-y-2">
          {navItems.map((item, index) => {
            const href = getLocalizedRoute(locale, item.routeKey);

            const isActive = item.routeKey
              ? currentPath === href.replace(`/${locale}`, "")
              : currentPath === "/";

            return (
              <Link
                key={item.key}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-brand-gold/10 py-5 transition-all duration-300",
                  isActive
                    ? "text-brand-gold"
                    : "text-brand-ivory/80 hover:text-brand-gold",
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(18px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <span className="font-display text-3xl leading-none tracking-[-0.03em]">
                  {t(item.key)}
                </span>

                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-full border transition",
                    isActive
                      ? "border-brand-gold/60 text-brand-gold"
                      : "border-brand-ivory/15 text-brand-ivory/50 group-hover:border-brand-gold/50 group-hover:text-brand-gold",
                  )}
                >
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-brand-ivory/70">
            {locales.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                {index > 0 && <span className="text-brand-gold/60">|</span>}

                <Link
                  href={getLocalizedPath(item)}
                  className={cn(
                    "uppercase transition hover:text-brand-gold",
                    item === locale ? "text-brand-gold" : "text-brand-ivory/65",
                  )}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={getLocalizedRoute(locale, "contact")}
          className="gold-gradient relative z-10 mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md px-7 py-4 text-sm font-semibold text-brand-deep shadow-gold transition hover:brightness-110"
        >
          {t("cta")}
          <ArrowRight size={18} />
        </Link>
      </aside>
    </>
  );
}
