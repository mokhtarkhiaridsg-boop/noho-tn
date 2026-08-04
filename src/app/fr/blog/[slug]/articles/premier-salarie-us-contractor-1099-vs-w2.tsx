import Link from "next/link";

export function premierSalarieUs1099VsW2() {
  return (
    <>
      <p>
        Ta LLC tunisienne décolle, tu veux engager une première
        personne US — un developer, un designer, un sales rep. Trois
        formes juridiques : <strong>1099-NEC</strong> (contractor
        indépendant), <strong>W-2</strong> (employé salarié), ou{" "}
        <strong>corp-to-corp</strong> (LLC-à-LLC via la sienne). Choix
        majeur — implications fiscales, paie, compliance, et capacité à
        rentrer le talent. Voici la décision en 2026.
      </p>

      <h2>Vue d&apos;ensemble</h2>
      <ul>
        <li>
          <strong>1099-NEC contractor</strong> : ta LLC paie une
          personne (qui a son SSN/EIN) pour un service. Lui est
          self-employed, gère sa propre tax. Simple côté toi.
        </li>
        <li>
          <strong>W-2 employé</strong> : ta LLC devient employer
          formel. Tu gères withholding, payroll tax, benefits, workers
          comp. Plus complexe et coûteux.
        </li>
        <li>
          <strong>Corp-to-corp</strong> : ta LLC paie une autre LLC
          (la sienne). Pas de relation employeur-employé. Souvent
          utilisé pour mandater des freelances sénior.
        </li>
      </ul>

      <h2>1099-NEC contractor — le défaut early-stage</h2>

      <h3>Comment ça marche</h3>
      <ul>
        <li>
          Tu mets en place un Independent Contractor Agreement (IC
          Agreement). Le contractor signe.
        </li>
        <li>
          Tu paies via Mercury wire vers son compte personnel US (s&apos;il
          est US person avec SSN/ITIN).
        </li>
        <li>
          Janvier suivant, tu émets un Form 1099-NEC à chaque
          contractor payé &gt; 600 USD/an. Tu envoies aussi une copie
          à l&apos;IRS.
        </li>
        <li>
          Lui rapporte ses revenus sur son 1040 personnel (Schedule C)
          + paie self-employment tax (15.3%) + income tax.
        </li>
      </ul>

      <h3>Avantages 1099 pour ta LLC</h3>
      <ul>
        <li>
          Pas de payroll tax côté employeur (économie ~7.65%).
        </li>
        <li>
          Pas de workers comp insurance obligatoire.
        </li>
        <li>
          Pas de benefits, sick days, vacation, healthcare contributions.
        </li>
        <li>
          Setup &lt; 1 heure : signer IC Agreement + commencer à wire.
        </li>
        <li>
          Termination simple : 30 days notice écrite, pas de severance
          requis.
        </li>
      </ul>

      <h3>Désavantages 1099 pour ta LLC</h3>
      <ul>
        <li>
          Pas de contrôle direct sur how/when le contractor travaille.
          IRS regarde le test de classification &quot;control&quot; —
          si trop strict, peut requalifier en W-2 employé avec back-tax.
        </li>
        <li>
          Le contractor peut travailler en parallèle pour des
          compétiteurs.
        </li>
        <li>
          Mauvais signal pour talent US senior (ils préfèrent W-2 avec
          health insurance + 401(k) + stock options).
        </li>
      </ul>

      <h2>W-2 employé — quand tu deviens un &quot;vrai&quot; employer</h2>

      <h3>Comment ça marche</h3>
      <ul>
        <li>
          Tu t&apos;enregistres comme employer auprès de IRS (EIN déjà
          OK) + l&apos;État où ton employé réside (CA, NY, TX, etc.).
          Coût : variable selon état (50-500 USD), 2-6 semaines.
        </li>
        <li>
          Tu engages un service payroll : Gusto, Justworks, Deel,
          OnPay. Coût : 40-120 USD/mois + ~6 USD/employé/mois.
        </li>
        <li>
          Tu retiens federal income tax + FICA (Social Security +
          Medicare) + state income tax + SUTA / FUTA (unemployment tax).
        </li>
        <li>
          Tu paies trimestriellement Form 941 (employment tax return)
          + annuellement Form 940 (FUTA).
        </li>
        <li>
          Janvier suivant tu émets W-2 à chaque employé.
        </li>
      </ul>

      <h3>Coût total W-2 pour ta LLC</h3>
      <p>
        Sur un salaire brut de 60 000 USD/an :
      </p>
      <ul>
        <li>Salaire brut employé : 60 000 USD</li>
        <li>FICA employer match (7.65%) : 4 590 USD</li>
        <li>FUTA + SUTA (~1-2%) : 600-1 200 USD</li>
        <li>Workers comp insurance (~0.5-2% selon state/role) : 300-1 200 USD</li>
        <li>Payroll service Gusto : ~70 USD/mois × 12 = 840 USD</li>
        <li>Health insurance employer contribution (optionnel mais
          attendu) : 200-800 USD/employé/mois × 12 = 2 400-9 600 USD</li>
        <li><strong>Total annuel</strong> : ~68 700-77 400 USD pour un
          employé à 60K salary. <strong>~15-30% au-dessus du brut</strong>.</li>
      </ul>

      <h3>Quand W-2 fait sens</h3>
      <ul>
        <li>
          Tu engages quelqu&apos;un full-time exclusif à ta LLC.
        </li>
        <li>
          Tu veux offrir benefits (health insurance, 401(k), stock
          options) pour attirer talent.
        </li>
        <li>
          Tu veux contrôle direct sur le workflow.
        </li>
        <li>
          Tu envisages levée VC dans 12-18 mois — VC veulent voir une
          équipe W-2.
        </li>
        <li>
          Le rôle est business-critical (CTO, CMO senior).
        </li>
      </ul>

      <h2>Corp-to-corp (LLC à LLC) — la voie hybride</h2>

      <h3>Comment ça marche</h3>
      <ul>
        <li>
          Ta LLC tunisienne signe un Master Service Agreement (MSA) avec
          une autre LLC US (celle du freelance senior).
        </li>
        <li>
          Tu wire le paiement entre LLCs (Mercury → leur Mercury / banque
          business).
        </li>
        <li>
          Pas de 1099-NEC nécessaire (les paiements entre LLCs ne
          déclenchent pas 1099 sauf cas particuliers). Tu déclares la
          dépense sur ton Form 5472.
        </li>
        <li>
          Leur LLC gère sa propre fiscalité — toi tu n&apos;as aucune
          obligation withholding.
        </li>
      </ul>

      <h3>Avantages corp-to-corp</h3>
      <ul>
        <li>
          Zéro payroll overhead côté toi.
        </li>
        <li>
          Zéro classification risk IRS (deux entités business, pas une
          employer-employee relationship).
        </li>
        <li>
          Le freelance gère son own tax + bénéficie de pass-through pour
          son LLC.
        </li>
        <li>
          Setup ultra rapide : MSA + invoice + wire.
        </li>
      </ul>

      <h3>Désavantages corp-to-corp</h3>
      <ul>
        <li>
          Pas tous les freelances ont leur propre LLC. Tu limites le
          pool de talent.
        </li>
        <li>
          Pas adapté pour relation full-time exclusive (l&apos;IRS
          regarde le test de classification).
        </li>
        <li>
          Pas d&apos;offre stock options possible.
        </li>
      </ul>

      <h2>Le piège classification IRS (1099 vs W-2)</h2>
      <p>
        Si tu paies en 1099 quelqu&apos;un qui devrait être W-2, l&apos;IRS
        peut requalifier rétroactivement. Coût : back-payroll tax + 30%
        pénalité.
      </p>
      <p>
        Les 11 facteurs IRS pour classifier (simplifiés) :
      </p>
      <ul>
        <li>
          Tu donnes des instructions sur comment faire le travail ?
          (W-2 signal)
        </li>
        <li>
          Tu fournis l&apos;équipement / le bureau ? (W-2 signal)
        </li>
        <li>
          Tu paies sur base d&apos;heures vs projet livré ? (W-2 hourly)
        </li>
        <li>
          La relation est exclusive et long-terme (&gt; 1 an) ? (W-2
          signal)
        </li>
        <li>
          Tu offres benefits (health, vacation) ? (W-2 par définition)
        </li>
      </ul>
      <p>
        Si tu coches 3+ de ces signaux, technique-IRS-side c&apos;est
        W-2. En pratique, l&apos;IRS audite rarement les early-stage
        LLCs avec 1-2 contractors. Mais le risque existe.
      </p>

      <h2>Cas typique fondateur tunisien — qui choisir</h2>
      <ul>
        <li>
          <strong>Tu engages un VA pour 10 heures/semaine</strong> :
          1099-NEC. Setup &lt; 1 heure.
        </li>
        <li>
          <strong>Tu engages un developer freelance US qui veut son
          autonomy</strong> : 1099-NEC OU corp-to-corp si lui a une
          LLC. Préfère corp-to-corp pour réduire risque classification.
        </li>
        <li>
          <strong>Tu engages un CTO ou CMO senior US full-time</strong>
          : W-2 obligatoire si tu veux qu&apos;ils acceptent. Met en
          place Gusto + health benefits.
        </li>
        <li>
          <strong>Tu engages un sales rep commission-based</strong> :
          1099-NEC marche bien. Paie en commissions trimestrielles.
        </li>
        <li>
          <strong>Tu engages quelqu&apos;un en Tunisie pour aide
          back-office</strong> : pas un contractor US. Paie via
          Wise/Mercury vers son compte TN. Pas de 1099 IRS (lui n&apos;est
          pas US-resident).
        </li>
      </ul>

      <h2>Le scénario hybride — démarrer 1099, basculer W-2</h2>
      <ul>
        <li>
          Mois 1-6 : tu travailles avec quelqu&apos;un en 1099 pour
          valider le fit.
        </li>
        <li>
          Mois 6+ : si le fit est bon et tu veux full-time exclusivité,
          tu propose de basculer W-2.
        </li>
        <li>
          Tu mets en place Gusto + health benefits. La personne signe
          un W-2 employment contract qui remplace le IC Agreement.
        </li>
        <li>
          Lui gagne en stabilité (W-2 = mortgage qualifications + health
          insurance + 401(k)). Toi gagnes en control + exclusive
          loyalty.
        </li>
      </ul>

      <h2>L&apos;option NOHO pour la première embauche US</h2>
      <p>
        Le Suivi mensuel inclut la coordination de la première embauche
        US :
      </p>
      <ul>
        <li>
          Choix structure (1099 vs W-2 vs C2C) selon ton profil et le
          candidat.
        </li>
        <li>
          IC Agreement / W-2 Employment Agreement template adaptés.
        </li>
        <li>
          Setup Gusto/Justworks/Deel si W-2 path.
        </li>
        <li>
          Form 1099-NEC drafting + IRS submission en fin d&apos;année
          si 1099 path.
        </li>
        <li>
          Coordination avec CPA partenaire pour optimisation tax
          structure globale.
        </li>
      </ul>
      <p>
        Coût : inclus dans Suivi mensuel jusqu&apos;à 2 contractors /
        employés. Au-delà, surcoût ~300 TND/mois par employé pour la
        coordination payroll.
      </p>
    </>
  );
}
