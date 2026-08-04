"use client";

import { useState } from "react";
import Link from "next/link";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const RED = "#C73E2D";
const GREEN = "#2D7A4A";

type Answer = { value: string; label: string; note?: string };
type Question = { id: string; prompt: string; helper?: string; answers: Answer[] };

const QUESTIONS: Question[] = [
  {
    id: "revenue",
    prompt: "Tes revenus en devises — où en es-tu ?",
    helper: "Sois honnête. Le diagnostic ne marche que si la base est vraie.",
    answers: [
      { value: "active", label: "Je facture déjà des clients en USD ou EUR" },
      { value: "near", label: "Pas encore, mais dans les 3 à 6 prochains mois" },
      { value: "idea", label: "Idée stage — je n'ai pas encore de client" },
    ],
  },
  {
    id: "residency",
    prompt: "Tu es résident fiscal de quel pays ?",
    answers: [
      { value: "tn", label: "Tunisie" },
      { value: "fr", label: "France, Belgique, Suisse, Luxembourg" },
      { value: "ma_dz", label: "Maroc ou Algérie" },
      { value: "ca", label: "Canada" },
      { value: "us", label: "États-Unis" },
      { value: "other", label: "Autre (Émirats, Allemagne, etc.)" },
    ],
  },
  {
    id: "banking_history",
    prompt: "Tu as déjà essayé d'ouvrir une banque US (Mercury ou autre) ?",
    answers: [
      { value: "never", label: "Jamais essayé" },
      { value: "rejected", label: "Tenté et refusé", note: "On a un Plan B documenté" },
      { value: "approved", label: "Approuvé et opérationnel", note: "Une LLC existe déjà" },
    ],
  },
  {
    id: "vc",
    prompt: "Tu prévois lever des fonds VC dans les 18 prochains mois ?",
    answers: [
      { value: "yes", label: "Oui, c'est l'objectif explicite" },
      { value: "maybe", label: "Peut-être" },
      { value: "no", label: "Non, je bootstrap intentionnellement" },
    ],
  },
  {
    id: "activity",
    prompt: "Tu vends quoi exactement ?",
    answers: [
      { value: "services", label: "Services / consulting / freelance" },
      { value: "saas", label: "SaaS ou produit logiciel" },
      { value: "ecom_physical", label: "E-commerce avec stock physique" },
      { value: "ecom_digital", label: "E-commerce digital / dropshipping" },
      { value: "content", label: "Création de contenu / coaching / cours" },
      { value: "other", label: "Autre" },
    ],
  },
];

type Result = {
  fit: "solution-business" | "suivi-mensuel" | "defer" | "alternative" | "mercury-plan-b";
  personaLabel: string;
  headline: string;
  body: string;
  risks: string[];
  recommendation: string;
  cta: { label: string; href: string };
  honestNote?: string;
};

