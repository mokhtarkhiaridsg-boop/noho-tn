import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { AiBox, AiTruck, AiShield, AiBolt, AiPin, AiSparkle } from "@/components/AnimatedIcons";
import OpenStatusPill from "@/components/OpenStatusPill";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "L'Agent", url: "https://noho.tn/agent" },
  { name: "Solution E-Commerce", url: "https://noho.tn/agent/ecom" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solution E-Commerce — NOHO",
  serviceType: "E-commerce business setup for Tunisian founders",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://noho.tn" },
  areaServed: "TN",
  description:
    "Société US ou TN, banque, Stripe, Amazon Brand Registry, Etsy, Shopify, 3PL, douane TN→US.",
};

export const metadata: Metadata = {
  title: "Solution E-Commerce — Vends en TND et USD, en Tunisie et aux USA",
  description:
    "Société US (LLC) ou TN (SARL/SUARL), banque, Stripe, Amazon Brand Registry, Etsy, Shopify, 3PL, douane TN→US. Tout le pipeline e-commerce géré depuis Tunis.",
  alternates: {
    canonical: "https://noho.tn/agent/ecom",
    languages: {
      "fr-TN": "https://noho.tn/agent/ecom",
      "ar-TN": "https://noho.tn/ar/agent/ecom",
      "x-default": "https://noho.tn/agent/ecom",
    },
  },
};

/* ─── Palette ─── */
const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

/* ─── Inline icons ─── */

const IconArrow = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCart = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M3 5 L6 5 L8 16 L19 16 L21 8 L7 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
);

const IconX = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6 L18 18 M18 6 L6 18" />
  </svg>
);

/* ─── Data ─── */

const STATS = [
  { num: "TN + US", label: "deux juridictions" },
  { num: "14 j", label: "société + banque" },
  { num: "20-35 %", label: "frictions Stripe MENA" },
  { num: "4 000", label: "TND solution Business" },
];

const STEPS = [
  {
    n: "01",
    title: "Société TN ou US",
    body: "SARL/SUARL tunisienne via cabinet partenaire à Tunis, OU LLC Wyoming/Delaware/NM, OU combo (TN-mère + US-filiale). On recommande selon ton marché.",
    Icon: AiShield,
  },
  {
    n: "02",
    title: "Banque + Stripe",
    body: "Côté TN : BIAT, Attijari, BNA (compte devises post-BCT 2026). Côté US : Mercury, Relay. Candidature Stripe avec dossier renforcé pour ta juridiction.",
    Icon: AiSparkle,
  },
  {
    n: "03",
    title: "Marketplace setup",
    body: "US : Amazon Seller Central + Brand Registry, Etsy, Shopify Payments, Walmart. TN : Jumia, marketplaces locales. Brand assets, photos produits, fiches optimisées.",
    Icon: AiBox,
  },
  {
    n: "04",
    title: "Logistique TN ↔ US",
    body: "TN : enlèvement Tunis/Sfax, douane export, port La Goulette. US : 3PL ShipBob/ShipMonk, FBA prep, adresse retours US. Bout-en-bout des deux côtés.",
    Icon: AiTruck,
  },
];

const TRUST = [
  {
    Icon: AiPin,
    title: "Équipe à Tunis",
    body: "Cabinet partenaire KHIARI pour SARL/SUARL, dépôt BCT, fiscalité TVA tunisienne, démarches RCS. Trente ans d'activité juridique.",
  },
  {
    Icon: AiSparkle,
    title: "Boutique à Los Angeles",
    body: "5062 Lankershim Blvd, North Hollywood — adresse US réelle pour Amazon Brand Registry, Stripe verification, retours US. Équipe sur place.",
  },
  {
    Icon: AiBolt,
    title: "Pont des deux côtés",
    body: "Tu choisis : tout TN, tout US, ou combo. NOHO coordonne les deux côtés pour que ton produit voyage sans que tu sautes dans l'avion.",
  },
];

const NOT_INCLUDED = [
  "Garantie d'approbation Stripe — décision de Stripe (frictions 20-35 % pour MENA, on prépare le meilleur dossier possible)",
  "Garantie d'approbation Mercury — décision de Mercury (Plan B documenté : Relay, Wise Business, Brex)",
  "Achat de stock pour ton compte — tu commandes, on coordonne logistique",
  "Conseil fiscal direct — référé à un CPA US ou expert-comptable TN partenaire",
  "Service client final à tes clients — tu gères la relation client, on bâtit l'infrastructure",
  "Marketing et publicité payante — on peut référer une agence, mais hors périmètre Solution Business",
];

/* ─── Reusable claymorphism card style ─── */

const clayCard = {
  background: "#FFFFFF",
  border: `2px solid ${INK}`,
  borderRadius: "20px",
  boxShadow: `0 4px 0 ${INK}, 0 10px 30px rgba(45,16,15,0.10)`,
} as const;

const clayCardHover =
  "transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_6px_0_#2D100F,0_14px_40px_rgba(45,16,15,0.14)]";

/* ─── Page ─── */

