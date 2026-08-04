import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adresse réelle à Tunis — scan + forwarding",
  description:
    "Adresse réelle à Tunis pour diaspora et résidents TN. Adresse réelle, scan de courrier, réception colis, réexpédition internationale. À partir de 50 TND/mois. Phase de pré-lancement.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/virtual-mailbox/tunisie" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const USE_CASES = [
  {
    t: "Diaspora qui reçoit du courrier TN",
    d: "Tu vis à Paris, Marseille, Montréal ou Dubaï mais tu reçois encore du courrier officiel en Tunisie (CIN, RIB, déclarations fiscales). Notre adresse Tunis devient ton point de réception. On scanne et on te forward.",
  },
  {
    t: "TN business — SARL/SUARL",
    d: "Tu enregistres une SARL ou SUARL et tu as besoin d'une adresse au RCS qui ne soit pas ton domicile. Notre adresse partenaire (via cabinet KHIARI) sert d'adresse enregistrée — vraie présence physique avec personnel.",
  },
  {
    t: "Privacy",
    d: "Tu lances ton activité freelance ou e-commerce et tu ne veux pas exposer ton adresse domicile sur le RCS, sur le Registre national des entreprises, ou sur tes factures clients. Notre adresse te sert d'écran propre.",
  },
  {
    t: "Inbound logistique",
    d: "Tes échantillons fournisseurs (Chine, Turquie, Europe) arrivent à notre adresse Tunis. On consolide et on te livre à Sfax, Sousse, Tunis quand tu en as besoin — au lieu que ça traîne à la Poste de ton quartier.",
  },
];

const COMBO = [
  {
    t: "TN + US en parallèle",
    d: "Boîte Tunis (50 TND/mo) + Boîte Los Angeles (35 TND/mo) = couverture complète. Tu reçois ton courrier IRS au 5062 Lankershim et ton courrier BCT à Tunis. On forward les deux vers Paris ou Sfax selon tes besoins.",
  },
  {
    t: "TN seul (résidents TN)",
    d: "Si tu n'as pas (encore) de LLC américaine, la boîte Tunis seule te suffit. Tu pourras toujours ajouter la boîte US plus tard quand ton activité l'exige.",
  },
];

export default function VirtualMailboxTunisiePage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: GREEN, color: "#fff" }}
          >
            Pré-lancement · ouverture en 2026
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Adresse réelle{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              à Tunis
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Adresse réelle à Tunis pour ton courrier, ton inbound colis et
            ton enregistrement SARL/SUARL. À partir de 50 TND/mois. En
            phase de pré-lancement — réserve ta place.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Pour qui ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {USE_CASES.map((u) => (
              <div key={u.t} className="p-6 rounded-2xl" style={{ background: CREAM }}>
                <h3 className="font-black text-[16px] mb-2" style={{ color: INK }}>{u.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo TN + US */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            La vraie originalité
          </p>
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Pont des deux côtés — TN + US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMBO.map((c) => (
              <div key={c.t} className="p-6 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-black text-[16px] mb-2" style={{ color: INK }}>{c.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] mt-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
            Aucun autre service ne propose ce combo. doola, Firstbase et
            Stripe Atlas n&apos;ont pas de présence Tunis. Les services TN
            existants n&apos;ont pas de présence US. NOHO opère les deux.
          </p>
        </div>
      </section>

      {/* Pré-lancement CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Réserve ta place
          </h2>
          <p className="text-[14.5px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            On ouvre l'adresse réelle Tunis aux premiers clients en
            2026. Place limitée à l&apos;arrivée — on construit la
            capacité au fur et à mesure pour garder la qualité.
            Inscris-toi pour être notifié dès l&apos;ouverture, sans
            engagement.
          </p>
          <Link
            href="/fr/contact"
            className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 24px rgba(45,16,15,0.24)" }}
          >
            Être notifié à l&apos;ouverture →
          </Link>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>
          <p className="font-black mb-2">Transparence — phase de pré-lancement</p>
          <p>
            L'adresse réelle Tunis n&apos;est pas encore opérationnelle.
            On finalise l&apos;adresse partenaire (via cabinet KHIARI à
            Tunis), le système de scan, et la conformité INPDP. On
            n&apos;accepte pas de paiement avant l&apos;ouverture
            effective. La date estimée d&apos;ouverture est 2026 — on
            communiquera dès que c&apos;est ferme.
          </p>
        </div>
      </section>
    </>
  );
}
