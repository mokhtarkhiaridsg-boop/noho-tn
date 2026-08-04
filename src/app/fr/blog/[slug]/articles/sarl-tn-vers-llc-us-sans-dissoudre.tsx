import Link from "next/link";

export function sarlTnVersLlcUs() {
  return (
    <>
      <p>
        Tu opères déjà une SARL ou SUARL tunisienne. Tes clients TN
        paient via virement classique en TND. Mais tu commences à
        décrocher des clients US/EU qui veulent payer via Stripe, et
        Stripe n&apos;existe pas en Tunisie. Tu te demandes : faut-il
        dissoudre la SARL TN et tout transférer sur une LLC US ? Réponse
        rapide : non. Voici exactement comment opérer une LLC US{" "}
        <strong>en parallèle</strong> sans dissoudre ta SARL TN, et
        quand ça fait sens.
      </p>

      <h2>Le piège de la dissolution prématurée</h2>
      <ul>
        <li>
          Dissoudre une SARL TN coûte en temps : 6-12 mois entre
          décision de l&apos;associé unique, dépôt RCS, audit comptable
          de clôture, publication JORT, radiation matricule fiscal.
        </li>
        <li>
          Coût direct : 2 000-5 000 TND honoraires comptable + avocat
          partenaire pour les démarches de liquidation.
        </li>
        <li>
          Pendant ces 6-12 mois, tu ne peux plus facturer depuis la
          SARL. Si tu as des clients TN récurrents, tu les perds ou
          tu dois les transférer à la LLC US — mais une LLC US ne peut
          pas facturer en TND directement à un client TN sans complications
          BCT.
        </li>
        <li>
          Risque : tu te retrouves dans un &quot;trou&quot; de 6-12 mois
          où ni l&apos;ancienne SARL ni la nouvelle LLC ne peuvent
          servir tous tes segments de clients efficacement.
        </li>
      </ul>

      <h2>Le combo parallèle — SARL TN + LLC US</h2>
      <p>
        Le combo recommandé pour un fondateur tunisien avec base
        clients hybride :
      </p>
      <ul>
        <li>
          <strong>SARL TN</strong> sert les clients tunisiens (et
          potentiellement Maghreb/EU) qui paient en TND/EUR par virement
          classique. Comptabilité simple, IRPP TN dû.
        </li>
        <li>
          <strong>LLC US</strong> sert les clients US (et certains EU/UK)
          qui paient via Stripe/Mercury. Pass-through donc 0 impôt
          fédéral US.
        </li>
        <li>
          Chaque entité a sa propre comptabilité, ses propres factures,
          son propre compte bancaire.
        </li>
        <li>
          Aucune transaction inter-entités (PAS de facturation de la
          LLC à la SARL ou inversement — ça crée des complications
          transfer pricing TN/US).
        </li>
      </ul>

      <h2>Comment répartir les clients</h2>
      <ul>
        <li>
          <strong>Clients TN payant en TND</strong> : facturés par la
          SARL TN.
        </li>
        <li>
          <strong>Clients US payant en USD via Stripe</strong> : facturés
          par la LLC US.
        </li>
        <li>
          <strong>Clients EU/UK payant en EUR par virement</strong> :
          au choix selon ton optimisation fiscale — souvent SARL TN si
          tu veux les déclarer simplement en TN.
        </li>
        <li>
          <strong>Clients EU/UK payant via Stripe</strong> : LLC US
          forcément (Stripe TN n&apos;existe pas).
        </li>
      </ul>

      <h2>La voie technique — 6 étapes pour ouvrir la LLC US en parallèle</h2>
      <ol>
        <li>
          <strong>Étape 1 — Garde la SARL TN active</strong>. Continue
          de facturer tes clients TN normalement. Pas besoin de changer
          quoi que ce soit côté SARL.
        </li>
        <li>
          <strong>Étape 2 — Forme la LLC US</strong>. Wyoming
          recommandé pour profil tunisien standard. Via NOHO Solution
          Business à 4 000 TND ou DIY à ~500 USD. Délai 14 jours.
        </li>
        <li>
          <strong>Étape 3 — EIN puis Mercury</strong>. Suit le process
          standard (voir{" "}
          <Link href="/fr/blog/stripe-atlas-vs-noho-procedure-technique" className="font-bold underline" style={{ color: "#337485" }}>
            procédure technique
          </Link>
          ). Mercury approuvé en 1-3 semaines avec dossier renforcé.
        </li>
        <li>
          <strong>Étape 4 — Stripe activé sur la LLC US</strong>.
          Délai 1-7 jours post-Mercury. Configure tes payouts vers ton
          compte Mercury.
        </li>
        <li>
          <strong>Étape 5 — Migration clients US progressive</strong>.
          Pour chaque client US existant, propose-leur de migrer leur
          billing vers la nouvelle entité US au prochain renouvellement.
          Ne force pas la migration au milieu d&apos;un contrat —
          laisse-le finir.
        </li>
        <li>
          <strong>Étape 6 — Comptabilité séparée</strong>. Tu tiens deux
          comptabilités distinctes : SARL TN (avec comptable TN) et
          LLC US (avec Form 5472 + 1120 annuel + Wyoming annual report).
        </li>
      </ol>

      <h2>Le piège qu&apos;il faut absolument éviter</h2>
      <p>
        <strong>NE PAS facturer la LLC US à la SARL TN ou vice-versa.</strong>{" "}
        Ça déclenche du transfer pricing entre entités sous contrôle
        commun. Si la DGI tunisienne ou l&apos;IRS US audite et trouve
        ces transactions inter-entités, ils requalifient le prix de
        transfert (souvent en défaveur du contribuable) et imposent
        pénalités + back-taxes.
      </p>
      <ul>
        <li>
          ❌ La LLC US sous-traite à la SARL TN du dev/design/marketing
          que la SARL refacture en EUR : transfer pricing à risque.
        </li>
        <li>
          ❌ La SARL TN refacture des services management à la LLC US :
          même problème en sens inverse.
        </li>
        <li>
          ❌ Tu paies du salaire à toi-même depuis les deux entités en
          parallèle pour le même travail : double-dipping fiscal.
        </li>
      </ul>
      <p>
        La règle d&apos;or : <strong>chaque entité sert un segment de
        clients différent</strong>, et tes services sont rendus
        directement par l&apos;entité qui facture, pas en cascade entre
        entités.
      </p>

      <h2>Le cas particulier — toi salarié de la SARL TN</h2>
      <p>
        Si tu te salaries déjà via la SARL TN (gérant majoritaire avec
        salaire), tu peux conserver ce statut. La LLC US ne te paie
        PAS de salaire : tu fais des owner distributions (pas une
        salary), passe-through au Member (toi) tunisien.
      </p>
      <ul>
        <li>
          Côté TN : tu déclares tes revenus mondiaux IRPP, donc tu
          inclus les distributions LLC US dans ta déclaration IRPP
          annuelle.
        </li>
        <li>
          Côté US : pass-through, 0 impôt fédéral si pas d&apos;ECI
          (Effectively Connected Income). Tu signes W-8BEN.
        </li>
      </ul>

      <h2>Quand passer à 100% LLC US (et dissoudre la SARL)</h2>
      <ul>
        <li>
          Tes clients TN représentent &lt; 5% de ton CA total.
        </li>
        <li>
          Tu n&apos;as plus de raison opérationnelle de maintenir une
          comptabilité TN séparée.
        </li>
        <li>
          Le coût annuel SARL TN (comptable, expert-comptable, charges
          patronales, etc.) dépasse les revenus TN restants.
        </li>
        <li>
          Tu décides de déménager hors Tunisie et tu changes ta
          résidence fiscale. Dans ce cas, la SARL TN devient soit
          étrangère à toi (compliqué), soit vide à fermer.
        </li>
      </ul>
      <p>
        Dans ces 3-4 cas, la dissolution SARL TN fait sens. Sinon, le
        combo parallèle est plus efficace.
      </p>

      <h2>Le cas inverse — créer SARL TN après avoir une LLC US</h2>
      <p>
        Cas symétrique mais moins fréquent : tu as déjà une LLC US et
        tu décroches des gros contrats clients TN qui ne veulent
        absolument pas facturer en USD via une entité US.
      </p>
      <ul>
        <li>
          Tu peux créer une SARL TN en parallèle (1-2 mois, ~2 000 TND
          via cabinet partenaire).
        </li>
        <li>
          La SARL devient ta facade TN pour ces clients spécifiques.
        </li>
        <li>
          Même règle : pas de facturation inter-entités.
        </li>
      </ul>

      <h2>La fiscalité combo en synthèse</h2>
      <ul>
        <li>
          SARL TN : impôt sur les sociétés TN 15% sur les bénéfices,
          puis dividendes versés au gérant tunisien taxés en IRPP
          progressive (jusqu&apos;à 40%).
        </li>
        <li>
          LLC US : pass-through, 0% fédéral US, 0% Wyoming. Mais
          distributions au Member tunisien = revenus mondiaux IRPP
          déclarables.
        </li>
        <li>
          Le traité fiscal Tunisie-USA 1985 (voir{" "}
          <Link href="/fr/blog/traite-fiscal-tunisie-usa-1985" className="font-bold underline" style={{ color: "#337485" }}>
            article dédié
          </Link>
          ) confirme que les revenus de la LLC sont taxables en
          Tunisie via IRPP.
        </li>
      </ul>

      <h2>Coordination NOHO + KHIARI</h2>
      <p>
        Le cabinet partenaire KHIARI à Tunis gère le côté TN (création
        SARL, comptabilité, audits annuels, dépôts CNSS, déclarations
        IRPP du gérant). NOHO gère le côté US (LLC, EIN, Mercury,
        Stripe, Form 5472). Cette coordination bi-côté est exactement
        ce qui fait que le combo parallèle fonctionne sans friction.
      </p>
      <p>
        Si tu envisages le combo, le Suivi mensuel NOHO à 1 200 TND/mois
        coordonne les obligations US et te tient le calendrier des
        deadlines des deux côtés. Pour la partie TN seule, tu engages
        ton expert-comptable habituel ou KHIARI partenaire (~800-2 000
        TND/an selon volume).
      </p>
    </>
  );
}
