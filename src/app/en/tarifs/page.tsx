import type { Metadata } from "next";
import Link from "next/link";
import StampCard from "@/components/StampCard";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

/*
 * English version of /tarifs. Mirrors the FR page 1:1 — hero, mailbox stamp
 * cards, other products, à-la-carte fee grid, storage/forwarding policies,
 * CTA. Prices and claims sourced from the FR page only.
 */

export const metadata: Metadata = {
  title: "Pricing — Real US address, Business, Monthly management (in dinars)",
  description:
    "Real US address 35-150 TND/month. Business 4 000 TND once. Monthly management 1 200 TND/month. Student Portal 1 800 TND/academic year. Full price grid plus the storage and forwarding policy for the US storefront.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/tarifs",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/tarifs",
      "ar-TN": "https://nohomailboxtunis.com/ar/tarifs",
      "aeb-TN": "https://nohomailboxtunis.com/tarifs",
      en: "https://nohomailboxtunis.com/en/tarifs",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", url: "https://nohomailboxtunis.com/en" },
  { name: "Pricing", url: "https://nohomailboxtunis.com/en/tarifs" },
]);

const MAILBOX_PLANS = [
  {
    name: "Basic",
    price: "35",
    note: "Light personal use",
    bullets: [
      "Real US postal address (Lankershim Blvd)",
      "5 mail scans included / month",
      "Notarized USPS Form 1583 included",
      "30-day storage",
      "Forwarding on request (postage extra)",
    ],
  },
  {
    name: "Standard",
    price: "75",
    note: "Most popular",
    primary: true,
    bullets: [
      "Everything in Basic",
      "20 scans included / month",
      "Package receiving included (5/month)",
      "Automatic weekly forwarding",
      "Package consolidation",
      "SMS + email notifications",
    ],
  },
  {
    name: "Premium",
    price: "150",
    note: "E-commerce + active business",
    bullets: [
      "Everything in Standard",
      "Unlimited scans",
      "Unlimited package receiving",
      "Priority scanning (within 2h)",
      "Repacking included",
      "Cloud scan storage (3 years)",
    ],
  },
];

const PRODUCTS = [
  {
    name: "Business",
    price: "4 000",
    unit: "one time",
    desc: "American or Tunisian company, EIN, brand, website, social. Delivered in 14 days.",
    href: "/en/business",
  },
  {
    name: "Monthly management",
    price: "1 200",
    unit: "/ month",
    desc: "Monthly US compliance, priority mail, content, quarterly review.",
    href: "/en/suivi-mensuel",
  },
  {
    name: "Student Portal",
    price: "1 800",
    unit: "/ academic year",
    desc: "US admissions + F-1 visa + landing on campus. End to end from Tunis.",
    href: "/en/etudiants",
  },
  {
    name: "Notary (Form 1583)",
    price: "Included",
    unit: "with mailbox",
    desc: "California notary on site. Included with the real US address. One-off notarizations available.",
    href: "/en/notary",
  },
];

const FEES = [
  { label: "Extra scan beyond your plan", sub: "Color, double-sided, A4 format", amount: "2 TND / page" },
  { label: "Package storage beyond the included window", sub: "Included window: 30 / 60 / 90 days by plan", amount: "6 TND / week" },
  { label: "Consolidated forwarding to Tunis", sub: "Weekly on Fridays, DHL Express", amount: "140-280 TND + postage" },
  { label: "Urgent forwarding to Tunis", sub: "24-48h, DHL Worldwide Priority", amount: "200-470 TND + postage" },
  { label: "Same-day NoHo (local LA)", sub: "Delivery < 3h within North Hollywood", amount: "15 TND" },
  { label: "Same-day LA County", sub: "0-6h, anywhere in LA County", amount: "28-90 TND" },
  { label: "Package repacking", sub: "Re-boxed before shipping", amount: "8 TND / package" },
  { label: "Return to sender (US)", sub: "If you decline the delivery", amount: "Actual postage only" },
  { label: "Secure destruction", sub: "Crosscut shredding + certificate", amount: "Free" },
  { label: "Extra notarization (non-Form 1583)", sub: "One-off document via a CA notary", amount: "50 TND / document" },
  { label: "TN apostille (via partner KHIARI, Tunis)", sub: "Tunis MFA + sworn translation", amount: "Billed by KHIARI (~250 TND)" },
  { label: "Reactivation after suspension", sub: "Account frozen for non-payment", amount: "25 TND" },
];

