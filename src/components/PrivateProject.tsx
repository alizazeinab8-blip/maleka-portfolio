"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function PrivateProject() {
  const { dict } = useLanguage();
  const { privateProject } = dict;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-lavender-500/25 bg-gradient-to-br from-deep2 via-deep to-void p-7 sm:p-12"
        >
          {/* Locked / blurred visual motif instead of real screenshots */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
          >
            <div className="grid-lines absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_75%_30%,black,transparent)]" />
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-lavender-500/20 blur-[100px] rtl:-left-10 rtl:right-auto" />
          </div>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
                {privateProject.label}
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-[2rem]">
                {privateProject.heading}
              </h2>

              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-lavender-400/40 bg-lavender-500/10 px-4 py-1.5 text-xs font-semibold text-lavender-200">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 7V5a4 4 0 118 0v2M3.5 7h9a1 1 0 011 1v6a1 1 0 01-1 1h-9a1 1 0 01-1-1V8a1 1 0 011-1z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
                {privateProject.status}
              </span>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                {privateProject.description}
              </p>

              <p className="mt-6 max-w-lg rounded-2xl border border-line bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-muted2">
                {privateProject.confidentialNote}
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted2">
                {privateProject.areasLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {privateProject.areas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-ink/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender-500/15 text-lavender-300">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.3l2.2 2.2 4.8-4.8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
