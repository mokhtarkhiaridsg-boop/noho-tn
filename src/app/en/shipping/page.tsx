import type { Metadata } from "next";
import Link from "next/link";
import LabelClient, { type LabelClientLabels } from "@/components/LabelClient";
import { waLink } from "@/lib/whatsapp";

/*
 * English version of /shipping, including the live Shippo label generator
 * (locale="en" + fully translated labels object).
 * The FR QuoteClient slider is FR-hardcoded internally, so it is omitted
 * here until it grows locale support — the custom-quote section covers it.
 * All rates/claims sourced from the FR page.
 */

export const metadata: Metadata = {
  title: "Shipping — live USPS, UPS, FedEx, DHL rates from Los Angeles",
  description:
    "Drop your package at the storefront, we pack it and ship it — US or international. Transparent quotes: you pay the real postage. USPS Priority Mail, UPS Worldwide, FedEx International, DHL Express.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/shipping",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/shipping",
      "ar-TN": "https://nohomailboxtunis.com/ar/shipping",
      "aeb-TN": "https://nohomailboxtunis.com/shipping",
      en: "https://nohomailboxtunis.com/en/shipping",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const BODY = "#EBF2FA";

const EN_LABELS: LabelClientLabels = {
  intro: "Destination + parcel → live carrier rates. You pick one, we issue the label once you've paid in dinars.",
  toName: "Recipient", street: "Street address", city: "City", state: "State / region", zip: "ZIP / postal code", country: "Country (code — TN, FR, US…)",
  suite: "Your NOHO suite (optional)", suiteHint: "e.g. 122 — if the package ships from your box",
  length: "Length (in)", width: "Width (in)", height: "Height (in)", weight: "Weight (lb)",
  getRates: "See live rates", gettingRates: "Checking with the carriers…",
  pickRate: "Pick your rate", days: "days",
  email: "Your email", phone: "Phone (optional)",
  order: "Order this label", ordering: "Sending…",
  successTitle: "Order received.",
  successBody: "We'll reach out to settle payment in dinars, then your label PDF lands in your inbox.",
  payNote: "Payment in dinars — wallet or Cabinet Khiari, Tunis. No card payments on the site.",
  back: "Edit the parcel",
};

type IconCmp = (props: { className?: string }) => React.ReactElement;

const IconPackage: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M6 14 L24 24 L42 14" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 24 L24 44" stroke={INK} strokeWidth="2.5" />
    <path d="M14 9 L32 19" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const IconGift: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="18" width="36" height="24" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="4" y="14" width="40" height="8" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <path d="M24 14 L24 42" stroke={INK} strokeWidth="2.5" />
    <path d="M24 14 C20 6 12 6 14 12 C16 16 24 14 24 14 Z" fill={BLUE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 14 C28 6 36 6 34 12 C32 16 24 14 24 14 Z" fill={BLUE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
const IconRefresh: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M40 14 A18 18 0 1 0 42 28" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M40 6 L40 16 L30 16" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="6" fill={BLUE} opacity="0.25" />
  </svg>
);
const IconReceipt: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 4 L38 4 L38 44 L32 40 L24 44 L16 40 L10 44 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 14 L32 14 M16 20 L32 20 M16 26 L26 26" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 32 L32 32" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const IconCamera: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="28" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M16 12 L18 8 L30 8 L32 12" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="26" r="8" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <circle cx="24" cy="26" r="3" fill={BLUE} />
  </svg>
);
const IconShield: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 4 L8 10 L8 24 C8 34 14 42 24 46 C34 42 40 34 40 24 L40 10 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 24 L22 30 L32 18" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconChat: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M3 6 C3 4.5 4.5 3 6 3 L18 3 C19.5 3 21 4.5 21 6 L21 15 C21 16.5 19.5 18 18 18 L9 18 L4 22 L4 18 C3.4 18 3 17.5 3 17 Z" fill={CREAM} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="9" cy="10.5" r="1.2" fill={INK} />
    <circle cx="13" cy="10.5" r="1.2" fill={INK} />
    <circle cx="17" cy="10.5" r="1.2" fill={INK} />
  </svg>
);
const IconEnv: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" fill={CREAM} stroke={INK} strokeWidth="2" />
    <path d="M3 7 L12 14 L21 7" stroke={INK} strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);
