"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-28 sm:py-32">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mt-4 mb-14 max-w-lg"
        >
          How I can help your brand.
        </motion.h2>

        <div className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-white/10 dark:border-white/10">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="focus-gold group flex flex-col items-start justify-between gap-3 py-7 transition-colors hover:bg-gold/5 sm:flex-row sm:items-center sm:px-4"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-sm text-gold-dark dark:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm text-ink/60 dark:text-white/60 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="ml-8 flex-none text-ink/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-dark dark:text-white/30 dark:group-hover:text-gold"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
