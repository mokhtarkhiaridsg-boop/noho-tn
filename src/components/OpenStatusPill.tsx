"use client";

/**
 * Live "Open / Closed now" pill mirroring nohomailbox.org/components/OpenClosedSign.
 * Calculates against Tunisia local time (GMT+1, no DST) for the NOHO storefront
 * North Hollywood hours converted to Tunis time so a TN visitor sees "ouvert" or
 * "fermé" relative to their own clock.
 *
 * Storefront hours (NoHo, PST):
 *   Mon–Fri 09:30–13:30, 14:00–17:30
 *   Saturday 10:00–13:30
 *   Sunday closed
 * Tunis is PST+9 in winter and PST+9 (no DST) so conversion is +9 hours from PST.
 */
import { useEffect, useState } from "react";

type Status = { open: boolean; label: string; sub: string };

function computeStatus(): Status {
  const now = new Date();
  // Tunis is GMT+1 (no DST). LA is GMT-8 (winter) or GMT-7 (summer).
  // We use UTC then convert to LA.
  const utcHour = now.getUTCHours();
  const utcMin = now.getUTCMinutes();
  const utcDay = now.getUTCDay(); // 0=Sun

  // Simple LA offset: -8 (winter, Nov-Mar) or -7 (summer).
  const month = now.getUTCMonth(); // 0-11
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
    // Mon-Fri
    if ((laTime >= 9.5 && laTime <= 13.5) || (laTime >= 14 && laTime <= 17.5)) {
      open = true;
    }
  } else if (laDay === 6) {
    // Saturday
    if (laTime >= 10 && laTime <= 13.5) open = true;
  }

  if (open) {
    return {
      open: true,
      label: "Ouvert maintenant",
      sub: "Storefront LA · 5062 Lankershim",
    };
  }
  return {
    open: false,
    label: "Fermé maintenant",
    sub: "Ouvre Lun-Ven 9h30 · Heure de LA",
  };
}

export default function OpenStatusPill({
  compact = false,
  solid = false,
  openLabel,
  closedLabel,
}: {
  /** Hide the hours sub-label (for tight overlays, e.g. on a photo). */
  compact?: boolean;
  /** Opaque cream background so the pill stays readable over imagery. */
  solid?: boolean;
  /** Localized labels (default French). */
  openLabel?: string;
  closedLabel?: string;
} = {}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const t = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!status) return null;

  const dotColor = status.open ? "#22C55E" : "#9CA3AF";

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full text-[12px] font-bold"
      style={{
        background: solid ? "rgba(255,253,248,0.94)" : "rgba(45,16,15,0.04)",
        border: "1px solid rgba(45,16,15,0.12)",
        color: "#2D100F",
        boxShadow: solid ? "0 8px 22px rgba(45,16,15,0.22)" : undefined,
        backdropFilter: solid ? "blur(6px)" : undefined,
      }}
    >
      <span
        aria-hidden="true"
        className="relative flex w-2.5 h-2.5"
      >
        {status.open && (
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-65"
            style={{
              background: dotColor,
              animation: "pingPulse 1.6s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ background: dotColor }}
        />
      </span>
      <span style={{ color: status.open ? "#16804A" : "rgba(45,16,15,0.6)" }}>
        {status.open ? openLabel ?? status.label : closedLabel ?? status.label}
      </span>
      {!compact && (
        <span className="hidden sm:inline" style={{ color: "rgba(45,16,15,0.45)", fontWeight: 500 }}>
          · {status.sub}
        </span>
      )}
      <style>{`
        @keyframes pingPulse {
          0% { transform: scale(0.9); opacity: 0.65; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
