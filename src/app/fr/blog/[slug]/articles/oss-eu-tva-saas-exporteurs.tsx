import Link from "next/link";

export function ossEuTvaSaas() {
  return (
    <>
      <p>
        Tu vends ton SaaS / e-book / formation online aux clients
        européens depuis ta LLC US. Tu factures via Stripe en USD. Tout
        va bien jusqu&apos;à un email de Stripe te demandant ton numéro
        OSS. Le One Stop Shop est l&apos;obligation TVA européenne pour
        ventes B2C de services digitaux. Voici quand t&apos;enregistrer,
        comment, et ce qui se passe si tu ignores.
      </p>

      <h2>Le seuil de 10 000 EUR — la ligne</h2>
      <ul>
        <li>
          Si tu vends des services digitaux B2C (e-books, SaaS, online
          courses, downloads) à des clients résidant dans l&apos;UE, et
          que tes ventes EU dépassent <strong>10 000 EUR cumulés sur
          l&apos;année civile</strong>, tu dois enregistrer un OSS.
        </li>
        <li>
          En dessous de 10 000 EUR/an, tu peux appliquer la TVA de ton
          propre pays (ou pas de TVA si LLC US, ce qui est ton cas).
        </li>
        <li>
          Au-dessus, tu dois facturer chaque client EU à la <strong>TVA
          de son pays de résidence</strong> (Italie 22%, France 20%,
          Allemagne 19%, Hongrie 27%, etc.) et reverser à
          l&apos;administration EU via OSS.
        </li>
      </ul>

      <h2>Ce qui compte comme B2C services digitaux</h2>
      <ul>
        <li>SaaS subscriptions (Notion, mais aussi tes propres app).</li>
        <li>E-books / PDF guides.</li>
        <li>Online courses / video access.</li>
        <li>Telecom / broadcasting / TV streaming.</li>
        <li>App Store / Google Play downloads.</li>
        <li>Music / video streaming subscriptions.</li>
      </ul>

      <h2>Ce qui N&apos;est PAS dans le scope OSS</h2>
      <ul>
        <li>Ventes B2B (l&apos;acheteur a un VAT number et applique
          reverse-charge).</li>
        <li>Services physiques / consulting à distance avec interaction
          humaine (ces services sont souvent B2B).</li>
        <li>Ventes de biens physiques (couvertes par autres règles
          IOSS pour &lt; 150 EUR ou import duty).</li>
      </ul>

      <h2>Comment t&apos;enregistrer si tu opères depuis une LLC US</h2>
      <p>
        Tu es non-EU business. Tu te qualifies pour le{" "}
        <strong>Non-Union Scheme OSS</strong> :
      </p>
      <ol>
        <li>
          Choisis un pays EU comme &quot;Member State of
          Identification&quot; — typiquement Irlande (anglais) ou Malte
          (anglais, bureaucratie légère).
        </li>
        <li>
          Inscris-toi sur le portail OSS du pays choisi
          (revenue.ie pour l&apos;Irlande, par exemple).
        </li>
        <li>
          Soumets : ton EIN US, ton adresse business US (5062
          Lankershim), un proof of US business registration (Wyoming
          Certificate of Good Standing).
        </li>
        <li>
          Délai d&apos;approval : 2-6 semaines.
        </li>
        <li>
          Tu reçois un numéro OSS (format EU + ton pays + chiffres).
        </li>
      </ol>

      <h2>Comment gérer le facturage post-OSS</h2>
      <ul>
        <li>
          Stripe Tax (~1,000 USD/an pour 200K USD revenue) calcule
          automatiquement la bonne TVA selon le pays de résidence du
          client (vérifié par adresse de carte + IP).
        </li>
        <li>
          Stripe ajoute la TVA au prix affiché, tu n&apos;as rien à
          changer côté pricing.
        </li>
        <li>
          Tu reçois ton invoice via Stripe avec ligne TVA séparée.
        </li>
        <li>
          Tu déclares trimestriellement via le portail OSS
          (15 jours après la fin du trimestre) et tu reverses la TVA
          collectée. Stripe ne reverse PAS pour toi — tu reçois le
          gross et tu reverses depuis ton compte business.
        </li>
      </ul>

      <h2>Le coût caché OSS</h2>
      <ul>
        <li>
          Tu perds 17-27% de tes revenus EU en TVA reversée. Sur un
          client français à 100 EUR/mois, tu perds 20 EUR/mois.
        </li>
        <li>
          Frais Stripe Tax : ~0.5% du revenu total.
        </li>
        <li>
          Si tu utilises un comptable EU pour les déclarations
          trimestrielles : ~500-1000 EUR/an.
        </li>
      </ul>

      <h2>L&apos;alternative — Merchant of Record (Paddle, Lemon Squeezy)</h2>
      <p>
        Au lieu d&apos;enregistrer un OSS, tu peux utiliser un Merchant
        of Record (MoR) :
      </p>
      <ul>
        <li>
          Paddle et Lemon Squeezy (Stripe-owned depuis 2024) prennent
          5% + 50 cents par transaction.
        </li>
        <li>
          En échange, ils deviennent le merchant de droit. Ils gèrent
          TVA EU + sales tax US + chargebacks + risk.
        </li>
        <li>
          Tu reçois un payout net de tout ça. Pas d&apos;OSS à
          enregistrer, pas de déclaration trimestrielle, pas de
          comptable EU.
        </li>
      </ul>
      <p>
        Compare les coûts via le{" "}
        <Link href="/fr/outils/calculateurs/stripe-fees" className="font-bold underline" style={{ color: "#337485" }}>
          calculateur frais Stripe vs Paddle vs Lemon Squeezy
        </Link>
        . Pour la plupart des fondateurs tunisiens sous 50K USD/an, le
        MoR est la voie pragmatique.
      </p>

      <h2>Que se passe-t-il si tu ignores l&apos;OSS</h2>
      <ul>
        <li>
          Phase 1 — automatique : Stripe peut suspendre tes payouts EU
          si Stripe Tax détecte que tu dépasses le seuil et n&apos;as pas
          de numéro OSS configuré.
        </li>
        <li>
          Phase 2 — réclamation : l&apos;administration TVA du pays du
          client peut t&apos;envoyer une réclamation (souvent via Stripe
          ou directement via ton site).
        </li>
        <li>
          Phase 3 — recouvrement : pénalité 10-25% du chiffre
          d&apos;affaires non déclaré + intérêts de retard. Le pays peut
          demander assistance à la DGI tunisienne via la coopération
          fiscale UE-Tunisie (établie en 2017).
        </li>
        <li>
          Phase 4 — blocage : suspension de tes payouts Stripe vers
          Mercury. Très rare mais documenté pour les e-com EU
          dropshippers.
        </li>
      </ul>

      <h2>Cas spéciaux par type de produit</h2>
      <ul>
        <li>
          <strong>Course / formation en ligne avec live</strong> :
          considéré comme service intellectuel, pas service digital
          purement automatisé. Peut sortir du scope OSS si interactif
          humain réel.
        </li>
        <li>
          <strong>SaaS avec onboarding humain</strong> : grey area. La
          partie SaaS est digital, l&apos;onboarding peut être qualifié
          de service B2B/B2C selon usage.
        </li>
        <li>
          <strong>Vente de biens physiques avec digital
          included</strong> (livre papier + e-book accès) : règles
          mixtes, partiellement IOSS.
        </li>
      </ul>

      <h2>Recommandation NOHO pour un fondateur SaaS tunisien
        sous 100K USD/an de revenu EU</h2>
      <ol>
        <li>
          Surveille tes ventes EU mensuellement. Au seuil 10K EUR
          cumulés sur l&apos;année, agis dans les 60 jours.
        </li>
        <li>
          Choix simple : passe à Paddle ou Lemon Squeezy. Économie de
          temps + zéro paperwork + 5% acceptable. Le calcul est très
          souvent positif net.
        </li>
        <li>
          Si tu insistes sur Stripe direct (raisons de margin) :
          enregistre OSS en Irlande, active Stripe Tax, mets une ligne
          dans ta compta trimestrielle pour le reversement.
        </li>
      </ol>
    </>
  );
}
