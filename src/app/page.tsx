import type { Metadata } from "next";
import Link from "next/link";
import StampCard from "@/components/StampCard";
import OpenStatusPill from "@/components/OpenStatusPill";
import StorefrontIllustration from "@/components/StorefrontIllustration";
import { AiMailbox, AiTruck, AiClock, AiShield, AiPin, AiEnvelope, AiHeart, AiBolt } from "@/components/AnimatedIcons";

export const metadata: Metadata = {
  title: {
    absolute:
      "NOHO Mailbox Tunisie — Boîte virtuelle US, expédition, livraison, LLC",
  },
  description:
    "Adresse postale réelle aux États-Unis dès 35 TND/mois. Boîte virtuelle avec scan de courrier, réception colis (UPS/FedEx/Amazon), forwarding international vers Tunis. LLC américaine, notariat, expédition, livraison US. Tarif en dinars.",
  alternates: {
    canonical: "https://noho.tn",
    languages: {
      "fr-TN": "https://noho.tn",
      "ar-TN": "https://noho.tn/ar",
      "en-US": "https://nohomailbox.org",
    },
  },
  openGraph: {
    title: "NOHO Mailbox Tunisie — Boîte virtuelle US, LLC, expédition",
    description:
      "Adresse postale réelle aux États-Unis dès 35 TND/mois. LLC américaine 4 000 TND. Notaire californien. Tarif en dinars.",
    url: "https://noho.tn",
    siteName: "NOHO Mailbox Tunisie",
    locale: "fr_TN",
    type: "website",
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#C8A35A";
const GREEN = "#2D7A4A";

/* =============================================================
   BRAND SVG ICONS - replaces emoji pictographs.
   Light #EBF2FA, Blue #337485, Ink #2D100F, Gold #C8A35A
   Same visual language as /business and AnimatedIcons.
   ============================================================= */

type IconProps = { className?: string; stroke?: string };

const IconMailbox = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="6" y="16" width="32" height="22" rx="4" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <path d="M6 22 Q6 16 14 16 Q22 16 22 22" stroke={stroke} strokeWidth="2" fill="none" />
    <rect x="36" y="16" width="3" height="14" fill={BLUE} stroke={stroke} strokeWidth="1.5" />
    <rect x="34" y="14" width="9" height="6" rx="1.5" fill="#C73E2D" stroke={stroke} strokeWidth="1.5" />
    <path d="M20 38 L20 44 M28 38 L28 44" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 28 H22" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconHandshake = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M4 20 L14 16 L22 22 L20 30 L10 32 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M44 20 L34 16 L26 22 L28 30 L38 32 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M18 24 L24 22 L30 24 L26 30 L22 30 Z" fill={BLUE} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 22 L20 18 M26 22 L28 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconBuilding = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="8" y="6" width="32" height="38" rx="2" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <rect x="13" y="12" width="5" height="5" fill={BLUE} />
    <rect x="21.5" y="12" width="5" height="5" fill={BLUE} />
    <rect x="30" y="12" width="5" height="5" fill={BLUE} />
    <rect x="13" y="21" width="5" height="5" fill={BLUE} opacity="0.6" />
    <rect x="21.5" y="21" width="5" height="5" fill={BLUE} opacity="0.6" />
    <rect x="30" y="21" width="5" height="5" fill={BLUE} opacity="0.6" />
    <rect x="13" y="30" width="5" height="5" fill={BLUE} opacity="0.35" />
    <rect x="30" y="30" width="5" height="5" fill={BLUE} opacity="0.35" />
    <rect x="20" y="30" width="8" height="14" fill={INK} opacity="0.85" />
  </svg>
);

const IconPackage = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M24 6 L42 14 L42 34 L24 42 L6 34 L6 14 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 14 L24 22 L42 14" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 22 L24 42" stroke={stroke} strokeWidth="2" />
    <path d="M15 10 L33 18" stroke="#C73E2D" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const IconPlane = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M6 28 L42 14 L40 22 L20 30 L16 38 L12 36 L14 30 L6 28 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 26 L34 18" stroke={BLUE} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M6 40 Q24 36 42 40" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity="0.5" />
  </svg>
);

