"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LocaleSwitch from "@/components/LocaleSwitch";
import NavbarStatusPill from "@/components/NavbarStatusPill";
import { localeFromPath, localePrefix } from "@/lib/locale";
import { waLink } from "@/lib/whatsapp";

const FR_LINKS = [
  { href: "/fr/virtual-mailbox", label: "Adresse & Colis", highlight: true },
  { href: "/fr/shipping", label: "Expédition" },
  { href: "/fr/etudiants", label: "Étudiants" },
  { href: "/fr/business", label: "Business" },
];

const AR_LINKS = [
  { href: "/ar/virtual-mailbox", label: "العنوان والطرود", highlight: true },
  { href: "/ar/shipping", label: "الشحن" },
  { href: "/ar/etudiants", label: "الطلاب" },
  { href: "/ar/business", label: "الأعمال" },
];

// Tounsi is the default locale — no prefix.
const TN_LINKS = [
  { href: "/virtual-mailbox", label: "Adresse & Colis", highlight: true },
  { href: "/shipping", label: "Shipping" },
  { href: "/etudiants", label: "Étudiants" },
  { href: "/business", label: "Business" },
];

const EN_LINKS = [
  { href: "/en/virtual-mailbox", label: "Address & Packages", highlight: true },
  { href: "/en/shipping", label: "Shipping" },
  { href: "/en/etudiants", label: "Students" },
  { href: "/en/business", label: "Business" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname() ?? "/";
  const locale = localeFromPath(path);
  const isAr = locale === "ar";
  const isTn = locale === "tn";
  const isEn = locale === "en";
  const isAdmin = path.startsWith("/admin");
  const links = isAr ? AR_LINKS : isTn ? TN_LINKS : isEn ? EN_LINKS : FR_LINKS;
  const closeMenuLabel = isAr ? "إغلاق القائمة" : isEn ? "Close menu" : "Fermer le menu";
  const openMenuLabel = isAr ? "فتح القائمة" : isEn ? "Open menu" : "Ouvrir le menu";
  const homeHref = localePrefix(locale) || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isAdmin) return null;

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: scrolled ? "rgba(247,230,194,0.92)" : "#F7E6C2",
        backdropFilter: scrolled ? "blur(14px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.4)" : "none",
        borderBottom: scrolled
          ? "1.5px solid rgba(45,16,15,0.18)"
          : "1.5px solid rgba(45,16,15,0.12)",
        boxShadow: scrolled ? "0 4px 18px rgba(45,16,15,0.08)" : "none",
        fontFamily: isAr
          ? "var(--font-noto-arabic), system-ui, sans-serif"
          : "var(--font-baloo), sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-4">
        <Link href={homeHref} aria-label="NOHO Mailbox" className="group relative flex items-center shrink-0">
          <span
            aria-hidden="true"
            className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: "rgba(51,116,133,0.08)" }}
          />
          <Logo className="relative h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:-rotate-[3deg] group-hover:scale-[1.06] group-active:scale-[0.97]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold" style={{ color: "rgba(45,16,15,0.65)" }}>
          {links.map((l) =>
            l.highlight ? (
              <Link
                key={l.href}
                href={l.href}
                className="ml-1 mr-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-black uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(51,116,133,0.10)",
                  color: "#23596A",
                  border: "1px solid rgba(51,116,133,0.30)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 8 L12 14 L21 8" />
                </svg>
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="px-2.5 py-2 rounded-lg transition-all duration-200 hover:bg-[#337485]/10"
                style={{ color: "rgba(45,16,15,0.7)" }}
              >
                {l.label}
              </Link>
            )
          )}
          <div className="ml-3 flex items-center gap-2">
            <NavbarStatusPill isAr={isAr} isTn={isTn} isEn={isEn} />
            <LocaleSwitch />
            <Link
              href="/login"
              className="px-2.5 py-2 rounded-lg text-[13px] font-bold transition-colors hover:bg-[#337485]/10"
              style={{ color: "rgba(45,16,15,0.7)" }}
            >
              {isAr ? "تسجيل الدخول" : isEn ? "Log in" : "Connexion"}
            </Link>
            {/* Signup is French on every locale — transactional surfaces are. */}
            <Link
              href="/inscription"
              className="px-2.5 py-2 rounded-lg text-[13px] font-bold transition-colors hover:bg-[#337485]/10"
              style={{ color: "#337485" }}
            >
              Inscription
            </Link>
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-[13px] font-black transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#2D100F",
                color: "#F7E6C2",
                boxShadow: "0 4px 14px rgba(45,16,15,0.25)",
              }}
            >
              WhatsApp
            </a>
          </div>
        </nav>

        <button
          aria-label={open ? closeMenuLabel : openMenuLabel}
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          type="button"
          aria-expanded={open}
          aria-controls="navbar-mobile-menu"
        >
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "#2D100F" }} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "#2D100F" }} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "#2D100F" }} />
        </button>
      </div>

      <div
        id="navbar-mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
        hidden={!open}
      >
        <nav
          className="px-5 pb-5 pt-3 flex flex-col gap-0.5"
          style={{
            background: "#F7E6C2",
            borderTop: "1px solid rgba(45,16,15,0.12)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-bold text-sm transition-colors py-3 ${
                l.highlight ? "font-black inline-flex items-center gap-2" : ""
              }`}
              style={{
                color: l.highlight ? "#23596A" : "#2D100F",
                borderBottom: "1px solid rgba(45,16,15,0.08)",
              }}
            >
              {l.highlight && (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 8 L12 14 L21 8" />
                </svg>
              )}
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="font-bold text-sm py-3"
            style={{ color: "#337485", borderBottom: "1px solid rgba(45,16,15,0.08)" }}
          >
            {isAr ? "تسجيل الدخول" : isEn ? "Log in" : "Connexion"}
          </Link>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1">
              <LocaleSwitch />
            </div>
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-[2] text-center font-black py-3 rounded-2xl text-[13px] uppercase tracking-[0.06em]"
              style={{
                background: "linear-gradient(135deg, #2D100F 0%, #1F0807 100%)",
                color: "#F7E6C2",
                boxShadow: "0 6px 20px rgba(45,16,15,0.28)",
              }}
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
