"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function About() {
  const { dict } = useLanguage();
  const { about } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
              {about.label}
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {about.heading}
            </h2>
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
                {p}
              </p>
            ))}

            <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-5">
              <span
                aria-hidden
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-500/15 text-lavender-300"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2l7 3.2v4.3c0 4.2-2.9 7.9-7 8.9-4.1-1-7-4.7-7-8.9V5.2L10 2z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-ink/90 sm:text-[0.95rem]">
                {about.internshipNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
