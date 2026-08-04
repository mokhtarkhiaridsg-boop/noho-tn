import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "FAQ", url: "https://nohomailboxtunis.com/fr/faq" },
]);

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes des fondateurs et étudiants tunisiens",
  description:
    "Tout ce que les Tunisiens demandent avant de commander : prix en dinars, légalité, délais, banque, Stripe, université US, visa F-1, conformité annuelle.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Combien coûte la Solution en dinars ?", acceptedAnswer: { "@type": "Answer", text: "4 000 TND une fois. Tarif Tunisia calibré en parité de pouvoir d'achat. Le tarif équivalent côté US est en dollars sur nohomailbox.org." } },
    { "@type": "Question", name: "Est-ce légal pour un résident tunisien ?", acceptedAnswer: { "@type": "Answer", text: "Oui. La loi de finances 2026 autorise les résidents tunisiens à détenir des comptes en devises étrangères. La LLC américaine est un véhicule juridique américain reconnu par l'IRS." } },
    { "@type": "Question", name: "Combien de temps prend la mise en place ?", acceptedAnswer: { "@type": "Answer", text: "14 jours pour les éléments contractuels de la Solution. L'EIN suit selon le délai IRS pour non-résidents (4-6 semaines). Mercury suit selon profil (3-6 semaines)." } },
    { "@type": "Question", name: "Comment payer depuis la Tunisie ?", acceptedAnswer: { "@type": "Answer", text: "Virement TND vers compte tunisien NOHO. Carte technologique TND si plafond suffisant. D17/Flouci en cours d'intégration." } },
  ],
};

