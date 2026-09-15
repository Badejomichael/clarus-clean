"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonialSlide } from "@/lib/animations";

const QUOTES = [
  {
    quote:
      "We moved eleven serviced apartments onto Clarus and finally have one invoice and one standard, instead of eleven different vendors.",
    name: "Amara Osei",
    role: "Operations Director, Stayhaus Group, London",
    avatar: "/images/avatar-amara.jpg",
  },
  {
    quote:
      "The supervisor speaks with our facilities lead in Arabic and reports back in English. That alone solved a year of miscommunication.",
    name: "Karim El-Sayed",
    role: "Facilities Manager, Dubai",
    avatar: "/images/avatar-karim.jpg",
  },
  {
    quote:
      "Turnover between guests used to be our weak point. Now housekeeping is the thing guests mention in reviews.",
    name: "Priya Nair",
    role: "General Manager, Marram Boutique Hotel, Singapore",
    avatar: "/images/avatar-priya.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + QUOTES.length) % QUOTES.length);
  }

  const current = QUOTES[index];

  return (
    <section id="stories" className="bg-forest py-24 text-paper lg:py-32">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-balance font-display text-4xl leading-tight sm:text-[2.75rem]">
            What clients notice first
          </h2>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper/10"
            >
              <FiArrowLeft />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper/10"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="relative mt-14 min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              {...testimonialSlide(direction)}
              className="max-w-2xl"
            >
              <p className="text-balance font-display text-2xl leading-snug sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                {/* Client headshots, square, cropped to a circle here.
                    Real photos build far more trust than icon avatars. */}
                <img
                  src={current.avatar}
                  alt=""
                  aria-hidden
                  className="h-11 w-11 rounded-full object-cover"
                />
                <p className="font-sans text-[15px] text-mist/80">
                  {current.name}
                  <br />
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-3 sm:hidden">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-paper/20"
          >
            <FiArrowLeft />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-paper/20"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
