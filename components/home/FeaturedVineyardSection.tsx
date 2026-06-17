import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Grape,
  MapPin,
  Mountain,
  Sprout,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";
import Container from "../ui/Container";

const specs = [
  {
    key: "location",
    icon: MapPin,
  },
  {
    key: "altitude",
    icon: Mountain,
  },
  {
    key: "grape",
    icon: Grape,
  },
  {
    key: "area",
    icon: Sprout,
  },
  {
    key: "year",
    icon: CalendarDays,
  },
] as const;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function FeaturedVineyardSection() {
  const t = useTranslations("home.featuredVineyard");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,168,107,0.13),transparent_34%)]" />

      <div className="relative z-10 grid min-h-[560px] lg:grid-cols-[1.65fr_1.35fr]">
        <Container>
          <div className="relative order-2 flex items-center px-6 py-16 lg:order-1 lg:px-14 lg:py-20">
            <FadeUp className="relative z-10 max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>

              <Stagger className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {specs.map((item) => {
                  const Icon = item.icon;

                  return (
                    <StaggerItem key={item.key}>
                      <div className="border-r border-brand-gold/18 pr-4 last:border-r-0">
                        <Icon
                          size={28}
                          strokeWidth={1.45}
                          className="mb-3 text-brand-gold"
                        />

                        <p className="text-sm font-semibold text-brand-ivory">
                          {t(`specs.${item.key}.value`)}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-brand-ivory/58">
                          {t(`specs.${item.key}.label`)}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <p className="mt-8 max-w-xl text-base leading-8 text-brand-ivory/76">
                {t("description")}
              </p>

              <Link
                href={getLocalizedRoute(locale, "vineyards")}
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-md border border-brand-gold/60 px-7 py-4 text-sm font-semibold text-brand-ivory transition hover:bg-brand-gold hover:text-brand-deep"
              >
                {t("cta")}
                <ArrowRight size={18} />
              </Link>
            </FadeUp>
          </div>
        </Container>
        <div className="relative order-1 h-[320px] lg:order-2 lg:h-auto">
          <Image
            src="/images/home/featured-konya-vineyard.webp"
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/24 to-transparent lg:from-brand-night/80 lg:via-brand-night/20" />
          <div className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-brand-night to-transparent lg:block" />

          <div className="absolute bottom-8 right-6 hidden items-center gap-4 lg:flex">
            <button
              type="button"
              aria-label={t("previous")}
              className="grid size-12 place-items-center rounded-full border border-brand-ivory/45 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label={t("next")}
              className="grid size-12 place-items-center rounded-full border border-brand-ivory/45 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
