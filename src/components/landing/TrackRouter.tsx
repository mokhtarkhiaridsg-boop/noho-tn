/**
 * Public tracking router — /track?n=<tracking>, in all four locale trees.
 *
 * The landing page's track form is a plain GET form, so it needs a real
 * handler on the other end; before this, /track here was a static list of
 * carrier links that ignored searchParams entirely and the form would have
 * submitted into a void.
 *
 * Ported from nohomailbox.org's /track (src/app/track/page.tsx) MINUS the
 * database step. The US version first looks the number up in ShippoLabel and
 * redirects to a branded /r/[id] receipt; this repo has neither that model
 * nor that route, and a public marketing page should not take a Turso
 * dependency to render. So: detect the carrier from the number's own format
 * and hand off. Everything else — frame, badge, empty state, unknown-format
 * fallback — matches.
 */
import Image from "next/image";
import Link from "next/link";
import { detectCarrier as detectCarrierCanonical } from "@/lib/trackingUtils";
import { localePrefix, isRtl, type Locale } from "@/lib/locale";
import { waLink } from "@/lib/whatsapp";
import { TRACK_PAGE_COPY } from "./landing-copy";

const INK = "#2D100F";
const BLUE = "#337485";
const BLUE_DEEP = "#23596A";
const CREAM = "#F7E6C2";

function detectCarrier(t: string): { carrier: string; url: string } | null {
  const s = t.replace(/\s+/g, "").toUpperCase();
  const carrier = detectCarrierCanonical(s);
  // detectCarrier never returns null — an unrecognized number comes back as
  // the literal "Other". Treating that as a hit renders "Track on Other →"
  // pointing at a Google search, which is worse than saying we don't
  // recognize it, so map it onto the not-found branch.
  if (!carrier || carrier === "Other") return null;
  const urls: Record<string, string> = {
    UPS: `https://www.ups.com/track?tracknum=${encodeURIComponent(s)}`,
    USPS: `https://tools.usps.com/go/TrackConfirmAction?tLabels=${encodeURIComponent(s)}`,
    FedEx: `https://www.fedex.com/fedextrack/?trknbr=${encodeURIComponent(s)}`,
    DHL: `https://www.dhl.com/us-en/home/tracking.html?tracking-id=${encodeURIComponent(s)}`,
    Amazon: `https://track.amazon.com/tracking/${encodeURIComponent(s)}`,
    OnTrac: `https://www.ontrac.com/tracking/?number=${encodeURIComponent(s)}`,
    LaserShip: `https://www.lasership.com/track/${encodeURIComponent(s)}`,
  };
  return {
    carrier,
    url: urls[carrier] ?? `https://www.google.com/search?q=${encodeURIComponent(s + " tracking")}`,
  };
}

function CarrierBadge({ carrier }: { carrier: string }) {
  const c = carrier.toLowerCase();
  let bg = "linear-gradient(135deg, #337485, #23596A)";
  let fg = CREAM;
  let label = carrier.slice(0, 4).toUpperCase();
  if (c.includes("usps")) { bg = "linear-gradient(135deg, #2D5BA8, #1c3f7a)"; fg = "#fff"; label = "USPS"; }
  else if (c.includes("ups")) { bg = "linear-gradient(135deg, #6B3F1A, #3F2410)"; fg = "#FFC107"; label = "UPS"; }
  else if (c.includes("fedex")) { bg = "linear-gradient(135deg, #4D148C, #2E0A57)"; fg = "#FF6600"; label = "FedEx"; }
  else if (c.includes("dhl")) { bg = "#FFCC00"; fg = "#D40511"; label = "DHL"; }
  return (
    <span style={{ width: 56, height: 56, borderRadius: 14, background: bg, color: fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, letterSpacing: "0.04em", flexShrink: 0 }}>
      {label}
    </span>
  );
}

