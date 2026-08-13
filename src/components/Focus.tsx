"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Focus() {
  const { dict } = useLanguage();
  const { focus } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal glass-hi relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 grid-lines opacity-[0.15] [mask-image:radial-gradient(70%_100%_at_50%_50%,black,transparent)]"
          />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
              {focus.label}
            </p>
            <h2 className="mt-3 max-w-md font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {focus.heading}
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {focus.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm font-medium text-ink/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
