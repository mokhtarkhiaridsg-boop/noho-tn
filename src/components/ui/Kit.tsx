import type { CSSProperties, ReactNode } from "react";
import { AiHeart } from "@/components/AnimatedIcons";
import { T, CARD_SHADOW } from "./tokens";

/** White surface card on the cream admin canvas. */
export function Card({
  children,
  className = "",
  style,
  pad = true,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  pad?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl ${pad ? "p-6 sm:p-7" : ""} ${className}`}
      style={{ background: T.surface, border: `1px solid ${T.border}`, boxShadow: CARD_SHADOW, ...style }}
    >
      {children}
    </div>
  );
}

/** Panel header: eyebrow label + Baloo title + optional subtitle / right slot. */
export function PanelHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: T.inkFaint }}>
          {eyebrow}
        </p>
        <h1 className="font-extrabold leading-tight" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "28px", letterSpacing: "-0.02em", color: T.ink }}>
          {title}
        </h1>
        {subtitle && <p className="text-[13.5px] mt-1.5 max-w-md" style={{ color: T.inkFaint }}>{subtitle}</p>}
      </div>
      {right && <div className="flex items-center gap-2">{right}</div>}
    </div>
  );
}

/** Branded empty state — used everywhere while there are no customers yet. */
export function EmptyState({
  title,
  desc,
  hint,
}: {
  title: string;
  desc: string;
  hint?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-3xl px-6 py-16"
      style={{ background: T.ivory, border: `1px dashed ${T.border}` }}
    >
      <div className="mb-4 opacity-90">
        <AiHeart className="w-14 h-14" />
      </div>
      <h3 className="font-extrabold text-[18px] mb-1.5" style={{ fontFamily: "var(--font-baloo), sans-serif", color: T.ink }}>
        {title}
      </h3>
      <p className="text-[13.5px] max-w-sm leading-relaxed" style={{ color: T.inkFaint }}>{desc}</p>
      {hint && (
        <p className="text-[12px] mt-4 px-3 py-1.5 rounded-full" style={{ background: T.tealSoft, color: T.tealDeep, fontWeight: 600 }}>
          {hint}
        </p>
      )}
    </div>
  );
}

/** Stat pill used on the overview status strip. */
export function StatusPill({
  label,
  value,
  tone = "count",
}: {
  label: string;
  value: number;
  tone?: "active" | "count" | "awaiting";
}) {
  const accent = tone === "active" ? T.teal : tone === "awaiting" && value > 0 ? T.red : T.inkFaint;
  return (
    <div
      className="flex items-center gap-2 rounded-full pl-2 pr-3.5 py-1.5"
      style={{ background: T.surface, border: `1px solid ${T.border}`, boxShadow: CARD_SHADOW }}
    >
      <span className="grid place-items-center min-w-7 h-7 px-1.5 rounded-full text-[13px] font-extrabold tabular-nums" style={{ background: tone === "active" ? T.tealSoft : T.ivory, color: accent }}>
        {value}
      </span>
      <span className="text-[12px] font-semibold" style={{ color: T.ink }}>{label}</span>
    </div>
  );
}
