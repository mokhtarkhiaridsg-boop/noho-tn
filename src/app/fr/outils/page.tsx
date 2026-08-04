import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Outils — Calculateurs, comparateurs et guides gratuits",
  description:
    "Calculateur Form 5472, convertisseur TND ↔ USD, comparateur Mercury vs Relay, comparateur Wyoming vs Delaware vs NM, guide Stripe approval.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/outils",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/outils",
      "ar-TN": "https://nohomailboxtunis.com/ar/outils",
      "x-default": "https://nohomailboxtunis.com/outils",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const BODY = "#EBF2FA";

// -------- Inline brand SVG icons (no emojis) --------

const IconTools = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="20" width="36" height="22" rx="3" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <path d="M14 20 L14 12 C14 9 16 7 19 7 L29 7 C32 7 34 9 34 12 L34 20" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <path d="M14 32 L20 28 L20 36 Z" fill={BLUE} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="24" y="28" width="14" height="3" rx="1.5" fill={GOLD} stroke={INK} strokeWidth="1.2" />
  </svg>
);

const IconCalculator = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="4" width="32" height="40" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="12" y="9" width="24" height="9" rx="2" fill={GREEN} stroke={INK} strokeWidth="2" />
    <path d="M16 14 H22" stroke={CREAM} strokeWidth="2" strokeLinecap="round" />
    <rect x="13" y="22" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="21" y="22" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="29" y="22" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="13" y="30" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="21" y="30" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="29" y="30" width="5" height="11" rx="1" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <rect x="13" y="38" width="13" height="3" rx="1" fill={BLUE} opacity="0.55" />
  </svg>
);

const IconScales = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 8 L24 42" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="8" r="3" fill={GOLD} stroke={INK} strokeWidth="2" />
    <rect x="14" y="40" width="20" height="3" rx="1.5" fill={INK} />
    <path d="M9 14 L24 12 L39 14" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M5 22 L9 14 L13 22 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M35 22 L39 14 L43 22 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M5 22 C5 25 7 27 9 27 C11 27 13 25 13 22" stroke={BLUE} strokeWidth="2" fill="none" />
    <path d="M35 22 C35 25 37 27 39 27 C41 27 43 25 43 22" stroke={BLUE} strokeWidth="2" fill="none" />
  </svg>
);

const LIVE_CALCULATEURS = [
  {
    href: "/fr/outils/calculateurs/form-5472",
    title: "Calculateur pénalité Form 5472",
    desc: "Combien tu risques si tu oublies de déposer Form 5472 + 1120 pour ta LLC US.",
  },
  {
    href: "/fr/outils/calculateurs/tnd-usd",
    title: "Convertisseur TND ↔ USD",
    desc: "Compare ce que tu touches vraiment via Wise vs Mercury→BIAT vs Payoneer.",
  },
  {
    href: "/fr/outils/calculateurs/stripe-fees",
    title: "Frais Stripe vs Paddle vs Lemon Squeezy",
    desc: "Ton net après frais sur ton CA mensuel. Stripe est le moins cher en brut mais pas net.",
  },
  {
    href: "/fr/outils/calculateurs/roi-propriete-us",
    title: "ROI propriété US — cap rate + cash-on-cash",
    desc: "Cap rate, cash-on-cash, vacancy, property mgmt. Le vrai rendement vs ce que vend l&apos;agent.",
  },
  {
    href: "/fr/outils/calculateurs/bundle-vs-diy",
    title: "Business NOHO vs DIY",
    desc: "Combien tu économises (ou pas) à faire ta LLC toi-même vs prendre le Business (4 000 TND). Cash + temps + délai de lancement.",
  },
  {
    href: "/fr/outils/calculateurs/residence-fiscale",
    title: "Résidence fiscale TN / FR / US",
    desc: "Test de résidence selon Code IRPP, CGI article 4 B, Substantial Presence Test. Avec tiebreakers traités bilatéraux.",
  },
  {
    href: "/fr/outils/calculateurs/taxes-us-etat",
    title: "Taxes US par état — CA, NY, TX, FL",
    desc: "Income tax + franchise tax + sales tax nexus selon état où tu déclenches activité. Le piège California spécifique.",
  },
];

