import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wise vs Mercury cross-border — rapatrier ton USD en TN",
  description:
    "Comparateur des 3 voies pour ramener tes USD en Tunisie : Mercury → wire BIAT, Wise Business, Payoneer. Frais réels, délais, conformité BCT.",
  alternates: { canonical: "https://noho.tn/outils/comparateurs/cross-border" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

type Row = {
  label: string;
  values: { mercury: string; wise: string; payoneer: string };
  best?: "mercury" | "wise" | "payoneer";
};

const ROWS: Row[] = [
  {
    label: "Coût wire sortant (USD)",
    values: { mercury: "5-20 USD wire intl", wise: "Spread + 0.4% (≈ 4 USD pour 1 000 USD)", payoneer: "1.50 USD wire + 2% withdrawal" },
    best: "wise",
  },
  {
    label: "Spread FX appliqué",
    values: { mercury: "Marché interbancaire (≈ 0.3-0.5%)", wise: "Mid-market exact + 0.4% transparent", payoneer: "≈ 2-3% caché" },
    best: "wise",
  },
  {
    label: "Délai TN bank reception",
    values: { mercury: "1-3 jours ouvrés (BIAT/UIB)", wise: "1-2 jours ouvrés", payoneer: "3-5 jours ouvrés" },
    best: "wise",
  },
  {
    label: "Conversion en TND forcée ?",
    values: { mercury: "Non si compte devises BIAT", wise: "Oui (Wise n&apos;a pas TND wallet)", payoneer: "Oui (conversion auto à réception)" },
    best: "mercury",
  },
  {
    label: "Document BCT à fournir",
    values: { mercury: "Justificatif source des fonds", wise: "Idem", payoneer: "Idem" },
  },
  {
    label: "Plafond mensuel pratique",
    values: { mercury: "Aucun (limité par tolérance banque TN)", wise: "Aucun coté Wise; banque TN peut bloquer", payoneer: "Limité à 5 000 USD/withdrawal" },
    best: "mercury",
  },
  {
    label: "Support en cas de blocage",
    values: { mercury: "Email US, anglais, 24-48h", wise: "Chat en français, &lt; 2h ouvrées", payoneer: "Téléphone + chat, moyen" },
    best: "wise",
  },
  {
    label: "Acceptation marketplace (Amazon/Etsy)",
    values: { mercury: "Native (account routing US)", wise: "Native (account US/EU/UK)", payoneer: "Native + Receiving Accounts" },
  },
];

const SCENARIOS = [
  {
    title: "Tu reçois 5 000-10 000 USD/mois, tu veux les garder en USD",
    best: "Mercury",
    why: "Garde le solde sur Mercury, paie tes fournisseurs SaaS directement. Convertis seulement la part dont tu as besoin en TND via wire BIAT (compte devises).",
    color: BLUE,
  },
  {
    title: "Tu reçois 500-3 000 USD/mois, tu veux convertir tout en TND chaque mois",
    best: "Wise Business",
    why: "Frais transparents (~0.4%), pas de spread caché, dépôt sur ton compte TND directement. Le moins cher pour les petits volumes.",
    color: GREEN,
  },
  {
    title: "Tu vends sur Amazon US ou Upwork et touches en USD",
    best: "Payoneer + Wise hybride",
    why: "Reçois via Payoneer Receiving Account (gratuit côté Amazon), transfère mensuellement vers Wise Business pour conversion finale TN (frais inférieurs).",
    color: INK,
  },
];

export default function CrossBorderComparatorPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Cross-border</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Wise vs Mercury vs Payoneer —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              rapatrier ton USD
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tu factures en USD via ta LLC, tu touches en USD, tu vis en
            TND. Voici ce que coûtent réellement les 3 voies pour ramener
            ces dollars dans ta vie tunisienne.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 sm:px-6 py-10 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)", boxShadow: "0 12px 32px rgba(45,16,15,0.06)" }}>
            <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 px-4 sm:px-6 py-3" style={{ background: INK, color: CREAM }}>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">Critère</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>Mercury</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>Wise</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>Payoneer</span>
            </div>
            <ul>
              {ROWS.map((row, i) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 items-start px-4 sm:px-6 py-3.5"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFAF8", borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.05)" }}
                >
                  <p className="text-[13px] sm:text-[14px] font-bold" style={{ color: INK }}>{row.label}</p>
                  {(["mercury", "wise", "payoneer"] as const).map((k) => (
                    <p
                      key={k}
                      className="text-center text-[11.5px] sm:text-[12.5px] leading-tight"
                      style={{
                        color: row.best === k ? GREEN : "rgba(45,16,15,0.78)",
                        fontWeight: row.best === k ? 800 : 500,
                      }}
                      dangerouslySetInnerHTML={{ __html: row.values[k] }}
                    />
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Trois cas, trois choix
          </h2>
          <div className="space-y-3">
            {SCENARIOS.map((s) => (
              <div key={s.title} className="p-5 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${s.color}` }}>
                <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: s.color }}>
                  {s.title}
                </p>
                <h3 className="font-extrabold text-[17px] mb-1" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  → {s.best}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BCT note */}
      <section className="px-5 sm:px-6 py-10" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
            Honnêteté BCT
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            Aucune de ces voies ne te dispense de déclarer tes revenus
            mondiaux dans ta déclaration IRPP annuelle (article 6 loi
            91-25). Le rapatriement légal exige un justificatif source des
            fonds (facture, contrat) à fournir à ta banque TN. La voie LLC
            US + Mercury/Wise est 100% légale tant que tu déclares.
          </p>
        </div>
      </section>
    </>
  );
}
