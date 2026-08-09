"use client";

/**
 * The noho-tn landing page — a clone of the nohomailbox.org landing page
 * (owner 2026-08-04: "make the noho tunis ui landing page the same as
 * nohomailbox.org, literally the same, just keep the navbar and the
 * tunisian/french").
 *
 * Structure is a 1:1 port of src/app/(marketing)/page.tsx on the US side:
 *   PART 1 — cream hero + halftone dots: H1 (two-tone) → address pin badge →
 *            subhead → two CTAs → carrier wordmark row │ storefront photo
 *            with the floating dashboard card.
 *   PART 2 — second cream band, hairline top border, same halftone: eyebrow →
 *            H2 with a sheen accent word → subhead → GET form → dark button.
 *
 * What is deliberately NOT the same, and why:
 *   · the secondary CTA is WhatsApp, not `tel:` — a US phone link is useless
 *     to a Tunisian visitor, and WhatsApp is the shipped CTA on every other
 *     TN surface (it dials the same +1 818 number).
 *   · the primary CTA points at /inscription, unprefixed, because the
 *     transactional tree is shared across locales (same as the navbar).
 *   · entrance animation uses this repo's .reveal/.is-in idiom instead of the
 *     US .animate-fade-up, so there is still one animation system here.
 *   · no LocalBusiness JSON-LD, no aggregateRating: those describe a US
 *     retail CMRA serving Los Angeles and would be false on a Tunisian
 *     entity. Each locale page keeps its own Organization/WebSite blocks.
 *
 * Copy lives entirely in landing-copy.ts. This file holds no strings.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { isRtl, localePrefix, type Locale } from "@/lib/locale";
import { waLink } from "@/lib/whatsapp";
import { LANDING_COPY } from "./landing-copy";
import HeroDashboardCard from "./HeroDashboardCard";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const TEAL = "#337485";

/** Halftone dot texture shared by both cream bands — same values as the US page. */
function Halftone() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(45,16,15,0.1) 1.5px, transparent 1.5px)",
        backgroundSize: "26px 26px",
      }}
    />
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.44 1.34-1.99 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.12 0-1.49.78-2.22 1.06-2.52.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5l-.45.53c-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
    </svg>
  );
}

