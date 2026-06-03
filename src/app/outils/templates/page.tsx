import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Templates — Operating Agreement, W-8BEN, Form 1583 et plus",
  description:
    "Templates gratuits pour ta LLC US : Operating Agreement Wyoming, W-8BEN pré-rempli foreign individual, Form 1583 USPS pré-rempli, contrats freelance US.",
  alternates: { canonical: "https://noho.tn/outils/templates" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";

type TemplateItem = {
  title: string;
  desc: string;
  status: "available" | "coming";
  use: string;
  href?: string;
};

const TEMPLATES: TemplateItem[] = [
  {
    title: "Operating Agreement Wyoming SMLLC",
    desc: "Document de gouvernance pour LLC Wyoming à associé unique non-US person. Format Word + PDF. Signé et daté = exigé par Mercury, Stripe, Wise.",
    status: "coming",
    use: "Étape 2 de ta formation LLC, juste après les Articles of Organization.",
  },
  {
    title: "W-8BEN pré-rempli foreign individual",
    desc: "Formulaire IRS W-8BEN avec sections pré-cochées pour un fondateur tunisien résident en TN. Treaty benefits Tunisia-US activés. Signé manuellement après remplissage.",
    status: "coming",
    use: "Soumis à Stripe, Mercury, Upwork, ou à tout client US qui demande tax form.",
  },
  {
    title: "Form 1583 USPS pré-rempli",
    desc: "Form 1583 (USPS Application for Delivery of Mail Through Agent) avec adresse 5062 Lankershim et agent NOHO pré-rempli. À signer devant notaire CA — Mokhtar est sur place.",
    status: "coming",
    use: "Étape 4 de la formation : autorise NOHO à recevoir ton courrier en ton nom.",
  },
  {
    title: "Contrat freelance US-anglais (SaaS/Services)",
    desc: "Master Service Agreement template anglais pour facturer un client US depuis ta LLC. Inclut Net 30, IP assignment, indemnification, governing law.",
    status: "coming",
    use: "Premier deal avec un client US : tu envoies ce MSA + un SoW pour le scope.",
  },
  {
    title: "Cover letter Mercury KYC enhanced",
    desc: "Lettre type pour accompagner ton application Mercury : narrative business + déclaration source-of-funds + références. Augmente le taux d&apos;approbation.",
    status: "coming",
    use: "Joint en PDF à l&apos;application Mercury avant soumission.",
  },
  {
    title: "Réponse type Stripe verification request",
    desc: "Quand Stripe demande des docs supplémentaires (TVA OSS, beneficial owner, business activity proof), voici le template de réponse documentée.",
    status: "coming",
    use: "Reçu un email Stripe te demandant des docs ? Tu as 7 jours pour répondre proprement.",
  },
  {
    title: "Dossier BCT source-of-funds (TN)",
    desc: "Package PDF que tu présentes à BIAT/UIB/Attijari pour justifier un wire entrant USD &gt; 10K. Inclut narrative + factures + contrats.",
    status: "coming",
    use: "Avant chaque gros wire vers ton PPR USD, prépare ce dossier proactivement.",
  },
  {
    title: "NDA bilatéral US-style (FR + EN)",
    desc: "Non-disclosure agreement template court (2 pages) pour signer avec un partenaire / client / contractor US. Format bilingue FR-EN.",
    status: "coming",
    use: "Premier appel discovery avec un prospect US qui demande à voir ton process.",
  },
  {
    title: "Annexe Operating Agreement — Member ajouté",
    desc: "Si tu passes de SMLLC à multi-member (ajout d&apos;un cofondateur), voici l&apos;amendment template à signer + déposer auprès du SoS Wyoming.",
    status: "coming",
    use: "Conversion SMLLC → multi-member lors d&apos;un raise ou d&apos;une cofondation.",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Templates</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Templates juridiques &{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              fiscaux
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Operating Agreement, W-8BEN, Form 1583, contrats freelance US,
            dossiers KYC. Tous les documents qu&apos;un fondateur tunisien
            d&apos;une LLC US utilise dans sa première année.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEMPLATES.map((t) => (
              <div
                key={t.title}
                className="p-5 rounded-2xl flex flex-col gap-3"
                style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className="inline-block text-[9.5px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded"
                    style={{ background: t.status === "available" ? GREEN : GOLD, color: t.status === "available" ? "#fff" : INK }}
                  >
                    {t.status === "available" ? "Disponible" : "Bientôt"}
                  </span>
                </div>
                <h3 className="font-extrabold text-[16px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {t.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }} dangerouslySetInnerHTML={{ __html: t.desc }} />
                <p className="text-[12px] italic mt-auto" style={{ color: BLUE }}>
                  <strong>Quand l&apos;utiliser</strong> : {t.use}
                </p>
                {t.status === "available" && t.href && (
                  <Link
                    href={t.href}
                    className="inline-block mt-2 text-[12.5px] font-bold underline"
                    style={{ color: INK }}
                  >
                    Télécharger →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Les templates arrivent
          </h2>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.75)" }}>
            On finalise la version juridiquement vérifiée de chaque
            template avant publication. Si tu en as besoin{" "}
            <strong>maintenant</strong>, on te les fournit personnalisés
            dans le cadre de le Business ou du Suivi mensuel.
          </p>
          <Link
            href="/contact"
            className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM }}
          >
            Demander un template →
          </Link>
        </div>
      </section>
    </>
  );
}
