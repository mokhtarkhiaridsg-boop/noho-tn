import Link from "next/link";

export function itinW7WalkthroughComplet2026() {
  return (
    <>
      <p>
        L&apos;ITIN (Individual Taxpayer Identification Number) est le
        SSN-équivalent pour les non-US persons qui ont besoin de
        déclarer ou recevoir des paiements US. Sans, tu signes W-8BEN
        avec FTIN tunisien uniquement — fonctionne pour certains cas
        mais bloque d&apos;autres (Amazon KDP royalties, AdSense YouTube,
        certains contrats freelance US). Voici le walkthrough Form W-7
        complet 2026, voie par voie.
      </p>

      <h2>Quand tu as besoin d&apos;un ITIN</h2>
      <ul>
        <li>
          <strong>Stripe Atlas C-Corp</strong> avec ownership stake — le
          beneficial owner doit avoir un US tax ID (SSN ou ITIN).
        </li>
        <li>
          <strong>Amazon Kindle Direct Publishing royalties</strong>
          (livres KDP) — sans ITIN, retenue 30% sur tes royalties.
          Avec ITIN + W-8BEN article 12 (royalties), retenue 15%.
        </li>
        <li>
          <strong>AdSense YouTube + Google partner program</strong>{" "}
          — Google demande TIN. Sans, retenue 24% backup withholding.
        </li>
        <li>
          <strong>Apple Developer Program royalties</strong> — pareil.
        </li>
        <li>
          <strong>Real estate income US</strong> (loyer d&apos;une
          propriété US sous ton nom). ITIN obligatoire.
        </li>
        <li>
          <strong>Filing 1040-NR (non-resident tax return)</strong> si
          tu as US-source ECI.
        </li>
      </ul>

      <h2>Quand tu n&apos;as PAS besoin d&apos;ITIN</h2>
      <ul>
        <li>
          <strong>LLC US owned by foreign person, sans ECI</strong> —
          Form 5472 et 1120 pro-forma se filent sans ITIN. Le FTIN
          tunisien (matricule fiscal) suffit comme tax identifier.
        </li>
        <li>
          <strong>Stripe direct via LLC US</strong> — W-8BEN avec
          FTIN tunisien fonctionne en majorité.
        </li>
        <li>
          <strong>Mercury / Wise / Brex banking</strong> — passport
          suffit. ITIN pas demandé.
        </li>
        <li>
          <strong>USPTO trademark filing</strong> via LLC US — pas
          besoin ITIN.
        </li>
      </ul>

      <h2>Voie 1 — Envoi passeport original par DHL</h2>
      <ul>
        <li>
          <strong>Délai</strong> : 8-12 semaines IRS processing +
          1-2 semaines de transit DHL = 10-14 semaines total.
        </li>
        <li>
          <strong>Coût</strong> : 80-150 TND DHL Express round-trip.
        </li>
        <li>
          <strong>Procédure</strong> :
          <ol>
            <li>Remplis Form W-7 (download IRS.gov). Section &laquo;
            Reason you&apos;re submitting Form W-7 &raquo; — choisis
            (a) Non-resident alien filing US tax return, ou (b)
            Non-resident alien claiming tax treaty benefits.</li>
            <li>Joins ton passeport original (PAS photocopie) avec
            le Form W-7.</li>
            <li>Joins un document tax-related qui justifie le besoin
            d&apos;ITIN (ex : letter from withholding agent comme
            Amazon KDP, AdSense letter, Stripe Atlas letter, etc.).</li>
            <li>Envoie par DHL Express signé à :
              <br />
              <em>
                Internal Revenue Service<br />
                ITIN Operation<br />
                P.O. Box 149342<br />
                Austin, TX 78714-9342, USA
              </em>
            </li>
            <li>IRS traite, t&apos;envoie ITIN par lettre, et te
            renvoie ton passeport.</li>
          </ol>
        </li>
        <li>
          <strong>Risque</strong> : ton passeport est immobilisé
          pendant 2.5-3.5 mois. Si tu dois voyager, problème.
        </li>
      </ul>

      <h2>Voie 2 — Certifying Acceptance Agent (CAA)</h2>
      <p>
        Un CAA est un agent agréé IRS qui peut certifier ton passeport
        sur place. Tu n&apos;envoies PAS l&apos;original — tu donnes
        juste copie certifiée par le CAA.
      </p>
      <ul>
        <li>
          <strong>Délai</strong> : 6-10 semaines (le CAA traite plus
          vite que dossier par mail).
        </li>
        <li>
          <strong>Coût</strong> : 100-250 USD au CAA + 80 TND DHL pour
          envoi documents (la copie certifiée part par mail standard).
        </li>
        <li>
          <strong>Avantage</strong> : tu gardes ton passeport.
        </li>
        <li>
          <strong>Procédure</strong> :
          <ol>
            <li>Trouve un CAA via IRS Acceptance Agents directory
            (Tunisia ne figure pas dans la liste — utilise un CAA
            US-based qui fait du remote certification, OU prends
            rendez-vous lors d&apos;un voyage US).</li>
            <li>Le CAA vérifie ton identité (Zoom video call + scan
            passeport), te fait remplir le Form W-7, et certifie ton
            passeport copy.</li>
            <li>Le CAA soumet le dossier directement à l&apos;IRS.</li>
            <li>IRS envoie l&apos;ITIN par lettre à l&apos;adresse
            indiquée sur le W-7 (ton adresse Tunisie OK, ou ton
            mailbox NOHO 5062 Lankershim).</li>
          </ol>
        </li>
        <li>
          <strong>CAAs recommandés pour TN-resident en 2026</strong> :
          GW Carter Tax (US-based, accepts remote Tunisia clients);
          Greenback Expat Tax; Tax Brain (UK-based mais opère pour
          non-US persons globally).
        </li>
      </ul>

      <h2>Voie 3 — Apply pendant voyage US (la plus rapide)</h2>
      <ul>
        <li>
          <strong>Délai</strong> : 4-7 semaines.
        </li>
        <li>
          <strong>Coût</strong> : intégré dans frais voyage. Si tu es
          déjà sur place, c&apos;est essentially gratuit (juste vol +
          hotel).
        </li>
        <li>
          <strong>Procédure</strong> :
          <ol>
            <li>Trouve une IRS Taxpayer Assistance Center dans la
            ville US où tu vas (LA, NY, SF, Houston, Chicago, etc.).
            Liste sur irs.gov/help/contact-your-local-irs-office.</li>
            <li>Prends rendez-vous en ligne 30 jours à l&apos;avance.</li>
            <li>Sur place, l&apos;agent IRS vérifie ton passeport en
            personne, certifie le Form W-7 + documents joints, et
            t&apos;ITIN est traité par IRS plus rapidement (in-person
            applications get priority).</li>
            <li>Tu repars avec ton passeport. ITIN arrive par mail à
            ton adresse 4-7 semaines plus tard.</li>
          </ol>
        </li>
        <li>
          <strong>Bonus</strong> : tu peux aussi opener Mercury en
          personne pendant le même voyage, et faire ton interview E-2
          si applicable.
        </li>
      </ul>

      <h2>Form W-7 — remplissage ligne par ligne (TN profile)</h2>
      <ul>
        <li>
          <strong>Reason for applying</strong> : box (a) ou (b) selon
          ton cas (cf. plus haut).
        </li>
        <li>
          <strong>Name</strong> : nom de famille + prénoms exactement
          comme sur le passeport.
        </li>
        <li>
          <strong>Mailing address</strong> : adresse Tunisie ou
          adresse mailbox NOHO US (préféré — courrier IRS arrive
          plus vite).
        </li>
        <li>
          <strong>Foreign address</strong> : adresse Tunisie.
        </li>
        <li>
          <strong>Country of citizenship</strong> : Tunisia.
        </li>
        <li>
          <strong>Date of birth</strong> : MM/DD/YYYY format.
        </li>
        <li>
          <strong>Country of birth</strong> : Tunisia.
        </li>
        <li>
          <strong>Passport number + issue + expiry</strong> : copie
          exacte.
        </li>
        <li>
          <strong>Treaty country</strong> : Tunisia.
        </li>
        <li>
          <strong>Treaty article</strong> : 7 (business profits), 12
          (royalties), 21 (students) — selon ton cas.
        </li>
        <li>
          <strong>Signature + date</strong> : à la main, encre noire.
        </li>
      </ul>

      <h2>Documents joints obligatoires</h2>
      <ul>
        <li>
          <strong>Passport original (voie 1)</strong> OU{" "}
          <strong>copie certifiée par CAA (voie 2)</strong> OU{" "}
          <strong>passport vérifié sur place IRS TAC (voie 3)</strong>.
        </li>
        <li>
          <strong>US tax-related document</strong> qui justifie
          l&apos;ITIN. Exemples :
          <ul>
            <li>Lettre Amazon KDP / KDP Tax Forms screen.</li>
            <li>AdSense letter requesting tax info.</li>
            <li>Stripe Atlas letter (si tu joins un C-Corp avec
            ownership).</li>
            <li>Real estate purchase contract US.</li>
          </ul>
        </li>
        <li>
          <strong>Form 1040-NR</strong> si applicable (déclaration
          fiscale non-resident).
        </li>
      </ul>

      <h2>Pièges fréquents</h2>
      <ol>
        <li>
          <strong>Choisir le mauvais reason box</strong>. Si tu
          marques (a) sans 1040-NR, ton dossier est rejeté.
        </li>
        <li>
          <strong>Pas de tax-related document</strong>. ITIN n&apos;est
          PAS un identifier général — c&apos;est lié à une obligation
          fiscale US. Sans justificatif, refus.
        </li>
        <li>
          <strong>Passport copy non-certifiée</strong>. Une photocopie
          ordinaire est rejetée. Soit original, soit certifié par CAA
          ou par IRS TAC.
        </li>
        <li>
          <strong>Adresse mismatch</strong>. Le mailing address +
          foreign address doivent être cohérents avec ton passeport.
        </li>
        <li>
          <strong>Délai pour first-time vs renewal</strong>. ITIN
          existant qui expire (5 ans sans usage) nécessite un W-7
          renewal — pas le même process.
        </li>
        <li>
          <strong>Treaty article wrong number</strong>. Selon ton
          revenu type, l&apos;article est différent. Cf.
          <Link href="/fr/blog/traite-fiscal-tunisie-usa-1985">
            traité Tunisie-USA 1985
          </Link>
          .
        </li>
      </ol>

      <h2>ITIN reçu — et après ?</h2>
      <ul>
        <li>
          <strong>Mise à jour W-8BEN</strong> chez chaque withholding
          agent (Amazon, AdSense, Stripe, etc.). Remplace FTIN
          tunisien par ITIN US.
        </li>
        <li>
          <strong>Vérification retenue</strong> : ton prochain payout
          devrait avoir une retenue plus basse (15% royalties au lieu
          de 30%, par exemple).
        </li>
        <li>
          <strong>1040-NR annuel</strong> si tu as US-source income.
          Filing deadline 15 avril (ou 15 juin si pas de US business
          presence). CPA US partner recommandé pour le premier filing.
        </li>
        <li>
          <strong>ITIN validity</strong> : 5 ans si utilisé au moins
          une fois. Au-delà, expire et nécessite renewal.
        </li>
      </ul>

      <h2>NOHO et l&apos;ITIN</h2>
      <ul>
        <li>
          <strong>NOHO ne fait pas</strong> de demande ITIN à ta place
          (pas autorisé sans license CAA).
        </li>
        <li>
          <strong>NOHO te référence</strong> à un CAA partenaire si tu
          choisis voie 2.
        </li>
        <li>
          <strong>NOHO mailbox 5062 Lankershim</strong> peut servir
          d&apos;adresse de réception pour la lettre ITIN — tu
          gagnes 2-3 semaines vs envoi vers Tunisie.
        </li>
        <li>
          <strong>NOHO coordonne</strong> le timing de la demande ITIN
          avec ton dossier business (par exemple, si tu fais Atlas
          C-Corp, on coordonne ITIN W-7 en parallèle pour gagner du
          temps).
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        L&apos;ITIN n&apos;est pas obligatoire pour la majorité des
        fondateurs LLC US tunisiens. Mais si tu publies sur KDP, fais
        de l&apos;AdSense, ou montes une C-Corp — c&apos;est
        incontournable. Le voyage US en personne reste la voie la
        plus rapide (4-7 semaines) et la moins risquée.
      </p>

      <h2>Et maintenant ?</h2>
      <p>
        Tu as besoin d&apos;un ITIN et tu te demandes laquelle des 3
        voies te convient ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On regarde ton
        cas (vertical, voyage US prévu ou pas, urgence) et on te dit
        franchement voie 1 / 2 / 3 + CAA recommandé.
      </p>
    </>
  );
}
