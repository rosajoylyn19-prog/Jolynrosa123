import { Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-white py-10 dark:bg-charcoal">
      <div className="container-luxury flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-display text-lg">
          Joylyn<span className="text-gold-dark dark:text-gold">.</span>
        </p>

        <p className="font-mono text-xs text-ink/50 dark:text-white/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-gold flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:text-gold-dark dark:border-white/10 dark:text-white/60 dark:hover:text-gold"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="focus-gold flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:text-gold-dark dark:border-white/10 dark:text-white/60 dark:hover:text-gold"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="container-luxury mt-8 border-t border-ink/5 pt-6 text-center dark:border-white/5">
        <p className="font-mono text-[11px] text-ink/40 dark:text-white/40">
          Designed &amp; Developed by{" "}
          <a
            href="https://saifullah-portfolio-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-gold text-ink/60 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-dark dark:text-white/60 dark:hover:text-gold"
          >
            Muhammad Saifullah
          </a>
        </p>
      </div>
    </footer>
  );
}
