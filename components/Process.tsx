"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Tell us the space",
    copy: "Share square footage, site count, and how often you need us — over a call or a short form.",
  },
  {
    n: "02",
    title: "Walkthrough & quote",
    copy: "A local supervisor visits (or joins a video walkthrough) and confirms scope within 48 hours.",
  },
  {
    n: "03",
    title: "Crew assigned",
    copy: "The same trained team returns each visit, backed by a supervisor who checks in weekly.",
  },
  {
    n: "04",
    title: "Ongoing reporting",
    copy: "Photo check-ins and a monthly summary land in your inbox — no chasing required.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-mist/40 py-24 lg:py-32">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
            From first call to first clean, in days
          </h2>
        </div>

        <div className="relative mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-forest/10 lg:block"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-lg text-paper">
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-xl text-forest">
                {step.title}
              </h3>
              <p className="mt-2.5 font-sans text-[15px] leading-relaxed text-ink/65">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
