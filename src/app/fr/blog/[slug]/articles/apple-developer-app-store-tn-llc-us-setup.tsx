import Link from "next/link";

export function appleDeveloperAppStoreTnLlcUsSetup() {
  return (
    <>
      <p>
        Tu es développeur iOS / macOS / visionOS tunisien et tu veux
        publier des apps sur l&apos;App Store. Apple Developer Program
        + App Store Connect nécessitent payment method + tax
        information. Sans LLC US : friction maximum (carte tech TN
        plafonnée, retenue 30%, App Store Connect refuse certaines
        configurations). Avec LLC US : full unlock + 0% retenue
        US-source. Voici le setup 2026.
      </p>

      <h2>Apple Developer Program — les options 2026</h2>
      <ul>
        <li>
          <strong>Individual developer</strong> : 99 USD/an. Apparaît
          publiquement avec ton nom personnel (pas de DBA possible).
          Pour apps personnelles uniquement.
        </li>
        <li>
          <strong>Organization developer</strong> : 99 USD/an.
          Apparaît avec ton nom business (LLC name). Nécessite
          D-U-N-S number (Dun &amp; Bradstreet) + entity legal.
        </li>
        <li>
          <strong>Apple Developer Enterprise</strong> : 299 USD/an.
          In-house apps uniquement, pas distribution publique App
          Store. Hors scope pour la plupart.
        </li>
      </ul>

      <h2>Pourquoi LLC US + Organization Developer</h2>
      <ul>
        <li>
          <strong>Nom business visible</strong> dans App Store.
          Trust signal pour utilisateurs vs nom personnel.
        </li>
        <li>
          <strong>DUNS number facilité</strong> : LLC US obtient DUNS
          en 1-2 semaines (D&amp;B reconnaît LLC US standard). Sans
          LLC US, DUNS via Tunisie possible mais 4-8 semaines.
        </li>
        <li>
          <strong>Tax forms simplifiés</strong> : W-9 ou W-8BEN-E LLC
          US accepté direct. Sans, App Store Connect demande
          documentation supplémentaire pour fondateur TN individuel.
        </li>
        <li>
          <strong>Banking US Mercury</strong> : payouts Apple
          directs vers compte US. Évite carte tech TN 1 000 TND/an
          plafonnée + FX loss.
        </li>
      </ul>

      <h2>Setup étape par étape — Apple Developer Organization via LLC US</h2>
      <ol>
        <li>
          <strong>LLC US active</strong> (Wyoming via NOHO 4 000 TND).
          EIN obtenu. Operating Agreement signé.
        </li>
        <li>
          <strong>DUNS number gratuit</strong> via D&amp;B :
          <ul>
            <li>upgrade.dnb.com/dunsfilelookup</li>
            <li>Type : business legal name = ton LLC US name</li>
            <li>Country : US</li>
            <li>Address : 5062 Lankershim Blvd, North Hollywood, CA</li>
            <li>Délai 1-2 semaines pour delivery</li>
          </ul>
        </li>
        <li>
          <strong>Apple Developer Program signup</strong> :
          <ul>
            <li>developer.apple.com → Account → Enroll</li>
            <li>Entity Type : Organization</li>
            <li>Legal Entity Name : exact LLC US name (ex : &laquo;
            Smith Mobile Wyoming LLC &raquo;)</li>
            <li>DUNS Number : ton DUNS reçu</li>
            <li>Position : Owner / Founder</li>
            <li>Verification 1-3 semaines</li>
          </ul>
        </li>
        <li>
          <strong>App Store Connect setup</strong> :
          <ul>
            <li>Sign agreement (Paid Apps Agreement)</li>
            <li>Tax form : W-9 LLC US accepté (avec EIN) ou W-8BEN-E
            si tu prefer pour clarté foreign-owner status</li>
            <li>Article du traité Tunisie-USA : Article 7 (business
            profits) pour 0% withholding</li>
            <li>Bank account : Mercury USD (routing + account
            number)</li>
            <li>Bank account currency : USD (par défaut)</li>
          </ul>
        </li>
        <li>
          <strong>Verification + activation</strong>. Total temps
          d&apos;onboarding : 4-8 semaines selon DUNS speed +
          Apple Developer review.
        </li>
      </ol>

      <h2>Tax info App Store Connect — détails critiques</h2>
      <ul>
        <li>
          <strong>Form W-8BEN-E (recommended pour LLC US owned by
          foreign person)</strong> :
          <ul>
            <li>Beneficial owner : LLC name</li>
            <li>Country : US</li>
            <li>Disregarded entity : Yes (si SMLLC pass-through)</li>
            <li>Beneficial owner of disregarded entity : ton nom +
            country Tunisia</li>
            <li>Treaty country : Tunisia</li>
            <li>Treaty article : Article 7 (business profits)</li>
            <li>Resulting US withholding : 0% sur App Store revenues</li>
          </ul>
        </li>
        <li>
          <strong>Form W-9 alternative</strong> : si tu prefer
          considérer la LLC comme US entity. Mais beneficial owner
          tracking devient flou. Pour clarity, W-8BEN-E recommended.
        </li>
        <li>
          <strong>Apple withholding policies</strong> : Apple paie
          ~85% à ton App Store Connect bank (sa commission est 15%
          ou 30% selon program). Si W-8BEN-E correctement signé, 0%
          retenue US additionnelle.
        </li>
      </ul>

      <h2>Coûts complets Year 1 — Apple Developer setup via LLC US</h2>
      <ul>
        <li>LLC US formation (NOHO Business) : 4 000 TND</li>
        <li>EIN + Form 1583 + Mailbox 12 mois : inclus</li>
        <li>DUNS number : 0 USD (gratuit via D&amp;B)</li>
        <li>Apple Developer Program : 99 USD/an (~310 TND)</li>
        <li>Wyoming annual report : 60 USD/an</li>
        <li>CPA US Form 5472 + 1120 : 250-500 USD/an</li>
        <li>Comptable fiscaliste TN : 1 200-2 800 TND/an</li>
        <li>
          <strong>Total Year 1 : ~6 500 - 8 800 TND (~2 100 - 2 850
          USD)</strong>
        </li>
      </ul>

      <h2>Économie réelle vs sans LLC US</h2>
      <ul>
        <li>
          <strong>Sans LLC US</strong> :
          <ul>
            <li>Apple Developer Individual seulement (nom personnel
            visible)</li>
            <li>Pas de DUNS (rare pour individuals tunisiens)</li>
            <li>Tax form moins clean — retenue potentielle 30% si
            mal rempli</li>
            <li>Payouts vers carte tech TN plafonnée 1K TND/an OU
            Payoneer 4-5% loss</li>
            <li>App Store payouts limited à 5K USD/an typique avant
            blocage carte tech</li>
          </ul>
        </li>
        <li>
          <strong>Avec LLC US</strong> :
          <ul>
            <li>Apple Developer Organization (nom business visible)</li>
            <li>Payouts unlimited vers Mercury USD direct</li>
            <li>0% retenue US-source (W-8BEN-E article 7)</li>
            <li>Compliance claire pour audit IRS futur</li>
          </ul>
        </li>
        <li>
          <strong>Économie sur 50K USD/an App Store revenues</strong> :
          ~7 500 USD/an vs structure sans LLC US.
        </li>
      </ul>

      <h2>App Store Connect — features unlocked par Organization</h2>
      <ul>
        <li>
          <strong>App-Specific Shared Secret</strong> pour validation
          server-to-server.
        </li>
        <li>
          <strong>StoreKit 2 + auto-renewable subscriptions</strong>{" "}
          full features.
        </li>
        <li>
          <strong>App Store Review prioritaire</strong> dans certains
          cas (organisations avec history).
        </li>
        <li>
          <strong>Multiple team members</strong> avec roles
          différenciés.
        </li>
        <li>
          <strong>Public-facing business identity</strong> visible
          dans App Store + developer page.
        </li>
        <li>
          <strong>App Store Search Ads</strong> integration.
        </li>
        <li>
          <strong>TestFlight beta avec external testers</strong>.
        </li>
        <li>
          <strong>Family Sharing</strong> activable pour apps.
        </li>
      </ul>

      <h2>Pièges classiques Apple Developer + TN</h2>
      <ol>
        <li>
          <strong>DUNS pas alignée avec LLC name</strong>. Apple
          rejette le matching DUNS-LLC sur 30% des dossiers. Vérifie
          que ton DUNS profile a EXACTEMENT le même legal name que
          ton LLC.
        </li>
        <li>
          <strong>Apple Developer Apple ID personnel</strong>
          utilisé. Crée un Apple ID séparé business@yourLLC.com pour
          l&apos;organisation. Évite mélange perso/business.
        </li>
        <li>
          <strong>Tax form changé après activation</strong>. Si tu
          changes W-9 → W-8BEN-E plus tard, Apple peut requérir
          révision. Choisis le bon dès le début.
        </li>
        <li>
          <strong>Bank account currency mismatch</strong>. Si tu
          configures Mercury en USD mais Apple paie en EUR
          (utilisateur EU), conversion automatique applique. Pour
          revenus EU, considère Wise EUR sub-account séparé.
        </li>
        <li>
          <strong>Tax form expiration</strong>. W-8BEN-E expire après
          3 ans. Renouvelle proactivement. Sinon Apple applique 24%
          backup withholding sur futurs payouts.
        </li>
      </ol>

      <h2>App Store Pricing & Currency Strategy</h2>
      <ul>
        <li>
          <strong>Prix par tier Apple</strong> : Apple ajuste prix
          automatiquement par pays via tiers. Tu choisis tier 1
          (0.99 USD) à tier 87 (999.99 USD).
        </li>
        <li>
          <strong>Country availability</strong> : tu peux exclure
          certains pays (rare nécessité). Pour TN-founded apps,
          souvent garder disponibilité globale.
        </li>
        <li>
          <strong>Subscription tiers</strong> : auto-renewable subs
          ont tiers similaires. Familles de prix unifiées entre
          tier mensuel et annuel.
        </li>
      </ul>

      <h2>Compliance fiscale TN</h2>
      <ul>
        <li>
          <strong>Revenus App Store via LLC US</strong> = revenus de
          source étrangère obligation IRPP TN (article 16 Code IRPP).
        </li>
        <li>
          <strong>Article 24 du traité TN-USA</strong> ne s&apos;applique
          PAS si retenue US = 0% (rien à crediter contre).
        </li>
        <li>
          <strong>Taux marginal IRPP TN</strong> : 15-35% selon
          revenue total annuel.
        </li>
        <li>
          <strong>Engage un comptable fiscaliste TN spécialisé</strong>{" "}
          pour ton premier filing.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Pour dev iOS/macOS tunisien sérieux qui vise &gt; 20K USD/an
        App Store revenues, LLC US + Apple Developer Organization est
        non-négociable. Économie 7-15K USD/an + unlock features
        Organization-only. Setup 4-8 semaines, ROI amortit dès les
        premiers payouts &gt; 5K USD.
      </p>

      <h2>CTA</h2>
      <p>
        Tu es dev iOS et tu veux setup Apple Developer via LLC US ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On audit ton
        revenue model app (paid apps, IAP, subscriptions) et on
        construit le setup Apple Developer Organization + tax forms
        + bank flow.
      </p>
    </>
  );
}