const IconTruck = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="3" y="14" width="24" height="18" rx="2" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <path d="M27 20 L37 20 L43 26 L43 32 L27 32 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <rect x="30" y="22" width="6" height="5" fill={BLUE} opacity="0.4" stroke={stroke} strokeWidth="1.2" />
    <circle cx="12" cy="34" r="4" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <circle cx="12" cy="34" r="1.8" fill={BLUE} />
    <circle cx="35" cy="34" r="4" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <circle cx="35" cy="34" r="1.8" fill={BLUE} />
  </svg>
);

const IconScroll = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M10 10 C10 7 12 6 14 6 L34 6 C36 6 38 8 38 10 L38 38 C38 41 36 42 34 42 L14 42 C12 42 10 40 10 38 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 14 H32 M14 20 H32 M14 26 H28 M14 32 H30" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="32" cy="36" r="4" fill={GOLD} stroke={stroke} strokeWidth="1.5" />
    <path d="M30 36 L31.5 37.5 L34 35" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconToolbox = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="4" y="16" width="40" height="26" rx="3" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <path d="M16 16 L16 10 C16 8 17 7 19 7 L29 7 C31 7 32 8 32 10 L32 16" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="4" y="22" width="40" height="4" fill={BLUE} opacity="0.25" />
    <rect x="20" y="26" width="8" height="6" rx="1" fill={BLUE} stroke={stroke} strokeWidth="1.5" />
    <path d="M12 32 L12 38 M36 32 L36 38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const IconCart = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M4 8 H10 L14 30 H38 L42 14 H14" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#EBF2FA" />
    <path d="M18 18 L18 26 M26 18 L26 26 M34 18 L34 26" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    <circle cx="18" cy="38" r="3" fill={BLUE} stroke={stroke} strokeWidth="1.5" />
    <circle cx="34" cy="38" r="3" fill={BLUE} stroke={stroke} strokeWidth="1.5" />
  </svg>
);

const IconGradCap = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M4 18 L24 8 L44 18 L24 28 Z" fill={INK} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 22 L12 32 C12 35 17 38 24 38 C31 38 36 35 36 32 L36 22" stroke={stroke} strokeWidth="2" strokeLinejoin="round" fill="#EBF2FA" />
    <path d="M40 19 L40 30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="32" r="2.5" fill={GOLD} stroke={stroke} strokeWidth="1.2" />
  </svg>
);

const IconBriefcase = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="4" y="14" width="40" height="26" rx="3" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <path d="M17 14 L17 10 C17 8.5 18 7 20 7 L28 7 C30 7 31 8.5 31 10 L31 14" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 24 H44" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
    <rect x="20" y="22" width="8" height="4" rx="1" fill={BLUE} stroke={stroke} strokeWidth="1.2" />
  </svg>
);

const IconShoppingBag = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M8 16 L12 42 L36 42 L40 16 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 16 C16 10 19 6 24 6 C29 6 32 10 32 16" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M16 22 L16 28 M32 22 L32 28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M20 32 Q24 36 28 32" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
);

const IconHouse = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M6 24 L24 8 L42 24 L42 42 L6 42 Z" fill="#EBF2FA" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <rect x="20" y="28" width="8" height="14" fill={INK} opacity="0.85" />
    <rect x="11" y="28" width="6" height="6" fill={BLUE} opacity="0.5" stroke={stroke} strokeWidth="1.2" />
    <rect x="31" y="28" width="6" height="6" fill={BLUE} opacity="0.5" stroke={stroke} strokeWidth="1.2" />
    <path d="M34 14 L34 19 L38 19" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCompass = ({ className = "w-8 h-8", stroke = INK }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="18" fill="#EBF2FA" stroke={stroke} strokeWidth="2" />
    <path d="M24 12 L28 24 L24 36 L20 24 Z" fill={BLUE} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 12 L28 24 L24 24 Z" fill="#C73E2D" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="2" fill={INK} />
  </svg>
);

type ServiceIcon = (props: IconProps) => React.JSX.Element;

