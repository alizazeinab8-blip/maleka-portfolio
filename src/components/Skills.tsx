"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Skills() {
  const { dict } = useLanguage();
  const { skills } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal is-visible mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
            {skills.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {skills.heading}
          </h2>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <div
              key={group.label}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lavender-500/10 blur-2xl transition-opacity group-hover:opacity-100 rtl:-left-8 rtl:right-auto"
              />
              <span className="font-mono text-xs text-muted2">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{group.label}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-ink/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
