import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Form 5472 — la pénalité de 25 000 USD pour LLC à propriétaire non-résident",
  description:
    "Le Form 5472 + Form 1120 pro forma est une obligation annuelle pour toute LLC américaine détenue par un non-résident. La pénalité IRC §6038A(d)(1) est de 25 000 USD + 25 000 USD tous les 30 jours, sans plafond.",
  alternates: { canonical: "https://noho.tn/conformite/form-5472-penalite" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const RED = "#C73E2D";

export default function Form5472Page() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/" className="hover:underline">Accueil</Link> · <span>Conformité</span> · <span>Form 5472</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: RED, color: "#fff" }}>
            Conformité critique · IRC §6038A
          </span>
          <h1 className="font-extrabold leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Form 5472 — la pénalité de <span style={{ color: RED }}>25 000 USD</span>
          </h1>
          <p className="text-[16px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>
            Toute LLC américaine détenue par un non-résident doit déposer un
            Form 5472 + Form 1120 pro forma chaque année — même sans revenu.
            L&apos;oubli déclenche une pénalité statutaire de 25 000 USD, qui
            se reconduit par tranches de 30 jours après mise en demeure IRS,
            sans plafond.
          </p>
        </div>
      </section>

      <article className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff", color: INK }}>
        <div className="max-w-3xl mx-auto space-y-8 text-[15.5px] leading-[1.7]">
          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              1. Le chiffre dont presque personne ne parle
            </h2>
            <p>
              <strong>25 000 USD.</strong> Pénalité de base pour avoir oublié un
              seul Form 5472. <strong>+ 25 000 USD tous les 30 jours après mise
              en demeure IRS</strong>, sans plafond.
            </p>
            <p className="p-4 rounded-xl my-4 text-[14.5px] italic" style={{ background: CREAM, borderLeft: `3px solid ${RED}`, color: INK }}>
              Ce chiffre était de 10 000 USD jusqu&apos;à P.L. 115-141 (déclarations
              dues après le 31 décembre 2017). Le barème actuel est bien 25 000
              USD.
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              2. Ce que dit l&apos;IRS, mot pour mot
            </h2>
            <p>Form 5472 Instructions (Rev. December 2024), verbatim :</p>
            <blockquote className="p-5 rounded-xl my-4 text-[14px] leading-relaxed border-l-4" style={{ background: "#f8f4ec", borderColor: BLUE, fontFamily: "Georgia, serif", color: "#1a1a1a" }}>
              «&nbsp;A penalty of $25,000 will be assessed on any reporting
              corporation that fails to file Form 5472 when due. If the failure
              continues for more than 90 days after notification by the IRS, an
              additional penalty of $25,000 will apply. This penalty applies
              with respect to each related party for each 30-day period during
              which the failure continues.&nbsp;»
            </blockquote>
            <p className="text-[13px] italic opacity-70">
              Référence statutaire : IRC §6038A(d)(1).
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              3. Qui est concerné — pas seulement ceux qui ont du revenu
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <strong>QUI ?</strong>{" "}
                <span className="text-[14px]">Toute LLC américaine à un seul membre dont le membre est non-résident des États-Unis. Si tu es résident tunisien et détiens 100% d&apos;une LLC Wyoming, Delaware ou New Mexico — tu es concerné.</span>
              </div>
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <strong>QUAND ?</strong>{" "}
                <span className="text-[14px]">Chaque année fiscale, date limite 15 avril de l&apos;année suivante. Extension 6 mois via Form 7004 avant date limite initiale.</span>
              </div>
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <strong>QUOI ?</strong>{" "}
                <span className="text-[14px]">Form 5472 (transactions LLC ↔ propriétaire étranger) + Form 1120 pro forma. Dépôt postal ou fax seulement — pas de télédéclaration possible.</span>
              </div>
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <strong>MÊME SANS REVENU ?</strong>{" "}
                <span className="text-[14px]">Oui. Dès qu&apos;il existe une transaction déclarable avec une partie liée (apport de capital, distributions, paiements) l&apos;obligation s&apos;applique.</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              4. BOI vs 5472 — clarification importante
            </h2>
            <p>
              Beaucoup d&apos;articles francophones mentionnent encore le BOI
              (Beneficial Ownership Information) comme obligation US annuelle.{" "}
              <strong>C&apos;est obsolète :</strong> le 26 mars 2025, FinCEN a
              suspendu l&apos;application du BOI pour les entités formées aux
              États-Unis.
            </p>
            <p className="p-4 rounded-xl my-4 text-[14.5px]" style={{ background: "#fef3c7", borderLeft: `3px solid ${RED}`, color: INK }}>
              Le risque réel pour une LLC tunisienne aujourd&apos;hui n&apos;est
              plus le BOI — c&apos;est le Form 5472.
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              5. Comment NOHO traite la conformité
            </h2>
            <p>
              Le Form 5472 n&apos;est pas inclus dans la Solution initial à 4 000
              TND. La conformité annuelle relève du Suivi mensuel (1 200 TND/mois) ou
              d&apos;un CPA américain spécialisé non-résidents.
            </p>
            <p><strong>Dans le Suivi mensuel :</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rappel mensuel des échéances US</li>
              <li>Préparation du dossier avec un CPA américain partenaire</li>
              <li>Conservation centralisée des documents requis</li>
              <li>Dépôt postal ou fax effectué depuis le storefront NOHO à Los Angeles</li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              6. Si tu as déjà raté un dépôt
            </h2>
            <p>
              Ne pas paniquer, ne pas ignorer. Une régularisation tardive faite
              proprement coûte beaucoup moins cher qu&apos;une pénalité accumulée.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identifier la ou les année(s) manquante(s)</li>
              <li>Reconstituer les transactions déclarables</li>
              <li>Préparer les Form 5472 + Form 1120 manquants en régime «&nbsp;reasonable cause statement&nbsp;»</li>
              <li>Déposer avec courrier d&apos;explication. L&apos;IRS a une procédure de renonciation à la pénalité pour première infraction («&nbsp;first-time abatement&nbsp;»)</li>
              <li>Travailler avec un CPA américain — ne pas tenter seul si plus d&apos;une année.</li>
            </ol>
          </div>

          <div className="p-8 rounded-2xl mt-10 text-center" style={{ background: INK, color: CREAM }}>
            <h3 className="font-extrabold text-[22px] mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Évite la pénalité avant qu&apos;elle ne commence
            </h3>
            <p className="text-[14px] opacity-85 mb-6 max-w-md mx-auto">
              Si tu as une LLC et que tu n&apos;es pas sûr de ta situation 5472 —
              réserve l&apos;appel de 30 minutes.
            </p>
            <Link href="/appel" className="inline-block font-black px-8 py-4 rounded-xl text-[15px] transition-all hover:scale-[1.02]" style={{ background: CREAM, color: INK }}>
              Réserver l&apos;appel →
            </Link>
          </div>

          <div className="text-[11px] leading-relaxed mt-8 pt-6 border-t" style={{ color: "rgba(45,16,15,0.55)", borderColor: "#e5dccb" }}>
            <p>
              <strong>Information générale, pas un conseil fiscal.</strong>{" "}
              Cette page reproduit le texte officiel de l&apos;IRS mais ne se
              substitue pas à une consultation avec un CPA américain ou un
              fiscaliste tunisien.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
