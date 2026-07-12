"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist py-24 dark:bg-slate-panel/40 sm:py-28">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-gold/20 bg-white/60 px-8 py-16 text-center shadow-soft dark:bg-charcoal/40 dark:shadow-soft-dark"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <Quote size={24} className="text-gold-dark dark:text-gold" />
          </span>
          <h2 className="mt-7 font-display text-2xl font-medium sm:text-3xl">
            Testimonials Coming Soon
          </h2>
          <p className="mt-3 max-w-sm text-sm text-ink/60 dark:text-white/60 sm:text-base">
            Client reflections are on their way. Check back soon to hear how
            this work has helped brands communicate better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