const CORE_SERVICES: Array<{
  icon: ServiceIcon;
  title: string;
  body: string;
  href: string;
  primary?: boolean;
  accent?: string;
}> = [
  {
    icon: IconMailbox,
    title: "Boîte virtuelle US",
    body: "Adresse postale réelle à Los Angeles dès 35 TND/mois. Scan de courrier le jour même via dashboard en ligne. Forwarding vers la Tunisie ou n'importe où dans le monde.",
    href: "/virtual-mailbox",
    primary: true,
  },
  {
    icon: IconHandshake,
    title: "L'Agent — Tunisie & USA",
    body: "Équipe à Tunis pour les démarches locales, équipe à Los Angeles pour les démarches US. E-commerce, étudiants, emploi — les deux côtés couverts.",
    href: "/agent",
    accent: GOLD,
  },
  {
    icon: IconBuilding,
    title: "Business",
    body: "Société américaine ou tunisienne + EIN + identité de marque + site + accompagnement Mercury et Stripe. 4 000 TND une fois.",
    href: "/business",
  },
  {
    icon: IconPackage,
    title: "Réception colis (Amazon, UPS, FedEx)",
    body: "Tu commandes sur Amazon US, eBay, Shein, n'importe où — livré au 5062 Lankershim. On consolide, on emballe, on t'expédie en Tunisie.",
    href: "/virtual-mailbox#packages",
  },
  {
    icon: IconPlane,
    title: "Forwarding international",
    body: "Courrier et colis forwardés vers Tunis, Paris, Dubaï, Montréal — toutes les semaines ou à la demande. Consolidation pour réduire les frais.",
    href: "/shipping",
  },
  {
    icon: IconTruck,
    title: "Livraison US (LA + national)",
    body: "Si tu as une LLC américaine avec clients US — on fait la livraison locale même-jour dans tout le grand Los Angeles. UPS, FedEx, DHL pour le reste des US.",
    href: "/delivery",
  },
  {
    icon: IconScroll,
    title: "Notaire californien",
    body: "Form 1583 USPS, notarisation générale, traduction certifiée, apostille. Sur place au storefront ou via session vidéo.",
    href: "/notary",
  },
  {
    icon: IconToolbox,
    title: "Outils & guides gratuits",
    body: "Calculateurs Form 5472, comparateurs banques US, guides PDF, lookups en temps réel. Tout gratuit pour comprendre ton dossier.",
    href: "/outils",
  },
];

const AGENT_SOLUTIONS: Array<{ icon: ServiceIcon; title: string; body: string; href: string }> = [
  {
    icon: IconCart,
    title: "Solution E-Commerce",
    body: "Société TN ou US, banque locale ou Mercury, Stripe, Amazon/Etsy/Shopify, 3PL, douane des deux côtés.",
    href: "/agent/ecom",
  },
  {
    icon: IconGradCap,
    title: "Solution Étudiants",
    body: "Admission universités US ou TN, visa F-1 ou titre étudiant, apostille TN ↔ US, accueil arrivée Tunis ou LA.",
    href: "/agent/student",
  },
  {
    icon: IconBriefcase,
    title: "Solution Application Emploi",
    body: "CV bilingue FR-EN-AR, numéro US ou TN sur applications, interviews coordonnés, visa H-1B/O-1 ou retour Tunisie.",
    href: "/agent/jobs",
  },
];

