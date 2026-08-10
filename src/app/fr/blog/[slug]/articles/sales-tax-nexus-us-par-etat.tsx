import Link from "next/link";

export function salesTaxNexusEtat() {
  return (
    <>
      <p>
        Si tu vends des produits ou services taxables aux clients
        américains depuis ta LLC tunisienne, tu vas tôt ou tard franchir
        un seuil de <strong>sales tax nexus</strong> dans un état US. À ce
        moment-là, tu deviens légalement responsable de collecter la sales
        tax sur chaque vente future à un client de cet état, et de la
        reverser à l&apos;administration locale. Voici la math par état
        US, post-décision Wayfair 2018.
      </p>

      <h2>Qu&apos;est-ce que le sales tax nexus économique</h2>
      <ul>
        <li>
          Avant 2018, le nexus exigeait une présence physique (bureau,
          inventaire, employé) dans un état pour déclencher
          l&apos;obligation de collecte de sales tax.
        </li>
        <li>
          La décision <strong>South Dakota v. Wayfair</strong> (Supreme
          Court, juin 2018) a établi le principe du nexus économique :
          un seuil de ventes ou de transactions suffit, peu importe la
          présence physique.
        </li>
        <li>
          Conséquence : ta LLC tunisienne, formée Wyoming, qui vend en
          ligne aux US, peut déclencher nexus dans 45+ états sans
          jamais y mettre les pieds.
        </li>
      </ul>

      <h2>Les seuils par état (2026)</h2>
      <p>
        Les seuils typiques sont 100K USD/an OU 200 transactions/an.
        Certains états ont des règles plus élevées ou plus basses :
      </p>
      <ul>
        <li><strong>Californie</strong> : 500 000 USD/an (un des plus
          élevés)</li>
        <li><strong>Texas</strong> : 500 000 USD/an</li>
        <li><strong>New York</strong> : 500 000 USD/an + 100 transactions</li>
        <li><strong>Floride</strong> : 100 000 USD/an</li>
        <li><strong>Pennsylvanie</strong> : 100 000 USD/an</li>
        <li><strong>Caroline du Nord</strong> : 100 000 USD/an OU 200 transactions</li>
        <li><strong>Géorgie</strong> : 100 000 USD/an OU 200 transactions</li>
        <li><strong>Illinois</strong> : 100 000 USD/an OU 200 transactions</li>
        <li><strong>Delaware, Montana, New Hampshire, Oregon, Alaska</strong> : pas de sales tax au niveau état. (Le Wyoming, lui, EN A une — 4% état + local — même si on y forme volontiers sa LLC : lieu de formation ≠ nexus.)</li>
      </ul>

      <h2>Ce qui compte dans le seuil</h2>
      <ul>
        <li>
          Le gross revenue total, pas le profit net.
        </li>
        <li>
          Toutes les ventes, B2C et B2B (sauf les ventes B2B avec
          certificat de revente — exemptes mais comptent dans le seuil).
        </li>
        <li>
          Les transactions comptent même si le client ne paie pas la
          sales tax (s&apos;ils sont gov / nonprofit / reseller).
        </li>
        <li>
          Le timing : la plupart des états regardent l&apos;année civile
          en cours OU les 12 derniers mois rolling. Vérifie par état.
        </li>
      </ul>

      <h2>Ce que tu fais une fois nexus franchi</h2>
      <ol>
        <li>
          <strong>S&apos;enregistrer pour un Sales Tax Permit</strong>{" "}
          dans l&apos;état concerné. Délai 1-4 semaines. Coût : gratuit
          à 100 USD.
        </li>
        <li>
          <strong>Configurer Stripe Tax</strong> (ou TaxJar, Avalara,
          Quaderno). Stripe Tax coûte ~0.5% du revenue total ($1000/an
          sur $200K) — vaut le coup vs faire manuellement.
        </li>
        <li>
          <strong>Collecter la sales tax</strong> sur chaque vente
          future au client de cet état. Le taux varie selon adresse de
          livraison (par exemple NYC = 8.875%, mais Albany = 8%).
        </li>
        <li>
          <strong>Reverser périodiquement</strong> à l&apos;état :
          mensuel, trimestriel, ou annuel selon le volume. Tu déposes
          via le portail de l&apos;état (e-file obligatoire dans la
          plupart).
        </li>
        <li>
          <strong>Conserver les certificats de revente</strong> pour les
          ventes B2B exemptes (le client le fournit).
        </li>
      </ol>

      <h2>Si tu ignores le nexus — la cascade</h2>
      <ul>
        <li>
          <strong>Sales tax non-collectée</strong> : tu deviens
          personnellement responsable pour la verser, à partir de ta
          poche (pas de tes clients qui n&apos;ont jamais payé).
        </li>
        <li>
          <strong>Pénalité 10-25% de la sales tax due</strong> + intérêts
          de retard 6-12%/an.
        </li>
        <li>
          <strong>Audit possible 4-6 ans en arrière</strong>. Beaucoup
          d&apos;états ont des programmes &quot;voluntary disclosure&quot;
          pour régulariser sans pénalité — il faut agir avant que
          l&apos;état te contacte.
        </li>
        <li>
          <strong>Suspension des payouts Stripe</strong> si Stripe Tax
          détecte un seuil franchi et pas de TaxID configuré. Cas rare
          mais documenté pour les dropshippers Wayfair-era.
        </li>
      </ul>

      <h2>Le piège California spécifique pour les clients NOHO</h2>
      <p>
        Ta LLC est formée Wyoming. Ton mailbox NOHO est en Californie.
        Question légitime : est-ce que le mailbox en CA déclenche un
        nexus CA pour ta LLC ?
      </p>
      <ul>
        <li>
          <strong>Non, en principe</strong>. Un mailbox CMRA ne constitue
          pas une présence physique au sens du nexus CA. Ta registered
          office reste Wyoming, et tu n&apos;y as ni inventaire ni
          employé.
        </li>
        <li>
          <strong>Mais</strong> : si tu commences à embaucher un employé
          à LA, ou stocker des produits dans un 3PL en Californie, alors
          oui, tu déclenches nexus CA et tu deviens responsable de la
          800 USD/an de CA LLC fee + 8.84% sur les profits CA-source.
        </li>
        <li>
          Mitigation : si tu envisages d&apos;avoir des opérations en CA,
          consulte un CPA pour structurer (CA LLC séparée, ou foreign
          qualification de ta WY LLC en CA avec attention aux coûts).
        </li>
      </ul>

      <h2>Marketplace facilitator laws — la bonne nouvelle</h2>
      <p>
        Si tu vends via Amazon, Etsy, Shopify (avec Shopify Payments + tax
        collection enabled), ou Walmart Marketplace, ces plateformes sont
        désignées <strong>&quot;marketplace facilitators&quot;</strong>{" "}
        par la plupart des états. Elles collectent et reversent la sales
        tax à ta place pour les ventes faites via leur plateforme.
      </p>
      <ul>
        <li>
          Tu n&apos;as PAS à t&apos;enregistrer pour les ventes faites
          via Amazon/Etsy/Walmart (en général).
        </li>
        <li>
          Mais : si tu vends ÉGALEMENT en direct via ton propre site
          (Shopify hors Shopify Payments tax collection), tu reste
          responsable pour ces ventes-là.
        </li>
        <li>
          Vérifie chaque état : 44 états ont implémenté marketplace
          facilitator laws en 2026.
        </li>
      </ul>

      <h2>Outils recommandés</h2>
      <ul>
        <li>
          <strong>Stripe Tax</strong> : 0.5% du revenue. Automatique sur
          chaque transaction. Best pour SaaS / digital products.
        </li>
        <li>
          <strong>TaxJar</strong> : à partir de 19 USD/mois. Best pour
          e-com physical goods avec Shopify / WooCommerce.
        </li>
        <li>
          <strong>Avalara</strong> : enterprise-grade, 50-500 USD/mois.
          Best pour multi-state large operations.
        </li>
        <li>
          <strong>Quaderno</strong> : 49-129 USD/mois. Combo sales tax US
          + VAT EU. Best si tu fais les deux.
        </li>
      </ul>

      <h2>Notre recommandation</h2>
      <p>
        Pour un fondateur tunisien démarrant : tant que tu vends
        principalement via marketplaces (Amazon, Etsy, Shopify avec tax
        collection), tu n&apos;as pas grand-chose à faire. Si tu vends en
        direct via ton site, active Stripe Tax dès que tu approches de
        50K USD/an de revenue US. Le coût (~$250/an) est négligeable
        vs le risque d&apos;audit et de pénalité. Le Suivi mensuel NOHO
        inclut un quarterly nexus check pour identifier les seuils
        franchis avant qu&apos;ils ne deviennent un problème.
      </p>
    </>
  );
}
