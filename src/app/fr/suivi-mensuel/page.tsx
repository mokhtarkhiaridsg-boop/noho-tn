import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Suivi mensuel", url: "https://nohomailboxtunis.com/fr/suivi-mensuel" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Suivi mensuel — NOHO",
  serviceType: "Monthly operational partner for US LLC owned by Tunisian residents",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://nohomailboxtunis.com/fr" },
  areaServed: "TN",
  description:
    "Conformité US mensuelle (Form 5472, Wyoming annual report, registered agent), courrier prioritaire, brand, contenu social, revue trimestrielle.",
  offers: {
    "@type": "Offer",
    price: "1200",
    priceCurrency: "TND",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1200",
      priceCurrency: "TND",
      unitText: "MON",
    },
  },
};

export const metadata: Metadata = {
  title: "Suivi mensuel — 1 200 TND/mois",
  description:
    "Le partenaire opérationnel de ta LLC américaine. Conformité US mensuelle, courrier prioritaire, brand, contenu, revue trimestrielle. 1 200 TND/mois, mois par mois, sans engagement annuel.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/suivi-mensuel",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/suivi-mensuel",
      "ar-TN": "https://nohomailboxtunis.com/ar/suivi-mensuel",
      "x-default": "https://nohomailboxtunis.com/suivi-mensuel",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const RED = "#C73E2D";
const GREEN = "#2D7A4A";

const DELIVERABLES = [
  {
    category: "Conformité US",
    items: [
      "Rappel mensuel des échéances IRS et Wyoming",
      "Préparation Form 5472 + Form 1120 pro forma avec CPA US partenaire",
      "Rapport annuel Wyoming déposé à temps",
      "Suivi agent enregistré (renewal + lettres reçues forwardées)",
    ],
  },
  {
    category: "Courrier et adresse",
    items: [
      "Courrier prioritaire — scan le jour même + ping WhatsApp",
      "Réception colis (UPS, FedEx, USPS) à l'adresse US",
      "Forward physique aux USA ou international à la demande",
    ],
  },
  {
    category: "Brand et contenu",
    items: [
      "Mises à jour site web (textes, prix, pages) — délai 48-72h",
      "Brand assets rafraîchis (saisonniers, nouveaux produits)",
      "Contenu programmé réseaux sociaux (4 posts/semaine par canal géré)",
    ],
  },
  {
    category: "Banking et paiements",
    items: [
      "Coordination Mercury / Stripe / Wise — assistance documentaire",
      "Préparation dossier source-of-funds en cas de revue compliance",
    ],
  },
  {
    category: "Strategy et revue",
    items: [
      "Revue trimestrielle de business (QBR) — 45 min Zoom + écrit",
      "Accès prioritaire WhatsApp en cas d'urgence opérationnelle",
    ],
  },
];

const RISKS = [
  { risk: "Form 5472 oublié", cost: "25 000 USD par formulaire + 25 000 USD tous les 30 jours après mise en demeure IRS, sans plafond." },
  { risk: "Rapport annuel Wyoming oublié", cost: "LLC dissoute administrativement par le Secretary of State." },
  { risk: "Compte Mercury gelé pour activité incohérente", cost: "Fonds bloqués 90-180 jours. Factures en cours suspendues." },
  { risk: "Courrier IRS non lu à temps", cost: "Délais de réponse statutaires manqués. Pénalités cumulatives." },
];

const NOT_INCLUDED = [
  "Formation d'une nouvelle LLC (c'est la Solution, 4 000 TND une fois)",
  "Signature de déclarations fiscales US (le CPA partenaire signe)",
  "Conseil fiscal personnalisé tunisien (référer fiscaliste TN agréé)",
  "Conseil juridique sur litiges (référer avocat US ou TN)",
  "Garantie d'approbation Stripe, Mercury, ou tout fournisseur tiers",
];

export default function RetainerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/fr" className="hover:underline">Accueil</Link> · <span>Suivi mensuel</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            Partenaire opérationnel · Mois par mois · Sans engagement
          </span>
          <h1 className="font-extrabold leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Suivi mensuel — <span style={{ color: BLUE }}>1 200 TND/mois</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "rgba(45,16,15,0.78)" }}>
            Le partenaire opérationnel de ton entreprise américaine.
            Conformité US mensuelle, courrier prioritaire, gestion brand et contenu,
            revue trimestrielle. Tu factures et vends ; on gère le back-office américain.
            Mois par mois, sans engagement annuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link href="/fr/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}>
              Réserver l&apos;appel de cadrage →
            </Link>
            <Link href="/fr/diagnostic"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}>
              Diagnostic 5 questions →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Pour quel profil ?
          </h2>
          <p className="text-[14px] mb-7" style={{ color: "rgba(45,16,15,0.65)" }}>
            En toute franchise — voici quand le Suivi mensuel fait sens, et quand non.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl" style={{ background: CREAM, borderLeft: `4px solid ${GREEN}` }}>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-3" style={{ color: GREEN }}>Bon fit</p>
              <ul className="space-y-2 list-disc pl-5 text-[14px] leading-relaxed">
                <li>Tu as déjà une LLC opérationnelle</li>
                <li>Tu factures en USD/EUR — au moins 3 000-5 000 USD/mois</li>
                <li>Tu veux dormir tranquille sur les échéances IRS + Wyoming</li>
                <li>Tu reçois du courrier US régulier (clients, banques, IRS)</li>
                <li>Tu veux que ton brand reste à jour sans y consacrer du temps perso</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#fff5f3", borderLeft: `4px solid ${RED}` }}>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-3" style={{ color: RED }}>Pas le bon fit</p>
              <ul className="space-y-2 list-disc pl-5 text-[14px] leading-relaxed">
                <li>Tu n&apos;as pas encore de LLC (commence par la Solution 4 000 TND)</li>
                <li>Tes revenus en devises sont inférieurs à 2 000 USD/mois</li>
                <li>Tu maîtrises Form 5472, IRS, Wyoming SoS — un CPA seul suffit</li>
                <li>Tu cherches un service par l&apos;heure ou un freelance marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Ce qui est livré chaque mois
          </h2>
          <p className="text-[14px] mb-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            14 livrables, regroupés en 5 catégories opérationnelles.
          </p>
          <div className="space-y-5">
            {DELIVERABLES.map((cat) => (
              <div key={cat.category} className="p-6 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-black text-[16px] mb-3" style={{ color: BLUE }}>{cat.category}</h3>
                <ul className="space-y-2 list-disc pl-5 text-[14px] leading-relaxed">
                  {cat.items.map((item, idx) => (<li key={idx} style={{ color: INK }}>{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Ce qui n&apos;est PAS dans le Suivi mensuel
          </h2>
          <p className="text-[14px] mb-6" style={{ color: "rgba(45,16,15,0.65)" }}>
            Honest Self-Disclosure — autant te dire ce que le Suivi mensuel ne fait pas.
          </p>
          <ul className="space-y-3 list-disc pl-6 text-[15px] leading-relaxed">
            {NOT_INCLUDED.map((item, idx) => (<li key={idx} style={{ color: INK }}>{item}</li>))}
          </ul>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: RED }}>
            Ce que l'inaction coûte
          </p>
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
            Ce qu&apos;une LLC non maintenue coûte vraiment
          </h2>
          <p className="text-[14px] mb-7 opacity-75">
            Aucun de ces chiffres n&apos;est inventé. Chaque ligne renvoie à une
            obligation statutaire US documentée.
          </p>
          <div className="space-y-4">
            {RISKS.map((r, idx) => (
              <div key={idx} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", borderLeft: `3px solid ${RED}` }}>
                <p className="font-black text-[15px] mb-1">{r.risk}</p>
                <p className="text-[13px] opacity-85 leading-relaxed">{r.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Cadrer le Suivi mensuel en 30 minutes
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            L&apos;appel sert à valider que ton profil correspond réellement
            au Suivi mensuel (sinon, on te le dit) et à cadrer le périmètre du
            premier mois. Gratuit, sans engagement.
          </p>
          <Link href="/fr/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}>
            Réserver l&apos;appel de 30 min →
          </Link>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-8" style={{ background: "#f5f1ea" }}>
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          <p>
            <strong>Information générale, pas un conseil fiscal.</strong>{" "}
            Le Suivi mensuel coordonne la livraison opérationnelle ; les
            déclarations fiscales US sont signées par un CPA américain
            partenaire. La situation fiscale tunisienne de chaque client
            doit être discutée avec un fiscaliste tunisien agréé. Les
            approbations Mercury, Stripe ne sont pas garanties.
          </p>
        </div>
      </section>
    </>
  );
}
