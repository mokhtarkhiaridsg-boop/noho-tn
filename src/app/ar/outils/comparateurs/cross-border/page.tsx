import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Wise مقابل Mercury مقابل Payoneer — مقارن تحويل العملات",
  description: "ثلاث طرق لإرجاع الدولار إلى تونس. الرسوم الحقيقية، المهل، والامتثال للبنك المركزي.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/comparateurs/cross-border" },
};

export default function ArCrossBorderPage() {
  return <ArabicStub frHref="/fr/outils/comparateurs/cross-border" frTitleAr="مقارن Wise مقابل Mercury مقابل Payoneer" />;
}
