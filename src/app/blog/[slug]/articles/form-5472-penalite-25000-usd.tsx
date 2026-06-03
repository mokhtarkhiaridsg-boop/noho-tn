import Link from "next/link";

export function form5472Penalite() {
  return (
    <>
      <p>
        Form 5472 est l&apos;une des obligations IRS les plus dangereuses
        pour une LLC américaine détenue depuis l&apos;étranger.
        L&apos;oubli n&apos;est pas une amende symbolique — c&apos;est
        25 000 USD par défaut, sans plafond. Voici les chiffres exacts
        et comment éviter le piège.
      </p>

      <h2>Qui doit déposer Form 5472</h2>
      <p>
        Toute LLC américaine qui répond aux trois conditions suivantes :
      </p>
      <ul>
        <li>
          C&apos;est une <strong>disregarded entity</strong> au sens IRS
          (cas standard d&apos;une LLC à associé unique sans élection
          C-Corp).
        </li>
        <li>
          Elle est détenue à 25 % ou plus par un{" "}
          <strong>foreign person</strong> (toi, en tant que résident
          fiscal tunisien).
        </li>
        <li>
          Elle a eu au moins une <strong>reportable transaction</strong>
          {" "}avec un related party pendant l&apos;année fiscale —
          incluant les apports de capital, les distributions, les prêts,
          ou même les transferts entre toi et la LLC.
        </li>
      </ul>
      <p>
        En pratique, dès que tu finances ta LLC ou que tu te paies, la
        condition 3 est remplie. C&apos;est pour ça que{" "}
        <strong>99 % des LLC TN-détenues doivent déposer Form 5472
        chaque année</strong>.
      </p>

      <h2>La pénalité exacte (IRC §6038A(d))</h2>
      <ul>
        <li>
          <strong>Pénalité initiale :</strong> 25 000 USD par
          formulaire 5472 non déposé, par année fiscale.
        </li>
        <li>
          <strong>Pénalité additionnelle :</strong> 25 000 USD par
          tranche de 30 jours de retard après la mise en demeure (notice)
          de l&apos;IRS, sans plafond supérieur.
        </li>
      </ul>
      <p>
        Exemple concret : tu as oublié Form 5472 pour l&apos;année
        fiscale 2024. L&apos;IRS le détecte en 2026 et t&apos;envoie une
        notice. Tu attends 90 jours avant de déposer. La pénalité est
        25 000 + (3 × 25 000) = <strong>100 000 USD</strong>. Pour
        2 années oubliées : doubler.{" "}
        <Link href="/outils/calculateurs/form-5472" className="font-bold underline" style={{ color: "#337485" }}>
          Calcule ta pénalité estimée ici
        </Link>.
      </p>

      <h2>La deadline</h2>
      <p>
        Form 5472 doit être joint au Form 1120 (pro forma — déclaration
        d&apos;impôt sur les sociétés US, même si la LLC ne paie aucun
        impôt fédéral) et déposé au plus tard le{" "}
        <strong>15 avril</strong> qui suit la fin de l&apos;année
        fiscale. Une extension automatique de 6 mois est possible (Form
        7004), portant la deadline au <strong>15 octobre</strong>.
      </p>

      <h2>Comment déposer</h2>
      <p>
        Le 5472 + 1120 d&apos;une LLC sans revenu ni transaction
        complexe se remplit en 1-2 heures si tu as la procédure. Trois
        manières :
      </p>
      <ol>
        <li>
          <strong>Le faire toi-même</strong> — l&apos;IRS publie les
          formulaires en PDF. Pour une LLC zéro revenu, c&apos;est
          principalement remplir l&apos;EIN, l&apos;adresse, et la
          structure de détention. Délai 1-2 heures la première fois.
        </li>
        <li>
          <strong>CPA US</strong> — coût moyen 250-500 USD/an pour une
          LLC simple. Recommandé dès que la LLC a des revenus.
        </li>
        <li>
          <strong>Suivi mensuel NOHO</strong> — on coordonne avec un
          CPA US partenaire, on te rappelle 60 jours avant la deadline,
          on prépare le dossier. Inclus dans les 1 200 TND/mois du{" "}
          <Link href="/business#suivi-mensuel" className="font-bold underline" style={{ color: "#337485" }}>
            Suivi mensuel
          </Link>.
        </li>
      </ol>

      <h2>« First-Time Penalty Abatement »</h2>
      <p>
        Si tu as déjà oublié Form 5472 et reçu la pénalité, l&apos;IRS
        a un programme appelé <em>First-Time Penalty Abatement</em> qui
        peut effacer la pénalité une seule fois — à condition que :
      </p>
      <ul>
        <li>C&apos;est ton premier oubli sur les 3 dernières années.</li>
        <li>Tu n&apos;as pas d&apos;autre obligation fiscale en retard.</li>
        <li>Tu déposes Form 5472 dans la foulée.</li>
      </ul>
      <p>
        Taux de succès en première demande : ~60 %. Procédure : appeler
        l&apos;IRS au numéro figurant sur la notice et demander
        explicitement « First-Time Penalty Abatement ». Si refusé, faire
        un appel formel par écrit. Notre CPA partenaire peut s&apos;en
        charger pour 200-300 USD.
      </p>

      <h2>Honest Self-Disclosure</h2>
      <p>
        NOHO n&apos;est pas un cabinet fiscal. On ne dépose pas Form
        5472 directement — on coordonne avec un CPA partenaire qui le
        fait. C&apos;est un choix volontaire : la fiscalité US évolue, et
        on préfère qu&apos;un agent EA ou CPA US prenne la responsabilité
        formelle du dépôt plutôt qu&apos;une équipe de mailbox / brand
        ops qui n&apos;est pas habilitée.
      </p>
    </>
  );
}
