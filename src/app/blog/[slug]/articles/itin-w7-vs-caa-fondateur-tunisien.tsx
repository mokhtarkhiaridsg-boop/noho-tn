import Link from "next/link";

export function itinW7VsCaa() {
  return (
    <>
      <p>
        Pour obtenir un ITIN (Individual Taxpayer Identification Number)
        depuis la Tunisie, tu as deux voies : (1) envoyer ton passeport
        original par DHL à l&apos;IRS, OU (2) faire certifier ton
        passeport par un Certifying Acceptance Agent (CAA). La première
        est gratuite mais te prive de ton passeport pendant 8-12
        semaines. La deuxième coûte 100-200 USD mais tu gardes ton
        passeport. Voici comment choisir.
      </p>

      <h2>Pourquoi tu as besoin d&apos;un ITIN</h2>
      <ul>
        <li>
          Tu reçois des royalties US (Apple App Store, Google AdSense,
          Amazon KDP) — l&apos;ITIN te permet de signer W-8BEN avec
          treaty benefits et réduire la retenue à la source de 30% à
          10% (Tunisie-US treaty article 12).
        </li>
        <li>
          Tu veux ouvrir certains comptes US (TD Ameritrade, Fidelity
          Personal, certaines neo-banks) qui demandent ITIN.
        </li>
        <li>
          Tu reçois un W-9 demandé par erreur par un client US — avoir
          un ITIN te permet de signer W-8BEN proprement avec un US
          identifying number.
        </li>
        <li>
          <strong>Tu n&apos;as PAS besoin d&apos;ITIN si</strong> : tu
          opères juste une SMLLC Wyoming en services (W-8BEN sans ITIN
          fonctionne pour Stripe / Mercury). Voir{" "}
          <Link href="/blog/itin-w7-depuis-tunisie-sans-ssn" className="font-bold underline" style={{ color: "#337485" }}>
            ITIN W-7 depuis Tunis
          </Link>{" "}
          pour la décision globale.
        </li>
      </ul>

      <h2>Voie 1 — Envoi passeport original (Mail Method)</h2>
      <ul>
        <li>
          Tu remplis Form W-7 + le tax return correspondant (1040-NR
          typiquement si tu as US-source income).
        </li>
        <li>
          Tu envoies <strong>ton passeport original</strong> physique
          via DHL à l&apos;IRS Austin TX Service Center (Section
          Identifications, ITIN Operations).
        </li>
        <li>
          L&apos;IRS conserve ton passeport pendant le processing
          (8-12 semaines en 2026, parfois jusqu&apos;à 16 semaines en
          peak season).
        </li>
        <li>
          Après approval, l&apos;IRS te renvoie passeport + ITIN letter
          (CP 565).
        </li>
        <li>
          Coût : ~30 USD DHL aller + 30 USD retour. Plus le risque que
          DHL perde ton passeport.
        </li>
      </ul>

      <h2>Voie 2 — Certifying Acceptance Agent (CAA)</h2>
      <ul>
        <li>
          Un CAA est un professionnel autorisé par l&apos;IRS à
          certifier ton passeport sans l&apos;envoyer physiquement.
        </li>
        <li>
          Tu rencontres le CAA en personne (ou via vidéo certifiée selon
          autorisation). Le CAA vérifie ton passeport, le scan, et
          remplit un Form W-7 avec son tampon d&apos;approbation.
        </li>
        <li>
          Le CAA envoie le W-7 + scan certifié à l&apos;IRS. Toi tu
          gardes ton passeport.
        </li>
        <li>
          Coût : 100-200 USD selon le CAA.
        </li>
        <li>
          Délai IRS post-soumission : même 8-12 semaines mais ton
          passeport est avec toi.
        </li>
      </ul>

      <h2>Où trouver un CAA depuis la Tunisie</h2>
      <ul>
        <li>
          <strong>CAA aux US</strong> : la base IRS publique liste les
          CAAs par état. Tu peux en trouver un à NoHo / LA / NY via
          irs.gov/individuals/acceptance-agents-list. Délai pour
          rencontrer en personne nécessite voyage US OU vidéo certifiée
          (option moins commune).
        </li>
        <li>
          <strong>CAA en Tunisie</strong> : zéro CAA enregistré
          actuellement (mai 2026). C&apos;est un problème — pas de CAA
          local TN.
        </li>
        <li>
          <strong>CAA en France/Maroc/UAE</strong> : il y en a quelques-uns
          (notamment Paris, Casablanca, Dubai). Si tu voyages
          régulièrement, rendez-vous CAA possible.
        </li>
        <li>
          <strong>CAA vidéo (rare)</strong> : certains CAA offrent un
          process vidéo certifié, mais l&apos;IRS exige vérification
          physique du document original — fiabilité variable.
        </li>
      </ul>

      <h2>Voie 3 — Combinaison avec voyage US</h2>
      <p>
        Si tu envisages un voyage US dans les 6 prochains mois :
      </p>
      <ol>
        <li>
          Trouve un CAA à proximité de ta destination US (LA, NY, SF,
          Miami).
        </li>
        <li>
          Prends rendez-vous CAA 1-3 jours dans ton voyage. Coût ~100-200
          USD.
        </li>
        <li>
          Le CAA soumet ton W-7 sur place.
        </li>
        <li>
          ITIN arrive par mail 8-12 semaines plus tard à ton adresse US
          (NOHO 5062 Lankershim).
        </li>
        <li>
          NOHO scan et te le transmet en PDF.
        </li>
      </ol>
      <p>
        C&apos;est l&apos;option <strong>la plus pratique</strong> pour
        un fondateur tunisien qui voyage déjà aux US occasionnellement.
      </p>

      <h2>Comparaison directe</h2>
      <ul>
        <li>
          <strong>Voie 1 (Mail Method)</strong> : 0 USD CAA fee + 60 USD
          DHL aller-retour + risque perte passeport + 8-16 semaines sans
          passeport. Pour étudiant qui ne voyage pas, OK.
        </li>
        <li>
          <strong>Voie 2 (CAA local Tunisie)</strong> : N/A — pas de
          CAA TN actuellement.
        </li>
        <li>
          <strong>Voie 3 (CAA US lors d&apos;un voyage)</strong> : 100-200
          USD CAA + frais voyage existant + passeport gardé. Pour
          fondateur qui voyage US, optimum.
        </li>
        <li>
          <strong>Voie 4 (CAA via vidéo)</strong> : 100-200 USD CAA +
          passeport gardé. Risque fiabilité / acceptance IRS variable.
        </li>
      </ul>

      <h2>Le document attendu — Form W-7</h2>
      <ul>
        <li>
          5 sections principales : Name, Mailing Address, Foreign
          Address, Date of Birth, Other Info.
        </li>
        <li>
          Reason for applying : code applicable selon ton cas
          (typiquement &quot;b - Nonresident alien filing a US tax return
          to claim treaty benefits&quot; OU &quot;h - Other&quot; avec
          explication).
        </li>
        <li>
          Tu joins le tax return correspondant si applicable.
        </li>
        <li>
          Tu joins le passeport (Voie 1) OU la certification CAA (Voie
          2/3).
        </li>
      </ul>

      <h2>Le piège de l&apos;ITIN renouvellement</h2>
      <p>
        L&apos;ITIN expire après 5 ans sans usage (pas de tax return
        filed). Tu dois renouveler via nouveau W-7. Si tu obtiens un
        ITIN aujourd&apos;hui et tu ne déposes pas de US tax return
        dans les 5 ans, ton ITIN devient invalide. Pour rester actif,
        soit (a) tu déposes un 1040-NR annuel (même avec 0 tax), soit
        (b) tu renouvelles W-7 au bout de 5 ans.
      </p>

      <h2>Notre recommandation</h2>
      <ol>
        <li>
          Vérifie si tu as VRAIMENT besoin de l&apos;ITIN. Pour 80% des
          fondateurs tunisiens en services / SaaS, W-8BEN sans ITIN
          suffit pour Stripe/Mercury.
        </li>
        <li>
          Si tu en as besoin (royalties, certaines banques US, gros
          contrat client US qui exige W-8BEN avec ITIN) :
          <ul>
            <li>Voyageur US → Voie 3 (CAA US sur place).</li>
            <li>Non-voyageur → Voie 1 (envoi passeport) en période
              creuse (été, hors peak Jan-Avr).</li>
          </ul>
        </li>
        <li>
          NOHO peut référer un CAA partenaire à LA pour les clients qui
          passent par leur trip US. Demande à Mokhtar lors de l&apos;appel
          de cadrage.
        </li>
      </ol>

      <h2>Avertissement honest</h2>
      <p>
        NOHO n&apos;est pas un Certifying Acceptance Agent IRS — le
        statut CAA exige une licence individuelle non-transférable.
        Mais NOHO coordonne avec un CAA partenaire LA pour les clients
        Solution Business qui en ont besoin. Le coût additionnel reste
        à la charge du client (100-200 USD CAA fee). Le rendez-vous est
        fixé pendant ton trip US si tu en as un planifié, sinon Voie 1
        reste l&apos;option pragmatique.
      </p>
    </>
  );
}
