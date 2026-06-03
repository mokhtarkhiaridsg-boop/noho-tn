import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البحث عن حالة LLC في Secretary of State — وايومنغ وديلاوير ونيو مكسيكو",
  description: "تحقق من حالة شركتك LLC الأمريكية (نشطة، Delinquent، Dissolved) مباشرة على البوابات الرسمية للسكرتير العام للولايات الثلاث.",
  alternates: { canonical: "https://noho.tn/ar/outils/lookups/llc-status" },
};

export default function ArLlcLookupPage() {
  return <ArabicStub frHref="/outils/lookups/llc-status" frTitleAr="البحث عن حالة LLC في Secretary of State" />;
}
