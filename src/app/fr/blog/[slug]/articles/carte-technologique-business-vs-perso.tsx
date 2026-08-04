import Link from "next/link";

export function carteTechnologiqueBusiness() {
  return (
    <>
      <p>
        Beaucoup de fondateurs tunisiens connaissent la carte
        technologique &quot;personnelle&quot; à plafond 1 000 TND/an.
        Très peu connaissent qu&apos;une version business existe avec un
        plafond négociable jusqu&apos;à 10 000 TND/an. Voici la voie
        d&apos;accès, les conditions, et pourquoi ce n&apos;est toujours
        pas suffisant pour un vrai e-com ou SaaS — mais peut suffire
        pour des cas spécifiques.
      </p>

      <h2>Rappel — la carte technologique personnelle</h2>
      <ul>
        <li>
          Plafond <strong>1 000 TND/an</strong> (environ 320 USD).
        </li>
        <li>
          Réservée aux résidents tunisiens.
        </li>
        <li>
          Usage : paiement de services digitaux étrangers
          (hébergement, SaaS, certaines marketplaces).
        </li>
        <li>
          Réinitialisée chaque 1er janvier.
        </li>
        <li>
          Détails complets dans l&apos;article{" "}
          <Link href="/fr/blog/carte-technologique-tunisienne-plafond-1000-tnd" className="font-bold underline" style={{ color: "#337485" }}>
            Carte technologique 1 000 TND/an
          </Link>
          .
        </li>
      </ul>

      <h2>La version business — qui peut l&apos;obtenir</h2>
      <ul>
        <li>
          Autoentrepreneurs déclarés (régime AE).
        </li>
        <li>
          SARL et SUARL tunisiennes ayant déposé un bilan annuel.
        </li>
        <li>
          Sociétés exportatrices (statut FCR / exportateur certifié).
        </li>
        <li>
          Pas accessible aux particuliers ou freelances non-déclarés.
        </li>
      </ul>

      <h2>Le plafond — comment il est calculé</h2>
      <ul>
        <li>
          La BCT ne fixe pas un plafond unique. C&apos;est négocié avec
          ta banque selon ton chiffre d&apos;affaires déclaré.
        </li>
        <li>
          <strong>Règle empirique</strong> : ton plafond annuel ≈
          10-25% de ton CA déclaré, dans la limite de 10 000 TND/an pour
          la plupart des banques.
        </li>
        <li>
          Exemples observés (mai 2026) :
          <ul>
            <li>AE déclaré 20 000 TND/an de CA : carte business 2 000-5 000 TND/an</li>
            <li>SARL 80 000 TND/an de CA : carte business 8 000-10 000 TND/an</li>
            <li>Société exportatrice 200 000 TND/an : carte business 10 000+ TND/an, négociable</li>
          </ul>
        </li>
      </ul>

      <h2>Le dossier à présenter à ta banque</h2>
      <ol>
        <li>CIN + matricule fiscal de l&apos;entreprise.</li>
        <li>Extrait du Registre du Commerce de moins de 3 mois (sauf
          AE qui présente son attestation d&apos;inscription).</li>
        <li>Bilan ou états financiers du dernier exercice (sauf AE).</li>
        <li>Liste des fournisseurs étrangers que tu prévois de payer
          (Vercel, AWS, Notion, Figma, etc.) avec leurs invoices types.</li>
        <li>Justificatif d&apos;activité tech ou e-com (site web,
          contrat client US, etc.).</li>
        <li>Demande écrite formelle adressée à ta direction d&apos;agence
          précisant le plafond souhaité.</li>
      </ol>

      <h2>Délai d&apos;obtention</h2>
      <ul>
        <li>BIAT, Attijari, UIB : <strong>2-4 semaines</strong> après
          dossier complet.</li>
        <li>BNA, STB : <strong>3-6 semaines</strong>, plus de friction
          administrative.</li>
        <li>Renouvellement annuel automatique si tu n&apos;exceptes pas
          le plafond, ré-évaluation possible chaque année.</li>
      </ul>

      <h2>Ce que tu peux faire avec 10 000 TND/an de carte business</h2>
      <p>
        En 2026, un budget d&apos;outils SaaS minimum réaliste pour un
        opérateur tech ou e-com :
      </p>
      <ul>
        <li>Vercel Pro : 240 USD/an ≈ 750 TND</li>
        <li>Google Workspace : 72 USD/an ≈ 225 TND</li>
        <li>Domaine + email pro : 50 USD/an ≈ 155 TND</li>
        <li>Notion, Linear, Figma : ~30 USD/mois × 12 = 360 USD ≈ 1 120 TND</li>
        <li>AWS / hébergement : 600 USD/an ≈ 1 860 TND</li>
        <li>Outils marketing (Mailchimp, Ahrefs) : 1 200 USD/an ≈ 3 720 TND</li>
        <li>Adobe Creative Suite : 600 USD/an ≈ 1 860 TND</li>
        <li><strong>Total : ~9 700 TND/an</strong> — tu satures le
          plafond.</li>
      </ul>

      <h2>Ce que tu ne peux toujours PAS faire</h2>
      <ul>
        <li>Acheter Mercury / Relay / Stripe Atlas setup
          (configurations one-off &gt; 500 USD une fois = sortie d&apos;un
          coup).</li>
        <li>Payer un fournisseur US en facture &gt; 3 000 USD
          ponctuelle.</li>
        <li>Recevoir des paiements clients étrangers en USD (la carte
          tech est <strong>sortante</strong> uniquement, pas
          entrante).</li>
        <li>Verser des dividendes ou des compensations à des partners
          étrangers.</li>
      </ul>

      <h2>Quand la voie carte technologique business suffit</h2>
      <ul>
        <li>Tu es un freelance / agence dont tous les clients
          paient en TND ou en EUR via virement classique.</li>
        <li>Ton activité est principalement tunisienne avec quelques
          outils SaaS à acheter à l&apos;étranger.</li>
        <li>Tu ne vises pas l&apos;acceptation cartes en ligne (Stripe,
          Square) ni des paiements clients en USD.</li>
        <li>Ton CA est sous 50 000 TND/an et tu n&apos;as pas besoin
          de scaler.</li>
      </ul>

      <h2>Quand elle ne suffit plus, et la voie LLC US devient nécessaire</h2>
      <ul>
        <li>Tu veux <strong>recevoir</strong> des paiements clients en
          USD (Stripe, PayPal, marketplace US).</li>
        <li>Ton CA passe 50 000 TND/an et tes besoins SaaS explosent.</li>
        <li>Tu vises l&apos;export aux US (Amazon, Etsy, Shopify
          direct).</li>
        <li>Tu veux un domaine premium &gt; 500 USD ou un outil
          unique &gt; 1 000 USD/mois.</li>
        <li>Tu travailles avec des clients qui exigent invoices en
          USD via entité US (B2B SaaS).</li>
      </ul>

      <p>
        La carte technologique business est un complément utile pour les
        opérations TN-anchored. Pour les opérations qui cherchent une
        connection US bidirectionnelle (sortir <strong>et</strong>{" "}
        recevoir des USD), la LLC US + Mercury reste la voie principale.
        Beaucoup de fondateurs tunisiens utilisent les deux en parallèle
        : carte technologique business pour les SaaS quotidiens, LLC US
        pour les revenus clients US et les déploiements lourds.
      </p>

      <h2>La voie hybride recommandée</h2>
      <ol>
        <li>
          Ouvre carte technologique business via ton AE déclaré ou ta
          SARL (plafond 5 000-10 000 TND/an).
        </li>
        <li>
          Forme une{" "}
          <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
            LLC US Wyoming + Mercury
          </Link>{" "}
          pour les paiements clients US et SaaS &gt; carte limit.
        </li>
        <li>
          Ouvre un{" "}
          <Link href="/fr/blog/bct-decembre-2025-compte-usd-resident" className="font-bold underline" style={{ color: "#337485" }}>
            compte PPR USD résident
          </Link>{" "}
          chez BIAT pour conserver les USD rapatriés.
        </li>
        <li>
          Déclare le tout dans ta déclaration IRPP annuelle (article 6
          loi 91-25). NOHO n&apos;encourage pas la sous-déclaration.
        </li>
      </ol>
    </>
  );
}