const IconBoxSm: IconCmp = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" fill={CREAM} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M3 7 L12 12 L21 7 M12 12 L12 22" stroke={INK} strokeWidth="1.8" />
  </svg>
);
const IconWarn: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M12 3 L22 20 L2 20 Z" fill={GOLD} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 10 L12 14" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill={INK} />
  </svg>
);

const CARRIERS = [
  { name: "USPS Priority Mail International", time: "6-10 days", price: "~35-60 USD", note: "The cheapest. Tracking up to US customs, limited tracking after that." },
  { name: "USPS Priority Mail Express International", time: "3-5 days", price: "~60-90 USD", note: "Full tracking all the way to Tunis. Guaranteed delivery window." },
  { name: "UPS Worldwide Expedited", time: "3-5 days", price: "~70-110 USD", note: "Full tracking, signature on delivery." },
  { name: "FedEx International Economy", time: "4-6 days", price: "~75-110 USD", note: "A good balance of price and tracking. Customs broker included." },
  { name: "DHL Express Worldwide", time: "2-3 days", price: "~110-160 USD", note: "The fastest. Real-time tracking. Pricey but dependable." },
];

const SERVICES: { Icon: IconCmp; t: string; b: string }[] = [
  { Icon: IconPackage, t: "Standard packing", b: "Cardboard box, bubble wrap, sealing. Included in the USPS / UPS / FedEx rate." },
  { Icon: IconGift, t: "Premium / fragile packing", b: "Double box, foam, 'fragile' labeling. +15-25 USD." },
  { Icon: IconRefresh, t: "Multi-package consolidation", b: "Several small packages become one big one — real savings on postage. +20-40 USD handling." },
  { Icon: IconReceipt, t: "Customs forms + declaration", b: "Customs forms filled out right (HTS codes for USPS, commercial invoice for UPS/FedEx/DHL). Included." },
  { Icon: IconCamera, t: "Photos before shipping", b: "Photos of the packed contents before sealing. Handy for insurance or a dispute. +5 USD per shipment." },
  { Icon: IconShield, t: "Declared-value insurance", b: "Coverage up to the declared value. Real carrier rates (USPS, UPS, etc.). Recommended above 200 USD." },
];

