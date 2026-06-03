import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Tout ce que NOHO Mailbox livre côté tunisien",
  description:
    "Adresse postale US, LLC américaine, banque US, accompagnement Stripe, portail étudiants, services d'agent visa/immigration. Catalogue complet pour les fondateurs et étudiants tunisiens.",
  alternates: { canonical: "https://noho.tn/services" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#C8A35A";
const BODY = "#EBF2FA";

type IconCmp = (props: { className?: string }) => React.ReactElement;

const IconMailbox: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="25" y="38" width="6" height="14" rx="1" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="19" y="50" width="18" height="4" rx="1" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="6" y="16" width="44" height="26" rx="5" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M6 26 Q6 8 28 8 Q50 8 50 26" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="48" y="16" width="3" height="14" rx="1" fill={BLUE} />
  </svg>
);
const IconBuilding: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="8" y="6" width="40" height="48" rx="2" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="14" y="12" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="24" y="12" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="34" y="12" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="14" y="22" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="24" y="22" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="34" y="22" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="14" y="32" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="34" y="32" width="6" height="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <rect x="22" y="40" width="10" height="14" fill={CREAM} stroke={INK} strokeWidth="2" />
  </svg>
);
const IconBank: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <path d="M4 22 L28 8 L52 22 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="6" y="46" width="44" height="4" rx="1" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="12" y="24" width="4" height="22" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="22" y="24" width="4" height="22" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="32" y="24" width="4" height="22" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="42" y="24" width="4" height="22" fill={BODY} stroke={INK} strokeWidth="2" />
  </svg>
);
const IconCard: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="4" y="14" width="48" height="30" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="4" y="20" width="48" height="6" fill={INK} />
    <rect x="10" y="34" width="14" height="4" rx="1" fill={BLUE} />
    <rect x="30" y="34" width="8" height="4" rx="1" fill={BLUE} opacity="0.6" />
  </svg>
);
const IconGrad: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <path d="M4 22 L28 10 L52 22 L28 34 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M14 26 L14 40 C14 42 20 44 28 44 C36 44 42 42 42 40 L42 26" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M52 22 L52 32" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="52" cy="34" r="2" fill={INK} />
  </svg>
);
const IconHandshake: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <path d="M4 24 L16 18 L24 24 L28 22 L32 24 L40 18 L52 24 L52 36 L40 38 L32 32 L24 32 L16 38 L4 36 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 18 L20 14 M40 18 L36 14" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <path d="M22 28 L34 28" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const IconClipboard: IconCmp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="12" y="10" width="32" height="42" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="18" y="6" width="20" height="10" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <path d="M18 24 L38 24 M18 30 L38 30 M18 36 L32 36 M18 42 L28 42" stroke={INK} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SECTIONS = [
  {
    id: "mailbox",
    Icon: IconMailbox,
    title: "Adresse postale US réelle",
    body: "5062 Lankershim Blvd, North Hollywood, CA — un vrai local commercial, USPS CMRA, équipe sur place. Scans le jour même, forward physique sur demande, réception colis (UPS, FedEx, DHL, Amazon). Inclus dans la Solution 12 mois ; renouvelable.",
    bullets: [
      "Scan le jour même + ping WhatsApp",
      "Réception colis tous opérateurs (UPS / FedEx / DHL / USPS)",
      "Forward physique vers Tunisie ou international",
      "Stockage colis 30 jours inclus",
      "Form 1583 USPS notarisé sur place",
    ],
  },
  {
    id: "llc",
    Icon: IconBuilding,
    title: "Formation LLC américaine",
    body: "Wyoming par défaut (le moins cher, le plus discret pour un non-résident). Delaware si VC-track. New Mexico si optimisation maximale (à discuter au cas par cas).",
    bullets: [
      "Articles of Organization filed auprès du Secretary of State",
      "EIN auprès de l'IRS (Form SS-4)",
      "Operating Agreement personnalisé",
      "Registered Agent inclus 12 mois",
      "Form 1583 USPS notarisé sur place",
    ],
  },
  {
    id: "banking",
    Icon: IconBank,
    title: "Banque US (Mercury, Relay, Wise)",
    body: "Mercury est la première option (taux d'approbation le plus élevé sur LLC non-résident bien structurée). Plan B documenté : Relay, Wise Business, Airwallex selon le profil et le rejet éventuel.",
    bullets: [
      "Préparation dossier complet (LLC + EIN + 1583 + profil)",
      "Soumission Mercury avec lettre d'intro renforcée",
      "Plan B Relay parallèle si rejet",
      "Wise Business comme rail de réception complémentaire",
      "Airwallex pour gros volumes ou e-com",
    ],
  },
  {
    id: "stripe",
    Icon: IconCard,
    title: "Stripe + paiements internationaux",
    body: "Stripe US sur LLC américaine = la combinaison qui marche pour les freelances et SaaS tunisiens. Soumission accompagnée. Plan B : Paddle / Lemon Squeezy / PayPal Business selon le cas.",
    bullets: [
      "Soumission Stripe US sur entité LLC",
      "Préparation du site web pour critères Stripe (mentions légales, terms, refund policy)",
      "Plan B Paddle si Stripe refuse (digital products)",
      "Plan B Lemon Squeezy (SaaS, info-products)",
      "PayPal Business comme rail tertiaire",
    ],
  },
  {
    id: "students",
    Icon: IconGrad,
    title: "Portail Étudiants",
    body: "Pour les étudiants tunisiens qui candidatent dans les universités américaines (Top 50). Adresse US pour SEVIS et I-20, accompagnement Common App, coordination visa F-1.",
    bullets: [
      "Shortlist 8-12 universités cohérentes avec le profil",
      "Accompagnement essais (Common App + supplementals)",
      "Adresse US pour SEVIS + courrier I-20",
      "Coordination avocat d'immigration US pour visa F-1",
      "Préparation entretien consulat de Tunis",
    ],
    href: "/etudiants",
    highlight: true,
  },
  {
    id: "agent",
    Icon: IconHandshake,
    title: "Services d'agent",
    body: "Coordination avec professionnels US et tunisiens pour les démarches administratives complexes : visa (B1/B2, F-1, E-2, O-1), immigration, traduction certifiée, apostille, notarisation.",
    bullets: [
      "Coordination avocat d'immigration US (B1/B2, F-1, E-2, O-1)",
      "Traduction certifiée AR/FR ↔ EN",
      "Apostille de documents tunisiens pour usage US",
      "Notarisation US sur place (notaire californien dans le storefront)",
      "Coordination expert-comptable américain pour Form 5472 + 1120",
    ],
  },
  {
    id: "compliance",
    Icon: IconClipboard,
    title: "Conformité US (annuelle)",
    body: "Une LLC américaine a des obligations annuelles que la plupart des fondateurs tunisiens découvrent trop tard. NOHO Suivi mensuel (1 200 TND/mois) coordonne le tout avec un CPA américain partenaire.",
    bullets: [
      "Form 5472 + Form 1120 pro forma annuels (pénalité 25 000 USD si oublié)",
      "Rapport annuel Wyoming (LLC dissoute si oublié)",
      "Renewal Registered Agent annuel",
      "Réception lettres IRS / FinCEN — scan le jour même",
      "Coordination CPA US pour la signature des déclarations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Catalogue complet
          </span>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Services
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.75)" }}>
            Tout ce que NOHO Mailbox livre côté tunisien — formation LLC,
            banque US, paiements internationaux, portail étudiants, services
            d&apos;agent, conformité annuelle.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto space-y-10">
          {SECTIONS.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="p-7 rounded-3xl scroll-mt-20"
              style={{
                background: s.highlight ? GOLD : CREAM,
                color: INK,
                border: s.highlight ? `2px solid ${INK}` : "none",
              }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0"><s.Icon className="w-12 h-12" /></div>
                <div className="flex-1">
                  <h2
                    className="font-extrabold text-[24px] mb-3"
                    style={{ fontFamily: "var(--font-baloo), sans-serif" }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-[14.5px] leading-relaxed mb-4">{s.body}</p>
                  <ul className="space-y-1.5 text-[13.5px] mb-4">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg viewBox="0 0 12 12" aria-hidden="true" className="w-3 h-3 mt-1.5 shrink-0">
                          <path d="M3 2 L8 6 L3 10" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {s.href && (
                    <Link
                      href={s.href}
                      className="inline-block font-black text-[13px] px-4 py-2 rounded-lg"
                      style={{ background: INK, color: CREAM }}
                    >
                      Voir détails →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Lequel pour toi ?
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Diagnostic 60 secondes — te dit quel service correspond à ta
            situation. Sans email, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostic"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Démarrer le diagnostic →
            </Link>
            <Link
              href="/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              Réserver l&apos;appel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
