import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lookup Form 1583 USPS — vérification et procédure de notarisation",
  description:
    "Form 1583 = autorisation USPS qui permet à NOHO de recevoir ton courrier en ton nom. Notarisé en personne (pas d'e-sign accepté). Le process complet et la voie KHIARI à Tunis.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/lookups/form-1583" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

export default function Form1583LookupPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Lookup Form 1583</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Form 1583 USPS —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              vérification
            </span>{" "}
            et notarisation
          </h1>
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Le Form 1583 est le document USPS qui autorise NOHO à
            recevoir le courrier en ton nom à 5062 Lankershim. Voici tout
            ce qu&apos;il faut savoir.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl" style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Ce qu&apos;est exactement le Form 1583
            </h2>
            <ul className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li>• <strong>Form officiel USPS</strong>, ref Publication 28 Section 2.5</li>
              <li>• Autorise un CMRA (Commercial Mail Receiving Agency) à recevoir le courrier en ton nom</li>
              <li>• Sans Form 1583 signé et notarisé, le CMRA ne peut PAS légalement recevoir ton courrier — USPS le retournera</li>
              <li>• Obligation à vie de la LLC tant que l&apos;adresse mailbox est active</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
              Pas d&apos;e-signature
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
              USPS Publication 28 §2.5 est explicite :{" "}
              <strong>la signature du Form 1583 doit être faite en personne devant un notary public</strong>,
              avec 2 pièces d&apos;identité vérifiées. E-signature DocuSign / HelloSign /
              Adobe Sign = <strong>refus systématique</strong>. C&apos;est la
              première erreur des concurrents Stripe Atlas / doola qui
              tentent de tout faire en ligne — ils livrent une mailbox
              dont l&apos;adresse meurt en 90 jours faute de Form 1583
              valable.
            </p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Les 2 voies pour signer Form 1583 depuis Tunis
            </h2>

            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded" style={{ background: GREEN, color: "#fff" }}>
                    Voie 1 — recommandée
                  </span>
                </div>
                <h3 className="font-extrabold text-[16px] mb-2" style={{ color: INK }}>
                  Notaire en Tunisie + DHL aller-retour
                </h3>
                <ol className="space-y-1 text-[13px]" style={{ color: INK }}>
                  <li>1. NOHO te prépare le Form 1583 pré-rempli (PDF).</li>
                  <li>2. Tu imprimes + signes devant un notaire en Tunisie OU au cabinet KHIARI à Tunis (notarisation locale).</li>
                  <li>3. Tu envoies le PDF scanné signé + ton ID à NOHO en email pour valider la procédure.</li>
                  <li>4. Tu expédies l&apos;original via DHL à 5062 Lankershim, NoHo, CA.</li>
                  <li>5. <strong>Délai total : 7-10 jours</strong>. Coût DHL ~30 USD.</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl" style={{ background: "#FAFAF8" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded" style={{ background: BLUE, color: "#fff" }}>
                    Voie 2 — pratique si tu voyages
                  </span>
                </div>
                <h3 className="font-extrabold text-[16px] mb-2" style={{ color: INK }}>
                  Notarisation en personne à LA chez NOHO
                </h3>
                <ol className="space-y-1 text-[13px]" style={{ color: INK }}>
                  <li>1. Tu passes par LA pour un voyage business / personnel.</li>
                  <li>2. Tu prends RDV avec Mokhtar à 5062 Lankershim (notary public certifié California).</li>
                  <li>3. Notarisation in-house, sur place, 30 minutes.</li>
                  <li>4. NOHO traite le Form 1583 le jour même.</li>
                  <li>5. <strong>Délai total : same-day si tu es à LA</strong>. Coût : 0 USD (inclus dans le Business).</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Les 2 IDs requis pour notarisation
            </h2>
            <ol className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li><strong>1.</strong> Passeport tunisien (photo principale visible, validité &gt; 6 mois).</li>
              <li><strong>2.</strong> Deuxième ID au choix :
                <ul className="mt-1 ml-4 text-[12.5px]" style={{ color: "rgba(45,16,15,0.75)" }}>
                  <li>• CIN tunisienne (recto-verso)</li>
                  <li>• Permis de conduire tunisien</li>
                  <li>• Carte d&apos;identité française (si binational FR-TN)</li>
                </ul>
              </li>
              <li><strong>3.</strong> Les 2 IDs doivent porter le <strong>même nom exactement</strong>. Variation orthographique = USPS refuse.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Que vérifier avant de signer
            </h2>
            <ul className="space-y-1 text-[13px]" style={{ color: INK }}>
              <li>• Box 7 : adresse complète NOHO Mailbox &quot;5062 Lankershim Blvd, Suite {`{ta suite}`}, North Hollywood, CA 91601&quot;</li>
              <li>• Box 12 : ton nom légal exact (matching passeport)</li>
              <li>• Box 14 : nom légal de ta LLC (matching Articles of Organization)</li>
              <li>• Si l&apos;orthographe diffère entre Form 1583 et passeport, USPS refuse — corrige avant notarisation.</li>
              <li>• Date de signature et lieu mentionnés sur le notarial certificate.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Renouvellement et changement
            </h2>
            <ul className="space-y-1 text-[13.5px]" style={{ color: INK }}>
              <li>• Form 1583 reste valable tant que ton mailbox NOHO est actif.</li>
              <li>• Si tu changes de nom (mariage, etc.), tu dois re-notariser un nouveau Form 1583.</li>
              <li>• Si tu changes l&apos;adresse de ta LLC (move out of CMRA), tu dois notifier USPS via Change of Address.</li>
              <li>• Si tu fermes ton mailbox NOHO, le Form 1583 expire automatiquement.</li>
            </ul>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/fr/notary"
              className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM }}
            >
              Voir le service notary →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
