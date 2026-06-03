import Link from "next/link";

export function traiteTunisieUsa1985() {
  return (
    <>
      <p>
        Le traité fiscal entre la Tunisie et les États-Unis a été signé à
        Washington le 17 juin 1985, complété par un protocole signé à
        Tunis le 4 octobre 1989, ratifié par le Sénat US le 18 septembre
        1990. Il reste en vigueur en 2026. Pour la plupart des fondateurs
        tunisiens, le traité <strong>n&apos;élimine pas</strong> leur
        imposition tunisienne sur la LLC américaine. Voici exactement ce
        qu&apos;il fait et ce qu&apos;il ne fait pas.
      </p>

      <h2>Le scénario de base — LLC US détenue par résident TN</h2>
      <ul>
        <li>
          Tu es résident fiscal tunisien (présence &gt; 183 jours, ou
          centre des intérêts en TN, ou domicile permanent en TN — voir{" "}
          <Link href="/outils/calculateurs/residence-fiscale" className="font-bold underline" style={{ color: "#337485" }}>
            calculateur résidence fiscale
          </Link>
          ).
        </li>
        <li>
          Tu détiens une SMLLC (Single-Member LLC) US formée au Wyoming,
          Delaware, ou Nouveau-Mexique.
        </li>
        <li>
          Ta LLC est &quot;disregarded entity&quot; côté IRS (pass-through),
          ce qui signifie que côté US, c&apos;est toi qui es taxé sur les
          revenus de la LLC, pas la LLC elle-même.
        </li>
        <li>
          Ton activité est exécutée depuis Tunis (tu codes/conseilles/vends
          depuis ton bureau à Tunis).
        </li>
      </ul>

      <h2>Article 7 — Business Profits (ce que tu retiens vraiment)</h2>
      <p>
        L&apos;article 7 du traité dit : un résident TN est taxé{" "}
        <strong>uniquement en Tunisie</strong> sur ses profits
        d&apos;entreprise, sauf si l&apos;activité crée un &quot;permanent
        establishment&quot; (PE) aux États-Unis.
      </p>
      <ul>
        <li>
          PE = bureau physique, employés sur place, dependent agent,
          inventaire warehoused aux US, etc.
        </li>
        <li>
          Pour la grande majorité des fondateurs tunisiens en services
          (SaaS, consulting, e-com sans inventaire US), <strong>il
          n&apos;y a pas de PE US</strong>. La LLC est une coquille
          juridique-bancaire, pas une présence opérationnelle.
        </li>
        <li>
          Résultat : la Tunisie est le seul état qui peut taxer tes
          profits LLC. Les US ne taxent pas (ils respectent le traité).
        </li>
      </ul>

      <h2>Ce qui semble être une bonne nouvelle, et le piège</h2>
      <p>
        Beaucoup de fondateurs lisent ça et concluent : &quot;Donc je ne
        paie pas d&apos;impôt aux US, j&apos;ai gagné&quot;. Faux. Tu ne
        paies pas d&apos;impôt aux US, mais <strong>tu dois toujours
        payer l&apos;IRPP tunisien</strong> sur ces revenus.
      </p>

      <h2>Article 6 de la loi tunisienne 91-25 — l&apos;obligation
        déclarative</h2>
      <ul>
        <li>
          La loi 91-25 (24 novembre 1991) sur le contrôle des changes
          et le commerce extérieur, article 6, impose aux résidents
          tunisiens de déclarer leurs revenus mondiaux à
          l&apos;administration fiscale tunisienne.
        </li>
        <li>
          Que tu rapatries ou pas le cash, les revenus de ta LLC
          comptent comme tes revenus personnels en TN (puisque LLC =
          pass-through).
        </li>
        <li>
          Tu déclares ces revenus dans ta déclaration IRPP annuelle
          (formulaire D1) au taux progressif (jusqu&apos;à 36% en
          2026).
        </li>
        <li>
          Ne pas déclarer = évasion fiscale. La DGI peut désormais
          cross-référencer tes wires entrants via les comptes PPR USD
          autorisés depuis décembre 2025.
        </li>
      </ul>

      <h2>Article 24 — Méthode pour éviter la double imposition</h2>
      <p>
        Le traité prévoit que si tu paies de l&apos;impôt aux US, la
        Tunisie te donne un crédit d&apos;impôt équivalent (pour ne pas
        être taxé deux fois sur le même revenu). Mais :
      </p>
      <ul>
        <li>
          <strong>Tu ne paies typiquement PAS d&apos;impôt aux US</strong>{" "}
          car (a) ta LLC est disregarded entity, (b) tu n&apos;as pas de
          PE US, (c) revenus foreign-sourced. Donc rien à créditer en
          TN.
        </li>
        <li>
          Le crédit d&apos;impôt s&apos;applique seulement pour les
          revenus US-source ECI (Effectively Connected Income), qui
          touchent &lt; 5% des fondateurs tunisiens.
        </li>
      </ul>

      <h2>Article 10 — Dividendes</h2>
      <p>
        Si tu opères une C-Corp US (pas LLC), le traité limite la
        retenue à la source US sur les dividendes versés à un résident
        TN :
      </p>
      <ul>
        <li>14% direct ownership (PwC source) OU 10% portfolio
          ownership (Freeman Law source) — les deux sources publiques se
          contredisent. À vérifier directement avec le texte du traité
          de 1985 article 10.</li>
        <li>Sans traité, le taux par défaut US serait 30%.</li>
        <li>Le traité s&apos;applique uniquement si tu signes
          W-8BEN-E réclamant les bénéfices du traité.</li>
      </ul>
      <p>
        Pour une LLC pass-through standard, l&apos;article 10 ne
        s&apos;applique pas (pas de dividendes au sens fiscal — c&apos;est
        une distribution).
      </p>

      <h2>Article 11 — Intérêts</h2>
      <p>
        Si tu places de l&apos;argent dans un compte d&apos;épargne US
        productif d&apos;intérêts (Treasury bond, money market US), le
        traité limite la retenue US sur les intérêts. Réduction de 30%
        à 15% ou 0% selon catégorie. Encore une fois, applicable
        uniquement via W-8BEN.
      </p>

      <h2>Article 12 — Royalties</h2>
      <p>
        Si tu reçois des royalties d&apos;une source US (App Store,
        Google AdSense, plateforme de licensing) :
      </p>
      <ul>
        <li>Sans traité ou sans ITIN : 30% retenue à la source.</li>
        <li>Avec traité activé via W-8BEN + ITIN : réduction à 10%
          selon le traité Tunisie-US.</li>
        <li>
          C&apos;est le seul cas où l&apos;ITIN devient critique. Pour
          un fondateur SaaS standard sans royalties, l&apos;ITIN
          n&apos;est pas strictement nécessaire (voir{" "}
          <Link href="/blog/itin-w7-depuis-tunisie-sans-ssn" className="font-bold underline" style={{ color: "#337485" }}>
            ITIN W-7 depuis Tunis
          </Link>
          ).
        </li>
      </ul>

      <h2>Synthèse — ce que le traité fait pour toi</h2>
      <ul>
        <li>✓ Élimine l&apos;imposition fédérale US sur tes revenus
          d&apos;activité LLC (article 7, no PE = no US tax).</li>
        <li>✓ Réduit les retenues US sur dividendes / intérêts /
          royalties si tu signes W-8BEN.</li>
        <li>✓ Garantit que tu ne paies pas deux fois sur le même
          revenu (article 24).</li>
      </ul>

      <h2>Ce que le traité NE fait PAS pour toi</h2>
      <ul>
        <li>✗ Ne supprime pas ton obligation IRPP en Tunisie sur tes
          revenus mondiaux.</li>
        <li>✗ Ne supprime pas l&apos;obligation Form 5472 + 1120
          côté IRS (pénalité 25 000 USD si oubli, même sans imposition).</li>
        <li>✗ Ne supprime pas l&apos;obligation BCT de déclarer tes
          rapatriements.</li>
        <li>✗ Ne supprime pas l&apos;obligation FBAR/FATCA pour les
          comptes bancaires US &gt; 10K USD si tu deviens jamais résident
          fiscal US.</li>
      </ul>

      <h2>Le faux marketing &quot;LLC = 0% taxes&quot;</h2>
      <p>
        Tu verras sur TikTok et Instagram des claims de type &quot;Open
        a US LLC, pay 0% taxes legally&quot;. C&apos;est techniquement
        vrai côté US fédéral pour les non-US persons en services. Mais
        ces vidéos omettent volontairement l&apos;obligation IRPP du pays
        de résidence. Pour un résident tunisien, tes profits LLC sont
        imposables en Tunisie même si la LLC est aux US.
      </p>
      <p>
        Le seul vrai cas de &quot;0% global&quot; serait : (a) tu changes
        ta résidence fiscale vers un pays sans IRPP (UAE, Cayman, etc.),
        ET (b) tu structures pour éviter toute requalification. C&apos;est
        un autre projet, pas une conséquence automatique de la LLC US.
      </p>

      <h2>Comment NOHO encadre cette réalité</h2>
      <p>
        Le Suivi mensuel à 1 200 TND/mois inclut un memo annuel en
        français explicitant ton statut fiscal LLC vis-à-vis de la DGI
        tunisienne, avec références aux articles du traité 1985 et de la
        loi 91-25. NOHO ne donne pas de conseil fiscal — on coordonne
        avec un fiscaliste partenaire pour les questions complexes. Pour
        la majorité des cas standards (LLC pass-through, services
        exécutés en TN, pas d&apos;ECI), le mémo + déclaration IRPP
        classique suffisent.
      </p>
    </>
  );
}
