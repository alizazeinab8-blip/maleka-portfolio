"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function Workflow() {
  const { dict } = useLanguage();
  const { workflow } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal is-visible mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
            {workflow.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {workflow.heading}
          </h2>
        </div>

        <div ref={ref} className="reveal relative">
          <div
            aria-hidden
            className="absolute start-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lavender-500/50 via-line to-transparent sm:block"
          />
          <ol className="flex flex-col gap-4">
            {workflow.steps.map((step) => (
              <li
                key={step.index}
                className="glass relative flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender-500/15 text-sm font-semibold text-lavender-200">
                  {step.index}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
