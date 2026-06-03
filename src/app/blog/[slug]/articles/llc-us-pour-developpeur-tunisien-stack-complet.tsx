import Link from "next/link";

export function llcUsPourDeveloppeurTunisienStackComplet() {
  return (
    <>
      <p>
        Tu es développeur tunisien (full-stack, mobile, DevOps, backend
        SaaS) et tu factures des clients internationaux. Voici le stack
        opérationnel complet qu&apos;on met en place pour un dev TN en
        2026 — du Stripe direct au cloud hosting, en passant par
        l&apos;identité business et la sécurité des paiements. Pas une
        liste générique : ce qu&apos;on shippe vraiment.
      </p>

      <h2>Niveau 1 — Entité légale</h2>
      <ul>
        <li>
          <strong>LLC Wyoming SMLLC</strong> formée en 5-7 jours via
          NOHO. Articles of Organization + registered agent
          California-based.
        </li>
        <li>
          <strong>EIN auprès de l&apos;IRS</strong> via fax SS-4 (15
          jours médiane pour non-US person). Tax classification :
          &laquo;Disregarded entity owned by a foreign person&raquo;.
        </li>
        <li>
          <strong>Operating Agreement signé</strong> spécifique
          SMLLC. Sans, Mercury demande quand même; on le génère
          inclus.
        </li>
        <li>
          <strong>Form 1583 USPS notarisé</strong> en interne par
          notre notaire californien.
        </li>
      </ul>

      <h2>Niveau 2 — Banking + payments</h2>
      <ul>
        <li>
          <strong>Mercury</strong> : compte business USD principal.
          1-3 semaines d&apos;approval typique post-dossier complet.
        </li>
        <li>
          <strong>Wise Business (LLC US)</strong> : compte
          multi-devises secondaire. Sert principalement à convertir
          USD → TND avec 0.4-0.6% spread (Mercury wire spread 1-2%).
        </li>
        <li>
          <strong>Stripe direct</strong> via LLC US. Configuration
          recommandée : 9-item stack pour passer manual review au
          premier essai (cf.{" "}
          <Link href="/blog/stripe-approval-9-item-stack-detail">
            détail stack
          </Link>
          ).
        </li>
        <li>
          <strong>Plan B Relay/Brex/Airwallex</strong> en parallèle —
          backup si Mercury ferme mid-activity.
        </li>
        <li>
          <strong>BCT PPR USD compte résident</strong> en Tunisie
          (depuis déc 2025) pour repatriation finale.
        </li>
      </ul>

      <h2>Niveau 3 — Facturation B2B aux US/EU</h2>
      <ul>
        <li>
          <strong>Stripe Invoicing</strong> ou{" "}
          <Link href="/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens">
            Paddle/Lemon Squeezy
          </Link>{" "}
          selon ton modèle (B2B custom = Stripe Invoicing ; B2C
          digital = Paddle).
        </li>
        <li>
          <strong>W-8BEN signé</strong> et envoyé à chaque client US
          qui te paie en B2B. Évite la retenue 30% FDAP. Article 7
          du traité Tunisie-USA 1985 référencé.
        </li>
        <li>
          <strong>Stripe Tax</strong> active si SaaS B2B EU/UK/CA
          (0.5%/transaction). Sinon TaxJar/Avalara si volume
          US-domestique &gt; 100K USD/an.
        </li>
        <li>
          <strong>Bookkeeping Wave (gratuit) ou Bench (~250
          USD/mo)</strong> pour comptabilité US si revenus &gt; 50K
          USD/an. Sinon Excel + CPA annuel suffit early-stage.
        </li>
      </ul>

      <h2>Niveau 4 — Cloud hosting + infrastructure</h2>
      <ul>
        <li>
          <strong>AWS US-east-1 ou US-west-2</strong> via compte
          créé sur LLC US (carte Mercury debit acceptée). Activate
          credits 5K USD via Stripe Atlas partnership si tu as
          formé via Atlas (sinon AWS Activate program direct).
        </li>
        <li>
          <strong>Vercel Pro (20 USD/mo)</strong> sur LLC US pour
          Next.js apps. Plan teams 25 USD/seat si tu collabores avec
          freelancers.
        </li>
        <li>
          <strong>Cloudflare US</strong> via LLC US — DNS + CDN +
          DDoS protection. Cloudflare Workers + R2 si tu builds des
          edge functions sans serveur.
        </li>
        <li>
          <strong>GitHub Pro (8 USD/mo)</strong> ou Team (4 USD/seat).
          GitHub Actions pour CI/CD.
        </li>
        <li>
          <strong>Sentry, LogRocket, Datadog</strong> selon scale.
          Tous paient via Mercury debit ou Stripe Atlas credits.
        </li>
      </ul>

      <h2>Niveau 5 — Identité de marque</h2>
      <ul>
        <li>
          <strong>Domaine .com sur LLC US</strong> via Cloudflare
          Registrar (sans markup, ~10 USD/an) ou Namecheap. Évite
          GoDaddy (markup + upsells).
        </li>
        <li>
          <strong>Google Workspace</strong> avec custom domain
          @tonbiznes.com (6-18 USD/user/mo).
        </li>
        <li>
          <strong>USPTO trademark</strong> du nom de marque (~300
          USD filing + ~600 USD avocat optionnel). Protège le nom
          dans toute la juridiction US.
        </li>
        <li>
          <strong>Site portfolio sous LLC US</strong> avec Stripe
          integration pour booking calls payés (Calendly Pro +
          Stripe).
        </li>
      </ul>

      <h2>Niveau 6 — Compliance annuelle</h2>
      <ul>
        <li>
          <strong>Form 5472 + pro-forma 1120</strong> annuel — IRS
          deadline 15 avril (sauf SMLLC Wyoming : 15 mars). Pénalité
          25K USD si oublié. NOHO Suivi mensuel coordonne le filing
          avec CPA partenaire.
        </li>
        <li>
          <strong>Wyoming annual report</strong> — 60 USD/an dû à la
          date anniversaire de formation.
        </li>
        <li>
          <strong>BCT IDE déclaration</strong> si capital LLC &gt;
          10K USD (cf.{" "}
          <Link href="/blog/bct-ide-declaration-llc-us-tunisie">
            détails BCT IDE
          </Link>
          ).
        </li>
        <li>
          <strong>IRPP tunisienne</strong> — revenus LLC pass-through
          déclarables sur ta déclaration TN (Article 36 IRPP ne
          protège PAS si tu n&apos;as pas payé tax US au niveau LLC).
          Référer comptable TN.
        </li>
      </ul>

      <h2>Niveau 7 — Cybersécurité opérationnelle</h2>
      <ul>
        <li>
          <strong>1Password Business</strong> pour vault credentials
          partagés (LLC US payée).
        </li>
        <li>
          <strong>YubiKey 5 NFC</strong> hardware key pour 2FA
          Mercury, Stripe, AWS, GitHub. ~50 USD via NOHO commande
          sur Amazon US et tu paies sur ton USD account.
        </li>
        <li>
          <strong>Apple Business Manager</strong> + MDM si tu
          provisions MacBooks pour contractors.
        </li>
        <li>
          <strong>Stripe Radar custom rules</strong> activées sur
          ton dashboard pour éviter fraude carte.
        </li>
        <li>
          <strong>Geographic restrictions</strong> sur Stripe pour
          bloquer pays high-risk si pertinent.
        </li>
      </ul>

      <h2>Stack final 12 mois — coûts récurrents typique</h2>
      <ul>
        <li>Wyoming annual : 60 USD</li>
        <li>Mercury + Stripe : 0 USD base (frais transactionnels)</li>
        <li>Vercel Pro : 240 USD</li>
        <li>Cloudflare : ~50 USD (domain + Workers basic)</li>
        <li>Google Workspace : 144 USD (1 user)</li>
        <li>GitHub Pro : 96 USD</li>
        <li>Sentry/LogRocket : 200-600 USD selon scale</li>
        <li>CPA US filing : 250-500 USD/an</li>
        <li>USPS Form 1583 mailbox : 35-150 TND/mois (selon plan)</li>
        <li>
          <strong>Total compliance + infra Y1 : ~1 500 - 2 500 USD</strong>
        </li>
      </ul>

      <h2>Quand passer à C-Corp Delaware</h2>
      <p>
        Quand tu vises levée VC dans les 18 mois OU tu engages 3+
        US employees avec ISOs. Sinon SMLLC pass-through reste le
        meilleur ratio coût/control pour dev solo / petite équipe.{" "}
        <Link href="/blog/passer-noho-wyoming-vers-stripe-atlas-cas-inverse">
          Voie de conversion détaillée
        </Link>
        .
      </p>

      <h2>CTA</h2>
      <p>
        Tu es dev tunisien et tu veux mettre en place ce stack ?{" "}
        <Link href="/appel">Réserve un appel</Link>. On audit ton
        cas (technos + revenue model + clients ciblés) et on prépare
        le plan d&apos;ordre — qu&apos;est-ce qu&apos;on shippe en
        premier, qu&apos;est-ce qu&apos;on attend.
      </p>
    </>
  );
}
