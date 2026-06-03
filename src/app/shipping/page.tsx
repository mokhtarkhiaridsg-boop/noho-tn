import type { Metadata } from "next";
import Link from "next/link";
import QuoteClient from "./QuoteClient";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Expédition", url: "https://noho.tn/shipping" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Expédition US et international — NOHO",
  serviceType: "Shipping & forwarding from Los Angeles to Tunisia and worldwide",
  provider: { "@type": "LocalBusiness", name: "NOHO Mailbox", address: { "@type": "PostalAddress", streetAddress: "5062 Lankershim Blvd", addressLocality: "North Hollywood", addressRegion: "CA", postalCode: "91601", addressCountry: "US" } },
  areaServed: ["US", "TN", "FR", "MA", "DZ"],
  description:
    "USPS Priority Mail, UPS Worldwide, FedEx International, DHL Express. Devis transparent — tu paies les frais postaux réels.",
};

export const metadata: Metadata = {
  title: "Expédition — Devis USPS, UPS, FedEx, DHL depuis Los Angeles",
  description:
    "Drop-off de colis au storefront, emballage, expédition US ou international. Devis transparent — tu paies les frais postaux réels. USPS Priority Mail, UPS Worldwide, FedEx International, DHL Express.",
  alternates: {
    canonical: "https://noho.tn/shipping",
    languages: {
      "fr-TN": "https://noho.tn/shipping",
      "ar-TN": "https://noho.tn/ar/shipping",
      "x-default": "https://noho.tn/shipping",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const BODY = "#EBF2FA";

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
  { name: "USPS Priority Mail International", time: "6-10 jours", price: "~35-60 USD", note: "Le moins cher. Tracking jusqu'à la douane US, suivi limité ensuite." },
  { name: "USPS Priority Mail Express International", time: "3-5 jours", price: "~60-90 USD", note: "Tracking complet jusqu'à Tunis. Délai garanti." },
  { name: "UPS Worldwide Expedited", time: "3-5 jours", price: "~70-110 USD", note: "Tracking complet, signature à la livraison." },
  { name: "FedEx International Economy", time: "4-6 jours", price: "~75-110 USD", note: "Bon rapport qualité-prix-tracking. Customs broker inclus." },
  { name: "DHL Express Worldwide", time: "2-3 jours", price: "~110-160 USD", note: "Le plus rapide. Tracking en temps réel. Cher mais fiable." },
];

const SERVICES: { Icon: IconCmp; t: string; b: string }[] = [
  { Icon: IconPackage, t: "Emballage standard", b: "Boîte cartonnée, bulle, scellage. Inclus dans le tarif USPS / UPS / FedEx." },
  { Icon: IconGift, t: "Emballage premium / fragile", b: "Double boîte, mousse, étiquetage 'fragile'. +15-25 USD." },
  { Icon: IconRefresh, t: "Consolidation multi-colis", b: "Plusieurs petits colis → un seul gros = économies sur frais postaux. +20-40 USD de handling." },
  { Icon: IconReceipt, t: "Customs forms + déclaration", b: "Customs forms remplis correctement (HTS codes pour USPS, commercial invoice pour UPS/FedEx/DHL). Inclus." },
  { Icon: IconCamera, t: "Photos avant expédition", b: "Photos du contenu emballé avant scellage. Utile pour assurance ou si litige. +5 USD/envoi." },
  { Icon: IconShield, t: "Assurance déclarée", b: "Couverture jusqu'à la valeur déclarée. Tarifs porteurs réels (USPS, UPS, etc.). Recommandé au-delà de 200 USD." },
];

export default function ShippingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconBoxSm className="w-4 h-4" />
            Expédition US et international · depuis Los Angeles
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Expédition
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto mb-7" style={{ color: "rgba(45,16,15,0.78)" }}>
            Drop-off de colis au storefront, emballage, expédition US ou
            international. Tu paies les frais postaux réels — pas de marge
            cachée.
          </p>
          <Link
            href="#quote"
            className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Demander un devis →
          </Link>
        </div>
      </section>

      {/* CARRIERS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            5 porteurs · Los Angeles → Tunis
          </h2>
          <p className="text-center text-[14px] mb-10" style={{ color: "rgba(45,16,15,0.65)" }}>
            Tarifs indicatifs pour 1 kg / dimensions standard (30 × 25 × 10 cm).
            Devis exact basé sur poids et dimensions réelles.
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
            Services additionnels
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

      {/* QUOTE FORM */}
      <section id="quote" className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Calcule en direct
          </p>
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Obtiens ton devis maintenant
          </h2>
          <p className="text-center text-[14px] mb-10 max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
            Glisse le curseur pour ton poids, choisis ta destination et ta vitesse.
            Devis en TND mis à jour en temps réel.
          </p>

          <QuoteClient />
        </div>
      </section>

      {/* OLD STATIC FORM (kept as fallback / WhatsApp backup) */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Devis sur-mesure sous 4h ouvrées
          </p>
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Cas complexe ?
          </h2>
          <p className="text-center text-[14px] mb-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            Volume inhabituel, fragile, douane particulière — on regarde ton cas
            spécifiquement et on te répond avec les options et tarifs réels.
          </p>

          <div className="p-7 rounded-3xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <p className="font-black text-[14px] mb-4" style={{ color: INK }}>
              Informations nécessaires pour le devis :
            </p>
            <ul className="space-y-2 text-[13.5px] mb-6 list-disc pl-5" style={{ color: INK }}>
              <li>Adresse d&apos;origine (où on récupère le colis ou il est déjà chez nous ?)</li>
              <li>Adresse de destination en Tunisie (ville + code postal)</li>
              <li>Poids estimé (kg)</li>
              <li>Dimensions approximatives (L × l × h en cm)</li>
              <li>Valeur déclarée pour la douane (USD)</li>
              <li>Contenu (catégorie : vêtements, électronique, livres, etc.)</li>
              <li>Délai souhaité (économique / standard / express)</li>
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/18185067744?text=Bonjour%2C%20j%27aimerais%20un%20devis%20d%27expedition%20depuis%20LA%20vers%20Tunis.%20Voici%20les%20details%20%3A%20%0A-%20Poids%3A%20%0A-%20Dimensions%3A%20%0A-%20Valeur%3A%20%0A-%20Contenu%3A%20%0A-%20Delai%20souhaite%3A%20"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-xl text-[14.5px] transition-all hover:scale-[1.02] text-center"
                style={{ background: GREEN, color: "#fff" }}
              >
                <IconChat className="w-5 h-5" />
                Devis via WhatsApp (réponse 2h)
              </a>
              <a
                href="mailto:hello@nohomailbox.org?subject=Devis%20expedition%20depuis%20noho.tn&body=Bonjour%2C%0A%0AJ%27aimerais%20un%20devis%20d%27expedition%20depuis%20Los%20Angeles%20vers%20la%20Tunisie.%0A%0AAdresse%20origine%20%3A%0AAdresse%20destination%20(Tunisie)%20%3A%0APoids%20(kg)%20%3A%0ADimensions%20(L%20%C3%97%20l%20%C3%97%20h%20cm)%20%3A%0AValeur%20declaree%20(USD)%20%3A%0AContenu%20%3A%0ADelai%20souhaite%20%3A%0A%0AMerci."
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-xl text-[14.5px] transition-all hover:scale-[1.02] text-center"
                style={{ background: INK, color: CREAM }}
              >
                <IconEnv className="w-5 h-5" />
                Devis via Email (réponse 24h)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INBOUND TO US */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: "#f8c84a" }}>
            Inbound — Tunisie → USA
          </p>
          <h2
            className="text-center font-extrabold mb-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Tu peux aussi envoyer depuis la Tunisie vers les USA
          </h2>
          <p className="text-[15px] leading-relaxed text-center max-w-xl mx-auto opacity-90">
            Si tu vends des produits tunisiens (artisanat, vêtements, fouta,
            huile d&apos;olive) à des clients américains via Etsy ou Shopify
            — on peut être ton receveur US + ton hub de réexpédition. Tes
            colis arrivent groupés depuis Tunis, on les stocke, on les
            expédie individuellement vers chaque client US au tarif domestique
            US (beaucoup moins cher que de la Tunisie directement).
          </p>
          <p className="text-[13px] mt-5 text-center opacity-70">
            Service idéal pour les marques Etsy / Shopify tunisiennes qui
            scalent vers le marché américain.
          </p>
        </div>
      </section>

      {/* CUSTOMS NOTE */}
      <section className="px-5 sm:px-6 py-12" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>
          <p className="font-black mb-2 inline-flex items-center gap-2"><IconWarn className="w-5 h-5" /> Note sur la douane</p>
          <p className="mb-2">
            <strong>Côté US (export) :</strong> depuis le 29 août 2025, fin du
            seuil de minimis de 800 USD. Tout colis vers les USA nécessite
            customs entry complète avec HTS codes. On s&apos;en charge ; on
            te fournit le commercial invoice.
          </p>
          <p>
            <strong>Côté Tunisie (import) :</strong> au-delà de 100 TND de
            valeur déclarée, droits de douane appliqués par la Poste
            Tunisienne ou le transporteur. On ne sous-déclare jamais (illégal
            côté US et côté TN). Tu déclares la valeur réelle.
          </p>
        </div>
      </section>
    </>
  );
}
