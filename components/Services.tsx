"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiHome,
  FiKey,
  FiRefreshCw,
  FiTool,
  FiFeather,
  FiArrowUpRight,
} from "react-icons/fi";

const SMALL_SERVICES = [
  {
    icon: FiHome,
    title: "Residential care",
    copy: "Weekly, biweekly, or one-off cleans for homes and serviced apartments.",
  },
  {
    icon: FiKey,
    title: "Hospitality turnover",
    copy: "Same-day changeovers for short-lets and boutique stays, on your schedule.",
  },
  {
    icon: FiRefreshCw,
    title: "Deep & move cleaning",
    copy: "Move-in, move-out, and seasonal resets that cover every surface.",
  },
  {
    icon: FiTool,
    title: "Post-construction",
    copy: "Dust and debris cleared so a finished space is ready to hand over.",
  },
  {
    icon: FiFeather,
    title: "Eco-forward add-ons",
    copy: "Fragrance-free and plant-based products available on every plan.",
  },
];

// Column spans for the 3 remaining slots beside the tall feature card,
// filling a 3-wide by 2-row area (1+1+1 on row one, 1+2 on row two).
const SMALL_SPANS = [
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
            One provider, every kind of space
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-ink/70">
            Whether you&apos;re managing a single residence or a portfolio of
            sites across borders, the same standard applies everywhere Clarus
            shows up.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-4xl bg-forest p-9 text-paper shadow-soft lg:col-span-2 lg:row-span-2"
          >
            {/* Replace with /public/images/office-team.jpg — a wide shot of a
                crew cleaning a bright office or lobby, cool-toned works best
                against the overlay below. */}
            <img
              src="/images/office-team.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-forest via-forest/95 to-forest/70"
            />
            <div className="relative">
              <FiBriefcase size={30} className="text-brass" />
              <h3 className="mt-6 font-display text-3xl">Offices &amp; facilities</h3>
              <p className="mt-4 max-w-sm font-sans text-[15px] leading-relaxed text-mist/85">
                Nightly or daytime programs built around your operating
                hours, with a single account manager across every location
                you run — from one office to a regional portfolio.
              </p>
            </div>
            <a
              href="#quote"
              className="focus-ring relative mt-10 flex w-fit items-center gap-2 rounded-full bg-paper/10 px-5 py-2.5 font-sans text-sm text-paper transition-colors hover:bg-paper/20"
            >
              Talk to facilities team
              <FiArrowUpRight />
            </a>
          </motion.div>

          {SMALL_SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className={`rounded-4xl border border-forest/8 bg-paper p-7 shadow-card transition-transform hover:-translate-y-1 ${
                SMALL_SPANS[i]
              }`}
            >
              <service.icon size={26} className="text-brass" />
              <h3 className="mt-5 font-display text-xl text-forest">
                {service.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink/65">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
