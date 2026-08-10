import type { Metadata } from "next";
import LabelClient, { type LabelClientLabels } from "@/components/LabelClient";
import { waLink } from "@/lib/whatsapp";

/*
 * Tounsi (derja, Latin script) version of /shipping — condensed.
 * Hero + live Shippo label generator + short carriers note.
 * Claims sourced from the FR page: real carrier rates, no hidden margin,
 * payment settled in dinars (wallet / Cabinet Khiari), label PDF by email.
 */

export const metadata: Metadata = {
  title: "Expédition — Asna3 el Label Mte3ek w khalles bel TND",
  description:
    "USPS, UPS, FedEx, DHL — tarifs 7a9i9iyin, bla marge moukhabbia.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/shipping",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/shipping",
      "ar-TN": "https://nohomailboxtunis.com/ar/shipping",
      "aeb-TN": "https://nohomailboxtunis.com/shipping",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const TN_LABELS: LabelClientLabels = {
  intro:
    "Destination + colis → tarifs live 7a9i9iyin mta3 el transporteurs. Tekhtar elli yerta7lek, w el label yetsna3 ba3d ma tkhalles b dinar.",
  toName: "Nom du destinataire", street: "Adresse", city: "Ville", state: "Région/État", zip: "Code postal", country: "Pays (code — TN, FR, US…)",
  suite: "Votre suite NOHO (optionnel)", suiteHint: "ex. 122 — si le colis part de votre boîte",
  length: "Longueur (in)", width: "Largeur (in)", height: "Hauteur (in)", weight: "Poids (lb)",
  getRates: "Voir les tarifs en direct", gettingRates: "9a3din nes2lou el transporteurs…",
  pickRate: "Choisir ton tarif", days: "iyem",
  email: "Email mte3ek", phone: "Téléphone (optionnel)",
  order: "Commander ce label", ordering: "9a3din nab3thou el demande…",
  successTitle: "Demande weslet.",
  successBody: "Nkalmouk bch tkhalles b dinar, w el label PDF yjik bel email.",
  payNote: "Tkhalles b dinar — wallet wala Cabinet Khiari, Tunis. Ma fama 7atta khlas b carte 3al site.",
  back: "Modifier le colis",
};

const CARRIERS_TN = [
  { name: "USPS Priority Mail International", note: "El arkhas. 6-10 iyem." },
  { name: "USPS Priority Express International", note: "3-5 iyem, tracking kamel l Tounes." },
  { name: "UPS Worldwide Expedited", note: "3-5 iyem, signature fel livraison." },
  { name: "FedEx International Economy", note: "4-6 iyem, customs broker inclus." },
  { name: "DHL Express Worldwide", note: "El asra3 — 2-3 iyem, tracking en temps réel." },
];

export default function TounsiShippingPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Expédition US w international · men Los Angeles
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Expédition
          </h1>
        </div>
      </section>

      {/* LABEL GENERATOR — live Shippo rates, paid in dinars */}
      <section id="label" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="grain relative rounded-[16px] p-5 sm:p-7"
            style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
          >
            <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: BLUE }} />
            <div className="relative z-[1]">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: BLUE }}>
                tarifs live mta3 des transporteurs berasmi
              </p>
              <h2
                className="font-extrabold mb-3"
                style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "24px", color: INK }}
              >
                Asna3 el Label Mte3ek w khalles bel TND
              </h2>
              <LabelClient locale="tn" L={TN_LABELS} />
            </div>
          </div>
        </div>
      </section>

      {/* CARRIERS NOTE */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            5 transporteurs · Los Angeles → Tounes
          </h2>
          <p className="text-center text-[14px] mb-8 max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
            El tarifs elli tchoufhom fel formulaire houma el tarifs 7a9i9iyin
            mta3 el transporteurs — ma fama 7atta marge moukhabbia. Tekhtar
            enti 7asb el prix wel vitesse.
          </p>
          <ul className="space-y-2.5 mb-8">
            {CARRIERS_TN.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-2 p-4 rounded-2xl" style={{ background: CREAM }}>
                <span className="font-black text-[14px]" style={{ color: INK }}>{c.name}</span>
                <span className="text-[13px]" style={{ color: "rgba(45,16,15,0.7)" }}>{c.note}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <p className="text-[14px] mb-4" style={{ color: "rgba(45,16,15,0.75)" }}>
              Cas spécial — colis kbir, fragile, wala douane m3a9da ? Kalamna,
              nchoufou el wadh3 mte3ek w njawbouk bel options el 7a9i9iya.
            </p>
            <a
              href={waLink("colis")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.28)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
