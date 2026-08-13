"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-line bg-white/[0.03] p-1 text-xs font-medium ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-lavender-500 text-white" : "text-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <span className="text-muted2">|</span>
      <button
        type="button"
        onClick={() => setLang("fa")}
        aria-pressed={lang === "fa"}
        className={`rounded-full px-3 py-1.5 font-fa transition-colors ${
          lang === "fa" ? "bg-lavender-500 text-white" : "text-muted hover:text-ink"
        }`}
      >
        فارسی
      </button>
    </div>
  );
}
