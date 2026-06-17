import { Banknote, Building2, Coins, Grape, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

type ComparisonRow = {
  key: string;
  icon: LucideIcon;
  highlighted?: boolean;
  values: {
    tangibleAsset: boolean;
    production: boolean;
    regularIncome: boolean;
    longTermValue: boolean;
  };
};

const rows: ComparisonRow[] = [
  {
    key: "gold",
    icon: Coins,
    values: {
      tangibleAsset: true,
      production: false,
      regularIncome: false,
      longTermValue: true,
    },
  },
  {
    key: "currency",
    icon: Banknote,
    values: {
      tangibleAsset: false,
      production: false,
      regularIncome: false,
      longTermValue: true,
    },
  },
  {
    key: "deposit",
    icon: Building2,
    values: {
      tangibleAsset: false,
      production: false,
      regularIncome: false,
      longTermValue: false,
    },
  },
  {
    key: "vineyard",
    icon: Grape,
    highlighted: true,
    values: {
      tangibleAsset: true,
      production: true,
      regularIncome: true,
      longTermValue: true,
    },
  },
];

const columns = [
  "tangibleAsset",
  "production",
  "regularIncome",
  "longTermValue",
] as const;

export default function ComparisonSection() {
  const t = useTranslations("vineyardInvestment.comparison");

  return (
    <section className="relative overflow-hidden bg-brand-night text-brand-ivory">
      <div className="absolute inset-0 dark-gradient opacity-60" />
      <div className="absolute -left-20 bottom-0 hidden size-72 rounded-full bg-brand-gold/10 blur-3xl lg:block" />
      <Container>
        <div className="relative z-10 grid gap-10 py-16 lg:grid-cols-[0.58fr_1.42fr] lg:py-20">
          <FadeUp>
            <div className="max-w-sm">
              <p className="mb-5 font-display text-2xl uppercase leading-tight tracking-[0.12em] text-brand-ivory lg:text-3xl">
                {t("title")}
              </p>

              <div className="mb-6 h-px w-16 bg-brand-gold/70" />

              <p className="text-base leading-8 text-brand-ivory/72">
                {t("description")}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="overflow-hidden rounded-xl border border-brand-gold/18 bg-brand-ivory/[0.035] shadow-premium">
              <div className="hidden lg:block">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-brand-gold/16">
                      <th className="w-[24%] px-7 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ivory/88">
                        {t("columns.type")}
                      </th>

                      {columns.map((column) => (
                        <th
                          key={column}
                          className="border-l border-brand-gold/12 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-ivory/88"
                        >
                          {t(`columns.${column}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row) => {
                      const Icon = row.icon;

                      return (
                        <tr
                          key={row.key}
                          className={cn(
                            "border-b border-brand-gold/10 last:border-b-0",
                            row.highlighted &&
                              "bg-brand-gold/15 shadow-[inset_0_0_26px_rgba(200,168,107,0.26)]",
                          )}
                        >
                          <td className="px-7 py-4">
                            <div className="flex items-center gap-4">
                              <Icon
                                size={24}
                                strokeWidth={1.45}
                                className="text-brand-gold"
                              />
                              <span
                                className={cn(
                                  "font-medium text-brand-ivory/82",
                                  row.highlighted &&
                                    "font-semibold text-brand-ivory",
                                )}
                              >
                                {t(`rows.${row.key}`)}
                              </span>
                            </div>
                          </td>

                          {columns.map((column) => (
                            <td
                              key={column}
                              className="border-l border-brand-gold/12 px-6 py-4 text-center"
                            >
                              {row.values[column] ? (
                                <span className="text-2xl text-brand-gold">
                                  ✓
                                </span>
                              ) : (
                                <X
                                  size={20}
                                  strokeWidth={1.7}
                                  className="mx-auto text-brand-ivory/70"
                                />
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="lg:hidden">
                <Stagger className="space-y-4 p-4">
                  {rows.map((row) => {
                    const Icon = row.icon;

                    return (
                      <StaggerItem key={row.key}>
                        <div
                          className={cn(
                            "rounded-lg border border-brand-gold/14 bg-brand-night/45 p-5",
                            row.highlighted &&
                              "border-brand-gold/40 bg-brand-gold/14 shadow-[inset_0_0_24px_rgba(200,168,107,0.22)]",
                          )}
                        >
                          <div className="mb-5 flex items-center gap-3">
                            <Icon
                              size={24}
                              strokeWidth={1.45}
                              className="text-brand-gold"
                            />
                            <h3 className="font-semibold text-brand-ivory">
                              {t(`rows.${row.key}`)}
                            </h3>
                          </div>

                          <div className="grid gap-3">
                            {columns.map((column) => (
                              <div
                                key={column}
                                className="flex items-center justify-between border-t border-brand-gold/12 pt-3 text-sm"
                              >
                                <span className="text-brand-ivory/68">
                                  {t(`columns.${column}`)}
                                </span>

                                {row.values[column] ? (
                                  <span className="text-lg text-brand-gold">
                                    ✓
                                  </span>
                                ) : (
                                  <X
                                    size={17}
                                    strokeWidth={1.7}
                                    className="text-brand-ivory/60"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
