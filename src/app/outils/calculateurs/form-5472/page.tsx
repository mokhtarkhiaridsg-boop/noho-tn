import type { Metadata } from "next";
import Link from "next/link";
import Form5472Calculator from "./Form5472Calculator";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Outils", url: "https://noho.tn/outils" },
  { name: "Calculateurs", url: "https://noho.tn/outils#calculateurs" },
  { name: "Form 5472 pénalité", url: "https://noho.tn/outils/calculateurs/form-5472" },
]);

export const metadata: Metadata = {
  title: "Calculateur Form 5472 — pénalité IRS pour LLC oubliée",
  description:
    "Calcule exactement combien tu risques de pénalité IRS si tu oublies Form 5472. Pénalité de base 25 000 USD + 25 000 USD par tranche de 30 jours après mise en demeure. Sans plafond.",
  alternates: { canonical: "https://noho.tn/outils/calculateurs/form-5472" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function Form5472CalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Calculateur Form 5472</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Calculateur Form 5472 —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              la pénalité réelle
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Form 5472 + 1120 pro forma est obligatoire chaque année pour
            toute LLC américaine détenue par un non-US person — même si
            la LLC n&apos;a généré aucun revenu. Voici exactement combien
            ça coûte si on l&apos;oublie.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <Form5472Calculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-[14.5px] leading-relaxed prose-noho" style={{ color: "#1F0807" }}>
          <h2>Comment fonctionne la pénalité</h2>
          <p>
            L&apos;IRS prélève une pénalité de <strong>25 000 USD</strong>{" "}
            dès le premier oubli de dépôt du Form 5472. Tu reçois une
            mise en demeure (notice). Si tu ne réponds pas dans les 90
            jours, l&apos;IRS prélève <strong>25 000 USD supplémentaires
            par tranche de 30 jours</strong> de retard, sans plafond.
          </p>
          <p>
            Concrètement : si tu reçois la notice et que tu attends 6
            mois (180 jours) avant de réagir, c&apos;est 25 000 + (6 × 25
            000) = <strong>175 000 USD</strong>. La pénalité dépasse
            facilement la valeur de la LLC.
          </p>

          <h2>Comment éviter</h2>
          <ul>
            <li>
              Mettre un rappel calendrier au 1er février chaque année
              (deadline 15 avril sans extension, 15 octobre avec
              extension 6-mois).
            </li>
            <li>
              Confier le dépôt à un CPA US qui le facture 200-500
              USD/an, ou le faire toi-même (le formulaire est
              relativement simple si tu n&apos;as eu aucune
              transaction).
            </li>
            <li>
              Souscrire au{" "}
              <Link href="/business#suivi-mensuel" className="font-bold underline" style={{ color: BLUE }}>
                Suivi mensuel NOHO (1 200 TND/mois)
              </Link>{" "}
              qui inclut le rappel + la coordination avec notre CPA
              partenaire.
            </li>
          </ul>

          <h2>Que faire si tu as déjà oublié</h2>
          <p>
            Programme « First-Time Penalty Abatement » de l&apos;IRS
            peut effacer la première pénalité si c&apos;est ton premier
            oubli et que ton compte est par ailleurs en règle. Il faut
            écrire à l&apos;IRS pour la demande. Le taux d&apos;acceptation
            est ~60% en première demande.{" "}
            <Link href="/appel" className="font-bold underline" style={{ color: BLUE }}>
              Réserve un appel
            </Link>{" "}
            si tu es dans cette situation — on peut t&apos;orienter vers
            notre CPA partenaire.
          </p>
        </div>
      </section>
    </>
  );
}
