"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          About
        </motion.p>

        <div className="mt-4 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title max-w-md"
            >
              Words with intent, support with precision.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mt-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-soft dark:shadow-soft-dark"
            >
              <Image
                src="/joylyn-about.jpg"
                alt="Joylyn Rosa"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/20" />
            </motion.div>
          </div>

          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-base leading-relaxed text-ink/75 dark:text-white/75 sm:text-lg"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="card-luxury mt-4 rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
                  <GraduationCap size={18} className="text-gold-dark dark:text-gold" />
                </span>
                <p className="font-display text-lg">
                  Political Consulting Firm — Prior Role
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {about.priorRoleTasks.map((task) => (
                  <span
                    key={task}
                    className="rounded-full border border-gold/25 px-4 py-1.5 text-sm text-ink/75 dark:text-white/75"
                  >
                    {task}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
