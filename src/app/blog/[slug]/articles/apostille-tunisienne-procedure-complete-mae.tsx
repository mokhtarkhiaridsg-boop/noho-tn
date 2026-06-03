import Link from "next/link";

export function apostilleTunisienneProcedureCompleteMae() {
  return (
    <>
      <p>
        Tu as besoin de faire reconnaître un document tunisien aux US
        (acte de naissance, diplôme, CIN, certificat bancaire, etc.).
        Bonne nouvelle : la Tunisie est signataire de la Convention de
        La Haye depuis le 30 mars 2018. Procédure consulaire abolie,
        apostille suffit. Voici la procédure complète, étape par étape,
        pour 2026 — délais réels, coûts réels, et les pièges à éviter.
      </p>

      <h2>Apostille — ce que c&apos;est exactement</h2>
      <ul>
        <li>
          Authentification de la signature, du sceau, et de la qualité
          de l&apos;autorité ayant émis ton document tunisien.
        </li>
        <li>
          Acceptée dans <strong>tous les pays</strong> signataires de
          la Convention de La Haye 1961 — y compris les USA.
        </li>
        <li>
          Remplace l&apos;ancienne procédure consulaire (MAE → consulat
          US Tunis → State Department). Plus rapide, moins cher.
        </li>
        <li>
          Émise au format unique standardisé : 6 lignes de champs +
          sceau apostille. Reconnaissable partout.
        </li>
      </ul>

      <h2>Où obtenir une apostille tunisienne (mai 2026)</h2>
      <p>
        L&apos;autorité compétente en Tunisie est le{" "}
        <strong>Ministère des Affaires Étrangères, Migration et
        Tunisiens à l&apos;Étranger (MAE)</strong> — Direction des
        Affaires Consulaires.
      </p>
      <ul>
        <li>
          <strong>Adresse</strong> : Tunis, Tunisia. Quartier Le
          Belvédère.
        </li>
        <li>
          <strong>Horaires</strong> : lundi-vendredi, 8h30-14h
          (chèques apostille jusqu&apos;à 13h30).
        </li>
        <li>
          <strong>Frais</strong> : ~20 TND par document (timbre
          fiscal apposé sur l&apos;acte).
        </li>
      </ul>

      <h2>Délai réel pour obtenir l&apos;apostille (mai 2026)</h2>
      <ul>
        <li>
          <strong>Médiane</strong> : 2-3 jours ouvrables. Tu déposes
          lundi, tu récupères mercredi-jeudi.
        </li>
        <li>
          <strong>P90</strong> : 7 jours ouvrables. Si dossier
          incomplet ou question sur l&apos;émission, on te renvoie
          chercher pièce manquante.
        </li>
        <li>
          <strong>Pire scénario</strong> : 2-3 semaines si la
          signature ou l&apos;autorité émettrice est introuvable dans
          le registre MAE (ex : ancien acte de naissance d&apos;une
          commune dissoute).
        </li>
      </ul>

      <h2>Documents les plus souvent apostillés (use cases NOHO)</h2>
      <ul>
        <li>
          <strong>Acte de naissance / mariage / divorce</strong> :
          requis pour dossier USCIS (visa F-1, E-2, K-1, EB-5).
          Apostille du document délivré par la municipalité tunisienne
          (commune).
        </li>
        <li>
          <strong>CIN (Carte d&apos;Identité Nationale)</strong> : la
          CIN elle-même n&apos;est pas apostillée (c&apos;est un
          document interne). Mais une <strong>copie certifiée
          conforme de la CIN</strong> par un notaire tunisien peut
          être apostillée. Utile pour certains dossiers Mercury KYC.
        </li>
        <li>
          <strong>Diplôme universitaire</strong> : pour évaluation
          WES, ECE, ou admission directe en master/PhD US. Apostille
          du document délivré par l&apos;université + ministère
          enseignement supérieur si requis.
        </li>
        <li>
          <strong>Casier judiciaire (Bulletin N°3)</strong> : requis
          pour USCIS adjustment of status (I-485), green card.
          Apostille du document délivré par le tribunal.
        </li>
        <li>
          <strong>Procuration ou pouvoir notarié</strong> : pour
          signer un contrat US à distance. Notaire tunisien → MAE
          apostille → utilisable aux US.
        </li>
        <li>
          <strong>Certificat d&apos;identité bancaire tunisien</strong>{" "}
          (IBAN, attestation domiciliation) : parfois demandé en
          Mercury KYC pour prouver tes sources de fonds avant le
          transfert au compte LLC US.
        </li>
        <li>
          <strong>Contrats commerciaux signés en Tunisie</strong>{" "}
          (clients US qui demandent &laquo; signed and apostilled
          original &raquo;).
        </li>
        <li>
          <strong>Statuts de SARL/SUARL tunisienne</strong> + extrait
          RCS : si tu déclares une activité tunisienne dans ton
          dossier Mercury / Stripe / E-2 visa.
        </li>
      </ul>

      <h2>Procédure étape par étape — exemple acte de naissance</h2>
      <ol>
        <li>
          <strong>J+0</strong> : tu obtiens un acte de naissance
          récent (&lt; 90 jours) à ta municipalité de naissance. Coût
          ~3-5 TND.
        </li>
        <li>
          <strong>J+1</strong> : tu te déplaces au MAE Tunis (ou
          mandate quelqu&apos;un avec procuration). Apporte
          l&apos;acte original + photocopie + 20 TND en timbre fiscal.
        </li>
        <li>
          <strong>J+1 (sur place)</strong> : dépôt au guichet
          apostille. Récépissé remis avec date de retour estimée.
        </li>
        <li>
          <strong>J+3 à J+5</strong> : retour au MAE, retrait de
          l&apos;acte apostillé.
        </li>
        <li>
          <strong>J+5 à J+7</strong> : si ton document est destiné à
          un usage qui requiert traduction (USCIS, université US),
          tu fais traduire par un traducteur juré tunisien
          (généralement inscrit au tribunal). Coût ~50-150 TND par
          page. La traduction <em>jurée</em> n&apos;a pas besoin
          d&apos;être apostillée à nouveau si elle est attachée au
          document original apostillé.
        </li>
        <li>
          <strong>J+8 à J+15</strong> : envoi DHL Express Tunis →
          adresse US destinataire (USCIS, université, NOHO 5062
          Lankershim, etc.). 3-5 jours en transit.
        </li>
      </ol>

      <h2>Coûts complets — exemple typique</h2>
      <ul>
        <li>
          Acte de naissance récent (municipalité) : 5 TND
        </li>
        <li>
          Apostille MAE Tunis : 20 TND
        </li>
        <li>
          Traduction jurée AR/FR → EN par traducteur inscrit (2-3
          pages) : 150-300 TND
        </li>
        <li>
          DHL Express Tunis → US : 80-120 TND selon poids
        </li>
        <li>
          <strong>Total typique</strong> : 255 - 445 TND (~80-140
          USD) pour un dossier complet apostillé + traduit + envoyé.
        </li>
      </ul>

      <h2>Comparaison avec procédure consulaire (pré-2018)</h2>
      <ul>
        <li>
          <strong>Avant 2018 (procédure consulaire)</strong> : MAE
          Tunis → Consulat US Tunis → State Department US →
          destination. Délai 6-12 semaines, coût 200-400 USD.
        </li>
        <li>
          <strong>Depuis 2018 (Hague Convention)</strong> : MAE
          apostille → destination directe. Délai 7-14 jours, coût
          80-140 USD.
        </li>
        <li>
          <strong>Économie</strong> : ~6-10 semaines + 100-260 USD.
        </li>
      </ul>

      <h2>Cas spéciaux à anticiper</h2>

      <h3>Document délivré par université privée tunisienne</h3>
      <p>
        Certains diplômes d&apos;universités privées doivent passer
        par le <strong>Ministère de l&apos;Enseignement Supérieur</strong>{" "}
        AVANT d&apos;être apostillés. Étape intermédiaire ~1 semaine
        + 10 TND.
      </p>

      <h3>Document délivré par tribunal de première instance</h3>
      <p>
        Pour casier judiciaire ou jugement, MAE accepte directement
        sans visa préalable. Pas d&apos;étape intermédiaire.
      </p>

      <h3>Document délivré par notaire tunisien</h3>
      <p>
        Pour procuration, copie conforme CIN, ou autre acte
        notarié : MAE accepte directement la signature du notaire si
        elle est dans son registre. Si nouveau notaire, vérification
        ~3 jours supplémentaires.
      </p>

      <h3>Statuts de société SARL/SUARL</h3>
      <p>
        Doivent d&apos;abord passer par le <strong>Greffe du Tribunal
        de Première Instance</strong> qui les a enregistrés. Puis MAE
        apostille. Étape intermédiaire ~5 TND + 1 jour.
      </p>

      <h2>Les 5 pièges les plus fréquents</h2>
      <ol>
        <li>
          <strong>Document trop ancien</strong>. USCIS exige acte de
          naissance &lt; 90 jours. Apostille un nouveau, pas ton acte
          de 2015. Le MAE n&apos;a pas d&apos;exigence d&apos;âge
          mais la destination si.
        </li>
        <li>
          <strong>Traduction non-jurée</strong>. Google Translate ou
          ton cousin bilingue ne sont pas acceptés. Il faut un{" "}
          <strong>traducteur juré inscrit au tribunal</strong>{" "}
          tunisien. La traduction doit être attachée physiquement au
          document apostillé (agrafée ou cousue) avec sceau du
          traducteur.
        </li>
        <li>
          <strong>Apostille sur copie au lieu d&apos;original</strong>.
          MAE n&apos;apostille pas les photocopies, sauf si elles
          sont &laquo; certifiées conformes &raquo; par un notaire
          tunisien. Une photocopie ordinaire est rejetée.
        </li>
        <li>
          <strong>Document apostillé puis détérioré en transit</strong>.
          DHL Express recommandé (suivi + responsabilité). Pas de
          courrier standard. Pli protecteur cartonné.
        </li>
        <li>
          <strong>Apostille sur document mal-orthographié</strong>.
          MAE apostille tel quel. Si ton acte de naissance contient
          une faute (prénom mal orthographié), corrige à la
          municipalité AVANT d&apos;apostiller. Sinon l&apos;USCIS
          demandera correction.
        </li>
      </ol>

      <h2>Quand NOHO entre en jeu</h2>
      <p>
        NOHO n&apos;est pas un cabinet de traduction ni un service
        d&apos;apostille. NOHO :
      </p>
      <ul>
        <li>
          Te conseille quels documents apostiller selon ton dossier
          (Mercury KYC, USCIS visa, université US, etc.).
        </li>
        <li>
          Te réfère au cabinet KHIARI à Tunis qui peut, si tu le
          souhaites, gérer la chaîne MAE → traduction → DHL pour toi
          (honoraires séparés à voir directement avec KHIARI).
        </li>
        <li>
          Reçoit les documents apostillés au storefront 5062
          Lankershim pour intégration au dossier que NOHO prépare
          pour Mercury, Stripe, etc.
        </li>
        <li>
          Notre notaire californien sur place peut produire un{" "}
          <em>certificate of notarial acknowledgment</em> US à
          intégrer au dossier — différent d&apos;une apostille mais
          parfois requis en parallèle (Form 1583, Operating Agreement
          signature).
        </li>
      </ul>

      <h2>Cas particulier — apostille des USA vers Tunisie</h2>
      <p>
        L&apos;inverse fonctionne aussi : si tu as un document US
        (acte de mariage, divorce, contrat) à utiliser en Tunisie, tu
        l&apos;apostilles auprès du <strong>State Department</strong>{" "}
        ou du Secretary of State de l&apos;état émetteur. Ensuite
        utilisable directement en Tunisie sans légalisation consulaire.
      </p>
      <p>
        Délai : 4-8 semaines via US State Department (par mail). 1-2
        semaines via Secretary of State (direct in person).
      </p>

      <h2>Verdict</h2>
      <p>
        L&apos;apostille tunisienne est l&apos;une des procédures les
        plus simples et économiques pour faire reconnaître tes
        documents tunisiens aux US. Tant que tu sors un acte
        récent, que tu utilises un traducteur juré inscrit au
        tribunal, et que tu envoies via DHL Express, le processus
        est fluide. Compte 2-3 semaines de bout en bout.
      </p>

      <h2>CTA</h2>
      <p>
        Tu as besoin d&apos;apostiller un document tunisien pour un
        dossier US (visa, Mercury, université) ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On regarde quel
        document spécifique tu dois apostiller, on te trace la
        procédure exacte, et on te met en contact avec le cabinet
        KHIARI à Tunis si tu veux déléguer la chaîne.
      </p>
    </>
  );
}
