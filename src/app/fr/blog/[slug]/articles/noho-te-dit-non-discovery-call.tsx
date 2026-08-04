import Link from "next/link";

export function nohoTeDitNonDiscoveryCall() {
  return (
    <>
      <p>
        Le discovery call NOHO de 30 minutes existe pour qualifier les
        prospects. Mais dans environ 25-30% des cas, Mokhtar termine
        l&apos;appel en disant honnêtement : <strong>&quot;NOHO
        n&apos;est pas la bonne solution pour toi
        aujourd&apos;hui&quot;</strong>. Voici exactement les 5 profils
        que NOHO refuse, et ce qu&apos;on recommande à la place. Pas un
        argument marketing — un commitment au sourcing honnête.
      </p>

      <h2>Pourquoi NOHO refuse certains prospects</h2>
      <ul>
        <li>
          Un client mal-fit signe Solution Business, paie 4 000 TND,
          puis se retrouve avec une LLC qu&apos;il n&apos;utilise pas.
          Mauvaise réputation locale pour NOHO + clients frustrés.
        </li>
        <li>
          Mokhtar préfère 10 clients dont la LLC est utilisée
          productivement vs 30 clients dont 20 ont la LLC en
          déprérissement.
        </li>
        <li>
          Le coût immédiat (perdre une vente) est rentable long-terme
          (référencement par bouche-à-oreille des clients bien
          servis).
        </li>
      </ul>

      <h2>Profil 1 — Tu n&apos;as pas encore de client (idée stage)</h2>
      <ul>
        <li>
          Tu n&apos;as jamais facturé un client en USD.
        </li>
        <li>
          Tu cherches à monter une &quot;LLC pour faire du business
          aux US&quot; sans avoir validé qu&apos;un client te paiera.
        </li>
        <li>
          <strong>NOHO te dit non</strong> : tu vas dépenser 4 000 TND
          + 400-700 USD/an ongoing pour une structure non-rentable.
        </li>
        <li>
          <strong>Recommandation</strong> : valide d&apos;abord avec
          1-2 clients payants via Upwork, Fiverr, ou directement via
          ton compte tunisien personnel. Quand tu as 3-5K USD/mois
          récurrents, reviens nous voir.
        </li>
      </ul>

      <h2>Profil 2 — Tous tes clients sont tunisiens</h2>
      <ul>
        <li>
          Tu fais du design, du coaching, du consulting, de
          l&apos;e-com TN. Tes clients paient en TND par virement
          classique ou via Paymee/Konnect.
        </li>
        <li>
          Tu n&apos;as aucune raison opérationnelle d&apos;avoir une
          LLC US.
        </li>
        <li>
          <strong>NOHO te dit non</strong> : une LLC US ne t&apos;apporte
          rien si tu ne factures pas en USD/EUR via Stripe ou
          marketplaces US.
        </li>
        <li>
          <strong>Recommandation</strong> : autoentrepreneur TN
          déclaré (100 TND patent fee + ~1 200 TND forfait fiscal
          annuel) suffit pour ton activité. Si tu as besoin de SaaS
          internationaux, demande une carte technologique business à
          ta banque TN (plafond 5-10K TND/an négociable).
        </li>
      </ul>

      <h2>Profil 3 — Tu veux échapper à l&apos;IRPP tunisienne</h2>
      <ul>
        <li>
          Tu lis sur TikTok que &quot;LLC US = 0% taxes&quot; et tu
          veux y croire.
        </li>
        <li>
          Tu envisages NOHO comme une voie pour ne pas déclarer tes
          revenus en TN.
        </li>
        <li>
          <strong>NOHO te dit non</strong> : la LLC US n&apos;élimine
          pas ton obligation IRPP (article 6 loi 91-25). Tu serais en
          situation de fraude fiscale, et la DGI peut désormais
          cross-référencer via les wires PPR USD autorisés depuis
          décembre 2025.
        </li>
        <li>
          <strong>Recommandation</strong> : si tu veux légalement
          réduire ton IRPP, c&apos;est un changement de résidence
          fiscale (UAE, Cayman, etc.) — projet différent qu&apos;une
          simple LLC. NOHO ne fait PAS cette structuration. On peut te
          référer un avocat fiscaliste partenaire si tu es sérieux.
        </li>
      </ul>

      <h2>Profil 4 — Ton business est high-risk pour Stripe</h2>
      <ul>
        <li>
          Dropshipping pur (revente Aliexpress sans marque propre).
        </li>
        <li>
          Crypto / forex trading / NFT marketplace.
        </li>
        <li>
          Adult content, gambling, replica goods, MLM.
        </li>
        <li>
          Services financiers, debt collection, consulting
          d&apos;investissement non-licencé.
        </li>
        <li>
          <strong>NOHO te dit non</strong> : Stripe rejette
          systématiquement ces niches, même avec LLC US bien formée.
          Avoir la LLC ne change rien à l&apos;approval payment
          processor.
        </li>
        <li>
          <strong>Recommandation</strong> : utilise des processeurs
          MoR adaptés (Paddle pour SaaS, NMI pour crypto-legit,
          Authorize.net pour high-risk legit). La LLC US n&apos;est
          pas obligatoire pour ces processeurs.
        </li>
      </ul>

      <h2>Profil 5 — Tu vises levée VC US institutionnelle dans 18 mois</h2>
      <ul>
        <li>
          Tu construis un SaaS qui va lever Seed/Series A US dans
          12-18 mois.
        </li>
        <li>
          <strong>NOHO te dit non — mais pas pour la raison que tu
          penses</strong>. Les VC US institutionnels (Sequoia, A16Z,
          Greylock) ne peuvent <strong>pas</strong> investir dans une
          LLC. Tu auras besoin d&apos;une C-Corp Delaware.
        </li>
        <li>
          <strong>Recommandation</strong> :{" "}
          <strong>Stripe Atlas C-Corp Delaware</strong> (500 USD setup
          + ~1 000 USD/an compliance). C&apos;est techniquement
          parfait pour ton cas. Voir{" "}
          <Link href="/fr/blog/stripe-atlas-vs-noho-deep-dive" className="font-bold underline" style={{ color: "#337485" }}>
            Stripe Atlas vs NOHO deep-dive
          </Link>{" "}
          pour la comparaison.
        </li>
        <li>
          NOHO ne couvre pas la formation C-Corp Delaware — on
          n&apos;est pas Stripe-direct, on n&apos;a pas le canal
          underwriting interne. C&apos;est honnête.
        </li>
      </ul>

      <h2>Le cas hybride — NOHO te dit &quot;peut-être pas tout de
        suite&quot;</h2>
      <ul>
        <li>
          Tu factures actuellement 500-2 000 USD/mois récurrents.
          NOHO te dit : attendre 3-6 mois jusqu&apos;à 3K-5K
          USD/mois récurrent confirmé pour amortir le coût ongoing.
        </li>
        <li>
          Tu veux la LLC pour vendre 1-2 produits Etsy occasionnels
          (10-20 ventes/an). NOHO te dit : Etsy accepte les sellers
          tunisiens via Payoneer, pas besoin de LLC US à ce volume.
        </li>
        <li>
          Tu envisages NOHO comme un &quot;test&quot; sans
          conviction. NOHO te dit : la LLC US n&apos;est pas une
          expérimentation — c&apos;est une infrastructure compliance
          ongoing. Vois si tu veux vraiment, sinon attends.
        </li>
      </ul>

      <h2>Pourquoi le refus honnête fait partie du moat NOHO</h2>
      <ul>
        <li>
          Les concurrents (doola, Stripe Atlas, Firstbase) ont des
          incitations à maximiser le funnel conversion. Ils ne refusent
          presque jamais — le client signe, paie, et c&apos;est leur
          problème ensuite.
        </li>
        <li>
          NOHO est un opérateur sur le terrain. Un client mal-fit
          devient un client mécontent au mois 6 — bad reviews + bouche-à-oreille
          négatif dans le réseau tunisien (qui est petit).
        </li>
        <li>
          Le refus honnête au discovery call protège la qualité de la
          customer base + la réputation locale.
        </li>
      </ul>

      <h2>Ce qui se passe quand NOHO te refuse</h2>
      <ol>
        <li>
          Pendant le call de 30 minutes, Mokhtar passe les 5 questions
          de qualification (voir{" "}
          <Link href="/fr/blog/quand-ne-pas-former-llc-us" className="font-bold underline" style={{ color: "#337485" }}>
            Quand NE PAS former une LLC US
          </Link>
          ).
        </li>
        <li>
          Si tu ne matches pas, Mokhtar te dit directement, calmement,
          sans soft-sell. Pas de tentative de te convaincre.
        </li>
        <li>
          Mokhtar te propose une recommendation alternative
          (autoentrepreneur, Stripe Atlas, MoR processor, etc.) selon
          ton cas spécifique.
        </li>
        <li>
          Pas de mail follow-up de relance. Pas de retargeting ads. Si
          tu veux revenir dans 3-6 mois quand ta situation a évolué,
          tu réserves un autre call.
        </li>
      </ol>

      <h2>L&apos;exception — le client qui insiste</h2>
      <p>
        Parfois un prospect dont le profil ne fit pas insiste pour
        signer quand même. Cas réel : un fondateur qui voulait LLC US
        pour 200 USD/mois de revenus Etsy. NOHO a refusé deux fois. Il
        a insisté trois fois. NOHO a accepté à condition qu&apos;il
        comprenne et signe que c&apos;est un mauvais ROI pour son
        volume. Il a payé, il a sa LLC, mais c&apos;est l&apos;exception
        — pas la règle.
      </p>
      <p>
        Cette approche &quot;tu signes seulement si tu insistes après
        notre refus&quot; filtre les vrais convaincus des indécis. Les
        vrais convaincus produisent des résultats. Les indécis
        deviennent des churners.
      </p>

      <h2>Ce que tu peux faire si NOHO t&apos;a refusé</h2>
      <ul>
        <li>
          Comprends la raison du refus (Mokhtar te l&apos;explique
          clairement).
        </li>
        <li>
          Implémente la recommandation alternative pendant 6-12 mois.
        </li>
        <li>
          Quand ton activité atteint le profil cible, reviens nous
          voir. Mokhtar se souvient de ton dossier précédent.
        </li>
        <li>
          Si la raison du refus était structurelle (high-risk industry
          ou VC trajectory), continue avec ton plan B (MoR processor ou
          Stripe Atlas) sans reluctance.
        </li>
      </ul>

      <h2>Le test pour réserver un discovery call</h2>
      <p>
        Avant de réserver le call,{" "}
        <Link href="/fr/diagnostic" className="font-bold underline" style={{ color: "#337485" }}>
          fais le diagnostic 5 questions
        </Link>{" "}
        — gratuit, pas d&apos;email. Si le diagnostic te recommande
        &quot;NOHO Solution Business&quot;, tu peux réserver
        l&apos;appel avec confiance. Si le diagnostic te recommande
        &quot;attendre&quot; ou &quot;alternative&quot;, économise les
        30 minutes.
      </p>
    </>
  );
}
