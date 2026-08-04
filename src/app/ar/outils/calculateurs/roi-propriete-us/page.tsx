import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "حاسبة ROI عقار أمريكي — cap rate و cash-on-cash للمستثمرين التونسيين",
  description: "احسب المردود الحقيقي لشراء عقار في الولايات المتحدة من تونس. cap rate و cash-on-cash مع كل النفقات الخفية.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/calculateurs/roi-propriete-us" },
};

export default function ArRoiPage() {
  return <ArabicStub frHref="/fr/outils/calculateurs/roi-propriete-us" frTitleAr="حاسبة ROI العقار الأمريكي" />;
}
