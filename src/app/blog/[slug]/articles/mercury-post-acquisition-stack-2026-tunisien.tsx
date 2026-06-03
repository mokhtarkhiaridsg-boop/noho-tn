import Link from "next/link";

export function mercuryPostAcquisitionStack2026Tunisien() {
  return (
    <>
      <p>
        Mercury est devenue la banque de référence pour LLC US de
        fondateurs non-US persons depuis 2020. En 2026, après plusieurs
        évolutions (vague de fermetures fin 2024, acquisitions, nouveaux
        produits), le stack Mercury à mettre en place a évolué. Voici
        le guide à jour 2026 — produits Mercury essentiels vs
        optionnels, et comment combiner avec Wise/Relay/Brex pour
        résilience.
      </p>

      <h2>Mercury 2026 — produits disponibles</h2>
      <ul>
        <li>
          <strong>Mercury Checking</strong> : compte USD courant.
          0% APY. Standard pour opérations quotidiennes (Stripe
          payouts, paiements contractors, etc.).
        </li>
        <li>
          <strong>Mercury Savings</strong> : 3.5% APY sur les
          balances. Idéal pour réserves opérationnelles 3-6 mois.
        </li>
        <li>
          <strong>Mercury Treasury</strong> : 4.0-5.0% APY sur
          Treasury bills. Idéal pour 20K+ USD de réserves 6+ mois.{" "}
          <Link href="/blog/mercury-treasury-vs-checking">
            Détails Treasury
          </Link>
          .
        </li>
        <li>
          <strong>Mercury Vault (lancé 2024)</strong> : sweep
          automatique entre Checking et FDIC-insured accounts auprès
          de plusieurs partner banks pour augmenter le seuil
          d&apos;assurance FDIC au-delà de 250K USD. Utile au-delà
          de cette taille.
        </li>
        <li>
          <strong>Mercury Cards</strong> : virtual + physical debit
          (Mastercard). Limites de dépenses configurables par
          employé/projet.
        </li>
        <li>
          <strong>Mercury Bill Pay</strong> : ACH et wire automatique
          aux fournisseurs. Pratique pour récurrent.
        </li>
        <li>
          <strong>Mercury IO</strong> : API + webhooks pour intégration
          comptable (QuickBooks, Xero auto-sync).
        </li>
      </ul>

      <h2>Produits NON-disponibles pour LLC owned by foreign person (2026)</h2>
      <ul>
        <li>
          <strong>Mercury Investing</strong> (lancé 2024 pour US
          persons uniquement). Non-disponible pour LLC owned by
          foreign person.
        </li>
        <li>
          <strong>Mercury Mortgage</strong> et autres produits credit
          / lending. Réservés US persons / US-corporations.
        </li>
        <li>
          <strong>Direct deposit personal</strong>. Mercury reste
          purement business, pas personal banking.
        </li>
      </ul>

      <h2>Configuration recommandée pour LLC US TN-owned 2026</h2>
      <ol>
        <li>
          <strong>Mercury Checking</strong> : compte principal,
          balance 1-2 mois d&apos;opex (10-30K USD typique).
        </li>
        <li>
          <strong>Mercury Treasury</strong> activé si réserves
          ≥ 20K USD. Allocation 70-80% des fonds excédentaires.
          4.5% APY = 900-1 800 USD intérêts gratuits sur 20-40K USD.
        </li>
        <li>
          <strong>Mercury Debit Card</strong> au nom de la LLC pour
          paiements US directs (AWS, Vercel, Stripe Atlas fee, etc.).
        </li>
        <li>
          <strong>Wise Business en parallèle</strong> comme {" "}
          <em>conversion bridge</em> — wire depuis Mercury vers Wise,
          conversion USD→TND à 0.4-0.6% spread, puis vers ton compte
          BCT PPR USD ou TND.
        </li>
        <li>
          <strong>Relay Financial</strong> ouvert en backup. Pas
          d&apos;activité régulière mais le compte existe en cas de
          fermeture Mercury.
        </li>
      </ol>

      <h2>La vague de fermetures 2024 — what changed</h2>
      <p>
        Fin 2024 - début 2025, Mercury a fermé un nombre significatif
        de comptes appartenant à fondateurs non-US person (estimations
        non-officielles 5-15% du book non-US). Causes principales :
      </p>
      <ul>
        <li>Augmentation pression régulatoire fédérale US (FinCEN,
        OFAC) sur banques fintech.</li>
        <li>Tightening internal risk policy chez Mercury post-FDIC
        scandal Evolve Bank (2024).</li>
        <li>Détection patterns d&apos;activité &laquo; high-risk
        country &raquo; (Iran, North Korea sanctions indirectes).</li>
      </ul>
      <p>
        <strong>Tunisie n&apos;est PAS sur la liste prohibited de
        Mercury en 2026</strong>, mais a vu son scrutiny augmenter.
        Dossiers Mercury solides passent toujours, dossiers limites
        sont refusés ou fermés mid-activity.
      </p>

      <h2>9 signaux qui réduisent ton risque de fermeture Mercury</h2>
      <ol>
        <li>
          <strong>Adresse business storefront réelle</strong> (5062
          Lankershim NOHO ✓) — pas une P.O. Box virtuelle.
        </li>
        <li>
          <strong>Form 1583 USPS notarisé</strong> + USPS-registered
          CMRA.
        </li>
        <li>
          <strong>Business plan détaillé</strong> uploadé au compte
          initial. Update annuel.
        </li>
        <li>
          <strong>Volume de transactions cohérent</strong> avec le
          revenue model déclaré. Volume soudain &gt; 10× normal =
          flag automatique.
        </li>
        <li>
          <strong>Pas de wires aux pays sanctionnés</strong> — Iran,
          NK, Syria, Cuba, Russia (depuis 2022). Aussi prudence sur
          Pakistan, Afghanistan, Yemen.
        </li>
        <li>
          <strong>Pas de pattern crypto-cashing</strong>. Wire-in
          puis wire-out vers exchanges crypto = pattern flagged.
          Garder activité business identifiable.
        </li>
        <li>
          <strong>Form 5472 + 1120 filed à temps</strong>. Mercury ne
          vérifie pas directement, mais si IRS te flag pour
          non-compliance, ils peuvent demander à Mercury.
        </li>
        <li>
          <strong>Reply rapide aux Mercury verification requests</strong>
          (sous 48h). Silence = présomption d&apos;abandon = closure.
        </li>
        <li>
          <strong>Pas d&apos;adresse postale en pays high-risk
          listée comme business address</strong>. Si tu utilises
          5062 Lankershim, tu es protégé.
        </li>
      </ol>

      <h2>Plan B documenté — si Mercury ferme mid-activity</h2>
      <p>
        Si tu reçois email Mercury &laquo; we&apos;re closing your
        account &raquo; (typically 30-day notice), voici le playbook
        à 72h :
      </p>
      <ol>
        <li>
          <strong>H+0</strong> — récupère bank statement complet
          (PDF) + transaction history CSV. Mercury permet export.
        </li>
        <li>
          <strong>H+1</strong> — ouvre application Relay Financial.
          Si déjà eu Relay backup ouvert (recommandé), réactive.
          Sinon, application fresh.
        </li>
        <li>
          <strong>H+2</strong> — wire ASAP funds Mercury → Relay (ou
          backup bank). Évite hold de 30 jours par Mercury.
        </li>
        <li>
          <strong>H+12</strong> — update tous les autoriseurs ACH
          (Stripe, Amazon Seller, payroll Gusto, etc.) avec nouveau
          routing/account Relay.
        </li>
        <li>
          <strong>H+24</strong> — réponds au email Mercury en
          demandant la raison spécifique. Tu n&apos;auras pas
          toujours réponse, mais ça crée un dossier.
        </li>
        <li>
          <strong>H+48</strong> — vérifie que tous tes services
          critiques (Stripe payouts, payroll) sont rebranchés sur
          Relay. Premier payout test.
        </li>
        <li>
          <strong>H+72</strong> — actualise contacts (CPA, comptable
          TN, partenaires) du changement bancaire. Update mailing
          address chez certains si applicable.
        </li>
      </ol>

      <h2>Wise Business + Mercury — le combo conversion economy</h2>
      <p>
        Mercury est excellent pour HOLD USD et payer aux fournisseurs
        US. Wise Business est excellent pour CONVERTIR USD vers TND
        (ou EUR/GBP) avec spread minimal.
      </p>
      <ul>
        <li>
          <strong>Mercury → Wise via ACH</strong> : gratuit, 1-3 jours
          ouvrés.
        </li>
        <li>
          <strong>Wise USD → TND</strong> : 0.4-0.6% spread vs taux
          interbank, vs 1-2% Mercury wire direct vers banque
          tunisienne.
        </li>
        <li>
          <strong>Économie</strong> : sur 50 000 USD repatriés/an,
          ~750-1000 USD économisés en frais FX vs Mercury wire direct.
        </li>
      </ul>

      <h2>Mercury vs Relay vs Brex (2026 head-to-head)</h2>
      <ul>
        <li>
          <strong>Mercury</strong> : meilleur pour LLC TN-owned
          early-stage. Onboarding accessible, dashboard mature, large
          partner ecosystem.
        </li>
        <li>
          <strong>Relay</strong> : meilleur Plan B / backup. Approbation
          plus rapide en réapplication post-Mercury closure. Treasury
          jusqu&apos;à 5.0% APY 2026.
        </li>
        <li>
          <strong>Brex</strong> : meilleur si funding/VC. Card-focused,
          rewards points. Approbation difficile pour LLC bootstrap
          early-stage.
        </li>
        <li>
          <strong>Airwallex</strong> : meilleur si activity multi-pays
          (US + EU + UK + AU). Mais frais légèrement plus élevés vs
          Mercury.
        </li>
      </ul>

      <h2>Le piège du compte personnel Mercury (n&apos;existe pas !)</h2>
      <p>
        Pour clarifier : Mercury n&apos;offre pas de compte personnel.
        Si ton CPA te dit &laquo; ouvre Mercury Personal pour séparer
        funds &raquo;, c&apos;est faux. Mercury est exclusivement
        business. Pour personal, tu auras Chime / SoFi / Ally / Wise
        Personal selon ton statut résidence.
      </p>

      <h2>Stack 2026 ideal — fondateur tunisien LLC US</h2>
      <ul>
        <li>Mercury Checking (compte principal)</li>
        <li>Mercury Treasury (réserves)</li>
        <li>Mercury Debit Card (paiements US)</li>
        <li>Wise Business (conversion USD→TND)</li>
        <li>Relay Financial (backup, dormant)</li>
        <li>BCT PPR USD (compte résident TN, accumulation USD locale)</li>
        <li>Banque tunisienne TND (compte courant TN pour vivre)</li>
      </ul>

      <h2>CTA</h2>
      <p>
        Tu as Mercury et tu veux solidifier ton stack (Treasury, Plan B
        Relay, combo Wise) ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On analyse ton
        setup actuel + projection 12 mois et on identifie les fixes
        les plus impactants.
      </p>
    </>
  );
}
