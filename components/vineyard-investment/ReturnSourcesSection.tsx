"use client";

import { motion } from "framer-motion";
import { BarChart3, Coins, Sprout, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const sources = [
  { key: "productionIncome", icon: Coins },
  { key: "landAppreciation", icon: BarChart3 },
  { key: "professionalOperation", icon: Sprout },
] as const;

const flow = [
  { number: "01", source: "productionIncome", result: "annualCashFlow" },
  { number: "02", source: "landAppreciation", result: "capitalGain" },
  { number: "03", source: "professionalOperation", result: "sustainableYield" },
] as const;

export default function ReturnSourcesSection() {
  const t = useTranslations("vineyardInvestment.returnSources");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(200,168,107,0.16),transparent_38%)]" />
      <Container>
        <div className="relative z-10 mx-auto grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                {t("eyebrow")}
              </p>

              <h2 className="max-w-2xl font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-5xl">
                {t.rich("title", {
                  gold: (chunks) => (
                    <span className="text-brand-gold">{chunks}</span>
                  ),
                })}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-brand-ivory/72">
                {t("description")}
              </p>
            </FadeUp>

            <Stagger className="mt-10 space-y-5">
              {sources.map((source) => {
                const Icon = source.icon;

                return (
                  <StaggerItem key={source.key}>
                    <div className="group flex gap-5 border-t border-brand-gold/16 pt-5">
                      <div className="grid size-14 shrink-0 place-items-center rounded-full border border-brand-gold/28 bg-brand-ivory/[0.04] text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-deep">
                        <Icon size={24} strokeWidth={1.45} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-brand-ivory">
                          {t(`${source.key}.title`)}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-7 text-brand-ivory/66">
                          {t(`${source.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <FadeUp delay={0.15}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-gold/18 bg-brand-ivory/[0.055] p-5 shadow-premium lg:p-7">
              <div className="absolute right-0 top-0 size-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-gold/14 blur-3xl" />

              <div className="relative z-10">
                <p className="mb-5 text-center text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                  {t("diagram.title")}
                </p>

                <div className="space-y-4">
                  {flow.map((item, index) => (
                    <FlowRow
                      key={item.number}
                      number={item.number}
                      source={t(`diagram.${item.source}`)}
                      result={t(`diagram.${item.result}`)}
                      delay={index * 0.12}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 rounded-2xl border border-brand-gold/25 bg-brand-night/50 p-5 text-center shadow-[inset_0_0_32px_rgba(200,168,107,0.10)]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-ivory/52">
                    {t("diagram.outcomeLabel")}
                  </p>

                  <p className="mt-2 font-display text-2xl leading-tight text-brand-gold md:text-3xl">
                    {t("diagram.outcome")}
                  </p>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function FlowRow({
  number,
  source,
  result,
  delay,
}: {
  number: string;
  source: string;
  result: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-brand-gold/16 bg-brand-night/36 p-4"
    >
      <div className="flex items-center gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-gold/36 bg-brand-gold/10 font-display text-base text-brand-gold">
          {number}
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <p className="text-lg font-semibold text-brand-ivory">{source}</p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: delay + 0.25 }}
            className="hidden origin-left items-center gap-2 text-brand-gold sm:flex"
          >
            <span className="h-px w-12 bg-brand-gold/45" />
            <ArrowRight size={17} />
          </motion.div>

          <p className="text-sm font-medium text-brand-gold sm:text-right">
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
