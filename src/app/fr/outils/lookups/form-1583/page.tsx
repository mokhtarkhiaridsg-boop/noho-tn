import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Form 1583 USPS depuis la Tunisie — qui peut vérifier ta signature",
  description:
    "Le Form 1583 autorise NOHO Mailbox à recevoir ton courrier en ton nom. Selon l'USPS, la signature se fait devant un employé du CMRA ou un notaire commissionné aux États-Unis — un notaire tunisien n'est pas accepté. Pièces d'identité et étapes.",
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
            et signature
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
              <li>• <strong>Formulaire officiel USPS</strong> (PS Form 1583), encadré par le Domestic Mail Manual, section 508.1.8</li>
              <li>• Autorise un CMRA (Commercial Mail Receiving Agency) à recevoir le courrier en ton nom</li>
              <li>• Sans Form 1583 signé et vérifié selon la règle USPS, le CMRA ne peut pas recevoir ton courrier</li>
              <li>• Obligation à vie de la LLC tant que l&apos;adresse mailbox est active</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
              La règle USPS
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
              Selon le Domestic Mail Manual de l&apos;USPS (section 508.1.8.3), tu signes le
              Form 1583 en présence, physique ou par vidéo en temps réel, d&apos;un employé
              autorisé du CMRA, <strong>ou</strong> devant un notaire commissionné dans un État
              américain. Une signature électronique sans cette vérification n&apos;est pas
              valable, et <strong>un notaire tunisien n&apos;est pas accepté</strong>, même
              pour une copie certifiée.
            </p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Les 2 façons de faire vérifier ta signature
            </h2>
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl" style={{ background: CREAM }}>
                <h3 className="font-extrabold text-[16px] mb-2" style={{ color: INK }}>
                  Devant l&apos;équipe NOHO Mailbox
                </h3>
                <ol className="space-y-1 text-[13px]" style={{ color: INK }}>
                  <li>1. On te prépare le Form 1583 pré-rempli.</li>
                  <li>2. Tu signes devant un employé NOHO Mailbox, au comptoir du 5062 Lankershim Blvd à North Hollywood.</li>
                  <li>3. Tu n&apos;es pas aux États-Unis ? Écris-nous avant de payer : on t&apos;indique comment on procède pour ton cas.</li>
                </ol>
              </div>
              <div className="p-4 rounded-xl" style={{ background: "#FAFAF8" }}>
                <h3 className="font-extrabold text-[16px] mb-2" style={{ color: INK }}>
                  Devant un notaire commissionné aux États-Unis
                </h3>
                <ol className="space-y-1 text-[13px]" style={{ color: INK }}>
                  <li>1. Un notaire commissionné dans un État américain, en personne ou par vidéo en temps réel s&apos;il le propose.</li>
                  <li>2. Les frais du notaire sont à ta charge.</li>
                  <li>3. Confirme avec nous le format attendu avant de signer, puis transmets-nous le formulaire signé.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Les 2 pièces d&apos;identité
            </h2>
            <ol className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li><strong>1.</strong> Une pièce avec photo : le passeport est accepté.</li>
              <li><strong>2.</strong> Une deuxième pièce, par exemple ta CIN tunisienne. L&apos;équipe confirme qu&apos;elle est acceptée avant la signature. Une facture (électricité, téléphone) n&apos;est pas une pièce valable.</li>
              <li><strong>3.</strong> Les deux pièces portent <strong>exactement le même nom</strong> que le formulaire.</li>
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
              <li>• Si l&apos;orthographe diffère entre le Form 1583 et le passeport, corrige avant de signer.</li>
              <li>• Si tu passes par un notaire américain : date et lieu figurent sur son certificat.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Renouvellement et changement
            </h2>
            <ul className="space-y-1 text-[13.5px]" style={{ color: INK }}>
              <li>• Form 1583 reste valable tant que ton mailbox NOHO est actif.</li>
              <li>• Si tu changes de nom (mariage, etc.), tu signes un nouveau Form 1583.</li>
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
