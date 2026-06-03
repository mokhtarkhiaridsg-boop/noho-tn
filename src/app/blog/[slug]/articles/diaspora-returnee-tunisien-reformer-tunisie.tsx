import Link from "next/link";

export function diasporaReturneeTunisien() {
  return (
    <>
      <p>
        Tu as vécu 5-15 ans aux US (étudiant F-1 → OPT → H-1B, ou
        Green Card abandonnée, ou résident temporaire). Tu rentres
        définitivement en Tunisie. Tu as opéré une LLC US ou un job
        salarié pendant ces années. Voici ce qui change le jour où tu
        atterris à Tunis-Carthage, et comment structurer la transition
        sans te faire piéger fiscalement côté TN ou US.
      </p>

      <h2>Pourquoi le retour est compliqué fiscalement</h2>
      <ul>
        <li>
          Pendant tes années US, tu étais résident fiscal US (substantial
          presence test, ou via Green Card). Tu payais l&apos;impôt
          fédéral + état US sur tes revenus mondiaux.
        </li>
        <li>
          Le jour du retour définitif, tu deviens résident fiscal TN
          (centre des intérêts économiques, foyer permanent en TN).
        </li>
        <li>
          Tu as une &quot;split year&quot; — partie de l&apos;année tu
          étais US-resident, partie TN-resident. Les deux régimes
          s&apos;appliquent sur leurs portions respectives.
        </li>
        <li>
          Si tu as eu Green Card et tu &quot;abandonnes&quot; (formal
          renouncement OU substantial presence sortie), tu peux
          déclencher <strong>expatriation tax</strong> sous Section
          877A si tes assets dépassent ~2M USD ou ton revenu moyen 5
          dernières années dépasse ~190K USD. Cas rare mais à vérifier.
        </li>
      </ul>

      <h2>Scénario 1 — Étudiant F-1 / OPT / H-1B short stint qui rentre</h2>
      <ul>
        <li>
          Tu étais sur visa temporaire. Pas de Green Card. Pas de
          renouncement nécessaire.
        </li>
        <li>
          Le 1er janvier après ton retour, tu deviens 100% résident
          fiscal TN.
        </li>
        <li>
          File ton dernier tax return US (1040 ou 1040-NR selon ton
          dernier statut) pour l&apos;année partielle de présence US.
        </li>
        <li>
          Côté TN, à partir de l&apos;année suivante, tu déclares en
          IRPP tunisien tes revenus mondiaux (y compris LLC US si tu
          la maintiens — voir scénario 3).
        </li>
      </ul>

      <h2>Scénario 2 — Green Card holder qui abandonne</h2>
      <ul>
        <li>
          Tu avais Green Card (résident permanent). Pour stopper
          l&apos;obligation IRS, tu dois soit (a) ne pas renouveler ta
          Green Card et abandonner physiquement les US, OU (b) déposer
          Form I-407 (Abandonment of Permanent Resident Status) à USCIS.
        </li>
        <li>
          Form I-407 = abandon officiel. Délai 1-3 mois après dépôt.
        </li>
        <li>
          Si tu n&apos;abandonnes PAS formellement, tu restes US tax
          subject même résidant en Tunisie. C&apos;est un piège classique
          — tu continues à devoir 1040 chaque année et FBAR sur tes
          comptes TN (&gt; 10K USD agrégé).
        </li>
        <li>
          Vérifie ta exposure à <strong>expatriation tax 877A</strong> :
          si tes assets nets &gt; 2M USD OU revenus moyens 5 dernières
          années &gt; 190K USD, tu dois filer Form 8854 et potentiellement
          payer mark-to-market tax sur tes assets à la date d&apos;abandon.
          Consulte un CPA US partner avant de filer I-407.
        </li>
      </ul>

      <h2>Scénario 3 — Tu avais une LLC US, tu veux la garder</h2>
      <ul>
        <li>
          Bonne nouvelle : ta LLC US peut continuer à exister après ton
          retour en Tunisie. C&apos;est même utile si tu factures encore
          des clients US/EU via Stripe.
        </li>
        <li>
          Tu deviens automatiquement un &quot;non-US person owner&quot;
          dès que tu cesses d&apos;être résident fiscal US. Tu signes
          un nouveau W-8BEN avec ton adresse TN.
        </li>
        <li>
          La LLC reste pass-through. Côté US, plus de fed tax si pas
          d&apos;ECI. Côté TN, tu déclares tes profits LLC en IRPP
          mondial.
        </li>
        <li>
          Tu dois maintenant filer <strong>Form 5472 + 1120</strong>{" "}
          chaque année (alors qu&apos;avant comme US resident tu filais
          juste Schedule C sur ton 1040). C&apos;est un changement
          opérationnel mais pas une complication majeure.
        </li>
      </ul>

      <h2>Scénario 4 — Tu avais des comptes bank US (Chase, BoA), tu les gardes</h2>
      <ul>
        <li>
          Les comptes personnels US (Chase, BoA, etc.) restent légaux
          après ton retour. Mais beaucoup de banques exigent une adresse
          US — sans adresse, elles peuvent fermer le compte.
        </li>
        <li>
          Option : utilise NOHO 5062 Lankershim comme adresse de
          correspondance bancaire personnelle (pas business). Cas accepté
          par Chase, BoA selon ton type d&apos;account.
        </li>
        <li>
          FBAR US : si tu maintiens un compte US, tu n&apos;as pas
          d&apos;obligation FBAR US (FBAR concerne les comptes étrangers
          détenus par US persons). Mais si tu maintiens un compte
          étranger (Mercury via LLC est moins clair selon que tu es
          beneficial owner direct), consulte un CPA.
        </li>
        <li>
          Côté TN, tes comptes US sont à déclarer dans ta déclaration
          IRPP au titre des revenus de placements (intérêts).
        </li>
      </ul>

      <h2>Scénario 5 — Tu reviens avec assets significatifs (&gt; 500K USD)</h2>
      <ul>
        <li>
          Rapatriement = tu transfères de l&apos;argent depuis US bank
          vers TN bank.
        </li>
        <li>
          BCT depuis décembre 2025 autorise les résidents tunisiens à
          détenir des comptes en devises (PPR). Voir{" "}
          <Link href="/blog/bct-decembre-2025-compte-usd-resident" className="font-bold underline" style={{ color: "#337485" }}>
            BCT décembre 2025
          </Link>
          .
        </li>
        <li>
          Pour gros transferts (&gt; 100K USD), prépare ton dossier
          source-of-funds : 1040 US 5 dernières années, statements
          bancaires US, contrats employeur US ou clients LLC US.
        </li>
        <li>
          Pas d&apos;impôt sur le rapatriement lui-même (c&apos;est ton
          argent post-impôt). Mais la DGI peut auditer pour vérifier
          que tu déclares correctement les revenus mondiaux après
          retour.
        </li>
        <li>
          Considère une structure : une partie en USD chez BIAT PPR
          (50K-100K liquidité), une partie en TND pour usage quotidien,
          une partie en LLC US Mercury (réserve opérationnelle).
        </li>
      </ul>

      <h2>Le piège du timing — quand annoncer le changement de résidence</h2>
      <ul>
        <li>
          Côté US, tu deviens non-resident à partir du jour où tu n&apos;es
          plus substantial presence (typiquement le jour où tu pars
          physiquement).
        </li>
        <li>
          Côté TN, tu deviens résident à partir du jour où tu installes
          ton foyer permanent en Tunisie (preuves : contrat bail TN ou
          propriété, inscription école TN si enfants, contrat travail
          TN, etc.).
        </li>
        <li>
          Cas problématique : tu rentres en décembre. Tu es US-resident
          11 mois + TN-resident 1 mois. Mais la DGI tunisienne peut
          considérer que tu étais déjà résident dès ton retour si tu
          loues un appart, achètes une voiture, etc., dès l&apos;arrivée.
          Documente proprement la date de transition.
        </li>
      </ul>

      <h2>Reformer la SARL/SUARL TN — quand</h2>
      <ul>
        <li>
          Si tu as une LLC US active et tes nouveaux clients TN paient
          en TND : oui, créer une SARL TN en parallèle (1-2 mois, ~2
          000 TND via cabinet partenaire) pour facturer proprement les
          clients TN.
        </li>
        <li>
          Combo recommandé : SARL TN + LLC US (voir{" "}
          <Link href="/blog/sarl-tn-vers-llc-us-sans-dissoudre" className="font-bold underline" style={{ color: "#337485" }}>
            article dédié
          </Link>
          ).
        </li>
        <li>
          Si tu n&apos;as pas de clients TN, pas besoin de SARL TN. Garde
          juste la LLC US et déclare tes revenus IRPP mondiaux en TN
          chaque année.
        </li>
      </ul>

      <h2>Le checklist du retour</h2>
      <ol>
        <li>
          <strong>3 mois avant retour</strong> : décide statut LLC US
          (garder vs dissoudre). Si Green Card, consulte CPA US sur
          expatriation tax 877A.
        </li>
        <li>
          <strong>Jour du retour</strong> : keep documentation
          (boarding pass, premier loyer TN, etc.) — prouvent ta date
          de transition.
        </li>
        <li>
          <strong>3 mois après retour</strong> : ouvre compte BIAT
          PPR si pas déjà. Update ton W-8BEN avec adresse TN sur
          Mercury / Stripe.
        </li>
        <li>
          <strong>6 mois après retour</strong> : régularise ton statut
          fiscal TN. Choisis ton expert-comptable TN (KHIARI partenaire
          ou autre). Note tes deadlines IRPP annuel et Form 5472
          (si LLC maintenue).
        </li>
        <li>
          <strong>Année suivante 15 avril</strong> : file ton dernier
          1040 US partial-year (pour la partie de l&apos;année où tu
          étais US-resident) + 8854 si applicable.
        </li>
        <li>
          <strong>Année suivante 30 avril TN</strong> : ta première
          IRPP TN avec déclaration de revenus mondiaux y compris LLC
          US si maintenue.
        </li>
      </ol>

      <h2>L&apos;option NOHO + KHIARI</h2>
      <p>
        Le combo NOHO (côté US — LLC, Mercury, Form 5472) + KHIARI
        partenaire à Tunis (côté TN — SARL si pertinent, comptabilité,
        IRPP) coordonne la transition retour. Le Suivi mensuel inclut
        le tracking des deux côtés. Pour une transition retour propre,
        compte 3-6 mois de coordination avant que tout soit stabilisé.
      </p>
      <p>
        Le retour est un moment où beaucoup de fondateurs paient cher
        l&apos;improvisation — soit en double-imposition involontaire,
        soit en pertes BCT au rapatriement, soit en risque d&apos;audit
        TN ou US. La règle simple : documente la date, choisis un seul
        statut résident à la fois (pas chevauchement déclaratif), et
        coordonne les deux côtés via professionnels licensed.
      </p>
    </>
  );
}
