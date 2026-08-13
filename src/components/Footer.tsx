"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const { footer, nav } = dict;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-start">
          <a href="#home" className="font-display text-base font-semibold text-ink">
            Maleka<span className="text-lavender-400">.</span>
          </a>
          <p className="mt-1 text-xs text-muted2">{footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
          {nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted2">
          © {year} Maleka — {footer.rights}
        </p>
      </div>
    </footer>
  );
}
