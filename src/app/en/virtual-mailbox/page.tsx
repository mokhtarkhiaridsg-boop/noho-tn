import type { Metadata } from "next";
import Link from "next/link";
import PricingPending from "@/components/PricingPending";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

/*
 * English version of /virtual-mailbox. Mirrors the FR page 1:1 — mailbox
 * pricing notice (PricingPending, prices confirmed before payment), use cases, TN mailbox
 * cross-link, package process, FAQ, ecosystem ribbon, CTA. Prices and claims
 * sourced from the FR page only.
 */

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", url: "https://nohomailboxtunis.com/en" },
  { name: "Real US address", url: "https://nohomailboxtunis.com/en/virtual-mailbox" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real US address — NOHO",
  serviceType: "US virtual mailbox + scan + forwarding for Tunisian residents",
  provider: {
    "@type": "LocalBusiness",
    name: "NOHO Mailbox",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5062 Lankershim Blvd",
      addressLocality: "North Hollywood",
      addressRegion: "CA",
      postalCode: "91601",
      addressCountry: "US",
    },
  },
  areaServed: "TN",
  description:
    "A real US postal address in Los Angeles. Same-day mail scanning. Package receiving (Amazon, UPS, FedEx, DHL). International forwarding to Tunisia.",
};

export const metadata: Metadata = {
  title: "Real US address — mail scans, packages, forwarding to Tunisia",
  description:
    "A real US postal address in Los Angeles. Same-day mail scanning from your dashboard. Package receiving (Amazon, UPS, FedEx, DHL). International forwarding to Tunisia. Price confirmed by the team before any payment.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/virtual-mailbox",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/virtual-mailbox",
      "ar-TN": "https://nohomailboxtunis.com/ar/virtual-mailbox",
      "aeb-TN": "https://nohomailboxtunis.com/virtual-mailbox",
      en: "https://nohomailboxtunis.com/en/virtual-mailbox",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const BODY = "#EBF2FA";
const GOLD = "#f8c84a";

type IconCmp = (props: { className?: string }) => React.ReactElement;

const IconCart: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 10 L12 10 L16 32 L40 32 L44 16 L14 16" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="40" r="3" fill={BODY} stroke={INK} strokeWidth="2" />
    <circle cx="36" cy="40" r="3" fill={BODY} stroke={INK} strokeWidth="2" />
    <path d="M22 22 L34 22" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const IconCard: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="26" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="4" y="18" width="40" height="6" fill={INK} />
    <rect x="10" y="29" width="10" height="4" rx="1" fill={BLUE} />
    <rect x="24" y="29" width="6" height="4" rx="1" fill={BLUE} opacity="0.6" />
  </svg>
);
const IconInbox: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 26 L12 10 L36 10 L42 26 L42 38 L6 38 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M6 26 L16 26 L18 30 L30 30 L32 26 L42 26" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M20 14 L28 14 M20 18 L28 18" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconGrad: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 20 L24 10 L44 20 L24 30 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M12 24 L12 34 C12 36 17 38 24 38 C31 38 36 36 36 34 L36 24" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M44 20 L44 28" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const IconPaper: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="8" width="36" height="32" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M12 16 L36 16 M12 22 L36 22 M12 28 L28 28 M12 34 L24 34" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <rect x="28" y="32" width="10" height="6" rx="1" fill={BLUE} opacity="0.3" stroke={BLUE} strokeWidth="1.5" />
  </svg>
);
const IconHouse: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 22 L24 6 L42 22 L42 40 L6 40 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="20" y="26" width="8" height="14" fill={CREAM} stroke={INK} strokeWidth="2" />
    <rect x="12" y="26" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="30" y="26" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
  </svg>
);
const USES: { Icon: IconCmp; t: string; b?: string; c?: string }[] = [
  { Icon: IconCart, t: "Shop Amazon US, eBay, Shein, Nordstrom", b: "Most of these stores won't ship to Tunisia. With a US address, you order whatever you want." },
  { Icon: IconCard, t: "Mail for your LLC and accounts", b: "A real street address for your US company’s correspondence. Each bank or payment provider applies its own address rules, so we cannot promise it will accept it." },
  { Icon: IconInbox, t: "Receive US business mail", c: "IRS, banks, SaaS vendors, partners — every letter to your American LLC lands here, scanned and flagged in real time." },
  { Icon: IconGrad, t: "SEVIS and university mail", b: "Students: your I-20 arrives here, scanned the same day. While you study, your campus mail stays handled between semesters." },
  { Icon: IconPaper, t: "Magazines, print subscriptions", b: "The Economist, WSJ, Vogue, Wired — every US subscription arrives. Scan or forward, your call." },
  { Icon: IconHouse, t: "A stable address of record", b: "An address that does not change when you move: useful for IRS mail, ITIN letters or subscriptions. It does not replace a residential address where one is required." },
];

const PACKAGE_PROCESS = [
  { n: 1, t: "You order online", b: "Shipping address: 5062 Lankershim Blvd, Suite [your box #], North Hollywood, CA 91601." },
  { n: 2, t: "It arrives at the storefront", b: "We physically receive it (UPS, FedEx, USPS, DHL, Amazon). Signatures accepted. Instant dashboard notification." },
  { n: 3, t: "You pick the next step", b: "Forward, open and scan, store, recycle, or return. Decide right from your dashboard." },
  { n: 4, t: "Consolidation (optional)", b: "Multiple packages? We bundle them into one shipment to cut international postage." },
  { n: 5, t: "Shipping to Tunis", b: "USPS Priority Mail International (~7-10 days), UPS Worldwide Expedited (~3-5 days), DHL Express (~2-3 days). You pick speed vs. price." },
];

