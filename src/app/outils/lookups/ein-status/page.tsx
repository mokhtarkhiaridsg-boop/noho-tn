import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Outils", url: "https://noho.tn/outils" },
  { name: "Lookups", url: "https://noho.tn/outils#lookups" },
  { name: "EIN IRS", url: "https://noho.tn/outils/lookups/ein-status" },
]);

export const metadata: Metadata = {
  title: "Lookup statut EIN sur IRS — vérification CP 575 et Form 147C",
  description:
    "L'IRS n'a pas de portail public pour vérifier un EIN. Voici comment vérifier ton EIN via CP 575, Form 147C, EIN responsible party search, et l'appel au 800-829-4933.",
  alternates: { canonical: "https://noho.tn/outils/lookups/ein-status" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

export default function EinStatusLookupPage() {
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
            <span>Lookup EIN IRS</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Vérifier le statut de ton{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              EIN IRS
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Contrairement aux Secretary of State, l&apos;IRS n&apos;a pas
            de portail public pour vérifier un EIN. Voici les 3 voies
            officielles pour obtenir une confirmation écrite.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <Method
            num="1"
            title="La CP 575 original — la lettre d'attribution"
            color={GREEN}
            badge="Le plus simple"
            steps={[
              "L'IRS envoie automatiquement la lettre CP 575 lors de l'attribution de ton EIN.",
              "Pour les non-residents qui appliquent par fax (procédure SS-4), délai 4-6 semaines.",
              "Pour les US persons qui appliquent en ligne, délai instantané (PDF téléchargeable).",
              "Cette lettre est ton document principal — Mercury, Stripe, banques US la demandent.",
              "Si tu l'as perdue, tu ne peux pas la regénérer. Passe à la méthode 2 (Form 147C).",
            ]}
          />

          <Method
            num="2"
            title="Form 147C — la verification letter"
            color={BLUE}
            badge="Si CP 575 perdu"
            steps={[
              "Appeler IRS Business & Specialty Tax Line : 800-829-4933 (depuis les US) ou +1 267 941 1099 (depuis l'étranger).",
              "Horaires : Lundi-Vendredi 7h-19h heure EST.",
              "Préparer : ton EIN, le nom légal exact de ta LLC, l'adresse, la date de formation, le nom du responsible party.",
              "L'agent IRS te transmet la confirmation Form 147C par fax ou par mail US (pas par email).",
              "Délai : fax immédiat OU 1-2 semaines mail.",
              "Coût : gratuit.",
            ]}
          />

          <Method
            num="3"
            title="Tax return déposé — proof of life IRS"
            color="#A88B45"
            badge="Si Form 147C bloqué"
            steps={[
              "Dépose un Form 5472 + 1120 pro-forma (déclaration annuelle obligatoire pour LLC non-US owned).",
              "L'IRS te renvoie un acknowledgment 4-6 semaines après dépôt postal.",
              "Cet acknowledgment confirme indirectement que ton EIN est actif dans leur système.",
              "Méthode lente mais infaillible.",
            ]}
          />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Pourquoi tu peux avoir besoin de cette vérification
          </h2>
          <div className="space-y-3">
            <Reason
              title="Mercury / Stripe / Wise verification request"
              text="Quand l'API IRS leur retourne un 'EIN not found' parce que la sync n'est pas faite, ils te demandent Form 147C pour confirmer manuellement."
            />
            <Reason
              title="Onboarding d'un nouveau partenaire / fournisseur"
              text="Certains gros fournisseurs US exigent une copie certifiée du CP 575 ou Form 147C avant de te facturer ou te payer."
            />
            <Reason
              title="Audit ou notification IRS"
              text="Si l'IRS t'envoie une notice (très rare pour LLC pass-through sans US income), tu as besoin de prouver que ton EIN est bien actif."
            />
            <Reason
              title="Cession ou changement de structure"
              text="Si tu vends ta LLC ou changes sa structure (multi-member, S-Corp election), le repreneur exige la verification de l'EIN avant le closing."
            />
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
            EIN inactif — c&apos;est rare mais réel
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            L&apos;IRS peut désactiver un EIN si :
          </p>
          <ul className="mt-2 space-y-1 text-[13.5px]" style={{ color: INK }}>
            <li>• La LLC associée a été dissoute administrativement par le SoS et n&apos;a pas redéposé pendant 24+ mois.</li>
            <li>• Le responsible party est décédé ou n&apos;est plus la personne déclarée.</li>
            <li>• La LLC a été convertie en C-Corp ou autre entité sans notification IRS.</li>
            <li>• Détection de fraude (rarissime pour les LLC tunisiennes).</li>
          </ul>
          <p className="text-[13.5px] mt-2" style={{ color: INK }}>
            Si Form 147C revient avec &quot;EIN no longer assigned&quot;,
            tu dois appliquer pour un nouvel EIN via{" "}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE }}>
              Form SS-4
            </a>
            . Délai 4-6 semaines.
          </p>
        </div>
      </section>
    </>
  );
}

function Method({ num, title, color, badge, steps }: { num: string; title: string; color: string; badge: string; steps: string[] }) {
  const CREAM = "#F7E6C2";
  const INK = "#2D100F";
  return (
    <div className="p-6 rounded-2xl" style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}>
      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center font-black text-[16px] rounded-full"
            style={{ width: 36, height: 36, background: INK, color: CREAM }}
          >
            {num}
          </span>
          <h3 className="font-extrabold text-[19px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {title}
          </h3>
        </div>
        <span
          className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded"
          style={{ background: color, color: "#fff" }}
        >
          {badge}
        </span>
      </div>
      <ol className="space-y-1.5">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-[13.5px]" style={{ color: INK }}>
            <span className="font-bold" style={{ color }}>{i + 1}.</span>
            <span dangerouslySetInnerHTML={{ __html: s }} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  const INK = "#2D100F";
  const BLUE = "#337485";
  return (
    <div className="p-4 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${BLUE}` }}>
      <p className="font-bold text-[14px] mb-1" style={{ color: INK }}>{title}</p>
      <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>{text}</p>
    </div>
  );
}
