import type { Metadata } from "next";
import Link from "next/link";
import PricingPending from "@/components/PricingPending";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs — Adresse US réelle, Business, Suivi mensuel (dinars)",
  description:
    "Adresse US réelle : tarif confirmé avant paiement. Business 4 000 TND une fois. Suivi mensuel 1 200 TND/mois. Portail Étudiants 1 800 TND/an. Grille des autres services et politique de stockage et de réexpédition.",
  alternates: localeAlternates("/tarifs", "fr"),
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Tarifs", url: "https://nohomailboxtunis.com/fr/tarifs" },
]);

const PRODUCTS = [
  {
    name: "Business",
    price: "4 000",
    unit: "une fois",
    desc: "Société américaine ou tunisienne, EIN, brand, site, social. Livré en 14 à 21 jours.",
    href: "/fr/business",
  },
  {
    name: "Suivi mensuel",
    price: "1 200",
    unit: "/ mois",
    desc: "Conformité US mensuelle, courrier prioritaire, contenu, revue trimestrielle.",
    href: "/fr/suivi-mensuel",
  },
  {
    name: "Portail Étudiants",
    price: "1 800",
    unit: "/ année académique",
    desc: "Admissions US + visa F-1 + arrivée sur place. End-to-end depuis Tunis.",
    href: "/fr/etudiants",
  },
  {
    name: "Notariat (Form 1583)",
    price: "Inclus",
    unit: "avec mailbox",
    desc: "Signature vérifiée devant notre équipe, à notre comptoir de North Hollywood. Incluse avec l'adresse US réelle. Depuis la Tunisie, confirme ton éligibilité avant de payer. Notariat ponctuel possible.",
    href: "/fr/notary",
  },
];

const FEES = [
  { label: "Same-day NoHo (local LA)", sub: "Livraison < 3h dans North Hollywood", amount: "15 TND" },
  { label: "Same-day LA County", sub: "0-6h, toute zone LA County", amount: "28-90 TND" },
  { label: "Repacking colis", sub: "Re-emballage avant expédition", amount: "8 TND / colis" },
  { label: "Retour à l'expéditeur (US)", sub: "Si tu refuses la livraison", amount: "Frais postaux réels uniquement" },
  { label: "Destruction sécurisée", sub: "Shredding crosscut + certificat", amount: "Gratuit" },
  { label: "Notariat supplémentaire (non-Form 1583)", sub: "Document ponctuel via notaire CA", amount: "50 TND / document" },
  { label: "Apostille TN (via partenaire KHIARI Tunis)", sub: "MAE Tunis + traduction jurée", amount: "Facturé par KHIARI (~250 TND)" },
  { label: "Réactivation après suspension", sub: "Compte gelé pour impayé", amount: "25 TND" },
];