function computeResult(a: Record<string, string>): Result {
  const { revenue, residency, banking_history, vc, activity } = a;

  if (revenue === "idea") {
    return {
      fit: "defer",
      personaLabel: "Phase exploration",
      headline: "Garde ton argent pour l'instant.",
      body: "Tu es en phase exploration sans premier revenu en devises. Le Business (4 000 TND) coûte 4 000 TND et nécessite ensuite une maintenance annuelle US (environ 1 800-3 000 TND/an équivalent). Sans facture USD/EUR concrète, la LLC est un coût sans contrepartie.",
      risks: [
        "Une LLC inactive accumule quand même des obligations annuelles : Form 5472 (pénalité 25 000 USD par oubli, pas de plafond) + rapport annuel Wyoming.",
      ],
      recommendation:
        "Trouve ton premier client USD/EUR (Upwork, contrat, premier paiement). Reviens dès que la facture existe — la structure se monte en 14 jours.",
      cta: { label: "Lire les guides pour préparer le terrain →", href: "/fr" },
      honestNote:
        "Honest Self-Disclosure — je préfère te perdre comme prospect aujourd'hui plutôt que te vendre quelque chose qui ne sert à rien.",
    };
  }

  if ((vc === "yes" || vc === "maybe") && activity === "saas") {
    return {
      fit: "alternative",
      personaLabel: "Founder VC-track",
      headline: "Une LLC Wyoming n'est probablement pas la bonne structure pour toi.",
      body: "Si tu vises une levée de fonds VC dans les 18 mois, les fonds américains ne peuvent généralement pas investir dans une LLC — leurs Limited Partners ont des contraintes fiscales qui les bloquent. La structure standard pour VC est une Delaware C-Corp avec cap table en parts et préférences liquidatives.",
      risks: [
        "Démarrer en LLC puis convertir en C-Corp Delaware coûte ~3 000 USD et déclenche un event fiscal.",
        "Tu auras à expliquer la conversion à chaque investisseur — friction.",
      ],
      recommendation:
        "Démarre directement en Delaware C-Corp. NOHO ne couvre pas ce cas d'usage — autant te le dire honnêtement plutôt que te vendre la mauvaise structure.",
      cta: { label: "Réserver un appel pour confirmer →", href: "/fr/appel" },
      honestNote:
        "Honest Self-Disclosure — je ne vais pas te vendre une Wyoming LLC que tu devras convertir dans 14 mois.",
    };
  }

  if (banking_history === "approved" && (activity === "services" || activity === "content")) {
    return {
      fit: "suivi-mensuel",
      personaLabel: "LLC en place — gestion continue",
      headline: "Tu n'as pas besoin de la Solution. Tu as besoin du Suivi mensuel.",
      body: "Tu as déjà LLC + EIN + Mercury opérationnel. Le Business (4 000 TND) (formation initiale) ne t'apporte rien. Ce qui te fait gagner du temps maintenant, c'est l'opérationnel mensuel : rappels Form 5472, rapport annuel Wyoming, gestion courrier prioritaire, brand, revue trimestrielle.",
      risks: [
        "Form 5472 oublié = 25 000 USD de pénalité IRS + 25 000 USD tous les 30 jours après mise en demeure, sans plafond.",
        "Rapport annuel Wyoming oublié = LLC dissoute administrativement.",
        "Sans gestion continue, le compte Mercury peut être gelé.",
      ],
      recommendation: "Suivi mensuel — 1 200 TND/mois, mois par mois.",
      cta: { label: "Réserver l'appel pour cadrer le Suivi mensuel →", href: "/fr/appel" },
    };
  }

  if (banking_history === "rejected") {
    return {
      fit: "mercury-plan-b",
      personaLabel: "Refus Mercury — Plan B documenté",
      headline: "Un refus n'est pas une fatalité.",
      body: "Mercury a un taux d'approbation imparfait pour les non-résidents, particulièrement quand le dossier d'origine était incomplet. Notre playbook : (1) re-soumission Mercury avec dossier renforcé OU (2) bascule sur Relay (taux d'approbation supérieur), Wise Business comme rail de réception, Airwallex pour gros volumes.",
      risks: [
        "Re-soumettre sans rien changer = même résultat.",
        "Sans accompagnement, risque de cumuler refus et finir blacklisté.",
      ],
      recommendation:
        "Business (4 000 TND) 4 000 TND si pas encore de LLC, OU appel de diagnostic spécifique si LLC existe déjà.",
      cta: { label: "Réserver l'appel pour le Plan B →", href: "/fr/appel" },
    };
  }

  if (
    (residency === "tn" || residency === "fr" || residency === "ma_dz" || residency === "ca" || residency === "other") &&
    (revenue === "active" || revenue === "near") &&
    (activity === "services" || activity === "content")
  ) {
    return {
      fit: "solution-business",
      personaLabel:
        residency === "tn" ? "Freelance / consultant tunisien" :
        residency === "fr" ? "Diaspora franco-tunisienne" : "Fondateur non-résident services",
      headline: "Business (4 000 TND) — le profil correspond.",
      body: "Activité de services depuis une juridiction non-US, revenu en USD/EUR, pas de levée VC prévue. C'est le cœur de cible de la Solution : formation LLC Wyoming, EIN, adresse postale réelle à LA, Form 1583 notarisé, brand, site 1-pager, social, stratégie, accompagnement Mercury + Stripe.",
      risks: [
        "Source-of-funds non documentée = blocages bancaires à 3-6 mois.",
        "Form 5472 annuel obligatoire dès la première année.",
        "Stripe : approbation non garantie. Majorité passe ; 20-35% rencontrent des frictions.",
      ],
      recommendation: "Business (4 000 TND) 4 000 TND une fois. 14 jours pour les éléments contractuels. Mercury suit selon profil.",
      cta: { label: "Réserver l'appel de 30 min →", href: "/fr/appel" },
    };
  }

  if (activity === "ecom_physical") {
    return {
      fit: "solution-business",
      personaLabel: "E-commerce avec stock physique",
      headline: "Business (4 000 TND) possible, avec un warning logistique important.",
      body: "Une LLC peut servir d'entité de facturation, MAIS la fin du dispositif US de minimis (29 août 2025) a changé l'équation : tout colis vers les USA nécessite désormais une entrée douanière complète. Le modèle expédition unitaire depuis la Tunisie vers le client US n'est plus rentable. Norme : pré-positionner l'inventaire en 3PL US.",
      risks: [
        "Modèle 'expédition individuelle depuis la Tunisie' cassé par fin du de minimis.",
        "Stripe flag les opérations cross-border non pré-positionnées.",
        "Le 3PL US coûte 200-800 USD/mois selon volume.",
      ],
      recommendation: "Business (4 000 TND) 4 000 TND si tu as un plan 3PL US OU FBT/FBA. Sinon, résous d'abord la logistique.",
      cta: { label: "Réserver l'appel pour cadrer la logistique →", href: "/fr/appel" },
    };
  }

  if (activity === "ecom_digital") {
    return {
      fit: "solution-business",
      personaLabel: "E-commerce digital",
      headline: "Business (4 000 TND) possible, mais le positionnement est critique.",
      body: "Une LLC peut servir, mais Stripe pénalise le profil 'dropshipping classique' (marketing direct + supplier overseas + pas de marque propriétaire). Le positionnement qui passe : private-label avec inventaire pré-positionné US, ou produit numérique. Le positionnement qui échoue : drop-ship générique AliExpress.",
      risks: [
        "Stripe ferme régulièrement les comptes drop-ship 3-6 mois après approbation.",
        "Compte fermé = fonds bloqués 90-180 jours.",
      ],
      recommendation:
        "Business (4 000 TND) 4 000 TND si private-label OU produit numérique. Si drop-ship générique : autre structure.",
      cta: { label: "Réserver l'appel pour évaluer →", href: "/fr/appel" },
    };
  }

  if (residency === "us") {
    return {
      fit: "defer",
      personaLabel: "Résident US",
      headline: "NOHO n'est pas conçu pour les résidents américains.",
      body: "Notre offre est structurée pour des fondateurs non-résidents qui ont besoin de l'infrastructure US sans présence physique. Si tu es résident US, ta situation est mieux servie par d'autres structures.",
      risks: [],
      recommendation: "Forme la LLC directement via ton État de résidence — coût ~50-300 USD.",
      cta: { label: "Retour à l'accueil", href: "/fr" },
      honestNote: "Pas la peine de payer un intermédiaire pour quelque chose que tu peux faire toi-même.",
    };
  }

  return {
    fit: "solution-business",
    personaLabel: "Profil compatible Solution",
    headline: "Business (4 000 TND) probable — confirmation via appel.",
    body: "Le diagnostic indique un profil compatible, mais ta combinaison de réponses mérite une validation directe sur l'appel de 30 minutes.",
    risks: ["Le diagnostic automatisé couvre 80% des cas. Les 20% restants méritent une discussion humaine."],
    recommendation: "Réserve l'appel. Si la Business (4 000 TND) ne fait pas sens, je te le dirai honnêtement.",
    cta: { label: "Réserver l'appel de 30 min →", href: "/fr/appel" },
  };
}

