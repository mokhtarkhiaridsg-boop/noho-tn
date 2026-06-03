import Link from "next/link";

export function stripeApproval9ItemStack() {
  return (
    <>
      <p>
        Stripe n&apos;a pas de back-office officiel qui dit oui ou non à
        chaque dossier. C&apos;est un mélange d&apos;automatic underwriting
        + un humain qui scanne ton account si tu trips un signal. Ton
        objectif est simple : ne pas tripper de signal. Voici le stack en
        9 éléments que les fondateurs tunisiens approuvés en 24-72h ont
        en commun en 2026.
      </p>

      <h2>Élément 1 — LLC US réelle (pas UK Ltd, pas Estonia OÜ)</h2>
      <ul>
        <li>
          Stripe US accepte les LLC US-formed. Stripe accepte mal les UK
          Ltd avec beneficial owner non-UK (cf. cas r/Tunisia 2025 de
          rejection systématique).
        </li>
        <li>
          Wyoming + Delaware + New Mexico passent. Idaho et Nevada
          aussi mais moins recommandés.
        </li>
        <li>
          Tu soumets Articles of Organization + Certificate of Good
          Standing (&lt; 30 jours) lors de la verification post-signup.
        </li>
      </ul>

      <h2>Élément 2 — EIN obtenu et synchronisé IRS</h2>
      <ul>
        <li>
          CP 575 letter ou Form 147C. PDF complet.
        </li>
        <li>
          <strong>Critical timing</strong> : si ton EIN a été émis dans
          les 3 dernières semaines, attends avant de soumettre Stripe. La
          base IRS prend 2-3 semaines pour sync avec les API que Stripe
          utilise pour cross-verifier ton EIN. Tôt = false-rejection
          auto.
        </li>
      </ul>

      <h2>Élément 3 — Compte bancaire US au nom de la LLC</h2>
      <ul>
        <li>
          Mercury, Relay, Wise Business, Brex acceptés. Mercury est le
          standard.
        </li>
        <li>
          <strong>L&apos;ordre matters</strong> : ouvre Mercury AVANT
          Stripe. Stripe demande le routing/account number d&apos;un US
          bank account au moment du payout setup. Si tu n&apos;as pas
          déjà ton Mercury actif, tu blocke ton onboarding Stripe à 80%.
        </li>
      </ul>

      <h2>Élément 4 — Adresse US réelle (CMRA staffé, pas PMB virtuel)</h2>
      <ul>
        <li>
          Le scanner Stripe cross-check ton adresse contre une database
          de virtual mailbox flaggés. iPostal1, Anytime Mailbox, Earth
          Class Mail = auto-flag, manual review déclenchée.
        </li>
        <li>
          NOHO 5062 Lankershim Blvd est un commercial storefront avec
          staff sur place et notarisation Form 1583 in-house. Stripe
          accepte.
        </li>
        <li>
          P.O. Box = auto-rejection. Adresse de registered agent seul =
          auto-rejection.
        </li>
        <li>
          Détail : utilise EXACTEMENT la même adresse partout (Articles
          of Org, EIN, Mercury, Stripe). Une virgule de différence
          déclenche manual review.
        </li>
      </ul>

      <h2>Élément 5 — W-8BEN signé (et pas W-9)</h2>
      <ul>
        <li>
          Si tu n&apos;es pas US person, signe W-8BEN. Voir l&apos;article
          dédié{" "}
          <Link href="/blog/w8ben-vs-w9-non-us-person" className="font-bold underline" style={{ color: "#337485" }}>
            W-8BEN vs W-9
          </Link>{" "}
          pour la règle complète.
        </li>
        <li>
          Stripe te propose souvent W-9 par défaut (interface US-first).
          Cherche le lien &quot;Non-US business owner&quot;. Signer W-9
          en tant que non-US person = fausse déclaration + retenue
          potentielle 30% si Stripe réalise plus tard.
        </li>
      </ul>

      <h2>Élément 6 — Business activity claire et low-risk</h2>
      <ul>
        <li>
          NAICS code à choisir parmi les low-risk :
          <ul>
            <li>541613 — Marketing Consulting</li>
            <li>541511 — Custom Computer Programming</li>
            <li>541618 — Other Management Consulting</li>
            <li>541990 — All Other Professional Services</li>
          </ul>
        </li>
        <li>
          Évite : crypto (523999), money services (522390), gambling,
          adult, replica goods, dropshipping (sans inventaire propre),
          MLM, debt collection.
        </li>
        <li>
          Pour SaaS / agency / e-com (vente de tes propres produits)
          : approval clean en 1-3 jours typique.
        </li>
      </ul>

      <h2>Élément 7 — Site web live + page contact + conditions</h2>
      <ul>
        <li>
          Site web sur un vrai domaine .com (pas .vercel.app, pas
          .netlify.app).
        </li>
        <li>
          Page <strong>Terms of Service</strong>, <strong>Privacy Policy</strong>,
          <strong>Refund Policy</strong> (même si tu vends services). Stripe
          regarde et flagge si absent.
        </li>
        <li>
          Page Contact mentionnant ton adresse business (5062 Lankershim
          chez NOHO), email pro (pas Gmail perso), téléphone US (Google
          Voice OK).
        </li>
        <li>
          Page About avec ta photo et background pro. Le scanner soft-KYC
          regarde.
        </li>
      </ul>

      <h2>Élément 8 — Cohérence d&apos;identité across le web</h2>
      <ul>
        <li>
          Profil LinkedIn complet à ton nom (matching le nom signé sur
          Stripe), avec ton entreprise actuelle.
        </li>
        <li>
          Page LinkedIn Company pour ta LLC, même minimaliste.
        </li>
        <li>
          Si tu factures B2B, idéal : 1-2 portfolio cases publiés
          mentionnant des projets clients.
        </li>
        <li>
          Le matching name LLC + LinkedIn + adresse + EIN = signal de
          crédibilité fort. Le mismatch = signal de fraude.
        </li>
      </ul>

      <h2>Élément 9 — Document supplémentaire si demandé (proactif vs réactif)</h2>
      <p>
        Stripe demande parfois des docs supplémentaires après initial
        signup. Anticipe :
      </p>
      <ul>
        <li>
          <strong>Beneficial owner verification</strong> : ton passeport
          + utility bill TN &lt; 90 jours.
        </li>
        <li>
          <strong>Business model proof</strong> : 1-2 invoices clients
          précédents (anonymisés), screenshots de produits si e-com,
          contract draft si B2B services.
        </li>
        <li>
          <strong>Source of capital</strong> : si tu fais des paiements
          tests &gt; 10K USD, Stripe demande la source. Sois prêt avec
          statement bancaire montrant le fonding.
        </li>
        <li>
          <strong>Tax form refresh</strong> : si ton W-8BEN expire 3 ans
          après signature.
        </li>
      </ul>

      <h2>Le scénario d&apos;approval clean</h2>
      <ol>
        <li>Jour 0 : signup Stripe avec EIN + Mercury déjà actifs depuis 4+ semaines.</li>
        <li>Jour 0-1 : automatic underwriting. Si tous les 9 éléments alignés, account passe à &quot;active&quot;.</li>
        <li>Jour 1-3 : tu peux déjà émettre des invoices et accepter des paiements tests.</li>
        <li>Jour 3-7 : premier payout vers Mercury, 2-day delay standard.</li>
        <li>Jour 7+ : 2-day payout cadence stable, pas de friction.</li>
      </ol>

      <h2>Le scénario d&apos;approval avec manual review</h2>
      <ol>
        <li>Jour 0 : signup avec 1-2 éléments flaggés (CMRA virtual, EIN trop récent, NAICS borderline).</li>
        <li>Jour 0 : compte créé mais en &quot;pending review&quot;.</li>
        <li>Jour 1-3 : email Stripe demandant des docs supplémentaires (3-5 items).</li>
        <li>Tu as 7 jours pour répondre. Réponses partielles = closure.</li>
        <li>Jour 3-7 : si docs OK, approval. Si manqué : rejection définitive avec 90 jours avant re-application possible.</li>
      </ol>

      <h2>Si tu es rejeté</h2>
      <ul>
        <li>
          Stripe ne dit jamais pourquoi exactement. Mais 80% des
          rejections sont sur address (CMRA flaggé) ou industry
          (high-risk).
        </li>
        <li>
          Plan B immédiat : Paddle ou Lemon Squeezy (MoR, plus tolérants
          mais 5% fees). Voir le{" "}
          <Link href="/outils/calculateurs/stripe-fees" className="font-bold underline" style={{ color: "#337485" }}>
            calculateur frais
          </Link>
          .
        </li>
        <li>
          Plan C : réessaie Stripe après 90 jours avec stack corrigé.
        </li>
      </ul>

      <h2>Le taux de réussite réel chez NOHO</h2>
      <p>
        Honnête disclosure : sur les dossiers Solution Business 2026, la
        majorité sont approuvés en 1-3 jours. Le 20-35% qui rencontrent
        une friction sont presque toujours sur 1 élément manquant
        identifiable. C&apos;est le rôle du Suivi mensuel
        d&apos;accompagner la response-to-info si Stripe demande des docs
        après initial signup. Sans accompagnement, beaucoup de fondateurs
        ratent la fenêtre 7 jours et perdent l&apos;account.
      </p>
    </>
  );
}
