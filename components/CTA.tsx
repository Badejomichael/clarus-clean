"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section id="quote" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          {...fadeUp(0, { y: 20, duration: 0.6, margin: "-80px" })}
          className="relative overflow-hidden rounded-5xl bg-forest px-8 py-16 text-center text-paper sm:px-16"
        >
          {/* Replace with /public/images/cta-clean-space.jpg: a wide, calm
              shot of a finished space (living room or lobby) works well
              since it sits behind a dark overlay. */}
          <img
            src="/images/cta-clean-space.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div aria-hidden className="absolute inset-0 bg-forest/55" />

          <h2 className="relative mx-auto max-w-xl text-balance font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s scope your first site this week
          </h2>
          <p className="relative mx-auto mt-5 max-w-md font-sans text-lg text-mist/85">
            Tell us where you operate and we&apos;ll bring a plan, a price,
            and a start date within two business days.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@clarusclean.com"
              className="focus-ring group flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 font-sans text-[15px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Request a quote
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="tel:+18001234567"
              className="focus-ring rounded-full border border-paper/25 px-7 py-3.5 font-sans text-[15px] font-medium text-paper transition-colors hover:bg-paper/10"
            >
              Call +1 (800) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