const MAILBOX_PLANS = [
  {
    name: "Basic",
    price: "35",
    note: "Pour usage personnel léger",
    bullets: [
      "Adresse postale US réelle",
      "5 scans de courrier inclus/mois",
      "Forwarding sur demande (frais postal en sus)",
      "Stockage 30 jours",
    ],
  },
  {
    name: "Standard",
    price: "75",
    note: "Le plus populaire chez les freelances",
    bullets: [
      "Tout du Basic",
      "20 scans inclus/mois",
      "Réception colis incluse (5/mois)",
      "Forwarding hebdomadaire automatique",
      "Consolidation de colis",
    ],
    primary: true,
  },
  {
    name: "Premium",
    price: "150",
    note: "Pour e-commerce et business actif",
    bullets: [
      "Tout du Standard",
      "Scans illimités",
      "Réception colis illimitée",
      "Priorité scan (sous 2h)",
      "Repacking inclus",
      "Cloud storage des scans (3 ans)",
    ],
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOHO Mailbox Tunisie",
  url: "https://noho.tn",
  logo: "https://noho.tn/icon.svg",
  description:
    "Boîte virtuelle américaine, formation LLC, notariat, expédition et livraison US pour Tunisiens. Opéré depuis 5062 Lankershim Blvd, North Hollywood, CA, avec partenaire KHIARI à Tunis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5062 Lankershim Blvd",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91601",
    addressCountry: "US",
  },
  sameAs: ["https://nohomailbox.org"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NOHO Mailbox Tunisie",
  url: "https://noho.tn",
  inLanguage: ["fr-TN", "ar-TN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://noho.tn/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* HERO — leads with the mailbox */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-20 min-h-[78vh]"
        style={{ background: CREAM }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(45,16,15,0.1) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.18em] sm:tracking-[0.24em] px-3 sm:px-4 py-2 rounded-full mb-6 leading-tight"
            style={{ background: INK, color: CREAM }}
          >
            Édition Tunisie · 5062 Lankershim, North Hollywood, CA
          </span>

          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 5.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Ton adresse US.
            <br />
            <span
              style={{
                fontFamily: "var(--font-pacifico), cursive",
                color: BLUE,
                fontWeight: 400,
              }}
            >
              depuis 35 TND/mois.
            </span>
          </h1>

          <p
            className="leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontSize: "17px", color: "rgba(45,16,15,0.72)" }}
          >
            Boîte postale virtuelle dans un vrai local commercial à Los Angeles.
            Scan de courrier, réception colis Amazon/UPS/FedEx, forwarding
            international vers Tunis. Plus : LLC américaine, notariat, expédition,
            livraison US. Tarif en dinars.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/virtual-mailbox"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: INK,
                color: CREAM,
                boxShadow: "0 6px 28px rgba(45,16,15,0.28)",
              }}
            >
              <IconMailbox className="w-5 h-5" stroke={CREAM} />
              Voir les boîtes virtuelles →
            </Link>
            <Link
              href="/shipping"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              <IconPackage className="w-5 h-5" />
              Demander un devis
            </Link>
          </div>

          <p className="text-[12px] mt-6" style={{ color: "rgba(45,16,15,0.55)" }}>
            Storefront physique ouvert · USPS CMRA enregistré · Notaire californien sur place
          </p>
        </div>
      </section>

      {/* VIRTUAL MAILBOX PRICING — POSTAGE STAMPS */}
      <section id="plans" className="py-14 sm:py-20 px-7 sm:px-6 overflow-hidden" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="font-black mb-2"
              style={{
                fontFamily: "var(--font-pacifico), cursive",
                fontSize: "1.2rem",
                color: BLUE,
              }}
            >
              Choisis ton forfait
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: INK,
              }}
            >
              Chaque forfait, une adresse réelle
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.5)" }}>
              Pas une P.O. Box — un numéro de suite réel utilisable partout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {MAILBOX_PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`group ${plan.primary ? "md:-mt-3" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <StampCard popular={plan.primary}>
                  {plan.primary && (
                    <div className="flex justify-center mb-4">
                      <span
                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: BLUE, color: "white" }}
                      >
                        ★ Le plus populaire
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-2">
                    <p
                      className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
                      style={{
                        color: plan.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.45)",
                      }}
                    >
                      {plan.note}
                    </p>
                    <h3
                      className="font-black text-2xl mb-1"
                      style={{
                        color: plan.primary ? CREAM : INK,
                        fontFamily: "var(--font-baloo), sans-serif",
                      }}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-end justify-center gap-1">
                      <span
                        className="font-extrabold"
                        style={{
                          fontSize: "2.75rem",
                          color: plan.primary ? CREAM : INK,
                          fontFamily: "var(--font-baloo), sans-serif",
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-sm mb-1.5"
                        style={{
                          color: plan.primary ? "rgba(247,230,194,0.45)" : "rgba(45,16,15,0.45)",
                        }}
                      >
                        TND / mois
                      </span>
                    </div>
                    <p
                      className="text-[10px] mt-1 font-bold"
                      style={{
                        color: plan.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.5)",
                      }}
                    >
                      Form 1583 USPS notarisé inclus
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
                          style={{
                            color: plan.primary ? "rgba(247,230,194,0.78)" : "rgba(45,16,15,0.78)",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/virtual-mailbox"
                    className="block text-center font-black py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: plan.primary ? BLUE : INK,
                      color: plan.primary ? "white" : CREAM,
                      boxShadow: plan.primary
                        ? "0 6px 20px rgba(51,116,133,0.35)"
                        : "none",
                    }}
                  >
                    Choisir {plan.name}
                  </Link>
                </StampCard>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm" style={{ color: "rgba(45,16,15,0.4)" }}>
            Forfait annuel = 2 mois offerts.{" "}
            <Link href="/tarifs" className="font-black hover:underline" style={{ color: BLUE }}>
              Voir tous les tarifs →
            </Link>
          </p>
        </div>
      </section>

      {/* BROWN WAVE — REVIEWS & SHIPPING */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 relative overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <AiTruck className="w-24 h-16" />
            </div>
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: GOLD }}
            >
              Avis & expéditions
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              }}
            >
              500 boîtes actives, 0 plainte
              <br />
              <span style={{ fontFamily: "var(--font-pacifico), cursive", color: GOLD, fontWeight: 400 }}>
                expéditions cette semaine.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
            {[
              { num: "500+", label: "Boîtes actives" },
              { num: "9 ans", label: "Au 5062 Lankershim" },
              { num: "47", label: "Scans hier (avg)" },
              { num: "5 USD", label: "Same-day NoHo" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: CREAM }}
                >
                  {s.num}
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em]" style={{ color: "rgba(247,230,194,0.65)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/temoignages"
              className="inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-2xl text-[14px]"
              style={{ background: GOLD, color: INK }}
            >
              Lire les témoignages
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 15 MINUTES */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 relative overflow-hidden" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: BLUE }}
            >
              Simple & rapide
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: INK,
              }}
            >
              De l&apos;inscription à ta suite en 15 minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                step: "01",
                title: "Choisis ton forfait",
                desc: "Basic, Standard ou Premium. Mois par mois, sans engagement long.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
                    <rect x="10" y="14" width="44" height="36" rx="6" fill="white" stroke={INK} strokeWidth="3" />
                    <rect x="18" y="24" width="18" height="3" rx="1.5" fill={BLUE} />
                    <rect x="18" y="32" width="28" height="3" rx="1.5" fill={INK} opacity="0.2" />
                    <rect x="18" y="38" width="22" height="3" rx="1.5" fill={INK} opacity="0.2" />
                    <circle cx="48" cy="45" r="7" fill={BLUE} />
                    <path d="M44 45 L47 48 L52 43" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Notarisation Form 1583",
                desc: "Apporte deux pièces d'identité. On notarise Form 1583 USPS via notre notaire californien — exigé pour chaque CMRA US.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
                    <rect x="8" y="16" width="48" height="32" rx="4" fill="white" stroke={INK} strokeWidth="3" />
                    <circle cx="20" cy="30" r="5" fill={BLUE} opacity="0.3" stroke={BLUE} strokeWidth="2" />
                    <rect x="30" y="25" width="20" height="3" rx="1.5" fill={INK} opacity="0.4" />
                    <rect x="30" y="32" width="16" height="3" rx="1.5" fill={INK} opacity="0.2" />
                    <rect x="14" y="40" width="36" height="3" rx="1.5" fill={INK} opacity="0.2" />
                    <path d="M48 8 L58 8 L58 18" stroke={BLUE} strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M44 12 L56 12" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Ta suite prête",
                desc: "Adresse Lankershim Blvd assignée + dashboard activé. Premier scan dans les 24h ouvrées.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" aria-hidden="true">
                    <rect x="10" y="20" width="44" height="28" rx="3" fill={CREAM} stroke={INK} strokeWidth="3" />
                    <path d="M10 20 L32 36 L54 20" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="48" r="9" fill={BLUE} />
                    <path d="M45 48 L48 51 L54 45" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((s, idx) => (
              <div
                key={s.step}
                className="text-center transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex justify-center mb-4">{s.icon}</div>
                <p
                  className="font-black mb-2"
                  style={{
                    fontFamily: "var(--font-pacifico), cursive",
                    color: BLUE,
                    fontSize: "1.1rem",
                  }}
                >
                  Étape {s.step}
                </p>
                <h3
                  className="font-extrabold text-[20px] mb-3"
                  style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.7)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/appel"
              className="inline-flex items-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Démarrer en 15 minutes
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="text-[12px] mt-3" style={{ color: "rgba(45,16,15,0.5)" }}>
              Aucune carte requise · Diagnostic en personne offert
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[11px] font-black uppercase tracking-[0.18em] mb-3"
              style={{ color: BLUE }}
            >
              Tout sous un même toit
            </p>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
              }}
            >
              Nos services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block p-5 rounded-2xl transition-all hover:-translate-y-1"
                style={{
                  background: s.primary ? INK : s.accent ?? "#fff",
                  color: s.primary ? CREAM : INK,
                  border: s.primary || s.accent ? "none" : "1px solid rgba(45,16,15,0.08)",
                  boxShadow: s.primary
                    ? "0 10px 40px rgba(45,16,15,0.25)"
                    : "0 4px 18px rgba(45,16,15,0.06)",
                }}
              >
                <span className="inline-flex mb-3">
                  <s.icon className="w-9 h-9" stroke={s.primary ? CREAM : INK} />
                </span>
                <h3
                  className="font-extrabold text-[16px] mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[13px] leading-relaxed opacity-85 mb-3">{s.body}</p>
                <p
                  className="text-[11px] font-black uppercase tracking-[0.12em]"
                  style={{ color: s.primary ? "#f8c84a" : BLUE }}
                >
                  En savoir plus →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BROWN WAVE — LAUNCH YOUR BUSINESS UNDER ONE ROOF */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 relative overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <AiMailbox className="w-20 h-24" />
            </div>
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: GOLD }}
            >
              Sous un même toit
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.05,
              }}
            >
              Lance ton business sous un même toit —
              <br />
              <span style={{ fontFamily: "var(--font-pacifico), cursive", color: GOLD, fontWeight: 400 }}>
                voir ce qui est inclus
              </span>
            </h2>
            <p className="mt-4 text-[15px] max-w-2xl mx-auto" style={{ color: "rgba(247,230,194,0.75)" }}>
              Adresse, LLC, EIN, banque, brand, site, social — un seul partenaire
              opère tout ça depuis North Hollywood. Pas 8 prestataires différents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: "Adresse US réelle", sub: "5062 Lankershim Blvd" },
              { label: "LLC Wyoming/DE/NM", sub: "Articles + EIN + Form 5472" },
              { label: "Banque + Stripe", sub: "Mercury, Relay, Wise prêts" },
              { label: "Brand + site live", sub: "Logo + Stripe checkout" },
              { label: "Notaire CA", sub: "Form 1583 USPS inclus" },
              { label: "Suivi mensuel", sub: "Conformité + content" },
              { label: "Same-day LA", sub: "Livraison 5 USD NoHo" },
              { label: "Diaspora en derja", sub: "WhatsApp français/arabizi" },
            ].map((b) => (
              <div
                key={b.label}
                className="p-5 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(247,230,194,0.06)",
                  border: "1px solid rgba(247,230,194,0.15)",
                }}
              >
                <p
                  className="font-extrabold text-[14px] mb-1"
                  style={{ color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {b.label}
                </p>
                <p className="text-[12px]" style={{ color: "rgba(247,230,194,0.65)" }}>
                  {b.sub}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 font-black px-7 py-3.5 rounded-2xl text-[15px]"
              style={{ background: GOLD, color: INK, boxShadow: "0 6px 28px rgba(248,200,74,0.35)" }}
            >
              Voir Business 4 000 TND
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION + DASHBOARD */}
      <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex mb-3">
              <AiPin className="w-12 h-14" />
            </div>
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.1rem", color: BLUE }}
            >
              Où on est
            </p>
            <h2
              className="font-extrabold tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: INK,
                lineHeight: 1.05,
              }}
            >
              5062 Lankershim Blvd
              <br />
              <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
                North Hollywood, CA
              </span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: "rgba(45,16,15,0.78)" }}>
              Storefront physique, 9 ans au même endroit, USPS-registered CMRA.
              C&apos;est l&apos;adresse qui passe Mercury, Stripe, Amazon Seller
              Central — pas une P.O. Box virtuelle.
            </p>
            <div className="mb-6">
              <OpenStatusPill />
            </div>
            <div className="space-y-3 text-[14px]" style={{ color: "rgba(45,16,15,0.78)" }}>
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" style={{ color: BLUE }} aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>5062 Lankershim Blvd, North Hollywood, CA 91601, USA</span>
              </p>
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: BLUE }} aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <span>Lun-Ven 9h30-13h30 · 14h-17h30 · Sam 10h-13h30 (heure de LA)</span>
              </p>
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: BLUE }} aria-hidden="true">
                  <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.18 4.11 1 1 0 0 1 4 3h4a1 1 0 0 1 1 .75 12.42 12.42 0 0 0 .68 2.69 1 1 0 0 1-.21 1L7.91 9.91a16 16 0 0 0 6 6l2.31-2.31a1 1 0 0 1 1-.21 12.42 12.42 0 0 0 2.69.68 1 1 0 0 1 .75 1z" />
                </svg>
                <a href="tel:+18185067744" className="font-bold hover:underline" style={{ color: INK }}>
                  +1 818 506 7744
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 12px 40px rgba(45,16,15,0.15)", background: CREAM }}
            >
              <StorefrontIllustration className="w-full h-auto block" />
            </div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ aspectRatio: "16/9", boxShadow: "0 12px 40px rgba(45,16,15,0.15)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.4!2d-118.3776!3d34.1664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA5JzU5LjAiTiAxMTjCsDIyJzM5LjMiVw!5e0!3m2!1sen!2sus!4v1700000000000"
                title="NOHO Mailbox location 5062 Lankershim Blvd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-extrabold mb-5"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Pas une boîte virtuelle de plus
          </h2>
          <p className="text-[15.5px] leading-relaxed max-w-2xl mx-auto mb-7" style={{ color: "rgba(45,16,15,0.78)" }}>
            5062 Lankershim Blvd, North Hollywood, Californie. Storefront
            physique réel, équipe sur place, notaire californien présent,
            enregistré USPS comme CMRA. Tu peux passer voir si tu vas à LA.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[12px]">
            {[
              "USPS CMRA enregistré",
              "Notaire californien sur place",
              "Réception UPS / FedEx / DHL / Amazon",
              "Storefront ouvert au public",
              "Dashboard scans en ligne",
              "Forwarding international",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full font-black"
                style={{ background: "#fff", color: INK, border: `1px solid ${INK}` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-extrabold mb-10 text-center"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Pour qui ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { Icon: IconCart, t: "Le diaspora acheteur", b: "Tu veux commander sur Amazon, eBay, Shein, Nordstrom — qui ne livrent pas en Tunisie. On reçoit pour toi, on consolide, on forward." },
              { Icon: IconBriefcase, t: "Le freelance", b: "Tu factures Upwork, Fiverr en USD. Tu as besoin d'une adresse US pour Stripe, pour ta LLC, pour recevoir les chèques." },
              { Icon: IconShoppingBag, t: "L'e-commerce", b: "Tu vends sur Etsy, Shopify aux États-Unis. L'adresse US réelle est requise par Stripe et par tes clients pour les retours." },
              { Icon: IconGradCap, t: "L'étudiant", b: "Tu candidates à une université US. Tu as besoin d'une adresse US pour SEVIS, pour recevoir ton I-20 physique, pour le visa F-1." },
              { Icon: IconHouse, t: "Le futur expat", b: "Tu prépares ton départ aux USA dans 6-12 mois. La boîte US t'attend ; tu reçois les premières paperasses avant même d'arriver." },
              { Icon: IconPlane, t: "Le voyageur fréquent", b: "Tu passes 3-6 mois par an aux USA. Une adresse fixe te simplifie la banque, Amazon, le tax filing si tu travailles." },
            ] as const).map((p) => (
              <div key={p.t} className="p-6 rounded-2xl" style={{ background: CREAM }}>
                <span className="inline-flex mb-3">
                  <p.Icon className="w-9 h-9" />
                </span>
                <h3 className="font-black text-lg mb-2" style={{ color: INK }}>{p.t}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'AGENT — the new major pillar */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: INK, color: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3"
            style={{ color: "#f8c84a" }}
          >
            Présence sur place, des deux côtés
          </p>
          <h2
            className="text-center font-extrabold mb-3"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            L&apos;Agent —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: "#f8c84a", fontWeight: 400 }}>
              en Tunisie et aux USA
            </span>
          </h2>
          <p className="text-center text-[15px] leading-relaxed max-w-2xl mx-auto mb-10 opacity-85">
            Équipe à Tunis pour les démarches locales, équipe à Los Angeles
            pour les démarches US. Trois solutions selon ton projet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
            {AGENT_SOLUTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block p-6 rounded-3xl transition-all hover:scale-[1.02]"
                style={{ background: CREAM, color: INK }}
              >
                <span className="inline-flex mb-3">
                  <s.icon className="w-11 h-11" />
                </span>
                <h3 className="font-black text-[19px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed mb-4 opacity-80">
                  {s.body}
                </p>
                <p className="text-[11px] font-black uppercase tracking-[0.12em] inline-flex items-center gap-1" style={{ color: BLUE }}>
                  Découvrir
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none">
                    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/agent"
              className="inline-flex items-center gap-2 font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: "#f8c84a", color: INK }}
            >
              Découvrir tout l&apos;Agent →
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTION BUSINESS — featured */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/business"
            className="block p-8 sm:p-10 rounded-3xl transition-all hover:scale-[1.01]"
            style={{
              background: "linear-gradient(135deg, #F7E6C2 0%, #F0DBA9 100%)",
              boxShadow: "0 4px 18px rgba(45,16,15,0.10)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-2" style={{ color: BLUE }}>
                  Business
                </p>
                <h2
                  className="font-extrabold mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  Société US ou TN, prête en 14 jours.
                </h2>
                <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: "rgba(45,16,15,0.78)" }}>
                  LLC américaine (Wyoming / Delaware / NM) <strong>ou</strong>{" "}
                  SARL tunisienne via cabinet KHIARI. EIN, identité de
                  marque, site, accompagnement Mercury et Stripe. Suivi
                  mensuel optionnel.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="flex items-baseline gap-1 justify-center md:justify-end mb-1">
                  <span className="font-extrabold" style={{ fontSize: "44px", lineHeight: 1, color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    4 000
                  </span>
                  <span className="font-black opacity-70" style={{ color: INK }}>TND</span>
                </div>
                <p className="text-[12px] opacity-70 mb-3" style={{ color: INK }}>une fois · pas d&apos;abonnement</p>
                <span className="inline-flex items-center gap-2 font-black px-6 py-3 rounded-xl text-[13px]" style={{ background: INK, color: CREAM }}>
                  Voir la Solution →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 sm:px-6 py-16 sm:py-20 text-center"
        style={{ background: CREAM }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Démarrer
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-8"
            style={{ color: "rgba(45,16,15,0.75)" }}
          >
            Trois entrées selon ce dont tu as besoin maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/virtual-mailbox"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{
                background: INK,
                color: CREAM,
                boxShadow: "0 6px 28px rgba(45,16,15,0.28)",
              }}
            >
              <IconMailbox className="w-5 h-5" stroke={CREAM} />
              Boîte virtuelle
            </Link>
            <Link
              href="/shipping"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              <IconPackage className="w-5 h-5" />
              Devis expédition
            </Link>
            <Link
              href="/appel"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              <IconCompass className="w-5 h-5" />
              Consultation gratuite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