const POLICIES = [
  {
    q: "Storage — how long is it free?",
    a: "Mail (letters, documents) is stored free for 90 days on every plan. Packages are stored free according to your plan: Basic 30 days, Standard 60 days, Premium 90 days. Beyond that, a surcharge of 6 TND per package per week applies. We send you a reminder before anything is billed.",
  },
  {
    q: "Package volume — is there a limit?",
    a: "No limit on count, but a volumetric surcharge applies beyond 1 cubic foot per package (Amazon-style volumes). Fee 15-45 TND depending on size. Very large items (furniture, bikes) may be refused — call us before shipping.",
  },
  {
    q: "Forwarding to Tunisia — how does it work?",
    a: "By default, weekly consolidation on Fridays. You get the whole week's mail in one DHL Express shipment — significant savings versus individual shipments. You can request an urgent shipment anytime (200-470 TND + actual postage by weight).",
  },
  {
    q: "DHL / UPS / FedEx postage — any markup?",
    a: "None. You pay the exact postage the carrier bills (DHL, UPS, FedEx). Our fee covers only consolidation + handling + packing. Transparent DHL receipts are provided in your dashboard.",
  },
  {
    q: "Cancellation — how much notice?",
    a: "Real US address: cancel anytime, effective at the end of the current month. Monthly management: month to month, no annual commitment. Business 4 000 TND: non-refundable once the LLC is formed (state fees can't be recovered).",
  },
  {
    q: "Delivery refused on arrival — what happens?",
    a: "If the recipient in Tunisia refuses the delivery (or customs blocks it), DHL returns the package to us. Return fee 25-60 TND. You then decide: restock with us (6 TND/week beyond the window included in your plan), secure destruction (free), or reship to another address.",
  },
  {
    q: "Mail privacy — who sees what?",
    a: "The automatic scan reads only the envelope (sender, arrival date). Opening + scanning the contents requires your explicit authorization via the dashboard. Scans are stored encrypted. Storefront staff never photocopy private documents without written instructions.",
  },
  {
    q: "USPS Form 1583 — why is it required and what does it cost?",
    a: "Form 1583 is the USPS authorization letting us receive mail on your behalf. It's mandatory for every USPS-registered American CMRA. Notarization is included in all Real US address plans. If your address in Tunisia changes: re-notarization is free.",
  },
  {
    q: "Policies for packages moving through the US storefront",
    a: "Every package that arrives at 5062 Lankershim (whether for forwarding to Tunis or local LA delivery) follows the same policies: photo in + photo out, mail stored 90 days, packages by plan (30 / 60 / 90 days), surcharge beyond that. Packages delivered to the TN store fall under the same policies for the duration of transit.",
  },
  {
    q: "BCT and customs declaration (Tunisia side) — who handles it?",
    a: "You receive the package in Tunisia. The customs declaration is filed by DHL/UPS during clearance. You pay Tunisian duties + VAT if applicable (varies by nature and declared value). We can send you a complete commercial invoice on request to smooth the clearance.",
  },
];

