import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { AiBox, AiShield, AiBolt, AiPin, AiSparkle, AiHeart } from "@/components/AnimatedIcons";
import OpenStatusPill from "@/components/OpenStatusPill";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "L'Agent", url: "https://nohomailboxtunis.com/fr/agent" },
]);

const agentItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "L'Agent — Solutions NOHO",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Solution E-Commerce", url: "https://nohomailboxtunis.com/fr/agent/ecom" },
    { "@type": "ListItem", position: 2, name: "Solution Étudiants", url: "https://nohomailboxtunis.com/fr/agent/student" },
    { "@type": "ListItem", position: 3, name: "Solution Application Emploi", url: "https://nohomailboxtunis.com/fr/agent/jobs" },
  ],
};

export const metadata: Metadata = {
  title: "L'Agent — Ton agent américain et tunisien",
  description:
    "Quand tu ne peux pas être en Amérique, NOHO l'est pour toi. Solutions pour e-commerce, étudiants tunisiens, et candidats à l'emploi US — opérés depuis Tunis et Los Angeles.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/agent",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/agent",
      "ar-TN": "https://nohomailboxtunis.com/ar/agent",
      "x-default": "https://nohomailboxtunis.com/agent",
    },
  },
};

/* ─── Palette ─── */
const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";

/* ─── Inline icons ─── */

const IconArrow = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconHandshake = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M2 11 L6 9 L9 11 L12 9 L15 11 L18 9 L22 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14 L10 16.5 L13 15 L17 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const IconX = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6 L18 18 M18 6 L6 18" />
  </svg>
);

/* ─── Data ─── */

const STATS = [
  { num: "2", label: "équipes — Tunis + LA" },
  { num: "3", label: "solutions ciblées" },
  { num: "30 min", label: "appel découverte" },
  { num: "0 TND", label: "le premier appel" },
];

const SOLUTIONS = [
  {
    href: "/fr/agent/ecom",
    Icon: AiBox,
    title: "Solution E-Commerce",
    sub: "Vendre depuis Tunis vers TN ou US",
    desc: "Société TN (SARL/SUARL) ou US (LLC), banque locale ou Mercury, Stripe, Amazon Brand Registry, Etsy, Shopify, logistique TN ↔ US bout-en-bout.",
    persona: "Pour fondateurs e-com et marketplaces",
    accent: BLUE,
  },
  {
    href: "/fr/agent/student",
    Icon: AiShield,
    title: "Solution Étudiants",
    sub: "Université US ou internationale",
    desc: "Common App + I-20 + visa F-1 + entretien consulat de Tunis. Adresse US réelle pour SEVIS pendant 4 ans. Coordination avocat F-1 partenaire.",
    persona: "Pour bacheliers tunisiens visant les US",
    accent: GREEN,
  },
  {
    href: "/fr/agent/jobs",
    Icon: AiBolt,
    title: "Solution Emploi",
    sub: "Job TN-remote ou US",
    desc: "CV bilingue FR-EN-AR, numéro US pour callbacks recruteurs, coordination interviews, visa H-1B/O-1 ou autorisation TN, négociation d'offre.",
    persona: "Pour pros tunisiens visant l'international",
    accent: GOLD,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Tu écris ton besoin",
    body: "Décris ton projet en 3 phrases — sur WhatsApp ou pendant l'appel découverte gratuit. On confirme si on peut t'aider et avec quelle équipe (Tunis, LA, ou les deux).",
    Icon: AiHeart,
  },
  {
    n: "02",
    title: "On confirme scope + devis",
    body: "Périmètre clair, prix transparent en TND, délai annoncé. Aucune surprise. Tu signes seulement si tu es prêt — premier appel reste 0 TND, peu importe.",
    Icon: AiSparkle,
  },
  {
    n: "03",
    title: "On exécute + preuve",
    body: "Photo, vidéo, scan, reçu pour chaque étape. Tu vois ce qu'on fait sur le terrain depuis ton téléphone à Tunis. Aucun écran noir.",
    Icon: AiPin,
  },
];

