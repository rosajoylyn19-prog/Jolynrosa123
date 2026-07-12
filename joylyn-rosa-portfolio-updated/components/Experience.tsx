"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-mist py-28 dark:bg-slate-panel/40 sm:py-32">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mt-4 mb-16 max-w-lg"
        >
          A career built on clear communication.
        </motion.h2>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gold/25 sm:left-[23px]" />
          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative flex gap-6 pl-0 sm:gap-8"
              >
                <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold/40 bg-white shadow-gold dark:bg-charcoal sm:h-12 sm:w-12">
                  <Briefcase size={16} className="text-gold-dark dark:text-gold" />
                </span>
                <div className="card-luxury flex-1 rounded-2xl p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dark dark:text-gold">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium sm:text-2xl">
                    {job.role}
                  </h3>
                  {job.org && (
                    <p className="mt-1 text-sm font-medium text-ink/60 dark:text-white/60">
                      {job.org}
                    </p>
                  )}
                  <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-white/70">
                    {job.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