const FAQ_GROUPS = [
  {
    group: "Prix & paiement",
    items: [
      {
        q: "Combien coûte la Solution en dinars ?",
        a: "4 000 TND une fois. C'est le tarif pour les résidents tunisiens — calibré en parité de pouvoir d'achat. Le tarif équivalent côté US est en dollars sur nohomailbox.org (2 000 USD).",
      },
      {
        q: "Combien coûte le Suivi mensuel ?",
        a: "1 200 TND par mois. Mois par mois, sans engagement annuel. Tu peux annuler à la fin de n'importe quel mois.",
      },
      {
        q: "Combien coûte le Portail Étudiants ?",
        a: "1 800 TND par année académique. Couvre la candidature + l'adresse US + l'I-20 + la coordination visa F-1.",
      },
      {
        q: "Comment payer depuis la Tunisie ?",
        a: "Virement vers compte bancaire NOHO en TND (RIB fourni après l'appel de cadrage). Carte technologique TND si plafond suffisant. D17 et Flouci en cours d'intégration.",
      },
      {
        q: "Pourquoi un tarif en dinars différent du tarif USD ?",
        a: "Parité de pouvoir d'achat. Côté Tunisie, payer 2 000 USD = ~6 200 TND est lourd pour le pouvoir d'achat local. 4 000 TND reflète une calibration honnête. Les services rendus sont identiques côté US ou TN.",
      },
      {
        q: "Y a-t-il un remboursement possible ?",
        a: "Le Business (4 000 TND) est non-remboursable une fois le filing Wyoming initié (jour 2). Avant ce point — remboursement complet moins frais bancaires. Le Suivi mensuel est annulable à tout moment sans frais."
      },
    ],
  },
  {
    group: "Légalité & fiscalité",
    items: [
      {
        q: "Est-ce légal pour un résident tunisien d'avoir une LLC américaine ?",
        a: "Oui. La LLC américaine est un véhicule juridique américain réglementé par l'IRS. La loi de finances tunisienne 2026 (en vigueur depuis le 1er janvier 2026) autorise les résidents tunisiens à détenir des comptes en devises étrangères. NOHO accompagne la structure ; chaque client doit consulter un fiscaliste tunisien pour sa situation déclarative personnelle.",
      },
      {
        q: "Vais-je payer des impôts deux fois ?",
        a: "Possiblement, selon ta situation. La LLC paie ses propres taxes US (Form 5472 + Form 1120 pro forma annuels). Le bénéficiaire effectif tunisien reste soumis à ses obligations déclaratives en Tunisie sur son revenu mondial. La convention fiscale franco-tunisienne et la coordination CPA US + fiscaliste TN permettent d'éviter la double imposition stricte dans la plupart des cas. À discuter avec ton fiscaliste.",
      },
      {
        q: "Que se passe-t-il avec la CRS de septembre 2026 ?",
        a: "La Tunisie démarre l'échange automatique d'information avec l'OCDE le 1er septembre 2026. Les banques de juridictions participantes (UE, UK, Suisse, etc.) rapportent automatiquement à la DGI tunisienne les comptes détenus par résidents tunisiens. Les États-Unis ne sont PAS signataires du CRS — les comptes bancaires d'une LLC américaine ne sont pas inclus dans ce périmètre.",
      },
      {
        q: "Form 5472 — c'est quoi cette pénalité de 25 000 USD ?",
        a: "C'est l'obligation annuelle de toute LLC américaine détenue à 25%+ par un non-résident. Pénalité 25 000 USD par formulaire oublié + 25 000 USD tous les 30 jours après mise en demeure IRS, sans plafond. Le Suivi mensuel NOHO (1 200 TND/mois) inclut la coordination de cette déclaration avec un CPA US partenaire.",
      },
    ],
  },
  {
    group: "Banque & paiements",
    items: [
      {
        q: "Mercury va-t-il m'approuver ?",
        a: "Mercury approuve la majorité des LLC non-résidentes bien structurées. Mais 20-35% rencontrent une friction (refus initial, demandes supplémentaires). Si Mercury refuse, on a un Plan B documenté : Relay, Wise Business, Airwallex selon le cas.",
      },
      {
        q: "Stripe va-t-il m'approuver ?",
        a: "Stripe US sur LLC américaine bien structurée approuve la majorité. Les profils à risque (dropshipping générique, crypto, certains services à haut chargeback) sont rejetés. On t'aide à structurer le site et le profil pour maximiser les chances. Plan B Paddle / Lemon Squeezy si Stripe refuse.",
      },
      {
        q: "Et Wise / Payoneer ?",
        a: "Wise Business marche en complément de Mercury (rail de réception multi-devises). Payoneer est moins recommandé en 2026 (commissions élevées, dispositions changeantes). Pour les paiements freelance Upwork/Fiverr, Wise Business + Mercury est la combinaison standard.",
      },
    ],
  },
  {
    group: "Portail Étudiants",
    items: [
      {
        q: "Qui peut postuler au Portail Étudiants ?",
        a: "Tout étudiant tunisien (ou diaspora francophone) qui vise une université américaine pour Bachelor ou Master. Idéal pour candidatures Top 50 US. On accompagne aussi les community colleges et les universités d'État.",
      },
      {
        q: "Garantissez-vous l'admission ?",
        a: "Non. Aucun service sérieux ne peut garantir une admission. On accompagne le dossier de la manière la plus solide possible — shortlist, essais, deadlines, I-20 — et on est honnête sur les chances réalistes selon ton profil GPA + tests.",
      },
      {
        q: "Garantissez-vous le visa F-1 ?",
        a: "Non. La décision visa F-1 revient au consulat des États-Unis à Tunis. On coordonne avec un avocat d'immigration américain pour préparer le dossier le plus solide, et on prépare l'entretien consulat (simulation, questions types, documents). Le taux d'octroi du visa F-1 pour étudiants tunisiens avec dossier solide est élevé mais jamais 100%.",
      },
      {
        q: "Et après l'admission — l'adresse US sert à quoi pendant les études ?",
        a: "Pendant tes 4 ans : courrier campus (relevés bancaires, lettres administratives), documents SEVIS et F-1 entre les semestres, paperwork pour stages OPT/CPT, certains documents IRS si tu travailles on-campus. L'adresse stable américaine est utile particulièrement entre les déménagements de dortoir.",
      },
    ],
  },
  {
    group: "Storefront & équipe",
    items: [
      {
        q: "Vous êtes vraiment à 5062 Lankershim ?",
        a: "Oui. Storefront physique à North Hollywood, California. Ouvert au public en horaires US. Enregistré auprès de l'USPS comme CMRA (Commercial Mail Receiving Agency). Tu peux passer si tu vas à LA.",
      },
      {
        q: "Qui prend l'appel de 30 minutes ?",
        a: "L'équipe NOHO côté diaspora tunisienne. Pas un SDR offshore, pas un chatbot. Capacité limitée à 4 appels par jour — délai 3-7 jours quand le calendrier est plein.",
      },
      {
        q: "Quelle langue pour l'appel ?",
        a: "Français principalement. TN-Arabizi accepté si tu préfères. Anglais si nécessaire pour aborder le contenu juridique US.",
      },
    ],
  },
];

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            FAQ
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.75)" }}>
            Tout ce que les fondateurs et étudiants tunisiens demandent avant
            de commander — prix, légalité, délais, banque, université US,
            visa.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          {FAQ_GROUPS.map((g) => (
            <div key={g.group}>
              <h2
                className="font-extrabold text-[22px] mb-4 pb-2 border-b"
                style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif", borderColor: "#e5dccb" }}
              >
                {g.group}
              </h2>
              <div className="space-y-3">
                {g.items.map((q, idx) => (
                  <details
                    key={idx}
                    className="group p-4 rounded-xl cursor-pointer"
                    style={{ background: CREAM }}
                  >
                    <summary className="font-black text-[15px] flex items-start gap-3 list-none" style={{ color: INK }}>
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-[14px] transition-transform group-open:rotate-45"
                        style={{ background: INK, color: CREAM }}
                      >
                        +
                      </span>
                      <span>{q.q}</span>
                    </summary>
                    <p className="text-[14px] leading-relaxed mt-3 pl-9" style={{ color: "rgba(45,16,15,0.82)" }}>
                      {q.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Ta question n&apos;est pas listée ?
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Réserve l&apos;appel de 30 minutes — on couvre les nuances qui
            ne tiennent pas dans une FAQ écrite.
          </p>
          <Link
            href="/fr/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Réserver l&apos;appel →
          </Link>
        </div>
      </section>
    </>
  );
}
