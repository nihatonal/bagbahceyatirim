"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Lock,
  MessageCircle,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Container from "../ui/Container";

const benefits = [
  { key: "personalConsulting", icon: UserRound },
  { key: "privacy", icon: ShieldCheck },
  { key: "fastReturn", icon: Clock },
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function InvestmentInquiryFormSection() {
  const t = useTranslations("contact.inquiryForm");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          budget: formData.get("budget"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="inquiry-form"
      className="relative overflow-hidden bg-brand-ivorypy-20 text-brand-charcoal lg:py-28"
    >
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] bg-brand-night shadow-premium lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[520px] p-8 text-brand-ivory lg:p-12">
            <Image
              src="/images/contact/inquiry-form-bg.webp"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.88)_0%,rgba(3,8,5,0.58)_48%,rgba(3,8,5,0.92)_100%)]" />

            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between">
              <FadeUp>
                <div>
                  <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                    {t("eyebrow")}
                  </p>

                  <h2 className="max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                    {t.rich("title", {
                      gold: (chunks) => (
                        <span className="text-brand-gold">{chunks}</span>
                      ),
                    })}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-8 text-brand-ivory/76">
                    {t("description")}
                  </p>
                </div>
              </FadeUp>

              <Stagger className="mt-10 space-y-5">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <StaggerItem key={benefit.key}>
                      <div className="flex gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-gold/25 bg-brand-night/55 text-brand-gold">
                          <Icon size={21} strokeWidth={1.45} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-brand-ivory">
                            {t(`benefits.${benefit.key}.title`)}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-brand-ivory/62">
                            {t(`benefits.${benefit.key}.description`)}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <FadeUp delay={0.2}>
                <div className="mt-10 rounded-2xl border border-brand-gold/18 bg-brand-night/55 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-gold text-brand-deep">
                      <MessageCircle size={20} />
                    </div>

                    <div>
                      <p className="text-sm leading-7 text-brand-ivory/76">
                        {t("whatsappBox.text")}
                      </p>

                      <Link
                        href="https://wa.me/905078070088"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-3 text-sm font-semibold text-brand-gold"
                      >
                        {t("whatsappBox.cta")}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          <div className="bg-white/86 p-6 backdrop-blur-sm lg:p-10 xl:p-14">
            <FadeUp>
              <div className="rounded-[1.75rem] bg-brand-ivory/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] lg:p-10">
                <div className="mb-8 flex items-center gap-5">
                  <p className="text-xs font-semibold uppercase tracking-luxury text-brand-gold">
                    {t("formEyebrow")}
                  </p>
                  <div className="h-px w-16 bg-brand-gold/50" />
                </div>

                <form onSubmit={handleSubmit} className="grid gap-5">
                  <input
                    type="text"
                    name="company"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      name="name"
                      label={t("fields.name.label")}
                      placeholder={t("fields.name.placeholder")}
                      required
                    />

                    <Field
                      name="phone"
                      label={t("fields.phone.label")}
                      placeholder={t("fields.phone.placeholder")}
                      required
                      type="tel"
                    />
                  </div>

                  <Field
                    name="email"
                    label={t("fields.email.label")}
                    placeholder={t("fields.email.placeholder")}
                    type="email"
                  />

                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      name="interest"
                      label={t("fields.interest.label")}
                      required
                      defaultText={t("fields.interest.placeholder")}
                    >
                      <option value="vineyard-investment">
                        {t("fields.interest.options.vineyardInvestment")}
                      </option>
                      <option value="active-portfolio">
                        {t("fields.interest.options.activePortfolio")}
                      </option>
                      <option value="investment-model">
                        {t("fields.interest.options.investmentModel")}
                      </option>
                      <option value="general">
                        {t("fields.interest.options.general")}
                      </option>
                    </SelectField>

                    <SelectField
                      name="budget"
                      label={t("fields.budget.label")}
                      required
                      defaultText={t("fields.budget.placeholder")}
                    >
                      <option value="500k-1m">
                        {t("fields.budget.options.range1")}
                      </option>
                      <option value="1m-3m">
                        {t("fields.budget.options.range2")}
                      </option>
                      <option value="3m-10m">
                        {t("fields.budget.options.range3")}
                      </option>
                      <option value="10m-plus">
                        {t("fields.budget.options.range4")}
                      </option>
                      <option value="undecided">
                        {t("fields.budget.options.undecided")}
                      </option>
                    </SelectField>
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-lg text-brand-charcoal">
                      {t("fields.message.label")}
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      maxLength={500}
                      placeholder={t("fields.message.placeholder")}
                      className="w-full resize-none rounded-xl border border-brand-border bg-white/72 px-5 py-4 text-sm outline-none transition placeholder:text-brand-charcoal/35 focus:border-brand-gold/60"
                    />
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4 text-sm leading-6 text-brand-charcoal/62">
                    <Lock
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-gold"
                    />
                    {t("privacyNote")}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-night px-7 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold transition hover:bg-brand-gold hover:text-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={18} />
                    {status === "loading" ? t("sending") : t("submit")}
                  </button>

                  {status === "success" && (
                    <p className="text-center text-sm font-medium text-green-700">
                      {t("successMessage")}
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-center text-sm font-medium text-red-700">
                      {t("errorMessage")}
                    </p>
                  )}

                  <p className="text-center text-sm text-brand-charcoal/54">
                    {t("returnNote")}
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-display text-lg text-brand-charcoal">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-14 w-full rounded-xl border border-brand-border bg-white/72 px-5 text-sm outline-none transition placeholder:text-brand-charcoal/35 focus:border-brand-gold/60"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  defaultText,
  required = false,
  children,
}: {
  name: string;
  label: string;
  defaultText: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-display text-lg text-brand-charcoal">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>

      <select
        name={name}
        required={required}
        defaultValue=""
        className="h-14 w-full rounded-xl border border-brand-border bg-white/72 px-5 text-sm text-brand-charcoal/70 outline-none transition focus:border-brand-gold/60"
      >
        <option value="" disabled>
          {defaultText}
        </option>

        {children}
      </select>
    </div>
  );
}