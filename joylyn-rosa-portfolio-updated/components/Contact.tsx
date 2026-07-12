"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="container-luxury grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-4 max-w-md">
            Let&apos;s write something worth ranking.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 dark:text-white/70">
            Available for freelance content writing and virtual assistance
            engagements. Reach out and I&apos;ll respond within one business
            day.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${site.email}`}
              className="focus-gold group flex items-center gap-4 text-ink/80 dark:text-white/80"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/10">
                <Mail size={18} className="text-gold-dark dark:text-gold" />
              </span>
              <span className="text-sm group-hover:text-gold-dark dark:group-hover:text-gold sm:text-base">
                {site.email}
              </span>
            </a>

            <div className="flex items-center gap-4 text-ink/80 dark:text-white/80">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/10">
                <MapPin size={18} className="text-gold-dark dark:text-gold" />
              </span>
              <span className="text-sm sm:text-base">{site.location}</span>
            </div>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold group flex items-center gap-4 text-ink/80 dark:text-white/80"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/10">
                <Linkedin size={18} className="text-gold-dark dark:text-gold" />
              </span>
              <span className="text-sm group-hover:text-gold-dark dark:group-hover:text-gold sm:text-base">
                Connect on LinkedIn
              </span>
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="card-luxury rounded-2xl p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="focus-gold w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/15"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="focus-gold w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/15"
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="focus-gold w-full resize-none rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/15"
              placeholder="Tell me a bit about your project..."
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="focus-gold mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-gold-dark dark:bg-gold dark:text-charcoal dark:hover:bg-gold-light sm:w-auto"
          >
            <Send size={16} />
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              Your email app should now be open with your message ready to
              send.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
