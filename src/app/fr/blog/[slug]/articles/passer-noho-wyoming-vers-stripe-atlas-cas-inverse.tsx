import Link from "next/link";

export function passerNohoVersStripeAtlas() {
  return (
    <>
      <p>
        L&apos;article{" "}
        <Link href="/fr/blog/stripe-atlas-vs-noho-deep-dive" className="font-bold underline" style={{ color: "#337485" }}>
          Stripe Atlas vs NOHO deep-dive
        </Link>{" "}
        explique quand choisir Atlas dès le départ. Mais que faire si tu
        as déjà ouvert une Wyoming LLC via NOHO il y a 12-24 mois, et
        que ta situation a évolué pour justifier Atlas C-Corp Delaware ?
        Voici les 5 raisons légitimes de migrer, et exactement comment
        le faire sans déclencher une catastrophe fiscale.
      </p>

      <h2>Raison 1 — Tu lèves Seed/Series A auprès de VC US institutionnels</h2>
      <ul>
        <li>
          Les VC US institutionnels (Sequoia, A16Z, Greylock, Accel, etc.)
          ne peuvent <strong>pas</strong> investir dans une LLC. Leurs LP
          partners (Limited Partners) sont souvent fondations / endowments
          / pension funds qui ne peuvent légalement pas avoir
          d&apos;Unrelated Business Taxable Income (UBTI). Une LLC
          pass-through les expose à UBTI. Une C-Corp ne le fait pas.
        </li>
        <li>
          Donc dès que tu engages des conversations sérieuses avec un
          fund US (post-pitch, term sheet en discussion), la conversion
          en C-Corp Delaware devient mandatory.
        </li>
        <li>
          Stripe Atlas peut faciliter la conversion en C-Corp via leur
          incorporation track + drafting docs.
        </li>
      </ul>

      <h2>Raison 2 — Tu veux émettre des stock options aux employés US</h2>
      <ul>
        <li>
          Pour attirer du talent US, le stock options package est
          souvent requis. Les ISOs (Incentive Stock Options) ne sont
          émissibles que par C-Corps, pas par LLC.
        </li>
        <li>
          Si tu envisages d&apos;embaucher un CTO ou CMO senior aux US,
          il/elle va te demander 0.5-2% en ISOs vested 4 ans avec
          1-year cliff. Sans C-Corp, tu ne peux pas le proposer.
        </li>
        <li>
          NSOs (Non-Qualified Stock Options) émissibles par LLC sont
          fiscalement moins favorables pour l&apos;employé = harder to
          recruit.
        </li>
      </ul>

      <h2>Raison 3 — Ton revenu dépasse ~200K USD et tu réinvestis</h2>
      <ul>
        <li>
          LLC pass-through : tous les profits passent à toi (Member)
          et sont taxés à ton taux marginal IRPP tunisien (jusqu&apos;à
          40%).
        </li>
        <li>
          C-Corp : profits restent dans la corp, taxés 21% fédéral US.
          Tu peux les réinvestir dans l&apos;entreprise (hiring,
          marketing, R&D) sans tax leak personnel.
        </li>
        <li>
          Math du break-even : si tu réinvestis &gt; 50% de tes profits
          chaque année et tes profits dépassent 200K USD/an, la C-Corp
          devient fiscalement plus efficace que la LLC pass-through (au
          niveau global TN + US).
        </li>
        <li>
          En-dessous de ce seuil, la LLC pass-through reste plus
          efficace pour la majorité des fondateurs.
        </li>
      </ul>

      <h2>Raison 4 — Tu veux exit (acquisition ou IPO)</h2>
      <ul>
        <li>
          QSBS (Qualified Small Business Stock, Section 1202) permet
          aux founders C-Corp de réaliser jusqu&apos;à 10M USD de
          plus-value tax-free à la sortie. Disponible UNIQUEMENT pour
          C-Corp, pas LLC.
        </li>
        <li>
          Holding period 5 ans pour qualifier. Donc si tu envisages
          exit dans 5+ ans et que ta plus-value sera significative,
          C-Corp dès maintenant te fait économiser 1-2M USD en tax à
          l&apos;exit.
        </li>
        <li>
          Pour un fondateur tunisien non-US person, QSBS s&apos;applique
          côté US uniquement. Côté TN, la plus-value reste taxable
          IRPP. Mais 0% US + IRPP TN reste mieux que 21% US + 40%
          IRPP.
        </li>
      </ul>

      <h2>Raison 5 — Compliance simplifiée pour Mercury / Stripe Atlas / cap table</h2>
      <ul>
        <li>
          Stripe Atlas DE C-Corp = canal underwriting direct chez Stripe.
          Approval 24-72h typique.
        </li>
        <li>
          Mercury approuve plus facilement les C-Corps DE car
          c&apos;est le standard early-stage US.
        </li>
        <li>
          Carta / Pulley (cap table management) sont des plateformes
          built-for C-Corp. LLC cap table est plus laborieux à manager.
        </li>
        <li>
          Vesting schedules + 83(b) elections sont des concepts C-Corp
          natifs.
        </li>
      </ul>

      <h2>La procédure technique de conversion LLC → C-Corp</h2>
      <p>
        Plusieurs options selon ta situation :
      </p>

      <h3>Option A — Statutory conversion (DE only, depuis WY)</h3>
      <ol>
        <li>
          File un Plan of Conversion auprès de Wyoming Secretary of
          State + Delaware Division of Corporations.
        </li>
        <li>
          La LLC Wyoming est dissoute formellement, simultanée à la
          création de la C-Corp Delaware avec les mêmes assets et
          obligations.
        </li>
        <li>
          IRS treat as continuous entity for tax purposes (Rev. Rul.
          84-111) — no tax event.
        </li>
        <li>
          Coût : ~1 500-3 000 USD legal + state filing fees.
        </li>
        <li>
          Délai : 4-6 semaines.
        </li>
      </ol>

      <h3>Option B — F-Reorg (Form an F)</h3>
      <ol>
        <li>
          Tu crées une nouvelle C-Corp Delaware (via Stripe Atlas par
          exemple — 500 USD).
        </li>
        <li>
          Tu cèdes tous les assets de la LLC à la nouvelle C-Corp en
          échange de 100% des actions C-Corp.
        </li>
        <li>
          La LLC devient subsidiaire de la C-Corp ou est dissoute.
        </li>
        <li>
          IRS classifie comme F-Reorganization sous Section 368(a)(1)(F)
          — no tax event si structure proprement.
        </li>
        <li>
          Coût : ~2 000-5 000 USD legal pour structure le
          F-Reorganization correctement.
        </li>
      </ol>

      <h3>Option C — Asset purchase (simple mais déclenchant)</h3>
      <ol>
        <li>
          Tu crées une nouvelle C-Corp Delaware.
        </li>
        <li>
          La C-Corp achète les assets de la LLC pour 1 USD (fair-market
          value).
        </li>
        <li>
          Risque : l&apos;IRS peut requalifier le prix de transfert et
          imposer du gain sur les assets. Évite cette option.
        </li>
      </ol>

      <h2>Le piège fiscal côté TN</h2>
      <ul>
        <li>
          La conversion LLC → C-Corp ne déclenche pas d&apos;impôt US
          si correctement structurée.
        </li>
        <li>
          Mais côté Tunisie, la requalification d&apos;une participation
          LLC (pass-through) en participation C-Corp (entité fiscale
          séparée) peut être interprétée comme une cession d&apos;actifs
          déguisée par la DGI. Risque de redressement.
        </li>
        <li>
          Avant de convertir, consulte un fiscaliste tunisien
          (KHIARI partenaire ou autre) pour valider l&apos;impact côté
          IRPP.
        </li>
      </ul>

      <h2>Ce que tu perds en passant à C-Corp</h2>
      <ul>
        <li>
          <strong>Pass-through</strong> : tes profits sont désormais
          double-taxés (21% au niveau corp + dividends tax si distribués
          à toi en tant que shareholder).
        </li>
        <li>
          <strong>Brand identity NOHO</strong> : ta marque, ton site,
          ton mailbox 5062 Lankershim étaient liés à la LLC. Tu dois
          re-onboarder vers la nouvelle C-Corp (admin time, pas un
          obstacle).
        </li>
        <li>
          <strong>Mercury account</strong> : tu dois ouvrir un nouveau
          Mercury account au nom de la C-Corp. Le compte LLC sera fermé
          après transfert des fonds. 2-3 semaines de transition.
        </li>
        <li>
          <strong>Stripe account</strong> : idem, nouveau Stripe account
          C-Corp. Tu transfères tes clients vers le nouveau compte
          progressivement.
        </li>
      </ul>

      <h2>Le test honnête — dois-tu vraiment convertir ?</h2>
      <ol>
        <li>
          As-tu un term sheet VC US sérieux dans les 6 mois ? Si OUI →
          convertis maintenant.
        </li>
        <li>
          Veux-tu embaucher 1-2 employés US avec ISO package ? Si OUI →
          convertis.
        </li>
        <li>
          Tes profits annuels &gt; 200K USD ET tu réinvestis &gt; 50%
          ? Si OUI → convertis.
        </li>
        <li>
          Envisages-tu exit liquidity event dans 5+ ans ? Si OUI →
          convertis pour bénéficier QSBS.
        </li>
        <li>
          Sinon → garde ta Wyoming LLC. La conversion coûte 1 500-5 000
          USD + complexité TN-side. Ne convertis pas pour des raisons
          esthétiques.
        </li>
      </ol>

      <h2>L&apos;approche NOHO pour la conversion</h2>
      <p>
        Si tu décides de convertir, le Suivi mensuel inclut la
        coordination de la conversion : préparation des docs WY/DE,
        ouverture nouveau Mercury + Stripe, transfert de tes clients,
        archivage des docs LLC. Coordination avec attorneys US (Cooley
        si Stripe Atlas, ou avocat indépendant si statutory conversion)
        et fiscaliste TN pour le côté IRPP. Compte 2-3 mois de
        coordination intensive pour une conversion clean.
      </p>
      <p>
        Si tu ne fais pas partie des 5 cas ci-dessus, garde ta Wyoming
        LLC. Elle reste le bon choix pour 90% des fondateurs tunisiens.
      </p>
    </>
  );
}
