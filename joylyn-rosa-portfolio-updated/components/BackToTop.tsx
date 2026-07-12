"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="focus-gold fixed bottom-7 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-white/90 text-ink shadow-gold backdrop-blur dark:bg-charcoal/90 dark:text-white sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={18} className="text-gold-dark dark:text-gold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
