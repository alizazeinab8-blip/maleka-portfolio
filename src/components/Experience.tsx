"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  const { dict } = useLanguage();
  const { experience } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal is-visible mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
            {experience.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {experience.heading}
          </h2>
        </div>

        <div ref={ref} className="reveal glass-hi relative overflow-hidden rounded-3xl p-7 sm:p-10">
          <div
            aria-hidden
            className="absolute -end-16 -top-16 h-56 w-56 rounded-full bg-lavender-500/15 blur-[90px]"
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {experience.role}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-lavender-300">
                {experience.company}
              </p>
            </div>
            <span className="glass w-fit rounded-full px-4 py-1.5 text-xs font-medium text-muted">
              {experience.duration}
            </span>
          </div>

          <p className="relative mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {experience.body}
          </p>

          <ul className="relative mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {experience.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-400" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