export default function EnglishShippingPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconBoxSm className="w-4 h-4" />
            US and international shipping · from Los Angeles
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Shipping
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto mb-7" style={{ color: "rgba(45,16,15,0.78)" }}>
            Drop your package at the storefront — we pack it and ship it,
            US or international. You pay the real postage, no hidden
            markup.
          </p>
          <Link
            href="#label"
            className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Generate a label — pay in dinars
          </Link>
        </div>
      </section>

      {/* LABEL GENERATOR — live Shippo rates, paid in dinars */}
      <section id="label" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="grain relative rounded-[16px] p-5 sm:p-7"
            style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
          >
            <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: BLUE }} />
            <div className="relative z-[1]">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: BLUE }}>
                Live labels · real carrier rates
              </p>
              <h2
                className="font-extrabold mb-3"
                style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "24px", color: INK }}
              >
                Generate your label, pay in dinars
              </h2>
              <LabelClient locale="en" L={EN_LABELS} />
            </div>
          </div>
        </div>
      </section>

      {/* CARRIERS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            5 carriers · Los Angeles → Tunis
          </h2>
          <p className="text-center text-[14px] mb-10" style={{ color: "rgba(45,16,15,0.65)" }}>
            Ballpark rates for 1 kg / standard dimensions (30 × 25 × 10 cm).
            Exact quote based on real weight and dimensions.
          </p>
          <div className="space-y-3">
            {CARRIERS.map((c) => (
              <div key={c.name} className="p-5 rounded-2xl" style={{ background: CREAM }}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-black text-[16px]" style={{ color: INK }}>{c.name}</h3>
                  <div className="flex gap-3">
                    <span className="text-[13px] font-black" style={{ color: BLUE }}>{c.time}</span>
                    <span className="text-[13px] font-black" style={{ color: GREEN }}>{c.price}</span>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Extra services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.t} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <div className="mb-3"><s.Icon className="w-8 h-8" /></div>
                <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{s.t}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM QUOTE (WhatsApp / email) */}
      <section id="quote" className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Custom quote within 4 business hours
          </p>
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Tricky shipment?
          </h2>
          <p className="text-center text-[14px] mb-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            Unusual volume, fragile items, particular customs — we look at
            your case specifically and get back to you with real options
            and real rates.
          </p>

          <div className="p-7 rounded-3xl" style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}>
            <p className="font-black text-[14px] mb-4" style={{ color: INK }}>
              What we need for the quote:
            </p>
            <ul className="space-y-2 text-[13.5px] mb-6 list-disc pl-5" style={{ color: INK }}>
              <li>Origin address (do we pick up the package, or is it already with us?)</li>
              <li>Destination address in Tunisia (city + postal code)</li>
              <li>Estimated weight (kg)</li>
              <li>Rough dimensions (L × W × H in cm)</li>
              <li>Declared customs value (USD)</li>
              <li>Contents (category: clothing, electronics, books, etc.)</li>
              <li>Preferred speed (economy / standard / express)</li>
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href={waLink("colis")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-xl text-[14.5px] transition-all hover:scale-[1.02] text-center"
                style={{ background: GREEN, color: "#fff" }}
              >
                <IconChat className="w-5 h-5" />
                Quote via WhatsApp (reply in 2 hours)
              </a>
              <a
                href="mailto:hello@nohomailbox.org?subject=Shipping%20quote%20from%20nohomailboxtunis.com%2Fen&body=Hello%2C%0A%0AI%27d%20like%20a%20shipping%20quote%20from%20Los%20Angeles%20to%20Tunisia.%0A%0AOrigin%20address%3A%0ADestination%20address%20(Tunisia)%3A%0AWeight%20(kg)%3A%0ADimensions%20(L%20%C3%97%20W%20%C3%97%20H%20cm)%3A%0ADeclared%20value%20(USD)%3A%0AContents%3A%0APreferred%20speed%3A%0A%0AThank%20you."
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-xl text-[14.5px] transition-all hover:scale-[1.02] text-center"
                style={{ background: INK, color: CREAM }}
              >
                <IconEnv className="w-5 h-5" />
                Quote via email (reply in 24 hours)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INBOUND TO US */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
            Inbound — Tunisia → USA
          </p>
          <h2
            className="text-center font-extrabold mb-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}
          >
            You can ship from Tunisia to the USA too
          </h2>
          <p className="text-[15px] leading-relaxed text-center max-w-xl mx-auto opacity-90">
            If you sell Tunisian products (crafts, clothing, fouta, olive
            oil) to American customers through Etsy or Shopify — we can be
            your US receiver and your reshipping hub. Your packages arrive
            from Tunis in one batch, we store them, and we ship each order
            to your US customers at domestic US rates (far cheaper than
            shipping from Tunisia one by one).
          </p>
          <p className="text-[13px] mt-5 text-center opacity-70">
            A natural fit for Tunisian Etsy / Shopify brands scaling into
            the American market.
          </p>
        </div>
      </section>

      {/* CUSTOMS NOTE */}
      <section className="px-5 sm:px-6 py-12" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>
          <p className="font-black mb-2 inline-flex items-center gap-2"><IconWarn className="w-5 h-5" /> A note on customs</p>
          <p className="mb-2">
            <strong>US side (export):</strong> since August 29, 2025, the
            800 USD de minimis threshold is gone. Every package headed to
            the USA needs a full customs entry with HTS codes. We take care
            of it; we provide the commercial invoice.
          </p>
          <p>
            <strong>Tunisia side (import):</strong> above 100 TND of
            declared value, the Poste Tunisienne or the carrier applies
            customs duties. We never under-declare (illegal on both the US
            and the Tunisian side). You declare the real value.
          </p>
        </div>
      </section>
    </>
  );
}
