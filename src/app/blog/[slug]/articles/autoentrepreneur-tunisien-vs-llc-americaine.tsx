import Link from "next/link";

export function autoentrepreneurVsLlc() {
  return (
    <>
      <p>
        Tu factures déjà des clients étrangers en USD ou EUR, et tu te
        demandes si le statut <strong>autoentrepreneur (AE)</strong>{" "}
        tunisien suffit, ou si tu dois passer à une <strong>LLC
        américaine</strong>. Voici la math honnête, avec les frais
        réels, pas le marketing.
      </p>

      <h2>Le régime AE tunisien (rappel)</h2>
      <ul>
        <li>
          Plafond de CA : 75 000 TND/an pour activité de service (50
          000 TND pour commerce/artisanat).
        </li>
        <li>
          Forfait fiscal : 200-400 TND/trimestre selon zone et type
          d&apos;activité. Donc <strong>800-1 600 TND/an
          tout-compris</strong>.
        </li>
        <li>
          Pas de TVA à facturer (sauf option).
        </li>
        <li>
          Inscription rapide (1-2 semaines) auprès du Bureau de
          l&apos;Emploi Indépendant.
        </li>
        <li>
          Tu peux ouvrir un compte en devises (BIAT, Attijari) pour
          recevoir des paiements étrangers.
        </li>
      </ul>

      <h2>La LLC américaine (rappel)</h2>
      <ul>
        <li>
          Frais de création + EIN + adresse 12 mois : 4 000 TND une
          fois (via NOHO Solution Business).
        </li>
        <li>
          Frais annuels Wyoming : 60 USD/an (~185 TND).
        </li>
        <li>
          Form 5472 annuel obligatoire : ~250 USD via CPA partenaire
          (~770 TND) ou faisable soi-même.
        </li>
        <li>
          Stripe, PayPal Business, Mercury disponibles. Tu factures
          n&apos;importe quel client mondial.
        </li>
        <li>
          Pas d&apos;impôt fédéral US sur le revenu LLC (pass-through),
          mais l&apos;IRPP TN s&apos;applique toujours sur tes revenus
          (article 6 loi 91-25).
        </li>
      </ul>

      <h2>Comparaison sur 5 ans</h2>
      <p>
        Hypothèse : un freelance qui facture 40 000 TND/an de clients
        étrangers (~12 800 USD).
      </p>
      <ul>
        <li>
          <strong>Régime AE</strong> :
          <ul>
            <li>Forfait fiscal : 1 200 TND/an × 5 = 6 000 TND</li>
            <li>Frais de change perçus par les banques TN sur
              conversion : ~3% × 40 000 × 5 = 6 000 TND</li>
            <li>Outils SaaS payés via carte tech (limite 1 000 TND
              chaque année — friction permanente)</li>
            <li>Stripe inaccessible — perte d&apos;opportunité
              difficile à chiffrer</li>
            <li><strong>Total visible : ~12 000 TND</strong></li>
          </ul>
        </li>
        <li>
          <strong>LLC américaine + AE TN en parallèle</strong> :
          <ul>
            <li>Setup LLC NOHO : 4 000 TND une fois</li>
            <li>Wyoming + Form 5472 annuel : (185 + 770) × 5 = 4 775 TND</li>
            <li>Forfait AE TN : 1 200 × 5 = 6 000 TND (tu gardes
              l&apos;AE pour les clients TN éventuels)</li>
            <li>Frais Wise pour rapatrier en TND (~0.5%) : 0.5% × 40
              000 × 5 = 1 000 TND</li>
            <li>Stripe + PayPal accessibles — gain de clientèle
              significatif</li>
            <li><strong>Total visible : ~15 775 TND</strong></li>
          </ul>
        </li>
      </ul>

      <p>
        Différence brute sur 5 ans : <strong>~3 800 TND de plus avec
        la LLC</strong>. Mais cette différence est très souvent
        compensée par :
      </p>
      <ul>
        <li>Le gain de clientèle US/EU qui ne paie qu&apos;à des entités avec compte Stripe (souvent 30-50% des prospects).</li>
        <li>La crédibilité d&apos;avoir une entité US (clients qui paient plus cher).</li>
        <li>L&apos;élimination de la friction de la carte technologique (tu peux acheter tous les SaaS dont tu as besoin sans plafond).</li>
      </ul>

      <h2>Le seuil de bascule</h2>
      <p>
        Calcul simple : si tu factures <strong>plus de 20 000 TND/an
        de clients étrangers</strong> qui paient typiquement par
        carte/Stripe, la LLC se justifie. En dessous, le régime AE
        seul est plus simple et moins cher.
      </p>
      <p>
        Si tu factures &gt; 75 000 TND/an, tu dépasses le plafond AE
        et tu dois passer à un autre régime (réel simplifié ou
        société). La LLC + AE devient quasi-obligatoire.
      </p>

      <h2>Quand garder uniquement l&apos;AE</h2>
      <ul>
        <li>Tu vises moins de 20 000 TND/an de clients étrangers.</li>
        <li>Tu peux facturer en TND (clients Maghreb, Moyen-Orient acceptant le SWIFT).</li>
        <li>Stripe / Stripe-only clients ne sont pas dans ton mix.</li>
      </ul>

      <h2>Quand basculer en LLC</h2>
      <ul>
        <li>Tes clients US demandent un W-9 ou refusent de signer un W-8BEN.</li>
        <li>Tu veux accepter des paiements par carte sur ton site (Stripe).</li>
        <li>Tu envisages d&apos;embaucher du contractor US-based.</li>
        <li>Tu vends sur Amazon, Etsy, Shopify, Walmart US.</li>
      </ul>

      <h2>Le combo intelligent</h2>
      <p>
        Beaucoup de freelances tunisiens performent mieux avec{" "}
        <strong>AE + LLC en parallèle</strong> : l&apos;AE pour la
        crédibilité TN locale et la simplicité fiscale, la LLC pour
        l&apos;accès aux paiements et clients US.{" "}
        <Link href="/business/tn-vs-us" className="font-bold underline" style={{ color: "#337485" }}>
          Voir le comparateur TN vs US complet
        </Link>{" "}
        pour les critères de décision détaillés.
      </p>
    </>
  );
}
