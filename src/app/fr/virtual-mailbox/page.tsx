import type { Metadata } from "next";
import Link from "next/link";
import StampCard from "@/components/StampCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

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
    "Adresse postale US réelle à Los Angeles. Scan de courrier le jour même. Réception colis (Amazon, UPS, FedEx, DHL). Forwarding international vers la Tunisie.",
  offers: [
    { "@type": "Offer", name: "Basic", price: "35", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "TND", unitText: "MON" } },
    { "@type": "Offer", name: "Standard", price: "75", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "75", priceCurrency: "TND", unitText: "MON" } },
    { "@type": "Offer", name: "Premium", price: "150", priceCurrency: "TND", priceSpecification: { "@type": "UnitPriceSpecification", price: "150", priceCurrency: "TND", unitText: "MON" } },
  ],
};

export const metadata: Metadata = {
  title: "Adresse US réelle — scan, réception colis, forwarding dès 35 TND/mois",
  description:
    "Adresse postale US réelle à Los Angeles. Scan de courrier le jour même via dashboard. Réception colis (Amazon, UPS, FedEx, DHL). Forwarding international vers la Tunisie. Forfait Free pay-as-you-go (wallet, colis hors USPS) ou 35, 75, 150 TND/mois.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/virtual-mailbox",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/virtual-mailbox",
      "ar-TN": "https://nohomailboxtunis.com/ar/virtual-mailbox",
      "x-default": "https://nohomailboxtunis.com/virtual-mailbox",
    },
  },
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
      ["Notarisation Form 1583", "Incluse au setup"],
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
  { Icon: IconCard, t: "Activer Stripe, Mercury, Wise Business", b: "Ces fournisseurs exigent une adresse US réelle (pas une boîte postale anonyme de mauvaise réputation). NOHO passe leurs vérifications." },
  { Icon: IconInbox, t: "Recevoir courrier business US", c: "IRS, banques, fournisseurs SaaS, partenaires — toute correspondance à ta LLC américaine arrive ici, scannée et notifiée en temps réel." },
  { Icon: IconGrad, t: "SEVIS et courrier universitaire", b: "Étudiants : ton I-20 arrive ici, scanné le jour-même. Pendant tes études, ton courrier campus reste géré entre les semestres." },
  { Icon: IconPaper, t: "Magazines, abonnements physiques", b: "The Economist, WSJ, Vogue, Wired — tous les abonnements US arrivent. Scan + forward selon préférence." },
  { Icon: IconHouse, t: "Adresse stable de référence", b: "Pour le SSN, l'ITIN, le US driver's license, les banques — une adresse stable vaut de l'or quand tu déménages souvent." },
];

const PACKAGE_PROCESS = [
  { n: 1, t: "Tu commandes en ligne", b: "Adresse de livraison : 5062 Lankershim Blvd, Suite [ton # de boîte], North Hollywood, CA 91601." },
  { n: 2, t: "Arrivée au storefront", b: "On reçoit physiquement (UPS, FedEx, USPS, DHL, Amazon). Signature acceptée. Notification dashboard immédiate." },
  { n: 3, t: "Tu choisis l'action", b: "Forward, ouvrir et scanner, stocker, recycler, retourner. Décide depuis ton dashboard." },
  { n: 4, t: "Consolidation (optionnel)", b: "Plusieurs colis ? On les regroupe en un seul envoi pour réduire les frais postaux internationaux." },
  { n: 5, t: "Expédition vers Tunis", b: "USPS Priority Mail International (~7-10 jours), UPS Worldwide Expedited (~3-5 jours), DHL Express (~2-3 jours). Tu choisis le délai vs prix." },
];

export default function VirtualMailboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
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
                      {p.yearPrice ? `${p.yearPrice} TND/an · Form 1583 inclus` : "Pay-as-you-go · wallet prépayé"}
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

      {/* TN MAILBOX CROSS-LINK */}
      <section className="px-5 sm:px-6 py-10 sm:py-12" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/fr/virtual-mailbox/tunisie"
            className="block p-6 sm:p-7 rounded-3xl transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #2D7A4A 0%, #1F5A35 100%)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(45,122,74,0.28)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(247,230,194,0.85)" }}>
                  Nouveau · pré-lancement 2026
                </p>
                <h2 className="font-extrabold text-[19px] sm:text-[22px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
                  Adresse réelle à Tunis arrive bientôt
                </h2>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(247,230,194,0.92)" }}>
                  Adresse réelle à Tunis pour ton courrier TN, ton enregistrement SARL,
                  ton inbound colis fournisseurs. Combo TN + US pour un pont des deux côtés.
                </p>
              </div>
              <span className="inline-flex items-center justify-center font-black px-5 py-3 rounded-xl text-[13px] whitespace-nowrap" style={{ background: "#fff", color: "#2D100F" }}>
                Réserver une place →
              </span>
            </div>
          </Link>
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
            {[
              { q: "Combien coûte un forwarding vers Tunis ?", a: "Frais postaux réels au tarif USPS / UPS / FedEx — pas de marge cachée. À titre d'exemple : USPS Priority Mail International pour un colis de 1 kg vers la Tunisie = ~35-50 USD selon dimensions. UPS Express ~80 USD. DHL Express ~110 USD." },
              { q: "Combien de temps pour un colis Amazon ?", a: "Amazon livre généralement en 1-3 jours au storefront LA. Une fois reçu, scan immédiat. Forwarding international : 3 jours (DHL Express) à 10 jours (USPS Priority)." },
              { q: "Vous ouvrez les colis pour les inspecter ?", a: "Seulement si tu le demandes (option 'ouvrir et scanner le contenu' depuis ton dashboard). Sinon, le colis reste fermé, on scanne juste l'extérieur." },
              { q: "Et la douane tunisienne ?", a: "Les colis personnels en dessous de 100 TND de valeur déclarée passent souvent sans taxes. Au-delà, droits de douane appliqués par la Poste Tunisienne. Tu déclares la valeur ; on ne sous-déclare jamais (illégal côté US et côté TN)." },
              { q: "Puis-je avoir plusieurs adresses ?", a: "Une seule boîte par compte de base. Pour des besoins multi-entités (LLC + perso, par exemple), on peut configurer des sous-comptes." },
              { q: "Quel délai pour activer la boîte ?", a: "48h après réception de ton Form 1583 notarisé et de ton premier paiement. Le Form 1583 prend 1-3 jours selon le notaire que tu choisis en Tunisie." },
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
            Réserve l&apos;appel de 15 min pour choisir ton forfait et démarrer
            le Form 1583. Boîte active sous 48h après notarisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/fr/appel"
              className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Démarrer ma boîte →
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
