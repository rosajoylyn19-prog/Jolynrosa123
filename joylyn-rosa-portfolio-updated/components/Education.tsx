"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Education
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-luxury mt-6 flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:gap-8 sm:p-10"
        >
          <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gold/10">
            <GraduationCap size={26} className="text-gold-dark dark:text-gold" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-medium sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-base text-ink/70 dark:text-white/70">
              {education.school}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-gold-dark dark:text-gold">
              {education.year}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