const NOT_INCLUDED = [
  "Conseil juridique direct — référé à un avocat US ou TN partenaire (factures séparées)",
  "Conseil fiscal direct — référé à un CPA US ou expert-comptable TN partenaire",
  "Accès direct à tes comptes bancaires — on prépare les dossiers, tu signes et tu gères",
  "Procuration lourde sur engagements financiers — on agit toujours sur instruction écrite",
  "Garanties d'approbation Stripe / Mercury / visa — la décision reste à la banque ou au consulat",
  "Conseils d'investissement, trading, ou crypto — hors périmètre",
];

const TRUST = [
  {
    Icon: AiPin,
    title: "Bureau à Tunis",
    body: "Cabinet partenaire KHIARI à Tunis pour SARL/SUARL, démarches RCS, fiscalité TN, dépôt BCT. Vrai cabinet juridique, 30+ ans d'activité.",
  },
  {
    Icon: AiSparkle,
    title: "Boutique à Los Angeles",
    body: "5062 Lankershim Blvd, North Hollywood — adresse US réelle, USPS-registered CMRA. Équipe sur place pour notariat Form 1583, Amazon, Stripe.",
  },
  {
    Icon: AiHeart,
    title: "Pont des deux côtés",
    body: "Tu choisis : tout TN, tout US, ou combo. NOHO coordonne les deux côtés pour que tu ne sautes jamais dans l'avion sans raison.",
  },
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

export default function AgentHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentItemListJsonLd) }} />

      {/* HERO */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24"
        style={{ background: CREAM }}
      >
        {/* Decorative dotted backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(45,16,15,0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">
          {/* Left — copy */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-6"
              style={{ background: INK, color: CREAM }}
            >
              <IconHandshake className="w-3.5 h-3.5" />
              L&apos;Agent · Tunis + Los Angeles
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
              Ton agent,
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
              Quand tu ne peux pas y être, on y est pour toi — équipe sur place à Tunis pour le local, équipe à Los Angeles pour l&apos;américain. Trois solutions selon ton projet : e-commerce, université, emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/fr/appel"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: INK,
                  color: CREAM,
                  boxShadow: `0 4px 0 rgba(0,0,0,0.25), 0 10px 30px rgba(45,16,15,0.30)`,
                }}
              >
                Réserver l&apos;appel découverte
                <IconArrow className="w-4 h-4" />
              </Link>
              <Link
                href="/fr/contact"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: "#FFFFFF",
                  color: INK,
                  border: `2px solid ${INK}`,
                  boxShadow: `0 4px 0 ${INK}`,
                }}
              >
                Écris-nous d&apos;abord
              </Link>
            </div>
            <OpenStatusPill />
          </div>

          {/* Right — claymorphism stat cluster */}
          <div className="relative">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              aria-label="Statistiques clés de l'agent"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="p-5 sm:p-6 text-center"
                  style={clayCard}
                >
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
            {/* Floating badge */}
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
              Présence locale
            </div>
          </div>
        </div>
      </section>

      {/* 3 SOLUTION CARDS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Trois solutions
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
            Selon ton projet, ton chemin.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group flex flex-col p-6 sm:p-7 ${clayCardHover}`}
                style={clayCard}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: s.accent,
                    border: `2px solid ${INK}`,
                    boxShadow: `0 3px 0 ${INK}`,
                    color: s.accent === GOLD ? INK : "#FFFFFF",
                  }}
                >
                  <s.Icon className="w-7 h-7" />
                </div>
                <h3
                  className="font-extrabold text-[20px] mb-1.5"
                  style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[10.5px] font-black uppercase tracking-[0.14em] mb-3"
                  style={{ color: s.accent === GOLD ? "#8a6800" : s.accent }}
                >
                  {s.sub}
                </p>
                <p
                  className="text-[13.5px] leading-relaxed mb-4"
                  style={{ color: "rgba(45,16,15,0.78)" }}
                >
                  {s.desc}
                </p>
                <p
                  className="text-[11px] font-bold mb-5 italic"
                  style={{ color: "rgba(45,16,15,0.55)" }}
                >
                  {s.persona}
                </p>
                <span
                  className="mt-auto inline-flex items-center gap-2 font-black text-[13.5px]"
                  style={{ color: INK }}
                >
                  Découvrir
                  <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE — zigzag */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Comment ça marche
          </p>
          <h2
            className="text-center font-extrabold tracking-tight mb-12 sm:mb-16"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Trois étapes. Pas de mystère.
          </h2>

          <div className="relative">
            {/* Vertical dotted line */}
            <div
              aria-hidden="true"
              className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed pointer-events-none"
              style={{ borderColor: `rgba(45,16,15,0.18)` }}
            />

            <div className="space-y-8 sm:space-y-10">
              {STEPS.map((s, i) => {
                const isRight = i % 2 === 1;
                return (
                  <div
                    key={s.n}
                    className={`relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 ${
                      isRight ? "sm:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Step card */}
                    <div
                      className={`${isRight ? "sm:text-left sm:pl-8" : "sm:text-right sm:pr-8"} pl-16 sm:pl-0`}
                    >
                      <div
                        className="inline-block p-6 sm:p-7 max-w-md"
                        style={clayCard}
                      >
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            !isRight ? "sm:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: GOLD,
                              border: `2px solid ${INK}`,
                              boxShadow: `0 2px 0 ${INK}`,
                              color: INK,
                            }}
                          >
                            <s.Icon className="w-5 h-5" />
                          </div>
                          <p
                            className="font-extrabold leading-none"
                            style={{
                              fontFamily: "var(--font-baloo), sans-serif",
                              color: BLUE,
                              fontSize: "1.75rem",
                            }}
                          >
                            {s.n}
                          </p>
                        </div>
                        <h3
                          className="font-extrabold text-[18px] mb-2"
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

                    {/* Dot */}
                    <div
                      aria-hidden="true"
                      className="absolute top-7 left-7 sm:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
                      style={{
                        background: GOLD,
                        border: `2px solid ${INK}`,
                        boxShadow: `0 2px 0 ${INK}`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST — 3 cards */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Pourquoi NOHO
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
              <div
                key={t.title}
                className={`p-7 ${clayCardHover}`}
                style={clayCard}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: CREAM,
                    border: `2px solid ${INK}`,
                    boxShadow: `0 2px 0 ${INK}`,
                    color: INK,
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

      {/* HONEST SELF-DISCLOSURE — dark */}
      <section
        className="px-5 sm:px-6 py-16 sm:py-20"
        style={{ background: INK }}
      >
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
            Ce que l&apos;Agent NE fait PAS
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
            className="mt-6 text-center text-[12.5px] italic"
            style={{ color: "rgba(247,230,194,0.55)" }}
          >
            On préfère te dire ce qu&apos;on ne fait pas, plutôt que de
            promettre tout et livrer rien.
          </p>
        </div>
      </section>

      {/* FINAL CTA — gold corner accent */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 py-20 sm:py-24"
        style={{ background: CREAM }}
      >
        {/* Gold corner accent */}
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
            <IconHandshake className="w-3.5 h-3.5" />
            Premier appel — 0 TND
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
            Décris-nous ton projet.
          </h2>
          <p
            className="text-[15.5px] sm:text-[16.5px] leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: "rgba(45,16,15,0.78)" }}
          >
            30 minutes. On confirme ce qu&apos;on peut faire, à quel prix, dans
            quel délai. Tu repars avec un plan, même si tu ne signes pas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/fr/appel"
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
              href="/fr/contact"
              className="inline-flex items-center justify-center gap-2 font-black px-9 py-5 rounded-2xl text-[16px] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: "#FFFFFF",
                color: INK,
                border: `2px solid ${INK}`,
                boxShadow: `0 5px 0 ${INK}`,
              }}
            >
              WhatsApp / email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
