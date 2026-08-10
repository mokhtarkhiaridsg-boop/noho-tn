import Link from "next/link";

export function fatcaCrsImpactTunisienLlcUsOwner() {
  return (
    <>
      <p>
        Tu es résident tunisien avec une LLC américaine. Deux systèmes
        d&apos;information fiscale internationale s&apos;appliquent à
        toi : <strong>FATCA</strong> (Foreign Account Tax Compliance
        Act, US 2010) et <strong>CRS</strong> (Common Reporting Standard,
        OCDE 2014). Voici exactement ce qui est échangé entre la BCT,
        l&apos;IRS et les autorités fiscales tunisiennes en 2026 — et
        comment opérer en conformité.
      </p>

      <h2>FATCA — les Tunisiens sont concernés depuis 2018</h2>
      <ul>
        <li>
          <strong>Date d&apos;application Tunisie</strong> : Convention
          intergouvernementale (IGA) Tunisie-US signée 13 mai 2018,
          entrée en vigueur 1er janvier 2019.
        </li>
        <li>
          <strong>Qui est concerné</strong> : toute banque tunisienne
          doit reporter à la BCT (puis IRS) les comptes détenus par des
          &laquo; US persons &raquo; (citoyens US, résidents US, et
          entités contrôlées par des US persons).
        </li>
        <li>
          <strong>Important pour TN résident</strong> : tu n&apos;es
          PAS un &laquo; US person &raquo;. Ta LLC US owned by foreign
          person N&apos;EST PAS &laquo; US person &raquo; au sens
          FATCA tant que tu n&apos;es pas US resident (Green Card ou
          substantial presence). Donc FATCA <em>ne te concerne pas
          directement</em>.
        </li>
        <li>
          <strong>Indirectement</strong> : Mercury / Relay / Wise
          Business demandent un W-8BEN ou W-8BEN-E pour confirmer ton
          statut non-US person. C&apos;est exactement pour FATCA
          compliance côté US.
        </li>
      </ul>

      <h2>CRS — Tunisie signataire depuis 2017</h2>
      <ul>
        <li>
          <strong>Date d&apos;application Tunisie</strong> : la BCT a
          signé l&apos;accord OCDE Multilateral Competent Authority
          Agreement (MCAA) en 2017, premier exchange en septembre
          2018.
        </li>
        <li>
          <strong>Qui est concerné</strong> : <em>tu l&apos;es</em>{" "}
          en tant que résident fiscal tunisien avec comptes
          financiers à l&apos;étranger.
        </li>
        <li>
          <strong>Ce qui est échangé</strong> : si tu as un compte
          bancaire dans un pays signataire CRS (US <em>n&apos;est
          PAS</em> signataire CRS, mais France, UK, Germany, UAE,
          plupart de l&apos;OCDE+ et middle east le sont), ce
          compte est reporté annuellement à la BCT → autorités
          fiscales tunisiennes (DGI).
        </li>
        <li>
          <strong>Information échangée</strong> :
          <ul>
            <li>Nom du compte holder</li>
            <li>Numéro CIN / passport</li>
            <li>Adresse résidence Tunisie</li>
            <li>Numéro de compte + nom de la banque</li>
            <li>Balance au 31 décembre</li>
            <li>Total des crédits annuels</li>
          </ul>
        </li>
      </ul>

      <h2>Pourquoi le US n&apos;est PAS signataire CRS</h2>
      <ul>
        <li>
          Les US ont leur propre système (FATCA) qui ne demande PAS
          de réciprocité bilatérale complète. Les US reçoivent
          info des banques étrangères sur les US persons, mais ne
          partagent pas symmetrically les info sur étrangers
          détenant comptes US.
        </li>
        <li>
          <strong>Conséquence pratique pour toi</strong> : ton compte
          Mercury US (en tant que TN-resident) n&apos;est PAS reporté
          automatiquement à la DGI tunisienne via CRS.
        </li>
        <li>
          <strong>Mais</strong> : ton compte Mercury reporte ses
          info à l&apos;IRS (Form 1099-K émis si volume Stripe payouts
          via Mercury &gt; 600 USD/an seuil 2026). L&apos;IRS pourrait
          en théorie demander la DGI dans le cadre d&apos;une enquête
          fiscale spécifique, mais l&apos;échange n&apos;est pas
          automatique.
        </li>
      </ul>

      <h2>Tunisie + LLC US — ton obligation déclarative IRPP</h2>
      <ul>
        <li>
          <strong>Tu DOIS déclarer en Tunisie</strong> les revenus de
          ta LLC US — c&apos;est ton obligation IRPP en tant que
          résident tunisien (worldwide income).
        </li>
        <li>
          <strong>Article 36 du Code IRPP TN</strong> exonère certains
          revenus de source étrangère <em>déjà imposés à la source</em>.
          Mais pour une SMLLC US pass-through, AUCUNE imposition au
          niveau LLC. Donc l&apos;Article 36 NE s&apos;applique PAS —
          tu dois déclarer ces revenus comme revenus de source
          étrangère imposables au taux marginal IRPP TN (15-35%).
        </li>
        <li>
          <strong>Référence comptable obligatoire</strong> : engage
          un fiscaliste tunisien spécialisé pour ton premier filing.
          Cabinet KHIARI partenaire NOHO peut référer. Honoraires
          800-2 500 TND/an typique selon complexité.
        </li>
      </ul>

      <h2>Pays signataires CRS qui te concernent (en tant que résident TN)</h2>
      <p>
        Si tu as un compte bancaire dans l&apos;un de ces pays comme
        résident TN, ce compte est reporté à la DGI tunisienne :
      </p>
      <ul>
        <li>EU complet (France, Allemagne, Italie, etc.)</li>
        <li>UK</li>
        <li>UAE (depuis 2018)</li>
        <li>Saudi Arabia (depuis 2018)</li>
        <li>Egypte (depuis 2019)</li>
        <li>Morocco (depuis 2021)</li>
        <li>Switzerland (avec délai différé)</li>
        <li>Canada</li>
        <li>Liste complète mise à jour sur OECD AEOI Portal</li>
      </ul>
      <p>
        <strong>Pays NON-signataires CRS importants</strong> : USA,
        Hong Kong (avec exceptions), certains paradis fiscaux. Tu peux
        avoir compte là-bas sans report automatique vers TN.
      </p>

      <h2>Scénarios concrets — qui voit quoi</h2>

      <h3>Scénario 1 — Freelance TN avec LLC US + Mercury</h3>
      <ul>
        <li>
          Mercury → IRS : 1099-K si payouts &gt; 600 USD/an.
        </li>
        <li>
          Mercury → DGI Tunisie : <strong>NON</strong>. US pas
          signataire CRS.
        </li>
        <li>
          Toi → DGI Tunisie : <strong>OBLIGATOIRE</strong> déclaration
          revenus dans IRPP annuel. Risque amende + intérêts si tu
          omets.
        </li>
      </ul>

      <h3>Scénario 2 — LLC US + Wise Business (compte en EU)</h3>
      <ul>
        <li>
          Wise (entité EU) → DGI Tunisie via CRS si Wise détecte que
          le beneficial owner est TN-resident.
        </li>
        <li>
          Wise → IRS via FATCA : SEULEMENT si tu déclares être US
          person. Tu signes W-8BEN attestant non-US, donc pas
          report FATCA.
        </li>
        <li>
          Toi → DGI Tunisie : déclaration obligatoire IRPP.
        </li>
      </ul>

      <h3>Scénario 3 — LLC US + compte personnel Wise EUR personnel</h3>
      <ul>
        <li>
          Wise personnel EUR (entité Wise Europe) → DGI Tunisie via
          CRS annuel.
        </li>
        <li>
          C&apos;est pourquoi NOHO recommande de garder TOUS les
          flux business sur Mercury (US) pour limiter le periphery
          CRS-reported.
        </li>
      </ul>

      <h3>Scénario 4 — TN-resident avec compte BCT PPR USD (post déc 2025)</h3>
      <ul>
        <li>
          BCT → DGI Tunisie : OUI, automatiquement (compte domestique
          tunisien).
        </li>
        <li>
          BCT → IRS : NON (Tunisie pas FATCA reporter).
        </li>
        <li>
          Toi → DGI : déclaration solde + flux annuel obligatoire.
        </li>
      </ul>

      <h2>Stratégie de conformité — 5 principes pour fondateur TN avec LLC US</h2>
      <ol>
        <li>
          <strong>Déclare TOUS tes revenus LLC US à la DGI
          tunisienne</strong>. Ne pas faire ça = fraude fiscale,
          risque amende + intérêts + au pire poursuites.
        </li>
        <li>
          <strong>Engage un fiscaliste tunisien</strong> pour ton
          premier filing IRPP avec LLC US. Pas un comptable général
          mais un fiscaliste qui connaît la fiscalité internationale.
        </li>
        <li>
          <strong>Garde la documentation US</strong> : Form 5472 +
          1120 pro-forma déposés à l&apos;IRS, Mercury statements
          mensuels, Operating Agreement, EIN letter. Documentation
          5+ ans dispo en cas d&apos;audit BCT/DGI.
        </li>
        <li>
          <strong>Évite les structures multi-juridictions opaques</strong>{" "}
          (Cayman, BVI, Seychelles). Ces juridictions sont CRS
          signataires en 2026 et leurs comptes seront reportés. De
          plus, génèrent flag automatique au screening DGI/BCT.
        </li>
        <li>
          <strong>Anticipe l&apos;évolution réglementaire</strong>.
          Tunisie a réformé son Code des Changes en 2025-2026 et
          continue de durcir le contrôle. Maintenant la BCT autorise
          les comptes USD résidents mais elle vérifie aussi la
          déclaration en parallèle.
        </li>
      </ol>

      <h2>Le piège du &laquo; compte étranger non-déclaré &raquo;</h2>
      <p>
        Beaucoup de fondateurs TN pensent &laquo; mon compte US n&apos;est
        pas vu par la DGI, donc je ne déclare pas &raquo;. C&apos;est :
      </p>
      <ul>
        <li>
          <strong>Illégal</strong> en droit fiscal tunisien (Article
          16 Code IRPP).
        </li>
        <li>
          <strong>Risqué</strong> — même si Mercury n&apos;est pas
          dans CRS, la BCT peut découvrir par autre voie (wire
          inbound depuis Wise EU → BCT compte TN tracé).
        </li>
        <li>
          <strong>Sanctions</strong> : amende 200-2000% du montant
          non-déclaré + intérêts + risque poursuites pénales en cas
          de fraude récurrente.
        </li>
      </ul>

      <h2>L&apos;exception Article 21 du traité TN-USA (étudiants)</h2>
      <p>
        Si tu es <strong>étudiant tunisien F-1 aux US</strong>, le
        traité Tunisie-USA 1985 Article 21 exonère les premiers 9 000
        USD/an de revenus US-source au fédéral US (mais pas Tunisia
        IRPP). Ce traité ne s&apos;applique PAS aux fondateurs LLC US
        résidents TN — c&apos;est purement étudiant.
      </p>

      <h2>Le rôle de NOHO en compliance internationale</h2>
      <ul>
        <li>
          <strong>NOHO ne fait pas</strong> de conseil fiscal direct
          (pas habilité).
        </li>
        <li>
          <strong>NOHO référe</strong> à fiscalistes tunisiens
          partenaires (via cabinet KHIARI à Tunis).
        </li>
        <li>
          <strong>NOHO Suivi mensuel coordonne</strong> le filing
          Form 5472 + 1120 pro-forma avec CPA partenaire US (côté
          IRS).
        </li>
        <li>
          <strong>NOHO documente</strong> ton dossier de manière à ce
          que ton fiscaliste TN puisse facilement faire ton filing
          IRPP — statements Mercury organisés, Form 1099-K archivés,
          etc.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        FATCA ne te concerne pas directement (tu n&apos;es pas US
        person). CRS te concerne si tu as comptes en pays signataires
        (mais pas Mercury US). Ton OBLIGATION FONDAMENTALE est
        déclarer tes revenus LLC US à la DGI tunisienne via IRPP.
        Engage un fiscaliste TN spécialisé pour ne pas te tromper.
      </p>

      <h2>Et maintenant ?</h2>
      <p>
        Tu opères avec LLC US depuis Tunis et tu veux clarifier ton
        obligation déclarative IRPP ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On regarde ton
        setup et on te référe au fiscaliste tunisien partenaire le
        plus adapté à ton profil.
      </p>
    </>
  );
}
