"use client";

import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import { writingPortfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-mist py-28 dark:bg-slate-panel/40 sm:py-32">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mt-4 mb-14 max-w-lg"
        >
          Work worth reading.
        </motion.h2>

        <motion.a
          href={writingPortfolio.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -6 }}
          className="card-luxury group relative mx-auto flex max-w-xl flex-col items-center overflow-hidden rounded-2xl p-10 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-80" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-80" />

          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
            <FileText size={24} className="text-gold-dark dark:text-gold" />
          </span>

          <h3 className="mt-7 font-display text-2xl font-medium sm:text-3xl">
            {writingPortfolio.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm text-ink/60 dark:text-white/60 sm:text-base">
            A curated collection of SEO, blog, and web copy across legal,
            automotive, construction, and education industries.
          </p>

          <div className="hairline my-8 max-w-xs" />

          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition group-hover:bg-gold-dark dark:bg-gold dark:text-charcoal dark:group-hover:bg-gold-light">
            {writingPortfolio.buttonText}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