export default function EnglishVirtualMailboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PricingPending locale="en" id="adresse" />

      {/* USE CASES */}
      <section id="packages" className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            What is a US box good for?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USES.map((u) => (
              <div key={u.t} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <div className="mb-3"><u.Icon className="w-8 h-8" /></div>
                <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{u.t}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{u.b || u.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TN MAILBOX CROSS-LINK */}
      {/* TN-address promo card removed 2026-08-10 — product is pre-launch; standing rule: no pre-launch surfaces. */}

      {/* PACKAGE HANDLING PROCESS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Package receiving (Amazon, eBay, Shein)
          </p>
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            How an Amazon package makes it to Tunis
          </h2>
          <div className="space-y-3">
            {PACKAGE_PROCESS.map((s) => (
              <div key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: CREAM }}>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[18px]"
                  style={{ background: INK, color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.n}
                </div>
                <div>
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ INLINE */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-8 text-center"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {[
              { q: "How much does forwarding to Tunis cost?", a: "You pay the actual postage at USPS / UPS / FedEx rates — no hidden markup. For reference: USPS Priority Mail International for a 1 kg package to Tunisia runs ~35-50 USD depending on dimensions. UPS Express ~80 USD. DHL Express ~110 USD." },
              { q: "How long does an Amazon package take?", a: "Amazon usually delivers to the LA storefront in 1-3 days. Once it arrives, we scan it right away. International forwarding: 3 days (DHL Express) to 10 days (USPS Priority)." },
              { q: "Do you open packages to inspect them?", a: "Only if you ask (the 'open and scan the contents' option in your dashboard). Otherwise the package stays sealed — we only scan the outside." },
              { q: "What about Tunisian customs?", a: "Tunisian customs may charge duties and taxes on arrival, depending on what is inside and its value. You pay them on delivery in Tunisia; they are never included in our prices. We always declare the real value. The official rules are on douane.gov.tn." },
              { q: "Can I have several addresses?", a: "One box per account by default. For multi-entity needs (LLC + personal, for example), we can set up sub-accounts." },
              { q: "How long until my box is active?", a: "Once your USPS Form 1583 is signed and verified, your two IDs are checked and your first payment is received. USPS rules (DMM 508.1.8.3) require the signature in the presence of a CMRA employee, in person or by live video, or before a US-commissioned notary; a Tunisian notary does not meet this requirement. Contact us to confirm identity verification, payment options, and activation from Tunisia before paying." },
            ].map((q, idx) => (
              <details key={idx} className="group p-4 rounded-xl cursor-pointer" style={{ background: "#fff" }}>
                <summary className="font-black text-[15px] flex items-start gap-3 list-none" style={{ color: INK }}>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-[14px] transition-transform group-open:rotate-45" style={{ background: INK, color: CREAM }}>
                    +
                  </span>
                  <span>{q.q}</span>
                </summary>
                <p className="text-[13.5px] leading-relaxed mt-3 pl-9" style={{ color: "rgba(45,16,15,0.82)" }}>{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM RIBBON — the wedge is a door into the bigger company */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-9">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: GOLD }}
            >
              NOHO is more than packages
            </p>
            <h2
              className="font-extrabold mb-3"
              style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: CREAM }}
            >
              The address is just the front door
            </h2>
            <p className="text-[14.5px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(247,230,194,0.72)" }}>
              The same team walks with you through US studies and building your
              American business presence. One bridge, both sides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/en/etudiants"
              className="group block p-6 rounded-3xl transition-all hover:-translate-y-1"
              style={{ background: CREAM, boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] mb-1.5" style={{ color: BLUE }}>
                Students
              </p>
              <h3 className="font-extrabold text-[19px] mb-1.5" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                Study in the USA
              </h3>
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.72)" }}>
                You&apos;re not alone in the US paperwork — Common App, I-20, F-1 visa,
                an address for SEVIS.
              </p>
              <span className="inline-flex items-center gap-1.5 font-black text-[13px] transition-transform group-hover:translate-x-1" style={{ color: INK }}>
                Learn more →
              </span>
            </Link>
            <Link
              href="/en/business"
              className="group block p-6 rounded-3xl transition-all hover:-translate-y-1"
              style={{ background: CREAM, boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] mb-1.5" style={{ color: BLUE }}>
                Business
              </p>
              <h3 className="font-extrabold text-[19px] mb-1.5" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                US business presence
              </h3>
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.72)" }}>
                Tunisian and want a US presence? LLC, EIN, a professional address,
                and guidance opening your accounts.
              </p>
              <span className="inline-flex items-center gap-1.5 font-black text-[13px] transition-transform group-hover:translate-x-1" style={{ color: INK }}>
                Learn more →
              </span>
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA intent="colis">Ask about my packages</WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Activate your real US address
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Book the 15-minute call to pick your plan and start the Form 1583.
            Contact us to confirm identity verification, payment options, and activation from Tunisia before paying.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/en/appel"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Start my box →
            </Link>
            <Link
              href="/en/tarifs"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              Detailed pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
