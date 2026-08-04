import Link from "next/link";

export function apostilleTnUs() {
  return (
    <>
      <p>
        Depuis le <strong>30 mars 2018</strong>, la Tunisie est partie à
        la Convention de La Haye du 5 octobre 1961 supprimant
        l&apos;exigence de légalisation. Concrètement : pour faire
        reconnaître un document tunisien aux USA (ou inversement), tu
        n&apos;as plus besoin de passer par le consulat — une simple{" "}
        <strong>apostille</strong> délivrée par le Ministère des
        Affaires Étrangères tunisien suffit.
      </p>

      <p>
        C&apos;est l&apos;une des raisons pour lesquelles on peut
        notariser un Form 1583 en Tunisie et le faire accepter par
        l&apos;USPS sans déplacement physique aux USA. Voici la
        procédure exacte.
      </p>

      <h2>Quels documents nécessitent une apostille</h2>
      <ul>
        <li>
          <strong>Form 1583 USPS</strong> notarisé en Tunisie (le cas
          le plus fréquent pour les fondateurs NOHO).
        </li>
        <li>
          <strong>Diplômes universitaires</strong> pour candidature
          à un master ou PhD US.
        </li>
        <li>
          <strong>Actes de naissance, mariage, divorce</strong> pour
          dossier visa K-1, F-2, ou regroupement familial.
        </li>
        <li>
          <strong>Contrats notariés</strong> (procuration, vente
          immobilière, succession) destinés à être exécutés aux USA.
        </li>
        <li>
          <strong>Casier judiciaire</strong> (Bulletin n°3) pour
          dossier visa ou green card.
        </li>
      </ul>

      <h2>Procédure exacte (mai 2026)</h2>
      <ol>
        <li>
          <strong>Notarisation initiale.</strong> Le document doit
          d&apos;abord être notarié par un notaire tunisien
          (administratif ou professionnel selon le type). Coût : 30-100
          TND selon le notaire.
        </li>
        <li>
          <strong>Présentation au Ministère des Affaires Étrangères.</strong>
          {" "}Tu te rends (ou un proche pour toi) au bureau apostille du
          MAE à Tunis (Belvédère). Avec le document notarié + une
          copie + ta CIN. Coût administratif : 5 TND par apostille.
        </li>
        <li>
          <strong>Récupération.</strong> Délai standard 2-5 jours
          ouvrés. Tu reçois le document avec un tampon apostille
          standardisé conforme à la Convention.
        </li>
        <li>
          <strong>Traduction (si nécessaire).</strong> Si le document
          original est en arabe et que l&apos;administration US le veut
          en anglais, ajoute une traduction assermentée (~30-60 TND par
          page). La traduction assermentée doit également être
          apostillée séparément.
        </li>
      </ol>

      <h2>Combien ça coûte vraiment</h2>
      <ul>
        <li>Notarisation : 30-100 TND</li>
        <li>Apostille MAE : 5 TND</li>
        <li>Traduction assermentée AR→EN (si requise) : 30-60 TND/page</li>
        <li>Apostille de la traduction : 5 TND</li>
        <li>DHL Tunis → USA (si tu envoies l&apos;original) : ~150-200 TND</li>
      </ul>
      <p>
        Total typique pour un Form 1583 apostillé + envoyé à NOHO :
        environ <strong>200-350 TND</strong>.
      </p>

      <h2>Combien de temps pour la chaîne complète</h2>
      <ul>
        <li>Notarisation TN : 1-2 jours (rendez-vous notaire)</li>
        <li>Apostille MAE : 2-5 jours ouvrés</li>
        <li>Traduction (si requise) : 1-3 jours</li>
        <li>Apostille traduction : 2-5 jours</li>
        <li>DHL Tunis → Los Angeles : 3-5 jours</li>
      </ul>
      <p>
        Total : <strong>1 à 3 semaines</strong> selon les étapes.
      </p>

      <h2>Pièges courants</h2>
      <ul>
        <li>
          <strong>Notaire qui ne sait pas remplir Form 1583</strong> —
          assure-toi que la signature du notaire est sur la dernière
          page du Form 1583 (pas sur un acte séparé). NOHO te fournit
          un template avec les indications.
        </li>
        <li>
          <strong>Identité USA ≠ identité TN</strong> — l&apos;USPS veut
          deux pièces d&apos;identité présentées au notaire. Une seule
          peut être ta CIN ; l&apos;autre doit être ton passeport
          tunisien (pas ta carte d&apos;étudiant ni ton permis de
          conduire).
        </li>
        <li>
          <strong>Apostille avant signature</strong> — l&apos;apostille
          doit être délivrée APRÈS la notarisation. Sinon, refus de
          l&apos;USPS.
        </li>
      </ul>

      <h2>Alternatives sans déplacement Tunis ↔ USA</h2>
      <p>
        Si tu ne veux pas faire la procédure toi-même :
      </p>
      <ul>
        <li>
          <strong>Notarisation locale + envoi de l&apos;original</strong> —
          tu signes devant un notaire en Tunisie (ou au cabinet KHIARI),
          puis on confirme la procédure USPS/CMRA acceptée avant activation.
          À noter : les notaires californiens ne peuvent pas effectuer de
          notariat en ligne à distance (RON) — la loi exige la comparution
          physique devant le notaire.
        </li>
        <li>
          <strong>Notarisation lors d&apos;un passage à LA</strong> —
          si tu prévois un voyage aux USA, notre équipe te notarise
          gratuitement au storefront 5062 Lankershim.
        </li>
        <li>
          <strong>Coordination NOHO de bout en bout</strong> — inclus
          dans la{" "}
          <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
            Solution Business
          </Link>{" "}
          : on te guide étape par étape, on vérifie que le Form 1583
          est rempli correctement avant que tu le notarises, on
          coordonne la réception à LA.
        </li>
      </ul>
    </>
  );
}
