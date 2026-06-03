import Link from "next/link";

export function wiseBusinessTunisie2026StatutReel() {
  return (
    <>
      <p>
        Wise Business est souvent cité comme alternative à Mercury
        pour recevoir des USD/EUR depuis l&apos;étranger. Mais le
        statut Wise Business pour résidents tunisiens en 2026 est
        compliqué — disponible, mais limité. Voici la situation
        réelle (mai 2026), ce que Wise peut et ne peut pas faire
        pour toi, et comment l&apos;intégrer avec ta LLC US si tu en
        as une.
      </p>

      <h2>Wise Business — qu&apos;est-ce que c&apos;est exactement</h2>
      <ul>
        <li>
          Wise Business (anciennement TransferWise Business) =
          compte multi-devises pour business avec <strong>local
          banking details</strong> dans plusieurs pays (US, UK, EU,
          AU, NZ, SG, HK, CA).
        </li>
        <li>
          Tu reçois un <strong>routing number + account number
          US</strong>, un IBAN EUR, un sort code UK, etc. Tes
          clients paient en local comme s&apos;ils payaient une
          banque locale.
        </li>
        <li>
          Pas un compte bancaire au sens FDIC — c&apos;est un{" "}
          <em>e-money account</em>. Tes fonds sont conservés en
          ségrégation chez des banques partenaires (BarclaysGB,
          JPMorganUS, etc.).
        </li>
        <li>
          Plans actuels : Free + payez-par-transaction, ou plans
          payants à partir de ~50 USD setup fee + 5-30 USD/mois.
        </li>
      </ul>

      <h2>Wise Business est-il disponible pour résidents tunisiens
      (mai 2026) ?</h2>
      <p>
        <strong>Réponse courte : OUI, mais avec restrictions
        importantes.</strong>
      </p>
      <ul>
        <li>
          Tunisie figure dans la liste des pays où Wise Business
          accepte les applications. Vérifie sur <code>wise.com/help</code>{" "}
          → &laquo; Country availability &raquo;.
        </li>
        <li>
          <strong>Limitations clés en 2026</strong> :
          <ul>
            <li>
              Tu ne peux pas recevoir de USD <em>directement sur
              Wise depuis un client US</em> via ACH si ton entity est
              tunisienne. Wise vérifie l&apos;adresse business — si
              elle est en TN, USD inbound est limité.
            </li>
            <li>
              Tu peux recevoir en EUR / GBP / autres devises non-USD
              sans problème.
            </li>
            <li>
              Pour recevoir USD : ton entity doit avoir une adresse
              <strong> non-TN</strong> — soit US (LLC), soit UK
              (Ltd), soit EU.
            </li>
            <li>
              Wise Business pour SARL tunisienne avec adresse TN =
              compte EUR/GBP utilisable, USD bloqué.
            </li>
            <li>
              Wise Business pour LLC US avec adresse 5062 Lankershim
              = USD inbound fonctionne normalement.
            </li>
          </ul>
        </li>
      </ul>

      <h2>3 voies d&apos;utiliser Wise Business comme fondateur
      tunisien</h2>

      <h3>Voie 1 — Wise Business pour SARL Tunisienne (EUR/GBP only)</h3>
      <ul>
        <li>
          <strong>Setup</strong> : SARL TN existante, RCS extrait,
          matricule fiscal. Wise demande KYC business + identity
          owner.
        </li>
        <li>
          <strong>Approval</strong> : 1-3 semaines. ~60-70% des SARL
          TN passent KYC.
        </li>
        <li>
          <strong>Fonctionnel pour</strong> : recevoir paiements
          clients EU/UK en EUR/GBP. Convertir en TND via wire BCT
          ensuite (avec déclaration BCT 10-day window respectée).
        </li>
        <li>
          <strong>Non-fonctionnel pour</strong> : recevoir USD US
          (Stripe payouts US, AdSense US, Etsy US, Amazon US). Ces
          flows nécessitent ta LLC US, pas Wise SARL.
        </li>
        <li>
          <strong>Frais</strong> : 0.4-0.6% conversion EUR→TND vs
          BCT 1.5-3% taux banque tunisienne. Gain typique : 1-2.5%
          par transaction.
        </li>
      </ul>

      <h3>Voie 2 — Wise Business pour LLC US (compatible USD)</h3>
      <ul>
        <li>
          <strong>Setup</strong> : LLC US active, EIN, adresse US,
          Owner non-US person (toi). Wise demande Articles, EIN
          letter, Operating Agreement, beneficial owner verification.
        </li>
        <li>
          <strong>Approval</strong> : 1-2 semaines typique. Taux
          d&apos;approval pour LLC US owned by Tunisian : ~60-75%
          (similaire à Mercury, légèrement moins).
        </li>
        <li>
          <strong>Fonctionnel pour</strong> : recevoir USD inbound
          (Stripe, Etsy, etc.), convertir multi-devises, payer
          fournisseurs internationaux.
        </li>
        <li>
          <strong>Frais</strong> : reception USD gratuite si via ACH.
          Conversion USD→TND directe via Wise vers une banque
          tunisienne, ~0.4% + petite marge FX. Bien meilleur que
          Mercury → wire → BCT.
        </li>
      </ul>

      <h3>Voie 3 — Wise Personal pour résident tunisien (fallback)</h3>
      <ul>
        <li>
          <strong>Setup</strong> : juste ton CIN tunisienne, sans
          entity. Wise Personal accepte résidents tunisiens.
        </li>
        <li>
          <strong>Limitations</strong> : pas d&apos;ACH US directe.
          Tu peux recevoir USD via wire international (cher pour ton
          payeur) ou via Payoneer linked.
        </li>
        <li>
          <strong>Usage typique</strong> : freelance qui reçoit
          quelques 100-500 USD/mois de clients via Wise wire. Pas
          scalable au-delà.
        </li>
      </ul>

      <h2>Wise Business vs Mercury — comparaison directe pour
      fondateur tunisien</h2>
      <ul>
        <li>
          <strong>Onboarding</strong> : Mercury demande plus de
          documentation business (business plan, revenue model).
          Wise plus léger sur business plan, plus strict sur owner
          identity verification.
        </li>
        <li>
          <strong>Taux d&apos;approval LLC US owned by TN
          person</strong> : Mercury ~65-75%, Wise ~60-75%. Similaire.
        </li>
        <li>
          <strong>USD ACH inbound</strong> : Mercury et Wise tous
          deux fonctionnels avec LLC US.
        </li>
        <li>
          <strong>Stripe integration</strong> : Mercury préféré par
          Stripe (algo voit Mercury favorablement). Wise accepté
          mais signal Stripe légèrement moins fort.
        </li>
        <li>
          <strong>Conversion vers TND</strong> : <em>Wise gagne ici</em>{" "}
          — 0.4-0.6% Wise vs 1-2% Mercury wire + spread BCT bank.
          Sur 50K USD/an, économie ~750 USD avec Wise.
        </li>
        <li>
          <strong>Multi-devises</strong> : Wise wins — EUR, GBP, AUD,
          CAD locales natives. Mercury USD only (peut faire wire
          international mais pas natif EUR account).
        </li>
        <li>
          <strong>Stabilité business</strong> : Mercury 6+ ans, plus
          stable on perception. Wise 13+ ans (TransferWise depuis
          2011) mais a fermé des comptes MENA en 2023-2024.
        </li>
        <li>
          <strong>Carte debit</strong> : Mercury offre debit
          Mastercard immédiat. Wise propose la Wise Card (limité
          dans certains pays, vérifier disponibilité TN bénéficiaire).
        </li>
        <li>
          <strong>Frais mensuels</strong> : Mercury gratuit (pas de
          minimum). Wise Business gratuit Plan Free (0 fee monthly,
          pay-per-transaction).
        </li>
      </ul>

      <h2>Le combo optimal pour un fondateur tunisien actif</h2>
      <p>
        On voit chez nos clients NOHO un combo gagnant qui devient
        standard en 2026 :
      </p>
      <ul>
        <li>
          <strong>Mercury (LLC US)</strong> = compte principal,
          receveur Stripe payouts, working capital. Trésorerie
          Treasury yield ~4-5% APY.
        </li>
        <li>
          <strong>Wise Business (LLC US)</strong> = compte secondaire,
          spécialement pour <em>conversion vers TND</em>. Tu wire
          depuis Mercury → Wise (free or low fee), puis Wise →
          banque tunisienne (0.4% + spread minimal).
        </li>
        <li>
          <strong>BCT PPR USD (TN bank)</strong> = compte résident
          en devise, accumulation USD locale, sans repatriation TND
          forcée. Post-déc 2025.
        </li>
      </ul>
      <p>
        Cette stack à 3 piliers couvre : USD inbound (Mercury) →
        conversion économique (Wise) → réserve locale (BCT PPR USD).
        Chaque pièce fait sa job, aucune ne te bloque.
      </p>

      <h2>Cas où Wise SEUL suffit (sans Mercury)</h2>
      <ul>
        <li>
          <strong>Tu vends en EUR/GBP majoritairement</strong>{" "}
          (clients UK, France, Allemagne). Mercury USD-only te limite.
          Wise EUR/GBP local = parfait fit.
        </li>
        <li>
          <strong>Tu n&apos;as pas encore besoin de Stripe US</strong>{" "}
          (tu factures en B2B, wire/bank transfer suffit). Mercury
          moins prioritaire.
        </li>
        <li>
          <strong>Ton SARL TN suffit pour ton activité</strong>{" "}
          (clients EU only, pas de besoin LLC US). Wise pour SARL
          TN (Voie 1) suffit.
        </li>
      </ul>

      <h2>Cas où Wise NE SUFFIT PAS (Mercury indispensable)</h2>
      <ul>
        <li>
          <strong>Tu utilises Stripe US</strong> et tu reçois &gt; 5K
          USD/mois. Stripe préfère Mercury — risk algo voit Mercury
          plus favorablement.
        </li>
        <li>
          <strong>Tu vends sur Amazon Seller Central US</strong>{" "}
          (deposit method US bank requis — Mercury reconnu).
        </li>
        <li>
          <strong>Tu veux carte debit Mastercard US au nom de la
          LLC</strong> immédiate, pour payer fournisseurs US,
          subscriptions SaaS, etc.
        </li>
        <li>
          <strong>Tu veux Treasury yield</strong> 4-5% APY sur 20K+
          USD de réserve. Wise n&apos;offre pas Treasury, Mercury
          oui.{" "}
          <Link href="/blog/mercury-treasury-vs-checking">
            Mercury Treasury vs Checking
          </Link>
          .
        </li>
      </ul>

      <h2>Les 4 pièges spécifiques Wise pour fondateur tunisien</h2>
      <ol>
        <li>
          <strong>Refus initial parce que &laquo; adresse business
          TN &raquo;</strong>. Si tu ouvres pour SARL TN, USD blocked
          côté inbound. Solution : ouvre Wise pour LLC US (adresse
          5062 Lankershim).
        </li>
        <li>
          <strong>Fermeture mid-activity</strong>. Wise a fermé des
          comptes MENA en 2023-2024 sans préavis (similaire à
          Mercury). Garde Mercury en parallèle comme plan B. Ne dépend
          pas à 100% de Wise.
        </li>
        <li>
          <strong>Card Wise non-disponible Tunisie</strong>. La
          Wise Multi-Currency Card n&apos;est PAS disponible pour
          résidents tunisiens en 2026. Si tu veux une carte debit,
          c&apos;est Mercury debit (LLC US) ou cartes tunisiennes
          locales.
        </li>
        <li>
          <strong>USD ACH limit haute pour nouveau compte</strong>.
          Wise impose des limites de transactions étendues (~10K
          USD/transaction au début), qui s&apos;accroissent avec
          historique. Pas blocant mais à anticiper pour large
          inbound.
        </li>
      </ol>

      <h2>Coûts complets Year 1 — Wise Business pour LLC US TN
      owner</h2>
      <ul>
        <li>
          Setup : gratuit (~$1 vérif card setup).
        </li>
        <li>
          Mensuel : 0 USD (Free Plan suffit pour fondateur
          early-stage).
        </li>
        <li>
          Conversion fee : 0.4-0.6% par transaction (Mid-market rate +
          markup transparent).
        </li>
        <li>
          USD reception via ACH : gratuit.
        </li>
        <li>
          Card Mastercard (si éligible géographiquement) : 9 USD
          one-time issuance.
        </li>
        <li>
          <strong>Total Y1 typique</strong> : ~50-150 USD selon
          volume de conversion.
        </li>
      </ul>

      <h2>Comment ouvrir Wise Business pour ta LLC US — étape par
      étape</h2>
      <ol>
        <li>
          <code>wise.com/business</code> → &laquo; Open a
          business account &raquo;.
        </li>
        <li>
          Sélectionne <strong>United States</strong> comme pays de
          ton entity (pas Tunisie).
        </li>
        <li>
          Entity type : <strong>LLC</strong>.
        </li>
        <li>
          Entre EIN de la LLC, nom légal exact (comme sur Articles
          of Organization).
        </li>
        <li>
          Upload Articles of Organization (PDF Wyoming SoS stamped).
        </li>
        <li>
          Upload Operating Agreement signé.
        </li>
        <li>
          Identity verification owner : ton passport tunisien +
          selfie.
        </li>
        <li>
          Proof of address : ton adresse Tunisie (utility, bank
          statement). Wise comprend que tu es non-US person owner de
          LLC US — c&apos;est leur cas type.
        </li>
        <li>
          Source of funds : explication d&apos;origine de tes fonds
          (revenus business existants, capital initial, etc.).
        </li>
        <li>
          Attends 1-3 semaines. Approval ou requête additional info.
        </li>
      </ol>

      <h2>Verdict honnête</h2>
      <p>
        Wise Business pour LLC US owned by TN person = excellent
        outil complémentaire à Mercury, pas remplacement. Le combo
        Mercury + Wise + BCT PPR USD est aujourd&apos;hui le
        meilleur stack bancaire pour un fondateur tunisien actif
        avec LLC US.
      </p>
      <p>
        Si tu débutes, ouvre Mercury en premier (priorité Stripe
        integration). Ajoute Wise au mois 3-6 quand tu commences à
        repatrier régulièrement vers Tunisie. Le coût d&apos;avoir
        les deux est marginal (Free Plans des deux côtés), et la
        redondance bancaire t&apos;assure contre une fermeture
        unilatérale.
      </p>

      <h2>CTA</h2>
      <p>
        Tu veux structurer ton stack bancaire Mercury + Wise + BCT
        PPR USD ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On analyse ton
        volume mensuel attendu, tes pays clients, ton besoin de
        repatriation, et on dessine le stack optimal — ce qui
        économise le plus et reste robuste si une banque ferme.
      </p>
    </>
  );
}
