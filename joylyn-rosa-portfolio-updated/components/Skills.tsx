"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageSquareText,
  PenLine,
  FileCode2,
  Feather,
  Users,
  ClipboardList,
  Briefcase,
  Scale,
  Keyboard,
  MessagesSquare,
  BookOpenText,
  LayoutGrid,
  Brain,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "SEO Writing": Search,
  "AEO Writing": MessageSquareText,
  "Content Writing": PenLine,
  "Technical Writing": FileCode2,
  Copywriting: Feather,
  "Virtual Assistance": Users,
  "Administrative Support": ClipboardList,
  "Executive Assistance": Briefcase,
  "Legal Writing": Scale,
  "Data Entry": Keyboard,
  Communication: MessagesSquare,
  Research: BookOpenText,
  "Microsoft Office": LayoutGrid,
  "Critical Thinking": Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="container-luxury">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mt-4 mb-14 max-w-lg"
        >
          A toolkit shaped by writing and operations.
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill] ?? PenLine;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 8) * 0.05 }}
                whileHover={{ y: -6 }}
                className="card-luxury group flex flex-col items-start gap-4 rounded-2xl p-6 transition-colors hover:border-gold/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Icon size={20} className="text-gold-dark dark:text-gold" />
                </span>
                <p className="font-display text-base font-medium leading-snug sm:text-lg">
                  {skill}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