const LIVE_COMPARATEURS = [
  {
    href: "/fr/outils/comparateurs/banques-us",
    title: "Mercury vs Relay vs Brex vs Wise",
    desc: "Quelle banque US pour ta LLC tunisienne. Taux d&apos;acceptation et frais réels.",
  },
  {
    href: "/fr/outils/comparateurs/etats-llc",
    title: "Wyoming vs Delaware vs Nouveau-Mexique",
    desc: "Quel état pour ta LLC. Le vrai critère : acceptation bancaire, frais annuels, anonymat.",
  },
  {
    href: "/fr/outils/comparateurs/cross-border",
    title: "Wise vs Mercury vs Payoneer cross-border",
    desc: "Comment rapatrier ton USD en TN. Frais réels, délais, conformité BCT.",
  },
];

const LIVE_GUIDES = [
  { href: "/fr/blog/ouvrir-llc-tunisie-14-jours", title: "Ouvrir une LLC US depuis Tunis en 14 jours" },
  { href: "/fr/blog/mercury-bank-depuis-tunis-dossier-renforce", title: "Mercury depuis Tunis — le dossier qui passe" },
  { href: "/fr/blog/stripe-tunisie-refuse-contourner-llc-us", title: "Stripe refusé : la voie LLC US" },
  { href: "/fr/blog/form-5472-penalite-25000-usd", title: "Form 5472 — la pénalité $25 000" },
  { href: "/fr/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc", title: "Wyoming vs Delaware vs NM — l&apos;article complet" },
  { href: "/fr/blog/apostille-tn-us-guide-complet", title: "Apostille tunisienne pour les USA — depuis 2018" },
  { href: "/fr/blog/itin-w7-depuis-tunisie-sans-ssn", title: "ITIN W-7 depuis Tunis — sans SSN" },
  { href: "/fr/blog/carte-technologique-tunisienne-plafond-1000-tnd", title: "Carte technologique — pourquoi 1 000 TND/an ne suffit pas" },
  { href: "/fr/blog/autoentrepreneur-tunisien-vs-llc-americaine", title: "AE tunisien vs LLC américaine — la math honnête" },
  { href: "/fr/blog/mercury-compte-ferme-plan-b", title: "Mercury a fermé mon compte — le plan B en 72h" },
  { href: "/fr/blog/wyoming-annual-report-60-usd", title: "Wyoming annual report — l&apos;obligation qui dissout ta LLC" },
  { href: "/fr/blog/bct-decembre-2025-compte-usd-resident", title: "BCT décembre 2025 — compte USD résident en Tunisie" },
  { href: "/fr/blog/w8ben-vs-w9-non-us-person", title: "W-8BEN vs W-9 — quel formulaire signer" },
  { href: "/fr/blog/mercury-kyc-dossier-renforce-9-elements", title: "Mercury KYC — les 9 éléments du dossier renforcé" },
  { href: "/fr/blog/stripe-approval-9-item-stack-detail", title: "Stripe approval — le 9-item stack en détail" },
  { href: "/fr/blog/registered-agent-piege-rappel", title: "Le piège du registered agent qui ne te rappelle pas" },
  { href: "/fr/blog/traite-fiscal-tunisie-usa-1985", title: "Traité fiscal Tunisie-USA 1985 — ce qu&apos;il fait vraiment" },
  { href: "/fr/blog/oss-eu-tva-saas-exporteurs", title: "OSS EU TVA pour SaaS exporteurs depuis Tunis" },
  { href: "/fr/blog/carte-technologique-business-vs-perso", title: "Carte technologique business — la voie 10 000 TND/an" },
  { href: "/fr/blog/sales-tax-nexus-us-par-etat", title: "Sales tax nexus US par état — quand collecter" },
  { href: "/fr/blog/tunisian-american-operator-moat", title: "Le moat tunisien-américain vs doola/Stripe Atlas" },
  { href: "/fr/blog/stripe-atlas-vs-noho-deep-dive", title: "Stripe Atlas vs NOHO — la comparaison honnête 2026" },
  { href: "/fr/blog/operating-agreement-wyoming-smllc", title: "Operating Agreement Wyoming SMLLC — 12 sections" },
  { href: "/fr/blog/quand-ne-pas-former-llc-us", title: "Quand NE PAS former une LLC US — 5 cas d&apos;erreur" },
  { href: "/fr/blog/stripe-connect-platform-tunisiens", title: "Stripe Connect platform pour Tunisiens" },
  { href: "/fr/blog/bct-tunisie-2026-actualise", title: "BCT Tunisie 2026 — digest trimestriel" },
  { href: "/fr/blog/stripe-atlas-vs-noho-procedure-technique", title: "Atlas vs NOHO — procédure technique J+0 à J+60" },
  { href: "/fr/blog/mercury-fallback-waterfall-relay-brex-wise", title: "Mercury fallback waterfall — Plan B documenté" },
  { href: "/fr/blog/sarl-tn-vers-llc-us-sans-dissoudre", title: "SARL TN + LLC US en parallèle — combo sans dissolution" },
  { href: "/fr/blog/form-5472-self-filing-etape-par-etape", title: "Form 5472 self-filing — étape par étape sans CPA" },
  { href: "/fr/blog/diaspora-returnee-tunisien-reformer-tunisie", title: "Diaspora returnee — transition US → Tunisie" },
  { href: "/fr/blog/mercury-statement-form-5472-partie-iv", title: "Mercury statement → Form 5472 Part IV guide pratique" },
  { href: "/fr/blog/passer-noho-wyoming-vers-stripe-atlas-cas-inverse", title: "Wyoming LLC → C-Corp DE — 5 raisons légitimes de convertir" },
  { href: "/fr/blog/itin-w7-vs-caa-fondateur-tunisien", title: "ITIN W-7 vs CAA — choisir la voie d&apos;application" },
  { href: "/fr/blog/stripe-atlas-5k-credits-valeur-reelle", title: "Stripe Atlas 50K credits — la math honnête" },
  { href: "/fr/blog/cas-pratique-ecom-tunisien-annee-1", title: "Cas pratique Karim — e-com tunisien année 1" },
  { href: "/fr/blog/form-w8ben-ligne-par-ligne", title: "Form W-8BEN ligne par ligne — Stripe / Mercury / AdSense" },
  { href: "/fr/blog/noho-te-dit-non-discovery-call", title: "Quand NOHO te dit non — les 5 profils refusés" },
  { href: "/fr/blog/bct-ide-declaration-llc-us-tunisie", title: "BCT IDE déclaration — quand la LLC US doit s&apos;enregistrer en TN" },
  { href: "/fr/blog/tunisien-francais-binational-fiscalite-3-pays", title: "Binational FR-TN — fiscalité 3 pays avec LLC US" },
  { href: "/fr/blog/mercury-treasury-vs-checking", title: "Mercury Treasury vs Checking — 4-5% APY sur ton solde" },
  { href: "/fr/blog/fermer-llc-us-proprement-sans-penalite", title: "Fermer ta LLC US — 8 étapes sans pénalité IRS" },
  { href: "/fr/blog/premier-salarie-us-contractor-1099-vs-w2", title: "Premier salarié US — 1099 vs W-2 vs corp-to-corp" },
  { href: "/fr/blog/stripe-express-vs-standard-creators-tunisiens", title: "Stripe Express vs Stripe standard — créateurs tunisiens" },
  { href: "/fr/blog/delais-reels-solution-business-audit-honnete", title: "Délais réels Solution Business — audit honnête J+0 à J+60" },
  { href: "/fr/blog/visa-e2-tunisie-investisseur-procedure-detaillee", title: "Visa E-2 investisseur — voie tunisienne méconnue (procédure 2026)" },
  { href: "/fr/blog/noho-cabinet-khiari-integration-honnete", title: "NOHO + cabinet KHIARI — division du travail honnête US/TN" },
  { href: "/fr/blog/stripe-atlas-cash-math-year-1-honnete-vs-noho", title: "Stripe Atlas $500 + 50K credits vs NOHO — math cash honnête Y1" },
  { href: "/fr/blog/shopify-payments-tunisie-vs-llc-us-route", title: "Shopify Payments non dispo TN — voie LLC US qui débloque" },
  { href: "/fr/blog/amazon-seller-central-setup-tn-dossier", title: "Amazon Seller Central US depuis Tunis — procédure KYC + 6 pièges" },
  { href: "/fr/blog/wise-business-tunisie-2026-statut-reel", title: "Wise Business Tunisie 2026 — statut réel + combo Mercury+Wise+BCT" },
  { href: "/fr/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens", title: "Paddle vs Lemon Squeezy vs Stripe direct — MoR math SaaS TN" },
  { href: "/fr/blog/upwork-toptal-fiverr-llc-us-route-freelance-tunisien", title: "Upwork Toptal Fiverr — LLC US débloque +30-50% freelance TN" },
  { href: "/fr/blog/apostille-tunisienne-procedure-complete-mae", title: "Apostille tunisienne complète — procédure MAE + 5 pièges 2026" },
  { href: "/fr/blog/cin-tunisienne-mercury-kyc-documents-acceptes", title: "CIN tunisienne Mercury KYC — documents acceptés/refusés 2026" },
  { href: "/fr/blog/llc-us-pour-developpeur-tunisien-stack-complet", title: "LLC US pour développeur tunisien — stack opérationnel complet" },
  { href: "/fr/blog/etudiant-tunisien-arrivee-us-checklist-30-jours", title: "Étudiant tunisien — checklist arrivée US 30 jours" },
  { href: "/fr/blog/stripe-alternatives-high-risk-verticals-tunisien", title: "Stripe te refuse — 6 alternatives high-risk verticals" },
  { href: "/fr/blog/itin-w7-walkthrough-complet-2026", title: "ITIN W-7 — walkthrough complet 3 voies (2026)" },
  { href: "/fr/blog/carte-technologique-business-100k-tnd-2026", title: "Carte technologique business — jusqu'à 100K TND/an Startup Act" },
  { href: "/fr/blog/mercury-post-acquisition-stack-2026-tunisien", title: "Mercury 2026 — stack post-vague de fermetures" },
  { href: "/fr/blog/fatca-crs-impact-tunisien-llc-us-owner", title: "FATCA + CRS — ce que voient BCT/IRS/DGI sur ton LLC US" },
  { href: "/fr/blog/choisir-comptable-fiscaliste-tunisien-llc-us", title: "Comptable fiscaliste TN pour LLC US — 7 critères + 4 cabinets" },
  { href: "/fr/blog/diaspora-tn-canada-france-llc-us-strategy", title: "Diaspora TN Canada/France — stratégie LLC US 2026" },
  { href: "/fr/blog/youtube-adsense-monetization-tn-llc-us-setup", title: "YouTube AdSense monétisation — setup LLC US creator tunisien" },
  { href: "/fr/blog/github-sponsors-patreon-creator-economy-llc-us", title: "GitHub Sponsors + Patreon + BMAC + Substack — LLC US creator" },
  { href: "/fr/blog/1099-k-thresholds-2026-evolution-tunisien", title: "Form 1099-K — seuil 600 USD/an 2026, compliance LLC US" },
  { href: "/fr/blog/wise-business-multi-currency-flow-optimal", title: "Wise + Mercury — flow multi-currency optimal 50-200K USD/an" },
  { href: "/fr/blog/apple-developer-app-store-tn-llc-us-setup", title: "Apple Developer Program — setup App Store Connect via LLC US" },
  { href: "/fr/blog/cloudflare-r2-workers-pages-creator-tunisien", title: "Cloudflare R2/Workers/Pages — stack anti-AWS pour creator TN" },
  { href: "/fr/blog/stripe-tax-vs-taxjar-avalara-comparison", title: "Stripe Tax vs TaxJar vs Avalara — sales tax LLC US tunisien" },
  { href: "/fr/blog/tn-expat-retour-fiscalite-audit-dgi", title: "Retour expat TN — fiscalité 18 mois + audit DGI playbook" },
  { href: "/fr/blog/linkedin-ads-outbound-b2b-llc-us-tunisien", title: "LinkedIn Ads + Outbound B2B — acquisition via LLC US" },
];

