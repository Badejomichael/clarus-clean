"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const STATS = [
  { value: 180, suffix: "+", label: "Facilities under contract" },
  { value: 14, suffix: "", label: "Countries served" },
  { value: 24, suffix: "/7", label: "Support desk coverage" },
  { value: 4.9, suffix: "/5", label: "Average client rating" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="border-y border-forest/8 bg-forest">
      <div className="container grid grid-cols-2 gap-y-10 py-14 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            {...fadeUp(i * 0.08, { y: 10, margin: "0px" })}
            className="text-center"
          >
            <p className="font-display text-4xl text-paper sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-sans text-sm text-mist/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
