import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Livraison", url: "https://nohomailboxtunis.com/fr/livraison" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Livraison locale + internationale — NOHO",
  serviceType: "Local same-day delivery + international forwarding for Tunisian customers",
  provider: {
    "@type": "PostalAndShippingService",
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
  areaServed: [
    { "@type": "City", name: "North Hollywood" },
    { "@type": "City", name: "Los Angeles" },
    { "@type": "Country", name: "Tunisia" },
  ],
  offers: [
    { "@type": "Offer", name: "Same-day NoHo", priceCurrency: "USD", price: "5" },
    { "@type": "Offer", name: "Same-day LA County", priceCurrency: "USD", price: "9" },
    { "@type": "Offer", name: "Réexpédition Tunis (consolidée)", priceCurrency: "USD", price: "45" },
  ],
};

export const metadata: Metadata = {
  title: "Livraison — Same-day LA + réexpédition Tunisie",
  description:
    "Livraison same-day à LA (NoHo $5, LA County $9-$28), réexpédition consolidée vers Tunisie hebdo, urgente DHL/UPS Express 24h. Tarifs transparents en USD + TND.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/livraison",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/livraison",
      "ar-TN": "https://nohomailboxtunis.com/ar/livraison",
      "x-default": "https://nohomailboxtunis.com/livraison",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const TIER_LOCAL = [
  {
    name: "Same-day NoHo",
    price: "5 USD",
    sub: "≈ 15 TND",
    desc: "Ramassage au storefront 5062 Lankershim + livraison locale à un destinataire dans North Hollywood / Studio City / Burbank.",
    time: "0-3 heures",
  },
  {
    name: "Same-day LA County",
    price: "9-28 USD",
    sub: "≈ 28-90 TND",
    desc: "Toute la zone LA County. Tarif dégressif selon distance — Westside, South Bay, Pasadena, Long Beach.",
    time: "0-6 heures",
  },
  {
    name: "Walk-in pickup",
    price: "Gratuit",
    sub: "Inclus dans forfait",
    desc: "Tu passes au storefront 5062 Lankershim pendant les heures d'ouverture. Aucun frais. Idéal si tu es de passage à LA.",
    time: "Sur place",
  },
];

const TIER_INTL = [
  {
    name: "Réexpédition Tunis consolidée",
    price: "45-90 USD",
    sub: "≈ 140-280 TND + frais postaux DHL réels",
    desc: "On consolide tout ton courrier de la semaine en un envoi unique. Envoyé chaque vendredi via DHL Express vers Tunis.",
    time: "Hebdomadaire · 5-7 jours en transit",
  },
  {
    name: "Urgent 24-48h",
    price: "65-150 USD",
    sub: "≈ 200-470 TND + frais postaux",
    desc: "Document critique (Mercury card, IRS letter, EIN CP 575). DHL Express Worldwide Priority, suivi temps réel.",
    time: "24-48 heures",
  },
  {
    name: "Standard économique",
    price: "30-60 USD",
    sub: "≈ 95-190 TND + frais postaux",
    desc: "USPS First-Class International ou UPS Standard. Délai plus long mais coût optimisé.",
    time: "10-21 jours",
  },
];

export default function LivraisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
              <path d="M3 7h11v9H3zM14 11h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
            Livraison
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.25rem, 6.5vw, 4.5rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Livraison same-day à LA,
            <br />
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              réexpédition Tunis hebdo.
            </span>
          </h1>
          <p className="leading-relaxed mb-8 max-w-xl mx-auto text-[16px]" style={{ color: "rgba(45,16,15,0.78)" }}>
            Local LA : 5 USD same-day NoHo, 9-28 USD LA County.
            International : réexpédition consolidée Tunis le vendredi
            (DHL Express, 5-7 jours), urgent 24-48h disponible.
          </p>
          <Link
            href="/fr/appel"
            className="inline-flex items-center gap-2 font-black px-7 py-3.5 rounded-2xl text-[15px]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Planifier une livraison
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
              <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* LOCAL TIERS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: BLUE }}
            >
              À Los Angeles
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: INK,
              }}
            >
              Livraison locale same-day
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.55)" }}>
              Quand tes clients ou tes partenaires sont à LA — on bouge le colis aujourd&apos;hui.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIER_LOCAL.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: CREAM, boxShadow: "0 6px 22px rgba(45,16,15,0.08)" }}
              >
                <h3 className="font-extrabold text-[20px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {t.name}
                </h3>
                <p className="font-extrabold text-[28px] mb-0.5" style={{ color: BLUE }}>
                  {t.price}
                </p>
                <p className="text-[12px] font-bold mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
                  {t.sub} · {t.time}
                </p>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL TIERS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: BLUE }}
            >
              Vers la Tunisie
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                color: INK,
              }}
            >
              Réexpédition internationale
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.55)" }}>
              On consolide pour économiser, ou on envoie en urgent — selon ton besoin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIER_INTL.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl p-7"
                style={{ background: "#fff", boxShadow: "0 6px 22px rgba(45,16,15,0.10)" }}
              >
                <h3 className="font-extrabold text-[19px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {t.name}
                </h3>
                <p className="font-extrabold text-[26px] mb-0.5" style={{ color: BLUE }}>
                  {t.price}
                </p>
                <p className="text-[12px] font-bold mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
                  {t.sub} · {t.time}
                </p>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-extrabold tracking-tight mb-8 text-center"
            style={{
              fontFamily: "var(--font-baloo), sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: INK,
            }}
          >
            Politiques de stockage et de réexpédition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Stockage inclus",
                desc: "Courrier : 90 jours gratuits. Colis : 30 / 60 / 90 jours selon le forfait. Au-delà : 6 TND/colis/semaine — voir la grille tarifaire.",
              },
              {
                title: "Volume colis",
                desc: "Colis &lt; 1 pied cube acceptés sans surcharge. Au-delà, surcharge volumétrique 5-15 USD/colis selon taille.",
              },
              {
                title: "Photo entrée + sortie",
                desc: "Chaque colis est photographié à réception et avant expédition. Preuves visuelles dans ton dashboard.",
              },
              {
                title: "Frais postaux pass-through",
                desc: "Tu paies les frais postaux DHL/UPS/FedEx exacts (pas de markup). Notre fee est le frais de consolidation + manutention.",
              },
              {
                title: "Annulation flexible",
                desc: "Une livraison planifiée mais pas encore expédiée peut être annulée sans frais. Si déjà expédiée : non-remboursable côté postal.",
              },
              {
                title: "Refus à la livraison",
                desc: "Si le destinataire refuse la livraison, on récupère le colis (frais de retour 8-15 USD). Tu décides : restock ou destruction sécurisée.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(247,230,194,0.5)", border: "1px solid rgba(45,16,15,0.10)" }}
              >
                <h3 className="font-extrabold text-[15px] mb-2" style={{ color: INK }}>
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: INK, color: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Une livraison à programmer ?
          </h2>
          <p className="text-[15px] mb-6" style={{ color: "rgba(247,230,194,0.75)" }}>
            On t&apos;envoie un devis avec frais postaux exacts en moins de 4 heures (heures ouvrées TN).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/fr/appel"
              className="inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-2xl text-[14px]"
              style={{ background: GOLD, color: INK }}
            >
              Réserver l&apos;appel
            </Link>
            <Link
              href="/fr/shipping"
              className="inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-2xl text-[14px]"
              style={{ background: "rgba(247,230,194,0.10)", color: CREAM, border: "1px solid rgba(247,230,194,0.30)" }}
            >
              Devis détaillé →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
