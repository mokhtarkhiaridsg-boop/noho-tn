import type { Metadata } from "next";
import Link from "next/link";
import StampCard from "@/components/StampCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { localeAlternates } from "@/lib/seo";

const FAQ = [
  { q: "Combien coûte une réexpédition vers la Tunisie ?", a: "Le tarif du transporteur (USPS, UPS, FedEx ou DHL), plus 4 TND de manutention par envoi. Estimations indicatives pour un colis de 1 kg : environ 35 à 50 USD par USPS Priority Mail International, environ 80 USD par UPS, environ 110 USD par DHL Express. Le prix exact dépend du poids, des dimensions et du service ; tu le vois avant de valider l'envoi." },
  { q: "Combien de temps pour recevoir un colis en Tunisie ?", a: "Amazon livre généralement notre local en 1 à 3 jours. Pour la Tunisie, les délais indicatifs des transporteurs sont d'environ 2 à 5 jours ouvrés en express (DHL, UPS, FedEx) et de 1 à 2 semaines par USPS, plus le temps de dédouanement en Tunisie. Aucun délai n'est garanti." },
  { q: "Vous ouvrez les colis pour les inspecter ?", a: "Seulement si tu le demandes (option « ouvrir et scanner le contenu » depuis ton espace). Sinon, le colis reste fermé et on photographie seulement l'extérieur." },
  { q: "Et la douane tunisienne ?", a: "La douane tunisienne peut appliquer des droits et taxes à l'arrivée, selon la nature et la valeur du contenu. Ils sont payés à la réception en Tunisie et ne sont jamais inclus dans nos prix. On déclare toujours la valeur réelle sur les documents douaniers : sous-déclarer est illégal côté américain comme côté tunisien. Les règles officielles sont publiées sur douane.gov.tn." },
  { q: "Faut-il venir aux États-Unis pour ouvrir la boîte ?", a: "La poste américaine (USPS) exige le formulaire PS 1583 et deux pièces d'identité, dont une avec photo (le passeport est accepté). La signature doit être faite devant un employé de NOHO Mailbox ou devant un notaire commissionné aux États-Unis, en personne ou par vidéo en temps réel selon la règle USPS. Un notaire tunisien n'est pas accepté. Écris-nous avant de payer : on t'indique la marche à suivre pour ton cas." },
  { q: "Quand ma boîte est-elle active ?", a: "Dès que ton Form 1583 est signé selon la règle USPS, que tes deux pièces d'identité sont vérifiées et que ton premier paiement est reçu. Tu reçois alors ton numéro de boîte." },
  { q: "Puis-je avoir plusieurs adresses ?", a: "Une seule boîte par compte de base. Pour des besoins multi-entités (LLC et usage personnel, par exemple), on peut configurer des sous-comptes." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FROM_TUNISIA = [
  { n: 1, t: "Tu t'inscris en ligne", b: "Nom, e-mail et téléphone. Tu reçois un e-mail pour accéder à ton espace, et l'équipe te recontacte pour choisir le forfait." },
  { n: 2, t: "Identité et Form 1583", b: "L'USPS exige le formulaire PS 1583 et deux pièces d'identité, dont une avec photo (le passeport est accepté). La signature se fait devant un employé de NOHO Mailbox ou devant un notaire commissionné aux États-Unis. Un notaire tunisien n'est pas accepté." },
  { n: 3, t: "On reçoit ton courrier et tes colis", b: "Lettres et colis USPS, UPS, FedEx, DHL et Amazon (le forfait Free n'accepte pas l'USPS). Chaque arrivée apparaît sur ton espace en ligne." },
  { n: 4, t: "Tu décides depuis la Tunisie", b: "Scan du courrier, réexpédition vers la Tunisie au tarif du transporteur, regroupement de colis selon ton forfait, stockage ou destruction." },
];

const BILLED_SEPARATELY = [
  "La réexpédition à la demande : tarif du transporteur + 4 TND de manutention par envoi (formules hebdomadaire et urgente : voir la page tarifs).",
  "Les scans au-delà du quota de ton forfait : 2 TND par page.",
  "Le stockage des colis au-delà de la durée incluse : 6 TND par colis et par semaine.",
  "Les droits et taxes de la douane tunisienne, payés à l'arrivée.",
  "Les frais de notaire, si tu signes le Form 1583 devant un notaire commissionné aux États-Unis.",
];

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Adresse US réelle", url: "https://nohomailboxtunis.com/fr/virtual-mailbox" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Adresse US réelle — NOHO",
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
    "Adresse postale réelle à North Hollywood (Californie) pour les clients en Tunisie : réception du courrier et des colis, scan sur demande, réexpédition vers la Tunisie au tarif du transporteur.",
  offers: [
    { "@type": "Offer", name: "Basic", price: "35", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "TND", unitText: "MON" } },
    { "@type": "Offer", name: "Standard", price: "75", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "75", priceCurrency: "TND", unitText: "MON" } },
    { "@type": "Offer", name: "Premium", price: "150", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "150", priceCurrency: "TND", unitText: "MON" } },
  ],
};

