"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { dict, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <div
          className={`flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-glow" : "border border-transparent"
          }`}
        >
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Maleka<span className="text-lavender-400">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {dict.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="rounded-full bg-lavender-500 px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mx-5 mt-2 overflow-hidden rounded-2xl transition-all duration-300 sm:mx-8 lg:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="glass flex flex-col gap-1 p-3">
          {dict.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-ink/90 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-1 flex items-center justify-between gap-3 border-t border-line pt-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-lavender-500 px-4 py-2 text-sm font-medium text-white"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
