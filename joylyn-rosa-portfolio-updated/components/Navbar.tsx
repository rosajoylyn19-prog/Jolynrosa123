"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-white/80 shadow-soft backdrop-blur-xl dark:bg-charcoal/80 dark:shadow-soft-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxury flex h-[72px] items-center justify-between">
        <a
          href="#home"
          className="focus-gold font-display text-xl font-semibold tracking-wide"
        >
          Joylyn<span className="text-gold-dark dark:text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-gold group relative text-sm font-medium text-ink/80 transition-colors hover:text-ink dark:text-white/80 dark:hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="focus-gold flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-ink transition hover:border-gold dark:text-white"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={16} className="text-gold" />
              ) : (
                <Moon size={16} className="text-gold-dark" />
              )}
            </button>
          )}
          <a
            href="/resume-joylyn-rosa.pdf"
            download
            className="focus-gold group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gold-dark dark:bg-gold dark:text-charcoal dark:hover:bg-gold-light"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="focus-gold flex h-9 w-9 items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/15 bg-white/95 backdrop-blur-xl dark:bg-charcoal/95 lg:hidden"
          >
            <ul className="container-luxury flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-gold block rounded-lg px-2 py-3 text-base font-medium text-ink/85 dark:text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3 px-2">
                {mounted && (
                  <button
                    aria-label="Toggle dark mode"
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                    className="focus-gold flex h-9 w-9 items-center justify-center rounded-full border border-gold/25"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun size={16} className="text-gold" />
                    ) : (
                      <Moon size={16} className="text-gold-dark" />
                    )}
                  </button>
                )}
                <a
                  href="/resume-joylyn-rosa.pdf"
                  download
                  className="focus-gold inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white dark:bg-gold dark:text-charcoal"
                >
                  <Download size={14} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
