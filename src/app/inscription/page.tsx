import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const TEAL = "#337485";

export const metadata: Metadata = {
  title: "Inscription — adresse US 7a9i9ia m3a NOHO",
  description:
    "A3mel compte NOHO Mailbox. Adresse US 7a9i9ia fi Los Angeles, colis w courrier, tkhalles b dinar. El équipe ta3tik numéro el boîte mte3ek ba3d el vérification.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/inscription",
    languages: {
      "aeb-TN": "https://nohomailboxtunis.com/inscription",
      "fr-TN": "https://nohomailboxtunis.com/fr/inscription",
      "x-default": "https://nohomailboxtunis.com/inscription",
    },
  },
};

export default function InscriptionPage() {
  return (
    <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-2" style={{ color: TEAL }}>
          Inscription
        </p>
        <h1
          className="font-extrabold mb-3"
          style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.7rem, 4vw, 2.5rem)", color: INK }}
        >
          A3mel el compte mte3ek
        </h1>
        <p className="text-[15px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(45,16,15,0.75)" }}>
          Adresse US 7a9i9ia fi Los Angeles. Ba3d ma tab3ath el demande,
          tekhou email b les identifiants mte3ek, w l&apos;équipe ta3tik numéro
          el boîte.
        </p>

        <div
          className="grain relative rounded-[16px] p-5 sm:p-7"
          style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
        >
          <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: TEAL }} />
          <div className="relative z-[1]">
            <SignupForm />
          </div>
        </div>

        <p className="text-[13px] mt-6" style={{ color: "rgba(45,16,15,0.65)" }}>
          <Link href="/tarifs" className="underline font-black">
            Voir la grille tarifaire complète
          </Link>
        </p>
      </div>
    </section>
  );
}
