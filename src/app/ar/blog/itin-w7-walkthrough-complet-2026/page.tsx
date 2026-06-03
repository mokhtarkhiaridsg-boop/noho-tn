import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "ITIN W-7 — دليل كامل بـ 3 طرق للمؤسس التونسي (2026)",
  description: "متى تحتاج ITIN (إتاوات KDP، AdSense، C-Corp Atlas، عقارات أمريكية) ومتى لا تحتاج. 3 طرق: إرسال جواز السفر الأصلي DHL (8-12 أسبوعًا)، CAA (6-10 أسابيع، احتفظ بجواز السفر)، التقديم خلال زيارة الولايات المتحدة TAC IRS (4-7 أسابيع، الأسرع).",
  alternates: { canonical: "https://noho.tn/ar/blog/itin-w7-walkthrough-complet-2026" },
};

export default function ArItinW7Page() {
  return (
    <ArabicStub
      frHref="/blog/itin-w7-walkthrough-complet-2026"
      frTitleAr="ITIN W-7 — دليل كامل بـ 3 طرق"
    />
  );
}
