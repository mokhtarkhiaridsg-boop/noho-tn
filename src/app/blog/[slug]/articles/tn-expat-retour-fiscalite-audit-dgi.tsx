import Link from "next/link";

export function tnExpatRetourFiscaliteAuditDgi() {
  return (
    <>
      <p>
        Tu vis aux US (ou Canada, France, Émirats) depuis 3-15 ans, et
        tu prévois de rentrer définitivement en Tunisie. Au moment du
        retour, ta situation fiscale TN change radicalement : tu
        redeviens résident fiscal tunisien, et la DGI a le droit de
        faire un audit sur les 4 dernières années si tu déclares mal.
        Voici le playbook 2026 — comment gérer le timing, déclarer
        tes assets, et éviter les pièges de l&apos;audit DGI.
      </p>

      <h2>Qu&apos;est-ce qui change au retour définitif</h2>
      <ul>
        <li>
          <strong>Résidence fiscale</strong> : tu redeviens résident
          tunisien dès que tu y passes &gt; 183 jours/an OU tu y
          installes ton foyer principal OU tu y centres tes intérêts
          économiques (la plus haute des trois).
        </li>
        <li>
          <strong>Worldwide income obligation</strong> : tu déclares
          en TN tous tes revenus mondiaux (Article 16 Code IRPP TN),
          y compris ceux de ta LLC US, immobilier US, etc.
        </li>
        <li>
          <strong>Compte bancaire US</strong> : Mercury, Chase, etc.
          restent tiens — légal de les garder. Mais déclaration BCT
          obligatoire (compte étranger).
        </li>
        <li>
          <strong>CRS / FATCA</strong> : reporting automatique de tes
          banques étrangères vers DGI Tunisie (cf.{" "}
          <Link href="/blog/fatca-crs-impact-tunisien-llc-us-owner">
            FATCA + CRS détails
          </Link>
          ).
        </li>
      </ul>

      <h2>Timeline préparation retour — 12 à 18 mois avant</h2>

      <h3>T-18 mois — Audit personnel</h3>
      <ul>
        <li>
          Inventaire patrimoine : comptes bancaires (US + autres),
          immobilier, LLC ownership, crypto holdings, retraites
          (RRSP CA, 401k US, etc.), assurance-vie, etc.
        </li>
        <li>
          Calcul net worth approximative en USD et en TND.
        </li>
        <li>
          Identifie les obligations de déclaration TN qui s&apos;appliqueront
          (compte étranger BCT, immobilier étranger, LLC, etc.).
        </li>
      </ul>

      <h3>T-12 mois — Consultation fiscaliste TN spécialisé</h3>
      <ul>
        <li>
          Engagement fiscaliste TN expert en retour expat. Cabinet
          KHIARI ou équivalent (cf.{" "}
          <Link href="/blog/choisir-comptable-fiscaliste-tunisien-llc-us">
            choisir fiscaliste
          </Link>
          ).
        </li>
        <li>
          Plan de timing : quand exactement bascule résidence fiscale
          (early dans année = full year imposable, late = pro-rata).
        </li>
        <li>
          Stratégie sur les assets US à liquider AVANT retour vs
          garder.
        </li>
      </ul>

      <h3>T-6 mois — Liquidations stratégiques</h3>
      <ul>
        <li>
          <strong>401k / IRA US</strong> : si tu liquides AVANT
          résidence TN, taxation US uniquement. Si tu liquides APRÈS
          résidence TN, taxation double potentielle.
        </li>
        <li>
          <strong>Stock options / RSUs</strong> : exerce + vends
          avant retour pour clarté tax US-side.
        </li>
        <li>
          <strong>Property US</strong> : décide vendre ou garder
          (loueur absent). Vendre = capital gains US (potentiel
          step-up exclusion). Garder = obligation déclaration TN +
          potentiel impôt sur revenus locatifs.
        </li>
        <li>
          <strong>LLC US ownership</strong> : tu peux garder ta LLC
          US opérationnelle depuis Tunis. Cf. notre dossier
          spécifique sur ce sujet plus bas.
        </li>
      </ul>

      <h3>T-3 mois — Documentation</h3>
      <ul>
        <li>
          Collecte tous statements bancaires US des 4 dernières années
          (DGI peut auditer rétroactivement).
        </li>
        <li>
          Tax returns US 1040 ou 1040-NR ou Form 5472 + 1120 pour
          LLC US — tous les 4 derniers ans archived.
        </li>
        <li>
          Acte de naissance + état civil + diplômes (à apostiller via
          consulat US si besoin de présenter en TN).
        </li>
      </ul>

      <h3>T-0 — Arrivée en Tunisie</h3>
      <ul>
        <li>
          Date d&apos;établissement physique = date de bascule
          résidence (approximatif, fiscaliste précise).
        </li>
        <li>
          Ouverture compte BCT PPR USD (depuis déc 2025) si tu veux
          garder USD en TN sans conversion.
        </li>
        <li>
          Mise à jour adresse Mercury, IRS, banques US → adresse
          tunisienne.
        </li>
      </ul>

      <h2>Tes obligations déclaratives DGI première année</h2>
      <ul>
        <li>
          <strong>Formulaire IRPP avec annexe revenu mondial</strong>{" "}
          : déclare TOUS tes revenus, incluant US-source.
        </li>
        <li>
          <strong>Déclaration compte étranger (article spécifique
          Code IRPP)</strong> : numéro de compte + banque + solde au
          31 déc. Sans déclaration = amende 25 000 TND.
        </li>
        <li>
          <strong>Déclaration immobilier étranger</strong> : si tu
          possèdes propriété hors-TN, déclare valeur estimée + revenus
          locatifs.
        </li>
        <li>
          <strong>Déclaration ownership LLC / entité étrangère</strong>{" "}
          : pourcentage ownership + statut (active vs dormante).
        </li>
        <li>
          <strong>CFC / Société étrangère contrôlée</strong> : si LLC
          US owned &gt; 50% par toi, certaines règles CFC peuvent
          s&apos;appliquer (rare en pratique TN 2026 mais à vérifier).
        </li>
      </ul>

      <h2>Audit DGI — ce qui déclenche, ce qui se passe</h2>

      <h3>Déclencheurs d&apos;audit</h3>
      <ul>
        <li>
          <strong>Asymétrie déclaration vs CRS reports</strong>.
          DGI reçoit info des banques étrangères (sauf US qui n&apos;est
          pas CRS) et compare à tes déclarations. Mismatch = audit.
        </li>
        <li>
          <strong>Transferts vers TN bank significatifs</strong> sans
          source claire. &gt; 50K USD en un trimestre = potentiel
          flag.
        </li>
        <li>
          <strong>Achat immobilier TN cash significatif</strong> sans
          justification source de fonds.
        </li>
        <li>
          <strong>Réclamation crédit FTC sans documentation</strong>{" "}
          (article 24 du traité).
        </li>
        <li>
          <strong>Anonymous tip</strong> ou délation (rare mais arrive
          dans cas de divorce, conflit famille, conflit business).
        </li>
      </ul>

      <h3>Procédure audit DGI</h3>
      <ol>
        <li>
          Notification écrite par lettre recommandée. Délai de réponse
          15-30 jours.
        </li>
        <li>
          Convocation au centre régional fiscal pour entretien
          (souvent Tunis Centre Lac 2 ou centre régional selon résidence).
        </li>
        <li>
          Présentation des documents demandés (tax returns US 4 ans,
          bank statements, Form 5472 si LLC US, etc.).
        </li>
        <li>
          Audit examiner reviews + cross-references avec data CRS.
        </li>
        <li>
          Résultat : (a) clean, no penalty ; (b) ajustement IRPP avec
          rappel + intérêts ; (c) pénalités 25-100% du montant
          omis + intérêts ; (d) cas grave : poursuites pénales pour
          fraude fiscale.
        </li>
      </ol>

      <h2>Stratégies d&apos;optimisation légales</h2>

      <h3>1. Article 24 du traité TN-USA — FTC</h3>
      <ul>
        <li>
          Si tu as payé tax US sur revenus pendant ton statut US
          person, tu peux en obtenir crédit contre IRPP TN (FTC).
        </li>
        <li>
          Documentation requise : Form 1040 US filed + proof of tax
          paid (IRS account transcript).
        </li>
        <li>
          Maximum FTC = montant du tax TN qui aurait été dû sur ce
          même revenu. Si tax US &gt; tax TN, surplus perdu.
        </li>
      </ul>

      <h3>2. Article 21 (étudiants F-1)</h3>
      <p>
        Si tu étais étudiant F-1 aux US pendant les années à déclarer,
        ton premier 9 000 USD/an de US-source income était exempt
        fédéral US via Article 21. Réclame ce statut dans tax returns
        US 1040-NR rétroactives si besoin.
      </p>

      <h3>3. Article 36 IRPP TN</h3>
      <p>
        Foreign-source income déjà imposé exonéré en TN. Vérifie pour
        chaque source si tu as payé tax US et donc Article 36 peut
        protéger.
      </p>

      <h3>4. Repatriation timing</h3>
      <ul>
        <li>
          Si tu vends ta property US au 31 décembre vs 1er janvier,
          capital gain dans année de résidence US vs TN. Différence
          potentielle 15-30% impôt.
        </li>
        <li>
          De même pour stock options exercises, IRA conversions, etc.
        </li>
      </ul>

      <h2>Garder LLC US opérationnelle depuis Tunisie post-retour</h2>
      <ul>
        <li>
          <strong>Légal et standard</strong> : tu opères ta LLC US
          depuis Tunis comme worldwide remote business. Pas de
          changement structural requis.
        </li>
        <li>
          <strong>Mercury bank account US</strong> reste actif (tu
          es maintenant résident TN owner of US LLC).
        </li>
        <li>
          <strong>Stripe US</strong> continue de fonctionner. Pas de
          fermeture automatique du fait du changement résidence.
        </li>
        <li>
          <strong>Form 5472 + 1120 pro-forma</strong> annuel reste
          obligatoire chaque année.
        </li>
        <li>
          <strong>Déclaration IRPP TN</strong> de tes revenus LLC
          obligatoire — c&apos;est la grosse nouveauté du retour.
        </li>
      </ul>

      <h2>Le piège du compte 401k / IRA non-converti</h2>
      <p>
        Tu as accumulé un 401k US pendant ton emploi US. Au retour
        TN, plusieurs voies :
      </p>
      <ul>
        <li>
          <strong>Garder</strong> : 401k continue à grow tax-deferred
          aux US. Mais le statut résidence TN complique le withdrawal
          plus tard.
        </li>
        <li>
          <strong>Roll-over IRA</strong> : standard rolling de 401k →
          Traditional IRA US. Reste tax-deferred. Plus de flexibilité
          d&apos;investissement.
        </li>
        <li>
          <strong>Convertir Roth IRA</strong> : paie tax US sur
          conversion AVANT retour TN. Future withdrawals tax-free.
          Économie potentielle si tu prévois retraits tardifs.
        </li>
        <li>
          <strong>Withdraw early (penalty)</strong> : 10% pénalité US
          + income tax US + potentiel double-impose TN. Seulement si
          urgence.
        </li>
        <li>
          <strong>Treaty Article 18</strong> traite spécifiquement
          retirement income — vérifier avec fiscaliste si tu reçois
          pension US régulière post-retraite TN.
        </li>
      </ul>

      <h2>Cas type — fondateur TN US 10 ans, retour 2026, net worth 800K USD</h2>
      <ul>
        <li>
          <strong>Composition</strong> :
          <ul>
            <li>250K USD 401k</li>
            <li>200K USD Mercury checking + savings (LLC US)</li>
            <li>150K USD condo SF (50% equity)</li>
            <li>100K USD brokerage US (Schwab)</li>
            <li>50K USD crypto (Coinbase, Kraken)</li>
            <li>50K USD voiture + assets perso</li>
          </ul>
        </li>
        <li>
          <strong>Recommandations T-12 mois</strong> :
          <ul>
            <li>Vendre condo SF avant retour (capital gain US-only)</li>
            <li>401k → IRA roll-over (mainained)</li>
            <li>Liquider 50% brokerage US si tu vises cash en TN</li>
            <li>Garder LLC US opérationnelle</li>
            <li>Garder crypto (déclarer en TN comme foreign asset)</li>
          </ul>
        </li>
        <li>
          <strong>Post-retour TN</strong> :
          <ul>
            <li>BCT PPR USD ouverte pour accumulation USD locale</li>
            <li>Achat propriété TN (cash from sale SF) — diversifier
            risque TND</li>
            <li>LLC US continue d&apos;opérer, Form 5472 annuel + IRPP TN</li>
            <li>401k stays US, retirement planning future avec fiscaliste</li>
          </ul>
        </li>
        <li>
          <strong>Tax bill year 1 post-retour</strong> : ~30-50K TND
          IRPP TN selon revenus LLC US active. Compense potentiellement
          par crédit FTC si tax US payé sur certaines tranches.
        </li>
      </ul>

      <h2>Documents à préparer pour audit potentiel</h2>
      <ul>
        <li>
          <strong>4 dernières années tax returns US</strong> (Form
          1040, 1040-NR, ou 1120 LLC).
        </li>
        <li>
          <strong>IRS account transcripts</strong> (gratuit via
          irs.gov, prove tax paid).
        </li>
        <li>
          <strong>Bank statements US</strong> 4 années (Mercury,
          Chase, etc.).
        </li>
        <li>
          <strong>Acte de vente immobilier US</strong> si applicable.
        </li>
        <li>
          <strong>Form 5472 + 1120 pro-forma</strong> archives pour
          LLC US.
        </li>
        <li>
          <strong>Brokerage 1099-B et 1099-DIV</strong> archives.
        </li>
        <li>
          <strong>Crypto transaction history</strong> (Coinbase
          1099-MISC + exchange transaction CSVs).
        </li>
      </ul>

      <h2>NOHO accompagnement retour</h2>
      <ul>
        <li>
          <strong>Discovery call retour expat</strong> : audit
          patrimoine + recommandation timeline.
        </li>
        <li>
          <strong>Référence fiscaliste TN expert retour expat</strong>{" "}
          : cabinet KHIARI ou similaire.
        </li>
        <li>
          <strong>Maintien LLC US opérationnel post-retour</strong> :
          NOHO Suivi mensuel 1 200 TND/mois continue à coordonner
          Form 5472 + Wyoming annual + Mercury monitoring.
        </li>
        <li>
          <strong>Adresse mailbox NOHO 5062 Lankershim continue de
          recevoir tes courriers US</strong> (IRS, banques) sans
          interruption.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Le retour expat TN est l&apos;un des cas les plus complexes
        fiscalement. 12-18 mois de préparation minimum avec fiscaliste
        TN expert. Documentation rigoureuse 4 ans rétrospectifs. Audit
        DGI est rare mais possible — préparation = protection. Garde
        ta LLC US opérationnelle depuis Tunis est légal et standard.
      </p>

      <h2>CTA</h2>
      <p>
        Tu prévois ton retour définitif en Tunisie et tu veux planifier
        la transition fiscale ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On audit ta
        situation + référence fiscaliste TN expert retour + coordonne
        avec NOHO Suivi mensuel pour la partie LLC US post-retour.
      </p>
    </>
  );
}
