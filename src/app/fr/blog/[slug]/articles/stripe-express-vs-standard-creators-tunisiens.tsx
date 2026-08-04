import Link from "next/link";

export function stripeExpressVsStandardCreatorsTunisiens() {
  return (
    <>
      <p>
        Si tu es créateur Tunisien — YouTuber, podcaster, formateur,
        coach, prof Skillshare/Udemy/Teachable — tu rencontres deux
        produits Stripe : <strong>Stripe Express</strong> (créé pour toi
        par une plateforme tierce) et <strong>Stripe standard</strong>
        (que tu ouvres toi-même via ta LLC). Ce ne sont pas deux
        versions du même produit. Ce sont deux modèles juridiques et
        fiscaux opposés. Choisir le mauvais peut te coûter 30% en
        retenue à la source ou un compte fermé du jour au lendemain.
      </p>

      <h2>Vue d&apos;ensemble — qui contrôle quoi</h2>
      <ul>
        <li>
          <strong>Stripe standard</strong> : ta LLC est{" "}
          <em>merchant of record</em> (MoR). Tu contrôles le compte,
          tu fixes les prix, tu gères les disputes, tu encaisses
          directement. Stripe te connait individuellement.
        </li>
        <li>
          <strong>Stripe Express</strong> : la <em>plateforme</em>{" "}
          (YouTube, Patreon, Teachable, Substack, etc.) est MoR. Tu
          es <em>connected account</em>. Stripe te connait via la
          plateforme. Tu reçois des payouts, pas des charges directes.
        </li>
        <li>
          Différence sous-jacente : <strong>Stripe Connect</strong>{" "}
          est la techno qui permet aux plateformes de gérer plusieurs
          créateurs. Express est le tier UI le plus léger de Connect.
        </li>
      </ul>

      <h2>Quand tu rencontres Stripe Express (souvent sans le savoir)</h2>
      <p>
        Tu actives la monétisation sur une plateforme. Elle te demande
        ton nom, ton SSN/EIN/ITIN, une adresse, un compte bancaire.
        Sans le savoir, tu viens d&apos;ouvrir un Stripe Express account
        sous-jacent. Exemples typiques pour un créateur Tunisien :
      </p>
      <ul>
        <li>
          <strong>YouTube Partner Program</strong> — monétisation AdSense
          + Super Thanks + memberships passent par AdSense (Google
          Payments), pas Stripe. Mais YouTube Shopping affiliate utilise
          Stripe Express via partenaires.
        </li>
        <li>
          <strong>Patreon</strong> — Stripe Express depuis 2021 pour les
          payouts creators (anciennement PayPal/wire).
        </li>
        <li>
          <strong>Substack</strong> — Stripe Express pour reverser les
          abonnements newsletter au créateur.
        </li>
        <li>
          <strong>Teachable / Thinkific / Kajabi / Podia</strong> — Stripe
          Express obligatoire dans la plupart des plans gratuits/basics.
          Plans business permettent souvent Stripe standard direct.
        </li>
        <li>
          <strong>Substack, Beehiiv, Ghost</strong> — Stripe standard
          direct par défaut (tu ouvres ton propre compte) si plan
          payant ; Express si plan free.
        </li>
        <li>
          <strong>TikTok Shop, Instagram Checkout</strong> — Stripe
          Connect côté plateforme, mais tu n&apos;es pas créateur Stripe
          Express directement.
        </li>
        <li>
          <strong>OnlyFans</strong> — Stripe non utilisé pour les
          payouts adult creators ; passerelle ePoch / CCBill / wire
          direct. Hors-scope de ce guide.
        </li>
      </ul>

      <h2>Le piège n°1 — qui collecte la sales tax / TVA</h2>
      <p>
        En modèle Express, c&apos;est <strong>la plateforme</strong> qui
        collecte et reverse la sales tax US (et la TVA EU si applicable).
        Tu reçois un net, pas un brut. Pour un créateur Tunisien, c&apos;est
        souvent <em>l&apos;avantage caché</em> de Express :
      </p>
      <ul>
        <li>
          Pas de nexus économique à gérer (Wayfair 2018) — la
          plateforme s&apos;en charge.
        </li>
        <li>
          Pas d&apos;OSS EU à enregistrer (Non-Union Scheme) — la
          plateforme s&apos;en charge.
        </li>
        <li>
          Pas de TVA tunisienne à facturer aux clients EU — c&apos;est
          la plateforme qui est merchant of record.
        </li>
      </ul>
      <p>
        En modèle standard, <strong>tu es</strong> merchant of record.
        Au-delà de 10 000 EUR de B2C digital aux EU/an, tu dois{" "}
        <Link href="/fr/blog/oss-eu-tva-saas-exporteurs">
          t&apos;enregistrer OSS Non-Union Scheme
        </Link>
        . Au-delà des seuils nexus US, tu dois collecter la sales tax
        état par état (TaxJar/Avalara, ~50-100 USD/mois). Le coût admin
        sale tax/TVA en standard est rapidement &gt; 1 500 USD/an.
      </p>

      <h2>Le piège n°2 — la retenue 24% Express en absence de tax form</h2>
      <p>
        Stripe Express te demande de remplir un W-9 (si US person) ou un{" "}
        <Link href="/fr/blog/form-w8ben-ligne-par-ligne">W-8BEN</Link>{" "}
        (si non-US person). Tant que ce n&apos;est pas fait :
      </p>
      <ul>
        <li>
          Stripe applique une <strong>backup withholding 24%</strong>{" "}
          sur tes payouts (US person sans W-9) ou <strong>30% FDAP</strong>{" "}
          (non-US sans W-8BEN). Cette retenue va à l&apos;IRS.
        </li>
        <li>
          Si tu es Tunisien et que tu fournis un W-8BEN avec ITIN +
          référence au traité Tunisie-USA 1985 article 7 (business
          profits), tu peux ramener la retenue à 0% si tu n&apos;as pas
          de PE US.
        </li>
        <li>
          <strong>Mais</strong> : la plupart des plateformes
          (Substack, Patreon, Teachable) qualifient ces payouts comme
          royalties (article 12 du traité), pas business profits.
          Retenue conventionnelle = 15% sur royalties Tunisie-USA.
          Vérifie quel article s&apos;applique avant de cocher 0%
          dans l&apos;UI Stripe Express.
        </li>
      </ul>

      <h2>Le piège n°3 — Stripe Express ferme sans préavis</h2>
      <p>
        Tu n&apos;as pas de relation contractuelle directe avec Stripe en
        mode Express. La plateforme contrôle. Stripe peut fermer ton
        Express account dans 3 scénarios :
      </p>
      <ul>
        <li>
          La plateforme te ferme — tu perds aussi ton Express (et
          potentiellement tes balances en transit).
        </li>
        <li>
          Stripe risk flagge ton activité (rare en Express mais arrive
          sur contenus borderline). Tu perds ton accès à toutes les
          plateformes qui utilisent Stripe Express simultanément.
        </li>
        <li>
          Stripe ferme la plateforme elle-même (cf. plateformes adult
          déplatformées 2019-2024). Tous les Express accounts dépendants
          tombent.
        </li>
      </ul>
      <p>
        En mode standard via LLC US, ta relation est avec Stripe
        directement. Si une plateforme te ferme, ton Stripe survit. Tu
        peux migrer le business vers Shopify, Gumroad, ou un site
        propriétaire.
      </p>

      <h2>Le piège n°4 — payouts vers Tunisie pas toujours autorisés</h2>
      <p>
        Stripe Express permet en théorie des payouts vers un compte
        Tunisie via Wise/Payoneer connecté. En pratique :
      </p>
      <ul>
        <li>
          Plusieurs plateformes (Patreon, Substack) <strong>refusent</strong>{" "}
          un compte Tunisie en bénéficiaire final, même si Stripe le
          tolère techniquement. Country list de la plateforme &gt;
          country list de Stripe.
        </li>
        <li>
          Si tu donnes un compte US (Mercury via ta LLC), tu te
          retrouves dans une situation hybride : tu as une LLC mais tu
          utilises Express comme un US person. L&apos;IRS reçoit un
          1099-K émis par la plateforme avec ton EIN de LLC — tu dois
          déclarer ces revenus comme business income de ta LLC, pas
          comme creator income personnel.
        </li>
        <li>
          C&apos;est précisément le moment où la plupart des créateurs
          Tunisiens basculent en mode standard direct via leur LLC.
        </li>
      </ul>

      <h2>Quand Express est la bonne réponse</h2>
      <ul>
        <li>
          <strong>Tu débutes</strong> &lt; 5 000 USD/an de revenus
          creator. Cost admin standard (sales tax compliance + CPA
          5472) dépasse les bénéfices.
        </li>
        <li>
          <strong>Tes revenus sont 100% via 1 plateforme</strong>{" "}
          (ex : tu vis de Patreon uniquement). Pas besoin d&apos;agréger.
        </li>
        <li>
          <strong>Tu vends digital across borders</strong> (US, EU,
          UK, AU clients). Compliance TVA OSS + sales tax US est un
          enfer compared to letting Stripe Express + plateforme gérer.
        </li>
        <li>
          <strong>Tu n&apos;as pas encore de LLC US</strong> et tu veux
          tester un marché avant d&apos;investir 4 000 TND. Express
          accepte un Tunisien résident avec ITIN, sans LLC.
        </li>
      </ul>

      <h2>Quand standard est la bonne réponse</h2>
      <ul>
        <li>
          <strong>Tu vends multi-plateforme</strong> — Gumroad + ton
          site Shopify + ton Calendly coaching. Un seul Stripe standard
          centralisé sur ta LLC simplifie comptabilité.
        </li>
        <li>
          <strong>Tu vends services 1-to-1</strong> (consulting,
          coaching, programmes). Pas de plateforme intermédiaire qui
          collecte. Stripe standard direct = ton flow naturel.
        </li>
        <li>
          <strong>Tu veux de la billing récurrente complexe</strong>{" "}
          (Stripe Subscriptions + Tax + Customer Portal). Express
          n&apos;expose pas ces APIs à toi, seulement à la plateforme.
        </li>
        <li>
          <strong>Tu génères &gt; 30 000 USD/an</strong>. Le coût admin
          (CPA + TaxJar) est largement absorbé. Tu gagnes en contrôle,
          continuité, et marge (pas de 5-10% plateforme).
        </li>
        <li>
          <strong>Tu veux vendre B2B avec factures TVA-conformes</strong>{" "}
          au format de tes clients EU. Express ne te laisse pas
          générer ces factures — la plateforme oui mais limitée.
        </li>
      </ul>

      <h2>Le cas hybride — Express ET standard en même temps</h2>
      <p>
        Aucune règle Stripe n&apos;interdit d&apos;avoir les deux. Beaucoup de
        créateurs Tunisiens NOHO opèrent ainsi :
      </p>
      <ul>
        <li>
          <strong>Standard via LLC</strong> — pour leur site, Gumroad
          digital products, coaching Calendly, factures B2B.
        </li>
        <li>
          <strong>Express via plateforme</strong> — pour Patreon
          (memberships recurring), Substack (newsletter premium),
          Teachable (cours).
        </li>
      </ul>
      <p>
        Côté fiscal IRS, tes deux flows convergent sur ta LLC (Express
        si tu donnes l&apos;EIN à la plateforme). Tu rapportes le tout
        sur Form 5472 + 1120 pro-forma (en SMLLC disregarded). Le 1099-K
        émis par chaque plateforme + tes Stripe statements standard
        servent de pièces justificatives.
      </p>

      <h2>Le piège juridique Express ne donne pas accès aux outils Stripe</h2>
      <p>
        En Express, tu ne vois <em>presque rien</em> dans ton dashboard
        Stripe. Pas d&apos;API. Pas de webhooks. Pas de Stripe Tax. Pas
        de Customer Portal. Pas de Connect Onboarding pour <em>tes</em>{" "}
        sous-traitants. Pas de Treasury. Pas de Issuing. Si tu veux
        construire un produit qui dépend de l&apos;API Stripe (ex :
        membership site custom, marketplace), <strong>tu dois</strong>{" "}
        passer en standard via ta LLC.
      </p>

      <h2>Décision en 4 questions</h2>
      <ol>
        <li>
          <strong>
            Tes revenus creator viennent à 100% d&apos;une plateforme
            (Patreon, Substack, Teachable, Kajabi) ?
          </strong>
          <br />
          Oui → Express te suffit, simplifie tax compliance.
          <br />
          Non → standard via LLC = centralisation indispensable.
        </li>
        <li>
          <strong>Tu vends à plus de 1 000 clients EU/an ?</strong>
          <br />
          Oui → Express évite OSS Non-Union Scheme (la plateforme
          gère TVA). Standard te force à t&apos;enregistrer.
          <br />
          Non → standard reste simple.
        </li>
        <li>
          <strong>Tu veux automatiser via API (webhooks, custom flows) ?</strong>
          <br />
          Oui → standard obligatoire.
          <br />
          Non → Express OK pour rester en mode SaaS-plateforme.
        </li>
        <li>
          <strong>Tu génères &gt; 30 000 USD/an net ?</strong>
          <br />
          Oui → standard rentable (coût admin amorti).
          <br />
          Non → Express souvent plus économique.
        </li>
      </ol>

      <h2>Migration Express → standard sans perdre ses clients</h2>
      <p>
        Tu démarres en Express, tu grandis, tu veux passer en standard.
        Le défi : tu ne peux pas <em>migrer</em> un Express en standard
        — ce sont deux comptes différents. Tu dois ouvrir un Stripe
        standard nouveau et basculer la prise de paiement.
      </p>
      <ul>
        <li>
          Pour les abonnements Patreon/Substack/Teachable : tu ne peux
          pas les migrer techniquement (la plateforme reste merchant).
          Ce que tu peux faire : pivoter vers ton site propre (Stripe
          standard) et inviter tes patrons à migrer, en offrant un
          bonus ou un downgrade de prix.
        </li>
        <li>
          Pour les products one-shot Gumroad/Teachable : tu copies
          tes products dans un nouveau setup Shopify/Memberstack
          connecté à Stripe standard. Les anciens clients continuent
          d&apos;avoir accès via la plateforme ancienne ; les nouveaux
          via la nouvelle.
        </li>
        <li>
          Taux de churn typique en migration : 15-30% sur les
          abonnés payants. Acceptable si la marge augmente de 15-30%
          (suppression du cut plateforme).
        </li>
      </ul>

      <h2>Tableau récap quick reference</h2>
      <ul>
        <li>
          <strong>Express</strong> : créé par la plateforme, plateforme
          MoR, plateforme collecte taxes, retenue 24%/30% si pas de
          tax form, contrôle limité, ferme avec la plateforme.
        </li>
        <li>
          <strong>Standard</strong> : créé par toi via ta LLC, tu es
          MoR, tu collectes taxes (ou via OSS/TaxJar), pas de
          retenue, contrôle total, indépendant des plateformes.
        </li>
      </ul>

      <h2>Notre opinion</h2>
      <p>
        Pour un créateur Tunisien démarrant à 0, on conseille Express
        12 premiers mois (faster setup, no LLC needed). Au moment où :
        (a) tu dépasses 30 000 USD/an, OU (b) tu actives 2+ canaux de
        revenus, OU (c) tu veux automatiser via API — on bascule en
        standard via{" "}
        <Link href="/fr/business">Solution Business LLC US</Link>. La
        migration coûte 4 000 TND une fois mais débloque la
        scalabilité.
      </p>

      <h2>CTA</h2>
      <p>
        Tu es créateur en Express et tu te demandes si tu dois basculer
        en standard ? On fait l&apos;audit math de ton stack actuel
        (cuts plateformes + taxes retenues + frictions API) vs un
        standard via LLC.{" "}
        <Link href="/fr/appel">Réserve un appel.</Link> Gratuit, on dit
        non si tu n&apos;es pas prêt — tu restes en Express l&apos;année
        suivante sans frais.
      </p>
    </>
  );
}
