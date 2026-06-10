"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";

import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    key: "landscape",
    src: "/images/vineyards/gallery-landscape.webp",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    key: "grapes",
    src: "/images/vineyards/gallery-grapes.webp",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    key: "estate",
    src: "/images/vineyards/gallery-estate.webp",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    key: "harvest",
    src: "/images/vineyards/gallery-harvest.webp",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    key: "sunset",
    src: "/images/vineyards/gallery-sunset.webp",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    key: "soil",
    src: "/images/vineyards/gallery-soil.webp",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    key: "dry",
    src: "/images/vineyards/gallery-dry.webp",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    key: "blackgrapes",
    src: "/images/vineyards/gallery-blackgrapes.webp",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    key: "vineyarddron",
    src: "/images/vineyards/gallery-vineyarddron.webp",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    key: "vineyard",
    src: "/images/vineyards/gallery-vineyard.webp",
    className: "lg:col-span-1 lg:row-span-1",
  },

  {
    key: "wheater",
    src: "/images/vineyards/gallery-wheater.webp",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    key: "soil",
    src: "/images/vineyards/gallery-soil.webp",
    className: "lg:col-span-1 lg:row-span-1",
  },
] as const;

const IMAGES_PER_PAGE = 6;

export default function VineyardGallerySection() {
  const t = useTranslations("vineyards.gallery");

  const [pageIndex, setPageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const visibleImages = useMemo(() => {
    const start = pageIndex * IMAGES_PER_PAGE;
    return galleryImages.slice(start, start + IMAGES_PER_PAGE);
  }, [pageIndex]);

  const goToPrevPage = () => {
    setPageIndex((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  const goToNextPage = () => {
    setPageIndex((current) => (current === totalPages - 1 ? 0 : current + 1));
  };

  const openLightbox = (visibleIndex: number) => {
    setLightboxIndex(pageIndex * IMAGES_PER_PAGE + visibleIndex);
  };

  const goToPrevLightbox = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? current
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const goToNextLightbox = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") goToPrevLightbox();
      if (event.key === "ArrowRight") goToNextLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, goToPrevLightbox, goToNextLightbox]);

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 lg:px-14 lg:py-20">
        <FadeUp>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="font-display text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-ivory/68">
                {t("description")}
              </p>
            </div>

            {totalPages > 1 && (
              <div className="hidden items-center gap-3 lg:flex">
                <button
                  type="button"
                  onClick={goToPrevPage}
                  aria-label={t("previous")}
                  className="grid size-11 place-items-center rounded-full border border-brand-ivory/30 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={goToNextPage}
                  aria-label={t("next")}
                  className="grid size-11 place-items-center rounded-full border border-brand-ivory/30 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </FadeUp>

        <div className="hidden grid-cols-6 grid-rows-3 gap-4 lg:grid lg:h-[620px]">
          {visibleImages.map((image, index) => (
            <button
              key={`${image.key}-${pageIndex}`}
              type="button"
              onClick={() => openLightbox(index)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-brand-gold/12 bg-brand-ivory/[0.035]",
                image.className,
              )}
            >
              <Image
                src={image.src}
                alt={t(`${image.key}.imageAlt`)}
                fill
                sizes="33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-brand-night/10 transition group-hover:bg-brand-night/0" />
            </button>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden hide-scrollbar">
          {galleryImages.map((image, index) => (
            <button
              key={image.key}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative h-[420px] min-w-[82%] overflow-hidden rounded-2xl border border-brand-gold/12 bg-brand-ivory/[0.035]"
            >
              <Image
                src={image.src}
                alt={t(`${image.key}.imageAlt`)}
                fill
                sizes="82vw"
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 rounded-full border border-brand-gold/25 bg-brand-night/55 px-4 py-2 text-xs text-brand-ivory/78 backdrop-blur-md">
                {index + 1} / {galleryImages.length}
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-brand-night/96 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label={t("close")}
            className="absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full border border-brand-ivory/25 bg-brand-night/50 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={goToPrevLightbox}
            aria-label={t("previous")}
            className="absolute left-5 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-brand-ivory/25 bg-brand-night/50 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold md:grid"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            onClick={goToNextLightbox}
            aria-label={t("next")}
            className="absolute right-5 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-brand-ivory/25 bg-brand-night/50 text-brand-ivory transition hover:border-brand-gold hover:text-brand-gold md:grid"
          >
            <ArrowRight size={20} />
          </button>

          <div className="flex h-full flex-col">
            <div className="relative flex-1 px-4 pb-4 pt-16">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={t(`${galleryImages[lightboxIndex].key}.imageAlt`)}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="relative border-t border-brand-gold/12 bg-brand-night/70 px-4 py-4">
              <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto hide-scrollbar">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.key}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className={cn(
                      "relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border transition duration-300",
                      index === lightboxIndex
                        ? "scale-[1.03] border-brand-gold"
                        : "border-brand-ivory/15 opacity-70 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={t(`${image.key}.imageAlt`)}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />

                    {index !== lightboxIndex && (
                      <div className="absolute inset-0 bg-brand-night/35" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
