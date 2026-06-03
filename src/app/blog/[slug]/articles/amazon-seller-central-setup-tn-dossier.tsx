import Link from "next/link";

export function amazonSellerCentralSetupTnDossier() {
  return (
    <>
      <p>
        Tu veux vendre sur Amazon US depuis la Tunisie. La bonne
        nouvelle : Amazon Seller Central US accepte officiellement les
        vendeurs internationaux. La moins bonne : le dossier KYC est
        le plus strict des marketplaces majeurs en 2026. Voici la
        procédure complète, document par document, pour un fondateur
        tunisien typique — avec les 6 pièges les plus fréquents qui
        font rejeter.
      </p>

      <h2>Pré-requis avant même de cliquer Register</h2>
      <ul>
        <li>
          <strong>LLC US active</strong> (Wyoming/Delaware/NM
          recommandé). Pas de SARL Tunisie possible — Amazon refuse
          les entités non-US comme &laquo; merchant of record &raquo;.
        </li>
        <li>
          <strong>EIN auprès de l&apos;IRS</strong>. Obtenu via fax
          SS-4 si tu n&apos;as pas de SSN/ITIN.{" "}
          <Link href="/blog/itin-w7-vs-caa-fondateur-tunisien">
            Voie ITIN
          </Link>{" "}
          si tu veux accélérer.
        </li>
        <li>
          <strong>Compte bancaire US au nom de la LLC</strong>{" "}
          (Mercury / Relay / Wise Business / Brex). Sans ça,
          Amazon ne peut pas te payer. Mercury &gt; 70% de nos
          dossiers.
        </li>
        <li>
          <strong>Carte de crédit US ou international au nom du
          beneficial owner</strong>. Amazon Charge Method pour
          subscription fees (39.99 USD/mois Professional). Carte
          Mercury debit fonctionne souvent. Carte tunisienne
          internationale aussi possible mais souvent rejetée.
        </li>
        <li>
          <strong>Adresse US business officielle</strong>. NOHO 5062
          Lankershim Blvd fonctionne. PMB-style (UPS Store, iPostal1)
          souvent flag.
        </li>
        <li>
          <strong>Téléphone US</strong>. Google Voice OK pour SMS
          verification. Numéro tunisien parfois accepté en backup.
        </li>
      </ul>

      <h2>Étape 1 — Création du compte Seller Central</h2>
      <ol>
        <li>
          Va sur <code>sellercentral.amazon.com</code>. Click &laquo;
          Sign Up &raquo;.
        </li>
        <li>
          Choisis <strong>Professional plan (39.99 USD/mois)</strong>{" "}
          ou Individual (0.99 USD/item, max ~40 items/mois). Pour
          tester sub-40 items/mois, Individual OK. Au-delà,
          Professional s&apos;impose.
        </li>
        <li>
          Sélectionne ton marketplace : <strong>United States
          (amazon.com)</strong>. Tu peux ajouter d&apos;autres
          marketplaces (CA, MX, EU) plus tard. Pour fondateur
          tunisien typique, démarrer US-only simplifie.
        </li>
        <li>
          Entre l&apos;email business (idéalement{" "}
          <code>hello@tondomaine.com</code>, pas Gmail
          personnel — augmente trust score).
        </li>
        <li>
          Entre numéro de téléphone, reçois le SMS de vérification.
        </li>
      </ol>

      <h2>Étape 2 — Tax information</h2>
      <p>
        Amazon te fait passer le &laquo; tax interview &raquo;. C&apos;est
        ici que beaucoup de fondateurs tunisiens se trompent.
      </p>
      <ul>
        <li>
          <strong>Type of entity</strong> : choisis &laquo; LLC &raquo;.
        </li>
        <li>
          <strong>Tax classification</strong> : pour SMLLC avec
          owner non-US, choisis <strong>&laquo; Disregarded entity
          owned by a foreign person &raquo;</strong>. PAS &laquo;
          Disregarded entity owned by a US individual &raquo;.
        </li>
        <li>
          <strong>Beneficial owner</strong> : <em>toi</em> en tant
          que personne physique tunisienne.
        </li>
        <li>
          <strong>Tax form</strong> : Amazon te génère un{" "}
          <strong>W-8BEN</strong> à signer (pas W-8BEN-E — c&apos;est
          pour entité, et le SMLLC disregarded a la personne physique
          comme beneficial owner).{" "}
          <Link href="/blog/form-w8ben-ligne-par-ligne">
            Lignes par ligne W-8BEN
          </Link>
          .
        </li>
        <li>
          <strong>Traité fiscal article</strong> : Tunisie-USA 1985.
          Article 7 (business profits) si tu n&apos;as pas de
          permanent establishment aux US. Coche cette case.
        </li>
        <li>
          <strong>Tax ID number</strong> : ton ITIN tunisien (matricule
          fiscal tunisien — appelé FTIN). Amazon accepte le numéro
          tunisien. Si tu n&apos;as pas de matricule fiscal TN
          enregistré, c&apos;est blocking — obtiens-le auprès du
          centre fiscal Tunis avant.
        </li>
        <li>
          <strong>EIN ne va PAS dans Beneficial Owner Tax ID</strong>{" "}
          (c&apos;est ta personne, pas la LLC). L&apos;EIN va dans
          Entity Section comme Tax ID de la LLC séparément.
        </li>
      </ul>

      <h2>Étape 3 — Identity Verification (le piège n°1)</h2>
      <p>
        Amazon vérifie ton identité via le sous-traitant
        <strong> Onfido / Persona</strong> ou direct upload. Le
        dossier doit être <em>parfaitement aligné</em> partout —
        moindre divergence et rejet automatique.
      </p>
      <h3>Documents requis</h3>
      <ul>
        <li>
          <strong>Passport tunisien</strong> (haute résolution,
          couleur, page photo entière sans flash).
        </li>
        <li>
          <strong>Selfie pour vérification biométrique</strong>{" "}
          (Persona/Onfido). Lumière naturelle, fond uni.
        </li>
        <li>
          <strong>Proof of address</strong> en Tunisie : facture
          électricité STEG / SONEDE / Tunisie Telecom &lt; 90 jours,
          OU relevé bancaire BIAT/Attijari &lt; 90 jours, OU bail
          enregistré.
        </li>
        <li>
          <strong>Articles of Organization de la LLC</strong> (PDF
          stamped Wyoming SoS).
        </li>
        <li>
          <strong>EIN letter CP 575</strong> (ou substitute 147-C si
          tu l&apos;as perdu).
        </li>
        <li>
          <strong>Bank statement US</strong> de la LLC (Mercury
          dernier mois). Doit montrer le nom de la LLC + adresse 5062
          Lankershim.
        </li>
      </ul>

      <h2>Étape 4 — Charge method + deposit method</h2>
      <ul>
        <li>
          <strong>Charge method</strong> : carte qui paie le 39.99
          USD/mois. Carte Mercury debit recommandée (au nom de la
          LLC). Carte tunisienne internationale peut fonctionner mais
          50% des dossiers se font flag pour &laquo; payment method
          country mismatch &raquo;.
        </li>
        <li>
          <strong>Deposit method</strong> : compte US Mercury (ou
          Relay, Wise Business). Amazon ne paie pas vers Payoneer
          standalone — Payoneer doit être lié à un compte US bank
          réel.
        </li>
        <li>
          <strong>Currency</strong> : USD direct. Amazon convertit
          ses fees pareil, mais payouts arrivent en USD. À toi de
          décider si tu repatris en TND via TN PPR USD post-déc 2025.
        </li>
      </ul>

      <h2>Étape 5 — Verification call (parfois)</h2>
      <p>
        Amazon peut demander un appel video Zoom 30 min avec un
        agent verification. Pas systématique mais ~30% des dossiers
        non-US person passent par là. Préparation :
      </p>
      <ul>
        <li>
          Sois en bureau / espace pro, lumière correcte.
        </li>
        <li>
          Documents originaux à portée de main pour show-and-tell si
          demandé.
        </li>
        <li>
          Anglais business courant requis. Si tu n&apos;es pas
          confortable, l&apos;agent peut basculer en français selon
          disponibilité (rare).
        </li>
        <li>
          Questions typiques : qui est l&apos;owner de la LLC ?
          quelles sont tes activités ? quel volume vises-tu mois 1, 6,
          12 ? quels produits ? as-tu déjà vendu en ligne avant ?
        </li>
      </ul>

      <h2>Étape 6 — Approval ou Manual Review</h2>
      <ul>
        <li>
          <strong>Approval automatique</strong> : ~40% des dossiers
          TN. Tu reçois email &laquo; Your Amazon seller account is
          active &raquo; sous 24-72h.
        </li>
        <li>
          <strong>Manual Review</strong> : ~50% des dossiers TN. Tu
          reçois &laquo; Additional information needed &raquo; — Amazon
          demande 1-3 documents complémentaires (bank statement plus
          récent, lease/utility, business plan). Délai +14 à +30
          jours.
        </li>
        <li>
          <strong>Refus</strong> : ~10% des dossiers TN. Souvent :
          docs incohérents, beneficial owner pas clair, ou Amazon a
          flag le profil pays. Tu peux re-essayer avec dossier
          renforcé mais 2e essai compliqué.
        </li>
      </ul>

      <h2>Les 6 pièges les plus fréquents</h2>
      <ol>
        <li>
          <strong>W-8BEN-E au lieu de W-8BEN</strong>. SMLLC
          disregarded = beneficial owner est la personne physique
          tunisienne, donc W-8BEN. Mettre W-8BEN-E = signal LLC
          opaque = potentiel manual review prolongé + retenue 30% qui
          ne sera pas remboursable.
        </li>
        <li>
          <strong>Adresse différente entre passeport et utility
          bill</strong>. Amazon compare. Si ton passeport dit &laquo;
          Sfax centre &raquo; et ton utility &laquo; Tunis La Marsa
          &raquo;, manual review. Solution : passport renewal avec
          adresse alignée OU utility avec adresse alignée OU lettre
          KHIARI attestation domicile.
        </li>
        <li>
          <strong>EIN dans Beneficial Owner Tax ID</strong>. EIN est
          le numéro de la LLC, pas de toi. Le beneficial owner tax ID
          est ton matricule fiscal tunisien (FTIN). Confondre les
          deux = signal red flag.
        </li>
        <li>
          <strong>Carte tunisienne pour Charge Method + adresse US
          pour deposit method</strong>. Country mismatch. Amazon
          flag. Solution : carte Mercury debit au nom de la LLC pour
          tout.
        </li>
        <li>
          <strong>Email Gmail personnel</strong>. Trust score
          inférieur. Solution : email pro@tondomaine.com via Google
          Workspace ou Microsoft 365 (~12 USD/mois). Investissement
          minime, gain énorme.
        </li>
        <li>
          <strong>Tax interview rushé sans lire</strong>. Erreur sur
          un seul dropdown = blocage de 6 mois si Amazon refuse. Lis
          chaque écran 3 fois avant de cliquer Next.
        </li>
      </ol>

      <h2>Après approval — premiers produits</h2>
      <ul>
        <li>
          <strong>Choisis ta category</strong>. Certaines sont
          gated : Watches, Beauty, Grocery, Health, Wine, Pet supplies
          require Amazon approval. Sub-2K USD revenus = pas blocage,
          mais documents pré-approval. Commence par une category
          non-gated (Home, Office, Tools, Books, Pet basics).
        </li>
        <li>
          <strong>FBA vs FBM</strong> : FBA (Fulfilled by Amazon) =
          tu envoies l&apos;inventory à un fulfillment center Amazon,
          ils stockent + ship. FBM (Fulfilled by Merchant) = tu
          shippe toi-même depuis Tunisie ou storefront US.
        </li>
        <li>
          Pour Tunisien démarrant, <strong>FBA est presque toujours
          la bonne réponse</strong> — shipping Tunisie → client US
          via toi est trop lent (15-25 jours) et trop cher. FBA =
          fulfilled depuis warehouse US, livraison 1-2 jours.
        </li>
        <li>
          Bulk-ship inventaire Tunisie → Amazon FBA US via 3PL
          intermédiaire (ShipBob, Easyship, FBA prep service). Coût
          variable selon volume.{" "}
          <Link href="/blog/cas-pratique-ecom-tunisien-annee-1">
            Cas pratique Karim
          </Link>{" "}
          détaille les chiffres.
        </li>
      </ul>

      <h2>Sales tax — la responsabilité après Wayfair 2018</h2>
      <p>
        Amazon collecte sales tax automatiquement comme marketplace
        facilitator dans 45+ états US. Bonne nouvelle : tu n&apos;as
        pas à le faire manuellement.
      </p>
      <p>
        Mais tu dois quand même <strong>déposer un return zéro</strong>{" "}
        dans certains états (Washington, Pennsylvania, Texas) si tu
        as nexus économique. Coût admin ~50-150 USD/an si tu fais
        via TaxJar ou Avalara.{" "}
        <Link href="/blog/sales-tax-nexus-us-par-etat">
          Détails sales tax nexus
        </Link>
        .
      </p>

      <h2>Form 1099-K émis par Amazon</h2>
      <ul>
        <li>
          Amazon émet un Form 1099-K en janvier pour l&apos;année
          précédente si tu as fait &gt; 600 USD de payouts US.
        </li>
        <li>
          Le 1099-K va à l&apos;IRS avec ton EIN de LLC. Tu dois
          déclarer ces revenus dans ton Form 5472 + 1120 pro-forma
          annuel.{" "}
          <Link href="/blog/form-5472-self-filing-etape-par-etape">
            Form 5472 self-filing
          </Link>
          .
        </li>
        <li>
          Pour ta déclaration tunisienne : ces revenus comptent
          comme revenus de source étrangère. Article 36 du Code
          IRPP TN si tu as payé tax US (mais en SMLLC pass-through,
          tu n&apos;as pas de tax US au niveau LLC). Référé à
          KHIARI / comptable TN.
        </li>
      </ul>

      <h2>Timeline complet J+0 à J+90</h2>
      <ul>
        <li>
          <strong>J+0</strong> : tu cliques Register sur Seller
          Central.
        </li>
        <li>
          <strong>J+1 à J+3</strong> : tax interview + identity
          verification soumis.
        </li>
        <li>
          <strong>J+3 à J+10</strong> : approval automatique (40%
          des cas) OU additional info request (50%) OU refus (10%).
        </li>
        <li>
          <strong>J+10 à J+30</strong> : si additional info, tu
          uploades les docs supplémentaires. Délai 7-21 jours.
        </li>
        <li>
          <strong>J+30 à J+45</strong> : approval finale ou
          verification call.
        </li>
        <li>
          <strong>J+45 à J+60</strong> : tu listes tes premiers
          produits + envoie inventory FBA.
        </li>
        <li>
          <strong>J+60 à J+90</strong> : tes produits arrivent au
          warehouse Amazon US, deviennent buyable, premières ventes.
        </li>
      </ul>

      <h2>Quand NOHO te référence à un partenaire spécialisé</h2>
      <p>
        Amazon Seller Central setup pour TN founder est un domaine
        spécialisé. NOHO :
      </p>
      <ul>
        <li>
          <strong>Fait</strong> : formation LLC, EIN, Mercury,
          adresse US, brand. Tout le pré-requis avant le compte
          Amazon.
        </li>
        <li>
          <strong>Fait avec partenaire</strong> : préparation du
          dossier KYC Amazon (revue tax interview, alignement
          documents, anticipation manual review).
        </li>
        <li>
          <strong>Te réfère à</strong> : Amazon FBA consultant
          spécialisé (US-based, expérience MENA) pour la stratégie
          produit, sourcing, pricing, ads. Honoraires séparés (~150
          USD/heure ou 2 000-5 000 USD package).
        </li>
      </ul>

      <h2>Verdict honnête — Amazon est-il pour toi ?</h2>
      <p>
        Amazon US est <em>la</em> marketplace dominante (~40% des
        ventes e-com US, ~390B USD/an). Mais le setup pour fondateur
        tunisien est le plus exigeant des marketplaces.
      </p>
      <ul>
        <li>
          <strong>Recommandé si</strong> : tu vends physical
          products avec marge &gt; 30%, ton produit a une demande
          claire sur Amazon (research via Helium 10 / Jungle Scout),
          tu as 5-15K USD à investir dans inventaire initial.
        </li>
        <li>
          <strong>Pas recommandé si</strong> : tu vends digital /
          services (Etsy ou Shopify mieux), ton produit est niché
          (Etsy mieux), tu as &lt; 3K USD à investir (Amazon FBA
          minimums ne permettent pas).
        </li>
        <li>
          <strong>Alternative</strong> : Walmart Marketplace
          (similaire à Amazon, plus lent à approuver mais moins
          concurrentiel), Etsy (artisanal, plus permissive sur KYC),
          Shopify standalone (full control, pas de marketplace
          buyers).
        </li>
      </ul>

      <h2>CTA</h2>
      <p>
        Tu veux setup Amazon Seller Central depuis Tunis ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On regarde
        ensemble ton produit, ton inventaire initial, et on te
        prépare le dossier KYC + référence à un FBA consultant
        partenaire si tu veux scaler. Si Amazon n&apos;est pas pour
        toi, on te recommande l&apos;alternative la plus adaptée.
      </p>
    </>
  );
}
