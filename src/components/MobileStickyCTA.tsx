"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Mobile-only sticky CTA at the bottom of the viewport.
 * Appears after the user scrolls past the hero, hides on /appel + /contact
 * where it's redundant. Mirrors nohomailbox.org pattern.
 */
export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const path = usePathname() ?? "/";
  const isAr = path.startsWith("/ar");
  const hide = /^\/(ar\/)?(appel|contact)/.test(path);

  useEffect(() => {
    if (hide) return;
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hide]);

  if (hide) return null;

  const appelHref = isAr ? "/ar/appel" : "/appel";
  const ctaLabel = isAr ? "احجز مكالمة مجانية" : "Réserve un appel gratuit";

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
      style={{ padding: "12px 16px", background: "linear-gradient(to top, rgba(247,230,194,0.98), rgba(247,230,194,0.85) 70%, transparent)" }}
    >
      <Link
        href={appelHref}
        className="block text-center font-black py-3.5 rounded-2xl text-[14px] uppercase tracking-[0.08em]"
        style={{
          background: "linear-gradient(135deg, #2D100F 0%, #1F0807 100%)",
          color: "#F7E6C2",
          boxShadow: "0 10px 28px rgba(45,16,15,0.35)",
          fontFamily: isAr ? "var(--font-noto-arabic), system-ui, sans-serif" : "var(--font-baloo), sans-serif",
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
