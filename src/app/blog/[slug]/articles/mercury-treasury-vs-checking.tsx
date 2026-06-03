import Link from "next/link";

export function mercuryTreasuryVsChecking() {
  return (
    <>
      <p>
        Mercury propose deux comptes à ses customers : Mercury Checking
        (le standard, défaut pour toutes nouvelles LLC) et Mercury
        Treasury (le compte d&apos;épargne qui gagne ~4-5%/an). Pour un
        fondateur tunisien avec 10-100K USD en working capital, la
        différence en intérêts annuels peut représenter 400-5 000 USD.
        Voici comment configurer les deux et quand utiliser chaque.
      </p>

      <h2>Mercury Checking — le compte par défaut</h2>
      <ul>
        <li>
          Ouvert automatiquement avec ton onboarding Mercury.
        </li>
        <li>
          0% intérêts sur le solde — c&apos;est un checking account, pas
          un savings.
        </li>
        <li>
          Routing number + account number standard, accepté par Stripe,
          ACH, wire entrants/sortants.
        </li>
        <li>
          Frais : 0 USD/mois. Wire sortant international ~5 USD.
        </li>
        <li>
          Idéal pour le working capital quotidien — paiements
          fournisseurs, transferts vers ton compte personnel TN, etc.
        </li>
      </ul>

      <h2>Mercury Treasury — le savings rémunéré</h2>
      <ul>
        <li>
          Compte d&apos;épargne séparé sous le même Mercury account.
        </li>
        <li>
          Taux d&apos;intérêt actuel (mai 2026) : <strong>~4.3-4.7%
          APY</strong>. Suit les rates fédéraux US.
        </li>
        <li>
          Fonds investis dans des Treasury bills / money market funds.
          Backed par US Treasury — risque très faible.
        </li>
        <li>
          Transferts entre Checking ↔ Treasury : instantané, gratuit,
          dans la même interface.
        </li>
        <li>
          Frais : 0 USD/mois. Aucune commission performance.
        </li>
        <li>
          PAS un compte de paiement — tu ne peux pas wire directement
          depuis Treasury vers un tiers. Tu dois d&apos;abord transférer
          vers Checking, puis wire.
        </li>
      </ul>

      <h2>Math des intérêts pour fondateur tunisien typique</h2>
      <ul>
        <li>
          Solde Mercury moyen 20 000 USD pendant l&apos;année : à 4.5%
          APY, intérêts annuels = ~900 USD.
        </li>
        <li>
          Solde 50 000 USD : ~2 250 USD/an.
        </li>
        <li>
          Solde 100 000 USD : ~4 500 USD/an.
        </li>
        <li>
          Pour comparer : Stripe processing 2.9% sur 100K USD de revenue
          = 2 900 USD de fees. Treasury intérêts compensent presque
          entièrement les Stripe fees pour un volume modeste.
        </li>
      </ul>

      <h2>Comment configurer Mercury Treasury</h2>
      <ol>
        <li>
          Connecte-toi à mercury.com.
        </li>
        <li>
          Va dans <strong>Banking → Treasury</strong>. Si tu ne vois pas
          l&apos;option, ton compte Checking est peut-être trop récent
          (Mercury attend 30 jours d&apos;activité minimum avant
          d&apos;offrir Treasury).
        </li>
        <li>
          Clique &quot;Open Treasury account&quot;. Mercury demande de
          confirmer ton risk tolerance.
        </li>
        <li>
          Sélectionne le pourcentage de ton solde à allouer à Treasury
          (typiquement 60-80% si tu veux laisser working capital
          accessible en Checking).
        </li>
        <li>
          Mercury fait le transfert dans les 24-48h. Tu vois 2 sub-accounts
          dans ton dashboard ensuite.
        </li>
      </ol>

      <h2>Stratégie d&apos;allocation typique</h2>
      <p>
        Pour un fondateur tunisien avec ~30K USD sur Mercury :
      </p>
      <ul>
        <li>
          <strong>Checking</strong> : 8K USD pour 2-3 mois de runway
          opérationnel (paiements SaaS récurrents, wires vers TN).
        </li>
        <li>
          <strong>Treasury</strong> : 22K USD gagnant ~990 USD/an
          d&apos;intérêts.
        </li>
        <li>
          Rebalance mensuel : quand le Checking descend &lt; 5K USD, tu
          transfères 3-5K USD depuis Treasury (instantané).
        </li>
      </ul>

      <h2>Fiscalité des intérêts Treasury</h2>
      <ul>
        <li>
          Côté US : intérêts Treasury sont US-source income mais
          exemptés pour non-US persons via traité Tunisie-USA article
          11 (ou 0% retenue selon catégorie). W-8BEN doit avoir
          treaty benefits activés.
        </li>
        <li>
          Mercury émet Form 1042-S annuel listant les intérêts versés
          (équivalent du 1099-INT pour non-US persons).
        </li>
        <li>
          Côté TN : ces intérêts sont des revenus mondiaux à déclarer
          IRPP. Taux progressif jusqu&apos;à 40%.
        </li>
        <li>
          Pas un grand drainer fiscal — sur 1 000 USD d&apos;intérêts
          annuels, tu paies 300-400 USD d&apos;IRPP TN, net 600-700
          USD/an.
        </li>
      </ul>

      <h2>Quand NE PAS mettre en Treasury</h2>
      <ul>
        <li>
          Tu fais beaucoup de wires sortants imprévisibles (paiements
          gros clients, contractors). Garde plus en Checking.
        </li>
        <li>
          Tu as &lt; 5K USD de solde — l&apos;intérêt généré est
          négligeable, et tu risques d&apos;avoir un manque de liquidité.
        </li>
        <li>
          Tu utilises Mercury pour transit (entrée Stripe → sortie
          BIAT TN même mois). Pas d&apos;avantage Treasury si tu wire
          chaque mois.
        </li>
      </ul>

      <h2>Mercury Treasury vs alternatives</h2>
      <ul>
        <li>
          <strong>vs Wise Business EUR/USD interest accounts</strong> :
          Wise offre ~3-4% APY sur certaines devises. Mais Wise n&apos;est
          pas considéré US bank — fiscalité plus complexe pour
          binational.
        </li>
        <li>
          <strong>vs Treasury Direct (achat T-Bills directement)</strong>
          : tu peux acheter US T-Bills via TreasuryDirect.gov pour
          ~4.7-5% APY. Mais nécessite SSN/ITIN + setup complex pour
          non-US person. Mercury Treasury est plus simple.
        </li>
        <li>
          <strong>vs Brex business savings</strong> : ~4% APY mais
          Brex exige 50K+ MRR pour ouvrir compte, donc rare pour
          early-stage tunisien.
        </li>
        <li>
          <strong>vs Robinhood / Wealthfront via personal account</strong>
          : 5-5.5% APY. Mais c&apos;est ton money personnel, pas LLC
          business. Pour les distributions owner draws déjà
          rapatriées, OK. Pas pour le LLC capital.
        </li>
      </ul>

      <h2>Le piège — Mercury Treasury n&apos;est pas FDIC insured directement</h2>
      <ul>
        <li>
          Mercury Checking est FDIC insured jusqu&apos;à 250K USD via
          Choice Financial Group ou Column N.A.
        </li>
        <li>
          Mercury Treasury investit les fonds dans Treasury bills / money
          market funds — pas FDIC insured.
        </li>
        <li>
          Risque pratique : très faible. Treasury bills sont backed par
          US government (le même US gov qui backe FDIC). Mais
          techniquement différent.
        </li>
        <li>
          Si tu veux 100% FDIC insurance, laisse tout en Checking
          (sacrifie les intérêts).
        </li>
      </ul>

      <h2>Notre recommandation pour fondateur tunisien</h2>
      <ol>
        <li>
          0-3 mois post-Mercury onboarding : tout en Checking.
          Familiarise-toi avec l&apos;interface.
        </li>
        <li>
          Mois 3-6 : ouvre Treasury. Alloue 50% du solde courant en
          Treasury.
        </li>
        <li>
          Mois 6+ : monte à 70-80% en Treasury, garde 20-30% en
          Checking pour working capital.
        </li>
        <li>
          Year-end : rebalance + déclare les intérêts en IRPP TN.
        </li>
      </ol>

      <h2>Le Suivi mensuel NOHO et Mercury Treasury</h2>
      <p>
        Le Suivi mensuel inclut le monitoring du ratio Checking/Treasury
        + recommandation mensuelle de rebalancing selon ton flow. Tu
        n&apos;as pas à y penser chaque mois — on te dit &quot;ce mois
        transfère X de Treasury vers Checking&quot; selon les wires
        prévus.
      </p>
    </>
  );
}