export const metadata: Metadata = {
  title: "Adresse postale aux États-Unis depuis la Tunisie — dès 35 TND/mois",
  description:
    "Une vraie adresse postale aux États-Unis (North Hollywood, Californie), gérée depuis la Tunisie : courrier scanné, colis Amazon, UPS, FedEx et DHL reçus, réexpédition vers la Tunisie. Forfaits 35, 75 ou 150 TND/mois, ou Free à l'usage.",
  alternates: localeAlternates("/virtual-mailbox", "fr", { ar: true }),
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
const PLANS = [
  {
    name: "Free",
    price: "0",
    yearPrice: "",
    note: "Pay-as-you-go — colis sans abonnement",
    bullets: [
      ["Adresse de réception colis", "5062 Lankershim Blvd — reçois tes achats US"],
      ["Transporteurs privés uniquement", "UPS, FedEx, DHL, Amazon. Pas d'USPS — politiques applicables"],
      ["Paiement à l'usage", "Chaque service débité du wallet, aux tarifs de la grille"],
      ["Wallet prépayé", "Recharge minimum 50 TND"],
      ["Dashboard en ligne", "Notification à chaque colis reçu"],
    ],
  },
  {
    name: "Basic",
    price: "35",
    yearPrice: "350",
    note: "Pour usage personnel léger ou stockage adresse",
    bullets: [
      ["Adresse postale US réelle", "5062 Lankershim Blvd, North Hollywood, CA"],
      ["5 scans inclus", "Par mois. Au-delà : 2 TND/page"],
      ["Forwarding sur demande", "Frais postal réel + 4 TND de handling"],
      ["Stockage colis 30 jours", "Courrier 90 j inclus. Colis au-delà : 6 TND/colis/semaine"],
      ["Dashboard en ligne", "Voir tout le courrier reçu"],
      ["Form 1583 (USPS)", "Préparé avec toi au setup"],
    ],
  },
  {
    name: "Standard",
    price: "75",
    yearPrice: "750",
    note: "Le plus populaire chez les freelances et acheteurs Amazon",
    bullets: [
      ["Tout du Basic", "+ extras ci-dessous"],
      ["20 scans inclus", "Par mois. Au-delà : 2 TND/scan"],
      ["Réception colis incluse", "5 colis/mois inclus"],
      ["Forwarding hebdomadaire", "Auto-forward toutes les semaines"],
      ["Consolidation de colis", "On regroupe pour réduire les frais"],
      ["Stockage colis 60 jours", "Courrier 90 j inclus. Idéal acheteurs Amazon"],
    ],
    primary: true,
  },
  {
    name: "Premium",
    price: "150",
    yearPrice: "1 500",
    note: "Pour e-commerce, business actif, gros volumes",
    bullets: [
      ["Tout du Standard", "+ extras ci-dessous"],
      ["Scans illimités", "Aucune limite mensuelle"],
      ["Réception colis illimitée", "Aucune limite"],
      ["Priorité scan", "Scanné sous 2h pendant les heures de bureau LA"],
      ["Repacking inclus", "On repack les colis fragiles ou volumineux"],
      ["Stockage colis 90 jours", "Courrier + colis 90 j inclus"],
      ["Cloud storage scans", "Archive 3 ans accessible"],
      ["Tarifs préférentiels expédition", "Remise USPS / UPS / FedEx volume"],
    ],
  },
];

const USES: { Icon: IconCmp; t: string; b?: string; c?: string }[] = [
  { Icon: IconCart, t: "Acheter sur Amazon US, eBay, Shein, Nordstrom", b: "Ces sites ne livrent souvent pas en Tunisie. Avec une adresse US, tu commandes ce que tu veux." },
  { Icon: IconCard, t: "Recevoir le courrier de ta LLC et de tes comptes", b: "Une adresse de rue réelle pour la correspondance de ta société américaine. Chaque banque ou prestataire de paiement applique ses propres règles d'adresse : on ne peut pas garantir qu'il l'accepte." },
  { Icon: IconInbox, t: "Recevoir courrier business US", c: "IRS, banques, fournisseurs SaaS, partenaires — toute correspondance à ta LLC américaine arrive ici, scannée et notifiée en temps réel." },
  { Icon: IconGrad, t: "SEVIS et courrier universitaire", b: "Étudiants : ton I-20 arrive ici, scanné le jour-même. Pendant tes études, ton courrier campus reste géré entre les semestres." },
  { Icon: IconPaper, t: "Magazines, abonnements physiques", b: "The Economist, WSJ, Vogue, Wired — tous les abonnements US arrivent. Scan + forward selon préférence." },
  { Icon: IconHouse, t: "Adresse stable de référence", b: "Une adresse qui ne change pas quand tu déménages : pratique pour l'IRS, un courrier d'ITIN ou tes abonnements. Elle ne remplace pas une adresse de résidence quand un organisme en exige une." },
];

const PACKAGE_PROCESS = [
  { n: 1, t: "Tu commandes en ligne", b: "Adresse de livraison : 5062 Lankershim Blvd, Suite [ton # de boîte], North Hollywood, CA 91601." },
  { n: 2, t: "Arrivée au storefront", b: "On reçoit physiquement (UPS, FedEx, USPS, DHL, Amazon). Signature acceptée. Notification dashboard immédiate." },
  { n: 3, t: "Tu choisis l'action", b: "Forward, ouvrir et scanner, stocker, recycler, retourner. Décide depuis ton dashboard." },
  { n: 4, t: "Consolidation (optionnel)", b: "Plusieurs colis ? On les regroupe en un seul envoi pour réduire les frais postaux internationaux." },
  { n: 5, t: "Expédition vers la Tunisie", b: "USPS Priority Mail International, UPS, FedEx ou DHL Express : tu choisis entre prix et rapidité. Délais indicatifs des transporteurs, hors dédouanement, sans garantie." },
];

export default function VirtualMailboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* HERO — what the customer gets, in one screen */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Adresse postale aux États-Unis
          </p>
          <h1
            className="font-extrabold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", color: INK, lineHeight: 1.1 }}
          >
            Ton adresse postale réelle aux États-Unis, gérée depuis la Tunisie
          </h1>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.78)" }}>
            Une vraie adresse de rue au 5062 Lankershim Blvd, North Hollywood (Californie),
            avec ton numéro de boîte. On reçoit ton courrier et tes colis dans notre local,
            tu vois chaque arrivée sur ton espace en ligne, et tu décides : scan,
            réexpédition vers la Tunisie, stockage ou destruction.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-[12.5px] font-bold" style={{ color: INK }}>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Tarifs en dinars tunisiens (TND)</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Vérification d&apos;identité exigée par l&apos;USPS</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Réexpédition au tarif du transporteur</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="fr_virtual_mailbox_hero"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              Ouvrir ma boîte US →
            </Link>
            <WhatsAppCTA intent="adresse">Une question ? WhatsApp</WhatsAppCTA>
          </div>
        </div>
      </section>
      {/* PRICING — STAMP CARDS */}
      <section className="px-7 sm:px-6 pt-12 sm:pt-16 pb-14 sm:pb-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: BLUE }}
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
              4 forfaits, une adresse réelle
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.5)" }}>
              Annulables à tout moment. Forfait annuel = 2 mois offerts. Free = paiement à l’usage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {PLANS.map((p) => (
              <div key={p.name} className={`group ${p.primary ? "md:-mt-3" : ""}`}>
                <StampCard popular={p.primary}>
                  {p.primary && (
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
                      style={{ color: p.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.45)" }}
                    >
                      {p.note}
                    </p>
                    <h3
                      className="font-black text-2xl mb-1"
                      style={{ color: p.primary ? CREAM : INK, fontFamily: "var(--font-baloo), sans-serif" }}
                    >
                      {p.name}
                    </h3>
                    <div className="flex items-end justify-center gap-1">
                      <span
                        className="font-extrabold"
                        style={{
                          fontSize: "2.5rem",
                          color: p.primary ? CREAM : INK,
                          fontFamily: "var(--font-baloo), sans-serif",
                        }}
                      >
                        {p.price}
                      </span>
                      <span
                        className="text-sm mb-1.5"
                        style={{ color: p.primary ? "rgba(247,230,194,0.45)" : "rgba(45,16,15,0.45)" }}
                      >
                        TND / mois
                      </span>
                    </div>
                    <p
                      className="text-[10px] mt-1 font-bold"
                      style={{ color: p.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.5)" }}
                    >
                      {p.yearPrice ? `${p.yearPrice} TND/an · Form 1583 préparé avec toi` : "Pay-as-you-go · wallet prépayé"}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm mt-5 mb-7">
                    {p.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: p.primary ? BLUE : CREAM }}
                        >
                          <svg
                            className="w-2 h-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={p.primary ? "white" : INK}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span
                          className="leading-snug"
                          style={{ color: p.primary ? "rgba(247,230,194,0.85)" : "rgba(45,16,15,0.85)" }}
                        >
                          <span className="font-bold">{b[0]}</span>
                          <span
                            className="block text-[11.5px]"
                            style={{ color: p.primary ? "rgba(247,230,194,0.55)" : "rgba(45,16,15,0.55)" }}
                          >
                            {b[1]}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/fr/appel"
                    data-track="plan_select"
                    data-track-plan={p.name}
                    className="block text-center font-black py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: p.primary ? BLUE : INK,
                      color: p.primary ? "white" : CREAM,
                      boxShadow: p.primary ? "0 6px 20px rgba(51,116,133,0.35)" : "none",
                    }}
                  >
                    Choisir {p.name}
                  </Link>
                </StampCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="packages" className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            À quoi sert une boîte US ?
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

      {/* FROM TUNISIA — how it works, what is billed separately */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Comment ça marche depuis la Tunisie
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {FROM_TUNISIA.map((s) => (
              <li key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: CREAM }}>
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-extrabold"
                  style={{ background: INK, color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="p-6 rounded-3xl" style={{ background: BODY }}>
            <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>Ce qui est facturé à part</h3>
            <ul className="space-y-2 text-[14px] leading-relaxed list-disc pl-5" style={{ color: "rgba(45,16,15,0.82)" }}>
              {BILLED_SEPARATELY.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="text-[13px] mt-4" style={{ color: "rgba(45,16,15,0.65)" }}>
              Grille complète sur <Link href="/fr/tarifs" className="underline font-bold">la page tarifs</Link>.
              Pour les colis achetés en ligne, voir aussi{" "}
              <Link href="/fr/reexpedition-colis-usa-tunisie" className="underline font-bold">la réexpédition de colis vers la Tunisie</Link>.
            </p>
          </div>
        </div>
      </section>
      {/* PACKAGE HANDLING PROCESS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Réception colis (Amazon, eBay, Shein)
          </p>
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Comment un colis Amazon arrive jusqu&apos;à Tunis
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
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {FAQ.map((q, idx) => (
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
              NOHO mch ken colis
            </p>
            <h2
              className="font-extrabold mb-3"
              style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: CREAM }}
            >
              L&apos;adresse, c&apos;est juste la porte d&apos;entrée
            </h2>
            <p className="text-[14.5px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(247,230,194,0.72)" }}>
              La même équipe t&apos;accompagne pour tes études aux USA et pour créer
              ta présence business américaine. Un seul pont, des deux côtés.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fr/etudiants"
              className="group block p-6 rounded-3xl transition-all hover:-translate-y-1"
              style={{ background: CREAM, boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] mb-1.5" style={{ color: BLUE }}>
                Étudiants
              </p>
              <h3 className="font-extrabold text-[19px] mb-1.5" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                Étudier aux USA
              </h3>
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.72)" }}>
                Ndezzou m3ak fel dossier US — Common App, I-20, visa F-1, adresse
                pour le SEVIS.
              </p>
              <span className="inline-flex items-center gap-1.5 font-black text-[13px] transition-transform group-hover:translate-x-1" style={{ color: INK }}>
                Découvrir →
              </span>
            </Link>
            <Link
              href="/fr/business"
              className="group block p-6 rounded-3xl transition-all hover:-translate-y-1"
              style={{ background: CREAM, boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] mb-1.5" style={{ color: BLUE }}>
                Business
              </p>
              <h3 className="font-extrabold text-[19px] mb-1.5" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                Présence business US
              </h3>
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.72)" }}>
                Tounsi w t7eb presence US ? LLC, EIN, adresse pro et accompagnement
                à l&apos;ouverture des comptes.
              </p>
              <span className="inline-flex items-center gap-1.5 font-black text-[13px] transition-transform group-hover:translate-x-1" style={{ color: INK }}>
                Découvrir →
              </span>
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA intent="colis">Demander pour mes colis</WhatsAppCTA>
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
            Activer ton adresse US réelle
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Inscris-toi en ligne, ou réserve un appel de 15 min pour choisir ton
            forfait et préparer le Form 1583 avec l&apos;équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="fr_virtual_mailbox_footer"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-transform hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Ouvrir ma boîte US →
            </Link>
            <Link
              href="/fr/appel"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] border-2 transition-transform hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              Réserver un appel
            </Link>
            <Link
              href="/fr/tarifs"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              Tarifs détaillés
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
