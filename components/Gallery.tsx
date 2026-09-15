"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const PHOTOS = [
  {
    src: "/images/gallery-kitchen.jpg",
    alt: "Freshly cleaned kitchen countertop and sink",
    caption: "Residential deep clean in Lisbon",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/gallery-crew.jpg",
    alt: "Clarus crew member cleaning a glass office partition",
    caption: "Office program in Singapore",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-hotel.jpg",
    alt: "Made-up hotel room bed and turned-down linens",
    caption: "Hospitality turnover in Dubai",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-4xl leading-tight text-forest sm:text-[2.75rem]">
            The standard, in practice
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-ink/70">
            A handful of recent sites, the same finish whether it&apos;s a
            single kitchen or a hotel floor.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              {...fadeUp(i * 0.08)}
              className={`group relative m-0 overflow-hidden rounded-4xl bg-mist ${photo.span}`}
            >
              {/* See README for the exact shot to drop in at this path */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 font-sans text-sm text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
