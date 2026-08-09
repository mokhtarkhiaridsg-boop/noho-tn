"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LocaleSwitch from "@/components/LocaleSwitch";
import NavbarStatusPill from "@/components/NavbarStatusPill";
import { localeFromPath, localePrefix, type Locale } from "@/lib/locale";
import { waLink } from "@/lib/whatsapp";

type NavChild = { href: string; label: string; desc?: string };
type NavLink = { href: string; label: string; highlight?: boolean; children?: NavChild[] };

/**
 * Nav shape, owner 2026-08-04: same grouping logic as nohomailbox.org —
 * the highlighted address link leads, then Business, then a Services
 * dropdown that collects the à-la-carte offerings so the top bar stays lean.
 * Shipping moves INTO the dropdown, so the top-level count stays at four and
 * the lg: breakpoint doesn't overflow.
 *
 * Routes are stored BARE and the locale prefix is applied once at render —
 * the same pattern Footer.tsx uses. The old four hand-prefixed arrays
 * re-typed every href per locale, which is how they drifted.
 *
 * /delivery, not /livraison: /livraison has no ar or en page, and
 * LocaleSwitch rewrites the current path into the other prefix — so a
 * /livraison entry would 404 any visitor who switched language from it.
 */
const NAV_SHAPE: { href: string; key: string; highlight?: boolean; childKeys?: string[] }[] = [
  { href: "/virtual-mailbox", key: "address", highlight: true },
  { href: "/business", key: "business" },
  { href: "/etudiants", key: "students" },
  { href: "/services", key: "services", childKeys: ["mail", "delivery", "shipping", "notary"] },
];

const CHILD_HREF: Record<string, string> = {
  mail: "/services",
  delivery: "/delivery",
  shipping: "/shipping",
  notary: "/notary",
};

type LabelEntry = { label: string; desc?: string };

const LABELS: Record<Locale, Record<string, LabelEntry>> = {
  tn: {
    address: { label: "Adresse & Colis" },
    business: { label: "Business" },
    students: { label: "Étudiants" },
    services: { label: "Services" },
    mail: { label: "Courrier & Colis", desc: "Scan, forwarding w pickup" },
    delivery: { label: "Livraison US", desc: "Livraison fi Los Angeles" },
    shipping: { label: "Devis d'expédition", desc: "Compare les tarifs" },
    notary: { label: "Notaire", desc: "Form 1583 w notaire" },
  },
  fr: {
    address: { label: "Adresse & Colis" },
    business: { label: "Business" },
    students: { label: "Étudiants" },
    services: { label: "Services" },
    mail: { label: "Courrier & Colis", desc: "Scan, forwarding et pickup" },
    delivery: { label: "Livraison US", desc: "Livraison sur Los Angeles" },
    shipping: { label: "Devis d'expédition", desc: "Compare les tarifs" },
    notary: { label: "Notaire", desc: "Form 1583 et notariat" },
  },
  ar: {
    address: { label: "العنوان والطرود" },
    business: { label: "الأعمال" },
    students: { label: "الطلاب" },
    services: { label: "الخدمات" },
    mail: { label: "البريد والطرود" },
    delivery: { label: "التوصيل في أمريكا" },
    shipping: { label: "الشحن" },
    notary: { label: "التوثيق" },
  },
  en: {
    address: { label: "Address & Packages" },
    business: { label: "Business" },
    students: { label: "Students" },
    services: { label: "Services" },
    mail: { label: "Mail & Packages", desc: "Scanning, forwarding & pickup" },
    delivery: { label: "US Delivery", desc: "Delivery across Los Angeles" },
    shipping: { label: "Shipping Quote", desc: "Compare carrier rates" },
    notary: { label: "Notary", desc: "Form 1583 & walk-in notary" },
  },
};

/** Build the locale's links, applying the path prefix exactly once. */
function buildLinks(locale: Locale): NavLink[] {
  const prefix = localePrefix(locale);
  const labels = LABELS[locale];
  return NAV_SHAPE.map((n) => ({
    href: prefix + n.href,
    label: labels[n.key]!.label,
    highlight: n.highlight,
    children: n.childKeys?.map((k) => ({
      href: prefix + CHILD_HREF[k]!,
      label: labels[k]!.label,
      desc: labels[k]!.desc,
    })),
  }));
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname() ?? "/";
  const locale = localeFromPath(path);
  const isAr = locale === "ar";
  const isTn = locale === "tn";
  const isEn = locale === "en";
  const isAdmin = path.startsWith("/admin");
  const links = buildLinks(locale);
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
            ) : l.children ? (
              // Grouped dropdown. The pt-2 on the panel is a cursor bridge —
              // without it the menu collapses as the pointer travels down.
              <div key={l.href} className="relative group">
                <Link
                  href={l.href}
                  className="px-2.5 py-2 rounded-lg transition-all duration-200 hover:bg-[#337485]/10 inline-flex items-center gap-1"
                  style={{ color: "rgba(45,16,15,0.7)" }}
                >
                  {l.label}
                  <svg viewBox="0 0 16 16" className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 6 L8 11 L13 6" />
                  </svg>
                </Link>
                <div
                  className={`absolute ${isAr ? "right-0" : "left-0"} top-full z-50 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                >
                  <div
                    className="w-64 rounded-2xl p-1.5"
                    style={{ background: "white", border: "1px solid #E8DDD0", boxShadow: "var(--shadow-md)" }}
                  >
                    {l.children.map((ch) => (
                      <Link
                        key={ch.href}
                        href={ch.href}
                        className="block px-3 py-2 rounded-xl transition-colors hover:bg-[#F8F2EA]"
                      >
                        <span className="block text-[13px] font-bold" style={{ color: "#2D100F" }}>{ch.label}</span>
                        {ch.desc && (
                          <span className="block text-[11px] mt-0.5" style={{ color: "#5C4540" }}>{ch.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
        // 820px, not 600 — the four Services children overflow the old height
        // and the bottom of the sheet (LocaleSwitch + WhatsApp) gets clipped.
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[820px] opacity-100" : "max-h-0 opacity-0"}`}
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
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block font-bold text-sm transition-colors py-3 ${
                  l.highlight ? "font-black inline-flex items-center gap-2" : ""
                }`}
                style={{
                  color: l.highlight ? "#23596A" : "#2D100F",
                  borderBottom: l.children ? "none" : "1px solid rgba(45,16,15,0.08)",
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
              {/* Children are listed inline on mobile — no hover to open a
                  panel with. Descriptions are dropped to keep the sheet short. */}
              {l.children && (
                <div className={`${isAr ? "pr-3" : "pl-3"} -mt-1 flex flex-col`}>
                  {l.children.map((ch) => (
                    <Link
                      key={ch.href}
                      href={ch.href}
                      onClick={() => setOpen(false)}
                      className="font-semibold text-[13px] py-2.5"
                      style={{ color: "#5C4540", borderBottom: "1px solid rgba(45,16,15,0.08)" }}
                    >
                      {ch.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
