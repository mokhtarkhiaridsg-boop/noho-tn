import Link from "next/link";

export function mercuryKycDossier() {
  return (
    <>
      <p>
        Mercury approuve la majorité des dossiers MENA bien préparés et
        rejette environ 30% des dossiers mal préparés. Le facteur n°1 de
        rejet n&apos;est pas le pays — c&apos;est l&apos;incohérence
        documentaire. Voici les 9 éléments à aligner avant de soumettre
        ton application Mercury, pour passer la review en première
        lecture.
      </p>

      <h2>Élément 1 — Cohérence de l&apos;orthographe du nom</h2>
      <ul>
        <li>
          Ton nom doit être <strong>strictement identique</strong> sur
          tous les documents :
          <ul>
            <li>Articles of Organization (Wyoming SoS filing)</li>
            <li>EIN CP 575 letter (IRS)</li>
            <li>Operating Agreement signé</li>
            <li>Passeport tunisien (page principale)</li>
            <li>CIN tunisienne</li>
            <li>Application Mercury</li>
          </ul>
        </li>
        <li>
          Verrouille une translittération latine canonique de ton nom
          arabe et n&apos;en sors plus. Mokhtar / Mokhtar (avec accent)
          / Mukhtar = trois identités différentes pour le système
          Mercury.
        </li>
      </ul>

      <h2>Élément 2 — Wyoming Certificate of Good Standing &lt; 30 jours</h2>
      <ul>
        <li>
          Mercury exige souvent un Certificate of Good Standing daté de
          moins de 30 jours. Commande-le sur wyobiz.wy.gov le jour où tu
          ouvres l&apos;application Mercury.
        </li>
        <li>
          Coût : gratuit en téléchargement online. 10 USD si tu veux la
          version certifiée par mail.
        </li>
        <li>
          Le Certificate doit montrer le statut &quot;Active&quot; et le
          nom du registered agent.
        </li>
      </ul>

      <h2>Élément 3 — EIN letter — CP 575 ou 147C</h2>
      <ul>
        <li>
          Soumets l&apos;EIN letter <strong>complète</strong> (PDF
          intégral). Pas un screenshot recadré.
        </li>
        <li>
          Si tu as perdu le CP 575 original, appelle IRS au 800-829-4933
          (entre 7h et 19h heure EST) et demande un{" "}
          <strong>Form 147C verification letter</strong>. Délai : 1-2
          semaines par fax/mail.
        </li>
        <li>
          Si ton EIN a été obtenu il y a moins de 3 semaines, attends.
          La base IRS prend 2-3 semaines pour synchroniser avec les API
          de vérification que Mercury utilise. Submitting trop tôt = auto-rejection.
        </li>
      </ul>

      <h2>Élément 4 — Adresse US réelle, pas P.O. Box ni virtual mailbox flaggé</h2>
      <ul>
        <li>
          Mercury rejette systématiquement les adresses :
          <ul>
            <li>P.O. Box (USPS post office boxes)</li>
            <li>Virtual mailbox de type iPostal1, Anytime Mailbox,
              Earth Class Mail (flaggés en database CMRA)</li>
            <li>Adresses de registered agent uniquement (ex: Northwest
              Registered Agent Sheridan WY)</li>
          </ul>
        </li>
        <li>
          NOHO opère une vraie boutique enregistrée USPS au 5062
          Lankershim Blvd, North Hollywood, CA. Ce n&apos;est PAS une
          CMRA virtuelle flaggée. C&apos;est un commercial space avec
          notarisation Form 1583 sur place. Mercury accepte.
        </li>
        <li>
          Vérifie que l&apos;adresse sur ton{" "}
          <Link href="/blog/ouvrir-llc-tunisie-14-jours" className="font-bold underline" style={{ color: "#337485" }}>
            Form 1583
          </Link>{" "}
          et celle dans l&apos;application Mercury sont identiques au
          caractère près (Suite #, comma, etc.).
        </li>
      </ul>

      <h2>Élément 5 — Operating Agreement signé et daté</h2>
      <ul>
        <li>
          Document de 8-15 pages décrivant la structure de gouvernance de
          ta LLC.
        </li>
        <li>
          Doit explicitement nommer le ou les members et leurs %
          d&apos;ownership.
        </li>
        <li>
          Daté et signé par tous les members. Pas besoin de notarisation
          (sauf si ton état l&apos;exige — pas Wyoming).
        </li>
        <li>
          Mercury lit le document pour confirmer que toi (le applicant)
          es bien identifié comme beneficial owner.
        </li>
      </ul>

      <h2>Élément 6 — Identité personnelle — passeport + CIN + adresse TN</h2>
      <ul>
        <li>
          Passeport tunisien, scan haute résolution couleur, page
          principale visible (photo, nom, date d&apos;émission, date
          d&apos;expiration, numéro).
        </li>
        <li>
          CIN tunisienne, recto-verso, scan haute résolution couleur.
        </li>
        <li>
          Justificatif d&apos;adresse en Tunisie de moins de 90 jours :
          facture STEG, SONEDE, ou statement bancaire.
        </li>
        <li>
          L&apos;adresse sur le justificatif doit matcher celle déclarée
          sur Mercury.
        </li>
      </ul>

      <h2>Élément 7 — Statement bancaire tunisien</h2>
      <ul>
        <li>
          Un statement bancaire récent de ta banque TN (BIAT, Attijari,
          UIB, etc.) à ton nom, montrant les 3 derniers mois.
        </li>
        <li>
          Mercury ne s&apos;attend pas à voir un solde énorme. Le but est
          de prouver que tu es une vraie personne avec une vraie banque
          dans un vrai pays.
        </li>
        <li>
          Si tu transfères 500-2000 USD initialement sur Mercury depuis
          un wire, ce statement doit montrer que les fonds proviennent
          bien de toi (pas d&apos;un tiers).
        </li>
      </ul>

      <h2>Élément 8 — Plan d&apos;activité (1-2 pages)</h2>
      <ul>
        <li>
          Description succincte de ton activité : secteur (NAICS code),
          clients-cibles, modèle de revenus, sources de capital.
        </li>
        <li>
          NAICS code à choisir avec soin. Privilégie :
          <ul>
            <li>541613 (Marketing Consulting Services)</li>
            <li>541511 (Custom Computer Programming)</li>
            <li>541618 (Other Management Consulting)</li>
            <li>541990 (All Other Professional Services)</li>
          </ul>
        </li>
        <li>
          Évite : codes crypto (523999), money services (522390),
          gambling, adult, tobacco, firearms, cannabis, MLM, debt
          collection. Mercury rejette automatiquement.
        </li>
        <li>
          Annonce des activités réalistes : 5K-25K USD/mois deposits,
          3K-20K USD/mois withdrawals, 10-50 transactions/mois.
        </li>
      </ul>

      <h2>Élément 9 — LinkedIn + site web actif</h2>
      <ul>
        <li>
          Mercury fait du soft KYC manuel. Un fondateur qui n&apos;a
          aucune trace en ligne est suspect.
        </li>
        <li>
          Profil LinkedIn complet à ton nom, avec ton parcours pro,
          recommandations, ton entreprise actuelle.
        </li>
        <li>
          Site web de ta LLC live, avec page contact mentionnant
          l&apos;adresse Mercury (5062 Lankershim chez NOHO), email pro,
          téléphone US (Google Voice OK).
        </li>
        <li>
          Idéalement : page About avec photo + bio brève. Mercury
          regarde, et ça change la couleur du dossier.
        </li>
      </ul>

      <h2>L&apos;élément bonus — la lettre KHIARI</h2>
      <p>
        Pour les clients NOHO, on inclut un élément supplémentaire que
        les autres n&apos;ont pas : une lettre du cabinet KHIARI (cabinet
        d&apos;avocats à Tunis, partenaire historique de NOHO) sur
        papier à en-tête en anglais, certifiant qu&apos;ils connaissent
        le client depuis X années à son adresse résidentielle TN, qu&apos;il
        n&apos;est pas sous sanctions, et indiquant le numéro de
        l&apos;avocat au barreau tunisien.
      </p>
      <p>
        Cet élément n&apos;est pas exigé par Mercury mais accélère
        souvent la review d&apos;une semaine à 24h. C&apos;est exactement
        le type de signal de crédibilité que les underwriters cherchent
        et que les concurrents (doola, Stripe Atlas) ne peuvent pas
        fabriquer.
      </p>

      <h2>Le timing du dépôt — souvent négligé</h2>
      <ul>
        <li>
          Évite les vendredis après-midi heure Pacifique. Mercury fait
          le tri du backlog lundi matin, ton dossier passe derrière les
          5 dépôts du week-end.
        </li>
        <li>
          Mardi-jeudi 8h-10h Pacifique = sweet spot. Tu es dans le batch
          de tri du matin.
        </li>
        <li>
          Ne soumets pas pendant les holidays US (Thanksgiving,
          Christmas, July 4) : reviews suspendues 5-10 jours.
        </li>
      </ul>

      <h2>Si tu es rejeté</h2>
      <ul>
        <li>
          Mercury rarement explique. Le rejection email est laconique.
        </li>
        <li>
          N&apos;ouvre PAS immédiatement un autre dossier sous un autre
          nom. Mercury cross-référence par EIN et par beneficial owner ID.
          Le 2e dossier sera rejeté en 5 minutes.
        </li>
        <li>
          Attends 90 jours, corrige les éléments suspects, réapplique.
        </li>
        <li>
          OU passe à Plan B :{" "}
          <Link href="/outils/comparateurs/banques-us" className="font-bold underline" style={{ color: "#337485" }}>
            Relay, Wise Business, ou Brex
          </Link>{" "}
          via le comparateur.
        </li>
      </ul>
    </>
  );
}
