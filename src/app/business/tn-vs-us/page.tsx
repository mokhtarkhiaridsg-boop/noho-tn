import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Société TN vs US — Comment choisir entre SARL tunisienne et LLC américaine",
  description:
    "Tableau de décision complet : SARL Tunisie ou LLC USA selon ton activité, ton marché, ta fiscalité. Combo TN + US quand ça vaut la peine. Pour fondateurs tunisiens.",
  alternates: { canonical: "https://noho.tn/business/tn-vs-us" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const BODY = "#EBF2FA";

type Row = {
  label: string;
  tn: { value: string; positive?: boolean };
  us: { value: string; positive?: boolean };
};

const ROWS: Row[] = [
  {
    label: "Délai de création",
    tn: { value: "2-3 semaines (RCS Tunisie)" },
    us: { value: "24-72h (Wyoming SoS)", positive: true },
  },
  {
    label: "Capital social minimum",
    tn: { value: "1 000 TND (SARL) ou 1 TND (SUARL)" },
    us: { value: "Aucun", positive: true },
  },
  {
    label: "Frais étatiques annuels",
    tn: { value: "~200-400 TND/an" },
    us: { value: "60 USD/an (Wyoming) ou 300 USD/an (DE)" },
  },
  {
    label: "Compte bancaire local",
    tn: { value: "BIAT, Attijari, BNA — comptes TND + comptes en devises", positive: true },
    us: { value: "Mercury, Relay, Brex — USD direct" },
  },
  {
    label: "Stripe / PayPal pour facturer en USD",
    tn: { value: "Non disponible directement", positive: false },
    us: { value: "Oui, Stripe + PayPal + Square US", positive: true },
  },
  {
    label: "Clients US qui demandent un W-9 / 1099",
    tn: { value: "Friction — pas de TIN US", positive: false },
    us: { value: "EIN couvre tout", positive: true },
  },
  {
    label: "Crédibilité en Tunisie (RCS public)",
    tn: { value: "Apparait au RCS, RNE — légitimité locale", positive: true },
    us: { value: "Pas visible côté TN" },
  },
  {
    label: "Marchés publics / clients TN gouv",
    tn: { value: "Souvent exigent une entité TN", positive: true },
    us: { value: "Difficile d'être éligible" },
  },
  {
    label: "Fiscalité du chiffre d'affaires",
    tn: { value: "IRPP / IS TN selon structure (15-25%)" },
    us: { value: "Pass-through LLC (0% au niveau LLC, l'IRPP TN s'applique à toi)" },
  },
  {
    label: "Form 5472 + 1120 annuel (IRS)",
    tn: { value: "Non applicable", positive: true },
    us: { value: "Obligatoire — 25 000 USD pénalité si oublié" },
  },
  {
    label: "Comptabilité",
    tn: { value: "Expert-comptable TN (~3 000-8 000 TND/an)" },
    us: { value: "Optionnel mais recommandé — CPA US (~500-1 500 USD/an)" },
  },
  {
    label: "Cabinet partenaire pour la création",
    tn: { value: "KHIARI — avocats TN agréés", positive: true },
    us: { value: "NOHO + registered agent Wyoming", positive: true },
  },
];

const SCENARIOS = [
  {
    title: "Tu factures principalement des clients US",
    color: BLUE,
    recommendation: "LLC US (Wyoming par défaut)",
    why: "Stripe et Mercury fonctionnent directement, ton client US a un W-9 propre, pas de friction sur les contrats. L'IRPP TN s'applique toujours à toi en tant que résident fiscal, mais la mécanique de facturation est nette.",
  },
  {
    title: "Tu factures principalement des clients TN ou gouv tunisien",
    color: GREEN,
    recommendation: "SARL / SUARL Tunisie",
    why: "Tes clients exigent un matricule fiscal TN. Une LLC américaine te complique inutilement la facturation locale. Garde la TN, ajoute la US plus tard si l'export commence.",
  },
  {
    title: "Tu vises un client mix TN + US",
    color: RED,
    recommendation: "Combo : SARL TN + LLC US",
    why: "Deux entités, deux comptabilités, deux comptes bancaires — mais zéro friction sur les deux marchés. La SARL TN facture les clients locaux, la LLC US les clients américains. NOHO + KHIARI coordonnent les deux côtés.",
  },
  {
    title: "Tu lèves des fonds VC dans les 18 mois",
    color: INK,
    recommendation: "Delaware C-Corp via Stripe Atlas",
    why: "Les fonds VC américains ne peuvent généralement pas investir dans une LLC. Si la levée est ferme, démarre directement en Delaware C-Corp. NOHO ne fait pas ce cas — Stripe Atlas est l'opérateur le plus propre pour cette voie.",
  },
];

export default function TnVsUsPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/business" className="hover:underline">Solution Business</Link>
            <span className="mx-1.5">·</span>
            <span>TN vs US</span>
          </div>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Société TN ou US —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              comment choisir
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tableau de décision honnête entre une SARL/SUARL tunisienne
            et une LLC américaine. Sans propagande pour un côté — le
            bon choix dépend de ton activité, de ton marché, et de tes
            clients.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Tableau de comparaison
          </h2>
          <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", border: `1px solid rgba(45,16,15,0.08)`, boxShadow: "0 12px 32px rgba(45,16,15,0.06)" }}>
            <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2 px-4 sm:px-6 py-3" style={{ background: INK, color: CREAM }}>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">Critère</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>SARL Tunisie</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>LLC USA</span>
            </div>
            <ul>
              {ROWS.map((row, i) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[1.4fr_1fr_1fr] gap-2 items-start px-4 sm:px-6 py-3.5"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFAF8", borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.05)" }}
                >
                  <p className="text-[13px] sm:text-[14px] font-bold" style={{ color: INK }}>{row.label}</p>
                  <p
                    className="text-center text-[12px] sm:text-[13px] leading-relaxed"
                    style={{
                      color: row.tn.positive === false ? RED : row.tn.positive ? GREEN : "rgba(45,16,15,0.78)",
                      fontWeight: row.tn.positive !== undefined ? 700 : 500,
                    }}
                  >
                    {row.tn.value}
                  </p>
                  <p
                    className="text-center text-[12px] sm:text-[13px] leading-relaxed"
                    style={{
                      color: row.us.positive === false ? RED : row.us.positive ? GREEN : "rgba(45,16,15,0.78)",
                      fontWeight: row.us.positive !== undefined ? 700 : 500,
                    }}
                  >
                    {row.us.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Quatre scénarios, quatre recommandations
          </h2>
          <div className="space-y-4">
            {SCENARIOS.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${s.color}` }}>
                <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1.5" style={{ color: s.color }}>
                  {s.title}
                </p>
                <h3 className="font-extrabold text-[18px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  → {s.recommendation}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.why}</p>
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
            NOHO opère les deux côtés du pont. On gagne ta confiance en te
            disant honnêtement laquelle des deux options correspond à
            ton activité — pas en te vendant celle qui rapporte le plus.
            Le diagnostic 5 questions confirme la recommandation en
            60 secondes,{" "}
            <Link href="/diagnostic" className="font-bold underline" style={{ color: "#92400e" }}>
              à tester ici
            </Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Tu hésites encore ?
          </h2>
          <p className="text-[14.5px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            30 minutes au téléphone, on regarde ta situation et on tranche
            ensemble. Aucun engagement.
          </p>
          <Link
            href="/appel"
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
