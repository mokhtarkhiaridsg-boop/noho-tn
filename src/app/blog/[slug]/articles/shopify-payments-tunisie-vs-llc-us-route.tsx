import Link from "next/link";

export function shopifyPaymentsTunisieVsLlcUsRoute() {
  return (
    <>
      <p>
        Tu veux ouvrir un Shopify store et vendre internationalement.
        Le hic : <strong>Shopify Payments</strong> (le processor
        intégré qui économise 1-2% sur les fees) <em>n&apos;est pas
        disponible en Tunisie</em>. Deux voies — utiliser un
        third-party processor (Stripe Connect, PayPal, etc.) en TN,
        OU ouvrir un Shopify store sous LLC US avec Shopify Payments
        natif. Voici la math complète des deux routes.
      </p>

      <h2>Pays où Shopify Payments est disponible (mai 2026)</h2>
      <ul>
        <li>
          <strong>Active</strong> : US, Canada, UK, Australia,
          Ireland, New Zealand, Singapore, Hong Kong, et une grosse
          partie de l&apos;EU (Allemagne, France, Italie, Espagne,
          Pays-Bas, Belgique, Pologne, etc.).
        </li>
        <li>
          <strong>Inactif</strong> : Tunisie, Maroc, Algérie, Égypte,
          Liban, Émirats (oui — UAE pas encore Shopify Payments
          native), Saoudite, Qatar, Bahreïn.
        </li>
        <li>
          <strong>Statut Tunisie</strong> : pas de ETA officielle de
          Shopify pour activation TN. La plupart des cabinet experts
          Tunisia pensent que c&apos;est lié à BCT FX controls et
          KYC banking — pas dans le pipeline immédiat 2026-2027.
        </li>
      </ul>

      <h2>Route 1 — Shopify Tunisie sans Payments natif</h2>
      <p>
        Tu crées ton Shopify store avec adresse Tunisie. Shopify
        Payments verrouillé. Tu dois activer un third-party
        processor :
      </p>

      <h3>Sous-option 1A — Stripe (impossible en TN direct)</h3>
      <ul>
        <li>
          Stripe n&apos;opère pas en Tunisie. Tu ne peux pas
          connecter Stripe à un Shopify store dont l&apos;adresse
          business est Tunisie.{" "}
          <Link href="/blog/stripe-tunisie-refuse-contourner-llc-us">
            Détails du blocage Stripe TN
          </Link>
          .
        </li>
        <li>
          <strong>Bottom line</strong> : Stripe = NO via cette
          route.
        </li>
      </ul>

      <h3>Sous-option 1B — PayPal (limité en TN)</h3>
      <ul>
        <li>
          PayPal Tunisia est disponible mais en mode <em>receive only</em>{" "}
          (tu ne peux pas envoyer USD à des fournisseurs). PayPal
          Business TN existe mais difficile à obtenir pour vendeurs
          marchands.
        </li>
        <li>
          PayPal Tunisia accepte les inbound USD mais convertit
          automatiquement en TND lors du virement bancaire. Taux de
          change PayPal = ~3-4% en-dessous du taux interbank. Plus
          frais standards 4.4% + 30 cents par transaction.
        </li>
        <li>
          <strong>Bottom line</strong> : techniquement possible mais
          tu perds ~7-8% par transaction entre frais PayPal + FX
          loss. Pour 100 USD de vente Shopify, tu reçois ~92 TND
          en bank.
        </li>
      </ul>

      <h3>Sous-option 1C — Payoneer (utilisable mais limité)</h3>
      <ul>
        <li>
          Payoneer offre une &laquo; receiving account &raquo; US
          en USD pour résidents tunisiens. Tu peux la connecter en
          tant que processor secondaire dans Shopify, ou la lier à
          ton compte stripe US (si tu en as un, ce qui ramène à
          Route 2).
        </li>
        <li>
          Frais Payoneer : ~2% de receiving + ~2% withdrawal vers
          banque Tunisie. Total ~4% par transaction + perte FX si
          conversion.
        </li>
        <li>
          <strong>Bottom line</strong> : viable mais Shopify
          Payments est ~2-3% net de meilleur.
        </li>
      </ul>

      <h3>Sous-option 1D — Local Tunisian processors (Paymee, Flouci, D17)</h3>
      <ul>
        <li>
          Paymee / Flouci / D17 acceptent les cartes tunisiennes
          (domestic). Mais Shopify ne s&apos;intègre pas natively avec
          eux. Tu peux les configurer via 2checkout-style ou
          manuellement, mais c&apos;est friction lourde.
        </li>
        <li>
          Surtout : ces processors n&apos;acceptent <strong>pas les
          cartes internationales</strong> (Visa/Mastercard US, EU,
          etc.). Donc si tu vises des clients international, ces
          processors ne servent à rien.
        </li>
        <li>
          <strong>Bottom line</strong> : utile si tu vends 100%
          aux Tunisiens. Pour international = NO.
        </li>
      </ul>

      <h2>Route 2 — Shopify sous LLC US avec Shopify Payments natif</h2>
      <p>
        Tu formes ta LLC US (Wyoming/Delaware/Nouveau-Mexique), tu
        ouvres Mercury, tu actives Shopify Payments. Le store
        Shopify utilise ton adresse US (5062 Lankershim) comme
        business address. Stripe-style processing natif.
      </p>

      <h3>Étapes (depuis Tunis)</h3>
      <ol>
        <li>
          Forme ta LLC US.{" "}
          <Link href="/blog/ouvrir-llc-tunisie-14-jours">
            Solution Business NOHO 14 jours
          </Link>{" "}
          ou Stripe Atlas C-Corp 7 jours.
        </li>
        <li>
          Obtiens ton EIN. 6-12 semaines via fax SS-4 pour non-US
          person (sans ITIN).
        </li>
        <li>
          Ouvre Mercury ou Relay USD account. 1-4 semaines
          d&apos;approval.
        </li>
        <li>
          Crée ton Shopify store avec :
          <ul>
            <li>
              Business address : ton adresse US (5062 Lankershim si
              NOHO).
            </li>
            <li>
              Country : United States.
            </li>
            <li>
              Tax ID : EIN de ta LLC.
            </li>
          </ul>
        </li>
        <li>
          Active Shopify Payments. Shopify te demande passport +
          adresse + EIN + bank account US (Mercury). Approval
          24-72h typiquement.
        </li>
        <li>
          Tu reçois tes payouts en USD directement sur Mercury.
        </li>
      </ol>

      <h3>Fees Shopify Payments</h3>
      <ul>
        <li>
          <strong>Plan Basic Shopify (29 USD/mois)</strong> : 2.9%
          + 30¢ par transaction online + 2.7% en-store.
        </li>
        <li>
          <strong>Plan Shopify (79 USD/mois)</strong> : 2.6% + 30¢
          online + 2.5% en-store.
        </li>
        <li>
          <strong>Plan Advanced (299 USD/mois)</strong> : 2.4% +
          30¢ online + 2.4% en-store.
        </li>
        <li>
          <strong>Comparaison</strong> : Shopify Payments vs Stripe
          standard = mêmes frais (Stripe is the underlying tech).
          Comparé à PayPal 4.4% + FX loss, économie 1.5-2.5% par
          transaction.
        </li>
      </ul>

      <h2>Math sur 50 000 USD de revenus annuels Shopify</h2>
      <ul>
        <li>
          <strong>Route 1B PayPal</strong> : 50 000 × (1 - 4.4% -
          3% FX) ≈ 46 300 USD reçu net en TN bank, soit{" "}
          <strong>3 700 USD perdus en fees + FX</strong>.
        </li>
        <li>
          <strong>Route 1C Payoneer</strong> : 50 000 × (1 - 2% -
          2%) = 48 000 USD reçu sur Payoneer, puis withdrawal au
          taux de la banque. Disons 1.5% FX loss sur conversion TN
          = ~47 280 USD net. <strong>2 720 USD perdus</strong>.
        </li>
        <li>
          <strong>Route 2 LLC US Shopify Payments</strong> : 50 000
          × (1 - 2.9%) - (1 850 × 0.30) ≈ 48 000 USD net sur
          Mercury. Si tu repatris à TN PPR USD (post-BCT déc 2025) :
          0 FX loss. Si tu repatris en TND via wire : ~1% wire fee.
          <strong>~1 500 - 2 000 USD perdus</strong>.
        </li>
        <li>
          <strong>Économie Route 2 vs Route 1B</strong> : ~2 000 USD
          (~6 200 TND) sur 50K de revenus.
        </li>
        <li>
          <strong>Économie Route 2 vs Route 1C</strong> : ~800-1 200
          USD sur 50K.
        </li>
      </ul>

      <h2>Cas d&apos;usage où Route 1 PayPal/Payoneer reste pertinente</h2>
      <ul>
        <li>
          <strong>Revenus &lt; 15 000 USD/an</strong>. La friction
          (LLC US + EIN + Mercury) ne se justifie pas. PayPal/
          Payoneer suffisent.
        </li>
        <li>
          <strong>100% des clients sont en Tunisie ou MENA</strong>.
          Shopify Payments US n&apos;améliore pas significativement
          (les cards locales ne paient pas sur Shopify Payments US
          de toute façon).
        </li>
        <li>
          <strong>Tu vends physical products avec shipping
          Tunisie</strong>. Considère aussi les frais Aramex/DHL/
          Best Delivery côté inverse — pas juste le payment side.
        </li>
        <li>
          <strong>Tu testes une idée &lt; 6 mois</strong>. Si pas
          de traction, pas de raison d&apos;investir 4 000 TND dans
          LLC.
        </li>
      </ul>

      <h2>Cas d&apos;usage où Route 2 LLC US est gagnante</h2>
      <ul>
        <li>
          <strong>Revenus &gt; 30 000 USD/an</strong>. L&apos;économie
          fee net amortise largement le coût LLC + Mercury setup.
        </li>
        <li>
          <strong>Clients internationaux (US, EU, UK, AU)</strong>.
          Ces marchés s&apos;attendent à payer en USD/EUR/GBP sans
          friction. Shopify Payments US converti automatiquement.
        </li>
        <li>
          <strong>Tu vends digital products / SaaS</strong>. Pas de
          shipping. Pure margin. Toute économie fee compte.
        </li>
        <li>
          <strong>Tu veux scale long-terme</strong> avec
          marketplace expansion (Amazon, Etsy, Walmart). LLC US =
          eligibility unique pour tous ces marketplaces.
        </li>
        <li>
          <strong>Tu veux contrôle anti-chargeback</strong>. Shopify
          Payments donne un dashboard direct dispute response.
          PayPal frozen-account horror stories abondent.
        </li>
      </ul>

      <h2>Le piège VAT/sales-tax</h2>
      <p>
        Si tu vends digital ou physical via Shopify Payments US, tu
        es responsable de la sales-tax US dans les états où tu as un{" "}
        <Link href="/blog/sales-tax-nexus-us-par-etat">
          nexus économique (cf. Wayfair 2018)
        </Link>
        . Shopify Tax + TaxJar/Avalara collectent automatiquement
        50-150 USD/mois mais c&apos;est ta responsabilité de filer.
      </p>
      <p>
        Pour clients EU, au-delà de 10K EUR/an de B2C digital, tu
        dois t&apos;enregistrer en{" "}
        <Link href="/blog/oss-eu-tva-saas-exporteurs">
          OSS Non-Union Scheme
        </Link>{" "}
        et collecter TVA pays-par-pays. ~600-1 200 USD/an de coût
        admin.
      </p>
      <p>
        En Route 1 PayPal/Payoneer (sans LLC US), tu n&apos;as PAS
        d&apos;obligation US sales-tax car tu n&apos;as pas de
        nexus US. Tu as par contre obligations TN (TVA Tunisie 19%
        si SARL TN) ou IRPP perso si AE.
      </p>

      <h2>Décision rapide en 3 questions</h2>
      <ol>
        <li>
          <strong>Tu vises +30K USD/an de revenus Shopify ?</strong>
          <br />
          Oui → Route 2 LLC US dominant.
          <br />
          Non → Route 1B PayPal ou Route 1C Payoneer suffit.
        </li>
        <li>
          <strong>Tes clients sont à 70%+ hors-MENA ?</strong>
          <br />
          Oui → Route 2 LLC US s&apos;impose.
          <br />
          Non → Route 1 suffit.
        </li>
        <li>
          <strong>Tu peux investir 4 000 TND + 6-12 semaines de
          setup ?</strong>
          <br />
          Oui → Route 2.
          <br />
          Non → Route 1 maintenant, basculer Route 2 quand tu
          atteins 30K ARR.
        </li>
      </ol>

      <h2>Migration Route 1 → Route 2 (sans perdre tes clients)</h2>
      <ul>
        <li>
          Forme LLC US en parallèle du Shopify TN existant.
        </li>
        <li>
          Ouvre Mercury + Shopify store US (nouveau, distinct du TN).
        </li>
        <li>
          Migre progressivement : annonce à tes clients que ton
          store change d&apos;adresse business. Email + landing
          page de redirection.
        </li>
        <li>
          Pour les abonnements récurrents : tu ne peux pas migrer
          techniquement (Shopify Subscriptions liés au store). Tu
          dois annuler-réinviter chaque client. Taux de churn typique
          15-30%.
        </li>
        <li>
          Maintiens les deux Shopify ~3-6 mois, puis ferme le TN.
        </li>
      </ul>

      <h2>Note sur Shopify Payments + risk</h2>
      <p>
        Shopify Payments (via Stripe underlying) flag certains
        verticaux high-risk : adult, replica, CBD, weapons. Si tu
        vends dans ces verticaux, Shopify Payments te refuse même
        avec LLC US. Voie alternative : Authorize.net, NMI, ou
        spécialistes high-risk (Easy Pay Direct, Inovio, eMerchant
        Authority). Frais &gt; 4-5%.
      </p>

      <h2>CTA</h2>
      <p>
        Tu veux migrer ton Shopify TN vers une route LLC US ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On regarde ta
        situation actuelle (revenus, clients, products), on math
        l&apos;économie attendue post-migration, et on te dit si la
        bascule vaut le coup maintenant ou attendre 6-12 mois.
      </p>
    </>
  );
}
