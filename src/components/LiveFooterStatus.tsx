"use client";

/**
 * Live footer status card mirroring nohomailbox.org/components/LiveFooterStatus.
 * Client-side variant — TN site has no DB backend. Computes open/closed via
 * the same LA-time logic as OpenStatusPill. Renders inside the footer dark
 * panel: status dot + headline + sub-text + storefront address + clock.
 */
import { useEffect, useState } from "react";
import { AiPin, AiClock } from "@/components/AnimatedIcons";

type Status = "open" | "closing" | "break" | "closed";

type Result = {
  status: Status;
  headline: string;
  sub: string;
  laTimeLabel: string;
};

function computeResult(): Result {
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
  const laTimeLabel = `${String(Math.floor(laTime)).padStart(2, "0")}:${String(Math.floor((laTime % 1) * 60)).padStart(2, "0")} LA`;

  let status: Status = "closed";
  let sub = "Lun-Ven 9h30 · Sam 10h";

  if (laDay >= 1 && laDay <= 5) {
    if (laTime >= 9.5 && laTime < 13.5) {
      status = "open";
      sub = `Aujourd'hui · ferme 13h30 (pause déjeuner)`;
      if (laTime > 13) status = "closing";
    } else if (laTime >= 13.5 && laTime < 14) {
      status = "break";
      sub = "Pause déjeuner · reprise 14h";
    } else if (laTime >= 14 && laTime < 17.5) {
      status = "open";
      sub = `Aujourd'hui · ferme 17h30`;
      if (laTime > 17) status = "closing";
    } else {
      status = "closed";
      sub = laTime < 9.5 ? "Ouvre à 9h30 (heure de LA)" : "Réouvre demain 9h30";
    }
  } else if (laDay === 6) {
    if (laTime >= 10 && laTime < 13.5) {
      status = "open";
      sub = "Samedi · ferme 13h30";
      if (laTime > 13) status = "closing";
    } else {
      status = "closed";
      sub = "Samedi 10h-13h30 · Dim fermé";
    }
  } else {
    status = "closed";
    sub = "Dimanche fermé · Réouvre lundi 9h30";
  }

  const headline =
    status === "open" ? "Ouvert maintenant"
    : status === "closing" ? "Ferme bientôt"
    : status === "break" ? "Pause déjeuner"
    : "Fermé";

  return { status, headline, sub, laTimeLabel };
}

export default function LiveFooterStatus() {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    setResult(computeResult());
    const t = setInterval(() => setResult(computeResult()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!result) return null;

  const dotColor =
    result.status === "open" ? "#22C55E"
    : result.status === "closing" ? "#F5A623"
    : result.status === "break" ? "#F5A623"
    : "#9CA3AF";

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "rgba(247,230,194,0.06)",
        border: "1px solid rgba(247,230,194,0.12)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          {result.status === "open" && (
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-70"
              style={{
                background: dotColor,
                animation: "footerPing 1.6s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
          )}
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: dotColor, border: "1.5px solid rgba(247,230,194,0.6)" }}
          />
        </span>
        <p
          className="text-[12px] font-black uppercase tracking-[0.18em]"
          style={{ color: "#FAFAF8", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          {result.headline}
        </p>
      </div>
      <p className="text-[11px] mb-4" style={{ color: "rgba(250,250,248,0.55)" }}>
        {result.sub}
      </p>
      <div className="pt-3 space-y-2 text-[11px]" style={{ borderTop: "1px solid rgba(250,250,248,0.08)" }}>
        <div className="flex items-start gap-2" style={{ color: "rgba(250,250,248,0.55)" }}>
          <AiPin className="w-4 h-5 shrink-0" />
          <p>
            <span className="font-black" style={{ color: "#FAFAF8" }}>5062 Lankershim Blvd</span>
            <br />
            North Hollywood, CA 91601
          </p>
        </div>
        <div className="flex items-center gap-2" style={{ color: "rgba(250,250,248,0.55)" }}>
          <AiClock className="w-4 h-4 shrink-0" />
          <p>
            <span className="font-black" style={{ color: "#FAFAF8" }}>{result.laTimeLabel}</span>
            <span className="opacity-60"> · GMT-{Math.abs(new Date().getTimezoneOffset() / 60) === 8 ? "8" : "7"}</span>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes footerPing {
          0% { transform: scale(0.9); opacity: 0.7; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
