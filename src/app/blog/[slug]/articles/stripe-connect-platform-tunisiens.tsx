import Link from "next/link";

export function stripeConnectTunisiens() {
  return (
    <>
      <p>
        Stripe Connect te permet de devenir une plateforme de paiement —
        au lieu de juste recevoir des paiements pour ton propre business,
        tu peux orchestrer des paiements entre vendeurs et acheteurs, et
        prélever une commission sur chaque transaction. Marketplace,
        SaaS multi-vendeurs, agence avec sous-traitants : Stripe Connect
        est le rail. Mais est-ce accessible depuis Tunis ? La réponse est
        oui, avec conditions.
      </p>

      <h2>Qu&apos;est-ce que Stripe Connect</h2>
      <ul>
        <li>
          Une couche au-dessus de Stripe standard. Au lieu de payments
          directs &quot;client → toi&quot;, Connect orchestre &quot;client
          → ta plateforme → tes vendeurs&quot;.
        </li>
        <li>
          3 modèles : <strong>Standard</strong> (le vendeur a son propre
          Stripe), <strong>Express</strong> (le vendeur a un Stripe
          lite-onboarding chez toi), <strong>Custom</strong> (le vendeur
          n&apos;a aucun Stripe visible, tout passe par ta plateforme).
        </li>
        <li>
          Tu prélèves une <strong>Application Fee</strong> automatique
          (% configurable ou flat fee) sur chaque payment.
        </li>
        <li>
          Cas d&apos;usage typiques : Uber-like (driver paie ride),
          Airbnb-like (host paie booking), Patreon-like (creator paie
          subscription), Substack-like (writer paie subscription),
          Etsy-like (seller paie vente), agency marketplace, course
          marketplace.
        </li>
      </ul>

      <h2>Cas d&apos;usage typiques pour fondateurs tunisiens</h2>
      <ul>
        <li>
          <strong>Marketplace de services TN-US</strong> : tu connectes
          des freelances TN à des clients US. Tu prélèves 10-20%
          d&apos;Application Fee.
        </li>
        <li>
          <strong>Course platform multi-instructor</strong> : tu invites
          des instructors à publier des courses, tu prends 15-30% de
          commission, ils encaissent le reste.
        </li>
        <li>
          <strong>SaaS multi-tenant avec sous-comptes</strong> : tes
          clients sont des agences qui ont leurs propres sub-clients
          payants. Stripe Connect permet à chaque agence d&apos;avoir
          son propre Stripe sous-jacent.
        </li>
        <li>
          <strong>Affiliate / referral platform</strong> : Connect peut
          gérer le split automatique des commissions.
        </li>
      </ul>

      <h2>Les prérequis depuis Tunis</h2>
      <ul>
        <li>
          <strong>LLC US formée</strong>. Wyoming, Delaware ou NM. Stripe
          Connect n&apos;accepte pas les entités tunisiennes (Stripe TN
          n&apos;existe pas).
        </li>
        <li>
          <strong>EIN actif et synchronisé IRS</strong>.
        </li>
        <li>
          <strong>Mercury (ou Relay/Brex)</strong> approuvé pour
          recevoir les Connect funds.
        </li>
        <li>
          <strong>Stripe US standard approuvé</strong>. C&apos;est le
          prérequis : tu dois d&apos;abord avoir un Stripe standard
          accepté avant de demander Connect.
        </li>
        <li>
          <strong>Business plan crédible</strong> pour Connect. Stripe
          regarde de plus près quand tu deviens plateforme — risk
          d&apos;abuse plus élevé.
        </li>
      </ul>

      <h2>Le process d&apos;activation Connect</h2>
      <ol>
        <li>
          Connecte-toi à ton dashboard Stripe (le compte standard déjà
          approuvé pour ta LLC).
        </li>
        <li>
          Va dans <strong>Connect → Get Started</strong>. Stripe te
          demande quelques infos additionnelles sur ton modèle plateforme.
        </li>
        <li>
          Choisis le model : Standard, Express, ou Custom. Pour la
          plupart des fondateurs tunisiens early-stage : <strong>Express</strong>
          est le bon choix (lite-onboarding pour tes vendeurs, friction
          minimale).
        </li>
        <li>
          Soumets : description plateforme, type d&apos;Application Fee
          (% fixe ou variable), pays cibles pour tes vendeurs.
        </li>
        <li>
          Approval delay : 1-3 jours typique. Plus long si Stripe demande
          des clarifications sur ton modèle business.
        </li>
        <li>
          Intégration technique : Stripe te donne des clés Connect
          séparées + des SDK pour onboarder tes vendeurs.
        </li>
      </ol>

      <h2>Les complications fiscales de devenir plateforme</h2>
      <ul>
        <li>
          <strong>1099-K reporting US</strong> : Stripe émet
          automatiquement un 1099-K à chaque vendeur Connect aux US qui
          fait &gt; 600 USD/an. C&apos;est Stripe qui gère, mais ta LLC
          est nommée comme &quot;platform&quot; sur le form.
        </li>
        <li>
          <strong>1042-S reporting international</strong> : Pour les
          vendeurs non-US, Stripe peut être tenu de retenir 30%
          automatiquement à la source SAUF si le vendeur a fourni un
          W-8BEN valide.
        </li>
        <li>
          <strong>TVA EU OSS</strong> : Si ta plateforme vend à des
          clients EU, tu deviens responsable de collecter la TVA via
          OSS — pas tes vendeurs. Considère Paddle ou Lemon Squeezy si
          ton volume EU est significatif.
        </li>
        <li>
          <strong>Sales tax US</strong> : Connect platform peut être
          désignée &quot;marketplace facilitator&quot; dans 44 états US,
          obligeant ta LLC à collecter sales tax sur les ventes de tes
          vendeurs aux clients US.
        </li>
      </ul>

      <h2>Le piège marketplace facilitator</h2>
      <p>
        Si tu opères un marketplace où des vendeurs encaissent via ta
        plateforme :
      </p>
      <ul>
        <li>
          Wayfair v. South Dakota + extensions étatiques 2019-2022 = tu
          es légalement marketplace facilitator dans 44 états.
        </li>
        <li>
          Cela signifie que TU dois collecter sales tax sur leurs ventes
          aux clients US — pas tes vendeurs.
        </li>
        <li>
          Stripe Tax peut le faire automatiquement, mais tu dois activer
          + déclarer trimestriellement dans chaque état où tu déclenches
          nexus.
        </li>
        <li>
          Coût ~0.5% du revenue + ~500-1000 USD/an comptable US si tu
          dépasses 5 états.
        </li>
      </ul>

      <h2>L&apos;Application Fee — comment fixer le montant</h2>
      <ul>
        <li>
          Marketplaces standard : <strong>5-15%</strong> de la transaction.
        </li>
        <li>
          Courses / info-produits : <strong>20-30%</strong>.
        </li>
        <li>
          SaaS multi-tenant : <strong>flat fee monthly</strong> (10-50
          USD/mois par sub-tenant) plutôt que % per transaction.
        </li>
        <li>
          Affiliate marketing : <strong>10-25%</strong> sur les ventes
          générées par tes partners.
        </li>
        <li>
          Tu peux mixer (flat fee + %) pour optimiser ton revenue. Stripe
          Connect le permet nativement.
        </li>
      </ul>

      <h2>Limites Stripe Connect pour fondateurs tunisiens</h2>
      <ul>
        <li>
          <strong>Tes vendeurs doivent être dans un pays Stripe-supporté</strong>.
          Tunisie n&apos;est pas dans la liste. Donc tes vendeurs ne
          peuvent pas être eux-mêmes en Tunisie sans LLC US.
        </li>
        <li>
          <strong>Tu ne peux pas onboarder des vendeurs anonymes</strong>.
          Stripe Connect exige KYC complet sur chaque sub-merchant.
        </li>
        <li>
          <strong>Approval is harder than standard Stripe</strong>.
          Stripe scrute plus quand tu deviens plateforme. Pour les
          fondateurs early-stage sans traction, refus possible.
        </li>
      </ul>

      <h2>Alternatives à Stripe Connect</h2>
      <ul>
        <li>
          <strong>Paddle Billing</strong> : peut gérer multi-vendor
          payouts en MoR. Plus facile à approuver, mais 5% + 50 cents
          per transaction vs Stripe Connect (~2.9% + 30 cents).
        </li>
        <li>
          <strong>Lemon Squeezy</strong> : similaire à Paddle, idéal pour
          info-produits et SaaS lightweight.
        </li>
        <li>
          <strong>Build your own avec Stripe standard + manual payouts</strong> :
          tu encaisses tout sur ta LLC, puis tu fais manual payouts à
          tes vendeurs via Wise ou banking direct. Plus de friction
          côté ops mais évite Stripe Connect KYC overhead.
        </li>
      </ul>

      <h2>Notre recommandation</h2>
      <p>
        Pour un fondateur tunisien lançant un marketplace ou
        SaaS-multi-tenant early-stage : commence par{" "}
        <strong>Stripe standard + manual payouts</strong>. Approval plus
        rapide, tu valides ton modèle sans complexité Connect. Quand tu
        atteins 20-50 vendeurs actifs ou 50K USD/an de GMV (Gross
        Merchandise Volume), demande l&apos;upgrade vers Stripe Connect
        Express. À ce stade, l&apos;automatisation Connect te fait
        économiser des heures hebdomadaires.
      </p>
      <p>
        Le Suivi mensuel NOHO inclut la coordination Connect upgrade si
        tu y arrives — préparation du dossier, réponse aux questions
        Stripe Compliance, configuration Stripe Tax pour les obligations
        marketplace facilitator. Si tu vises Connect dès le jour 1
        (raison stratégique précise), planifions un call.
      </p>
    </>
  );
}
