import Link from "next/link";

export function stripeTunisieContourner() {
  return (
    <>
      <p>
        Stripe n&apos;opère pas en Tunisie. La liste officielle des pays
        Stripe n&apos;inclut pas la Tunisie, l&apos;Algérie, le Maroc, ou
        l&apos;Égypte (Stripe a annoncé des lancements MENA mais aucun
        n&apos;est encore live pour des entités locales). Donc si tu es
        une SARL tunisienne, tu ne peux pas avoir de compte Stripe direct.
        C&apos;est un fait, pas une opinion.
      </p>

      <p>
        Le contournement légal : une LLC américaine. Stripe accepte les
        LLC US contrôlées depuis l&apos;étranger. Mais pas n&apos;importe
        comment. Voici pourquoi Stripe refuse régulièrement les dossiers
        TN-LLC mal préparés, et le stack qui fait passer.
      </p>

      <h2>Pourquoi Stripe refuse des LLC TN-contrôlées</h2>
      <p>
        Stripe ne refuse pas parce que tu es tunisien. Stripe refuse
        parce que ton dossier laisse 3-4 red flags par exemple :
      </p>
      <ul>
        <li>
          <strong>Adresse virtuelle évidente.</strong> Stripe a une base
          d&apos;adresses CMRA flaggées (iPostal1, Earth Class Mail,
          PostScan Mail). Si ton adresse y figure, refus quasi-systématique.
          NOHO opère depuis un vrai local commercial enregistré USPS comme
          CMRA, mais avec personnel sur place et présence physique
          vérifiable sur Google Maps — ce qui passe le filtre.
        </li>
        <li>
          <strong>Pas de site actif sur le domaine déclaré.</strong>{" "}
          Stripe ouvre ton domaine. Si c&apos;est un parking page, refus.
        </li>
        <li>
          <strong>Pas d&apos;email pro sur le domaine.</strong> Stripe
          contacte hello@toncompany.com pour vérifier. Si l&apos;email
          rebondit ou si tu réponds depuis Gmail, refus.
        </li>
        <li>
          <strong>Description d&apos;activité vague.</strong> « E-commerce »
          ne suffit pas. Stripe veut savoir quels produits, quel ticket
          moyen, quel volume mensuel attendu.
        </li>
        <li>
          <strong>Activité haute-risque.</strong> Crypto, adult, gambling,
          dropshipping pur, MLM, drug paraphernalia, firearms — refus
          systématique ou underwriting très long.
        </li>
      </ul>

      <h2>Le stack qui passe</h2>
      <ol>
        <li>
          LLC bien formée dans le Wyoming, Delaware, ou NM. Pas une LLC
          créée la veille de la soumission Stripe.
        </li>
        <li>
          EIN officiel reçu de l&apos;IRS (CP-575 ou 147C).
        </li>
        <li>
          Compte Mercury (ou Relay / Brex / Wise Business) déjà
          opérationnel et vérifié. Stripe veut où envoyer les payouts.
        </li>
        <li>
          Adresse postale réelle, pas une PMB flaggée. 5062 Lankershim
          Blvd à North Hollywood passe les filtres parce que
          c&apos;est un commerce physique avec employés sur place.
        </li>
        <li>
          Site live sur ton domaine, avec :
          <ul>
            <li>Description claire de ce que tu vends</li>
            <li>Prix affichés (au moins une fourchette)</li>
            <li>Page contact avec email pro et adresse physique</li>
            <li>Mentions légales / CGV</li>
            <li>Politique de remboursement</li>
          </ul>
        </li>
        <li>
          Email pro sur ton domaine, lu et répondu rapidement (Stripe
          peut envoyer des emails de vérification).
        </li>
        <li>
          Description d&apos;activité précise : « Vente de bijoux en
          argent fait main, ticket moyen 80-200 USD, volume estimé
          5 000 USD/mois, expédition depuis Tunis vers clients US. »
        </li>
        <li>
          W-8BEN-E rempli correctement quand Stripe le demande (en tant
          que beneficial owner non-US).
        </li>
        <li>
          Réponses cohérentes entre ce que tu mets sur Stripe et ce que
          ton Operating Agreement dit (nom, adresse, structure).
        </li>
      </ol>

      <h2>Quels sont les taux honnêtes</h2>
      <p>
        Avec un stack complet bien préparé, la majorité des LLC TN
        passent Stripe en première tentative (24-72h). Mais{" "}
        <strong>20-35 % des fondateurs MENA rencontrent une friction</strong> :
        Stripe demande des documents supplémentaires, ou met le compte
        en review étendu (parfois 2-3 semaines), ou refuse. NOHO ne
        garantit jamais Stripe — c&apos;est une décision de plateforme.
        Ce qu&apos;on garantit : un dossier renforcé qui maximise tes
        chances + un Plan B documenté.
      </p>

      <h2>Que faire si Stripe refuse</h2>
      <ul>
        <li>
          <strong>Demander à Stripe la raison.</strong> Réponse souvent
          générique (« risk policy »), parfois utile.
        </li>
        <li>
          <strong>Corriger ce qui peut l&apos;être</strong> (description,
          site, email) et resoumettre après 30-60 jours.
        </li>
        <li>
          <strong>Paddle (Merchant of Record)</strong> — accepte plus
          large que Stripe, gère la TVA EU automatiquement, mais
          frais plus élevés (5-10 % vs 2.9 % + 30¢).
        </li>
        <li>
          <strong>Lemon Squeezy (MoR)</strong> — similar to Paddle, plus
          simple à intégrer.
        </li>
        <li>
          <strong>Stripe Atlas</strong> — option où Stripe forme la LLC
          (en C-Corp Delaware) avec toi en tant que founder. Plus
          d&apos;obligations annuelles (1120 corp tax return obligatoire,
          franchise tax DE 300 USD/an) mais Stripe approuve quasi-systématiquement
          puisqu&apos;ils ont eux-mêmes formé l&apos;entité. C&apos;est
          la voie qu&apos;on recommande si tu vises une levée VC.
        </li>
      </ul>

      <h2>Honest Self-Disclosure</h2>
      <p>
        On ne fait pas de Stripe Atlas chez NOHO. C&apos;est Stripe qui le
        fait. Si tu as besoin d&apos;une C-Corp Delaware pour lever des
        fonds, va directement chez Stripe Atlas — c&apos;est leur métier.
        NOHO est mieux placé pour les fondateurs services / e-commerce /
        SaaS bootstrappé qui veulent une LLC Wyoming simple + Mercury +
        Stripe direct + identité de marque + site, le tout sans
        s&apos;envoyer aux États-Unis.
      </p>

      <p>
        Pour démarrer :{" "}
        <Link href="/business" className="font-bold underline" style={{ color: "#337485" }}>
          la Solution Business à 4 000 TND
        </Link>{" "}
        inclut tout le stack ci-dessus livré en 14 jours, plus le Plan B
        si Mercury ou Stripe refuse.
      </p>
    </>
  );
}
