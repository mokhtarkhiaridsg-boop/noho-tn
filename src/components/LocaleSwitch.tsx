"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localeFromPath, localizePath, type Locale } from "@/lib/locale";

/**
 * TN / FR / AR / EN locale switcher.
 * Swaps the locale prefix on the current path so the user lands on the same
 * page in the target locale. Tounsi is the default and carries no prefix.
 */
export default function LocaleSwitch() {
  const [open, setOpen] = useState(false);
  const path = usePathname() ?? "/";
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = localeFromPath(path);
  const current = currentLocale.toUpperCase();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (locale: Locale) => {
    setOpen(false);
    if (locale === currentLocale) return;
    router.push(localizePath(path, locale));
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={currentLocale === "ar" ? "تغيير اللغة" : currentLocale === "en" ? "Change language" : currentLocale === "fr" ? "Changer de langue" : "Baddel el logha"}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-black uppercase tracking-[0.08em] transition-colors"
        style={{
          background: "rgba(45,16,15,0.06)",
          color: "#2D100F",
          border: "1px solid rgba(45,16,15,0.15)",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
        {current}
        <svg viewBox="0 0 16 16" className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6 L8 10 L12 6" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-1.5 w-36 rounded-xl overflow-hidden z-50"
          style={{
            background: "#fff",
            border: "1px solid rgba(45,16,15,0.12)",
            boxShadow: "0 12px 32px rgba(45,16,15,0.16)",
          }}
        >
          {/* Tounsi first — it is the default locale. */}
          <button
            type="button"
            onClick={() => switchTo("tn")}
            role="menuitem"
            className="w-full text-left px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-[#F7E6C2]/50"
            style={{ color: currentLocale === "tn" ? "#337485" : "#2D100F" }}
          >
            Tounsi
          </button>
          <button
            type="button"
            onClick={() => switchTo("fr")}
            role="menuitem"
            className="w-full text-left px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-[#F7E6C2]/50"
            style={{ color: currentLocale === "fr" ? "#337485" : "#2D100F" }}
          >
            Français
          </button>
          <button
            type="button"
            onClick={() => switchTo("ar")}
            role="menuitem"
            dir="rtl"
            className="w-full text-right px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-[#F7E6C2]/50"
            style={{ color: currentLocale === "ar" ? "#337485" : "#2D100F", fontFamily: "system-ui" }}
          >
            العربية
          </button>
          <button
            type="button"
            onClick={() => switchTo("en")}
            role="menuitem"
            className="w-full text-left px-4 py-2.5 text-[13px] font-bold transition-colors hover:bg-[#F7E6C2]/50"
            style={{ color: currentLocale === "en" ? "#337485" : "#2D100F" }}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