export function DiagnosticClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);

  const currentQuestion = step >= 1 && step <= QUESTIONS.length ? QUESTIONS[step - 1] : null;

  function startDiagnostic() { setStep(1); setCurrentSelection(null); }
  function selectAnswer(v: string) { setCurrentSelection(v); }
  function nextStep() {
    if (!currentSelection || !currentQuestion) return;
    setAnswers({ ...answers, [currentQuestion.id]: currentSelection });
    setCurrentSelection(null);
    setStep(step < QUESTIONS.length ? step + 1 : 6);
  }
  function previousStep() {
    if (step <= 1) return;
    const prevQ = QUESTIONS[step - 2];
    setCurrentSelection(answers[prevQ.id] ?? null);
    setStep(step - 1);
  }
  function restart() { setStep(0); setAnswers({}); setCurrentSelection(null); }

  if (step === 0) {
    return (
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 sm:p-10 rounded-3xl" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(45,16,15,0.12)" }}>
            <p className="text-[12px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
              60 secondes · 5 questions
            </p>
            <h2 className="font-extrabold mb-4 leading-tight" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Prêt à commencer ?
            </h2>
            <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.7)" }}>
              Tu peux reculer à tout moment. Ton email n&apos;est pas demandé.
            </p>
            <button type="button" onClick={startDiagnostic}
              className="font-black px-10 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}>
              Commencer le diagnostic →
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (currentQuestion) {
    return (
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[12px] font-black uppercase tracking-[0.15em]" style={{ color: INK }}>
                Question {step} sur {QUESTIONS.length}
              </p>
              <p className="text-[12px]" style={{ color: "rgba(45,16,15,0.55)" }}>
                {Math.round((step / QUESTIONS.length) * 100)}%
              </p>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(45,16,15,0.12)" }}>
              <div className="h-full transition-all duration-300" style={{ width: `${(step / QUESTIONS.length) * 100}%`, background: INK }} />
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl mb-5" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(45,16,15,0.10)" }}>
            <h2 className="font-extrabold mb-2 leading-tight" style={{ fontSize: "clamp(1.35rem, 3vw, 1.85rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              {currentQuestion.prompt}
            </h2>
            {currentQuestion.helper && (
              <p className="text-[13px] mb-5 italic" style={{ color: "rgba(45,16,15,0.55)" }}>{currentQuestion.helper}</p>
            )}
            <div className="flex flex-col gap-2 mt-4">
              {currentQuestion.answers.map((ans) => {
                const isSelected = currentSelection === ans.value;
                return (
                  <button key={ans.value} type="button" onClick={() => selectAnswer(ans.value)}
                    className="text-left p-4 rounded-xl transition-all border-2"
                    style={{
                      background: isSelected ? INK : CREAM,
                      color: isSelected ? CREAM : INK,
                      borderColor: isSelected ? INK : "transparent",
                    }}>
                    <p className="font-black text-[14.5px] leading-snug">{ans.label}</p>
                    {ans.note && <p className="text-[12px] mt-1 opacity-75">{ans.note}</p>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button type="button" onClick={previousStep} disabled={step === 1}
              className="text-[13px] font-black px-5 py-3 rounded-xl transition-all disabled:opacity-30"
              style={{ background: "transparent", color: INK }}>
              ← Précédent
            </button>
            <button type="button" onClick={nextStep} disabled={!currentSelection}
              className="font-black px-6 py-3 rounded-xl text-[14px] transition-all disabled:opacity-40 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: INK, color: CREAM, boxShadow: currentSelection ? "0 4px 18px rgba(45,16,15,0.28)" : "none" }}>
              {step === QUESTIONS.length ? "Voir le résultat →" : "Suivant →"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const result = computeResult(answers);
  const fitColor = result.fit === "solution-business" || result.fit === "suivi-mensuel" ? GREEN : result.fit === "defer" || result.fit === "alternative" ? RED : BLUE;

  return (
    <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
      <div className="max-w-2xl mx-auto">
        <div className="p-7 sm:p-10 rounded-3xl" style={{ background: "#fff", boxShadow: "0 12px 50px rgba(45,16,15,0.15)" }}>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: fitColor }}>
            Profil détecté · {result.personaLabel}
          </p>
          <h2 className="font-extrabold mb-5 leading-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {result.headline}
          </h2>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.85)" }}>{result.body}</p>

          {result.risks.length > 0 && (
            <div className="p-5 rounded-2xl mb-6" style={{ background: "#fef3c7", borderLeft: `3px solid ${RED}` }}>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-3" style={{ color: RED }}>
                Risques réels — Loss Aversion documentée
              </p>
              <ul className="space-y-2 list-disc pl-5">
                {result.risks.map((r, i) => (
                  <li key={i} className="text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-5 rounded-2xl mb-6" style={{ background: CREAM }}>
            <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-2" style={{ color: BLUE }}>
              Recommandation
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: INK }}>{result.recommendation}</p>
          </div>

          {result.honestNote && (
            <p className="text-[12px] italic mb-6" style={{ color: "rgba(45,16,15,0.55)" }}>{result.honestNote}</p>
          )}

          <Link href={result.cta.href}
            className="block w-full text-center font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}>
            {result.cta.label}
          </Link>

          <div className="mt-6 pt-5 border-t" style={{ borderColor: "#e5dccb" }}>
            <button type="button" onClick={restart} className="text-[13px] underline" style={{ color: "rgba(45,16,15,0.55)" }}>
              ↻ Refaire le diagnostic
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
