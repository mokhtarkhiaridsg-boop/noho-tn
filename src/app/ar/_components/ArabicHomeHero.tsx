"use client";
// TODO: native Arabic review

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { waLink } from "@/lib/whatsapp";
import OpenStatusPill from "@/components/OpenStatusPill";
import { AiMailbox, AiGradCap, AiStorefront } from "@/components/AnimatedIcons";

/*
 * Arabic mirror of src/components/HomeHero.tsx — same layout, RTL-flipped.
 * The /ar layout wrapper provides dir="rtl" + Noto Sans Arabic; physical
 * left/right utilities are mirrored here by hand (photo overlays, dashboard
 * card, stamp corner) and directional arrows are rotated to point left.
 */

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const TEAL = "#337485";
const GOLD = "#C8A35A";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

/* Baloo carries the Latin glyphs (digits, LLC…); Arabic falls back to Noto. */
const HEAD_FONT = "var(--font-baloo), var(--font-noto-arabic), sans-serif";

/* ═══════════════════════════════════════════════════════════════════
   DATA — the three piliers, translated (Latin stamp digits kept).
   ═══════════════════════════════════════════════════════════════════ */
const DOORS = [
  {
    href: "/ar/virtual-mailbox",
    n: "01",
    accent: TEAL,
    title: "عنوان أمريكي وطرود",
    hook: "استقبل Amazon وShein وeBay — نجمّع طرودك ونرسلها إلى تونس.",
    tag: "ابتداءً من 35 TND شهرياً",
    Icon: AiMailbox,
  },
  {
    href: "/ar/etudiants",
    n: "02",
    accent: GOLD,
    title: "الدراسة في أمريكا",
    hook: "نرافقك خطوة بخطوة — من Common App حتى تأشيرة F-1.",
    tag: "Common App · I-20 · F-1",
    Icon: AiGradCap,
  },
  {
    href: "/ar/business",
    n: "03",
    accent: GREEN,
    title: "بيزنس في أمريكا",
    hook: "تونسي وتريد حضوراً رسمياً في أمريكا؟",
    tag: "LLC · EIN · عنوان مهني",
    Icon: AiStorefront,
  },
];

function tilt(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.setProperty("--ry", `${(px - 0.5) * 7}deg`);
  el.style.setProperty("--rx", `${(0.5 - py) * 7}deg`);
  el.style.setProperty("--mx", `${px * 100}%`);
  el.style.setProperty("--my", `${py * 100}%`);
}
function untilt(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--rx", "0deg");
}

/* Four-point star flourish for poster eyebrows. */
const Flourish = ({ color }: { color: string }) => (
  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 shrink-0" fill={color} aria-hidden="true">
    <path d="M6 0 L7.4 4.6 L12 6 L7.4 7.4 L6 12 L4.6 7.4 L0 6 L4.6 4.6 Z" />
  </svg>
);

/* Left-pointing arrow for RTL: the wrapper rotates the standard arrow 180°
   so the .arrow-nudge hover translate still nudges it in reading direction. */
