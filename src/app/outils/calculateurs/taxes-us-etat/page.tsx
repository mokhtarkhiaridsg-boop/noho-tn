import type { Metadata } from "next";
import Link from "next/link";
import TaxesUsEtatCalculator from "./TaxesUsEtatCalculator";

export const metadata: Metadata = {
  title: "Calculateur taxes US par état — CA, NY, TX, FL pour LLC tunisienne",
  description:
    "Estime ton exposition fiscale par état US si tu déclenches nexus (e-com, employee, inventaire). Income tax + franchise tax + sales tax par état. Pour fondateurs tunisiens non-résidents.",
  alternates: { canonical: "https://noho.tn/outils/calculateurs/taxes-us-etat" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function TaxesUsEtatPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Taxes US par état</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Taxes US par état —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              CA, NY, TX, FL
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Ta LLC est formée Wyoming, mais si tu déclenches nexus dans
            un autre état (e-commerce, inventaire, employé), tu y dois
            des taxes. Voici la math par état.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <TaxesUsEtatCalculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: CREAM }}>
        <div
          className="max-w-3xl mx-auto text-[15px] leading-[1.7] prose prose-noho"
          style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <h2>Comment se déclenche le nexus</h2>
          <ul>
            <li>
              <strong>Sales tax nexus économique</strong> : Wayfair v.
              South Dakota (2018) — chaque état fixe un seuil. Le
              standard : <strong>100K USD de ventes OU 200 transactions
              annuelles dans l&apos;état</strong>. Au-delà, tu dois
              collecter sales tax.
            </li>
            <li>
              <strong>Income tax nexus physique</strong> : employé,
              bureau, inventaire warehoused, agent indépendant dépendant.
              Déclenche income tax dans l&apos;état.
            </li>
            <li>
              <strong>Franchise tax</strong> : certains états (CA, DE)
              imposent une franchise tax fixe annuelle si la LLC est
              enregistrée OU si elle &quot;does business&quot; dans
              l&apos;état.
            </li>
          </ul>

          <h2>Le piège California spécifique</h2>
          <p>
            <strong>Si ton mailbox NOHO 5062 Lankershim est ton
            registered place of business OU tu y fais des opérations
            réelles, ta LLC peut être considérée &quot;doing business
            in California&quot;</strong> et déclencher le 800 USD/an de
            CA franchise tax (LLC fee CA §17941).
          </p>
          <p>
            <strong>Mitigation NOHO</strong> : ta LLC est formée Wyoming
            (registered office Sheridan WY), pas California. NOHO 5062
            Lankershim est ton CMRA mailbox pour réception courrier
            uniquement, pas ton registered office. Cette distinction est
            critique. Si tu commences à embaucher physiquement à LA, tu
            déclenches CA nexus et tu paies les 800 USD/an.
          </p>

          <h2>Disclaimer</h2>
          <p>
            Ce calculateur est un <strong>indicateur</strong>. Les règles
            de nexus évoluent et chaque état a ses exceptions. Pour
            valider ta situation, consulte un CPA US partenaire — NOHO
            peut te référer. NOHO ne donne pas de conseil fiscal.
          </p>
        </div>
      </section>
    </>
  );
}
