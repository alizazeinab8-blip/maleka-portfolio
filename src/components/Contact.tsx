"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { siteLinks } from "@/data/links";

export default function Contact() {
  const { dict } = useLanguage();
  const { contact } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-deep2 to-void p-8 text-center sm:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-lavender-500/15 blur-[100px]" />
          </div>

          <div className="relative">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
              {contact.label}
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {contact.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${siteLinks.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-lavender-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {contact.emailLabel}
              </a>
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.08]"
              >
                {contact.githubLabel}
              </a>
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.08]"
              >
                {contact.linkedinLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
