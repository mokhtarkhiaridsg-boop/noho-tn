import Link from "next/link";

export function registeredAgentPiege() {
  return (
    <>
      <p>
        Tu as ouvert ta LLC Wyoming chez Northwest Registered Agent à 125
        USD/an. Service propre, mailing reçu. 11 mois plus tard, tu
        découvres dans ton spam un email t&apos;informant que ton renewal
        annuel n&apos;a pas été payé, ton statut LLC est désormais
        &quot;Delinquent&quot;, et Mercury menace de bloquer ton compte.
        Comment ça arrive, comment l&apos;éviter.
      </p>

      <h2>Qu&apos;est-ce qu&apos;un registered agent et pourquoi tu en
        as besoin</h2>
      <ul>
        <li>
          Tous les 50 états US exigent qu&apos;une LLC nomme un{" "}
          <strong>registered agent</strong> — une personne physique ou
          entreprise localisée dans l&apos;état où la LLC est formée,
          ayant une adresse physique de business hours, capable de
          recevoir le courrier officiel.
        </li>
        <li>
          Le RA reçoit : assignations de tribunal (service of process),
          courriers Secretary of State (annual report reminders),
          courriers IRS, audits.
        </li>
        <li>
          Pour un fondateur tunisien qui n&apos;est pas physiquement dans
          le Wyoming, le RA est obligatoire. Tu ne peux pas être ton
          propre RA si tu n&apos;y résides pas.
        </li>
      </ul>

      <h2>Le service standard d&apos;un RA — ce qui est inclus</h2>
      <ul>
        <li>Réception et forwarding du courrier officiel (court documents, SoS notices).</li>
        <li>Adresse physique enregistrée auprès du Secretary of State.</li>
        <li>Renouvellement annuel du contrat RA (souvent auto-paid).</li>
        <li>Notification par email lors d&apos;une réception légale.</li>
      </ul>

      <h2>Ce qui N&apos;est PAS inclus dans le service de base — le piège</h2>
      <ul>
        <li>
          <strong>Le rappel du Wyoming annual report</strong> (60 USD,
          dû au Secretary of State chaque année à l&apos;anniversaire de
          ta LLC). Ton RA ne le dépose PAS pour toi par défaut. Le SoS
          envoie un rappel par courrier — au RA, qui te le forward, et
          tu dois agir.
        </li>
        <li>
          <strong>Le dépôt fédéral Form 5472 + 1120</strong> (obligation
          IRS annuelle pour LLC non-US owned). Ton RA n&apos;a rien à
          voir avec l&apos;IRS. Pénalité : 25 000 USD minimum si oubli.
        </li>
        <li>
          <strong>Les changements d&apos;adresse ou de membre</strong>.
          Tu dois les déposer toi-même via Articles of Amendment.
        </li>
        <li>
          <strong>La compliance Mercury/Stripe/Wise</strong>. Le RA ne
          monitore pas tes comptes bancaires.
        </li>
      </ul>

      <h2>Pourquoi les fondateurs tunisiens se font surprendre</h2>
      <ul>
        <li>
          <strong>Promesse marketing trompeuse</strong>. Plusieurs RA
          (Northwest, ZenBusiness, Bizee/Incfile) marketent &quot;LLC
          formation + RA + compliance reminders&quot; comme un package
          tout-inclus. Sauf que les reminders sont des emails
          automatiques, pas un service actif de dépôt.
        </li>
        <li>
          <strong>Emails dans le spam</strong>. Les reminders RA et
          Secretary of State arrivent souvent du domaine du SoS d&apos;état,
          que Gmail classe en spam pour un user tunisien.
        </li>
        <li>
          <strong>Décalage de calendrier</strong>. Le rappel arrive 60
          jours avant l&apos;échéance, mais beaucoup de fondateurs le
          traitent en &quot;je verrai plus tard&quot; et oublient.
        </li>
        <li>
          <strong>Pas d&apos;humain en cas de doute</strong>. Si tu ne
          comprends pas le rappel (anglais juridique), le support RA te
          répond en 24-48h par email automatisé. Pas d&apos;aide.
        </li>
      </ul>

      <h2>La cascade de conséquences si tu rates le Wyoming annual report</h2>
      <ol>
        <li>
          <strong>Mois 1-2 après échéance</strong> : statut SoS passe à
          &quot;Delinquent&quot;. Pénalité +50 USD ajoutée.
        </li>
        <li>
          <strong>Mois 3-4</strong> : Mercury peut détecter le changement
          via API de vérification d&apos;état et bloquer ton compte. Tu
          dois prouver la régularisation.
        </li>
        <li>
          <strong>Mois 6+</strong> : SoS dissout administrativement ta
          LLC. Mercury ferme. Stripe ferme. Pour réactiver : reinstatement
          250 USD + tous les annual reports manqués + pénalités cumulées.
        </li>
        <li>
          <strong>Mois 12+</strong> : si pas régularisé, le nom de ta LLC
          redevient disponible. Quelqu&apos;un peut le prendre. Tu perds
          l&apos;identité de marque.
        </li>
      </ol>

      <p>
        Pour la cascade détaillée et le calendrier complet, voir{" "}
        <Link href="/fr/blog/wyoming-annual-report-60-usd" className="font-bold underline" style={{ color: "#337485" }}>
          Wyoming annual report — l&apos;obligation qui dissout ta LLC
        </Link>
        .
      </p>

      <h2>Le bon profil de RA pour un fondateur tunisien</h2>
      <ul>
        <li>
          <strong>Service avec rappel pro-actif par WhatsApp/SMS</strong>,
          pas juste email. Peu de RA grand public le proposent (Northwest
          a une option, mais c&apos;est extra).
        </li>
        <li>
          <strong>Support humain en anglais OU français</strong>. Cap à
          24h response time. Les RA discount (Bizee à 99 USD/an) ne
          proposent que support automatisé.
        </li>
        <li>
          <strong>Inclus : annual report filing automatique (option
          payante 50-100 USD/an)</strong>. C&apos;est le service qui
          évite le piège dont parle cet article. Mais c&apos;est rarement
          le default.
        </li>
        <li>
          <strong>Adresse physique commerciale réelle, pas juste un PMB
          d&apos;un autre RA</strong>. Some RA sous-traitent à un autre
          RA. Mercury peut détecter et flagger.
        </li>
      </ul>

      <h2>3 RA recommandés en 2026 — pros et cons</h2>
      <ul>
        <li>
          <strong>Northwest Registered Agent</strong> (125 USD/an, WY siège
          principal Sheridan). Pros : service propre, support
          téléphonique. Cons : annual report filing extra (50 USD), pas
          de WhatsApp.
        </li>
        <li>
          <strong>Wyoming Registered Agents Inc.</strong> (49-99 USD/an).
          Pros : moins cher. Cons : support moins responsif.
        </li>
        <li>
          <strong>Harbor Compliance</strong> (89 USD/an). Pros : compliance
          calendar intégré, alerts pro-actives. Cons : prix premium.
        </li>
      </ul>

      <h2>Le rôle du Suivi mensuel NOHO</h2>
      <p>
        Le Suivi mensuel à 1 200 TND/mois inclut explicitement le suivi
        de toutes tes obligations annuelles : Wyoming annual report (avec
        dépôt automatique 30 jours avant échéance), Form 5472 + 1120
        coordonnés avec CPA partenaire, monitoring du statut LLC sur SoS,
        et alerts Mercury/Stripe. C&apos;est ce qui transforme la LLC
        d&apos;un piège administratif en une infrastructure
        d&apos;activité fiable.
      </p>

      <p>
        Si tu ne veux pas du Suivi mensuel, fais-toi un calendrier Google
        manuel avec 3 entrées récurrentes : (1) Wyoming annual report
        à ton anniversaire LLC, (2) Form 5472 + 1120 au 15 avril, (3)
        renouvellement RA à la date du contrat. Mets 3 rappels par
        entrée. Ne te fie pas aux emails du RA.
      </p>
    </>
  );
}