const LIVE_LOOKUPS = [
  {
    href: "/fr/outils/lookups/llc-status",
    title: "Statut LLC sur Secretary of State",
    desc: "Wyoming, Delaware, Nouveau-Mexique — vérifie en 30 secondes Active / Delinquent / Dissolved.",
  },
  {
    href: "/fr/outils/lookups/ein-status",
    title: "Statut EIN sur IRS",
    desc: "CP 575, Form 147C, ligne IRS Business & Specialty 800-829-4933. Les 3 voies de verification.",
  },
  {
    href: "/fr/outils/lookups/hts-code",
    title: "HTS code douane TN → US",
    desc: "Comment classer ton produit pour l&apos;export US. USITC search + exemples (huile d&apos;olive, dattes, tapis berbère, t-shirt).",
  },
  {
    href: "/fr/outils/lookups/form-1583",
    title: "Form 1583 USPS",
    desc: "Le process complet de notarisation en personne pour autoriser NOHO à recevoir ton courrier. Pas d&apos;e-sign acceptée.",
  },
];

const COMING_SOON = [
  "Annuaire avocats US partenaires par état",
  "Annuaire CPAs US et expert-comptables TN partenaires",
  "Calculateur dépendance résidence fiscale FR / Italie / Espagne",
];

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Outils", url: "https://nohomailboxtunis.com/fr/outils" },
]);