export default async function TrackRouter({
  locale,
  searchParams,
}: {
  locale: Locale;
  searchParams?: Promise<{ n?: string }>;
}) {
  const t = TRACK_PAGE_COPY[locale];
  const prefix = localePrefix(locale);
  const rtl = isRtl(locale);
  const sp = (await searchParams) ?? {};
  const raw = (sp.n ?? "").trim();

  const frame = (children: React.ReactNode) => (
    <div
      dir={rtl ? "rtl" : "ltr"}
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
        background: "#FAF6F0",
        minHeight: "100vh",
        padding: "20px 14px 60px",
        color: INK,
      }}
    >
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "white",
          borderRadius: 16,
          padding: "20px 18px 22px",
          boxShadow: "0 12px 36px rgba(45,16,15,0.10)",
          border: "1px solid rgba(45,16,15,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 14, borderBottom: "1px solid rgba(45,16,15,0.08)", marginBottom: 14 }}>
          <Image src="/brand/logo-trans.png" alt="NOHO Mailbox" width={63} height={36} style={{ objectFit: "contain" }} />
          <div>
            <p style={{ margin: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: rtl ? 0 : "0.2em", textTransform: rtl ? "none" : "uppercase", color: BLUE }}>
              {t.eyebrow}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 12, fontWeight: 700, color: INK }} dir="ltr">
              NOHO Mailbox · NoHo, CA
            </p>
          </div>
        </div>
        {children}
        <p style={{ margin: "16px 0 0", fontSize: 11.5, color: "rgba(45,16,15,0.55)" }}>
          ←{" "}
          <Link href={`${prefix}/shipping`} style={{ color: BLUE_DEEP, textDecoration: "none", fontWeight: 700 }}>
            {t.backToShipping}
          </Link>
        </p>
      </div>
    </div>
  );

  const retryForm = (label: string) => (
    <form method="get" action={`${prefix}/track`} style={{ marginTop: 14, display: "flex", gap: 8 }}>
      <input
        type="text"
        name="n"
        aria-label={t.inputLabel}
        placeholder="9400 1118 9922 3397 9812 01"
        dir="ltr"
        style={{ flex: 1, minWidth: 0, padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(45,16,15,0.18)", fontSize: 14, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: INK, background: "white" }}
      />
      <button
        type="submit"
        style={{ padding: "10px 16px", borderRadius: 10, background: BLUE, color: "white", border: "none", fontWeight: 800, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}
      >
        {label}
      </button>
    </form>
  );

  // No input → the "paste a tracking number" landing state.
  if (!raw) {
    return frame(
      <>
        <p style={{ margin: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: rtl ? 0 : "0.2em", textTransform: rtl ? "none" : "uppercase", color: BLUE }}>
          {t.eyebrow}
        </p>
        <h1 style={{ margin: "4px 0 0", fontSize: 24, fontWeight: 900, color: INK, letterSpacing: "-0.005em" }}>{t.emptyTitle}</h1>
        <p style={{ margin: "6px 0 14px", fontSize: 12.5, color: "rgba(45,16,15,0.65)" }}>{t.emptySub}</p>
        {retryForm(t.submit)}
      </>,
    );
  }

  const detected = detectCarrier(raw);

  if (detected) {
    return frame(
      <>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <CarrierBadge carrier={detected.carrier} />
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: rtl ? 0 : "0.2em", textTransform: rtl ? "none" : "uppercase", color: BLUE }}>
              {t.foundEyebrow}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 16, fontWeight: 800, color: INK }} dir="ltr">{detected.carrier}</p>
            <p style={{ margin: "2px 0 0", fontSize: 11.5, color: "rgba(45,16,15,0.55)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", wordBreak: "break-all" }} dir="ltr">{raw}</p>
          </div>
        </div>
        <a
          href={detected.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", marginTop: 14, padding: "10px 16px", borderRadius: 10, background: BLUE, color: "white", textDecoration: "none", fontWeight: 800, fontSize: 13 }}
        >
          {t.openOn} {detected.carrier} →
        </a>
        <p style={{ margin: "12px 0 0", fontSize: 11 }}>
          <a href={waLink("colis")} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: "none", fontWeight: 700 }}>
            {t.helpWhatsApp}
          </a>
        </p>
      </>,
    );
  }

  // Unknown format — friendly fallback.
  return frame(
    <>
      <p style={{ margin: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: rtl ? 0 : "0.2em", textTransform: rtl ? "none" : "uppercase", color: "#92400e" }}>
        {t.unknownEyebrow}
      </p>
      <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 900, color: INK, letterSpacing: "-0.005em" }}>{t.unknownTitle}</h1>
      <p style={{ margin: "8px 0 0", fontSize: 12.5, color: "rgba(45,16,15,0.65)" }}>
        {t.unknownSub}{" "}
        <a href={waLink("colis")} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: "none", fontWeight: 700 }}>
          {t.helpWhatsApp}
        </a>
      </p>
      <p style={{ margin: "8px 0 0", fontSize: 11.5, color: "rgba(45,16,15,0.55)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", wordBreak: "break-all" }} dir="ltr">
        {t.youEntered} {raw}
      </p>
      {retryForm(t.retry)}
    </>,
  );
}
