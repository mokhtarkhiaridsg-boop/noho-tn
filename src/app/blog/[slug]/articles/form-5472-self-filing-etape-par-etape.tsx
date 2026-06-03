import Link from "next/link";

export function form5472SelfFiling() {
  return (
    <>
      <p>
        Form 5472 + 1120 pro-forma est obligatoire chaque année pour
        toute LLC US détenue par un non-US person — même sans revenu.
        Pénalité 25 000 USD par formulaire manquant + 25 000 USD par
        tranche de 30 jours après mise en demeure IRS, sans plafond.
        Si ton CA tunisien ne justifie pas les 250-500 USD/an d&apos;un
        CPA, voici comment le filer toi-même proprement.
      </p>

      <h2>Avertissement avant tout</h2>
      <ul>
        <li>
          Ce guide est <strong>informationnel</strong>. Tu restes seul
          responsable de l&apos;exactitude de ton filing. NOHO n&apos;est
          pas un CPA ni un avocat fiscaliste US.
        </li>
        <li>
          Pour des situations complexes (transactions inter-entités &gt;
          0, US-source income, employés US), engage un CPA US.
        </li>
        <li>
          Pour une SMLLC tunisienne <strong>sans transactions avec
          related parties</strong> et <strong>sans US-source ECI</strong>,
          le filing est mécaniquement simple. C&apos;est le cas que ce
          guide couvre.
        </li>
      </ul>

      <h2>Ce que tu déposes exactement</h2>
      <ul>
        <li>
          <strong>Form 1120 pro-forma</strong> (Corporate Income Tax
          Return) — le formulaire qui sert d&apos;enveloppe.
        </li>
        <li>
          <strong>Form 5472</strong> attaché au 1120 (Information Return
          of a 25% Foreign-Owned U.S. Corporation).
        </li>
        <li>
          Soumis ensemble par fax OU mail à l&apos;IRS Ogden Service
          Center.
        </li>
      </ul>

      <h2>Quand filer</h2>
      <ul>
        <li>
          Année fiscale par défaut : calendar year (Jan 1 → Dec 31).
        </li>
        <li>
          Date limite : <strong>15 avril</strong> de l&apos;année suivante
          sans extension. <strong>15 octobre</strong> avec extension via
          Form 7004 déposé avant le 15 avril.
        </li>
        <li>
          Pour année calendaire 2025, deadline = 15 avril 2026.
        </li>
      </ul>

      <h2>Étape 1 — Télécharger les formulaires</h2>
      <ol>
        <li>
          Va sur irs.gov.
        </li>
        <li>
          Recherche &quot;Form 1120&quot; — télécharge la dernière
          version PDF. Pour année fiscale 2025, c&apos;est la version
          révisée 2024 ou 2025 selon timing publication IRS.
        </li>
        <li>
          Recherche &quot;Form 5472&quot; — télécharge la version
          courante.
        </li>
        <li>
          Lis les Instructions for Form 1120 et Instructions for Form
          5472 — sections sur foreign-owned disregarded entities en
          particulier.
        </li>
      </ol>

      <h2>Étape 2 — Remplir Form 1120 pro-forma (5 minutes)</h2>
      <p>
        Pour une SMLLC tunisienne sans activité US, le 1120 est
        littéralement vide à 95%. Tu remplis SEULEMENT :
      </p>
      <ul>
        <li>
          <strong>Top of page 1</strong> : write &quot;Foreign-owned
          U.S. DE&quot; (Disregarded Entity) à la main ou en bold.
        </li>
        <li>
          <strong>Box A</strong> : Check Item B for the type of return
          if applicable.
        </li>
        <li>
          <strong>Name of Corporation</strong> : nom légal de ta LLC.
        </li>
        <li>
          <strong>Box B - Employer identification number</strong> :
          ton EIN.
        </li>
        <li>
          <strong>Date incorporated</strong> : date du Wyoming Articles
          of Organization.
        </li>
        <li>
          <strong>Total assets</strong> : zéro ou le montant approximatif
          des actifs LLC (souvent juste le compte Mercury balance).
        </li>
        <li>
          <strong>Tout le reste (income, deductions, etc.)</strong> :
          laisse vide ou écris zéro. Tu ne déclares pas de revenu US
          parce que tu n&apos;en as pas (services rendus depuis Tunis,
          pas d&apos;ECI).
        </li>
        <li>
          <strong>Signature</strong> : ton nom + date + ton titre
          (&quot;Sole Member&quot;).
        </li>
      </ul>

      <h2>Étape 3 — Remplir Form 5472 (10 minutes)</h2>
      <p>
        Le Form 5472 a 4 parts à remplir :
      </p>
      <ol>
        <li>
          <strong>Part I — Reporting Corporation</strong> :
          <ul>
            <li>1a Name : ta LLC</li>
            <li>1b EIN : ton EIN</li>
            <li>1c Address : ton adresse business US (5062 Lankershim chez NOHO)</li>
            <li>1d State/country of incorporation : Wyoming</li>
            <li>1e Date of incorporation</li>
            <li>1f Total assets : même chiffre que sur le 1120</li>
            <li>1g Business activity : ton activité primaire (e.g.
              &quot;Management Consulting Services&quot;) avec NAICS code
              (541618)</li>
          </ul>
        </li>
        <li>
          <strong>Part II — 25% Foreign Shareholder</strong> :
          <ul>
            <li>1a Name : ton nom legal exact</li>
            <li>1b Address : ton adresse résidentielle en Tunisie</li>
            <li>1c U.S. identifying number : laisser blank si pas
              d&apos;ITIN/SSN, OU ton ITIN si tu en as un</li>
            <li>1d Reference identifying number : ton passeport
              tunisien</li>
            <li>1e Foreign country : Tunisia</li>
            <li>1f Country of citizenship : Tunisia</li>
            <li>1g Percentage of total voting power : 100% (pour SMLLC)</li>
          </ul>
        </li>
        <li>
          <strong>Part III — Related Party</strong> :
          <ul>
            <li>Pour une SMLLC sans related party transactions, mets
              ton propre nom + adresse TN ici aussi (puisque tu es la
              related party par définition étant le sole owner).</li>
          </ul>
        </li>
        <li>
          <strong>Part IV — Monetary Transactions</strong> :
          <ul>
            <li>Si TU n&apos;as PAS fait de transactions financières
              significatives avec la LLC (juste payé tes frais SaaS,
              etc.), mets zéros partout.</li>
            <li>Si tu as transféré des fonds personnels vers la LLC
              (capital contribution initiale), mets le montant ligne
              correspondante.</li>
            <li>Si tu as pris des owner distributions de la LLC,
              mets ce montant.</li>
          </ul>
        </li>
      </ol>

      <h2>Étape 4 — Vérifier la cohérence</h2>
      <ul>
        <li>
          EIN identique entre 1120 et 5472.
        </li>
        <li>
          Nom de la LLC identique partout (matching exact des Wyoming
          Articles, l&apos;EIN letter, l&apos;Operating Agreement).
        </li>
        <li>
          Adresse identique entre 1120 et 5472.
        </li>
        <li>
          Total assets identique.
        </li>
        <li>
          Tous les montants en USD, arrondis au dollar.
        </li>
      </ul>

      <h2>Étape 5 — Soumission</h2>
      <p>
        <strong>Option A — Fax (recommandé pour rapidité)</strong> :
      </p>
      <ul>
        <li>
          Fax au <strong>855-887-7737</strong>.
        </li>
        <li>
          Pages : Form 5472 + Form 1120 (3-5 pages totales typiquement).
        </li>
        <li>
          Délai confirmation : tu n&apos;auras pas de confirmation IRS
          automatique. Garde le receipt fax (le fax success page de ton
          service).
        </li>
        <li>
          Service fax recommandé depuis Tunis : MyFax, eFax, ou un fax
          en ligne par carte. ~5 USD pour le document complet.
        </li>
      </ul>
      <p>
        <strong>Option B — Mail (plus lent mais traçable)</strong> :
      </p>
      <ul>
        <li>
          Adresse : Internal Revenue Service, 1973 Rulon White Blvd,
          M/S 6112, Ogden, UT 84201, USA.
        </li>
        <li>
          Envoie par DHL Express ou USPS Priority Mail International,
          avec tracking.
        </li>
        <li>
          Délai : 2-3 semaines en transit + 4-6 semaines processing IRS.
        </li>
        <li>
          Garde la tracking confirmation.
        </li>
      </ul>

      <h2>Étape 6 — Conservation du proof</h2>
      <ul>
        <li>
          Scan le 1120 + 5472 signés en PDF.
        </li>
        <li>
          Sauvegarde le fax success page OU le DHL/USPS tracking
          number.
        </li>
        <li>
          Archive le tout dans un dossier &quot;Year 2025 — Form
          5472&quot;.
        </li>
        <li>
          L&apos;IRS ne confirme PAS reception. Tu n&apos;auras pas
          d&apos;acknowledgment automatique. Le proof of mailing est
          ton seul recours en cas d&apos;allégation d&apos;omission.
        </li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>
          <strong>Oublier le &quot;Foreign-owned U.S. DE&quot; tag</strong>{" "}
          en haut du 1120. Sans ce tag, l&apos;IRS traite le 1120 comme
          un return corporate ordinaire et te demande un tax computation
          complet.
        </li>
        <li>
          <strong>EIN mal écrit</strong>. Vérifie chaque chiffre du
          format XX-XXXXXXX.
        </li>
        <li>
          <strong>Submission au mauvais service center</strong>. Ogden,
          pas Austin ou Kansas City.
        </li>
        <li>
          <strong>Manquer la deadline 15 avril</strong>. Tu peux filer
          Form 7004 pour une extension de 6 mois — déposé avant 15
          avril.
        </li>
        <li>
          <strong>Signature manquante ou date manquante</strong>. IRS
          rejette les forms non signés.
        </li>
      </ul>

      <h2>Quand engager un CPA US plutôt</h2>
      <ul>
        <li>
          Tu as US-source income (clients US qui paient via Stripe
          requires ECI analysis).
        </li>
        <li>
          Tu as des transactions inter-entités &gt; 0 (paiements LLC ↔
          toi-même au-delà de capital contribution et owner distribution
          simples).
        </li>
        <li>
          Tu as des employés US ou des contractors US payés via 1099.
        </li>
        <li>
          Tu fais des sales tax filings dans plusieurs états.
        </li>
        <li>
          Tu envisages la conversion LLC → C-Corp ou autre restructuration.
        </li>
      </ul>
      <p>
        Pour ces cas, paie le CPA. Le 200-500 USD/an est négligeable vs
        une erreur de filing.
      </p>

      <h2>L&apos;option NOHO</h2>
      <p>
        Si tu préfères ne PAS gérer Form 5472 toi-même, le{" "}
        <Link href="/suivi-mensuel" className="font-bold underline" style={{ color: "#337485" }}>
          Suivi mensuel à 1 200 TND/mois
        </Link>{" "}
        inclut la préparation du Form 5472 + 1120 pro-forma par notre
        CPA partenaire US, le rappel deadline, et le filing par fax.
        Tu signes une power-of-attorney limitée (Form 2848) qui permet
        au CPA de te représenter pour ce filing spécifique. Le service
        coûte effectivement ~250 USD/an dans le cadre du Suivi.
      </p>
    </>
  );
}
