import Link from "next/link";

export function stripeAtlasVsNohoProcedureTechnique() {
  return (
    <>
      <p>
        L&apos;article{" "}
        <Link href="/fr/blog/stripe-atlas-vs-noho-deep-dive" className="font-bold underline" style={{ color: "#337485" }}>
          Stripe Atlas vs NOHO Solution Business
        </Link>{" "}
        a comparé les deux services au niveau stratégique. Ici on
        descend en mode procédure technique : exactement ce que tu
        cliques, signes, attends, à chaque étape, avec Atlas vs NOHO.
        Aucune théorie. Que des écrans, formulaires et délais réels.
      </p>

      <h2>Étape 0 — Préparation commune (avant tout choix)</h2>
      <ol>
        <li>
          Passeport tunisien valide (validité &gt; 12 mois depuis ta date
          de filing).
        </li>
        <li>
          CIN scannée recto-verso, haute résolution, couleur.
        </li>
        <li>
          Justificatif d&apos;adresse TN &lt; 90 jours (facture STEG ou
          SONEDE ou statement bancaire).
        </li>
        <li>
          Email professionnel (pas Gmail générique, idéalement{" "}
          <code>prenomnom@ton-domaine.com</code>) — Stripe et Mercury
          scrutent.
        </li>
        <li>
          Téléphone WhatsApp actif (pour réponses à Mokhtar OU support
          Atlas par chat).
        </li>
        <li>
          NAICS code choisi (541613 marketing consulting, 541511 custom
          programming, 541618 management consulting, 541990 other
          professional services).
        </li>
      </ol>

      <h2>Voie A — Stripe Atlas (Delaware C-Corp ou LLC)</h2>

      <h3>A1. Création du compte Atlas — Jour 0</h3>
      <ol>
        <li>Va sur stripe.com/atlas. Clique &quot;Get started&quot;.</li>
        <li>
          Crée un compte Stripe en utilisant ton email pro + ton mot
          de passe.
        </li>
        <li>
          Sélectionne entity type : <strong>Delaware C-Corp</strong> (par
          défaut pour Atlas, optimal pour VC) ou Delaware LLC.
        </li>
        <li>
          Renseigne le legal name de l&apos;entité (vérifie unicité sur
          Delaware SoS first).
        </li>
        <li>
          Paie 500 USD via carte (si tu n&apos;as pas de carte US,
          Atlas accepte carte internationale avec frais Stripe).
        </li>
      </ol>

      <h3>A2. Filing Delaware — Jour 0-2</h3>
      <ol>
        <li>
          Atlas dépose les Articles of Incorporation auprès de Delaware
          Division of Corporations.
        </li>
        <li>
          File number assigné en 24-48h. Tu reçois email confirmation.
        </li>
        <li>
          Atlas envoie aussi le filing à Stripe internal underwriting.
          Approval Stripe Atlas (le compte de paiement, pas la corp) en
          parallèle.
        </li>
      </ol>

      <h3>A3. EIN application — Jour 2-12</h3>
      <ol>
        <li>
          Atlas applique pour ton EIN auprès de l&apos;IRS via SS-4 fax.
        </li>
        <li>
          Si tu n&apos;as pas de SSN/ITIN US (cas tunisien), Atlas
          marque &quot;Foreign person&quot; sur le SS-4.
        </li>
        <li>
          Délai IRS pour non-residents : <strong>4-6 semaines</strong>{" "}
          en 2026 (a augmenté depuis les coupes IRS staff 2024).
        </li>
        <li>
          Atlas track la demande et te notifie quand l&apos;EIN
          arrive.
        </li>
      </ol>

      <h3>A4. Operating documents — Jour 0-2 (parallèle au filing)</h3>
      <ol>
        <li>
          Atlas génère via Cooley LLP templates :
          <ul>
            <li>Certificate of Incorporation (déjà filed)</li>
            <li>Bylaws</li>
            <li>Action by Sole Incorporator</li>
            <li>Stock issuance forms (pour C-Corp)</li>
            <li>83(b) election form (préparation only — à filer dans 30 jours après stock grant)</li>
          </ul>
        </li>
        <li>
          Tu signes électroniquement via DocuSign (Atlas-intégré).
          C&apos;est acceptable pour ces docs (vs Form 1583 qui exige
          notarisation physique).
        </li>
      </ol>

      <h3>A5. 83(b) election filing — Jour 1-30 (CRITICAL)</h3>
      <ol>
        <li>
          Tu DOIS filer 83(b) dans <strong>30 jours calendaires</strong>{" "}
          après ton stock grant. Manquer ce délai = perte de l&apos;élection
          pour la vie de la corp.
        </li>
        <li>
          Atlas imprime le 83(b) form pré-rempli et te demande
          d&apos;envoyer par courrier physique à l&apos;IRS Service
          Center (adresse selon ton lieu de résidence).
        </li>
        <li>
          Depuis Tunis : DHL Express à l&apos;adresse IRS, ~30 USD,
          traçable. Garde le receipt.
        </li>
        <li>
          IRS ne confirme PAS reception. Tu n&apos;auras pas
          d&apos;acknowledgment. Le receipt DHL est ton seul proof.
        </li>
      </ol>

      <h3>A6. Mercury onboarding — Jour 30-45</h3>
      <ol>
        <li>
          Atlas pre-onboard ton dossier chez Mercury (partenaire).
        </li>
        <li>
          Tu reçois un lien pour finaliser ton application Mercury :
          KYC supplémentaire, source of funds, attendu activity.
        </li>
        <li>
          Mercury approval : 1-3 semaines pour profils Atlas (plus
          rapide que cold application). Taux d&apos;approval élevé
          mais pas 100%.
        </li>
        <li>
          Si Mercury reject : Atlas redirige vers Mercury Treasury
          (compte d&apos;épargne sans checking) ou Wise Business comme
          fallback.
        </li>
      </ol>

      <h3>A7. Stripe activation — Jour 45-55</h3>
      <ol>
        <li>
          Une fois EIN actif + Mercury en good standing, tu termines
          l&apos;onboarding Stripe.
        </li>
        <li>
          Stripe Atlas a un canal underwriting facilité — approval
          souvent en 24-72h une fois les pieces alignées.
        </li>
        <li>
          Tu reçois 5 000 USD de Stripe processing fee credits +
          ~45 000 USD en credits AWS / Notion / Carta / Brex /
          Mercury Treasury / etc.
        </li>
      </ol>

      <h3>A8. Compliance annuelle — récurrent</h3>
      <ol>
        <li>
          Delaware annual report + franchise tax (300 USD/an) due 1er
          juin. Atlas Annual Reporting Service à 199 USD/an inclut le
          dépôt.
        </li>
        <li>
          Form 1120 federal corporate tax return annuel. Tu engages un
          CPA US (~700-1 500 USD/an). Atlas a partner CPAs.
        </li>
        <li>
          Form 5472 si transactions avec related foreign parties
          (toi-même) &gt; 0. Souvent oui pour fondateur tunisien.
        </li>
        <li>
          83(b) déjà filed = pas d&apos;action récurrente sur ce point.
        </li>
      </ol>

      <h2>Voie B — NOHO Solution Business (Wyoming LLC)</h2>

      <h3>B1. Discovery call — Jour 0</h3>
      <ol>
        <li>
          Tu réserves 30 minutes sur Calendly NOHO. Appel Zoom OU
          WhatsApp video en français, arabe tunisien, ou anglais.
        </li>
        <li>
          Mokhtar passe le test des 5 questions de qualification (voir{" "}
          <Link href="/fr/blog/quand-ne-pas-former-llc-us" className="font-bold underline" style={{ color: "#337485" }}>
            Quand NE PAS former une LLC US
          </Link>
          ).
        </li>
        <li>
          Si fit OK : décision état (Wyoming par défaut), discussion
          activité business, choix nom LLC. Si non-fit : Mokhtar te le
          dit franchement, pas d&apos;upsell forcé.
        </li>
        <li>
          Tu reçois un devis écrit en email : 4 000 TND Solution
          Business + optionnel 1 200 TND/mois Suivi mensuel.
        </li>
      </ol>

      <h3>B2. Paiement + onboarding pack — Jour 1-3</h3>
      <ol>
        <li>
          Tu paies 4 000 TND par virement BIAT/Attijari/UIB OU par
          carte tech business (si applicable) OU par WiseTransfer si
          tu as un compte EUR/USD.
        </li>
        <li>
          NOHO envoie le onboarding pack :
          <ul>
            <li>Form CIN + passeport upload (encrypted)</li>
            <li>Choix nom LLC (Mokhtar vérifie unicité Wyoming
              SoS)</li>
            <li>Choix NAICS code (Mokhtar recommande selon ton
              activité)</li>
            <li>Profil business 1 page (brief)</li>
          </ul>
        </li>
      </ol>

      <h3>B3. Filing Wyoming LLC — Jour 3-5</h3>
      <ol>
        <li>
          Mokhtar dépose les Articles of Organization auprès du
          Wyoming Secretary of State via wyobiz.wy.gov.
        </li>
        <li>
          Frais Wyoming : 100 USD couvert par les 4 000 TND.
        </li>
        <li>
          Approval Wyoming : 24-48h. Tu reçois le Certificate of
          Formation par email.
        </li>
      </ol>

      <h3>B4. Operating Agreement — Jour 4-7</h3>
      <ol>
        <li>
          Mokhtar draft un{" "}
          <Link href="/fr/blog/operating-agreement-wyoming-smllc" className="font-bold underline" style={{ color: "#337485" }}>
            Operating Agreement Wyoming SMLLC
          </Link>{" "}
          adapté à ton profil tunisien (12 sections obligatoires,
          non-US person statement, anti-veil-piercing clauses).
        </li>
        <li>
          Tu reçois le PDF prêt à signer. Wyoming n&apos;exige pas
          notarisation, signature simple suffit. Sauvegarde signé en
          PDF + physique.
        </li>
      </ol>

      <h3>B5. EIN application — Jour 5-30 (parallèle filing)</h3>
      <ol>
        <li>
          Mokhtar applique pour ton EIN auprès de l&apos;IRS via SS-4
          fax. NAICS code et &quot;Foreign person&quot; renseigné.
        </li>
        <li>
          Délai IRS : <strong>3-5 semaines</strong>. Mokhtar suit
          weekly et fait les follow-ups si IRS demande clarifications.
        </li>
        <li>
          Tu reçois le CP 575 letter directement à ton mailbox NOHO
          5062 Lankershim. Mokhtar le scan + te le envoie en PDF
          sécurisé.
        </li>
      </ol>

      <h3>B6. Form 1583 — Jour 7-15</h3>
      <ol>
        <li>
          Mokhtar te envoie le Form 1583 USPS pré-rempli (adresse
          5062 Lankershim Suite, agent NOHO, ton nom legal).
        </li>
        <li>
          Tu signes devant un notary à Tunis OU au cabinet KHIARI
          (gratuit pour clients NOHO). Délai 2-5 jours.
        </li>
        <li>
          Tu expédies l&apos;original via DHL à 5062 Lankershim
          (~30 USD).
        </li>
        <li>
          NOHO traite le Form 1583 dès reception. Ton adresse US est
          alors officiellement active comme business address.
        </li>
      </ol>

      <h3>B7. Mercury onboarding — Jour 15-25</h3>
      <ol>
        <li>
          Mokhtar prépare le dossier Mercury renforcé en 9 éléments
          (voir{" "}
          <Link href="/fr/blog/mercury-kyc-dossier-renforce-9-elements" className="font-bold underline" style={{ color: "#337485" }}>
            Mercury KYC 9 éléments
          </Link>
          ).
        </li>
        <li>
          Tu soumets sur mercury.com avec ton EIN, Wyoming Certificate,
          Operating Agreement, ID. Mokhtar te guide ligne par ligne.
        </li>
        <li>
          Mercury underwriting : 1-3 semaines. Si demande info
          supplémentaire, Mokhtar drafte la réponse avec toi
          (WhatsApp, &lt; 24h).
        </li>
        <li>
          Optionnel : lettre KHIARI sur papier à en-tête en anglais
          jointe au dossier pour accélérer review.
        </li>
      </ol>

      <h3>B8. Stripe activation — Jour 25-35</h3>
      <ol>
        <li>
          Tu te connectes à stripe.com et apply avec ta LLC. Mokhtar
          te guide sur le 9-item stack (voir{" "}
          <Link href="/fr/blog/stripe-approval-9-item-stack-detail" className="font-bold underline" style={{ color: "#337485" }}>
            Stripe approval — 9-item stack
          </Link>
          ).
        </li>
        <li>
          Sans canal underwriting Atlas-direct, approval prend
          1-7 jours typique. Pour business activities clean (services,
          SaaS, e-com private label), majority approved en première
          lecture.
        </li>
        <li>
          Si Stripe demande docs supplémentaires (7 jours window),
          Mokhtar drafte la réponse dans 24h.
        </li>
      </ol>

      <h3>B9. Brand identity + site web — Jour 7-14 (parallèle)</h3>
      <ol>
        <li>
          NOHO design team livre :
          <ul>
            <li>Logo + variantes (Adobe Illustrator + PNG + SVG)</li>
            <li>Palette couleurs + typographie + 50 cartes de visite
              imprimées (livraison Tunis)</li>
            <li>Site web 6-8 pages sur ton domaine (achat domaine
              inclus, hébergement Vercel)</li>
            <li>Terms of Service / Privacy Policy / Refund Policy
              templates adaptés à ton activité</li>
            <li>Profils Instagram Business + TikTok Business + email
              pro</li>
          </ul>
        </li>
      </ol>

      <h3>B10. Compliance annuelle — récurrent</h3>
      <ol>
        <li>
          Wyoming annual report (60 USD/an, dû à l&apos;anniversaire
          LLC). Suivi mensuel le dépose automatiquement, sinon tu
          dois le faire toi-même.
        </li>
        <li>
          Form 5472 + 1120 pro-forma annuel (obligatoire pour non-US
          owned SMLLC, pénalité 25 000 USD si oubli). Coordination
          NOHO avec CPA partenaire ou tu fais toi-même (~250-500
          USD/an).
        </li>
        <li>
          Pas de 83(b) car LLC pass-through, pas C-Corp.
        </li>
      </ol>

      <h2>Timeline résumée</h2>
      <ul>
        <li>
          <strong>Atlas C-Corp DE</strong> : ~45-60 jours total, EIN
          étant le bottleneck principal. Stripe live en J+55.
        </li>
        <li>
          <strong>NOHO Wyoming LLC</strong> : ~25-35 jours total, EIN
          aussi bottleneck mais en parallèle des autres étapes. Stripe
          live en J+35.
        </li>
      </ul>

      <h2>Cash flow comparison Year 1</h2>
      <ul>
        <li>
          <strong>Atlas</strong> : 500 USD setup + 300 USD DE franchise
          + 199 USD Atlas Annual + 700 USD CPA = ~1 700 USD Year 1.
          Marque + site = +2 000 USD séparé. Total ~3 700 USD.
        </li>
        <li>
          <strong>NOHO Solution</strong> : 4 000 TND (~1 290 USD) =
          marque + site + LLC + EIN + Mercury setup inclus. Total
          ~1 290 USD Year 1. Suivi mensuel optionnel à 1 200 TND/mois
          si tu veux Form 5472 + Wyoming annual report automatisés.
        </li>
      </ul>

      <h2>Décision en une question</h2>
      <p>
        Pose-toi : <strong>vas-tu lever de la VC US institutionnelle
        dans les 18 mois ?</strong>
      </p>
      <ul>
        <li>OUI → Atlas C-Corp DE. Évite la conversion LLC → C-Corp future.</li>
        <li>NON → NOHO Wyoming LLC. Plus complet, moins cher, brand+site inclus.</li>
      </ul>
      <p>
        Si tu hésites,{" "}
        <Link href="/fr/contact" className="font-bold underline" style={{ color: "#337485" }}>
          écris-nous
        </Link>{" "}
        — on te dira honnêtement lequel des deux fit ton profil. Si
        Atlas est la meilleure réponse pour toi, on te le dira sans
        essayer de te vendre NOHO.
      </p>
    </>
  );
}
