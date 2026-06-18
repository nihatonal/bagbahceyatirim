"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

const faqs = [
  "office",
  "faceToFace",
  "minimumInvestment",
  "investmentDuration",
] as const;

export default function ContactFaqSection() {
  const t = useTranslations("contact.faq");
  const [openItem, setOpenItem] = useState<(typeof faqs)[number] | null>(
    "office",
  );

  return (
    <section className="relative overflow-hidden bg-brand-ivory py-20 text-brand-charcoal lg:py-28">
      <div className="container-premium">
        <Container>
          <FadeUp>
            <div className="mb-12 flex items-center gap-5">
              <p className="text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>
              <div className="h-px w-16 bg-brand-gold/50" />
            </div>
          </FadeUp>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <FadeUp>
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-brand-gold/14 bg-brand-night">
                <Image
                  src="/images/contact/faq-vineyard.webp"
                  alt={t("imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,8,5,0.48)_100%)]" />
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="overflow-hidden rounded-[2rem] border border-brand-border bg-white/55 shadow-[0_28px_80px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                {faqs.map((item) => {
                  const isOpen = openItem === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setOpenItem(isOpen ? null : item)}
                      className="block w-full border-b border-brand-border px-6 py-6 text-left last:border-b-0 lg:px-8"
                    >
                      <div className="flex items-center justify-between gap-6">
                        <h3 className="text-base font-semibold text-brand-charcoal lg:text-lg">
                          {t(`${item}.question`)}
                        </h3>

                        <ChevronDown
                          size={18}
                          className={cn(
                            "shrink-0 text-brand-gold transition duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      </div>

                      <div
                        className={cn(
                          "grid transition-all duration-300",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-charcoal/68">
                            {t(`${item}.answer`)}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </FadeUp>
          </div>
        </Container>
      </div>
    </section>
  );
}