export default function EcomSolutionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* HERO */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24"
        style={{ background: CREAM }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(45,16,15,0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-6"
              style={{ background: INK, color: CREAM }}
            >
              <IconCart className="w-3.5 h-3.5" />
              Solution E-Commerce · TN + US
            </span>
            <h1
              className="font-extrabold leading-[1.02] tracking-tight mb-5"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Vends en TND et USD,
              <br />
              <span
                style={{
                  fontFamily: "var(--font-pacifico), cursive",
                  color: BLUE,
                  fontWeight: 400,
                }}
              >
                en Tunisie et aux USA.
              </span>
            </h1>
            <p
              className="leading-relaxed mb-6 max-w-lg text-[16px] sm:text-[17px]"
              style={{ color: "rgba(45,16,15,0.78)" }}
            >
              Société (TN, US ou combo), banque locale ou Mercury, Stripe avec dossier renforcé, marketplaces des deux côtés, logistique bout-en-bout. Le pipeline e-commerce complet — sans que tu sautes dans l&apos;avion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/appel"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: INK,
                  color: CREAM,
                  boxShadow: `0 4px 0 rgba(0,0,0,0.25), 0 10px 30px rgba(45,16,15,0.30)`,
                }}
              >
                Discute de ton e-commerce
                <IconArrow className="w-4 h-4" />
              </Link>
              <Link
                href="/business"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: "#FFFFFF",
                  color: INK,
                  border: `2px solid ${INK}`,
                  boxShadow: `0 4px 0 ${INK}`,
                }}
              >
                Voir Solution Business
              </Link>
            </div>
            <OpenStatusPill />
          </div>

          <div className="relative">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              aria-label="Statistiques e-commerce"
            >
              {STATS.map((s) => (
                <div key={s.label} className="p-5 sm:p-6 text-center" style={clayCard}>
                  <p
                    className="font-extrabold leading-none mb-1.5"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      color: INK,
                      fontFamily: "var(--font-baloo), sans-serif",
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-[10.5px] font-black uppercase tracking-[0.12em]"
                    style={{ color: "rgba(45,16,15,0.55)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 px-3 py-1.5 rounded-full font-black text-[11px] uppercase tracking-[0.14em] rotate-[6deg]"
              style={{
                background: GOLD,
                color: INK,
                border: `2px solid ${INK}`,
                boxShadow: `0 3px 0 ${INK}`,
              }}
            >
              Stripe-ready
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Pipeline e-commerce
          </p>
          <h2
            className="text-center font-extrabold tracking-tight mb-12"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Quatre étapes. Bout en bout.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className={`p-6 sm:p-7 ${clayCardHover}`} style={clayCard}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: GOLD,
                      border: `2px solid ${INK}`,
                      boxShadow: `0 2px 0 ${INK}`,
                      color: INK,
                    }}
                  >
                    <s.Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-extrabold leading-none mb-1"
                      style={{
                        fontFamily: "var(--font-baloo), sans-serif",
                        color: BLUE,
                        fontSize: "1.5rem",
                      }}
                    >
                      {s.n}
                    </p>
                    <h3
                      className="font-extrabold text-[17px] mb-2"
                      style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[13.5px] leading-relaxed"
                      style={{ color: "rgba(45,16,15,0.78)" }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Pourquoi NOHO et pas un autre
          </p>
          <h2
            className="text-center font-extrabold tracking-tight mb-12"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Présence réelle. Des deux côtés.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {TRUST.map((t) => (
              <div key={t.title} className={`p-7 ${clayCardHover}`} style={clayCard}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: BLUE,
                    border: `2px solid ${INK}`,
                    boxShadow: `0 2px 0 ${INK}`,
                    color: "#FFFFFF",
                  }}
                >
                  <t.Icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-extrabold text-[17px] mb-2"
                  style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{ color: "rgba(45,16,15,0.78)" }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST SELF-DISCLOSURE */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: GOLD }}
          >
            Transparence totale
          </p>
          <h2
            className="text-center font-extrabold tracking-tight mb-10"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: CREAM,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
            }}
          >
            Ce qu&apos;on NE garantit PAS
          </h2>
          <ul className="space-y-3">
            {NOT_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(247,230,194,0.12)`,
                }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(199,62,45,0.18)", color: "#FF8979" }}
                >
                  <IconX className="w-3.5 h-3.5" />
                </div>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "rgba(247,230,194,0.85)" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <p
            className="mt-6 text-center text-[12.5px]"
            style={{ color: "rgba(247,230,194,0.55)" }}
          >
            Détails sur Stripe et Mercury MENA dans nos{" "}
            <Link
              href="/blog"
              className="font-bold underline"
              style={{ color: "rgba(247,230,194,0.85)" }}
            >
              guides bancaires
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 py-20 sm:py-24"
        style={{ background: CREAM }}
      >
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-44 h-44 sm:w-60 sm:h-60 rounded-full rotate-12"
          style={{ background: `${GOLD}33`, filter: "blur(8px)" }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-5"
            style={{ background: GOLD, color: INK, border: `2px solid ${INK}`, boxShadow: `0 2px 0 ${INK}` }}
          >
            <IconCart className="w-3.5 h-3.5" />
            Appel découverte — 0 TND
          </span>
          <h2
            className="font-extrabold tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Parle-nous de ton produit.
          </h2>
          <p
            className="text-[15.5px] sm:text-[16.5px] leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: "rgba(45,16,15,0.78)" }}
          >
            30 minutes. On regarde ton produit, ton marché cible, et on te dit exactement ce qu&apos;il faut — TN, US, ou combo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/appel"
              className="inline-flex items-center justify-center gap-2 font-black px-9 py-5 rounded-2xl text-[16px] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: INK,
                color: CREAM,
                boxShadow: `0 5px 0 rgba(0,0,0,0.25), 0 12px 36px rgba(45,16,15,0.30)`,
              }}
            >
              Réserver l&apos;appel
              <IconArrow className="w-4 h-4" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 font-black px-9 py-5 rounded-2xl text-[16px] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: "#FFFFFF",
                color: INK,
                border: `2px solid ${INK}`,
                boxShadow: `0 5px 0 ${INK}`,
              }}
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
