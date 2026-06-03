import Link from "next/link";

export function cinTunisienneMercuryKycDocumentsAcceptes() {
  return (
    <>
      <p>
        Quand tu ouvres Mercury (ou Relay, Wise Business, Brex) pour ta
        LLC US, la verification identity demande un &laquo;
        government-issued ID &raquo;. La CIN tunisienne est-elle
        acceptée ? Ça dépend. Voici exactement quels documents
        tunisiens passent Mercury KYC en 2026, lesquels échouent, et
        les 4 voies de fallback documentées.
      </p>

      <h2>La CIN tunisienne — acceptée ou refusée selon le contexte</h2>
      <ul>
        <li>
          <strong>Mercury</strong> : généralement <em>refuse la CIN
          standalone</em>. Mercury préfère un passeport biométrique
          machine-readable. La CIN tunisienne n&apos;est pas
          machine-readable au format ICAO 9303 (standard passeport
          OACI).
        </li>
        <li>
          <strong>Relay Financial</strong> : même politique que
          Mercury. Passeport requis.
        </li>
        <li>
          <strong>Wise Business</strong> : <em>accepte la CIN
          tunisienne</em> en supplément du passeport mais non
          standalone. Plus permissive en KYC.
        </li>
        <li>
          <strong>Brex</strong> : passeport obligatoire. CIN
          ignorée.
        </li>
      </ul>

      <h2>Document #1 — Passeport tunisien (le plus important)</h2>
      <ul>
        <li>
          <strong>Format accepté</strong> : passeport biométrique
          tunisien (depuis 2017, format ICAO 9303). Vérifie que le
          tien est biométrique — page photo avec puce visible.
        </li>
        <li>
          <strong>Validité</strong> : doit être valide &gt; 6 mois
          au moment de l&apos;application Mercury. Sinon refus
          automatique.
        </li>
        <li>
          <strong>Format upload</strong> : scan haute résolution
          (300+ DPI), couleur, page photo entière sans flash, fond
          uniforme. Mercury utilise Onfido / Persona qui détecte
          floutage, lumière incohérente, ou edge cropping.
        </li>
        <li>
          <strong>Selfie de vérification</strong> : Mercury demande
          un selfie en parallèle. Lumière naturelle, fond uni, pas
          de chapeau / lunettes / masque.
        </li>
      </ul>

      <h2>Document #2 — Proof of address tunisien (obligatoire)</h2>
      <p>
        Mercury exige un document attestant de ton adresse en Tunisie,
        moins de 90 jours, à ton nom. Documents acceptés :
      </p>
      <ul>
        <li>
          <strong>Facture électricité STEG</strong> &lt; 90 jours.
          Plus accepté.
        </li>
        <li>
          <strong>Facture eau SONEDE</strong> &lt; 90 jours.
        </li>
        <li>
          <strong>Facture Tunisie Telecom / Ooredoo / Orange</strong>{" "}
          (fixe ou internet) &lt; 90 jours.
        </li>
        <li>
          <strong>Relevé bancaire BIAT / Attijari / STB / Amen / UIB</strong>{" "}
          &lt; 90 jours.
        </li>
        <li>
          <strong>Bail enregistré</strong> en mairie ou auprès de la
          recette des finances. Plus solide mais plus rare.
        </li>
        <li>
          <strong>Avis d&apos;imposition tunisien</strong> récent
          (IRPP).
        </li>
        <li>
          <strong>Attestation de résidence</strong> délivrée par la
          municipalité (carte de séjour pour étrangers résidents en
          TN).
        </li>
      </ul>
      <h3>Pièges proof of address</h3>
      <ul>
        <li>
          Adresse du document = adresse du passeport. Tout mismatch
          = manual review +14 jours.
        </li>
        <li>
          Si tu vis chez tes parents : impose tes documents sur
          l&apos;adresse parents (banque, telecom). Sinon attestation
          d&apos;hébergement notariée par les parents + leur proof
          of address joint.
        </li>
        <li>
          Document en arabe accepté tant que les champs critiques
          (nom, adresse, date) sont lisibles. Sinon traduction jurée
          (~150 TND).
        </li>
      </ul>

      <h2>Document #3 — Documents business LLC US (obligatoires)</h2>
      <ul>
        <li>
          <strong>Articles of Organization</strong> stamped Wyoming
          Secretary of State (PDF officiel). Sans, KYC échoue
          immédiatement.
        </li>
        <li>
          <strong>EIN letter CP 575 ou 147-C</strong> de l&apos;IRS.
          L&apos;EIN identifie la LLC au niveau fédéral US.
        </li>
        <li>
          <strong>Operating Agreement signé</strong>. Mercury demande
          si SMLLC : qui est l&apos;owner (toi, personne physique
          tunisienne), 100% ownership.
        </li>
        <li>
          <strong>Lease ou justificatif d&apos;adresse business US</strong>{" "}
          (5062 Lankershim avec NOHO Solution Business — Form 1583
          notarisé fait office).
        </li>
      </ul>

      <h2>Document #4 — Business plan / activity description
      (obligatoire si non-US person)</h2>
      <ul>
        <li>
          <strong>Format</strong> : 1-3 pages PDF.
        </li>
        <li>
          <strong>Sections requises</strong> : (1) description
          activité, (2) clients ciblés (B2B/B2C, zones géo), (3)
          revenue model, (4) projections financières 12 mois.
        </li>
        <li>
          <strong>Industries Mercury refuse en 2026</strong> : crypto
          trading, gambling, adult, weapons, MLM, cannabis. Précise
          ton industrie clairement pour éviter manual review prolongé.
        </li>
        <li>
          <strong>Volume mensuel attendu</strong> : sois conservateur
          mais pas trop. Trop bas (&lt; 1K USD/mois) = signal &laquo;
          pas vraiment business &raquo;. Trop haut (&gt; 100K USD/mois
          dès Y1) = demandes proof of revenue actuel.
        </li>
      </ul>

      <h2>Document #5 — Source of funds (parfois demandé)</h2>
      <p>
        Si tu déposes &gt; 10K USD initialement, Mercury peut demander
        proof of funds source :
      </p>
      <ul>
        <li>
          Salaire tunisien des 12-24 derniers mois (bulletins de paie
          + relevés bancaires TN).
        </li>
        <li>
          Vente d&apos;actifs (acte de vente notarié, contrat de
          cession).
        </li>
        <li>
          Héritage (acte notarié de succession).
        </li>
        <li>
          Capital existant de SARL TN (statuts + bilans 2-3 ans).
        </li>
        <li>
          Revenus freelance documentés (Upwork/Toptal/Fiverr
          statements + paie history).
        </li>
      </ul>

      <h2>Les 4 voies de fallback si Mercury refuse</h2>

      <h3>Voie 1 — Relay Financial</h3>
      <ul>
        <li>Critères KYC similaires Mercury.</li>
        <li>
          ~10-15% des dossiers Mercury refusés passent à Relay (Relay
          a un risk algo légèrement différent).
        </li>
        <li>Approval 1-2 semaines.</li>
      </ul>

      <h3>Voie 2 — Wise Business (LLC US)</h3>
      <ul>
        <li>
          KYC plus permissive que Mercury/Relay sur la CIN.
        </li>
        <li>
          Accepte CIN tunisienne en supplément du passeport (rare
          mais documenté).
        </li>
        <li>
          Restriction : Wise pour SARL TN bloque USD inbound (cf.{" "}
          <Link href="/blog/wise-business-tunisie-2026-statut-reel">
            statut Wise Tunisie
          </Link>
          ). Pour LLC US owned by TN, fonctionnel.
        </li>
      </ul>

      <h3>Voie 3 — Brex</h3>
      <ul>
        <li>
          Critères KYC stricts (Brex préfère startup-funded ou
          revenue-generating). Pas idéal early-stage.
        </li>
        <li>
          Si tu lances un SaaS avec early revenue ou pre-funding,
          considérer.
        </li>
      </ul>

      <h3>Voie 4 — Airwallex</h3>
      <ul>
        <li>
          Compte business multi-devises avec local USD account US.
        </li>
        <li>
          KYC similar to Wise. Accepte plus de pays origin owner.
        </li>
        <li>
          Frais légèrement plus élevés que Mercury/Relay.
        </li>
      </ul>

      <h2>Combo gagnant — ce que NOHO recommande aux fondateurs
      tunisiens en 2026</h2>
      <ul>
        <li>
          <strong>Mercury en premier</strong> (priorité). Stripe
          intégrateur préféré. Try Mercury, attendre 1-3 semaines.
        </li>
        <li>
          <strong>Si Mercury refuse</strong>, application Relay en
          parallèle dans les 48h.
        </li>
        <li>
          <strong>Si Relay refuse aussi</strong>, Wise Business
          (acceptance LLC US plus large).
        </li>
        <li>
          <strong>Maintien Wise Business en parallèle</strong>{" "}
          même si Mercury approuvé — backup en cas de fermeture
          Mercury mid-activity.
        </li>
        <li>
          <strong>Brex</strong> seulement si revenue généré ou
          funding obtenu.
        </li>
      </ul>

      <h2>Documents tunisiens INACCEPTABLES pour Mercury KYC</h2>
      <ul>
        <li>
          <strong>Permis de conduire tunisien</strong>. N&apos;est
          pas accepté comme ID primaire par Mercury / Relay / Brex.
          Wise tolère parfois comme secondary.
        </li>
        <li>
          <strong>Carte d&apos;étudiant universitaire tunisienne</strong>.
          Pas un ID government-issued au sens Mercury.
        </li>
        <li>
          <strong>Vieux passeport (non-biométrique)</strong>. Si tu
          as un passeport pré-2017 sans puce, demande à la Préfecture
          de Police de te délivrer un nouveau. ~2-4 semaines.
        </li>
        <li>
          <strong>CIN expirée</strong>. Vérifie la date d&apos;expiration
          avant tentative.
        </li>
      </ul>

      <h2>Si Mercury refuse — le playbook recovery 48h</h2>
      <ol>
        <li>
          <strong>Lis la lettre de refus</strong>. Mercury explique
          rarement la cause précise mais donne parfois un indice.
        </li>
        <li>
          <strong>Réponds au email de support Mercury</strong>{" "}
          (support@mercury.com) dans les 48h. Demande politely si
          des documents supplémentaires peuvent résoudre.
        </li>
        <li>
          <strong>Soumets application Relay</strong> en parallèle
          (assume Mercury non-rétractable).
        </li>
        <li>
          <strong>Si tu suspectes la cause (ex : business plan
          flou, proof of address ambigu)</strong>, prépare un dossier
          renforcé pour la réapplication ou pour Relay.
        </li>
        <li>
          <strong>Si tu es client NOHO Solution Business</strong>,
          on review ton dossier avec toi sur appel WhatsApp et on te
          conseille les fixes les plus probables.
        </li>
      </ol>

      <h2>Verdict honnête sur la CIN tunisienne</h2>
      <p>
        En 2026, ne compte PAS sur la CIN tunisienne pour Mercury
        KYC. Le passeport biométrique est requis. Si tu n&apos;as
        pas de passeport, fais-en un avant même d&apos;envisager une
        LLC US — sans, tu seras bloqué côté banque.
      </p>
      <p>
        Une fois le passeport en main + proof of address + Articles
        of Organization + EIN + Operating Agreement + business plan,
        ton dossier est en bonne forme. Le taux d&apos;approval
        Mercury pour fondateur tunisien avec ce stack complet est{" "}
        <em>significativement plus élevé</em> que sans (chiffres
        Mercury opaque mais estimation NOHO ~70-80% vs ~30-40%
        dossier incomplet).
      </p>

      <h2>CTA</h2>
      <p>
        Tu prépares ton dossier Mercury et tu hésites sur tes
        documents tunisiens ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On checke chaque
        document avant que tu cliques Submit chez Mercury — on
        identifie les faiblesses, on suggère les fixes, on te met en
        contact avec le cabinet KHIARI à Tunis si tu as besoin
        d&apos;apostille / traduction.
      </p>
    </>
  );
}
