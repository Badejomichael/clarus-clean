"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiHome, FiBriefcase, FiArrowUpRight } from "react-icons/fi";
import { segmentPillTransition, pricingCard } from "@/lib/animations";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const PLAN_SETS: Record<"home" | "business", Plan[]> = {
  home: [
    {
      name: "Essential",
      tagline: "For occasional refreshes",
      price: "$38",
      cadence: "per visit",
      features: [
        "Weekly or biweekly single clean",
        "Kitchen, bathrooms, living areas",
        "Standard eco-friendly products",
        "Book online in minutes",
      ],
      cta: "Choose Essential",
    },
    {
      name: "Professional",
      tagline: "Our most-booked plan",
      price: "$64",
      cadence: "per visit",
      features: [
        "Everything in Essential",
        "The same crew every visit",
        "Inside-appliance & baseboard detail",
        "Priority rebooking & photo check-ins",
      ],
      cta: "Start with Professional",
      highlighted: true,
    },
    {
      name: "Whole-Home Care",
      tagline: "Larger properties & move days",
      price: "$110",
      cadence: "per visit",
      features: [
        "Everything in Professional",
        "Deep clean or move-in/move-out scope",
        "Add-ons: windows, laundry, organizing",
        "Dedicated supervisor on-site",
      ],
      cta: "Ask about Whole-Home",
    },
  ],
  business: [
    {
      name: "Essential",
      tagline: "Small offices & single sites",
      price: "$420",
      cadence: "per month",
      features: [
        "Weekly evening service",
        "Common areas, kitchens, restrooms",
        "Consolidated monthly invoice",
        "Supply restocking included",
      ],
      cta: "Choose Essential",
    },
    {
      name: "Professional",
      tagline: "Nightly or daytime programs",
      price: "$980",
      cadence: "per month",
      features: [
        "Everything in Essential",
        "Nightly or daytime coverage",
        "Dedicated account manager",
        "Monthly reporting & photo check-ins",
      ],
      cta: "Start with Professional",
      highlighted: true,
    },
    {
      name: "Enterprise",
      tagline: "Portfolios & multi-country contracts",
      price: "Custom",
      cadence: "quoted per site",
      features: [
        "Everything in Professional",
        "Multi-site, multi-currency billing",
        "Local compliance & insurance per market",
        "Multilingual coordination",
      ],
      cta: "Talk to sales",
    },
  ],
};

export default function Pricing() {
  const [segment, setSegment] = useState<"home" | "business">("home");
  const plans = PLAN_SETS[segment];

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
              Straightforward packages, scoped to your space
            </h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-ink/70">
              Pick a starting point below, then we&apos;ll fine-tune scope and
              frequency during your walkthrough.
            </p>
          </div>

          <div className="relative flex shrink-0 gap-1 rounded-full border border-forest/12 bg-porcelain p-1">
            {(["home", "business"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSegment(key)}
                className="focus-ring relative flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors"
                style={{ color: segment === key ? "#FBFAF7" : "#161E1999" }}
              >
                {segment === key && (
                  <motion.span
                    layoutId="segment-pill"
                    transition={segmentPillTransition}
                    className="absolute inset-0 rounded-full bg-forest"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {key === "home" ? <FiHome /> : <FiBriefcase />}
                  {key === "home" ? "Homes & apartments" : "Offices & hospitality"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {plans.map((plan, i) => (
              <motion.div
                key={`${segment}-${plan.name}`}
                {...pricingCard(i * 0.07, plan.highlighted ? -12 : 0)}
                className={
                  plan.highlighted
                    ? "relative flex flex-col rounded-4xl bg-forest p-8 text-paper shadow-soft lg:z-10"
                    : "relative flex flex-col rounded-4xl border border-forest/10 bg-porcelain p-8"
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brass px-3 py-1 font-sans text-xs font-medium text-ink">
                    Recommended
                  </span>
                )}

                <p
                  className={`font-display text-2xl ${
                    plan.highlighted ? "text-paper" : "text-forest"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`mt-1.5 font-sans text-sm ${
                    plan.highlighted ? "text-mist/80" : "text-ink/60"
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl">{plan.price}</span>
                  <span
                    className={`font-sans text-sm ${
                      plan.highlighted ? "text-mist/80" : "text-ink/55"
                    }`}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 font-sans text-sm leading-relaxed ${
                        plan.highlighted ? "text-paper/90" : "text-ink/70"
                      }`}
                    >
                      <FiCheck
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-brass" : "text-brass"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={
                    plan.highlighted
                      ? "focus-ring mt-8 flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                      : "focus-ring mt-8 flex items-center justify-center gap-2 rounded-full border border-forest/15 px-5 py-3 font-sans text-sm font-medium text-forest transition-colors hover:bg-forest/5"
                  }
                >
                  {plan.cta}
                  <FiArrowUpRight />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-8 max-w-2xl font-sans text-sm text-ink/50">
          Prices shown are indicative starting rates for illustration. Your
          quote depends on square footage, frequency, and local market. Ask
          us for exact figures in your currency.
        </p>
      </div>
    </section>
  );
}