export default function OutilsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconTools className="w-3.5 h-3.5" />
            Outils gratuits
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Calculateurs, comparateurs &{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              guides
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Toutes les ressources gratuites pour comprendre ton dossier
            avant même de nous parler. Pensé pour les Tunisiens, en
            français.
          </p>
        </div>
      </section>

      {/* Calculateurs */}
      <section id="calculateurs" className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <IconCalculator className="w-9 h-9" />
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Calculateurs en ligne
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LIVE_CALCULATEURS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded mb-3" style={{ background: GREEN, color: "#fff" }}>
                  En ligne
                </span>
                <h3 className="font-extrabold text-[17px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {c.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }} dangerouslySetInnerHTML={{ __html: c.desc }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparateurs */}
      <section id="comparateurs" className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <IconScales className="w-9 h-9" />
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Comparateurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LIVE_COMPARATEURS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded mb-3" style={{ background: GREEN, color: "#fff" }}>
                  En ligne
                </span>
                <h3 className="font-extrabold text-[17px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {c.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }} dangerouslySetInnerHTML={{ __html: c.desc }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lookups */}
      <section id="lookups" className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#FAFAF8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
              <circle cx="20" cy="20" r="13" fill={CREAM} stroke={INK} strokeWidth="2.5" />
              <path d="M30 30 L42 42" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
              <path d="M16 20 L19 23 L25 17" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Lookups & vérifications officielles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LIVE_LOOKUPS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded mb-3" style={{ background: GREEN, color: "#fff" }}>
                  En ligne
                </span>
                <h3 className="font-extrabold text-[17px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {l.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>
                  {l.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Templates teaser */}
      <section id="templates" className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <Link
            href="/fr/outils/templates"
            className="block p-8 sm:p-10 rounded-3xl transition-all hover:-translate-y-1"
            style={{ background: INK, color: CREAM, boxShadow: "0 14px 36px rgba(45,16,15,0.18)" }}
          >
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="max-w-2xl">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
                  Templates juridiques & fiscaux
                </p>
                <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
                  Operating Agreement, W-8BEN, Form 1583 et 6 autres
                </h2>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(247,230,194,0.85)" }}>
                  Tous les documents qu&apos;un fondateur tunisien d&apos;une
                  LLC US utilise dans sa première année. Bibliothèque en cours
                  de publication progressive.
                </p>
              </div>
              <span className="inline-block self-center text-[14px] font-bold underline" style={{ color: GOLD }}>
                Voir les templates →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-6"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Guides & articles publiés
          </h2>
          <ul className="space-y-2.5">
            {LIVE_GUIDES.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block p-4 rounded-xl transition-all hover:translate-x-1"
                  style={{ background: "#fff" }}
                >
                  <span className="text-[14px] font-bold" style={{ color: INK }} dangerouslySetInnerHTML={{ __html: g.title }} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[13.5px] mt-6" style={{ color: "rgba(45,16,15,0.65)" }}>
            <Link href="/fr/blog" className="font-bold underline" style={{ color: BLUE }}>
              Voir tous les articles du blog →
            </Link>
          </p>
        </div>
      </section>

      {/* En cours */}
      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            En cours de publication
          </h2>
          <p className="text-center text-[13.5px] mb-7" style={{ color: "rgba(45,16,15,0.65)" }}>
            {COMING_SOON.length} outils en cours de développement. Sortie progressive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {COMING_SOON.map((c) => (
              <div key={c} className="flex items-start gap-2 p-3 rounded-xl" style={{ background: CREAM }}>
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: BLUE }} />
                <span className="text-[13px]" style={{ color: INK }}>{c}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[13.5px] mt-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            Pour être notifié des sorties,{" "}
            <Link href="/fr/contact" className="font-bold underline" style={{ color: BLUE }}>
              écris-nous
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
