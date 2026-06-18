"use client";

import Link from "next/link";
import { MessageCircle, Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Container from "../ui/Container";

const channels = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    href: "https://wa.me/905078070088",
  },
  {
    key: "email",
    icon: Mail,
    href: "mailto:info@bagbahceyatirim.com",
  },
  {
    key: "phone",
    icon: Phone,
    href: "tel:+905078070088",
  },
  {
    key: "meeting",
    icon: Calendar,
    href: "#meeting",
  },
] as const;

export default function ContactChannelsSection() {
  const t = useTranslations("contact.contactMethods");

  return (
    <section className="bg-brand-ivory py-24 text-brand-charcoal lg:py-32">
      <div className="container-premium">
        <Container>
          <FadeUp>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
              {t("eyebrow")}
            </p>

            <h2 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-brand-charcoal/72">
              {t("description")}
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {channels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <FadeUp key={channel.key} delay={index * 0.08}>
                  <Link
                    href={channel.href}
                    target={channel.key === "whatsapp" ? "_blank" : undefined}
                    className={`
                   group
                  relative
                  flex
                  h-full
                  flex-col
                  rounded-[28px]
                  border
                  ${
                    channel.key === "whatsapp"
                      ? "border-brand-gold/35 bg-gradient-to-b from-brand-gold/ to-white"
                      : "border-brand-border bg-white/70"
                  }
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-brand-gold/35
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                  `}
                  >
                    <div
                      className="
                    mb-8
                    grid
                    size-14
                    place-items-center
                    rounded-full
                    border
                    border-brand-gold/20
                    bg-brand-night
                    text-brand-gold
                    transition-all
                    duration-500
                    group-hover:scale-110
                    "
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="font-display text-3xl">
                      {t(`${channel.key}.title`)}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-brand-charcoal/72">
                      {t(`${channel.key}.description`)}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-gold">
                      {t(`${channel.key}.cta`)}

                      <ArrowRight
                        size={16}
                        className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      "
                      />
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
