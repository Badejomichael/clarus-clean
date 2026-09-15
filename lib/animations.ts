import type { Variants } from "framer-motion";

/**
 * Scroll reveal used by most sections: fade in and rise slightly as the
 * element enters the viewport, once, then stay in place. Pass a delay for
 * staggering items in a list (e.g. fadeUp(i * 0.08)), and override y,
 * duration, or margin for a section that needs a different feel.
 */
export function fadeUp(
  delay = 0,
  opts: { y?: number; duration?: number; margin?: string } = {}
) {
  const { y = 16, duration = 0.5, margin = "-60px" } = opts;
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin },
    transition: { duration, delay },
  };
}

/**
 * Hero headline stagger. Wrap the block in a motion.div using
 * heroContainer with initial="hidden" animate="show", then give each
 * child motion element variants={heroItem}.
 */
export const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Hero portrait scaling into place. */
export const heroImageReveal = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 },
};

/** The floating stat card that lands after the hero portrait. */
export const heroFloatCard = {
  initial: { opacity: 0, y: 16, rotate: -6 },
  animate: { opacity: 1, y: 0, rotate: -4 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.6 },
};

/** Header mobile menu expand/collapse. */
export const mobileMenu = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" as const },
};

/** Spring used for the sliding pill behind the active Pricing toggle. */
export const segmentPillTransition = {
  type: "spring" as const,
  stiffness: 350,
  damping: 30,
};

/**
 * Pricing card mount/exit. liftY moves the highlighted card up slightly
 * so it reads as the featured tier.
 */
export function pricingCard(delay = 0, liftY = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: liftY },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.4, delay },
  };
}

/** Testimonial slide, direction is +1 (next) or -1 (previous). */
export function testimonialSlide(direction: number) {
  return {
    initial: { opacity: 0, x: direction * 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -direction * 40 },
    transition: { duration: 0.45, ease: "easeInOut" as const },
  };
}
