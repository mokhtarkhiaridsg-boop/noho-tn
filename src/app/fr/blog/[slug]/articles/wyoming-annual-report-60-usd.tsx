import Link from "next/link";

export function wyomingAnnualReport() {
  return (
    <>
      <p>
        Le Wyoming est l&apos;état préféré des fondateurs tunisiens pour
        leur LLC américaine : frais bas, anonymat élevé, acceptation
        bancaire excellente. Mais 1 fondateur sur 4 oublie un détail
        critique chaque année : le <strong>annual report à 60 USD</strong>{" "}
        dû avant l&apos;anniversaire de la formation. Conséquence si tu
        oublies : ta LLC est administrativement dissoute, tu perds
        Mercury, Stripe te bloque. Voici tout ce qu&apos;il faut savoir.
      </p>

      <h2>Qu&apos;est-ce que le Wyoming Annual Report ?</h2>
      <ul>
        <li>
          Document obligatoire à déposer chaque année auprès du Wyoming
          Secretary of State.
        </li>
        <li>
          Confirme que ta LLC est toujours active, donne le nom du
          registered agent, et déclare la valeur des actifs détenus en
          Wyoming.
        </li>
        <li>
          Frais : <strong>60 USD minimum</strong>, ou 0.0002% des actifs
          détenus dans l&apos;état si supérieur (très rare pour un
          fondateur tunisien — les actifs sont à Mercury, qui est dans
          le Delaware).
        </li>
        <li>
          Date butoir : <strong>premier jour du mois anniversaire de ta
          formation</strong>. Si tu as formé ta LLC le 18 mars 2025, ton
          annual report est dû le 1er mars 2026, puis le 1er mars chaque
          année suivante.
        </li>
        <li>
          Dépôt en ligne via wyobiz.wy.gov ou par mail à : Wyoming
          Secretary of State, 2020 Carey Avenue, Cheyenne, WY 82002.
        </li>
      </ul>

      <h2>Ce qui se passe si tu oublies</h2>
      <ul>
        <li>
          <strong>Mois 1-2 après butoir.</strong> Statut LLC passe à
          &quot;Delinquent&quot; sur le registre SoS. Pénalité 50 USD
          ajoutée.
        </li>
        <li>
          <strong>Mois 2-3.</strong> Mercury, Stripe, Wise voient le
          changement de statut via leur API de vérification d&apos;état.
          Mercury peut bloquer ton compte en attendant la régularisation.
          Stripe peut suspendre les payouts.
        </li>
        <li>
          <strong>Mois 6+.</strong> Wyoming SoS dissout administrativement
          ta LLC. Tu perds le statut juridique. Mercury ferme. Stripe
          ferme. Pour réactiver : reinstatement formal à 250 USD + tous
          les annual reports manqués + 50 USD/an de pénalité.
        </li>
        <li>
          <strong>Mois 12+.</strong> Si tu n&apos;as toujours pas
          réactivé, le nom de ta LLC redevient disponible et n&apos;importe
          qui peut le prendre. Tu perds l&apos;identité de marque.
        </li>
      </ul>

      <h2>Form 5472 : le piège fédéral parallèle</h2>
      <p>
        Le Wyoming annual report est l&apos;obligation <strong>étatique</strong>.
        Il y a en plus une obligation <strong>fédérale</strong> :{" "}
        <Link href="/fr/blog/form-5472-penalite-25000-usd" className="font-bold underline" style={{ color: "#337485" }}>
          Form 5472 + 1120
        </Link>{" "}
        annuel pour les LLC détenues par non-US persons. Pénalité par
        oubli : <strong>25 000 USD minimum</strong>, sans plafond. Beaucoup
        de fondateurs oublient l&apos;un OU l&apos;autre, certains
        oublient les deux.
      </p>

      <h2>La cascade complète des obligations annuelles</h2>
      <ul>
        <li>
          <strong>Annuel</strong>: Wyoming annual report (60 USD, dû à
          l&apos;anniversaire) + Registered Agent renewal (~50-125 USD
          selon partenaire) + Form 5472/1120 fédéral (gratuit IRS,
          ~250-500 USD si CPA) + EIN reverify si IRS le demande.
        </li>
        <li>
          <strong>Mensuel</strong>: bank statement reconciliation
          (Mercury), Stripe payouts confirmation, BCT compliance check
          (si rapatriement vers TN).
        </li>
        <li>
          <strong>Trimestriel</strong>: estimated tax payments aux US si
          ECI applicable (rare pour services basés en Tunisie).
        </li>
        <li>
          <strong>Quinquennal</strong>: renouvellement du registered
          agent contract dans certains états (pas WY, mais NM oui).
        </li>
      </ul>

      <h2>Pourquoi les fondateurs tunisiens oublient</h2>
      <ul>
        <li>
          Pas de notification IRS / SoS reçue. Wyoming SoS envoie un
          rappel par <strong>courrier postal</strong> à l&apos;adresse
          enregistrée (souvent ton mailbox NOHO). Si tu ne checkes pas
          ton mailbox, tu rates.
        </li>
        <li>
          Confusion entre obligation étatique et fédérale. Tu paies
          Form 5472 et tu crois être en règle. Faux.
        </li>
        <li>
          Le registered agent ne te rappelle pas
          automatiquement. La plupart facturent le rappel comme option
          premium.
        </li>
      </ul>

      <h2>Comment NOHO le gère</h2>
      <p>
        Le{" "}
        <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
          Suivi mensuel NOHO (1 200 TND/mois)
        </Link>{" "}
        inclut le dépôt automatique du Wyoming annual report + Form 5472
        + tous les rappels. Tu n&apos;as plus à y penser. Si tu préfères
        gérer toi-même, voici le calendrier minimum à mettre dans ton
        agenda :
      </p>
      <ul>
        <li>
          <strong>60 jours avant ton anniversaire LLC</strong>: dépose
          Wyoming annual report en ligne (wyobiz.wy.gov). 10 minutes.
        </li>
        <li>
          <strong>Avant le 15 avril</strong>: dépose Form 5472 + 1120
          pro-forma (pour l&apos;année fiscale précédente). Manuel
          uniquement (pas de e-filing).
        </li>
        <li>
          <strong>30 jours avant</strong>: paie le renouvellement
          registered agent.
        </li>
      </ul>

      <h2>Le mythe du &quot;coût faible&quot; du Wyoming</h2>
      <p>
        Le marketing &quot;Wyoming LLC à 100 USD&quot; cache que le coût
        total annuel <strong>récurrent</strong> est plutôt :
      </p>
      <ul>
        <li>Annual report : 60 USD</li>
        <li>Registered agent : 50-125 USD</li>
        <li>Form 5472/1120 CPA : 250-500 USD (ou 0 si tu le fais toi)</li>
        <li>Mailbox (5062 Lankershim chez NOHO) : 35-150 TND/mois</li>
        <li><strong>Total minimum : ~400 USD/an</strong> sans CPA, ~700 USD/an avec CPA</li>
      </ul>
      <p>
        Reste l&apos;un des moins chers, mais ce n&apos;est pas
        &quot;gratuit&quot; après la formation. La prochaine fois que
        quelqu&apos;un te vend une LLC à 100 USD sans mentionner
        l&apos;ongoing, demande-lui la math complète sur 5 ans.
      </p>
    </>
  );
}
