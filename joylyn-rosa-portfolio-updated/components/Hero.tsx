"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { site } from "@/lib/data";

function useTypingEffect(words: string[], speed = 65, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 1.6
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(site.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mist dark:bg-charcoal" />
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #111111 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container-luxury grid grid-cols-1 items-center gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Butuan, Caraga, Philippines
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex h-9 items-center font-mono text-lg text-gold-dark dark:text-gold sm:text-xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-gold-dark dark:bg-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink/70 dark:text-white/70 sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="focus-gold group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white shadow-soft transition hover:bg-gold-dark dark:bg-gold dark:text-charcoal dark:hover:bg-gold-light"
            >
              <Mail size={16} />
              Let&apos;s Work Together
            </a>
            <a
              href="#portfolio"
              className="focus-gold inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition hover:border-gold hover:text-gold-dark dark:border-white/15 dark:text-white dark:hover:text-gold"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Signature element: circular headshot with a premium gold border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-floatSlow rounded-full border border-gold/25" />
          <div className="absolute inset-6 rounded-full border border-gold/15" />
          <div className="absolute inset-14 animate-sealPulse rounded-full bg-gold-sheen shadow-gold" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-gold shadow-soft sm:h-48 sm:w-48">
            <Image
              src="/joylyn-headshot.jpg"
              alt="Joylyn Rosa"
              fill
              sizes="(min-width: 640px) 192px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="focus-gold absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 dark:text-white/40 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
