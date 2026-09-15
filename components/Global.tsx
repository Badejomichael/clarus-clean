"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { FiCheckCircle } from "react-icons/fi";

const REGIONS = [
  { name: "United Kingdom & Ireland", cities: "London, Dublin, Manchester" },
  { name: "Western Europe", cities: "Paris, Amsterdam, Berlin, Lisbon" },
  { name: "Gulf & Middle East", cities: "Dubai, Abu Dhabi, Doha" },
  { name: "North America", cities: "New York, Toronto, Austin" },
  { name: "Southeast Asia", cities: "Singapore, Kuala Lumpur, Bangkok" },
  { name: "Oceania", cities: "Sydney, Melbourne, Auckland" },
];

const COMPLIANCE = [
  "Local labor law compliance in every market",
  "Liability insurance held in-country",
  "Coordination in English, French, Arabic, and Mandarin",
  "Consolidated billing across all sites",
];

export default function Global() {
  return (
    <section id="global" className="py-24 lg:py-32">
      <div className="container">
        {/* Replace with /public/images/global-team.jpg: a candid shot of a
            multinational team or a world-map-style overview, wide aspect
            ratio (roughly 16:6) works best here. */}
        <div className="mb-14 overflow-hidden rounded-4xl">
          <img
            src="/images/global-team.jpg"
            alt="Clarus regional supervisors coordinating across markets"
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
              Built for clients who operate across borders
            </h2>
            <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink/70">
              Property groups and hospitality brands use Clarus to
              standardize cleaning quality across every market they enter,
              without hiring a local vendor each time.
            </p>

            <ul className="mt-9 space-y-4">
              {COMPLIANCE.map((line) => (
                <li key={line} className="flex items-start gap-3 font-sans text-[15px] text-ink/75">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-brass" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {REGIONS.map((region, i) => (
              <motion.div
                key={region.name}
                {...fadeUp(i * 0.06, { y: 14, duration: 0.45 })}
                className="rounded-3xl border border-forest/8 bg-porcelain p-6"
              >
                <p className="font-display text-lg text-forest">{region.name}</p>
                <p className="mt-1.5 font-sans text-sm text-ink/60">{region.cities}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
