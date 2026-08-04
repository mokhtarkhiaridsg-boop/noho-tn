import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Outils", url: "https://nohomailboxtunis.com/fr/outils" },
  { name: "Comparateurs", url: "https://nohomailboxtunis.com/fr/outils#comparateurs" },
  { name: "Banques US", url: "https://nohomailboxtunis.com/fr/outils/comparateurs/banques-us" },
]);

export const metadata: Metadata = {
  title: "Comparateur banques US — Mercury vs Relay vs Brex vs Wise Business",
  description:
    "Tableau comparatif honnête des 4 options bancaires US pour LLC détenue depuis la Tunisie. Taux d'approbation, frais, fonctionnalités, public cible. Plan B documenté si Mercury refuse.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/comparateurs/banques-us" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

type Bank = {
  name: string;
  tagline: string;
  approval: { rate: string; color: string };
  monthlyFee: string;
  achWires: string;
  debitCard: string;
  apr: string;
  bestFor: string;
  notes: string[];
};

const BANKS: Bank[] = [
  {
    name: "Mercury",
    tagline: "Le défaut pour LLC non-résident",
    approval: { rate: "~65-80% MENA", color: GREEN },
    monthlyFee: "0 USD",
    achWires: "ACH inclus, wires sortants 0 USD",
    debitCard: "Oui, virtuelle + physique",
    apr: "Treasury yield ~3.5-4% (cash sweep)",
    bestFor: "Services / SaaS / E-commerce démarrage",
    notes: [
      "Le plus large fit pour fondateurs non-US",
      "API solide pour automation",
      "Underwriting parfois strict — Plan B nécessaire",
    ],
  },
  {
    name: "Relay",
    tagline: "Plan B propre si Mercury refuse",
    approval: { rate: "~75-85% MENA", color: GREEN },
    monthlyFee: "0 USD (plan Standard)",
    achWires: "ACH gratuit, wires 10 USD",
    debitCard: "Oui, jusqu'à 50 cartes virtuelles",
    apr: "Pas de yield natif",
    bestFor: "E-commerce + équipes avec dépenses multiples",
    notes: [
      "Plan B le plus courant après refus Mercury",
      "Multi-comptes inclus (jusqu'à 20)",
      "Connecte à QuickBooks, Xero, Gusto",
    ],
  },
  {
    name: "Brex",
    tagline: "Pour startups venture-backed",
    approval: { rate: "~20-40% non-VC", color: RED },
    monthlyFee: "0 USD",
    achWires: "ACH gratuit, wires 0 USD (limites)",
    debitCard: "Oui, mais carte corporate (pas debit)",
    apr: "Treasury yield via Brex Cash",
    bestFor: "Startups levées Seed/Series A+",
    notes: [
      "Demande preuve de financement VC ou ARR >100K",
      "Refuse les bootstrap / freelance",
      "Forte intégration outils de dépense",
    ],
  },
  {
    name: "Wise Business",
    tagline: "Multi-devises, pas une vraie banque US",
    approval: { rate: "~90% MENA", color: GREEN },
    monthlyFee: "0 USD (frais à l'usage)",
    achWires: "Frais variable (~0.4% conversion)",
    debitCard: "Oui, débit Wise multi-devises",
    apr: "Pas de yield",
    bestFor: "Réception USD/EUR/GBP, conversion vers TND",
    notes: [
      "Routing + account number US pour recevoir USD",
      "Plus pratique pour conversion TND",
      "N'est pas une banque US au sens strict — pas de FDIC",
    ],
  },
];

const SCENARIOS = [
  {
    title: "Tu veux le compte le plus standard pour LLC",
    bank: "Mercury",
    why: "Plus de 80% des fondateurs tunisiens commencent par Mercury. API solide, dashboard moderne, intégrations natives avec Stripe / Shopify / QuickBooks. Yield Treasury en bonus.",
  },
  {
    title: "Mercury t'a refusé",
    bank: "Relay",
    why: "Plan B le plus propre. Taux d'approbation légèrement supérieur, multi-comptes inclus. La majorité des fondateurs refusés à Mercury passent Relay en deuxième tentative.",
  },
  {
    title: "Tu lèves Seed ou Series A imminemment",
    bank: "Brex",
    why: "Si tu as un term sheet en cours ou ARR >100K USD, Brex t'approuve quasi-systématiquement. Sinon, n'essaie même pas — ils refusent les bootstrap.",
  },
  {
    title: "Tu veux juste recevoir des USD et convertir en TND",
    bank: "Wise Business",
    why: "Si Stripe n'est pas ton enjeu et que tu veux juste un rail USD propre pour facturer un client US et rapatrier en TND, Wise est le plus simple. Pas FDIC, mais usage pratique solide.",
  },
];

export default function BanquesUsComparatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Banques US</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Mercury vs Relay vs Brex vs Wise —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              comparateur
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Quatre options bancaires US pour une LLC détenue depuis la
            Tunisie. Taux d&apos;approbation honnêtes, frais, public
            cible. Pas de classement marketing — uniquement ce qui
            fonctionne en pratique.
          </p>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="px-5 sm:px-6 py-10 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BANKS.map((b) => (
              <div
                key={b.name}
                className="p-6 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(45,16,15,0.08)",
                  boxShadow: "0 12px 32px rgba(45,16,15,0.06)",
                }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className="font-extrabold text-[22px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    {b.name}
                  </h2>
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded-full"
                    style={{ background: b.approval.color, color: "#fff" }}
                  >
                    {b.approval.rate}
                  </span>
                </div>
                <p className="text-[13.5px] mb-5" style={{ color: "rgba(45,16,15,0.65)", fontStyle: "italic" }}>{b.tagline}</p>

                <dl className="space-y-2.5 mb-4 text-[13px]" style={{ color: INK }}>
                  <div className="flex justify-between gap-3">
                    <dt className="font-bold" style={{ color: "rgba(45,16,15,0.6)" }}>Frais mensuels</dt>
                    <dd className="text-right">{b.monthlyFee}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-bold" style={{ color: "rgba(45,16,15,0.6)" }}>ACH / Wires</dt>
                    <dd className="text-right">{b.achWires}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-bold" style={{ color: "rgba(45,16,15,0.6)" }}>Carte de débit</dt>
                    <dd className="text-right">{b.debitCard}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-bold" style={{ color: "rgba(45,16,15,0.6)" }}>Yield / intérêts</dt>
                    <dd className="text-right">{b.apr}</dd>
                  </div>
                </dl>

                <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1.5" style={{ color: BLUE }}>
                  Meilleur pour
                </p>
                <p className="text-[13px] mb-4" style={{ color: INK }}>{b.bestFor}</p>

                <ul className="space-y-1.5 text-[12.5px]" style={{ color: "rgba(45,16,15,0.78)" }}>
                  {b.notes.map((n, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5" style={{ color: BLUE }}>·</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Quatre situations, quatre recommandations
          </h2>
          <div className="space-y-3">
            {SCENARIOS.map((s) => (
              <div key={s.title} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: BLUE }}>
                  {s.title}
                </p>
                <h3 className="font-extrabold text-[17px] mb-1" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  → {s.bank}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Self-Disclosure */}
      <section className="px-5 sm:px-6 py-10" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>
          <p className="font-black mb-2">Honest Self-Disclosure</p>
          <p>
            Les taux d&apos;approbation MENA cités ci-dessus sont des
            ordres de grandeur basés sur des données publiques + retours
            terrain (forums, communautés founder). NOHO n&apos;est pas une
            banque, ne touche jamais à tes fonds, et n&apos;a pas de
            partenariat affilié avec Mercury, Relay, Brex ou Wise. Ce
            qu&apos;on fait :{" "}
            <Link href="/fr/blog/mercury-bank-depuis-tunis-dossier-renforce" className="font-bold underline" style={{ color: "#92400e" }}>
              préparer ton dossier
            </Link>{" "}
            pour maximiser tes chances dans chaque option.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            On t&apos;aide à choisir et à monter le dossier
          </h2>
          <p className="text-[14.5px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Préparation du dossier renforcé incluse dans la Solution
            Business (4 000 TND une fois) + Plan B documenté si la
            première option refuse.
          </p>
          <Link
            href="/fr/appel"
            className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 24px rgba(45,16,15,0.24)" }}
          >
            Réserver l&apos;appel →
          </Link>
        </div>
      </section>
    </>
  );
}