const POLICIES = [
  {
    q: "Stockage — combien de temps gratuit ?",
    a: "La durée de stockage gratuite pour le courrier et les colis et le montant d'un éventuel dépassement te sont confirmés par l'équipe avant tout paiement. On t'envoie un rappel avant toute facturation.",
  },
  {
    q: "Volume de colis — y a-t-il une limite ?",
    a: "Aucune limite en nombre, mais surcharge volumétrique au-delà de 1 pied cube par colis (volumes Amazon-style). Le montant dépend de la taille et t’est confirmé avant tout paiement. Les colis très grands (mobilier, vélo) peuvent être refusés — appelle-nous avant l'envoi.",
  },
  {
    q: "Réexpédition vers Tunisie — comment ça marche ?",
    a: "Par défaut, consolidation hebdomadaire le vendredi. Tu reçois tout le courrier de la semaine en un seul envoi DHL Express, économie significative vs envois individuels. Tu peux demander un envoi urgent à tout moment ; le montant t'est confirmé par l'équipe avant tout paiement.",
  },
  {
    q: "Frais postaux DHL / UPS / FedEx — markup ?",
    a: "Aucun. Tu paies les frais postaux exacts facturés par le transporteur (DHL, UPS, FedEx). Notre fee couvre uniquement la consolidation + manutention + emballage. Reçus DHL transparents fournis dans ton dashboard.",
  },
  {
    q: "Annulation — combien de temps de préavis ?",
    a: "Adresse US réelle : annulable à tout moment, prend effet à la fin du mois en cours. Suivi mensuel : mois par mois, aucun engagement annuel. Business 4 000 TND : non-remboursable une fois la LLC formée (les frais d'État ne sont pas récupérables).",
  },
  {
    q: "Refus de livraison à l'arrivée — que se passe-t-il ?",
    a: "Si le destinataire en Tunisie refuse la livraison (ou douane bloque), DHL nous retourne le colis. Le retour est facturé au coût du transporteur, confirmé avant tout paiement. Tu décides ensuite : restockage chez nous (montant confirmé par l'équipe avant tout paiement), destruction sécurisée (gratuit), ou re-expédition à autre adresse.",
  },
  {
    q: "Confidentialité du courrier — qui voit quoi ?",
    a: "Le scan automatique ne lit que l'enveloppe (expéditeur, date d'arrivée). L'ouverture + scan du contenu nécessite ton autorisation explicite via dashboard. Les scans sont stockés chiffrés. Le personnel storefront ne photocopie jamais de documents privés sans consigne écrite.",
  },
  {
    q: "Form 1583 USPS — pourquoi obligatoire et combien ça coûte ?",
    a: "Form 1583 est l'autorisation USPS pour qu'on reçoive ton courrier en ton nom. Obligatoire pour tout CMRA américain enregistré USPS. La vérification de signature exigée par l'USPS est incluse ; aujourd'hui elle se fait devant notre équipe, à notre comptoir (pas encore de signature à distance, et un notaire tunisien n'est pas accepté). Depuis la Tunisie, confirme ton éligibilité avant de payer. Si tu changes d'adresse en Tunisie, le montant d'une nouvelle vérification t'est confirmé par l'équipe avant tout paiement.",
  },
  {
    q: "Politiques applicables aux colis transitant via le storefront US",
    a: "Tout colis qui arrive au 5062 Lankershim (que ce soit pour réexpédition vers Tunis ou pour livraison locale LA) est soumis aux mêmes politiques : photo entrée + sortie, courrier stocké 90 jours ; pour les colis, la durée incluse et tout dépassement te sont confirmés par l'équipe avant tout paiement. Les colis livrés au TN store sont sous nos mêmes politiques pour la durée du transit.",
  },
  {
    q: "BCT et déclaration douanière (côté Tunisie) — qui gère ?",
    a: "Tu reçois le colis en Tunisie. La déclaration douanière est faite par DHL/UPS lors du dédouanement. Tu paies les droits + TVA Tunisie si applicables (variable selon nature et valeur déclarée). On peut t'envoyer une commercial invoice complète si demandé pour faciliter le passage.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* HERO */}
      <section className="relative px-5 sm:px-6 pt-14 pb-10 sm:pt-20 sm:pb-14 text-center" style={{ background: CREAM }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(45,16,15,0.07) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-3" style={{ color: BLUE }}>
            Tarifs
          </p>
          <h1
            className="font-extrabold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-baloo), sans-serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              color: INK,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Tarifs en dinars,
            <br />
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              sans surprise
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
            Aucun frais caché. Aucune scarcity inventée. Tu paies ce qui est
            sur la grille — et rien d&apos;autre.
          </p>
        </div>
      </section>

      <PricingPending locale="fr" id="adresse" />

      {/* PRODUCTS */}
      <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.1rem", color: BLUE }}
            >
              Autres produits
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Business, étudiants, services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRODUCTS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="block p-7 rounded-3xl transition-all hover:-translate-y-1"
                style={{ background: CREAM, boxShadow: "0 4px 18px rgba(45,16,15,0.08)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="font-extrabold text-[20px]"
                    style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <div className="text-right">
                    <p
                      className="font-extrabold text-[24px] leading-none"
                      style={{ color: BLUE, fontFamily: "var(--font-baloo), sans-serif" }}
                    >
                      {p.price}
                    </p>
                    <p className="text-[11px] font-bold" style={{ color: "rgba(45,16,15,0.5)" }}>
                      TND {p.unit}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
                  {p.desc}
                </p>
                <p className="text-[12px] font-black uppercase tracking-[0.12em] mt-4" style={{ color: BLUE }}>
                  En savoir plus →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#FAFAF8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: BLUE }}>
              À la carte
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Grille tarifaire
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "rgba(45,16,15,0.6)" }}>
              Tu paies seulement ce que tu utilises. Pas de surprise, pas de markup.
            </p>
          </div>
          <ul
            className="rounded-3xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(45,16,15,0.08)",
              boxShadow: "0 1px 0 rgba(51,116,133,0.04), 0 12px 32px rgba(45,16,15,0.06)",
            }}
          >
            {FEES.map((f, i) => (
              <li
                key={i}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 transition-colors hover:bg-[#F7E6C2]/30"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.05)" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold" style={{ color: INK }}>
                    {f.label}
                  </p>
                  {f.sub && (
                    <p className="text-[12px] mt-0.5" style={{ color: "rgba(45,16,15,0.55)" }}>
                      {f.sub}
                    </p>
                  )}
                </div>
                <span
                  className="text-[15px] font-black text-left sm:shrink-0 sm:text-right"
                  style={{ color: BLUE, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {f.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: "#F0EDE8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: BLUE }}>
              Politique de stockage et de réexpédition
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: INK,
              }}
            >
              Politiques
            </h2>
            <p className="mt-2 text-[13.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.6)" }}>
              Ces politiques s&apos;appliquent à tout colis transitant via notre
              storefront US (5062 Lankershim) — y compris les forwards vers Tunisie.
            </p>
          </div>
          <div className="space-y-3">
            {POLICIES.map((p, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <summary
                  className="px-5 py-4 cursor-pointer font-bold text-[14.5px] flex items-center justify-between gap-4"
                  style={{ color: INK, listStyle: "none" }}
                >
                  <span>{p.q}</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4 transition-transform group-open:rotate-180 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6 L8 10 L12 6" />
                  </svg>
                </summary>
                <div
                  className="px-5 pb-4 text-[14px] leading-relaxed"
                  style={{ color: "rgba(45,16,15,0.78)", borderTop: "1px solid rgba(45,16,15,0.05)" }}
                >
                  <p className="pt-3">{p.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 text-center" style={{ background: INK, color: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Une question avant de payer ?
          </h2>
          <p className="text-[15px] mb-6" style={{ color: "rgba(247,230,194,0.75)" }}>
            Consultation 30 minutes gratuite. On regarde ton dossier en
            personne — pas un robot, pas un formulaire.
          </p>
          <Link
            href="/fr/appel"
            className="inline-flex items-center gap-2 font-black px-7 py-4 rounded-2xl text-[15px]"
            style={{ background: GOLD, color: INK }}
          >
            Réserver l&apos;appel gratuit
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
              <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
