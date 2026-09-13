"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Where we work", href: "#global" },
  { label: "Client stories", href: "#stories" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/5 bg-paper/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="focus-ring flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-forest">
            Clarus
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-brass sm:inline-block" />
          <span className="hidden font-sans text-xs uppercase tracking-[0.14em] text-moss sm:inline-block">
            Care, cleaned
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-sans text-[15px] text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18001234567"
            className="focus-ring flex items-center gap-2 font-sans text-[15px] text-ink/70 transition-colors hover:text-forest"
          >
            <FiPhone className="text-brass" />
            +1 (800) 123-4567
          </a>
          <a
            href="#quote"
            className="focus-ring rounded-full bg-forest px-5 py-2.5 font-sans text-[15px] font-medium text-paper shadow-card transition-transform hover:-translate-y-0.5 hover:bg-forest-light"
          >
            Request a quote
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded-full p-2 text-forest lg:hidden"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-forest/5 bg-paper lg:hidden"
          >
            <div className="container flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring font-sans text-base text-ink/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 rounded-full bg-forest px-5 py-3 text-center font-sans text-[15px] font-medium text-paper"
              >
                Request a quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
