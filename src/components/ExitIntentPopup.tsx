"use client";

/**
 * "Avant de partir" exit-intent popup mirroring nohomailbox.org/components/ExitIntentPopup.
 * Fires on mouseout-top after 5s armed + 72h dismissal cookie.
 * No email collection (no newsletter backend on TN site yet) — instead routes to
 * WhatsApp, the single conversion path since the "book a call" CTA was retired
 * sitewide (owner, 2026-08). Same Cialdini Reciprocity pattern.
 */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/locale";
import { waLink } from "@/lib/whatsapp";

const STORAGE_KEY = "noho-tn-exit-intent";
const SUPPRESS_HOURS = 72;

type PopupCopy = {
  badge: string; headA: string; headScript: string; body: string;
  bullets: string[]; cta: string; footNote: string; footLink: string; close: string;
  tarifsHref: string; rtl?: boolean;
};

const COPY: Record<"fr" | "ar" | "tn" | "en", PopupCopy> = {
  fr: {
    badge: "Consultation gratuite",
    headA: "Avant de partir — ",
    headScript: "30 minutes offertes",
    body: "On regarde ton dossier ensemble — LLC US, banque, Stripe, conformité TN. 30 minutes, en français ou en derja. Sans pression, sans commitment.",
    bullets: [
      "Diagnostic LLC + banque US adaptés à ta situation",
      "Le vrai coût total Year 1 + Year 2 — pas de surprise",
      "On te dit non si NOHO n'est pas le fit",
    ],
    cta: "WhatsApp",
    footNote: "Ou passe directement par notre tarification →",
    footLink: "Voir les forfaits",
    close: "Fermer",
    tarifsHref: "/fr/tarifs",
  },
  ar: {
    badge: "استشارة مجانية",
    headA: "قبل أن تغادر — ",
    headScript: "30 دقيقة مجاناً",
    body: "ندرس ملفك معاً — شركة LLC أمريكية، الخدمات البنكية، Stripe، والامتثال في تونس. 30 دقيقة، بالفرنسية أو باللهجة التونسية. دون ضغط ودون التزام.",
    bullets: [
      "تشخيص شركة LLC والبنك الأمريكي بما يناسب وضعك",
      "التكلفة الحقيقية للسنة الأولى والثانية — دون مفاجآت",
      "نقول لك لا إن لم تكن NOHO الخيار المناسب",
    ],
    cta: "WhatsApp",
    footNote: "أو اطّلع مباشرة على الأسعار",
    footLink: "شاهد الخطط",
    close: "إغلاق",
    tarifsHref: "/ar/tarifs",
    rtl: true,
  },
  tn: {
    badge: "Consultation b latech",
    headA: "9bal ma temchi — ",
    headScript: "30 d9i9a b latech",
    body: "Nchoufou el dossier mte3ek m3ak — LLC US, banque, Stripe, conformité TN. 30 d9i9a, bel français wala bel tounsi. Bla pression, bla engagement.",
    bullets: [
      "Diagnostic LLC + banque US 7asb wadh3ek",
      "El kolfa el 7a9i9ia fel 3am 1 + 3am 2 — bla surprise",
      "N9ollek le b kol sara7a ken NOHO mouch lel wadh3ek",
    ],
    cta: "WhatsApp",
    footNote: "Wala chouf el tarifs direct →",
    footLink: "Voir les forfaits",
    close: "Sakker",
    tarifsHref: "/tarifs",
  },
  en: {
    badge: "Free consultation",
    headA: "Before you go — ",
    headScript: "30 minutes, on us",
    body: "We look at your file together — US LLC, banking, Stripe, TN compliance. 30 minutes, in English or French. No pressure, no commitment.",
    bullets: [
      "LLC + US banking diagnosis fitted to your situation",
      "The real Year 1 + Year 2 total cost — no surprises",
      "We tell you no if NOHO isn't the fit",
    ],
    cta: "WhatsApp",
    footNote: "Or go straight to pricing →",
    footLink: "See the plans",
    close: "Close",
    tarifsHref: "/en/tarifs",
  },
};

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [armed, setArmed] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const last = localStorage.getItem(STORAGE_KEY);
    if (last) {
      const ts = parseInt(last, 10);
      if (Date.now() - ts < SUPPRESS_HOURS * 60 * 60 * 1000) {
        setDismissed(true);
        return;
      }
    }
    const armTimer = setTimeout(() => setArmed(true), 5000);
    return () => clearTimeout(armTimer);
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // localStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (!armed || dismissed) return;

    function onMouseOut(e: MouseEvent) {
      if (e.clientY <= 0 && !e.relatedTarget) setOpen(true);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("keydown", onKey);
    };
  }, [armed, dismissed, dismiss]);

  if (!open || pathname.startsWith("/admin")) return null;

  const locale = localeFromPath(pathname);
  const C = COPY[locale];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-heading"
      onClick={dismiss}
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
      style={{
        background: "rgba(45,16,15,0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "fadeIn 200ms ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        dir={C.rtl ? "rtl" : "ltr"}
        className="relative max-w-md w-full rounded-3xl p-8"
        style={{
          background: "linear-gradient(145deg, #FFFFFF 0%, #FFF9F3 100%)",
          boxShadow: "0 30px 80px rgba(45,16,15,0.4)",
          border: "1px solid #E8D8C4",
          animation: "scaleIn 200ms ease-out",
          fontFamily: C.rtl ? "var(--font-noto-arabic), system-ui, sans-serif" : undefined,
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={C.close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
          style={{ color: "#7A6050", fontSize: "20px", lineHeight: 1 }}
        >
          ×
        </button>

        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] rounded-full mb-4"
          style={{
            background: "rgba(51,116,133,0.10)",
            color: "#337485",
            border: "1px solid rgba(51,116,133,0.28)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#337485" }} />
          {C.badge}
        </div>

        <h2
          id="exit-heading"
          className="font-extrabold tracking-tight mb-3"
          style={{
            color: "#2D100F",
            fontFamily: C.rtl ? "var(--font-noto-arabic), system-ui, sans-serif" : "var(--font-baloo), system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
            lineHeight: 1.1,
          }}
        >
          {C.headA}
          <span
            style={{
              fontFamily: C.rtl ? "var(--font-noto-arabic), system-ui, sans-serif" : "var(--font-pacifico), cursive",
              color: "#337485",
              fontWeight: C.rtl ? 700 : 400,
            }}
          >
            {C.headScript}
          </span>
        </h2>
        <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: "#5C4540" }}>
          {C.body}
        </p>

        <ul className="space-y-1.5 mb-5">
          {C.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px]" style={{ color: "#2D100F" }}>
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8 L7 12 L13 4" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        <a
          href={waLink("general")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl"
          style={{ background: "#2D100F", color: "#F7E6C2", minHeight: 48 }}
        >
          {C.cta}
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" aria-hidden="true">
            <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <div className="mt-5 pt-5 text-center" style={{ borderTop: "1px solid #E8D8C4" }}>
          <p className="text-xs" style={{ color: "rgba(122,96,80,0.7)" }}>
            {C.footNote}
          </p>
          <Link
            href={C.tarifsHref}
            onClick={dismiss}
            className="inline-block mt-1.5 font-bold text-sm hover:underline"
            style={{ color: "#337485" }}
          >
            {C.footLink}
          </Link>
        </div>

        <style>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
        `}</style>
      </div>
    </div>
  );
}
