import Link from "next/link";

export function wiseBusinessMultiCurrencyFlowOptimal() {
  return (
    <>
      <p>
        Tu opères une LLC US comme fondateur tunisien. Tes revenus
        viennent en USD (Stripe US), parfois en EUR (clients EU), GBP
        (clients UK), AUD (clients AU). Tu vis et opères en Tunisie
        avec des dépenses en TND. La question : quel flow optimal pour
        économiser sur FX et timing ? Voici le combo Wise Business
        multi-currency + Mercury pour fondateur 50-200K USD/an.
      </p>

      <h2>Le problème à résoudre</h2>
      <ul>
        <li>
          <strong>Mercury USD account</strong> : excellent pour USD
          inbound (Stripe payouts) et US wire outbound. Mais wire
          international vers TN bank = ~$25-50 + 1-2% FX spread bank.
        </li>
        <li>
          <strong>EUR/GBP/AUD inbound</strong> : Mercury convertit
          automatiquement en USD au taux Mercury (~1% au-dessus
          interbank). Pas idéal si tu veux garder en EUR.
        </li>
        <li>
          <strong>Conversion USD → TND</strong> : si Mercury wire
          direct vers banque TN, frais ~3-5% total. Énorme sur
          volumes 100K+ USD/an.
        </li>
        <li>
          <strong>Réserve cash</strong> : Mercury Treasury 4-5% APY
          sur USD T-bills, mais USD only. Tu ne peux pas earn yield
          sur EUR/GBP réserves.
        </li>
      </ul>

      <h2>Le combo Wise Business + Mercury</h2>
      <ul>
        <li>
          <strong>Wise Business</strong> (ouvert pour ta LLC US) :
          comptes multi-currency natifs en USD, EUR, GBP, AUD, CAD, et
          5+ autres. Local banking details dans chaque pays (sort
          code UK, IBAN EU, etc.).
        </li>
        <li>
          <strong>Conversion Wise</strong> : 0.4-0.6% mid-market rate
          + petit fee. Best-in-class vs Mercury, banques TN, ou
          Stripe FX.
        </li>
        <li>
          <strong>Setup</strong> :
          <ol>
            <li>LLC US active</li>
            <li>Mercury principal opérationnel</li>
            <li>Apply Wise Business via LLC US (passport TN +
            Articles + EIN + Operating Agreement + Mercury statement
            preuve d&apos;activité)</li>
            <li>Approval Wise 1-2 semaines pour LLC US Tunis-owned</li>
            <li>Activate multi-currency accounts USD + EUR + GBP +
            ce que tu veux</li>
            <li>Connect Stripe USD payouts vers Mercury, et configure
            Stripe pour EUR/GBP separate sub-accounts si applicable</li>
          </ol>
        </li>
      </ul>

      <h2>Flow opérationnel optimal — 100K USD/an SaaS B2B</h2>
      <p>
        Scénario : fondateur TN avec SaaS B2B, 100K USD/an revenus
        répartis 60% USD, 30% EUR, 10% GBP.
      </p>

      <h3>1) Inbound revenue</h3>
      <ul>
        <li>
          <strong>Stripe USD payouts</strong> → Mercury USD checking.
          Volume mensuel ~5K USD.
        </li>
        <li>
          <strong>Stripe EUR payouts</strong> → Wise EUR account (via
          Stripe multi-currency setup). Volume mensuel ~2 500 EUR.
        </li>
        <li>
          <strong>Stripe GBP payouts</strong> → Wise GBP account.
          Volume mensuel ~800 GBP.
        </li>
      </ul>

      <h3>2) Daily operations</h3>
      <ul>
        <li>
          <strong>Mercury Checking USD</strong> : balance opérationnelle
          5-10K USD pour dépenses immédiates (AWS, contractors,
          subscriptions).
        </li>
        <li>
          <strong>Wise EUR/GBP</strong> : hold native si tu paies
          fournisseurs EU/UK. Évite double conversion EUR→USD→EUR.
        </li>
      </ul>

      <h3>3) Réserves long-terme</h3>
      <ul>
        <li>
          <strong>Excess Mercury USD &gt; 10K</strong> → transfer vers
          Mercury Treasury (4.5% APY).
        </li>
        <li>
          <strong>Excess Wise EUR &gt; 5K</strong> → conversion vers
          Mercury Treasury USD si tu n&apos;as pas besoin EUR
          long-terme (sinon, hold EUR malgré 0% yield Wise).
        </li>
      </ul>

      <h3>4) Repatriation vers Tunisie</h3>
      <ul>
        <li>
          <strong>Mensuel ou trimestriel</strong> : tu décides
          combien repatrier en TND.
        </li>
        <li>
          <strong>Wise USD → TND</strong> (via wire international Wise
          → banque TN) : 0.4% conversion + ~5-15 USD wire fee. Total
          ~0.5-0.7% sur transaction.
        </li>
        <li>
          <strong>Alternative</strong> : conversion vers BCT PPR USD
          (depuis déc 2025) puis utilisation locale TN sans conversion
          forcée. Économie de 0.5-1% conversion.
        </li>
      </ul>

      <h2>Math comparative sur 100K USD/an</h2>
      <ul>
        <li>
          <strong>Sans Wise (Mercury only + bank TN)</strong> :
          <ul>
            <li>Mercury wire vers bank TN : 30 × 50 USD = 1 500 USD/an
            wire fees</li>
            <li>FX spread bank TN : 1.5% × 100 000 = 1 500 USD/an</li>
            <li>EUR/GBP conversion via Mercury : 1% × 40 000 USD
            equivalent = 400 USD/an</li>
            <li><strong>Total perte : 3 400 USD/an</strong></li>
          </ul>
        </li>
        <li>
          <strong>Avec Wise + Mercury combo</strong> :
          <ul>
            <li>Mercury → Wise ACH transfer : gratuit</li>
            <li>Wise USD → TND : 0.5% × 100 000 = 500 USD/an</li>
            <li>EUR/GBP native hold + conversion ciblée : 0.5% ×
            40 000 = 200 USD/an</li>
            <li><strong>Total perte : 700 USD/an</strong></li>
          </ul>
        </li>
        <li>
          <strong>Économie</strong> : 2 700 USD/an avec le combo.
        </li>
      </ul>

      <h2>Wise Business — les piège à éviter</h2>
      <ol>
        <li>
          <strong>Application avec adresse Tunis</strong>. Wise
          déteste — taux d&apos;approval &lt; 30%. Solution : utilise
          ton adresse LLC US (5062 Lankershim) comme business address
          dans l&apos;application.
        </li>
        <li>
          <strong>Fermeture mid-activity</strong>. Wise a fermé des
          comptes MENA en 2023-2024 (similaire à Mercury). Garde
          backup processor (Mercury reste actif, Relay en réserve).
        </li>
        <li>
          <strong>Card Wise non-disponible Tunisie</strong>. Wise
          Multi-Currency Card pas disponible pour résidents tunisiens
          en 2026. Pour debit card, utilise Mercury debit (LLC US).
        </li>
        <li>
          <strong>USD ACH limits</strong>. Wise limite USD ACH
          inbound new accounts à ~10K USD/tx au début. Au-delà
          history = limit raised. Pas blocant mais à anticiper pour
          gros inbound Stripe.
        </li>
        <li>
          <strong>Mauvaise priorité</strong> : ne fais pas Wise
          primary. Mercury doit rester ton compte principal (Stripe
          préfère Mercury, Amazon Seller fonctionne sur Mercury).
          Wise = compagnon optimization, pas remplacement.
        </li>
      </ol>

      <h2>Cas où Wise NE convient PAS</h2>
      <ul>
        <li>
          <strong>Volume &lt; 30K USD/an</strong>. L&apos;économie
          (1-2K USD/an) ne justifie pas la complexité opérationnelle.
        </li>
        <li>
          <strong>Tous tes clients sont US</strong>. Pas d&apos;EUR/
          GBP inbound = Wise n&apos;ajoute rien vs Mercury direct.
        </li>
        <li>
          <strong>Tu n&apos;as pas Mercury</strong>. Wise ne remplace
          PAS Mercury pour Stripe approval ou Amazon Seller Central.
          Mercury reste essentiel.
        </li>
      </ul>

      <h2>Le piège du BCT PPR USD comme remplacement</h2>
      <p>
        Le compte BCT PPR USD (depuis déc 2025) permet de hold USD en
        Tunisie. Tentation de remplacer Wise par BCT PPR USD.
        Réflexion :
      </p>
      <ul>
        <li>
          <strong>BCT PPR USD est local TN</strong>. Tu peux y wire
          depuis Mercury, mais pas opérer banking US international
          depuis BCT.
        </li>
        <li>
          <strong>Wise est multi-currency</strong> (USD/EUR/GBP/AUD
          natifs). BCT PPR USD est USD-only.
        </li>
        <li>
          <strong>Conversion via BCT PPR USD vers TND</strong> :
          conversion finale fait à banque TN, taux locale, spread ~1%.
        </li>
        <li>
          <strong>Stratégie hybrid</strong> : Wise pour le flow
          opérationnel multi-currency, BCT PPR USD comme final
          destination si tu veux hold USD en TN (sans conversion
          forcée TND).
        </li>
      </ul>

      <h2>Stack complet 2026 pour 50-200K USD/an</h2>
      <ul>
        <li>
          <strong>Mercury Checking</strong> : compte principal USD,
          balance 5-10K opérationnelle
        </li>
        <li>
          <strong>Mercury Treasury</strong> : réserves USD long-terme,
          4.5% APY
        </li>
        <li>
          <strong>Mercury Cards</strong> : virtual + physical debit
          pour paiements US
        </li>
        <li>
          <strong>Wise Business USD/EUR/GBP</strong> : multi-currency
          natif + conversion optimisée
        </li>
        <li>
          <strong>Stripe USD/EUR/GBP separate accounts</strong> :
          payouts vers Mercury (USD) ou Wise (EUR/GBP)
        </li>
        <li>
          <strong>Relay Financial</strong> : backup dormant
        </li>
        <li>
          <strong>BCT PPR USD</strong> (post déc 2025) : final hold
          USD en Tunisie sans conversion forcée
        </li>
        <li>
          <strong>Banque TN TND</strong> : pour vivre quotidien en
          Tunisie
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Le combo Wise Business + Mercury n&apos;est PAS pour
        early-stage. C&apos;est l&apos;optimization de Year 2-3 quand
        ton revenue mix devient multi-currency. Économie 2-3K USD/an
        amortit le setup complexity (2 onboardings, 2 dashboards à
        gérer).
      </p>
      <p>
        Pour Year 1, reste sur Mercury simple. Quand tu touches 50K+
        USD/an avec 20%+ revenus EU/GBP, c&apos;est le moment du combo.
      </p>

      <h2>Et maintenant ?</h2>
      <p>
        Tu opères 50K+ USD/an et tu veux setup le combo Wise +
        Mercury ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On audit ton
        revenue mix actuel + projection 12 mois et on construit le
        flow optimal par devise + repatriation.
      </p>
    </>
  );
}
