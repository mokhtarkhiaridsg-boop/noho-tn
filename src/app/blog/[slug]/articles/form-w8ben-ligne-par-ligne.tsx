import Link from "next/link";

export function formW8BenLigneParLigne() {
  return (
    <>
      <p>
        Form W-8BEN est le formulaire IRS le plus signé par les
        fondateurs tunisiens — Stripe, Mercury, Upwork, Etsy, Amazon
        affiliate, Patreon, YouTube/AdSense en demandent un. Une page
        recto, 8 lignes pertinentes. Mais 60% des fondateurs le
        remplissent mal (Box 5 mal coché, treaty article non précisé,
        signature manquante). Voici comment le remplir parfaitement,
        ligne par ligne.
      </p>

      <h2>Quand remplir W-8BEN (vs W-8BEN-E vs W-9)</h2>
      <ul>
        <li>
          <strong>W-8BEN</strong> : pour individus non-US persons.
          C&apos;est ce que tu signes pour ton SMLLC pass-through
          (l&apos;LLC est disregarded, donc tu signes en tant que
          beneficial owner individuel).
        </li>
        <li>
          <strong>W-8BEN-E</strong> : pour entités étrangères. Tu ne
          signes ça que si ta LLC est multi-member OU si tu as fait
          une élection C-Corp (Form 8832).
        </li>
        <li>
          <strong>W-9</strong> : pour US persons uniquement. Si tu
          n&apos;es pas US citizen/Green Card, tu ne signes JAMAIS un
          W-9 — c&apos;est de la fausse déclaration.
        </li>
        <li>
          Pour les détails, voir{" "}
          <Link href="/blog/w8ben-vs-w9-non-us-person" className="font-bold underline" style={{ color: "#337485" }}>
            W-8BEN vs W-9 — quel formulaire signer
          </Link>
          .
        </li>
      </ul>

      <h2>Téléchargement du formulaire</h2>
      <p>
        Va sur irs.gov, cherche &quot;Form W-8BEN&quot;. Télécharge la
        dernière version (révision octobre 2024 valid pour 2026). 1
        page recto, PDF éditable.
      </p>

      <h2>Section Part I — Identification of Beneficial Owner</h2>

      <h3>Line 1 — Name of individual</h3>
      <ul>
        <li>
          Ton nom légal complet exact, matching ton passeport.
        </li>
        <li>
          Latin script. Si ton nom est en arabe sur le passeport, écris
          la translittération exacte du passeport (pas une variante).
        </li>
        <li>
          Format : Prénom + (middle name si applicable) + Nom. Pas de
          virgule.
        </li>
        <li>
          Exemple : &quot;Karim Ben Ahmed Trabelsi&quot; (pas
          &quot;Trabelsi, Karim B.A.&quot;).
        </li>
      </ul>

      <h3>Line 2 — Country of citizenship</h3>
      <ul>
        <li>
          &quot;Tunisia&quot; en lettres latines.
        </li>
        <li>
          Si tu es binational (TN-FR), tu peux mettre les deux séparés
          par virgule : &quot;Tunisia, France&quot;. Mais simplifier
          avec juste &quot;Tunisia&quot; est généralement OK si tu
          veux activer le treaty Tunisia-US.
        </li>
      </ul>

      <h3>Line 3 — Permanent residence address</h3>
      <ul>
        <li>
          Ton adresse résidentielle en Tunisie. PAS l&apos;adresse de
          ta LLC US (5062 Lankershim) — Box 3 demande où tu vis
          physiquement.
        </li>
        <li>
          Format : Street + Apartment number + City + Postal code +
          Country.
        </li>
        <li>
          Exemple : &quot;42 Rue Habib Bourguiba, Apt 3B, La Marsa
          2078, Tunisia&quot;.
        </li>
        <li>
          PAS de P.O. Box.
        </li>
      </ul>

      <h3>Line 4 — Mailing address (if different from above)</h3>
      <ul>
        <li>
          Laisse vide SI ton adresse mailing est la même que Line 3.
        </li>
        <li>
          Remplis si tu as une adresse mailing différente (rare pour
          fondateur tunisien). PAS l&apos;adresse de la LLC ici non
          plus.
        </li>
      </ul>

      <h3>Line 5 — U.S. taxpayer identification number (SSN or ITIN)</h3>
      <ul>
        <li>
          Si tu n&apos;as pas d&apos;ITIN ni SSN : <strong>laisse
          vide</strong>. C&apos;est OK. Le treaty s&apos;applique
          quand même via Line 6 (passeport) pour la plupart des cas.
        </li>
        <li>
          Si tu as un ITIN : écris-le ici. Format XXX-XX-XXXX.
        </li>
        <li>
          Pour certains cas (royalties USPTO, AdSense, App Store), ITIN
          est requis pour activer le treaty. Voir{" "}
          <Link href="/blog/itin-w7-vs-caa-fondateur-tunisien" className="font-bold underline" style={{ color: "#337485" }}>
            ITIN W-7 vs CAA
          </Link>
          .
        </li>
      </ul>

      <h3>Line 6 — Foreign tax identifying number (FTIN)</h3>
      <ul>
        <li>
          Ton numéro fiscal tunisien (matricule fiscal si tu es
          autoentrepreneur OU dirigeant SARL). Format générique CIN +
          ABM ou similaire.
        </li>
        <li>
          Si tu n&apos;as pas de FTIN TN (cas rare), tu peux cocher
          &quot;FTIN not legally required&quot; dans Line 6a (case à
          cocher).
        </li>
        <li>
          Pour un freelance non-déclaré TN : techniquement tu DOIS être
          déclaré (autoentrepreneur ou autre) pour pouvoir avoir un
          FTIN. Si tu n&apos;es pas déclaré, c&apos;est un problème
          fiscal TN à résoudre avant de signer W-8BEN.
        </li>
      </ul>

      <h3>Line 7 — Reference number(s)</h3>
      <ul>
        <li>
          Optionnel. Tu peux écrire ton EIN ou ton LLC name ici comme
          référence pour faciliter le matching dans le système du
          requester (Stripe par exemple).
        </li>
        <li>
          Exemple : &quot;EIN: 12-3456789 — Saharian Crafts LLC
          (Wyoming)&quot;.
        </li>
      </ul>

      <h3>Line 8 — Date of birth</h3>
      <ul>
        <li>
          Format MM-DD-YYYY. Critique : <strong>ordre américain</strong>{" "}
          mois-jour-année, pas le format européen jour-mois-année.
        </li>
        <li>
          Exemple : si tu es né le 15 juillet 1998, écris
          &quot;07-15-1998&quot;.
        </li>
      </ul>

      <h2>Section Part II — Claim of Tax Treaty Benefits</h2>

      <p>
        C&apos;est ICI que la majorité des fondateurs ratent la
        sauce. Pour activer le traité Tunisie-USA et réduire la retenue
        à la source, il FAUT remplir Part II proprement.
      </p>

      <h3>Line 9 — Tax treaty country</h3>
      <ul>
        <li>
          &quot;Tunisia&quot;.
        </li>
        <li>
          Coche la case &quot;I certify that the beneficial owner is a
          resident of...&quot; — tu confirmes que tu es résident
          fiscal tunisien (matching ton FTIN Line 6).
        </li>
      </ul>

      <h3>Line 10 — Special rates and conditions</h3>
      <p>
        Cette ligne demande le numéro de l&apos;article du traité, le
        type de revenu, et le taux réduit demandé. Les cas tunisiens
        principaux :
      </p>
      <ul>
        <li>
          <strong>Royalties (Apple App Store, AdSense, Patreon, KDP,
          Audible)</strong> : Article 12, taux 10% (au lieu de 30%
          default).
          <br />
          Texte à écrire : &quot;Article 12, paragraph 2 of the
          Tunisia-US Income Tax Treaty; 10% withholding rate on royalty
          income.&quot;
        </li>
        <li>
          <strong>Interest (intérêts sur Treasury bonds, money market
          US)</strong> : Article 11, taux 15%.
          <br />
          Texte : &quot;Article 11, paragraph 2 of the Tunisia-US
          Income Tax Treaty; 15% withholding rate on interest
          income.&quot;
        </li>
        <li>
          <strong>Dividends (C-Corp shareholders)</strong> : Article 10,
          taux 14% (pour direct shareholders &gt; 10%) ou 20% (pour
          portfolio).
          <br />
          Texte : &quot;Article 10, paragraph 2 of the Tunisia-US
          Income Tax Treaty.&quot;
        </li>
        <li>
          <strong>Services / business profits</strong> : Article 7, no
          tax (pas de PE US).
          <br />
          Texte : &quot;Article 7 — Business profits. No US tax as the
          beneficial owner has no permanent establishment in the United
          States.&quot;
        </li>
        <li>
          <strong>Capital gains (vente de stock, etc.)</strong> :
          Article 13. Souvent pas de US tax. Texte selon le cas
          spécifique.
        </li>
      </ul>
      <p>
        Pour la majorité des cas Stripe/Mercury fondateur tunisien
        services, c&apos;est <strong>Article 7</strong>. Pour
        AdSense/App Store, c&apos;est <strong>Article 12</strong>.
      </p>

      <h2>Section Part III — Certification</h2>

      <h3>Signature</h3>
      <ul>
        <li>
          Signature manuscrite (ou DocuSign acceptable).
        </li>
        <li>
          Date au format MM-DD-YYYY.
        </li>
        <li>
          Print name (ton nom typed en majuscules).
        </li>
        <li>
          Capacity in which acting : laisse vide (tu signes en tant
          qu&apos;individu).
        </li>
      </ul>

      <h2>Erreurs les plus fréquentes</h2>
      <ul>
        <li>
          <strong>Adresse Line 3 = adresse LLC US</strong> : Stripe
          flagge immédiatement. Mets ton adresse Tunisie résidentielle.
        </li>
        <li>
          <strong>Date format DD-MM-YYYY au lieu de MM-DD-YYYY</strong>{" "}
          : rejection automatique pour incohérence avec passport.
        </li>
        <li>
          <strong>Part II non rempli</strong> : sans Part II, treaty
          benefits non activés, retenue 30% par défaut.
        </li>
        <li>
          <strong>Article du traité non précisé en Line 10</strong> :
          Stripe peut accepter mais souvent te demande de re-remplir
          avec l&apos;article spécifique.
        </li>
        <li>
          <strong>Signature manquante ou date manquante</strong> :
          rejection automatique.
        </li>
        <li>
          <strong>FTIN manquant</strong> : si tu n&apos;es pas déclaré
          TN, tu dois cocher &quot;FTIN not legally required&quot; ce
          qui est techniquement faux pour la plupart des résidents TN.
          Mieux : déclare-toi (autoentrepreneur, ~100 TND) et obtiens
          un FTIN officiel.
        </li>
      </ul>

      <h2>Durée de validité</h2>
      <ul>
        <li>
          W-8BEN est valid 3 ans à compter de la date de signature.
        </li>
        <li>
          Tu dois resigner et resoumettre avant expiration.
        </li>
        <li>
          Les changements d&apos;adresse résidentielle, nom, ou statut
          fiscal exigent un nouveau W-8BEN immédiatement.
        </li>
      </ul>

      <h2>À qui le donner</h2>
      <ul>
        <li>
          Au &quot;requester&quot; — la partie qui te paie : Stripe,
          Mercury, Upwork, ton client US direct, Etsy, Amazon, etc.
        </li>
        <li>
          Tu uploades le PDF signé via leur dashboard onboarding.
        </li>
        <li>
          PAS à l&apos;IRS directement (W-8BEN est conservé par le
          requester, qui le retient comme proof si l&apos;IRS audite
          plus tard).
        </li>
      </ul>

      <h2>Le cas spécifique Stripe Atlas</h2>
      <p>
        Si tu opères via Stripe Atlas (C-Corp ou LLC), Atlas te demande
        un W-8BEN-E (pour la corp/LLC) ET un W-8BEN (pour toi
        shareholder). Les deux sont nécessaires. Atlas a un template
        pré-rempli pour les deux dans son dashboard.
      </p>

      <h2>L&apos;option NOHO</h2>
      <p>
        Le Suivi mensuel inclut le template W-8BEN pré-rempli pour ta
        situation spécifique, plus le renouvellement automatique tous
        les 3 ans avec rappel calendaire. Tu signes simplement et tu
        renvoies — pas de risque d&apos;erreur sur les 8 lignes.
      </p>
    </>
  );
}
