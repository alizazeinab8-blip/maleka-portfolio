"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Lang, Dictionary } from "@/lib/types";
import { getDictionary } from "@/data/content";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  dict: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "maleka-portfolio-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "fa") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "en" ? "fa" : "en"));

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "fa" ? "rtl" : "ltr",
      dict: getDictionary(lang),
      setLang,
      toggleLang,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