export default function HomeLanding({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale];
  const rtl = isRtl(locale);
  const prefix = localePrefix(locale);

  // Above-the-fold copy must animate on load rather than wait for an
  // intersection observer, so mount-then-reveal on the next frame.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const rv = (delay: string) => ({
    className: `reveal ${mounted ? "is-in" : ""}`,
    style: { ["--reveal-delay" as string]: delay },
  });

  // Pacifico carries no Arabic glyphs — Arabic keeps Noto and still sheens.
  const accentFont = rtl
    ? "var(--font-noto-arabic), var(--font-baloo), sans-serif"
    : "var(--font-pacifico), 'Pacifico', cursive";

  return (
    <>
      {/* ─── PART 1 · HERO ─── */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 pt-8 pb-10 sm:pt-14 sm:pb-14"
        style={{ background: CREAM }}
        dir={rtl ? "rtl" : "ltr"}
      >
        <Halftone />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 sm:gap-8 lg:gap-10 items-center">
            {/* Copy column — no <Logo/>: the navbar directly above carries it. */}
            <div className={rtl ? "text-center md:text-right" : "text-center md:text-left"}>
              <h1
                className={`${rv("100ms").className} font-extrabold leading-[1.05] tracking-tight mb-3`}
                style={{
                  ...rv("100ms").style,
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  color: INK,
                  fontFamily: "var(--font-baloo), sans-serif",
                  letterSpacing: rtl ? 0 : undefined,
                }}
              >
                {c.h1a}{" "}
                <span className="text-sheen" style={{ fontFamily: accentFont, fontWeight: 400, lineHeight: 1.15, paddingBottom: "0.08em" }}>
                  {c.h1b}
                </span>
              </h1>

              <div
                className={`${rv("200ms").className} inline-flex items-center gap-2 mb-4`}
                style={rv("200ms").style}
              >
                <span
                  className={`text-[10px] font-black px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 leading-tight ${
                    rtl ? "" : "uppercase tracking-[0.18em]"
                  }`}
                  style={{ background: INK, color: CREAM }}
                >
                  <PinIcon className="w-3 h-3 shrink-0" />
                  <span dir="ltr">{c.pin}</span>
                </span>
              </div>

              <p
                className={`${rv("300ms").className} leading-relaxed mb-6 max-w-md mx-auto ${rtl ? "md:ml-0 md:mr-0" : "md:mx-0"}`}
                style={{ ...rv("300ms").style, fontSize: "15px", color: "rgba(45,16,15,0.62)", lineHeight: rtl ? 1.7 : undefined }}
              >
                {c.sub}
              </p>

              <div
                className={`${rv("400ms").className} flex flex-col sm:flex-row gap-3 mb-6 justify-center ${rtl ? "md:justify-end" : "md:justify-start"}`}
                style={rv("400ms").style}
              >
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center font-black px-7 py-3.5 rounded-2xl text-[15px] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                  style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
                >
                  {c.ctaPrimary}
                </Link>
                <a
                  href={waLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-2xl text-[15px] transition-colors duration-200 hover:bg-black/5 cursor-pointer"
                  style={{ border: "2px solid rgba(45,16,15,0.18)", color: INK }}
                >
                  <WhatsAppIcon className="w-4 h-4" /> {c.ctaSecondary}
                </a>
              </div>

              {/* Carrier wordmarks — brand marks, never translated. */}
              <div
                className={`${rv("500ms").className} flex flex-wrap items-center gap-x-5 gap-y-1 justify-center ${rtl ? "md:justify-end" : "md:justify-start"}`}
                style={rv("500ms").style}
                aria-label={c.carriersAria}
              >
                {/* basis-full: every locale's eyebrow here is a full phrase
                    ("Nestacblou les colis mte3ek men"), not the US "Ship
                    with", so inline it orphans DHL onto a second line. Own
                    line = label above the marks, which is how the carriers
                    strip on this site has always read. */}
                <span
                  className={`basis-full text-[10px] font-black ${rtl ? "" : "uppercase tracking-[0.16em]"}`}
                  style={{ color: "rgba(45,16,15,0.45)" }}
                >
                  {c.carriers}
                </span>
                <span className="font-black text-[15px] tracking-tight" style={{ color: "#333366" }} dir="ltr">USPS</span>
                <span className="font-black text-[15px] tracking-tight" style={{ color: "#351C15" }} dir="ltr">UPS</span>
                <span className="font-black text-[15px] italic tracking-tight" style={{ color: "#4D148C" }} dir="ltr">
                  Fed<span style={{ color: "#FF6600" }}>Ex</span>
                </span>
                <span className="font-black text-[15px] italic tracking-tight" style={{ color: "#D40511" }} dir="ltr">DHL</span>
              </div>
            </div>

            {/* Visual column — the real shop, with the live dashboard card. */}
            <div
              className={`reveal-zoom ${mounted ? "is-in" : ""} relative max-w-[660px] w-full mx-auto ${rtl ? "md:justify-self-start" : "md:justify-self-end"}`}
              style={{ ["--reveal-delay" as string]: "300ms" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/store-interior.jpg"
                alt={c.photoAlt}
                className="block w-full h-auto rounded-3xl"
                style={{ border: "3px solid rgba(45,16,15,0.15)", boxShadow: "0 20px 50px rgba(45,16,15,0.22)", aspectRatio: "4/3", objectFit: "cover" }}
                loading="eager"
                decoding="async"
              />
              <HeroDashboardCard
                feed={c.feed}
                ariaLabel={c.dashAria}
                suiteLabel={c.dashSuite}
                badge={c.dashBadge}
                footer={c.dashFooter}
                rtl={rtl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PART 2 · TRACK — plain GET form so tracking works with zero
           client JS: /track?n=<number> detects the carrier server-side. ─── */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 py-12 sm:py-16"
        style={{ background: CREAM, borderTop: "1.5px solid rgba(45,16,15,0.10)" }}
        dir={rtl ? "rtl" : "ltr"}
      >
        <Halftone />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p
            className={`reveal ${mounted ? "is-in" : ""} text-[10px] font-black uppercase tracking-[0.22em] mb-2`}
            style={{ color: "rgba(45,16,15,0.45)" }}
            dir="ltr"
          >
            {c.trackEyebrow}
          </p>
          <h2
            className={`${rv("100ms").className} font-extrabold tracking-tight mb-3`}
            style={{
              ...rv("100ms").style,
              fontFamily: "var(--font-baloo), sans-serif",
              color: INK,
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              lineHeight: rtl ? 1.4 : 1.05,
            }}
          >
            {c.trackH2a}{" "}
            <span className="text-sheen" style={{ fontFamily: accentFont, color: TEAL, fontWeight: 400 }}>
              {c.trackH2b}
            </span>
          </h2>
          {c.trackSub && (
            <p
              className={`${rv("200ms").className} text-[14px] leading-relaxed mb-6`}
              style={{ ...rv("200ms").style, color: "rgba(45,16,15,0.62)" }}
            >
              {c.trackSub}
            </p>
          )}
          <form
            action={`${prefix}/track`}
            method="get"
            className={`${rv("300ms").className} flex flex-col sm:flex-row gap-3 max-w-xl mx-auto`}
            style={rv("300ms").style}
          >
            <label htmlFor="home-track-number" className="sr-only">
              {c.trackLabel}
            </label>
            <input
              id="home-track-number"
              type="text"
              name="n"
              required
              autoComplete="off"
              spellCheck={false}
              dir="ltr"
              placeholder={c.trackPlaceholder}
              className="flex-1 min-w-0 px-5 py-3.5 rounded-2xl text-[14px] font-semibold outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(51,116,133,0.25)]"
              style={{ background: "white", border: "2px solid rgba(45,16,15,0.18)", color: INK }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 font-black px-7 py-3.5 rounded-2xl text-[15px] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="6" />
                <path d="m17 17 4 4" />
              </svg>
              {c.trackButton}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
