import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "وايومنغ مقابل ديلاوير مقابل نيو مكسيكو — مقارن الولايات لشركة LLC",
  description: "جدول مقارنة الولايات الثلاث الأكثر استخداماً للمؤسسين غير المقيمين في الولايات المتحدة.",
  alternates: { canonical: "https://noho.tn/ar/outils/comparateurs/etats-llc" },
};

export default function ArEtatsLlcPage() {
  return <ArabicStub frHref="/outils/comparateurs/etats-llc" frTitleAr="مقارن الولايات لشركة LLC" />;
}
