import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Outils", url: "https://noho.tn/outils" },
  { name: "Lookups", url: "https://noho.tn/outils#lookups" },
  { name: "LLC SoS", url: "https://noho.tn/outils/lookups/llc-status" },
]);

export const metadata: Metadata = {
  title: "Lookup statut LLC sur Secretary of State — Wyoming, Delaware, Nouveau-Mexique",
  description:
    "Vérifie le statut de ta LLC US (Active, Delinquent, Dissolved) directement sur les portails officiels du Secretary of State Wyoming, Delaware, NM. Délai et procédure détaillés.",
  alternates: { canonical: "https://noho.tn/outils/lookups/llc-status" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const GOLD = "#f8c84a";

const STATES = [
  {
    code: "WY",
    name: "Wyoming",
    portal: "https://wyobiz.wy.gov/Business/FilingSearch.aspx",
    portalLabel: "wyobiz.wy.gov",
    delay: "Instantané (base mise à jour quotidiennement)",
    notes: [
      "Recherche par nom de LLC OU par filing ID.",
      "Statuts possibles : Active, Inactive (Delinquent), Dissolved, Reinstated.",
      "Annual report dû à l&apos;anniversaire de la LLC, 60 USD min.",
      "Si Delinquent : 50 USD pénalité + dépôt rapport pour réactiver.",
    ],
    cost: "Gratuit pour la recherche. 10 USD pour téléchargement Certificate of Good Standing certifié.",
  },
  {
    code: "DE",
    name: "Delaware",
    portal: "https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx",
    portalLabel: "icis.corp.delaware.gov",
    delay: "Instantané",
    notes: [
      "Recherche par nom OU par File Number.",
      "Statuts : Active, Cancelled, Forfeited (équivalent Delinquent), Voided.",
      "Franchise tax 300 USD/an, due au 1er juin.",
      "Si Forfeited : 200 USD reinstatement + franchise tax manqué.",
    ],
    cost: "Gratuit pour status check. 50 USD pour Certificate of Good Standing court form, 175 USD pour version long form.",
  },
  {
    code: "NM",
    name: "Nouveau-Mexique",
    portal: "https://enterprise.sos.nm.gov/search/business",
    portalLabel: "enterprise.sos.nm.gov",
    delay: "Instantané",
    notes: [
      "Recherche par nom OU par Business ID.",
      "Statuts : Active, Inactive, Dissolved.",
      "PAS d&apos;annual report obligatoire (unique aux US).",
      "Pas de franchise tax non plus.",
      "Risque principal : oubli du registered agent renewal.",
    ],
    cost: "Gratuit pour status check et téléchargement de Articles of Organization. Certificate of Good Standing gratuit.",
  },
];

export default function LlcStatusLookupPage() {
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
            <span>Lookup LLC SoS</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Statut LLC sur{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              Secretary of State
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Vérifie en 30 secondes si ta LLC est Active, Delinquent, ou
            Dissolved. Mercury et Stripe interrogent ces mêmes portails
            avant chaque grosse transaction.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          {STATES.map((s) => (
            <div
              key={s.code}
              className="p-6 rounded-2xl"
              style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block text-[12px] font-black uppercase tracking-[0.14em] px-2.5 py-1 rounded"
                    style={{ background: INK, color: CREAM }}
                  >
                    {s.code}
                  </span>
                  <h2 className="font-extrabold text-[20px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    {s.name}
                  </h2>
                </div>
                <a
                  href={s.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold"
                  style={{ color: BLUE }}
                >
                  Ouvrir le portail →
                </a>
              </div>
              <p className="text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
                <strong>{s.portalLabel}</strong> · Délai : {s.delay}
              </p>
              <ul className="space-y-1.5 mb-3">
                {s.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-[13px]" style={{ color: INK }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: BLUE }} />
                    <span dangerouslySetInnerHTML={{ __html: n }} />
                  </li>
                ))}
              </ul>
              <p className="text-[12px] italic" style={{ color: "rgba(45,16,15,0.65)" }}>
                <strong>Coût :</strong> {s.cost}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Que faire selon le statut
          </h2>
          <div className="space-y-3">
            <StatusCard
              status="Active"
              color={GREEN}
              text="Ta LLC est en règle. Tu peux continuer à opérer Mercury, Stripe, et signer des contrats. Continue à monitorer chaque trimestre."
            />
            <StatusCard
              status="Delinquent / Inactive / Forfeited"
              color={GOLD}
              text="Annual report ou franchise tax manqué. Tu as encore une fenêtre de 3-6 mois pour régulariser avant dissolution. Agir maintenant : déposer le rapport manqué + payer la pénalité (50-200 USD)."
            />
            <StatusCard
              status="Dissolved / Cancelled / Voided"
              color={RED}
              text="LLC administrativement dissoute. Mercury va bloquer ton compte. Reinstatement possible mais coûteux (200-500 USD + tous les rapports manqués). Le nom redevient public et peut être pris par quelqu'un d'autre après 12 mois."
            />
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
            Lookup limitation
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            Le statut SoS reflète uniquement l&apos;état civil de ta LLC
            au registre. Il ne te dit pas si tu es en règle avec :
          </p>
          <ul className="mt-2 space-y-1 text-[13.5px]" style={{ color: INK }}>
            <li>• Le Form 5472 + 1120 fédéral IRS (pénalité 25 000 USD).</li>
            <li>• La conformité Mercury / Stripe (KYC, beneficial owner).</li>
            <li>• Les obligations BCT et IRPP côté Tunisie.</li>
          </ul>
          <p className="text-[13.5px] mt-2" style={{ color: INK }}>
            Pour un audit complet,{" "}
            <Link href="/contact" className="font-bold underline" style={{ color: BLUE }}>
              écris-nous
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

function StatusCard({ status, color, text }: { status: string; color: string; text: string }) {
  return (
    <div className="p-4 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${color}` }}>
      <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color }}>
        {status}
      </p>
      <p className="text-[13.5px] leading-relaxed" style={{ color: INK }}>{text}</p>
    </div>
  );
}
