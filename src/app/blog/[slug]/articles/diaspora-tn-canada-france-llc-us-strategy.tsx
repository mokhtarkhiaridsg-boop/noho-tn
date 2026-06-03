import Link from "next/link";

export function diasporaTnCanadaFranceLlcUsStrategy() {
  return (
    <>
      <p>
        Tu es Tunisien résidant au Canada ou en France (binational ou
        avec carte de séjour). Tu veux ouvrir une LLC US pour
        encaisser des clients américains. Ta stratégie est différente
        d&apos;un résident purement Tunisie — résidence fiscale
        canadienne ou française, traités bilatéraux différents, banking
        + Stripe approval mécanismes différents. Voici le playbook par
        pays.
      </p>

      <h2>Diaspora TN au Canada — la voie LLC US</h2>

      <h3>Statut résidence fiscale</h3>
      <ul>
        <li>
          Permanent Resident (PR) Canada : tu es résident fiscal
          canadien sur ton revenu mondial. Déclare tes revenus LLC
          US au Revenu Canada via T1 General + T2125 (self-employed
          income).
        </li>
        <li>
          Citoyen canadien : pareil — résidence fiscale canadienne
          full.
        </li>
        <li>
          Étudiant TN en visa F-1 vers Canada (rare) : statut
          intermédiaire, voir avec fiscaliste canadien.
        </li>
      </ul>

      <h3>Convention fiscale Canada-USA 1980</h3>
      <ul>
        <li>
          <strong>Article VII (business profits)</strong> : ta LLC
          US ne paie pas tax fédéral US si pas de US permanent
          establishment. Tes revenus pass-through.
        </li>
        <li>
          <strong>Article XII (royalties)</strong> : retenue réduite
          10% sur royalties si W-8BEN signé avec article XII
          référencé.
        </li>
        <li>
          <strong>Foreign Tax Credit (FTC)</strong> : si tu paies tax
          US (rare en SMLLC pass-through), tu peux en obtenir crédit
          contre tax canadienne.
        </li>
      </ul>

      <h3>Banking + Stripe au Canada</h3>
      <ul>
        <li>
          <strong>Mercury</strong> : ouverture LLC US owned by
          Canadian PR accepté. Tu fournis SIN canadien (~équivalent
          ITIN) ou ITIN US. Mercury approval similaire à TN-resident.
        </li>
        <li>
          <strong>Stripe</strong> : ton LLC US devient le payment
          processor. Stripe ne ferme pas pour résidence canadienne
          (Canada n&apos;est pas pays sanctionné).
        </li>
        <li>
          <strong>RBC, TD, Scotia (banques canadiennes)</strong> :
          accepte ta carte Mercury debit pour paiements business.
        </li>
        <li>
          <strong>Wise Business CA</strong> : disponible directement
          en CA (contrairement à TN). Tu peux ouvrir Wise Business CA
          directement.
        </li>
      </ul>

      <h3>Avantages spécifiques diaspora Canada</h3>
      <ul>
        <li>
          <strong>Easier KYC</strong> : passport canadien + SIN
          accepté partout, plus rapide que TN.
        </li>
        <li>
          <strong>Crédit US plus facile</strong> : si tu as carte
          canadienne avec historique 2+ ans, certains émetteurs US
          (Discover, AMEX) acceptent.
        </li>
        <li>
          <strong>Time zone</strong> : EST/PST overlap avec heures
          ouvrées US, communication avec NOHO LA plus fluide.
        </li>
        <li>
          <strong>Voyage US plus simple</strong> : pas de visa US
          si Canadien (B1/B2 waiver). Tu peux apply ITIN en personne
          via IRS TAC pendant un voyage NYC ou Detroit.
        </li>
      </ul>

      <h3>Pièges spécifiques au Canada</h3>
      <ul>
        <li>
          <strong>TFSA + LLC US</strong> : ne mets PAS ton ownership
          LLC US dans un TFSA (Tax-Free Savings Account canadien).
          L&apos;IRS ne reconnaît pas TFSA et tu te retrouves avec
          double imposition.
        </li>
        <li>
          <strong>RRSP US-source income</strong> : si tu vis aux US
          plus tard et tu as RRSP canadien, attention impose. Treaty
          Article XVIII traite cela mais nécessite filing
          spécifique.
        </li>
        <li>
          <strong>CRA reporting</strong> : déclare ton ownership LLC
          US sur Form T1135 (foreign assets &gt; 100 000 CAD). Omet
          = amende 2 500 CAD + 5% du montant.
        </li>
        <li>
          <strong>Quebec résident</strong> : double filing fédéral
          + Québec. Quebec n&apos;a pas signé d&apos;harmonisation
          spécifique sur LLC US. Consultez expert-comptable québécois.
        </li>
      </ul>

      <h2>Diaspora TN en France — la voie LLC US</h2>

      <h3>Statut résidence fiscale</h3>
      <ul>
        <li>
          <strong>Résident fiscal français</strong> (séjour &gt; 6
          mois/an OU famille FR OU centre d&apos;intérêts vitaux FR)
          : tu es taxé sur revenu mondial. Déclare LLC US revenus
          dans 2042-C-PRO.
        </li>
        <li>
          <strong>Non-résident</strong> avec ITNS FR : taxation
          limitée aux revenus FR-source. Pas pour la majorité des
          diaspora actifs.
        </li>
      </ul>

      <h3>Convention fiscale France-USA 1994 (révisée 2009)</h3>
      <ul>
        <li>
          <strong>Article 7 (bénéfices industriels et commerciaux)</strong>{" "}
          : ta LLC US pass-through, tes bénéfices imposés en France
          (impôt sur revenu personnel).
        </li>
        <li>
          <strong>Article 11 (intérêts)</strong> : retenue 0% sur
          intérêts US-source si W-8BEN bien signé.
        </li>
        <li>
          <strong>Article 12 (royalties)</strong> : retenue 0% sur
          royalties US-source aussi.
        </li>
        <li>
          <strong>Article 24 (élimination double imposition)</strong>{" "}
          : crédit d&apos;impôt FR équivalent à l&apos;impôt US payé
          (souvent 0 en SMLLC pass-through).
        </li>
      </ul>

      <h3>Banking + Stripe en France</h3>
      <ul>
        <li>
          <strong>Mercury</strong> : ouverture LLC US owned by FR
          resident accepté. Pas de problème spécifique pour
          binationaux FR-TN.
        </li>
        <li>
          <strong>Stripe FR</strong> : disponible directement
          France ! Pour client base FR/EU, Stripe FR direct est
          souvent meilleur que LLC US (frais EUR direct, pas de FX).
        </li>
        <li>
          <strong>Quand préférer LLC US à Stripe FR direct</strong>{" "}
          :
          <ul>
            <li>Clients US (Stripe FR vers US client = FX loss)</li>
            <li>Volume &gt; 100K USD/an US (économie Mercury vs
            Stripe FR fees)</li>
            <li>SaaS B2B avec invoicing US (Atlas C-Corp peut-être
            meilleur)</li>
          </ul>
        </li>
        <li>
          <strong>BPI / BNP / Société Générale</strong> : accepte
          Mercury debit pour paiements business. Pas de friction.
        </li>
      </ul>

      <h3>Avantages spécifiques diaspora France</h3>
      <ul>
        <li>
          <strong>Stripe FR + LLC US combo</strong> : tu peux opérer
          Stripe FR pour clients EU et LLC US Stripe pour clients US.
          Maximise revenue retention.
        </li>
        <li>
          <strong>Bilingue FR-EN</strong> : NOHO opère en FR couramment.
          Pas de barrier linguistique.
        </li>
        <li>
          <strong>Voyage US visa-free</strong> : Visa Waiver Program
          (ESTA) si passport FR. Pas besoin B1/B2.
        </li>
      </ul>

      <h3>Pièges spécifiques en France</h3>
      <ul>
        <li>
          <strong>Auto-entrepreneur seuil</strong> : si tu opères en
          AE (micro-entreprise) FR, tes revenus LLC US peuvent te
          faire dépasser le plafond (77 700 EUR services / 188 700
          EUR commerce 2026). Tu dois switcher EI ou SARL FR. NOHO
          réfère expert-comptable spécialisé FR-TN-US.
        </li>
        <li>
          <strong>URSSAF cotisations</strong> : tes revenus LLC US
          peuvent générer cotisations URSSAF si considérés activité
          professionnelle FR. Discussion expert-comptable obligatoire.
        </li>
        <li>
          <strong>Déclaration formulaires obligatoires</strong> :
          formulaire 3916 (compte étranger) annuel obligatoire si
          compte Mercury &gt; 0. Pas d&apos;amende si déclaration
          honnête, mais omission = amende 1 500 EUR + 5% du solde.
        </li>
        <li>
          <strong>Sécurité sociale française</strong> : continue
          tant que tu es PFAR. Régime spécial pour expatriés
          partiels.
        </li>
      </ul>

      <h2>Quand passer de SARL FR / AE FR à LLC US</h2>
      <ul>
        <li>
          <strong>50%+ revenus US-source</strong> et tu veux des
          banking US local (Mercury, Stripe US direct).
        </li>
        <li>
          <strong>Tu vis dans 2 pays</strong> (binational TN-FR
          actifs) et tu as besoin d&apos;une structure neutre
          accessible des deux.
        </li>
        <li>
          <strong>Tu vises levée VC US</strong> (rare en LLC mais
          Stripe Atlas C-Corp si oui).
        </li>
      </ul>

      <h2>Quand RESTER en SARL FR / AE FR (et ne pas former LLC US)</h2>
      <ul>
        <li>
          <strong>80%+ revenus EU/FR-source</strong>. Stripe FR
          direct te suffit. LLC US ajoute complexité sans bénéfice
          fiscal.
        </li>
        <li>
          <strong>Tu veux URSSAF / RSI couverture professionnelle</strong>{" "}
          (assurance maladie cumulée). LLC US n&apos;y contribue
          pas.
        </li>
        <li>
          <strong>Volume &lt; 50K EUR/an</strong>. Frais LLC US +
          fiscaliste TN bilingual = ~2 000 EUR/an, pas amortissable
          en bas volume.
        </li>
      </ul>

      <h2>Le combo diaspora optimal — SARL/AE FR + LLC US</h2>
      <ul>
        <li>
          <strong>SARL FR ou AE FR</strong> : facture les clients
          EU en EUR. Stripe FR direct. Comptabilité française
          standard.
        </li>
        <li>
          <strong>LLC US (Wyoming) + Mercury</strong> : facture les
          clients US en USD. Stripe US direct (W-8BEN avec FR
          residence).
        </li>
        <li>
          <strong>Coordination fiscale</strong> : déclaration FR
          inclut LLC US revenus via 2042-C-PRO. Si SARL FR, la SARL
          peut acheter LLC US = filiale (mais piège fiscal :
          réimposition opaque selon jurisprudence).
        </li>
        <li>
          <strong>Coût opérationnel</strong> : ~2 500-4 000 EUR/an
          (LLC US + Mercury + Wise + fiscaliste FR international).
          Amortissable dès 30-50K USD/an de revenus US.
        </li>
      </ul>

      <h2>Comment NOHO accompagne la diaspora TN au Canada/France</h2>
      <ul>
        <li>
          <strong>Discovery call</strong> en français — on parle
          ton statut résidence, ton revenu mix actuel, tes clients
          ciblés.
        </li>
        <li>
          <strong>LLC US formation</strong> standard via NOHO 4 000
          TND, peu importe ta résidence (Canada / France).
        </li>
        <li>
          <strong>Mercury + Wise + Stripe setup</strong> coordonné
          avec ta résidence.
        </li>
        <li>
          <strong>Référence fiscaliste internationaliste</strong>{" "}
          dans ton pays de résidence (CA ou FR). NOHO maintient une
          shortlist partenaires.
        </li>
        <li>
          <strong>Suivi mensuel 1 200 TND</strong> couvre la partie
          US (Form 5472, Wyoming annual). Ton fiscaliste FR/CA gère
          la partie locale.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Diaspora TN au Canada ou en France a souvent plus
        d&apos;options que TN résident pur (Stripe local direct, banking
        local, ITIN plus facile via voyage US). La LLC US fait sens
        seulement si revenu US-source &gt; 30K USD/an OU besoin
        structure neutre pour binational TN-FR/CA.
      </p>

      <h2>CTA</h2>
      <p>
        Tu es diaspora TN au Canada ou en France et tu veux explorer
        LLC US ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On regarde ton
        revenu mix EU/US, ton statut résidence, et on te dit
        franchement si LLC US ajoute valeur ou complique sans
        bénéfice.
      </p>
    </>
  );
}
