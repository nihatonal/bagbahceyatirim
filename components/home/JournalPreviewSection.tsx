import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { getLocalizedRoute } from "@/lib/localized-path";
import { locales, type Locale } from "@/i18n/routing";

const posts = ["profitability", "setupCost", "landVsVineyard"] as const;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default function JournalPreviewSection() {
  const t = useTranslations("home.journal");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(200,168,107,0.12),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <FadeUp>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
                {t("title")}
              </h2>
            </div>

            <Link
              href={getLocalizedRoute(locale, "journal")}
              className="hidden items-center gap-3 text-sm font-semibold text-brand-ivory/80 transition hover:text-brand-gold sm:flex"
            >
              {t("allPosts")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeUp>

        <Stagger>
          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post}>
                <Link
                  href={getLocalizedRoute(locale, "journal")}
                  className="group grid overflow-hidden rounded-md border border-brand-gold/10 bg-brand-ivory/[0.06] transition duration-300 hover:border-brand-gold/35 hover:bg-brand-ivory/[0.09] lg:grid-cols-[0.85fr_1fr]"
                >
                  <div className="relative h-52 overflow-hidden lg:h-full">
                    <Image
                      src={t(`${post}.image`)}
                      alt={t(`${post}.imageAlt`)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 18vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-night/10" />
                  </div>

                  <div className="flex min-h-[190px] flex-col justify-between p-6">
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
                        {t(`${post}.category`)}
                      </p>

                      <h3 className="text-xl font-semibold leading-snug text-brand-ivory">
                        {t(`${post}.title`)}
                      </h3>
                    </div>

                    <div className="mt-8 flex items-center justify-between text-sm text-brand-ivory/58">
                      <span>{t(`${post}.date`)}</span>
                      <ArrowRight
                        size={18}
                        className="text-brand-gold transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <FadeUp delay={0.2}>
          <Link
            href={getLocalizedRoute(locale, "journal")}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory/80 transition hover:text-brand-gold sm:hidden"
          >
            {t("allPosts")}
            <ArrowRight size={18} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}