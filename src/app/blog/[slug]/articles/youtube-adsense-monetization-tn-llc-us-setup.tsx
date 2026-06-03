import Link from "next/link";

export function youtubeAdsenseMonetizationTnLlcUsSetup() {
  return (
    <>
      <p>
        Tu es créateur YouTube tunisien et tu veux monétiser
        proprement — AdSense, Super Thanks, channel memberships,
        YouTube Premium revenue share, brand sponsorships. Sans LLC
        US, retenue 24% backup withholding sur tes payouts. Avec LLC
        US + ITIN + Article 12 du traité Tunisie-USA = 0% retenue
        possible. Voici le walkthrough complet 2026.
      </p>

      <h2>Pourquoi YouTube + LLC US change tout</h2>
      <ul>
        <li>
          <strong>Sans LLC US, sans ITIN</strong> : Google demande
          tax form. Si tu fournis W-8BEN avec FTIN tunisien seul,
          Google retient 24% backup withholding par sécurité (parce
          que les algos Google ne reconnaissent pas FTIN comme TIN
          valide pour certains paiements royalties US).
        </li>
        <li>
          <strong>Avec LLC US</strong> : YouTube paie ta LLC. La
          LLC fournit W-9 (US entity) ou ton beneficial owner
          fournit W-8BEN avec ITIN US ou FTIN clarifié. Retenue
          réduite à 0-15% selon ton article du traité référence.
        </li>
        <li>
          <strong>Avec ITIN</strong> : retenue YouTube AdSense
          réduite à 0% (article 7 — business profits si LLC US sans
          PE US).
        </li>
      </ul>

      <h2>Stack technique YouTube AdSense + LLC US</h2>
      <ol>
        <li>
          <strong>LLC US formée</strong> (Wyoming/Delaware/NM via
          NOHO). EIN obtenu.
        </li>
        <li>
          <strong>Mercury bank business</strong> ouvert au nom de la
          LLC. Compte US destinataire pour AdSense payouts.
        </li>
        <li>
          <strong>ITIN W-7 obtenu</strong> (voie DHL ou CAA ou voyage
          US, cf.{" "}
          <Link href="/blog/itin-w7-walkthrough-complet-2026">
            walkthrough ITIN
          </Link>
          ).
        </li>
        <li>
          <strong>YouTube Studio</strong> → AdSense → modifie
          l&apos;adresse de paiement : Mercury bank account, US
          adresse 5062 Lankershim Blvd.
        </li>
        <li>
          <strong>Google Tax Info</strong> → mets à jour W-8BEN avec
          ITIN US + traité Tunisie-USA + article 12 (royalties).
        </li>
        <li>
          <strong>Confirmation</strong> : prochain payout devrait
          arriver avec retenue réduite (0-15% selon article).
        </li>
      </ol>

      <h2>Article du traité à utiliser pour YouTube</h2>
      <p>
        Google AdSense paie typiquement les revenus YouTube comme
        <em> royalties</em>. C&apos;est Article 12 du traité
        Tunisie-USA 1985 :
      </p>
      <ul>
        <li>
          <strong>Article 12 (royalties)</strong> : retenue
          conventionnelle 15% sur royalties Tunisie-USA. Mais avec
          ITIN + W-8BEN bien rempli, c&apos;est l&apos;article par
          défaut.
        </li>
        <li>
          <strong>Article 7 (business profits)</strong> : à invoquer
          si tu peux argumenter que c&apos;est un revenu d&apos;activité
          commerciale (et non royalty). Google peut accepter si
          channel structuré business. Retenue 0% si pas de PE US.
        </li>
        <li>
          <strong>Conseil pratique</strong> : commence avec article
          12 (15%). C&apos;est la position safe. Si tu veux passer à
          article 7 (0%), consulte un fiscaliste US (CPA partenaire
          NOHO).
        </li>
      </ul>

      <h2>YouTube Studio — étape par étape configuration paiement</h2>
      <ol>
        <li>
          Connecte-toi à <code>studio.youtube.com</code>.
        </li>
        <li>
          Va dans <strong>Earn → Payment Information</strong>.
        </li>
        <li>
          Update <strong>Payee profile</strong> :
          <ul>
            <li>Account type : <strong>Business</strong></li>
            <li>Business name : nom légal de ta LLC (ex : &laquo;
            Smith Media Wyoming LLC &raquo;)</li>
            <li>EIN : ton EIN US</li>
            <li>Tax ID : ITIN US OU FTIN tunisien (préférer ITIN)</li>
            <li>Adresse : 5062 Lankershim Blvd, North Hollywood, CA
            91601</li>
          </ul>
        </li>
        <li>
          Va dans <strong>Tax Information</strong> :
          <ul>
            <li>Sélectionne &laquo; Non-US entity / individual &raquo;</li>
            <li>Sélectionne &laquo; W-8BEN-E for entity &raquo; si
            LLC, ou &laquo; W-8BEN for individual &raquo; si payee
            est ton nom (pas LLC)</li>
            <li>Beneficial owner : ton nom personnel</li>
            <li>Country : Tunisia</li>
            <li>Treaty Article : 12 (royalties) — retenue 15%</li>
            <li>Confirme + signe électroniquement</li>
          </ul>
        </li>
        <li>
          Va dans <strong>Payment Methods</strong> :
          <ul>
            <li>Add bank account : Mercury USD account</li>
            <li>Routing number Mercury : 084009519 (Choice Financial Group)</li>
            <li>Account number Mercury : ton numéro de compte</li>
            <li>Verify via micro-deposit (24-72h)</li>
          </ul>
        </li>
        <li>
          <strong>Payment threshold</strong> : par défaut 100 USD.
          Tu peux le mettre à 500 USD pour réduire les transactions
          (less payouts mais less Mercury wire fees si applicable).
        </li>
      </ol>

      <h2>Channel memberships, Super Thanks, Stickers (autres revenus)</h2>
      <ul>
        <li>
          <strong>Channel memberships</strong> : Google paie la LLC
          via le même AdSense account. Pareil retenue article 12
          (15%) ou article 7 (0%) selon ton positionnement.
        </li>
        <li>
          <strong>Super Thanks, Super Chat, Super Stickers</strong>{" "}
          : retenue identique à AdSense (article 12 par défaut).
        </li>
        <li>
          <strong>YouTube Premium revenue share</strong> : retenue
          identique. Volume varie selon catchment YouTube Premium
          subscribers de ton audience.
        </li>
        <li>
          <strong>YouTube Shopping</strong> : si tu vends produits
          via YouTube → revenu commercial (article 7), retenue 0%
          avec W-8BEN bien rempli.
        </li>
      </ul>

      <h2>Brand sponsorships — gestion via LLC US</h2>
      <ul>
        <li>
          <strong>Contrat sponsor → LLC US</strong> : signature
          contractuelle au nom de la LLC. Brand paie Stripe direct
          via ta LLC → Mercury.
        </li>
        <li>
          <strong>Stripe approval pour sponsorship</strong> : suit le
          stack standard NOHO 9-item (cf.{" "}
          <Link href="/blog/stripe-approval-9-item-stack-detail">
            détail stack
          </Link>
          ). Approval typique 24-72h.
        </li>
        <li>
          <strong>Tax treatment</strong> : brand sponsorship =
          business profits (article 7), retenue 0% avec W-8BEN
          correctly signé.
        </li>
      </ul>

      <h2>Économie réelle — sample channel 5 000 USD/mois AdSense</h2>
      <p>
        Channel YouTube TN avec 100K subscribers, 60K USD/an
        AdSense :
      </p>
      <ul>
        <li>
          <strong>Sans LLC US, sans ITIN</strong> : 60 000 × 0.76
          (24% backup withholding) = 45 600 USD net en bank tunisien.
          <strong> 14 400 USD perdus</strong> en retenue qu&apos;il
          faudra réclamer via 1040-NR US (complexité +
          mois d&apos;attente).
        </li>
        <li>
          <strong>Avec LLC US + ITIN + Article 12</strong> : 60 000
          × 0.85 (15% retenue) = 51 000 USD net.{" "}
          <strong>9 000 USD perdus</strong> en retenue. Mieux mais
          pas optimal.
        </li>
        <li>
          <strong>Avec LLC US + ITIN + Article 7 (positionné comme
          business profits)</strong> : 60 000 × 1.00 = 60 000 USD
          net. <strong>0 USD perdu</strong> en retenue.
        </li>
        <li>
          <strong>Économie max</strong> : 14 400 USD/an vs no
          structure. Amortit largement NOHO Business 4 000 TND + ITIN
          + comptabilité.
        </li>
      </ul>

      <h2>Compliance — déclaration fiscale tunisienne</h2>
      <ul>
        <li>
          <strong>Tes revenus AdSense via LLC US restent imposables
          en Tunisie</strong> (worldwide income Article 16 IRPP).
        </li>
        <li>
          <strong>Foreign Tax Credit Article 24</strong> : si tu as
          payé tax US (retenue 15% ou plus), tu peux en obtenir
          crédit contre IRPP TN. Diminue ton tax marginal de 15-35%
          → ~15-20% effectif.
        </li>
        <li>
          <strong>Article 36 IRPP</strong> : foreign-source income
          déjà imposé exonéré en TN. Mais si retenue US est 0%
          (article 7), Article 36 N&apos;EXONÈRE PAS donc tu paies
          full IRPP TN sur ces revenus.
        </li>
        <li>
          <strong>Stratégie optimale</strong> : article 7 (retenue
          0% US) + déclaration IRPP TN au taux marginal. Article 24
          NON nécessaire car 0 tax US payé. Coût total = IRPP TN
          standard (15-35%).
        </li>
      </ul>

      <h2>Pièges classiques YouTube monetization TN</h2>
      <ol>
        <li>
          <strong>Skip ITIN</strong>. Sans ITIN, Google peut refuser
          le treaty benefit même avec W-8BEN. Retenue 24% backup.
          Recovery later via 1040-NR mais complexe.
        </li>
        <li>
          <strong>Mauvais article du traité dans W-8BEN</strong>.
          Article 12 = retenue 15%. Article 7 = retenue 0%. Si tu
          checkes mal, surimposition.
        </li>
        <li>
          <strong>Confusion W-9 vs W-8BEN</strong>. LLC US owned by
          foreign person = W-8BEN (PAS W-9). Signer W-9 = backup
          withholding 24% + risque audit IRS.
        </li>
        <li>
          <strong>Bank account inadéquat</strong>. Sans Mercury US
          (ou Relay, Brex), ton payout AdSense va vers carte
          tunisienne avec FX loss + frais.
        </li>
        <li>
          <strong>Channel non-professionnel</strong>. Si ton channel
          n&apos;a pas l&apos;air business (no website, no LLC visible
          dans description), Google peut downgrader vers personal et
          retenir plus.
        </li>
      </ol>

      <h2>Recommendations NOHO pour creator YouTube TN</h2>
      <ul>
        <li>
          <strong>NOHO Business 4 000 TND</strong> : LLC US + EIN +
          mailbox + brand identity + site portfolio + social. Stack
          complet pour creator.
        </li>
        <li>
          <strong>Form 1583 + Mercury</strong> setup essentiel.
        </li>
        <li>
          <strong>ITIN W-7 via voyage US</strong> si possible (4-7
          semaines au lieu de 8-12 par DHL).
        </li>
        <li>
          <strong>Comptable fiscaliste TN partenaire</strong> pour
          coordination IRPP TN avec FTC US.
        </li>
        <li>
          <strong>Brand sponsorships via Stripe direct</strong> +
          contrats LLC US.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Pour creator YouTube TN qui génère &gt; 30K USD/an
        AdSense, LLC US + ITIN + Mercury + Article 7 du traité =
        économie 5-15K USD/an minimum. Pour &lt; 10K USD/an,
        structure inutile (frais d&apos;exploitation supérieurs au
        gain).
      </p>

      <h2>CTA</h2>
      <p>
        Tu es creator YouTube et tu veux setup LLC US pour
        AdSense ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On regarde ton
        revenu actuel + projection 12 mois et on math l&apos;économie
        attendue. Si pas worth-it à ton stage, on te dit
        franchement d&apos;attendre.
      </p>
    </>
  );
}
