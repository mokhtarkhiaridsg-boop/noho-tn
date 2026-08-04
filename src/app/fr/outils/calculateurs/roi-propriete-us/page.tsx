import type { Metadata } from "next";
import Link from "next/link";
import RoiCalculator from "./RoiCalculator";

export const metadata: Metadata = {
  title: "Calculateur ROI propriété US — cap rate et cash-on-cash pour investisseurs tunisiens",
  description:
    "Estime le rendement réel d'un achat immobilier US (single-family, condo, multi-family) depuis Tunis. Cap rate, cash-on-cash, vacancy, property mgmt. Honest math.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/calculateurs/roi-propriete-us" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function RoiPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>ROI propriété US</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Calculateur ROI propriété US —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              cap rate
            </span>{" "}
            et cash-on-cash
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tu veux acheter une propriété aux US depuis Tunis comme
            hedge contre le dinar. Voici le rendement réel — pas le
            chiffre que t&apos;a vendu l&apos;agent immobilier.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <RoiCalculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: CREAM }}>
        <div
          className="max-w-3xl mx-auto text-[15px] leading-[1.7] prose prose-noho"
          style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <h2>Définitions rapides</h2>
          <ul>
            <li>
              <strong>Cap rate</strong> = Net Operating Income (NOI) / Prix
              d&apos;achat. Indicateur de rendement opérationnel
              sans tenir compte du financement.
            </li>
            <li>
              <strong>Cash-on-cash</strong> = cash flow annuel après
              dette / cash investi. Indicateur du rendement réel de tes
              fonds propres.
            </li>
            <li>
              <strong>NOI</strong> = (loyer mensuel × 12) − vacancy −
              property management − assurance − taxes foncières −
              maintenance.
            </li>
            <li>
              <strong>Cash investi</strong> = down payment + closing costs
              + rehab initial.
            </li>
          </ul>

          <h2>Les chiffres qui font baisser ton rendement (et que les agents oublient)</h2>
          <ul>
            <li>Vacancy 5-10% (mois entre 2 locataires, no-show).</li>
            <li>Property management 8-12% du gross rent.</li>
            <li>Maintenance 1-2% du prix d&apos;achat par an.</li>
            <li>Assurance landlord 0.5-1.5% du prix par an (plus en Floride/Texas).</li>
            <li>Property tax 0.5-3% du prix par an selon état (TX 2-2.5%, CA 1%, NJ 2.4%, FL 0.8%).</li>
            <li>HOA si condo : 200-800 USD/mois.</li>
            <li>Capital expenditure (toit, HVAC, etc.) : ~5% du gross rent en réserve.</li>
          </ul>

          <h2>Honest disclosure</h2>
          <p>
            Investir en immobilier US depuis Tunis sans connaître le
            marché local est risqué. Recommandation : commence avec un
            partenaire local de confiance OU un property manager
            certifié, et fais-toi accompagner par un avocat US (référé
            par NOHO). Pas un seul fondateur tunisien n&apos;a réussi un
            premier achat US sans visite physique. Ce calculateur est un
            outil de pré-qualification, pas une recommandation
            d&apos;investissement.
          </p>
        </div>
      </section>
    </>
  );
}
