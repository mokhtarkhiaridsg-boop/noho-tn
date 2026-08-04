import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "التونسي-الفرنسي مزدوج الجنسية — الضرائب في 3 بلدان مع LLC",
  description: "أنت مزدوج الجنسية FR-TN. 3 إقامات ضريبية ممكنة، معاهدات تونس-فرنسا 1973 وفرنسا-الولايات المتحدة 1994 مع tiebreakers، فخ translucent/opaque في القضاء الفرنسي. الحالة الأكثر تعقيداً.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/tunisien-francais-binational-fiscalite-3-pays" },
};

export default function ArTnFrBinationalPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/tunisien-francais-binational-fiscalite-3-pays"
      frTitleAr="التونسي-الفرنسي مزدوج الجنسية — ضرائب 3 بلدان"
    />
  );
}
