"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

const icons: ReactNode[] = [
  // Build
  <path key="build" d="M4 16l6-11 6 11M7 12h6M15 16l3-6 3 6" strokeLinecap="round" strokeLinejoin="round" />,
  // Integrate
  <path key="integrate" d="M8 7a3 3 0 100 6 3 3 0 000-6zM16 11a3 3 0 100 6 3 3 0 000-6zM10.8 9.2L14 12" strokeLinecap="round" strokeLinejoin="round" />,
  // Structure
  <path key="structure" d="M5 5h6v6H5V5zM13 5h6v3h-6V5zM13 11h6v8h-6v-8zM5 14h6v5H5v-5z" strokeLinecap="round" strokeLinejoin="round" />,
  // Explore
  <path key="explore" d="M11 4a7 7 0 104.9 12l3.6 3.6M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round" />,
  // Learn
  <path key="learn" d="M4 8l8-4 8 4-8 4-8-4zM7 10.5v4.5c0 1.4 1.8 3 5 3s5-1.6 5-3v-4.5" strokeLinecap="round" strokeLinejoin="round" />,
];

export default function Mindset() {
  const { dict } = useLanguage();
  const { mindset } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal is-visible mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
            {mindset.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {mindset.heading}
          </h2>
        </div>

        <div
          ref={ref}
          className="reveal grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {mindset.cards.map((card, i) => (
            <div
              key={card.title}
              className="glass flex flex-col gap-4 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-500/12 text-lavender-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {icons[i]}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
