import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lookup HTS code douane TN→US — comment classer ton produit",
  description:
    "Comment trouver le HTS code (Harmonized Tariff Schedule) pour exporter ton produit tunisien vers les USA. USITC search, classification self-test, et erreurs courantes.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/lookups/hts-code" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const RED = "#C73E2D";

const EXAMPLES = [
  {
    product: "Huile d'olive extra vierge (bouteille)",
    hts: "1509.10.20",
    duty: "5 cents/kg",
    notes: "Olive oil virgin, in containers <= 18 kg. Faible tarif, TN bénéficie de l'accord WTO MFN.",
  },
  {
    product: "Dattes Deglet Noor (séchées)",
    hts: "0804.10.20",
    duty: "1.4 cents/kg",
    notes: "Dates, dried, free of duty for some countries. TN paie le MFN rate standard.",
  },
  {
    product: "Tapis berbère tissé main",
    hts: "5701.10.16",
    duty: "0% (handmade artisanat)",
    notes: "Carpets, knotted, of wool, hand-woven. Avantage TN si certification artisanat.",
  },
  {
    product: "T-shirt coton (textile)",
    hts: "6109.10.00",
    duty: "16.5% ad valorem",
    notes: "T-shirts of cotton. Tarif élevé. Considère production locale aux US si volume.",
  },
  {
    product: "Logiciel SaaS / téléchargement digital",
    hts: "N/A",
    duty: "0% (services, pas de bien physique)",
    notes: "Les services digitaux ne traversent pas la douane. Pas de HTS code requis.",
  },
  {
    product: "Cosmétiques (crème visage)",
    hts: "3304.99.50",
    duty: "0% (most beauty products MFN)",
    notes: "Beauty/skin care preparations. Nécessite enregistrement FDA si claim médicale.",
  },
];

export default function HtsCodeLookupPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Lookup HTS code</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            HTS code douane{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              TN → US
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tu exportes des dattes, du tapis berbère, ou un produit
            artisanal vers les USA. Le HTS code détermine ton tarif
            douanier. Voici comment le trouver officiellement.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl" style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Méthode officielle USITC
            </h2>
            <ol className="space-y-2 text-[13.5px]" style={{ color: INK }}>
              <li><strong>1.</strong> Va sur le portail HTS USITC :{" "}
                <a href="https://hts.usitc.gov/" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE }}>
                  hts.usitc.gov
                </a>
              </li>
              <li><strong>2.</strong> Recherche par mot-clé (en anglais) — ex: &quot;olive oil&quot;, &quot;date&quot;, &quot;hand-woven carpet&quot;.</li>
              <li><strong>3.</strong> Affine par section : 8 sections (animal, végétal, mineral, chemicals, textile, metal, machinery, misc.).</li>
              <li><strong>4.</strong> Code HTS = 10 chiffres au total. Les 6 premiers sont l&apos;ISO international (HS code), les 4 derniers sont US-specific.</li>
              <li><strong>5.</strong> Note le General Rate (MFN) appliqué. Tunisia bénéficie du MFN (Most Favored Nation), pas d&apos;un FTA dédié.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Exemples HTS pour produits tunisiens fréquents
            </h2>
            <ul className="space-y-3">
              {EXAMPLES.map((e) => (
                <li key={e.hts + e.product} className="p-4 rounded-xl" style={{ background: CREAM }}>
                  <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                    <p className="font-bold text-[14.5px]" style={{ color: INK }}>{e.product}</p>
                    <span className="text-[12px] font-mono font-bold px-2 py-0.5 rounded" style={{ background: INK, color: CREAM }}>
                      {e.hts}
                    </span>
                  </div>
                  <p className="text-[12.5px] mb-1" style={{ color: GREEN }}>
                    <strong>Tarif :</strong> {e.duty}
                  </p>
                  <p className="text-[12.5px]" style={{ color: "rgba(45,16,15,0.7)" }}>{e.notes}</p>
                </li>
              ))}
            </ul>
            <p className="text-[11.5px] mt-3 italic" style={{ color: "rgba(45,16,15,0.6)" }}>
              Tarifs indicatifs basés sur HTS 2026. Vérifie le tarif exact
              pour ton HS code sur hts.usitc.gov avant chaque expédition —
              les tarifs sont révisés annuellement.
            </p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
              Erreurs courantes
            </p>
            <ul className="space-y-1 text-[13px]" style={{ color: INK }}>
              <li>• Utiliser le HS code 6 chiffres au lieu du HTS 10 chiffres. CBP rejette à l&apos;import.</li>
              <li>• Confondre &quot;general rate&quot; (MFN) et &quot;special rate&quot; (FTA). TN n&apos;a pas de FTA avec les US.</li>
              <li>• Sous-évaluer la valeur déclarée. CBP croise avec la commercial invoice et applique pénalité 2-4× la valeur cachée.</li>
              <li>• Omettre Country of Origin certificate. Pour les produits artisanaux, c&apos;est ce qui justifie le tarif préférentiel.</li>
              <li>• Ignorer la nouvelle règle CBP <strong>Aug 29, 2025</strong> sur l&apos;abolition du de minimis &lt; 800 USD. Désormais tout shipment paye droits.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Documents à présenter au CBP pour chaque envoi
            </h2>
            <ol className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li>1. Commercial Invoice (HTS code + valeur + description détaillée)</li>
              <li>2. Packing List (poids, dimensions, contenu par carton)</li>
              <li>3. Bill of Lading / Air Waybill</li>
              <li>4. Country of Origin Certificate (TN Chamber of Commerce)</li>
              <li>5. CE marking si applicable (rare pour exports US)</li>
              <li>6. FDA / USDA prior notice si food / cosmétique / médical</li>
              <li>7. Importer of Record info — ta LLC US avec son EIN</li>
            </ol>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hts.usitc.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM }}
            >
              Ouvrir HTS USITC →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
