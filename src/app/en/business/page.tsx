import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/anim/Reveal";

/*
 * English version of /business. Mirrors the FR condensed bundles-first
 * landing 1:1 — hero + WhatsApp consultation CTA, trust strip, two bundle
 * poster cards, à-la-carte line, consultation form. Prices/claims sourced
 * from the FR page only: Business 4 000 TND once (14-21 days), Monthly
 * management 1 200 TND/month with no commitment.
 */

export const metadata: Metadata = {
  title: "Business — launch your company, we handle the rest",
  description:
    "Business 4 000 TND once (14-21 days) · Monthly management 1 200 TND/month, no commitment.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/business",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/business",
      "ar-TN": "https://nohomailboxtunis.com/ar/business",
      "aeb-TN": "https://nohomailboxtunis.com/business",
      en: "https://nohomailboxtunis.com/en/business",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const TEAL = "#337485";
const GOLD = "#C8A35A";
const GREEN = "#2D7A4A";

/* Four-point star flourish — same poster language as the homepage pillars. */
const Flourish = ({ color }: { color: string }) => (
  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 shrink-0" fill={color} aria-hidden="true">
    <path d="M6 0 L7.4 4.6 L12 6 L7.4 7.4 L6 12 L4.6 7.4 L0 6 L4.6 4.6 Z" />
  </svg>
);

const Check = ({ color = TEAL }: { color?: string }) => (
  <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0 mt-[3px]" fill="none" aria-hidden="true">
    <path d="M2 6.5 L5 9.5 L10 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── The two bundles, up front — no marketplace grid. ── */
const BUNDLES = [
  {
    accent: TEAL,
    n: "01",
    eyebrow: "The complete package",
    title: "Business",
    price: "4 000 TND",
    per: "one time · delivered in 14-21 days",
    hook: "US or TN company — synced with a law office (Cabinet Khiari, Tunis).",
    features: [
      "US LLC (Wyoming / Delaware / NM) or TN SARL·SUARL — file synced with the law office",
      "EIN with the IRS (or TN tax ID) — filings handled by our agents",
      "Brand book + website on your own domain — you own 100% of it",
      "12 months of mail at 5062 Lankershim, Los Angeles (Form 1583 included)",
    ],
  },
  {
    accent: GOLD,
    n: "02",
    eyebrow: "Ongoing operations",
    title: "Monthly management",
    price: "1 200 TND",
    per: "/month · no commitment",
    hook: "We run the operations — you stay focused on the work.",
    features: [
      "US compliance every month + priority mail handling",
      "Website managed end to end, print management, seasonal updates",
      "Marketing executed by our agentic services — supervised by the team",
      "A performance report every month",
    ],
  },
];

const TRUST = [
  "Agentic services — AI + human team",
  "Same-day delivery in Los Angeles",
  "Tunisian support line on WhatsApp",
  "LLC synced with Cabinet Khiari law office",
];

const NEXT_STEPS = [
  { n: "01", t: "We get back to you within 24h", d: "By email or WhatsApp, in English, French, or Tunisian." },
  { n: "02", t: "A free 30-minute call", d: "TN, US, or combo structure — a straight recommendation, not a pitch." },
  { n: "03", t: "A clear plan, priced in dinars", d: "You know exactly what, when, and how much. Payment at the law office." },
];

export default function EnglishBusinessPage() {
  return (
    <>
      {/* ── Part 1 — bundles up front, one condensed screen ── */}
      <section className="grain relative overflow-hidden px-5 sm:px-6 pt-8 pb-12" style={{ background: CREAM }}>
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="eyebrow mb-3" style={{ color: TEAL }}>NOHO Business Solutions</p>
            <h1
              className="font-extrabold mx-auto max-w-3xl"
              style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.9rem, 4vw, 3.1rem)", lineHeight: 1.02, letterSpacing: "-0.03em", color: INK }}
            >
              Launch your company,
              <span className="block text-sheen" style={{ fontFamily: "var(--font-pacifico), cursive", letterSpacing: 0, lineHeight: 1.2, paddingBottom: "0.08em" }}>
                we handle the rest.
              </span>
            </h1>

            {/* CTAs — consultation first */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-4">
              <a
                href={waLink("business")}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center justify-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13.5px] whitespace-nowrap transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 22px rgba(45,122,74,0.30)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.44 1.34-1.99 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.12 0-1.49.78-2.22 1.06-2.52.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5l-.45.53c-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
                </svg>
                Book a free consultation
              </a>
              <Link
                href="/en/services"
                className="inline-flex items-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13.5px] whitespace-nowrap transition-colors"
                style={{ color: INK, border: "1.5px solid rgba(45,16,15,0.22)" }}
              >
                <span className="u-draw">All services</span>
              </Link>
            </div>

            {/* trust strip — one horizontal line */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-8">
              {TRUST.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap" style={{ color: "rgba(45,16,15,0.65)" }}>
                  {i > 0 && <span className="h-1 w-1 rotate-45" style={{ background: "rgba(45,16,15,0.3)" }} />}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* the bundles — certificate posters, front and center */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {BUNDLES.map((b) => (
              <Reveal key={b.n}>
                <div
                  className="grain relative h-full rounded-[16px] px-5 pt-5 pb-5"
                  style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
                >
                  <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: b.accent }} />
                  <span
                    className="stamp-perf absolute top-3 right-3 grid place-items-center h-9 w-8 select-none rotate-[5deg]"
                    style={{ background: "#fffdf8", color: b.accent }}
                  >
                    <span className="text-[12px] font-extrabold leading-none" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>{b.n}</span>
                    <span className="text-[5px] font-black tracking-[0.12em] uppercase" style={{ color: "rgba(45,16,15,0.45)" }}>NOHO</span>
                  </span>

                  <p className="relative z-[1] flex items-center gap-1.5 mb-1">
                    <Flourish color={b.accent} />
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em]" style={{ color: b.accent }}>{b.eyebrow}</span>
                    <Flourish color={b.accent} />
                  </p>
                  <div className="relative z-[1] flex items-baseline gap-2.5 mb-1">
                    <h2 className="font-extrabold" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "22px", letterSpacing: "-0.02em", color: INK }}>
                      {b.title}
                    </h2>
                    <span className="font-extrabold text-[17px] tnum" style={{ fontFamily: "var(--font-baloo), sans-serif", color: b.accent }}>{b.price}</span>
                    <span className="text-[10.5px] font-bold" style={{ color: "rgba(45,16,15,0.55)" }}>{b.per}</span>
                  </div>
                  <p className="relative z-[1] text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.72)", lineHeight: 1.5 }}>
                    {b.hook}
                  </p>
                  <ul className="relative z-[1] space-y-1.5 mb-4">
                    {b.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "rgba(45,16,15,0.75)", lineHeight: 1.45 }}>
                        <Check color={b.accent} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#consultation"
                    className="btn-west relative z-[1] inline-flex items-center gap-1.5 font-bold text-[12.5px] px-4 py-2 rounded-xl"
                    style={{ color: INK, background: "#fffdf8", border: "1.5px solid rgba(45,16,15,0.8)" }}
                  >
                    Book the consultation
                    <svg className="arrow-nudge w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* à la carte — one quiet line, not a marketplace */}
          <p className="text-center mt-5 text-[11.5px]" style={{ color: "rgba(45,16,15,0.6)" }}>
            À la carte: brand + website 3 400 TND (2 800 for Business clients) · company + EIN alone 700 TND + state fees ·{" "}
            <Link href="/en/tarifs" className="u-draw font-bold" style={{ color: TEAL }}>the full price grid</Link>
          </p>
        </div>
      </section>

      {/* ── Part 2 — book the call: form + what happens next ── */}
      <section id="consultation" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff" }}>
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-[1fr_0.9fr] gap-8 sm:gap-10 items-start">
          <Reveal>
            <div
              className="grain relative rounded-[16px] p-5 sm:p-6"
              style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
            >
              <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: TEAL }} />
              <div className="relative z-[1]">
                <p className="flex items-center gap-1.5 mb-1">
                  <Flourish color={TEAL} />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>Free consultation · 30 min</span>
                  <Flourish color={TEAL} />
                </p>
                <h2 className="font-extrabold mb-1" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "22px", color: INK }}>
                  Book your call
                </h2>
                <p className="text-[12.5px] mb-4" style={{ color: "rgba(45,16,15,0.7)" }}>
                  Leave your details — we&apos;ll reach back to set the time.
                </p>
                <ConsultationForm
                  locale="en"
                  labels={{
                    email: "Email",
                    firstName: "First name",
                    lastName: "Last name",
                    reason: "Reason for the call",
                    reasonPlaceholder: "US LLC, TN company, address, monthly management…",
                    submit: "Book it — we'll reach back",
                    successTitle: "Got it.",
                    successBody: "We'll reach back within 24 hours (business days) to set up the call.",
                  }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-extrabold mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "19px", color: INK }}>
              What happens next
            </h3>
            <div className="space-y-4 mb-6">
              {NEXT_STEPS.map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <span
                    className="grid place-items-center h-9 w-9 rounded-xl shrink-0 font-extrabold text-[13px]"
                    style={{ fontFamily: "var(--font-baloo), sans-serif", background: "rgba(51,116,133,0.10)", color: TEAL }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <p className="font-bold text-[14px]" style={{ color: INK }}>{s.t}</p>
                    <p className="text-[12.5px]" style={{ color: "rgba(45,16,15,0.65)", lineHeight: 1.5 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.65)" }}>
              In a hurry? The WhatsApp line answers in Tunisian, French, or English:
            </p>
            <a
              href={waLink("business")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13px] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 22px rgba(45,122,74,0.30)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Z" />
              </svg>
              +1 818 506 7744
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