const ArrowLeft = ({ stroke = "currentColor" }: { stroke?: string }) => (
  <span className="inline-flex rotate-180 shrink-0" aria-hidden="true">
    <svg className="arrow-nudge w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD SNIPPET — floating member-dashboard card, Arabic copy,
   anchored bottom-left (RTL mirror of the FR bottom-right).
   ═══════════════════════════════════════════════════════════════════ */
function DashboardCard() {
  return (
    <div
      className="absolute -bottom-5 -left-2 sm:-left-4 w-[172px] rounded-xl p-2.5 float-slow"
      style={{ background: "#FFFFFF", border: "1px solid #E8DDD0", boxShadow: "0 14px 34px rgba(45,16,15,0.26)" }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span dir="ltr" className="text-[8px] font-black uppercase tracking-[0.12em]" style={{ color: "#7A6050" }}>
          Suite #122 · LA
        </span>
        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full" style={{ background: "rgba(51,116,133,0.12)", color: "#23596A" }}>
          2 جديد
        </span>
      </div>
      <div className="rounded-lg p-1.5 mb-1 flex items-center gap-1.5" style={{ background: "#FBF7F0", border: "1px solid #F0E7D8" }}>
        <span className="w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-md grid place-items-center shrink-0" style={{ background: TEAL }}>
          <svg viewBox="0 0 16 16" className="w-2.5 h-2.5" fill="none" aria-hidden="true">
            <path d="M8 1.5 L14 4.5 L14 11.5 L8 14.5 L2 11.5 L2 4.5 Z" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M2 4.5 L8 7.5 L14 4.5 M8 7.5 L8 14.5" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[9px] font-black truncate leading-tight" style={{ color: INK }}>UPS · طرد وصل</p>
          <p className="text-[7.5px] leading-tight" style={{ color: "#7A6050" }}>مسح ضوئي · نرسله إلى تونس</p>
        </div>
      </div>
      <div className="rounded-lg p-1.5 flex items-center gap-1.5" style={{ background: "#FBF7F0", border: "1px solid #F0E7D8" }}>
        <span className="w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-md grid place-items-center shrink-0" style={{ background: "rgba(51,116,133,0.14)" }}>
          <svg viewBox="0 0 16 16" className="w-2.5 h-2.5" fill="none" aria-hidden="true">
            <rect x="1.5" y="3" width="13" height="10" rx="1.6" stroke={TEAL} strokeWidth="1.4" />
            <path d="M1.5 5 L8 9.5 L14.5 5" stroke={TEAL} strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[9px] font-black truncate leading-tight" style={{ color: INK }}>رسالة · تم مسحها</p>
          <p className="text-[7.5px] leading-tight" style={{ color: "#7A6050" }}>PDF في لوحة تحكمك</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO — Part 1 IS the landing page: headline, CTAs, storefront photo
   + location + dashboard snippet, trust strip, 3 pilier posters.
   ═══════════════════════════════════════════════════════════════════ */
export default function ArabicHomeHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  return (
    <section
      className="grain relative overflow-hidden px-5 sm:px-6 pt-6 pb-10 sm:min-h-[calc(100vh-76px)] flex flex-col justify-center"
      style={{ background: CREAM }}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ── top: pitch (right in RTL) · proof (left) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] gap-9 sm:gap-5 lg:gap-9 items-center">
          {/* pitch */}
          <div className={`reveal ${mounted ? "is-in" : ""} text-center sm:text-right`} style={{ ["--reveal-delay" as string]: "0ms" }}>
            <h1
              className="font-extrabold"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                lineHeight: 1.18,
                letterSpacing: "0",
                color: INK,
              }}
            >
              عنوانك في أمريكا،
              <span className="block text-sheen" style={{ lineHeight: 1.35, paddingBottom: "0.08em" }}>
                أينما كنت.
              </span>
            </h1>

            {/* CTA — WhatsApp only (owner, 2026-08). */}
            <div className="mt-6 flex flex-col lg:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5">
              <a
                href={waLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="shine group inline-flex items-center justify-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 22px rgba(45,122,74,0.30)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.44 1.34-1.99 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.12 0-1.49.78-2.22 1.06-2.52.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5l-.45.53c-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* proof: the real shop + location overlay + dashboard card */}
          <div className={`reveal-zoom ${mounted ? "is-in" : ""} relative max-w-[660px] w-full mx-auto sm:mx-0 sm:justify-self-end pb-5`} style={{ ["--reveal-delay" as string]: "140ms" }}>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront.jpg"
                alt="متجر NOHO في ⁦5062 Lankershim Blvd, North Hollywood, CA⁩"
                className="block w-full h-auto rounded-3xl"
                style={{ border: "3px solid rgba(45,16,15,0.15)", boxShadow: "0 20px 50px rgba(45,16,15,0.22)", aspectRatio: "4/3", objectFit: "cover" }}
                loading="eager"
                decoding="async"
              />
              {/* open/closed — live (mirrored corner) */}
              <div className="absolute top-3 left-3">
                <OpenStatusPill compact solid openLabel="مفتوح الآن" closedLabel="مغلق الآن" />
              </div>
              {/* location chip → Google Maps (mirrored corner) */}
              <a
                href="https://maps.google.com/?q=5062+Lankershim+Blvd,+North+Hollywood,+CA+91601"
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 max-w-[55%] transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,253,248,0.94)", border: "1px solid rgba(45,16,15,0.14)", boxShadow: "0 8px 22px rgba(45,16,15,0.22)", backdropFilter: "blur(6px)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 ai-pin" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span dir="ltr" className="text-[10.5px] font-bold truncate" style={{ color: INK }}>
                  5062 Lankershim Blvd, NoHo
                </span>
                <ArrowLeft stroke={TEAL} />
              </a>
            </div>
            <DashboardCard />
          </div>
        </div>

        {/* ── trust strip — one horizontal line ── */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {[
            "مسجّل لدى USPS (CMRA)",
            "موثّق كاليفورنيا",
            "الدفع بالدينار عند مكتب محاماة",
            "9 سنوات من النشاط",
          ].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap" style={{ color: "rgba(45,16,15,0.65)" }}>
              {i > 0 && <span className="h-1 w-1 rotate-45" style={{ background: "rgba(45,16,15,0.3)" }} />}
              {t}
            </span>
          ))}
        </div>

        {/* ── the three piliers — compact old-west certificate posters ── */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 [perspective:1200px]">
          {DOORS.map((d, i) => (
            <Link
              key={d.href}
              href={d.href}
              onMouseMove={tilt}
              onMouseLeave={untilt}
              className={`reveal ${mounted ? "is-in" : ""} group block`}
              style={{ ["--reveal-delay" as string]: `${220 + i * 110}ms`, transformStyle: "preserve-3d" }}
            >
              <div
                className="shine grain relative h-full rounded-[14px] px-3.5 pt-4 pb-4 text-center"
                style={{
                  background: "#FDF6E4",
                  border: "1.5px solid rgba(45,16,15,0.55)",
                  boxShadow: "var(--shadow-md)",
                  transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                  transition: "transform .3s var(--ease-out-expo), box-shadow .35s var(--ease-out-expo), border-color .35s",
                }}
              >
                {/* certificate inner rule + corner ticks */}
                <span className="west-frame absolute inset-[5px] rounded-[10px] pointer-events-none" aria-hidden="true" style={{ color: d.accent }} />
                {/* cursor glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(200px circle at var(--mx,50%) var(--my,0%), ${d.accent}1e, transparent 60%)` }}
                />
                {/* postage-stamp number — tucked in the corner like a franked stamp (RTL: top-left) */}
                <span
                  className="stamp-perf absolute top-2.5 left-2.5 grid place-items-center h-8 w-7 select-none -rotate-[5deg] transition-transform duration-300 group-hover:-rotate-[9deg] group-hover:scale-105"
                  style={{ background: "#fffdf8", color: d.accent }}
                >
                  <span dir="ltr" className="text-[11px] font-extrabold leading-none" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>{d.n}</span>
                  <span className="text-[4.5px] font-black tracking-[0.12em] uppercase" style={{ color: "rgba(45,16,15,0.45)" }}>NOHO</span>
                </span>

                {/* medallion icon — double brass ring, postal-seal style */}
                <span
                  className="pl-scene relative z-[1] mx-auto grid place-items-center h-[54px] w-[54px] rounded-full transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background: `${d.accent}0f`,
                    border: `1.5px solid rgba(45,16,15,0.4)`,
                    boxShadow: `inset 0 0 0 2px #FDF6E4, inset 0 0 0 3px ${d.accent}55`,
                  }}
                >
                  <d.Icon className="w-10 h-10" />
                </span>

                {/* eyebrow with star flourishes */}
                <p className="relative z-[1] mt-2 mb-0.5 flex items-center justify-center gap-1.5">
                  <Flourish color={d.accent} />
                  <span className="text-[10px] font-bold" style={{ color: d.accent }}>
                    الركيزة <span dir="ltr">{d.n}</span>
                  </span>
                  <Flourish color={d.accent} />
                </p>

                <h2
                  className="relative z-[1] font-extrabold mb-0.5"
                  style={{ fontFamily: HEAD_FONT, fontSize: "16.5px", letterSpacing: "0", color: INK }}
                >
                  {d.title}
                </h2>
                <p className="relative z-[1] mx-auto px-1" style={{ fontSize: "11px", lineHeight: 1.6, color: "rgba(45,16,15,0.68)" }}>
                  {d.hook}
                </p>

                {/* western rule: line · diamond · line */}
                <span className="relative z-[1] my-2 flex items-center justify-center gap-1.5" aria-hidden="true">
                  <span className="h-px w-8" style={{ background: "rgba(45,16,15,0.25)" }} />
                  <span className="h-1 w-1 rotate-45" style={{ background: d.accent }} />
                  <span className="h-px w-8" style={{ background: "rgba(45,16,15,0.25)" }} />
                </span>

                <p
                  className="relative z-[1] mb-2 text-[8.5px] font-black"
                  style={{ color: "rgba(45,16,15,0.55)" }}
                >
                  {d.tag}
                </p>

                {/* western press-button */}
                <span
                  className="btn-west relative z-[1] inline-flex items-center gap-1 font-bold text-[11px] px-3.5 py-1.5 rounded-lg"
                  style={{ color: INK, background: "#fffdf8", border: "1.5px solid rgba(45,16,15,0.8)" }}
                >
                  اكتشف
                  <ArrowLeft />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
