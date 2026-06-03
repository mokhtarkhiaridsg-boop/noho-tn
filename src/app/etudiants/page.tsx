import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { AiMailbox, AiShield, AiEnvelope, AiClock, AiPin } from "@/components/AnimatedIcons";
import OpenStatusPill from "@/components/OpenStatusPill";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Étudiants", url: "https://noho.tn/etudiants" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portail Étudiants — NOHO",
  serviceType: "US university admission services for Tunisian students",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://noho.tn" },
  areaServed: "TN",
  description:
    "Adresse US pour SEVIS et courrier I-20, accompagnement candidature, coordination visa F-1, préparation entretien consulat.",
  offers: {
    "@type": "Offer",
    price: "1800",
    priceCurrency: "TND",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1800",
      priceCurrency: "TND",
      unitText: "ANN",
    },
  },
};

export const metadata: Metadata = {
  title: "Portail Étudiants — Université US accompagnée depuis Tunis",
  description:
    "Pour les étudiants tunisiens qui visent une université américaine. Adresse US réelle pour SEVIS + I-20, accompagnement Common App, coordination visa F-1, préparation entretien consulat. 1 800 TND/année.",
  alternates: {
    canonical: "https://noho.tn/etudiants",
    languages: {
      "fr-TN": "https://noho.tn/etudiants",
      "x-default": "https://noho.tn/etudiants",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

/* ─── Inline SVG icon set (no emojis) ─── */

const IconGrad = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M2 9 L12 4 L22 9 L12 14 Z" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 11 L6 17 C6 18.5 9 19.5 12 19.5 C15 19.5 18 18.5 18 17 L18 11" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <path d="M22 9 L22 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconBook = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M4 5 C4 4 5 3 6 3 L11 3 L11 21 L6 21 C5 21 4 20 4 19 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M20 5 C20 4 19 3 18 3 L13 3 L13 21 L18 21 C19 21 20 20 20 19 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
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

const IconCalendar = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 10 L21 10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 3 L8 7 M16 3 L16 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconWallet = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 10 L18 10 C19 10 20 11 20 12 L20 14 C20 15 19 16 18 16 L3 16" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16" cy="13" r="1.2" fill="currentColor" />
  </svg>
);

const IconChat = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M4 5 C4 4 5 3 6 3 L18 3 C19 3 20 4 20 5 L20 14 C20 15 19 16 18 16 L10 16 L5 20 L5 16 C4 16 4 15 4 14 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

/* ─── Data ─── */

const STATS = [
  { num: "12", label: "mois de suivi" },
  { num: "8-12", label: "universités shortlistées" },
  { num: "5062", label: "Lankershim Blvd" },
  { num: "1 800", label: "TND par année" },
];

const STEPS = [
  {
    n: "01",
    title: "Pré-candidature",
    when: "J-12 mois",
    body: "Shortlist 8-12 universités cohérentes avec ton profil GPA + SAT/ACT + budget. Matrice de comparaison (frais, scholarships, taux d'admission, deadlines).",
    Icon: IconBook,
  },
  {
    n: "02",
    title: "Tests + dossier",
    when: "J-9 à J-6 mois",
    body: "Préparation SAT / TOEFL / IELTS, rédaction essais (personal statement, supplementals), recommandations, traduction relevés tunisiens.",
    Icon: IconGrad,
  },
  {
    n: "03",
    title: "Soumission Common App",
    when: "J-6 à J-3 mois",
    body: "Soumission centralisée. Coordination deadlines (Early Decision, Regular Decision, Rolling). Suivi statut de chaque dossier.",
    Icon: IconCalendar,
  },
  {
    n: "04",
    title: "Adresse US + I-20",
    when: "J-3 mois",
    body: "Une fois admis, l'université envoie ton Form I-20 par courrier physique au 5062 Lankershim. Scan le jour même + forward Tunis.",
    Icon: AiMailbox,
  },
  {
    n: "05",
    title: "Visa F-1",
    when: "J-2 mois",
    body: "Coordination avec avocat d'immigration US partenaire. Préparation entretien consulat de Tunis (questions types, documents, simulation).",
    Icon: AiShield,
  },
  {
    n: "06",
    title: "Arrivée + installation",
    when: "J-0",
    body: "Adresse US opérationnelle pendant 4 ans d'études. Courrier campus reçu, scanné, forwardé. Compte bank US optionnel pour bourses + jobs on-campus.",
    Icon: AiPin,
  },
];

const INCLUDED = [
  { title: "Adresse US réelle", body: "5062 Lankershim Blvd — pour SEVIS, I-20, courrier campus", Icon: AiMailbox },
  { title: "Scan le jour même", body: "Tout courrier US scanné en 24h ouvrées : I-20, lettres d'admission, F-1", Icon: AiEnvelope },
  { title: "Forward physique TN", body: "DHL Express vers Tunis ou ailleurs sur demande, frais postaux exacts", Icon: AiPin },
  { title: "Shortlist personnalisée", body: "Matrice 8-12 universités calibrée à ton GPA + tests + budget", Icon: IconBook },
  { title: "Accompagnement essais", body: "Common App + 8-12 supplementals révisés tour par tour", Icon: IconGrad },
  { title: "Coordination deadlines", body: "Early Decision, Regular Decision, Rolling — chaque deadline trackée", Icon: IconCalendar },
  { title: "Préparation consulat", body: "Simulation entretien Tunis + documents requis + questions types", Icon: AiShield },
  { title: "Avocat F-1 partenaire", body: "Coordination avec immigration lawyer US licensed pour visa F-1", Icon: AiShield },
  { title: "WhatsApp prioritaire", body: "Réponse < 4h ouvrées TN pendant toute la candidature", Icon: IconChat },
];

const NOT_INCLUDED = [
  "Garantie d'admission (aucun service sérieux ne peut garantir)",
  "Garantie d'obtention du visa F-1 (décision du consulat)",
  "Bourses (on candidate ; décision aux universités)",
  "Frais SAT / TOEFL / Common App (~300-500 USD à ta charge)",
  "Frais candidature universités (50-100 USD par université)",
  "Cours préparatoires SAT / TOEFL (référer prep schools TN)",
];

const UNIVERSITIES = [
  { tier: "Ivy League", list: ["Harvard", "Yale", "Princeton", "Columbia", "Penn", "Cornell", "Brown", "Dartmouth"] },
  { tier: "Top engineering & sciences", list: ["MIT", "Stanford", "Caltech", "Berkeley", "Carnegie Mellon", "Georgia Tech"] },
  { tier: "Top private (T20)", list: ["Chicago", "Northwestern", "Duke", "Johns Hopkins", "Vanderbilt", "Notre Dame", "Rice", "Washington (St. Louis)"] },
  { tier: "Top public + city", list: ["UCLA", "Michigan", "Virginia", "NYU", "USC", "Georgetown", "Emory", "Boston University"] },
  { tier: "Strong private (T50)", list: ["Tufts", "Wake Forest", "Boston College", "Case Western", "Tulane", "Northeastern", "George Washington"] },
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

export default function EtudiantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

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
              <IconGrad className="w-3.5 h-3.5" />
              Portail Étudiants · 1 800 TND/an
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
              Université aux US,
              <br />
              <span
                style={{
                  fontFamily: "var(--font-pacifico), cursive",
                  color: BLUE,
                  fontWeight: 400,
                }}
              >
                accompagnée depuis Tunis.
              </span>
            </h1>
            <p
              className="leading-relaxed mb-6 max-w-lg text-[16px] sm:text-[17px]"
              style={{ color: "rgba(45,16,15,0.78)" }}
            >
              Pour les étudiants tunisiens qui visent Harvard, MIT, Berkeley,
              NYU, Stanford. Adresse US réelle pour SEVIS, accompagnement
              Common App, coordination visa F-1, préparation entretien
              consulat de Tunis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/appel"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: INK,
                  color: CREAM,
                  boxShadow: `0 4px 0 rgba(0,0,0,0.25), 0 10px 30px rgba(45,16,15,0.30)`,
                }}
              >
                Réserver l&apos;appel candidature
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" aria-hidden="true">
                  <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                style={{
                  background: "#FFFFFF",
                  color: INK,
                  border: `2px solid ${INK}`,
                  boxShadow: `0 4px 0 ${INK}`,
                }}
              >
                Voir tous les tarifs
              </Link>
            </div>
            <OpenStatusPill />
          </div>

          {/* Right — claymorphism stat cluster */}
          <div className="relative">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              aria-label="Statistiques clés du portail"
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
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
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
            {/* Floating "OK" badge */}
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
              F-1 ready
            </div>
          </div>
        </div>
      </section>

      {/* WHY US ADDRESS MATTERS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
            style={{ color: BLUE }}
          >
            Pourquoi une adresse US
          </p>
          <h2
            className="font-extrabold tracking-tight mb-6"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            L&apos;adresse, c&apos;est ce qui fait passer ton dossier
            consulat — pas un détail.
          </h2>
          <div className="space-y-5 text-[15.5px] leading-[1.7]" style={{ color: "rgba(45,16,15,0.82)" }}>
            <p>
              <strong className="font-black" style={{ color: INK }}>Le Form I-20 arrive par courrier physique.</strong>{" "}
              Une fois admis, l&apos;université émet ton I-20 (le document
              d&apos;éligibilité SEVIS) et te l&apos;envoie par USPS ou
              express. Vers une adresse Tunisie : 2-4 semaines via la Poste
              Tunisienne, et parfois ça se perd. Sans I-20 physique, pas
              d&apos;entretien visa F-1.
            </p>
            <p>
              <strong className="font-black" style={{ color: INK }}>SEVIS exige une adresse stable.</strong>{" "}
              Pendant tes 4 ans, le SEVIS demande une adresse de référence
              déclarée. L&apos;adresse NOHO sert d&apos;adresse stable —
              utile entre les semestres, pendant l&apos;OPT, pendant un
              Inter-University Transfer.
            </p>
            <p>
              <strong className="font-black" style={{ color: INK }}>Courrier campus, banques US, paperwork F-1.</strong>{" "}
              Une fois aux USA, tu reçois relevés, chèques de remboursement,
              lettres administratives, documents IRS si tu travailles
              on-campus. On scanne tout le jour-même, forward ce qui doit
              l&apos;être, archive le reste.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p
              className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
              style={{ color: BLUE }}
            >
              12 mois · 6 étapes
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              De la pré-candidature
              <br />
              <span
                style={{
                  fontFamily: "var(--font-pacifico), cursive",
                  color: BLUE,
                  fontWeight: 400,
                }}
              >
                à ton premier cours sur le campus.
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — visible md+ */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
              style={{
                width: "3px",
                background: `repeating-linear-gradient(to bottom, ${INK} 0 8px, transparent 8px 14px)`,
              }}
            />

            <div className="space-y-6 md:space-y-12">
              {STEPS.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={s.n}
                    className={`md:grid md:grid-cols-2 md:gap-12 md:items-center`}
                  >
                    {/* Step card */}
                    <div
                      className={`${isLeft ? "md:order-1" : "md:order-2"} ${clayCardHover}`}
                      style={{ ...clayCard, padding: "1.5rem" }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{
                            background: CREAM,
                            border: `2px solid ${INK}`,
                            color: INK,
                          }}
                        >
                          <s.Icon className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-[11px] font-black tracking-[0.16em]"
                              style={{ color: BLUE }}
                            >
                              {s.n}
                            </span>
                            <span
                              className="text-[11px] font-bold"
                              style={{ color: "rgba(45,16,15,0.5)" }}
                            >
                              · {s.when}
                            </span>
                          </div>
                          <h3
                            className="font-black text-[18px] sm:text-[19px] mb-2 leading-tight"
                            style={{
                              color: INK,
                              fontFamily: "var(--font-baloo), sans-serif",
                            }}
                          >
                            {s.title}
                          </h3>
                          <p
                            className="text-[14px] leading-[1.65]"
                            style={{ color: "rgba(45,16,15,0.74)" }}
                          >
                            {s.body}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer (with dot marker on timeline) */}
                    <div className={`${isLeft ? "md:order-2" : "md:order-1"} hidden md:flex justify-center items-center relative`}>
                      <span
                        aria-hidden="true"
                        className="block w-5 h-5 rounded-full relative z-10"
                        style={{
                          background: GOLD,
                          border: `3px solid ${INK}`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — BENTO */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
              style={{ color: BLUE }}
            >
              Inclus dans 1 800 TND/an
            </p>
            <h2
              className="font-extrabold tracking-tight mb-3"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Neuf services, une facture, zéro surprise.
            </h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.55)" }}>
              Sur 12 mois d&apos;accompagnement, du shortlist au premier
              jour de campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className={`p-6 ${clayCardHover}`}
                style={clayCard}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: CREAM,
                    border: `2px solid ${INK}`,
                    color: INK,
                  }}
                >
                  <item.Icon className="w-7 h-7" />
                </div>
                <h3
                  className="font-black text-[15.5px] mb-2 leading-tight"
                  style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.6]"
                  style={{ color: "rgba(45,16,15,0.72)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAS INCLUS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="p-7 sm:p-10"
            style={{
              ...clayCard,
              background: "#FFFFFF",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(199,62,45,0.10)",
                  border: `2px solid ${RED}`,
                  color: RED,
                }}
              >
                <IconX className="w-6 h-6" />
              </div>
              <div>
                <p
                  className="text-[11px] font-black uppercase tracking-[0.18em] mb-1"
                  style={{ color: RED }}
                >
                  Pas inclus — honnêteté radicale
                </p>
                <h2
                  className="font-black tracking-tight"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 1.875rem)",
                    color: INK,
                    fontFamily: "var(--font-baloo), sans-serif",
                  }}
                >
                  Ce que personne de sérieux ne peut te vendre.
                </h2>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NOT_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] leading-[1.55]"
                  style={{ color: "rgba(45,16,15,0.78)" }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(199,62,45,0.18)", border: `1.5px solid ${RED}` }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES BY TIER */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
              style={{ color: BLUE }}
            >
              Où nos étudiants candidatent
            </p>
            <h2
              className="font-extrabold tracking-tight mb-3"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Top 50 US,
              <br className="sm:hidden" />
              <span
                style={{
                  fontFamily: "var(--font-pacifico), cursive",
                  color: BLUE,
                  fontWeight: 400,
                }}
              >
                {" "}réalistes avec un bon dossier.
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {UNIVERSITIES.map((group) => (
              <div
                key={group.tier}
                className="p-5 sm:p-6"
                style={clayCard}
              >
                <p
                  className="text-[11px] font-black uppercase tracking-[0.15em] mb-3"
                  style={{ color: BLUE }}
                >
                  {group.tier}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.list.map((u) => (
                    <span
                      key={u}
                      className="px-3 py-1.5 rounded-full text-[12.5px] font-black"
                      style={{
                        background: CREAM,
                        color: INK,
                        border: `1.5px solid ${INK}`,
                      }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-[13px] mt-8 italic max-w-2xl mx-auto"
            style={{ color: "rgba(45,16,15,0.55)" }}
          >
            On accompagne aussi community colleges (transferts UC system) et
            universités d&apos;État out-of-state — plus accessibles, ROI fort.
          </p>
        </div>
      </section>

      {/* HONEST DISCLAIMER */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: INK, color: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="flex-shrink-0">
              <AiClock className="w-16 h-16" />
            </div>
            <div>
              <p
                className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
                style={{ color: GOLD }}
              >
                Quand ce portail ne fait pas sens
              </p>
              <h2
                className="font-extrabold tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontFamily: "var(--font-baloo), sans-serif",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.1,
                }}
              >
                Trois cas où on te dira de patienter — ou
                de chercher ailleurs.
              </h2>
              <div className="space-y-4 text-[14.5px] leading-[1.7]" style={{ color: "rgba(247,230,194,0.85)" }}>
                <p>
                  <strong style={{ color: CREAM }}>Si ton GPA est sous 12/20 et ton SAT/ACT faible —</strong>{" "}
                  on accompagne mais réalistiquement vers community colleges.
                  Les top-50 demandent un dossier solide.
                </p>
                <p>
                  <strong style={{ color: CREAM }}>Si pas de budget pour tuition + living —</strong>{" "}
                  les universités US coûtent 30 000-80 000 USD/an
                  tout compris. Les bourses existent mais sont sélectives.
                </p>
                <p>
                  <strong style={{ color: CREAM }}>Si tu vises uniquement Harvard ou MIT —</strong>{" "}
                  4-7% d&apos;admission, ultra-compétitives. On candidate
                  mais en parallèle 6-8 «&nbsp;safety/reach raisonnable&nbsp;».
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — sticky-feel card */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="relative p-8 sm:p-12 text-center overflow-hidden"
            style={clayCard}
          >
            {/* corner accent */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 rotate-12"
              style={{
                background: GOLD,
                border: `2px solid ${INK}`,
                borderRadius: "20px",
                boxShadow: `0 3px 0 ${INK}`,
              }}
            />

            <div className="relative">
              <p
                className="text-[11px] font-black uppercase tracking-[0.22em] mb-3"
                style={{ color: BLUE }}
              >
                Démarrer la candidature
              </p>
              <h2
                className="font-extrabold tracking-tight mb-4"
                style={{
                  fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)",
                  color: INK,
                  fontFamily: "var(--font-baloo), sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.08,
                }}
              >
                30 minutes pour savoir si Harvard
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-pacifico), cursive",
                    color: BLUE,
                    fontWeight: 400,
                  }}
                >
                  est réaliste pour toi.
                </span>
              </h2>
              <p
                className="text-[15px] leading-[1.65] mb-7 max-w-lg mx-auto"
                style={{ color: "rgba(45,16,15,0.72)" }}
              >
                Appel gratuit. On évalue ton dossier (GPA, tests, intérêts)
                et on te dit honnêtement quelles universités sont
                réalistes — et lesquelles ne le sont pas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/appel"
                  className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                  style={{
                    background: INK,
                    color: CREAM,
                    boxShadow: `0 4px 0 rgba(0,0,0,0.25), 0 10px 30px rgba(45,16,15,0.28)`,
                  }}
                >
                  Réserver l&apos;appel candidature
                  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" aria-hidden="true">
                    <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/blog/etudiant-tunisien-arrivee-us-checklist-30-jours"
                  className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#337485]/30"
                  style={{
                    background: "#FFFFFF",
                    color: INK,
                    border: `2px solid ${INK}`,
                    boxShadow: `0 4px 0 ${INK}`,
                  }}
                >
                  Lire le guide arrivée US
                </Link>
              </div>
              <p
                className="text-[12px] mt-5 italic"
                style={{ color: "rgba(45,16,15,0.5)" }}
              >
                Aucune carte requise · Pas de pitch déguisé · Réponse {`<`} 24h
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
