import Link from "next/link";

export function w8benVsW9() {
  return (
    <>
      <p>
        Tu viens d&apos;ouvrir ta LLC US. Mercury, Stripe, Upwork, ton
        client US — tous te demandent un &quot;tax form&quot;. La case W-9
        ou W-8BEN. Beaucoup de fondateurs tunisiens cochent W-9 par
        défaut. C&apos;est une erreur grave qui peut déclencher un
        retenue à la source de 30% + un audit IRS. Voici la règle simple
        et les pièges à éviter.
      </p>

      <h2>La règle en une phrase</h2>
      <p>
        Si tu n&apos;es pas US person (citoyen US ou résident permanent
        ou H-1B/F-1 substantial presence), tu signes{" "}
        <strong>W-8BEN</strong> en tant qu&apos;individu, ou{" "}
        <strong>W-8BEN-E</strong> en tant qu&apos;entité. Jamais W-9.
      </p>

      <h2>Définitions précises (IRS)</h2>
      <ul>
        <li>
          <strong>US person</strong> = citoyen US OU résident permanent
          (green card) OU étranger qui satisfait le &quot;substantial
          presence test&quot; (31 jours présents dans l&apos;année + 183
          jours sur 3 ans selon formule).
        </li>
        <li>
          <strong>Non-US person</strong> = tout le reste. Un Tunisien
          résidant en Tunisie est non-US person, point.
        </li>
        <li>
          <strong>SMLLC (Single-Member LLC) US détenue par non-US
          person</strong> = entité &quot;disregarded&quot; côté US. La
          LLC n&apos;est pas considérée fiscalement séparée de son
          propriétaire pour les besoins fédéraux. Le propriétaire est
          un non-US person (toi), donc le form correct est W-8BEN, pas
          W-8BEN-E.
        </li>
      </ul>

      <h2>W-9 — quand et pourquoi NE PAS le signer</h2>
      <ul>
        <li>
          W-9 = formulaire pour US persons uniquement. Il demande ton
          SSN ou ITIN, et certifie que tu es taxpayer US.
        </li>
        <li>
          Si tu signes W-9 alors que tu es non-US person : tu fais une
          fausse déclaration à l&apos;IRS. Risques : (1) la counterparty
          retient quand même 30% si elle réalise l&apos;erreur, (2)
          l&apos;IRS peut auditer et imposer une pénalité de fausse
          déclaration.
        </li>
        <li>
          Plus tactique : Stripe, Mercury, Upwork ont parfois des
          interfaces qui présentent W-9 par défaut. Cherche le lien
          &quot;Non-US person&quot; ou &quot;Foreign tax form&quot;
          (souvent en petit en bas).
        </li>
      </ul>

      <h2>W-8BEN — pour toi en tant qu&apos;individu</h2>
      <ul>
        <li>
          Form en 1 page. Sections principales : ton nom, ton pays de
          résidence (Tunisie), ton adresse permanente en Tunisie, ton
          numéro de passeport TN.
        </li>
        <li>
          Section &quot;treaty benefits&quot; : tu coches que tu réclames
          les bénéfices du traité Tunisie-US (signé 1985, entré en
          vigueur 1989). En pratique, pour la plupart des revenus
          services, le traité ne change rien (taux 30% par défaut), mais
          pour les royalties tu peux réclamer une réduction.
        </li>
        <li>
          Signé manuellement, scanné, soumis. Pas besoin de notarisation.
          Valable 3 ans, à renouveler.
        </li>
        <li>
          Le payeur (Stripe/Mercury/client US) garde le W-8BEN dans son
          dossier mais ne l&apos;envoie pas à l&apos;IRS sauf demande.
        </li>
      </ul>

      <h2>W-8BEN-E — pour ta LLC détenue par toi non-US person</h2>
      <p>
        Cas plus subtil. Si ta LLC est :
      </p>
      <ul>
        <li>
          <strong>SMLLC (single-member)</strong> détenue par toi non-US
          person : ta LLC est &quot;disregarded&quot; côté US. Le payeur
          regarde &quot;through the LLC&quot; vers toi propriétaire et te
          demande W-8BEN (individuel), pas W-8BEN-E. Pratique : sur
          Stripe/Mercury, soumets W-8BEN avec ton nom personnel, et
          mentionne le nom de la LLC dans la section &quot;reference&quot;.
        </li>
        <li>
          <strong>Multi-member LLC</strong> ou <strong>LLC ayant élu C-Corp</strong>{" "}
          ou <strong>LLC ayant élu S-Corp</strong> : la LLC est entité
          fiscale séparée. Tu signes W-8BEN-E au nom de la LLC + W-8BEN
          au nom de chaque membre non-US.
        </li>
      </ul>

      <h2>Les pièges les plus fréquents</h2>
      <ul>
        <li>
          <strong>Confondre W-8BEN et W-8BEN-E</strong>. Pour un fondateur
          tunisien avec SMLLC, c&apos;est W-8BEN (individuel) qu&apos;il
          faut. W-8BEN-E est pour quand la LLC est entité non-US ou
          C-Corp.
        </li>
        <li>
          <strong>Cocher &quot;US Citizen&quot; par confusion linguistique</strong>.
          Si tu n&apos;es pas citoyen US, ne coche jamais cette case sur
          aucun formulaire — même Mercury ou Stripe quand ils te
          demandent ton statut.
        </li>
        <li>
          <strong>Omettre la section treaty benefits</strong>. Cocher
          &quot;I claim treaty benefits under Tunisia-US treaty&quot; peut
          réduire la retenue sur certains types de revenus (royalties,
          intérêts) de 30% à 15% ou 0% selon la catégorie.
        </li>
        <li>
          <strong>Renouvellement oublié</strong>. W-8BEN expire 3 ans
          après signature. Si tu ne renouvelles pas, Stripe/Mercury
          commencent à retenir 30%.
        </li>
        <li>
          <strong>ITIN manquant</strong>. Pour certains revenus
          (royalties Apple App Store, AdSense), tu as besoin d&apos;un
          ITIN US pour valider le W-8BEN. Voir l&apos;article{" "}
          <Link href="/fr/blog/itin-w7-depuis-tunisie-sans-ssn" className="font-bold underline" style={{ color: "#337485" }}>
            ITIN W-7 depuis Tunis
          </Link>
          .
        </li>
      </ul>

      <h2>Cas pratique — Stripe pour ton SMLLC</h2>
      <ol>
        <li>
          Inscris-toi sur Stripe au nom de ta LLC (EIN, address NOHO).
        </li>
        <li>
          Stripe te demande &quot;Tax forms&quot;. Choisis &quot;I&apos;m
          a non-US business owner&quot;.
        </li>
        <li>
          Stripe te présente le W-8BEN. Remplis avec : ton nom (pas le
          nom de la LLC), ton pays Tunisia, ton adresse permanente
          tunisienne, ton numéro de passeport.
        </li>
        <li>
          Section treaty benefits : coche que tu réclames Tunisia-US
          treaty. Pour Stripe processing fees pure, le treaty ne change
          rien, mais autant remplir.
        </li>
        <li>
          Signe, soumet. Stripe stocke le W-8BEN dans ton compte.
        </li>
        <li>
          Tes payouts arrivent en USD sur ton compte Mercury (au nom de
          la LLC) sans retenue à la source.
        </li>
      </ol>

      <h2>Et les revenus US-source ECI ?</h2>
      <p>
        Si tu as des revenus &quot;Effectively Connected Income&quot;
        (ECI) — c&apos;est-à-dire générés par une activité commerciale
        physiquement présente aux US (employé sur place, inventaire en
        warehouse US, etc.) — tu ne signes plus W-8BEN mais{" "}
        <strong>W-8ECI</strong>. Tu deviens redevable de
        l&apos;impôt fédéral US sur ces revenus, plus le 1040-NR annuel.
        99% des fondateurs tunisiens en services ne sont PAS ECI car leur
        travail est exécuté en Tunisie.
      </p>

      <h2>Synthèse — quel form pour quel cas</h2>
      <ul>
        <li>Tunisien résident TN, SMLLC US, services exécutés en TN : <strong>W-8BEN</strong></li>
        <li>Tunisien résident TN, LLC multi-membre US ou C-Corp : <strong>W-8BEN-E</strong> pour la LLC + <strong>W-8BEN</strong> pour chaque membre</li>
        <li>Tunisien avec inventaire / employés US (ECI) : <strong>W-8ECI</strong></li>
        <li>Tunisien devenu résident US (green card, H-1B substantial presence) : <strong>W-9</strong></li>
        <li>Citoyen américain qui se réveille un matin en Tunisie : <strong>W-9</strong> (les US imposent à vie sur la citoyenneté)</li>
      </ul>

      <h2>Si tu as déjà signé le mauvais form</h2>
      <p>
        Pas de panique mais agis vite :
      </p>
      <ul>
        <li>Soumet à la counterparty (Stripe/Mercury/client) un nouveau form correct + une note expliquant la correction.</li>
        <li>Si la counterparty a déjà émis un 1099 à ton nom (US-person form), demande-lui d&apos;émettre un 1042-S corrigé.</li>
        <li>Si l&apos;IRS t&apos;a déjà retenu 30% par erreur, tu peux demander un remboursement via Form 1040-NR. Délai : 6-12 mois.</li>
      </ul>
    </>
  );
}
