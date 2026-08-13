"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { dict } = useLanguage();
  const { hero } = dict;

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28"
    >
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]" />
        <div className="bg-grid-glow absolute inset-x-0 top-0 h-[70vh]" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lavender-500/20 blur-[120px]" />
        <div className="animate-float absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-magenta/10 blur-3xl" />
        <div className="animate-float absolute left-[6%] top-[38%] h-56 w-56 rounded-full bg-violet/10 blur-3xl [animation-delay:-3s]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="animate-fadeUp">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-lavender-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lavender-300" />
            </span>
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-2xl font-display text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            <span className="text-gradient">{hero.headline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-lavender-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {hero.ctaPrimary}
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rtl:rotate-180"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.08]"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Signature console panel */}
        <div className="relative mx-auto w-full max-w-md animate-fadeUp [animation-delay:150ms]">
          <div className="glass-hi relative overflow-hidden rounded-3xl p-1 shadow-glow">
            <div className="flex items-center gap-1.5 rounded-t-[1.35rem] bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6465]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFC02E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#29CB5A]" />
              <span className="ms-3 text-[11px] font-medium text-muted2">
                maleka.dev — terminal
              </span>
            </div>
            <div className="relative rounded-b-[1.35rem] bg-deep2/70 px-5 py-6 font-mono text-[13px] leading-[1.9] text-lavender-100 sm:text-sm">
              {hero.console.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <div
                    key={i}
                    className={
                      line.startsWith(">")
                        ? "text-lavender-300"
                        : "text-ink/90"
                    }
                  >
                    {line}
                  </div>
                )
              )}
              <span className="mt-1 inline-block h-4 w-2 animate-pulseGlow bg-lavender-300 align-middle" />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-14 h-px bg-gradient-to-r from-transparent via-lavender-300/60 to-transparent animate-scanline"
            />
          </div>

          <div
            aria-hidden
            className="glass absolute -bottom-6 -start-6 hidden w-40 rounded-2xl px-4 py-3 sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-muted2">Focus</p>
            <p className="mt-1 text-sm font-medium text-ink">React · Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
