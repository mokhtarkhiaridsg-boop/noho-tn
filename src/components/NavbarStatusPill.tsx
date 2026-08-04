"use client";

/**
 * Compact live-status pill for the navbar right side.
 * Same LA-time calc as OpenStatusPill but tiny — single dot + word.
 */
import { useEffect, useState } from "react";

function computeOpen(): { open: boolean; label: string } {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMin = now.getUTCMinutes();
  const utcDay = now.getUTCDay();
  const month = now.getUTCMonth();
  const laOffset = month >= 2 && month <= 10 ? -7 : -8;
  let laHour = utcHour + laOffset;
  let laDay = utcDay;
  if (laHour < 0) {
    laHour += 24;
    laDay = (laDay + 6) % 7;
  } else if (laHour >= 24) {
    laHour -= 24;
    laDay = (laDay + 1) % 7;
  }
  const laTime = laHour + utcMin / 60;

  let open = false;
  if (laDay >= 1 && laDay <= 5) {
    if ((laTime >= 9.5 && laTime <= 13.5) || (laTime >= 14 && laTime <= 17.5)) open = true;
  } else if (laDay === 6 && laTime >= 10 && laTime <= 13.5) {
    open = true;
  }
  return { open, label: open ? "Ouvert" : "Fermé" };
}

export default function NavbarStatusPill({
  isAr = false,
  isTn = false,
  isEn = false,
}: {
  isAr?: boolean;
  isTn?: boolean;
  isEn?: boolean;
}) {
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    setState(computeOpen());
    const t = setInterval(() => setState(computeOpen()), 60_000);
    return () => clearInterval(t);
  }, []);
  if (!state) return null;
  const dotColor = state.open ? "#22C55E" : "#9CA3AF";
  const label = isAr
    ? (state.open ? "مفتوح" : "مغلق")
    : isTn
    ? (state.open ? "Ma7loul" : "Msakker")
    : isEn
    ? (state.open ? "Open" : "Closed")
    : state.label;
  const title = state.open
    ? isAr
      ? "المتجر مفتوح الآن (توقيت لوس أنجلوس)"
      : isTn
      ? "Storefront ma7loul tawa (wa9t LA)"
      : isEn
      ? "Storefront open now (LA time)"
      : "Storefront ouvert (heure de LA)"
    : isAr
    ? "المتجر مغلق الآن"
    : isTn
    ? "Storefront msakker tawa"
    : isEn
    ? "Storefront closed right now"
    : "Storefront fermé";
  return (
    <span
      title={title}
      className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
      style={{
        background: "rgba(45,16,15,0.04)",
        border: "1px solid rgba(45,16,15,0.10)",
        color: "rgba(45,16,15,0.65)",
      }}
    >
      <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
        {state.open && (
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-65"
            style={{
              background: dotColor,
              animation: "navPing 1.6s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-1.5 w-1.5"
          style={{ background: dotColor }}
        />
      </span>
      {label}
      <style>{`
        @keyframes navPing {
          0% { transform: scale(0.9); opacity: 0.65; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </span>
  );
}
