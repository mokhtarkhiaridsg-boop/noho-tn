import Link from "next/link";

export function ouvrirLlcTunisie14Jours() {
  return (
    <>
      <p>
        Tu factures déjà des clients américains en USD, ou tu vas commencer
        dans les semaines qui viennent. Tu veux une LLC américaine pour que
        Stripe et Mercury fonctionnent. Voici exactement ce qui se passe
        sur 14 jours, sans bullshit.
      </p>

      <h2>Étape 1 — Choisir l&apos;état (Jour 1)</h2>
      <p>
        Trois choix réalistes pour un fondateur tunisien sans résidence
        américaine :
      </p>
      <ul>
        <li>
          <strong>Wyoming</strong> — par défaut. LLC anonyme, frais
          annuels les plus bas (~60 USD/an), accepté par Mercury, Stripe,
          Amazon. C&apos;est ce qu&apos;on choisit pour 80 % des dossiers.
        </li>
        <li>
          <strong>Delaware</strong> — seulement si tu vises une levée VC
          dans les 18 mois. Sinon, c&apos;est 300 USD/an de franchise tax
          pour rien.
        </li>
        <li>
          <strong>Nouveau-Mexique</strong> — confidentialité maximale,
          zéro rapport annuel. Mais certaines banques fronceront les
          sourcils. À considérer si tu as une raison spécifique.
        </li>
      </ul>
      <p>
        On peut aussi enregistrer une <strong>SARL tunisienne</strong>
        {" "}via notre cabinet partenaire à Tunis si ton modèle l&apos;exige, ou
        les deux en parallèle. Voir{" "}
        <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
          la Solution Business
        </Link>{" "}
        pour la décision complète.
      </p>

      <h2>Étape 2 — Articles of Organization (Jour 2-3)</h2>
      <p>
        On dépose les articles auprès du Secretary of State du Wyoming. Tu
        n&apos;as rien à signer physiquement — le registered agent (nous)
        signe pour toi en tant qu&apos;organisateur. Délai de traitement
        Wyoming SoS : 24-48h en standard, payant pour accéléré.
      </p>

      <h2>Étape 3 — EIN auprès de l&apos;IRS (Jour 3-7)</h2>
      <p>
        L&apos;Employer Identification Number est obligatoire pour ouvrir
        Mercury, déposer Form 5472 chaque année, et signer un contrat
        client. Sans SSN américain, tu ne peux pas demander l&apos;EIN en
        ligne. On le demande par fax à l&apos;IRS — c&apos;est le canal
        qui marche. Délai officiel : 4-6 semaines. Délai pratique pour
        Wyoming LLC bien remplie : 3-7 jours dans 60 % des cas.
      </p>

      <h2>Étape 4 — Operating Agreement (Jour 4)</h2>
      <p>
        Mercury et Stripe demandent à voir ton Operating Agreement. On le
        rédige avec ton nom, ta répartition de parts (généralement 100 %
        pour toi), ton rôle de Manager. C&apos;est un document privé qui
        ne se dépose nulle part — il prouve juste qui contrôle la LLC.
      </p>

      <h2>Étape 5 — Form 1583 USPS notarisé (Jour 5-7)</h2>
      <p>
        Pour que NOHO puisse recevoir ton courrier officiel à
        l&apos;adresse de Los Angeles, l&apos;USPS exige un Form 1583
        notarisé. Trois manières de le faire :
      </p>
      <ol>
        <li>
          Signature devant un notaire en Tunisie + apostille (le plus
          courant pour les résidents tunisiens). Tunisie est{" "}
          <strong>signataire de la Convention de La Haye depuis 2018</strong> —
          tu n&apos;as plus besoin de légalisation consulaire, juste
          l&apos;apostille délivrée par le Ministère des Affaires
          Étrangères.
        </li>
        <li>
          Notarisation locale en Tunisie (notaire ou cabinet KHIARI), puis
          envoi de l&apos;original — on confirme la procédure USPS/CMRA
          acceptée avant activation. Le notariat en ligne à distance (RON)
          n&apos;est pas disponible via un notaire californien : la loi
          californienne exige la comparution physique.
        </li>
        <li>
          Sur place à Los Angeles si tu y passes. Notre équipe te
          notarise gratuitement au storefront.
        </li>
      </ol>

      <h2>Étape 6 — Adresse postale active (Jour 8)</h2>
      <p>
        Une fois le Form 1583 reçu et déposé à l&apos;USPS, ton adresse{" "}
        <strong>5062 Lankershim Blvd, Suite # — North Hollywood, CA 91601</strong>{" "}
        est active. Tu peux la donner à Mercury, Stripe, Amazon, à ton
        client US, à ton avocat américain.
      </p>

      <h2>Étape 7 — Identité de marque + site web (Jour 7-12)</h2>
      <p>
        Ce que doola, Firstbase et Stripe Atlas ne font pas : pendant que
        l&apos;EIN arrive, on prépare ton identité visuelle (logo, palette,
        cartes de visite imprimées) et un site web 1-pager sur ton
        domaine. Pourquoi ça compte : Mercury et Stripe regardent
        ton domaine et ton site quand ils décident d&apos;approuver. Un
        site live + une adresse mail pro sur ton domaine, c&apos;est le
        signal qui fait la différence.
      </p>

      <h2>Étape 8 — Mercury (Jour 12-25)</h2>
      <p>
        Avec l&apos;EIN reçu, on soumet Mercury avec le stack complet :
        Articles of Organization, EIN letter, Operating Agreement,
        passeport scanné, preuve d&apos;adresse Tunis (facture
        d&apos;électricité par exemple), ton site web actif, ton plan
        d&apos;activité en quelques lignes. Délai Mercury : 24h à 5 jours
        en général.
      </p>
      <p>
        <strong>Honest Self-Disclosure :</strong> Mercury refuse environ
        20-35 % des dossiers MENA, même bien préparés. Si refusé, on
        active le Plan B :{" "}
        <Link href="/fr/blog/mercury-bank-depuis-tunis-dossier-renforce" className="font-bold underline" style={{ color: "#337485" }}>
          le dossier renforcé Relay/Brex/Wise est documenté ici
        </Link>.
      </p>

      <h2>Étape 9 — Stripe (Jour 14 et après)</h2>
      <p>
        Stripe ne peut être configuré qu&apos;une fois Mercury (ou
        équivalent) opérationnel — il faut un compte bancaire US pour
        recevoir les payouts. Approbation Stripe : 24-72h dans la
        majorité des cas. Si refusé, on a Paddle et Lemon Squeezy en
        backup, ou Stripe Atlas si tu acceptes la conversion en C-Corp
        Delaware.
      </p>

      <h2>Combien ça coûte vraiment</h2>
      <ul>
        <li>Wyoming filing fee : 100 USD</li>
        <li>Wyoming annual report : 60 USD/an à partir de l&apos;an 2</li>
        <li>EIN : gratuit (l&apos;IRS ne facture pas)</li>
        <li>Form 1583 notarisé en Tunisie : 50-150 TND selon notaire</li>
        <li>Apostille TN → US : 20-30 TND</li>
        <li>Form 5472 annuel : entre 0 (si tu fais toi-même) et 200-500 USD via CPA</li>
        <li>
          <strong>NOHO Solution Business</strong> : 4 000 TND une fois — inclut adresse 12 mois, Form 1583, EIN, Operating Agreement, identité de marque, site, accompagnement Mercury + Stripe.{" "}
          <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
            Voir le détail
          </Link>.
        </li>
      </ul>

      <h2>Ce qui peut casser le timing</h2>
      <ul>
        <li>EIN qui prend 4-6 semaines au lieu de 7 jours (~15 % des cas).</li>
        <li>Mercury qui demande des documents supplémentaires (~10 %).</li>
        <li>Form 1583 mal notarisé qui doit être refait (~5 %).</li>
      </ul>
      <p>
        Le délai contractuel des 14 jours couvre les éléments qui dépendent
        de NOHO (entité, brand, site, dossier bancaire prêt). Les
        approbations bancaires (Mercury, Stripe) sont des décisions de
        plateformes — on ne les garantit jamais.
      </p>

      <h2>Quand ne pas le faire</h2>
      <p>
        Si tu n&apos;as pas encore de premier client en USD/EUR, attends.
        Une LLC inactive accumule quand même des obligations annuelles
        (Form 5472, rapport Wyoming) et leur oubli coûte cher (25 000 USD
        de pénalité IRS sans plafond). Notre{" "}
        <Link href="/fr/diagnostic" className="font-bold underline" style={{ color: "#337485" }}>
          diagnostic 5 questions
        </Link>{" "}
        te dit honnêtement si c&apos;est le bon moment.
      </p>
    </>
  );
}
