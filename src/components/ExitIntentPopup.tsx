"use client";

/**
 * "Avant de partir" exit-intent popup mirroring nohomailbox.org/components/ExitIntentPopup.
 * Fires on mouseout-top after 5s armed + 72h dismissal cookie.
 * No email collection (no newsletter backend on TN site yet) — instead routes to
 * /appel free consultation. Same Cialdini Reciprocity pattern.
 */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "noho-tn-exit-intent";
const SUPPRESS_HOURS = 72;

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [armed, setArmed] = useState(false);

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

  if (!open) return null;

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
        className="relative max-w-md w-full rounded-3xl p-8"
        style={{
          background: "linear-gradient(145deg, #FFFFFF 0%, #FFF9F3 100%)",
          boxShadow: "0 30px 80px rgba(45,16,15,0.4)",
          border: "1px solid #E8D8C4",
          animation: "scaleIn 200ms ease-out",
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer"
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
          Consultation gratuite
        </div>

        <h2
          id="exit-heading"
          className="font-extrabold tracking-tight mb-3"
          style={{
            color: "#2D100F",
            fontFamily: "var(--font-baloo), system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
            lineHeight: 1.1,
          }}
        >
          Avant de partir —{" "}
          <span
            style={{
              fontFamily: "var(--font-pacifico), cursive",
              color: "#337485",
              fontWeight: 400,
            }}
          >
            30 minutes offertes
          </span>
        </h2>
        <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: "#5C4540" }}>
          On regarde ton dossier ensemble — LLC US, banque, Stripe,
          conformité TN. 30 minutes, en français ou en derja. Sans
          pression, sans commitment.
        </p>

        <ul className="space-y-1.5 mb-5">
          {[
            "Diagnostic LLC + banque US adaptés à ta situation",
            "Le vrai coût total Year 1 + Year 2 — pas de surprise",
            "On te dit non si NOHO n'est pas le fit",
          ].map((b) => (
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

        <Link
          href="/appel"
          onClick={dismiss}
          className="w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl"
          style={{ background: "#2D100F", color: "#F7E6C2", minHeight: 48 }}
        >
          Réserver mon appel gratuit
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" aria-hidden="true">
            <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <div className="mt-5 pt-5 text-center" style={{ borderTop: "1px solid #E8D8C4" }}>
          <p className="text-xs" style={{ color: "rgba(122,96,80,0.7)" }}>
            Ou passe directement par notre tarification →
          </p>
          <Link
            href="/tarifs"
            onClick={dismiss}
            className="inline-block mt-1.5 font-bold text-sm hover:underline"
            style={{ color: "#337485" }}
          >
            Voir les forfaits
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
