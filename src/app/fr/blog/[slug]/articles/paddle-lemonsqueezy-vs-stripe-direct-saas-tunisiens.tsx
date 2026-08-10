import Link from "next/link";

export function paddleLemonsqueezyVsStripeDirectSaasTunisiens() {
  return (
    <>
      <p>
        Tu lances un SaaS et tu veux vendre internationalement. Trois
        voies de paiement principales : <strong>Stripe direct</strong>{" "}
        via ta LLC US, <strong>Paddle MoR</strong> (Merchant of
        Record), ou <strong>Lemon Squeezy MoR</strong> (acquis par
        Stripe en 2024). Lequel choisir comme fondateur tunisien en
        2026 ? La math complète des trois — fees, tax compliance, et
        contrôle.
      </p>

      <h2>MoR — qu&apos;est-ce que ça veut dire</h2>
      <ul>
        <li>
          <strong>MoR (Merchant of Record)</strong> = c&apos;est{" "}
          <em>Paddle</em> ou <em>Lemon Squeezy</em> qui est le marchand
          légal vis-à-vis de tes clients, pas toi.
        </li>
        <li>
          Tu vends ton SaaS, mais sur le reçu/facture du client, c&apos;est
          &laquo; Paddle &raquo; ou &laquo; Lemon Squeezy &raquo; le
          merchant. Tu reçois un payout net (avec MoR fee déduite).
        </li>
        <li>
          La conséquence majeure : <strong>la MoR collecte et reverse
          la sales tax / TVA / GST</strong> dans tous les pays du
          monde où tu vends. Tu n&apos;as <em>aucune</em> obligation
          fiscale directe sur ces ventes (sauf déclarer tes revenus
          dans ta juridiction de résidence + ta LLC US).
        </li>
        <li>
          En Stripe direct, <strong>toi</strong> es merchant of
          record. Tu dois t&apos;enregistrer sales tax US état par
          état + OSS EU TVA + GST AU/NZ etc. Coût admin TaxJar /
          Avalara typique 600-1 500 USD/an.
        </li>
      </ul>

      <h2>Pricing brut — Stripe vs Paddle vs Lemon Squeezy</h2>
      <ul>
        <li>
          <strong>Stripe direct</strong> : 2.9% + 30¢ par
          transaction online US. International cartes 4.4% + 30¢.
        </li>
        <li>
          <strong>Paddle</strong> : 5% + 50¢ par transaction (TOUTES
          devises, TOUS pays). Pas de fee transaction supplémentaire
          international.
        </li>
        <li>
          <strong>Lemon Squeezy</strong> : 5% + 50¢ par transaction
          (same as Paddle).
        </li>
        <li>
          <strong>Différence brute</strong> : sur 1 000 USD de vente,
          Stripe = 29.30 USD fees, Paddle/LS = 50.50 USD fees. Stripe
          ~21 USD moins cher par 1K.
        </li>
      </ul>

      <h2>Mais ajoute le coût de la sales tax compliance</h2>
      <p>
        Si tu vends digital SaaS internationalement, l&apos;admin
        sales tax/TVA en Stripe direct est non-trivial :
      </p>
      <ul>
        <li>
          <strong>US sales tax (post-Wayfair 2018)</strong> : nexus
          économique 100K-500K USD/an déclenche obligation collecte +
          filing par état. TaxJar : ~99 USD/mois minimum.
        </li>
        <li>
          <strong>EU TVA OSS Non-Union Scheme</strong> : au-delà de
          10K EUR/an de B2C digital aux EU clients, enregistrement
          obligatoire. Coût comptable spécialisé EU : ~600-1 200
          USD/an si tu DIY mal, sinon Quaderno/Stripe Tax intégré
          ~50-100 USD/mois.
        </li>
        <li>
          <strong>UK VAT (post-Brexit)</strong> : 20% UK VAT à
          collecter si tu vends à des consommateurs UK. Filing
          trimestriel.
        </li>
        <li>
          <strong>Australia GST</strong> : 10% GST si tu vends &gt; 75K
          AUD/an.
        </li>
        <li>
          <strong>Canada GST/HST/PST</strong> : varie 5-15% par
          province.
        </li>
        <li>
          <strong>Total admin sales tax compliance moyen</strong> en
          Stripe direct pour SaaS vendu international :{" "}
          <strong>1 200 - 3 000 USD/an</strong>.
        </li>
      </ul>

      <h2>En MoR, ces coûts disparaissent</h2>
      <p>
        Paddle / Lemon Squeezy gèrent tout. Tu n&apos;as aucun filing
        à faire dans aucun pays. Tu déclares juste tes revenus à ta
        LLC US (Form 5472 / 1120 pro-forma) et à ta résidence
        fiscale tunisienne. C&apos;est tout.
      </p>

      <h2>Math break-even — à quel volume Stripe redevient gagnant</h2>
      <p>
        Soit X = ton CA SaaS annuel en USD. Le calcul break-even :
      </p>
      <ul>
        <li>
          Coût Stripe = 0.029 × X + (1 500 USD admin sales tax)
        </li>
        <li>
          Coût Paddle/LS = 0.05 × X
        </li>
        <li>
          Égalité : 0.029X + 1500 = 0.05X → 0.021X = 1500 →{" "}
          <strong>X ≈ 71 400 USD/an</strong>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Sous 71K USD/an</strong> : Paddle/LS sont moins
          chers globalement (économie sales tax compense fees plus
          élevées).
        </li>
        <li>
          <strong>Au-dessus de 71K USD/an</strong> : Stripe devient
          moins cher.
        </li>
        <li>
          <strong>À 200K USD/an</strong> : Stripe économie ~2 600
          USD vs Paddle.
        </li>
        <li>
          <strong>À 500K USD/an</strong> : Stripe économie ~9 000
          USD vs Paddle.
        </li>
      </ul>

      <h2>Les pièges côté Stripe direct pour SaaS TN founder</h2>
      <ul>
        <li>
          <strong>Stripe Tax intégré</strong> : Stripe propose Stripe
          Tax (0.5% par transaction) qui automatise la collecte sales
          tax/TVA, mais TOI restes responsable du filing dans chaque
          juridiction.
        </li>
        <li>
          <strong>Subscription churns disputes complexes</strong>{" "}
          : tu gères dispute response, refunds, chargebacks.
          Stripe te facture 15 USD par chargeback.
        </li>
        <li>
          <strong>Risk profile pays</strong> : Stripe accepte le
          fondateur Tunisien avec LLC US (cf. Mercury + EIN + adresse
          5062 Lankershim), mais profil sous monitoring. Tu dois
          maintenir clean.
        </li>
      </ul>

      <h2>Les pièges côté Paddle / Lemon Squeezy</h2>
      <ul>
        <li>
          <strong>Le client voit &laquo; Paddle &raquo; ou &laquo;
          Lemon Squeezy &raquo; sur sa carte</strong>, pas ton nom de
          brand. Pour B2B enterprise, c&apos;est un signal &laquo;
          startup &raquo; (peut être positif ou négatif selon
          contexte). Pour B2C indie SaaS, peu de friction.
        </li>
        <li>
          <strong>API moins riche</strong>. Paddle a une API mais
          plus restrictive que Stripe. Customer Portal, subscription
          migration, dunning sont moins customisables.
        </li>
        <li>
          <strong>Payouts moins fréquents</strong>. Stripe payouts
          quasi-instant (jour suivant). Paddle payouts mensuels
          (45-60 jours après transaction selon plan). Cash flow plus
          tendu.
        </li>
        <li>
          <strong>Plus difficile de migrer sortant</strong>. Si tu
          veux quitter Paddle pour Stripe direct plus tard, tu dois
          re-onboarder tes abonnés (ils signent à nouveau).
          Churn 10-30% lors d&apos;une telle migration.
        </li>
        <li>
          <strong>Acquisition Stripe → Lemon Squeezy 2024</strong>.
          Roadmap Lemon Squeezy peut converger avec Stripe direct (et
          Stripe a augmenté les frais LS de 5% à 5% + 50¢ post-acq).
          Restera-t-il viable face à Stripe Tax direct ? À monitorer.
        </li>
      </ul>

      <h2>Cas type — quand Paddle/LS est la bonne réponse</h2>
      <ul>
        <li>
          <strong>SaaS indie sub-50K ARR Y1-Y2</strong>. Le coût
          admin sales tax annihile Stripe. Paddle wins.
        </li>
        <li>
          <strong>Tu vends international heavy</strong> (50%+ revenus
          hors US). Compliance multi-pays prohibitif Stripe direct.
        </li>
        <li>
          <strong>Tu es solo founder sans CPA dédié</strong>. Tu
          n&apos;as pas la bande passante pour gérer sales tax
          filings.
        </li>
        <li>
          <strong>Tu veux passer du temps sur le produit</strong>,
          pas sur la compliance. Paddle simplicité = focus.
        </li>
      </ul>

      <h2>Cas type — quand Stripe direct est la bonne réponse</h2>
      <ul>
        <li>
          <strong>SaaS qui vise &gt; 150K ARR Y1</strong>. L&apos;économie
          fees compense largement coût compliance.
        </li>
        <li>
          <strong>B2B enterprise</strong> avec invoicing personnalisé
          + Net 30. Stripe Invoicing API plus flexible.
        </li>
        <li>
          <strong>Customer Portal customisé</strong> avec branding
          NOHO/ton SaaS. Paddle limite ça.
        </li>
        <li>
          <strong>Tu veux Stripe Connect</strong> (marketplace,
          multi-vendor). Paddle ne fait pas Connect.
        </li>
        <li>
          <strong>Tu as déjà une équipe finance / CPA</strong> qui
          gère sales tax filings.
        </li>
      </ul>

      <h2>Le cas hybride — Stripe pour gros clients, Paddle pour
      sub-50</h2>
      <p>
        Rare mais possible : tu utilises Stripe Direct pour les gros
        clients B2B (invoicing perso, Net 30), et Paddle pour les
        clients self-serve sub-50/mo (où la sales tax compliance
        deviendrait disproportionnée par rapport au revenu).
      </p>
      <ul>
        <li>
          Deux checkout flows différents, deux APIs à intégrer.
          Coût dev ~40 hours initial.
        </li>
        <li>
          Couvre les deux meilleurs cas — fees bas pour gros clients,
          compliance-free pour les petits.
        </li>
        <li>
          Pas worth-it tant que ton ARR &lt; 100K. Au-delà, ça peut
          se justifier.
        </li>
      </ul>

      <h2>Setup Paddle pour LLC US owned by Tunisien</h2>
      <ol>
        <li>
          Va sur <code>paddle.com</code> → Sign up.
        </li>
        <li>
          Entity : <strong>United States LLC</strong>.
        </li>
        <li>
          Entre EIN, business name, adresse US (5062 Lankershim
          OK).
        </li>
        <li>
          Owner verification : passeport tunisien + selfie. Paddle
          KYC checks via Onfido/Persona.
        </li>
        <li>
          Bank account US : Mercury / Relay / Wise Business. Pour
          payouts.
        </li>
        <li>
          Business description : ton SaaS expliqué. Paddle est
          conservateur sur certains verticaux (adult, gambling,
          crypto). Pour SaaS B2B classique, no friction.
        </li>
        <li>
          Approval typique 1-2 semaines. Manual review fréquent pour
          non-US founders.
        </li>
        <li>
          Integration : Paddle Checkout (hosted ou embedded) ou
          Paddle.js (custom). API similaire à Stripe mais moins
          fournie.
        </li>
      </ol>

      <h2>Setup Lemon Squeezy pour LLC US owned by Tunisien</h2>
      <ol>
        <li>
          Va sur <code>lemonsqueezy.com</code> → Get Started.
        </li>
        <li>
          Entity : LLC US.
        </li>
        <li>
          KYC similar to Paddle.
        </li>
        <li>
          Approval typique 3-7 jours. Plus rapide que Paddle.
        </li>
        <li>
          Integration : Lemon Squeezy Checkout (hosted), Lemon.js,
          ou API REST. Plus moderne UX que Paddle.
        </li>
        <li>
          Post-acquisition Stripe (2024), feature parity progressive
          avec Paddle. Différences :
          <ul>
            <li>
              LS focus indie + creator economy (Gumroad-esque).
            </li>
            <li>
              Paddle focus B2B SaaS + enterprise.
            </li>
            <li>
              LS plus moderne dashboard.
            </li>
            <li>
              Paddle plus mature pour entreprise.
            </li>
          </ul>
        </li>
      </ol>

      <h2>Verdict honnête</h2>
      <p>
        Pour 80% des fondateurs SaaS tunisiens early-stage (sub-100K
        ARR, vente internationale, solo founder), <strong>Paddle ou
        Lemon Squeezy est le bon choix</strong>. Le 5% fee est
        amplement compensé par l&apos;élimination des coûts admin
        sales tax/TVA.
      </p>
      <p>
        Pour les 20% qui scale (150K+ ARR) ou ont des besoins API
        avancés ou marketplace, <strong>Stripe direct devient le
        choix</strong> — économie nette &gt; 5K USD/an au-delà de
        100K ARR.
      </p>
      <p>
        Choisis Lemon Squeezy si indie creator-economy vibe (digital
        downloads, courses, templates). Choisis Paddle si B2B SaaS
        sérieux avec invoice + enterprise sales en perspective.
      </p>

      <h2>Et maintenant ?</h2>
      <p>
        Tu hésites entre Stripe direct, Paddle, et Lemon Squeezy ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On math
        l&apos;économie attendue selon ton volume Y1 (estimation
        honnête, pas optimiste), tes pays clients principaux, ton
        scope MoR vs control. Et on te dit franchement quel des 3
        match ton stage.
      </p>
    </>
  );
}
