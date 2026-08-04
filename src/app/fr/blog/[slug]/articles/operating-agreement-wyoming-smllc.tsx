import Link from "next/link";

export function operatingAgreementWyoming() {
  return (
    <>
      <p>
        L&apos;Operating Agreement est le document de gouvernance interne
        d&apos;une LLC. Wyoming ne l&apos;exige pas formellement pour le
        filing initial (contrairement au Delaware), mais{" "}
        <strong>Mercury, Stripe, Wise, et les autorités fiscales le
        demandent systématiquement</strong>. Pour une SMLLC tunisienne,
        voici exactement ce qu&apos;il doit contenir, et les pièges à
        éviter.
      </p>

      <h2>Pourquoi tu en as besoin même si Wyoming ne l&apos;exige pas</h2>
      <ul>
        <li>
          <strong>Banking</strong> : Mercury, Relay, Wise Business
          réclament le document signé lors de l&apos;onboarding. Sans
          Operating Agreement, ton dossier est en attente jusqu&apos;à
          ce que tu en produises un.
        </li>
        <li>
          <strong>Payment processors</strong> : Stripe, PayPal Business
          peuvent demander en cas de verification renforcée.
        </li>
        <li>
          <strong>Disputes futures</strong> : si tu ajoutes un cofondateur
          plus tard, sans OA initial, tu seras en mode improvisation
          juridique. Le document existant te protège.
        </li>
        <li>
          <strong>Asset protection</strong> : c&apos;est l&apos;OA qui
          documente la séparation entre toi (person physique) et ta LLC
          (entity juridique). Sans, le veil-piercing risk augmente en
          litigation.
        </li>
      </ul>

      <h2>Les 12 sections obligatoires pour une SMLLC tunisienne</h2>

      <h3>1. Article I — Formation</h3>
      <ul>
        <li>Nom légal exact de la LLC (matching Articles of Organization).</li>
        <li>Date de formation (matching SoS filing).</li>
        <li>État de formation (Wyoming).</li>
        <li>Adresse du registered office (chez ton registered agent, pas chez NOHO).</li>
        <li>Adresse principale du business (5062 Lankershim chez NOHO pour les clients NOHO).</li>
      </ul>

      <h3>2. Article II — Purpose</h3>
      <ul>
        <li>Description courte et large du business purpose.</li>
        <li>Exemple : &quot;The Company is formed to engage in any
          lawful business activity for which limited liability companies
          may be organized under the laws of the State of Wyoming.&quot;</li>
        <li>Pas besoin de détailler. Trop spécifique = problème quand
          tu pivotes.</li>
      </ul>

      <h3>3. Article III — Member</h3>
      <ul>
        <li>Ton nom légal complet (matching passeport et autres docs).</li>
        <li>Ton adresse résidentielle en Tunisie (pas chez NOHO).</li>
        <li>Ton statut : &quot;Sole Member, 100% ownership&quot;.</li>
        <li>Date d&apos;adhésion (= date de formation typiquement).</li>
      </ul>

      <h3>4. Article IV — Management</h3>
      <ul>
        <li>Spécifier &quot;Member-managed&quot; (vs Manager-managed).</li>
        <li>Pour une SMLLC tunisienne standard : Member-managed = tu
          es le seul à diriger.</li>
        <li>Manager-managed n&apos;est utile que si tu veux qu&apos;un
          tiers (employé US, advisor) ait des powers de gestion sans être
          owner.</li>
      </ul>

      <h3>5. Article V — Capital Contributions</h3>
      <ul>
        <li>Montant initial apporté à la LLC (peut être symbolique :
          100 USD).</li>
        <li>Date de l&apos;apport.</li>
        <li>Forme : cash, services, IP. Pour simplicité : cash.</li>
        <li>Provision pour additional contributions (typiquement : at
          Member&apos;s discretion).</li>
      </ul>

      <h3>6. Article VI — Distributions</h3>
      <ul>
        <li>Comment les profits/pertes sont alloués au Member.</li>
        <li>Pour SMLLC : 100% au Member.</li>
        <li>Méthode de distribution : à la discrétion du Member,
          mensuelle/trimestrielle/annuelle.</li>
        <li>Pour clarité fiscale TN : mentionner que les distributions
          ne sont PAS des salaires, mais des owner draws.</li>
      </ul>

      <h3>7. Article VII — Tax Matters</h3>
      <ul>
        <li>Election fiscale par défaut : &quot;disregarded entity&quot;
          pour fed tax purposes (LLC pass-through).</li>
        <li>Tax Matters Partner : le Member (toi).</li>
        <li>Statement that Member is non-US person (important pour
          documentation IRS).</li>
        <li>Référence à l&apos;EIN obtenu.</li>
      </ul>

      <h3>8. Article VIII — Banking and Financial Accounts</h3>
      <ul>
        <li>Autorisation au Member d&apos;ouvrir et gérer des comptes
          bancaires au nom de la LLC.</li>
        <li>Mention que la LLC opérera des comptes US et potentiellement
          internationaux.</li>
        <li>Cette section spécifique aide pour l&apos;onboarding Mercury
          / Relay.</li>
      </ul>

      <h3>9. Article IX — Records and Reports</h3>
      <ul>
        <li>Lieu où les records sont gardés (typiquement adresse
          principale = NOHO 5062 Lankershim ou ton bureau Tunis).</li>
        <li>Engagement à maintenir comptabilité simple en bonne et due
          forme.</li>
        <li>Mentionner l&apos;obligation Form 5472 + 1120 annuelle.</li>
      </ul>

      <h3>10. Article X — Transferability</h3>
      <ul>
        <li>Conditions de transfert de l&apos;intérêt du Member.</li>
        <li>Pour SMLLC : Member peut transférer librement (mais alors
          la LLC devient multi-member et l&apos;OA doit être amendé).</li>
        <li>Mention que le transfert ne dissout pas la LLC
          automatiquement.</li>
      </ul>

      <h3>11. Article XI — Dissolution</h3>
      <ul>
        <li>Conditions de dissolution : décision du Member, ordre
          judiciaire, autres.</li>
        <li>Procédure : winding-up, paiement créanciers, distribution
          du restant au Member.</li>
        <li>Statement que la LLC continue tant que le Member n&apos;a
          pas dissout volontairement.</li>
      </ul>

      <h3>12. Article XII — Miscellaneous</h3>
      <ul>
        <li>Governing law : Wyoming.</li>
        <li>Severability clause (si une section invalide, le reste
          tient).</li>
        <li>Amendment clause (comment modifier l&apos;OA — typiquement
          Member&apos;s decision pour SMLLC).</li>
        <li>Counterparts clause (pour signature électronique si
          plusieurs Members).</li>
      </ul>

      <h2>Signature et notarisation</h2>
      <ul>
        <li>Pour Wyoming : <strong>pas de notarisation obligatoire</strong>.
          Signature simple suffit.</li>
        <li>Date de signature claire (jour exact, pas juste l&apos;année).</li>
        <li>Tu signes en tant que &quot;Member, [Your Name]&quot; — pas
          en tant qu&apos;individu lambda.</li>
        <li>Stocke l&apos;OA signé en PDF + en physique. Mercury demande
          le PDF; un audit IRS futur demanderait le physique.</li>
      </ul>

      <h2>Les pièges les plus fréquents</h2>
      <ul>
        <li>
          <strong>OA générique copié d&apos;internet</strong>. La plupart
          des templates en ligne sont écrits pour US persons, avec
          références à un SSN. Pour SMLLC tunisienne, tu dois adapter
          (référence ITIN ou statement that Member is foreign person).
        </li>
        <li>
          <strong>Nom du Member différent de celui des Articles ou de
          l&apos;EIN</strong>. Mercury cross-check. Une virgule de
          différence = manual review.
        </li>
        <li>
          <strong>Pas d&apos;adresse résidentielle TN mentionnée</strong>.
          Si l&apos;OA n&apos;a que l&apos;adresse business US, Mercury
          ne peut pas vérifier que tu es bien la même personne que dans
          les docs ID. Mentionne ton adresse Tunis.
        </li>
        <li>
          <strong>Article VII oublie de spécifier disregarded
          entity</strong>. Sans ça, IRS pourrait considérer la LLC comme
          partnership ou corporation par défaut, déclenchant des
          obligations différentes.
        </li>
        <li>
          <strong>Article VIII trop restrictif</strong>. Certains
          templates limitent l&apos;ouverture de comptes à une banque
          spécifique. Garde-le large.
        </li>
      </ul>

      <h2>Quand tu dois amender l&apos;OA</h2>
      <ul>
        <li>Ajout d&apos;un cofondateur (passage SMLLC → MMLLC).</li>
        <li>Election fiscale différente (S-Corp election via Form 2553,
          ou C-Corp election via Form 8832).</li>
        <li>Changement d&apos;adresse business significatif.</li>
        <li>Changement du Member (mariage avec changement de nom,
          succession après décès).</li>
        <li>Apport de capital significatif (&gt; 10K USD) qui change
          la base fiscale.</li>
      </ul>

      <h2>Comment NOHO le gère</h2>
      <p>
        La Solution Business inclut le draftage de l&apos;Operating
        Agreement adapté à ton profil tunisien (langue anglaise +
        références TN appropriées + non-US person statement clair). Tu
        reçois le PDF prêt à signer dans les 5-7 jours après formation.
        Si tu changes de structure plus tard (ajout cofondateur, S-Corp
        election), le Suivi mensuel inclut le re-draftage et la
        coordination signature.
      </p>
      <p>
        Si tu veux faire ton OA toi-même, voici un{" "}
        <Link href="/fr/outils/templates" className="font-bold underline" style={{ color: "#337485" }}>
          template gratuit Wyoming SMLLC pour fondateur tunisien
        </Link>{" "}
        (en cours de finalisation par notre équipe juridique). En
        attendant, le code source legal de Wyoming Chapter 17-29 reste
        accessible librement.
      </p>
    </>
  );
}