export default function EnglishTarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* HERO */}
      <section className="relative px-5 sm:px-6 pt-14 pb-10 sm:pt-20 sm:pb-14 text-center" style={{ background: CREAM }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(45,16,15,0.07) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-3" style={{ color: BLUE }}>
            Pricing
          </p>
          <h1
            className="font-extrabold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-baloo), sans-serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              color: INK,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Prices in dinars,
            <br />
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              no surprises
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
            No hidden fees. No invented scarcity. You pay what&apos;s on the
            grid — and nothing else.
          </p>
        </div>
      </section>

      {/* PLANS — STAMPS */}
      <section className="py-14 sm:py-20 px-7 sm:px-6" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.1rem", color: BLUE }}
            >
              Real US address
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: INK,
              }}
            >
              Pick your plan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {MAILBOX_PLANS.map((plan) => (
              <div key={plan.name} className={`group ${plan.primary ? "md:-mt-3" : ""}`}>
                <StampCard popular={plan.primary}>
                  {plan.primary && (
                    <div className="flex justify-center mb-4">
                      <span
                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: BLUE, color: "white" }}
                      >
                        ★ Most popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-2">
                    <p
                      className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
                      style={{ color: plan.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.45)" }}
                    >
                      {plan.note}
                    </p>
                    <h3
                      className="font-black text-2xl mb-1"
                      style={{ color: plan.primary ? CREAM : INK, fontFamily: "var(--font-baloo), sans-serif" }}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-end justify-center gap-1">
                      <span
                        className="font-extrabold"
                        style={{
                          fontSize: "2.5rem",
                          color: plan.primary ? CREAM : INK,
                          fontFamily: "var(--font-baloo), sans-serif",
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-sm mb-1.5"
                        style={{ color: plan.primary ? "rgba(247,230,194,0.45)" : "rgba(45,16,15,0.45)" }}
                      >
                        TND / month
                      </span>
                    </div>
                    <p
                      className="text-[10px] mt-1 font-bold"
                      style={{ color: plan.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.5)" }}
                    >
                      Notarized Form 1583 included
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm mt-5 mb-7">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: plan.primary ? BLUE : CREAM }}
                        >
                          <svg
                            className="w-2 h-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={plan.primary ? "white" : INK}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span
                          style={{ color: plan.primary ? "rgba(247,230,194,0.78)" : "rgba(45,16,15,0.78)" }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/en/virtual-mailbox"
                    className="block text-center font-black py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: plan.primary ? BLUE : INK,
                      color: plan.primary ? "white" : CREAM,
                      boxShadow: plan.primary ? "0 6px 20px rgba(51,116,133,0.35)" : "none",
                    }}
                  >
                    Choose {plan.name}
                  </Link>
                </StampCard>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: "rgba(45,16,15,0.5)" }}>
            Annual billing = 2 months free. Cancel anytime.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.1rem", color: BLUE }}
            >
              Other products
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Business, students, services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="block p-7 rounded-3xl transition-all hover:-translate-y-1"
                style={{ background: CREAM, boxShadow: "0 4px 18px rgba(45,16,15,0.08)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="font-extrabold text-[20px]"
                    style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <div className="text-right">
                    <p
                      className="font-extrabold text-[24px] leading-none"
                      style={{ color: BLUE, fontFamily: "var(--font-baloo), sans-serif" }}
                    >
                      {p.price}
                    </p>
                    <p className="text-[11px] font-bold" style={{ color: "rgba(45,16,15,0.5)" }}>
                      TND {p.unit}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
                  {p.desc}
                </p>
                <p className="text-[12px] font-black uppercase tracking-[0.12em] mt-4" style={{ color: BLUE }}>
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#FAFAF8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: BLUE }}>
              À la carte
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Price grid
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "rgba(45,16,15,0.6)" }}>
              You only pay for what you use. No surprises, no markup.
            </p>
          </div>
          <ul
            className="rounded-3xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(45,16,15,0.08)",
              boxShadow: "0 1px 0 rgba(51,116,133,0.04), 0 12px 32px rgba(45,16,15,0.06)",
            }}
          >
            {FEES.map((f, i) => (
              <li
                key={i}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 transition-colors hover:bg-[#F7E6C2]/30"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.05)" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold" style={{ color: INK }}>
                    {f.label}
                  </p>
                  {f.sub && (
                    <p className="text-[12px] mt-0.5" style={{ color: "rgba(45,16,15,0.55)" }}>
                      {f.sub}
                    </p>
                  )}
                </div>
                <span
                  className="text-[15px] font-black text-left sm:shrink-0 sm:text-right"
                  style={{ color: BLUE, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {f.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#F0EDE8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: BLUE }}>
              Storage and forwarding policy
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Policies
            </h2>
            <p className="mt-2 text-[13.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.6)" }}>
              These policies apply to every package moving through our US
              storefront (5062 Lankershim) — including forwards to Tunisia.
            </p>
          </div>
          <div className="space-y-3">
            {POLICIES.map((p, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <summary
                  className="px-5 py-4 cursor-pointer font-bold text-[14.5px] flex items-center justify-between gap-4"
                  style={{ color: INK, listStyle: "none" }}
                >
                  <span>{p.q}</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4 transition-transform group-open:rotate-180 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6 L8 10 L12 6" />
                  </svg>
                </summary>
                <div
                  className="px-5 pb-4 text-[14px] leading-relaxed"
                  style={{ color: "rgba(45,16,15,0.78)", borderTop: "1px solid rgba(45,16,15,0.05)" }}
                >
                  <p className="pt-3">{p.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 text-center" style={{ background: INK, color: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            One question before you pay?
          </h2>
          <p className="text-[15px] mb-6" style={{ color: "rgba(247,230,194,0.75)" }}>
            A free 30-minute consultation. We look at your file in person —
            not a robot, not a form.
          </p>
          <Link
            href="/en/appel"
            className="inline-flex items-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px]"
            style={{ background: GOLD, color: INK }}
          >
            Book the free call
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
              <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
