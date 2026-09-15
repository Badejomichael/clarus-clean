"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGlobe, FiShield, FiCheck } from "react-icons/fi";
import { heroContainer, heroItem, heroImageReveal, heroFloatCard } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 lg:pb-28 lg:pt-20">
      {/* soft ambient wash, kept quiet and singular */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-mist/60 blur-3xl"
      />

      <div className="container relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p variants={heroItem} className="font-sans text-[15px] text-moss">
            Cleaning teams, trained and insured, in 14 countries
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="mt-5 text-balance font-display text-[2.75rem] leading-[1.08] text-forest sm:text-6xl"
          >
            A space that feels cared for, wherever you operate
          </motion.h1>

          <motion.p variants={heroItem} className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink/70">
            Clarus places vetted cleaning crews inside homes, offices, and
            hospitality venues, coordinated from one dashboard whether
            you&apos;re managing a single flat or forty sites abroad.
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="focus-ring group flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-sans text-[15px] font-medium text-paper shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-forest-light"
            >
              Get a tailored plan
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="focus-ring rounded-full border border-forest/15 px-7 py-3.5 font-sans text-[15px] font-medium text-forest transition-colors hover:bg-forest/5"
            >
              See services
            </a>
          </motion.div>

          <motion.div variants={heroItem} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <span className="flex items-center gap-2 font-sans text-sm text-ink/65">
              <FiShield className="text-brass" /> Bonded &amp; insured crews
            </span>
            <span className="flex items-center gap-2 font-sans text-sm text-ink/65">
              <FiGlobe className="text-brass" /> Multilingual coordination
            </span>
            <span className="flex items-center gap-2 font-sans text-sm text-ink/65">
              <FiCheck className="text-brass" /> Satisfaction re-clean, free
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          {...heroImageReveal}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="blob-frame relative aspect-[4/5] w-full overflow-hidden bg-mist">
            {/* Replace with a real photo at /public/images/hero-cleaner.jpg */}
            <img
              src="/images/hero-cleaner.jpg"
              alt="Clarus cleaning professional at work in a bright home"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            {...heroFloatCard}
            className="absolute -left-6 bottom-8 w-52 rounded-3xl bg-paper p-5 shadow-soft sm:-left-10"
          >
            <p className="font-display text-3xl text-forest">14</p>
            <p className="mt-1 font-sans text-sm leading-snug text-ink/65">
              countries served, one point of contact
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
