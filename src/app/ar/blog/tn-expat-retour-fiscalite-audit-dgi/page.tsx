import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "العودة من المهجر إلى تونس — الضرائب 18 شهراً تحضيرات + دليل تدقيق DGI (2026)",
  description: "تعود نهائياً إلى تونس بعد 5-15 سنة في الولايات المتحدة/كندا/فرنسا/الإمارات. الجدول الزمني T-18 شهراً، تدقيق التراث، التصفية الاستراتيجية، توثيق 4 سنوات. التزامات DGI السنة الأولى.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/tn-expat-retour-fiscalite-audit-dgi" },
};

export default function ArExpatRetourPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/tn-expat-retour-fiscalite-audit-dgi"
      frTitleAr="العودة من المهجر — الضرائب والتدقيق DGI"
    />
  );
}
