import Link from "next/link";

export function mercuryStatementForm5472PartieIv() {
  return (
    <>
      <p>
        Form 5472 Part IV demande de déclarer les transactions
        financières entre toi (le foreign owner) et la LLC US. Sans
        related-party transactions, tu mets des zéros. Mais dès que tu
        fais un capital contribution OU une owner distribution OU tu te
        paies des frais SaaS depuis le compte LLC, tu as des chiffres à
        reporter. Voici comment lire ton Mercury statement et extraire
        exactement les montants pour Form 5472 Part IV.
      </p>

      <h2>Ce que Form 5472 Part IV demande</h2>
      <p>
        Form 5472 Part IV liste 18 lignes pour catégoriser les
        transactions entre la &quot;reporting corporation&quot; (ta
        LLC) et &quot;related party&quot; (toi, le 25%+ foreign owner).
        Les 5 lignes pertinentes pour un fondateur tunisien SMLLC :
      </p>
      <ul>
        <li>
          <strong>Line 1a — Sales of stock in trade</strong> : N/A
          pour un service SMLLC (skip si tu fais du consulting/SaaS).
        </li>
        <li>
          <strong>Line 11 — Reimbursements paid</strong> : montant
          que TU as remboursé à la LLC. Cas rare.
        </li>
        <li>
          <strong>Line 12 — Reimbursements received</strong> : montant
          que la LLC t&apos;a remboursé. Cas rare.
        </li>
        <li>
          <strong>Line 16 — Amounts loaned</strong> : montant que TU
          as prêté à la LLC = capital contribution initial typiquement.
        </li>
        <li>
          <strong>Line 17 — Amounts borrowed</strong> : montant que TU
          as emprunté de la LLC = owner distributions typiquement.
        </li>
      </ul>

      <h2>Étape 1 — Télécharger ton Mercury statement annuel</h2>
      <ol>
        <li>
          Connecte-toi à mercury.com.
        </li>
        <li>
          Va dans <strong>Banking → Statements</strong>.
        </li>
        <li>
          Sélectionne ton compte business + l&apos;année fiscale (Jan
          1 → Dec 31).
        </li>
        <li>
          Télécharge le statement PDF + le CSV export. Le CSV est plus
          facile à analyser dans Excel.
        </li>
      </ol>

      <h2>Étape 2 — Classer les transactions par catégorie</h2>
      <p>
        Ouvre le CSV dans Excel/Google Sheets. Ajoute une colonne
        &quot;Form 5472 Category&quot; et classe chaque ligne :
      </p>
      <ul>
        <li>
          <strong>Capital contribution (Line 16)</strong> : wires
          entrants depuis TON compte personnel (TN, US, ou autre) vers
          le compte Mercury. Si tu as initialement mis 500 USD pour
          ouvrir le compte, c&apos;est ça. Si tu rajoutes des fonds à
          plusieurs reprises, somme tous les apports nets.
        </li>
        <li>
          <strong>Owner distribution (Line 17)</strong> : wires
          sortants depuis Mercury vers TON compte personnel (TN BIAT
          PPR USD, ou ton compte personnel US si tu en as un).
        </li>
        <li>
          <strong>Revenue from clients</strong> : wires entrants
          depuis clients tiers (Stripe payouts, virements directs
          clients). PAS related-party — pas dans Part IV.
        </li>
        <li>
          <strong>Business expenses</strong> : paiements à des
          fournisseurs tiers (AWS, Vercel, Notion, etc.). PAS
          related-party — pas dans Part IV.
        </li>
        <li>
          <strong>Bank fees Mercury</strong> : pas pertinent Part IV.
        </li>
      </ul>

      <h2>Exemple concret — un fondateur Tunisie typique année 1</h2>
      <p>
        Imagine un fondateur SaaS tunisien avec sa première année LLC :
      </p>
      <ul>
        <li>
          Capital initial : il transfère 500 USD de son compte BIAT
          personnel vers Mercury en mars 2025 (l&apos;ouverture).
        </li>
        <li>
          Revenus clients : 18 500 USD via Stripe payouts entrants
          (12 mois).
        </li>
        <li>
          Dépenses SaaS : 2 800 USD payés en cartes (Vercel, AWS,
          Notion, etc.) sortants.
        </li>
        <li>
          Owner draws : il s&apos;est viré 12 000 USD vers son compte
          BIAT PPR USD en 4 virements de 3 000 USD (mai, août,
          novembre, décembre).
        </li>
        <li>
          Balance fin année : 500 + 18 500 - 2 800 - 12 000 = 4 200
          USD.
        </li>
      </ul>
      <p>
        Pour Form 5472 Part IV :
      </p>
      <ul>
        <li>
          <strong>Line 16 (Amounts loaned)</strong> : 500 USD
        </li>
        <li>
          <strong>Line 17 (Amounts borrowed)</strong> : 12 000 USD
        </li>
        <li>
          Autres lignes : zéro.
        </li>
      </ul>
      <p>
        Form 1120 :
      </p>
      <ul>
        <li>
          <strong>Total assets fin année</strong> : ~4 200 USD (le
          solde Mercury).
        </li>
        <li>
          Le reste vide (pas d&apos;income US, pas de deductions
          spécifiques à reporter sur 1120 pro-forma).
        </li>
      </ul>

      <h2>Le piège des wires Stripe Atlas / Wise / Mercury inter-bancaires</h2>
      <p>
        Si tu déplaces de l&apos;argent ENTRE comptes que tu détiens à
        ton nom personnel (BIAT USD → BIAT TND, ou Wise → BIAT), ce
        n&apos;est PAS une related-party transaction avec la LLC.
        C&apos;est de l&apos;argent personnel.
      </p>
      <p>
        En revanche, si tu déplaces depuis Mercury (LLC) vers ton compte
        personnel BIAT, c&apos;est une distribution owner (Line 17).
        Toute sortie de la LLC vers toi = Line 17.
      </p>

      <h2>Le piège du Stripe payout en monnaie autre</h2>
      <ul>
        <li>
          Stripe est configuré par défaut pour payout en USD vers
          Mercury (compte ouvert au nom de la LLC).
        </li>
        <li>
          Si tu changes le payout vers ton compte personnel TN ou un
          compte non-LLC, Stripe peut requalifier le revenu comme
          personnel — et la LLC ne déclare rien Form 5472.
        </li>
        <li>
          Mauvais idée : garde toujours les revenus dans la LLC, puis
          fais owner distribution séparément. C&apos;est plus propre
          fiscalement et plus traceable.
        </li>
      </ul>

      <h2>Étape 3 — Catégoriser et totaliser dans ton fichier</h2>
      <p>
        Excel/Google Sheets template simple :
      </p>
      <ul>
        <li>
          Colonne A : Date
        </li>
        <li>
          Colonne B : Description (depuis Mercury CSV)
        </li>
        <li>
          Colonne C : Montant (positif si entrant LLC, négatif si
          sortant)
        </li>
        <li>
          Colonne D : Catégorie (Capital / Distribution / Revenue /
          Expense / Bank fee)
        </li>
      </ul>
      <p>
        Ensuite, des pivot tables ou SUMIF pour totaliser par
        catégorie. Les totaux Capital et Distribution vont sur Form
        5472 Part IV Lines 16 et 17.
      </p>

      <h2>Étape 4 — Documents à conserver</h2>
      <ul>
        <li>
          Mercury statement PDF de l&apos;année.
        </li>
        <li>
          CSV export.
        </li>
        <li>
          Ton fichier Excel/Sheets de classification.
        </li>
        <li>
          Backup d&apos;email Stripe confirmant chaque payout (au cas
          où Mercury n&apos;a pas la trace claire dans son CSV).
        </li>
      </ul>
      <p>
        L&apos;IRS peut auditer dans les 3-6 ans suivants. Garde tout
        en physique + cloud (Dropbox/Google Drive avec un dossier
        annuel).
      </p>

      <h2>Cas spéciaux à signaler</h2>
      <ul>
        <li>
          <strong>Tu fais un transfer dans le mauvais sens par erreur</strong>{" "}
          (e.g. tu envoies 5 000 USD depuis ton compte personnel vers
          Mercury, puis tu le renverses 3 jours plus tard) : déclare
          les deux comme Line 16 et Line 17, somme nette ne change pas
          le balance.
        </li>
        <li>
          <strong>Tu te paies un salaire</strong> : si tu te paies un
          vrai salaire avec retenues (rare en SMLLC, plus en C-Corp),
          ce n&apos;est PAS Line 17 mais une transaction
          d&apos;employment. Pour SMLLC, on parle d&apos;owner draws,
          pas de salary.
        </li>
        <li>
          <strong>Tu fais un loan formel avec promissory note</strong>{" "}
          (LLC te prête, ou tu prêtes à la LLC, avec un vrai contrat)
          : déclare aussi Line 16/17 mais conserve le promissory note
          en cas d&apos;audit.
        </li>
        <li>
          <strong>Tu paies des dépenses LLC avec ta carte personnelle</strong>{" "}
          et la LLC te rembourse plus tard : déclare le remboursement
          en Line 12 (reimbursements received).
        </li>
      </ul>

      <h2>L&apos;automatisation NOHO</h2>
      <p>
        Le{" "}
        <Link href="/fr/suivi-mensuel" className="font-bold underline" style={{ color: "#337485" }}>
          Suivi mensuel
        </Link>{" "}
        inclut le tracking mensuel des related-party transactions —
        chaque mois tu reçois un email résumant : capital contributions
        ce mois, owner distributions ce mois, total cumulé année.
        Ainsi quand 15 avril arrive, tu n&apos;as pas à reconstruire 12
        mois d&apos;historique en panique — le CPA partenaire a déjà
        le fichier prêt.
      </p>
    </>
  );
}
