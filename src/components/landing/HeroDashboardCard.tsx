"use client";

/**
 * Floating member-dashboard mock on the homepage hero — ported from
 * nohomailbox.org (src/components/marketing/HeroDashboardCard.tsx) so both
 * sites' landing pages match. Differences from the US original, all forced:
 *   · copy comes from the locale dictionary instead of a hard-coded English
 *     FEED array
 *   · the click-through goes to /inscription (unprefixed — one shared
 *     transactional tree, same as the navbar) rather than /signup
 *   · `rtl` flips the anchor corner, since -left-3 does not auto-mirror
 *
 * The keyframes live in a component-scoped <style> exactly as they do on the
 * US side, so this needs nothing in globals.css.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import type { FeedRow } from "./landing-copy";

function FeedIcon({ kind }: { kind: FeedRow["icon"] }) {
  const teal = "#337485";
  if (kind === "box") {
    return (
      <span className="w-5 h-5 rounded-md grid place-items-center shrink-0" style={{ background: teal }}>
        <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" aria-hidden="true">
          <path d="M8 1.5 L14 4.5 L14 11.5 L8 14.5 L2 11.5 L2 4.5 Z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M2 4.5 L8 7.5 L14 4.5 M8 7.5 L8 14.5" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (kind === "truck") {
    return (
      <span className="w-5 h-5 rounded-md grid place-items-center shrink-0" style={{ background: "rgba(51,116,133,0.14)" }}>
        <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" aria-hidden="true">
          <path d="M1.5 4h8v7h-8zM9.5 6.5h3l2 2.5v2h-5z" stroke={teal} strokeWidth="1.3" strokeLinejoin="round" />
          <circle cx="4.5" cy="12" r="1.3" stroke={teal} strokeWidth="1.2" />
          <circle cx="11.5" cy="12" r="1.3" stroke={teal} strokeWidth="1.2" />
        </svg>
      </span>
    );
  }
  return (
    <span className="w-5 h-5 rounded-md grid place-items-center shrink-0" style={{ background: "rgba(51,116,133,0.14)" }}>
      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" aria-hidden="true">
        <rect x="1.5" y="3" width="13" height="10" rx="1.6" stroke={teal} strokeWidth="1.4" />
        <path d="M1.5 5 L8 9.5 L14.5 5" stroke={teal} strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HeroDashboardCard({
  feed,
  ariaLabel,
  suiteLabel,
  badge,
  footer,
  rtl = false,
}: {
  feed: FeedRow[];
  ariaLabel: string;
  suiteLabel: string;
  badge: string;
  footer: string;
  rtl?: boolean;
}) {
  // Two visible rows; the feed advances one slot at a time.
  const [head, setHead] = useState(0);
  const [ticked, setTicked] = useState(false);
  useEffect(() => {
    if (feed.length < 2) return;
    const t = setInterval(() => {
      setHead((h) => (h + 1) % feed.length);
      setTicked(true);
      setTimeout(() => setTicked(false), 700);
    }, 3200);
    return () => clearInterval(t);
  }, [feed.length]);

  if (feed.length === 0) return null;
  const rows = [feed[head]!, feed[(head + 1) % feed.length]!];

  return (
    <Link
      href="/inscription"
      aria-label={ariaLabel}
      dir={rtl ? "rtl" : "ltr"}
      className={`hero-dash absolute -bottom-6 block w-[184px] rounded-2xl p-3 ${
        rtl ? "-right-3 sm:-right-8" : "-left-3 sm:-left-8"
      }`}
      style={{ background: "#FFFFFF", border: "1px solid #E8DDD0", boxShadow: "0 18px 44px rgba(45,16,15,0.28)" }}
    >
      <style>{`
        .hero-dash { animation: hero-dash-float 6s ease-in-out infinite; transition: transform 250ms ease, box-shadow 250ms ease; }
        .hero-dash:hover { animation-play-state: paused; transform: translateY(-4px) scale(1.03); box-shadow: 0 24px 54px rgba(45,16,15,0.34); }
        .hero-dash .hero-dash-row { transition: transform 200ms ease; }
        .hero-dash:hover .hero-dash-row { transform: translateX(2px); }
        .hero-dash-in { animation: hero-dash-in 480ms cubic-bezier(0.16, 1, 0.3, 1); }
        .hero-dash-badge-tick { animation: hero-dash-pop 600ms ease; }
        @keyframes hero-dash-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes hero-dash-in { from { opacity: 0; transform: translateY(-7px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hero-dash-pop { 30% { transform: scale(1.22); } 100% { transform: scale(1); } }
        @media (prefers-reduced-motion: reduce) {
          .hero-dash, .hero-dash-in, .hero-dash-badge-tick { animation: none !important; }
        }
      `}</style>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[8.5px] font-black uppercase tracking-[0.12em]" style={{ color: "#7A6050" }} dir="ltr">
          {suiteLabel}
        </span>
        <span
          className={`text-[8.5px] font-black px-1.5 py-0.5 rounded-full ${ticked ? "hero-dash-badge-tick" : ""}`}
          style={{ background: "rgba(51,116,133,0.12)", color: "#23596A" }}
        >
          {badge}
        </span>
      </div>
      {rows.map((r, i) => (
        <div
          key={`${r.title}-${head}`}
          className={`hero-dash-row rounded-lg p-1.5 flex items-center gap-1.5 ${i === 0 && ticked ? "hero-dash-in" : ""} ${i === 0 ? "mb-1" : ""}`}
          style={{ background: "#FBF7F0", border: "1px solid #F0E7D8" }}
        >
          <FeedIcon kind={r.icon} />
          <div className="min-w-0">
            <p className="text-[9.5px] font-black truncate leading-tight" style={{ color: "#2D100F" }}>{r.title}</p>
            <p className="text-[8px] leading-tight" style={{ color: "#7A6050" }}>{r.sub}</p>
          </div>
        </div>
      ))}
      <p
        className={`mt-1.5 text-[8.5px] font-black ${rtl ? "text-left" : "text-right"}`}
        style={{ color: "#337485" }}
      >
        {footer}
      </p>
    </Link>
  );
}
