import Link from "next/link";

export function quandNePasFormerLlc() {
  return (
    <>
      <p>
        On vend des LLC américaines partout sur TikTok. NOHO en forme
        régulièrement. Mais il y a au moins 5 cas où former une LLC US
        est <strong>une erreur</strong> pour un fondateur tunisien — soit
        une dépense inutile, soit pire, une infrastructure compliance qui
        te coûtera plus qu&apos;elle ne te rapportera. Voici la liste
        honnête.
      </p>

      <h2>Cas 1 — Tu n&apos;as pas encore de client</h2>
      <ul>
        <li>
          Tu lances un projet et tu te dis : &quot;Je vais former la
          LLC, ensuite je chercherai des clients.&quot;
        </li>
        <li>
          C&apos;est presque toujours le mauvais ordre. La LLC coûte
          ~400-700 USD/an récurrent (Wyoming annual report + RA + Form
          5472 CPA) <strong>même sans revenu</strong>. Si tu ne trouves
          pas de client dans les 6-12 premiers mois, tu paies des frais
          sans contrepartie.
        </li>
        <li>
          <strong>Mieux</strong> : valide d&apos;abord avec 1-2 clients
          payants (même via ton compte Tunisien ou via Upwork). Quand tu
          as 3-5K USD/mois récurrents, alors la LLC se justifie.
        </li>
      </ul>

      <h2>Cas 2 — Tous tes clients sont tunisiens</h2>
      <ul>
        <li>
          Tu fais du design, du coaching, du e-com TN. Tes clients paient
          en TND par virement classique ou via Paymee/Konnect.
        </li>
        <li>
          Une LLC US n&apos;ajoute <strong>rien</strong>. Tu paies
          400-700 USD/an pour une structure que tu n&apos;utilises pas.
          Stripe TN local ne fonctionne pas, mais tu n&apos;as pas de
          clients US qui exigeraient Stripe US.
        </li>
        <li>
          <strong>Mieux</strong> : autoentrepreneur déclaré + carte
          technologique business pour tes outils SaaS internationaux. La
          carte business plafond 5-10K TND/an suffit. Voir{" "}
          <Link href="/blog/carte-technologique-business-vs-perso" className="font-bold underline" style={{ color: "#337485" }}>
            Carte technologique business
          </Link>
          .
        </li>
      </ul>

      <h2>Cas 3 — Tu veux échapper à l&apos;IRPP tunisienne</h2>
      <ul>
        <li>
          Erreur de raisonnement très fréquente. La LLC US{" "}
          <strong>n&apos;élimine pas</strong> ton obligation IRPP en
          tant que résident tunisien.
        </li>
        <li>
          Article 6 de la loi 91-25 sur le contrôle des changes
          + Code IRPP article 2 = tu dois déclarer tes revenus mondiaux
          en TN, peu importe où la société est formée.
        </li>
        <li>
          Le traité fiscal Tunisie-USA 1985 (voir{" "}
          <Link href="/blog/traite-fiscal-tunisie-usa-1985" className="font-bold underline" style={{ color: "#337485" }}>
            article dédié
          </Link>
          ) confirme que les revenus de ta LLC US sont taxables en
          Tunisie.
        </li>
        <li>
          Si tu prends une LLC US pour cacher tes revenus, c&apos;est de
          la fraude fiscale. Pénalité : 30-60% du revenu non-déclaré +
          intérêts. La DGI peut désormais cross-référencer via les wires
          PPR USD autorisés depuis décembre 2025.
        </li>
        <li>
          <strong>Mieux</strong> : si tu veux vraiment réduire ton IRPP
          légalement, change de résidence fiscale (UAE, Cayman, etc.) —
          mais c&apos;est un autre projet, et toujours imparfait. NOHO
          ne fait pas cette structuration.
        </li>
      </ul>

      <h2>Cas 4 — Ton business est high-risk pour Stripe</h2>
      <ul>
        <li>
          Dropshipping pur (revendre produits Aliexpress sans marque
          propre).
        </li>
        <li>
          Crypto / forex trading / NFT marketplace.</li>
        <li>Adult content, gambling, replicas, MLM.</li>
        <li>Services financiers, debt collection, consulting
          d&apos;investissement non-licencé.</li>
        <li>
          Pour ces niches, Stripe rejette systématiquement même les LLC
          US bien formées. Avoir la LLC ne change rien.
        </li>
        <li>
          <strong>Mieux</strong> : utilise des processeurs MoR adaptés
          (Paddle pour SaaS, NMI pour crypto, Authorize.net pour
          high-risk legit). Évite Stripe direct. La LLC US n&apos;est pas
          obligatoire pour ces processeurs.
        </li>
      </ul>

      <h2>Cas 5 — Tu vises levée VC institutionnelle US dans les 18 mois</h2>
      <ul>
        <li>
          Tu construis un SaaS qui va lever Seed/A US dans 12-18 mois.
        </li>
        <li>
          <strong>Erreur</strong> : former une LLC US standard
          (Wyoming/Delaware LLC pass-through). Les VC US institutionnels
          (Sequoia, A16Z, Greylock) <strong>ne peuvent pas</strong>{" "}
          investir dans une LLC à cause de leurs LP partners (limitées
          aux investissements C-Corp pour des raisons UBTI).
        </li>
        <li>
          Si tu lèves, tu devras convertir LLC → C-Corp. C&apos;est
          coûteux (1-3K USD), complexe (tax election Form 8832),
          potentiellement triggerable comme événement fiscal aux US et en
          TN.
        </li>
        <li>
          <strong>Mieux</strong> : forme directement une{" "}
          <strong>Delaware C-Corp</strong> via Stripe Atlas. C&apos;est
          le standard pour les VC US. Coût 500 USD vs 100-200 USD pour LLC
          Wyoming, mais tu évites la conversion future.
        </li>
        <li>
          Voir{" "}
          <Link href="/blog/stripe-atlas-vs-noho-deep-dive" className="font-bold underline" style={{ color: "#337485" }}>
            Stripe Atlas vs NOHO deep-dive
          </Link>{" "}
          pour la comparaison.
        </li>
      </ul>

      <h2>Bonus 6 — Tu n&apos;es pas prêt à gérer la compliance ongoing</h2>
      <ul>
        <li>
          La LLC US, c&apos;est pas &quot;set and forget&quot;. Form
          5472 + 1120 annuel (pénalité 25K USD si oubli), Wyoming
          annual report (LLC dissoute si oubli), Mercury KYC ongoing,
          Stripe verification renewals, sales tax nexus monitoring.
        </li>
        <li>
          Si tu n&apos;es pas prêt à gérer ça toi-même OU à payer le
          Suivi mensuel NOHO (1 200 TND/mois) OU à embaucher un CPA US
          (~500 USD/an minimum), <strong>ne forme pas la LLC</strong>.
        </li>
        <li>
          Une LLC oubliée pendant 18 mois te coûte plus en pénalités
          qu&apos;elle ne t&apos;a rapporté en revenus.
        </li>
      </ul>

      <h2>Les bons cas pour former une LLC US</h2>
      <p>
        Pour équilibrer cet article, voici les cas où la LLC US est
        clairement la bonne réponse :
      </p>
      <ul>
        <li>
          Tu factures déjà 3-10K USD/mois récurrents à des clients US/EU
          qui exigent Stripe ou veulent payer une entité US pour leur
          compta.
        </li>
        <li>
          Tu vends sur Amazon, Etsy, Shopify US et tu as besoin de
          Stripe Payments pour processing direct.
        </li>
        <li>
          Tu veux la crédibilité d&apos;une entité US pour ton brand
          (page About avec adresse 5062 Lankershim, footer mentionnant
          LLC).
        </li>
        <li>
          Tu envisages d&apos;embaucher 1-2 contractors US (la LLC paie
          via 1099-NEC, c&apos;est plus simple).
        </li>
        <li>
          Tu veux séparer ton activité US de ta personne physique
          tunisienne pour asset protection (un litige client US ne touche
          que la LLC, pas tes biens TN).
        </li>
      </ul>

      <h2>Le test honnête en 5 questions</h2>
      <p>
        Avant de former une LLC, réponds à ces 5 questions :
      </p>
      <ol>
        <li>Est-ce que je facture déjà au moins 3K USD/mois récurrents
          à des clients hors TN ?</li>
        <li>Est-ce que au moins 1 de mes clients ou marketplaces exige
          que je paie/encaisse via Stripe direct US ?</li>
        <li>Est-ce que je suis prêt à dépenser 400-700 USD/an ongoing
          ou prendre Suivi mensuel (1 200 TND/mois) pour la compliance ?</li>
        <li>Est-ce que mon business est dans une niche &quot;clean&quot;
          que Stripe accepte (services, SaaS, e-com private label) ?</li>
        <li>Est-ce que je comprends que je dois TOUJOURS déclarer mes
          revenus en TN, peu importe la LLC ?</li>
      </ol>
      <p>
        Si tu réponds <strong>OUI à 5/5</strong> : forme la LLC. Si tu
        réponds <strong>OUI à 3-4/5</strong> : reconsidère, ou commence
        par une consultation NOHO pour clarifier ton cas. Si tu réponds{" "}
        <strong>OUI à &lt; 3/5</strong> : ne forme pas de LLC US,
        économise tes 4 000 TND et utilise une structure plus simple
        (autoentrepreneur + carte tech business + Paddle ou Wise).
      </p>

      <h2>Notre engagement honest disclosure</h2>
      <p>
        Quand tu nous écris pour une LLC, on commence par les 5 questions
        ci-dessus. Si tu ne matches pas, on te le dit franchement et on
        te recommande l&apos;alternative (souvent : autoentrepreneur + un
        outil de paiement, sans LLC). On préfère ne pas vendre un client
        qui aurait été le mauvais fit, plutôt que d&apos;avoir un
        customer mécontent 12 mois plus tard. C&apos;est le contraire de
        l&apos;approche doola/Firstbase qui maximise les conversions
        sans qualifier.
      </p>
    </>
  );
}
