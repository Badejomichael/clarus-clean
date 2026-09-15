"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { mobileMenu } from "@/lib/animations";

const FAQS = [
  {
    q: "Who actually cleans my space?",
    a: "A background-checked employee on our own payroll, never a subcontractor pulled from an app. Most clients see the same one or two faces at every visit.",
  },
  {
    q: "What happens if something gets damaged?",
    a: "Tell us within 48 hours and our insurance covers repair or replacement. We would rather fix a mistake than argue about whose fault it was.",
  },
  {
    q: "Can I pause or cancel a plan?",
    a: "Yes, anytime, with no fees. Skip a week, move a booking, or cancel with 48 hours' notice.",
  },
  {
    q: "How do you keep quality consistent across 14 countries?",
    a: "Every market runs the same training checklist and reporting format, and a regional supervisor personally signs off on the first three visits at any new site.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container max-w-3xl">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
            Questions people actually ask
          </h2>
        </div>

        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-forest">{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest">
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div {...mobileMenu} className="overflow-hidden">
                      <p className="pb-6 max-w-xl font-sans text-[15px] leading-relaxed text-ink/70">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
