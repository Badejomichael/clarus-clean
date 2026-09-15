"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Story() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div {...fadeUp(0, { y: 20 })} className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="blob-frame relative aspect-[4/5] w-full overflow-hidden bg-mist">
            <img
              src="/images/founder.jpg"
              alt="Elena Cross, founder of Clarus"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.1, { y: 20 })}>
          <p className="font-sans text-[15px] text-moss">Our story</p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
            The name behind every contract
          </h2>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/70">
            I started cleaning apartments myself in 2016, with two employees
            and a rented van. We have grown into a team across 14 countries
            since then, but the part I refused to change is the one that
            mattered most to our first clients: you get a person, not a
            ticket number. If a visit goes wrong, I hear about it directly,
            usually the same day.
          </p>
          <p className="mt-8 font-display text-2xl italic text-forest">
            Elena Cross
          </p>
          <p className="mt-1 font-sans text-sm text-ink/55">
            Founder &amp; Managing Director, Clarus
          </p>
        </motion.div>
      </div>
    </section>
  );
}
