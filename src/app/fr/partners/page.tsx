import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Programme affilié", url: "https://nohomailboxtunis.com/fr/partners" },
]);

const affiliateJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programme affilié NOHO",
  serviceType: "Affiliate / referral program",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://nohomailboxtunis.com/fr" },
  areaServed: ["TN", "FR", "MA", "DZ", "EG", "US"],
  description:
    "20% de commission sur chaque Solution Business signée + 8% MRR sur Suivi mensuel récurrent. Cookie 60 jours. Paiement Wise ou PayPal.",
};

export const metadata: Metadata = {
  title: "Programme affilié — 20% sur Solution Business, 8% MRR sur Suivi mensuel",
  description:
    "Recommande NOHO. Touche 20% de commission sur chaque Solution Business close et 8% du MRR sur le Suivi mensuel. Paiement Wise ou PayPal, cookie 60 jours.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/partners" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const BODY = "#EBF2FA";

// -------- Inline brand SVG icons (no emojis) --------

const IconHandshake = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 22 L14 18 L24 22 L34 18 L44 22 L44 32 L34 36 L24 32 L14 36 L4 32 Z" fill={CREAM} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M14 18 L14 36 M34 18 L34 36" stroke={INK} strokeWidth="2" opacity="0.35" />
    <path d="M20 26 L24 30 L28 26" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCoins = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <ellipse cx="20" cy="14" rx="14" ry="6" fill={GOLD} stroke={INK} strokeWidth="2.5" />
    <path d="M6 14 L6 22 C6 25 12 28 20 28 C28 28 34 25 34 22 L34 14" fill={GOLD} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 17 L16 11 M20 18 L20 10 M24 17 L24 11" stroke={INK} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <ellipse cx="32" cy="32" rx="12" ry="5" fill={GOLD} stroke={INK} strokeWidth="2.5" />
    <path d="M20 32 L20 38 C20 40 25 42 32 42 C39 42 44 40 44 38 L44 32" fill={GOLD} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M30 34 L30 30 M34 35 L34 29" stroke={INK} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const IconTrend = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="4" width="40" height="40" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M8 36 L18 26 L26 32 L40 14" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M30 14 L40 14 L40 24" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="18" cy="26" r="2.5" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <circle cx="26" cy="32" r="2.5" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconCookie = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 4 C36 4 44 12 44 24 C44 35 35 44 24 44 C13 44 4 35 4 24 C4 16 9 9 17 6 C17 10 20 13 24 13 C24 17 28 20 32 19 C32 21 33 23 35 23 C36 23 37 22 38 21 C40 22 41 24 41 26" fill={CREAM} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="16" cy="22" r="2.5" fill={INK} />
    <circle cx="28" cy="30" r="2.5" fill={INK} />
    <circle cx="32" cy="14" r="2" fill={INK} opacity="0.7" />
    <circle cx="20" cy="34" r="2" fill={INK} opacity="0.7" />
  </svg>
);

const IconBank = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 18 L24 6 L44 18 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="4" y="18" width="40" height="3" fill={INK} />
    <rect x="9" y="22" width="3" height="16" fill={BLUE} />
    <rect x="17" y="22" width="3" height="16" fill={BLUE} />
    <rect x="28" y="22" width="3" height="16" fill={BLUE} />
    <rect x="36" y="22" width="3" height="16" fill={BLUE} />
    <rect x="4" y="38" width="40" height="4" fill={INK} />
    <circle cx="24" cy="14" r="2" fill={GOLD} />
  </svg>
);

const PERKS = [
  { Icon: IconCoins, t: "20% sur Solution Business", d: "≈ 800 TND par client signé. Versé après expiration du droit de rétractation." },
  { Icon: IconTrend, t: "8% MRR sur Suivi mensuel", d: "≈ 96 TND/mois récurrent par client actif, tant que le client reste abonné." },
  { Icon: IconCookie, t: "Cookie 60 jours", d: "Si ton lead signe dans les 60 jours après avoir cliqué sur ton lien, c'est pour toi." },
  { Icon: IconBank, t: "Paiement Wise ou PayPal", d: "Versement mensuel. W-8BEN / W-9 requis dès 400 TND cumulés." },
];

const PARTNERS_FIT = [
  { t: "Créateurs TikTok TN", d: "Tu fais du contenu business ou diaspora ? Tes followers sont parfaits." },
  { t: "Podcasters & médias TN", d: "Sponsoring d'épisode + lien tracké dans la description." },
  { t: "Comptables & avocats TN", d: "Tu as déjà des clients qui demandent une LLC US ? On t'envoie 20% net. Programme partenaire disponible selon les règles professionnelles applicables à chaque métier." },
  { t: "Cabinets de gestion TN", d: "On bosse en marque blanche ou tu restes le contact direct." },
  { t: "Diaspora orgs (TAYP, ATCT, ATUGE)", d: "Programme institutionnel — contacte-nous." },
];

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(affiliateJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconHandshake className="w-3.5 h-3.5" />
            Programme affilié
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Recommande NOHO,{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              touche du récurrent
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            20% sur chaque Solution Business close. 8% du MRR sur le Suivi
            mensuel. Paiement transparent, cookie 60 jours, dashboard
            affilié.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Les conditions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERKS.map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.t} className="p-5 rounded-2xl" style={{ background: CREAM }}>
                  <div className="mb-3"><Icon className="w-8 h-8" /></div>
                  <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{p.t}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{p.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Qui sont nos partenaires
          </h2>
          <div className="space-y-3">
            {PARTNERS_FIT.map((p) => (
              <div key={p.t} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-black text-[15px] mb-1" style={{ color: INK }}>{p.t}</h3>
                <p className="text-[13.5px]" style={{ color: "rgba(45,16,15,0.78)" }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Devenir partenaire
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Écris-nous ton profil + ton audience. On revient sous 48h avec
            un lien tracké et un dashboard.
          </p>
          <Link
            href="mailto:partners@nohomailbox.org?subject=Programme%20affili%C3%A9%20NOHO%20TN"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.35)" }}
          >
            Postuler par email →
          </Link>
        </div>
      </section>
    </>
  );
}
