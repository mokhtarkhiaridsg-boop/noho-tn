import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Wise Business تونس 2026 — الوضع الحقيقي للمؤسس التونسي ومزيج Mercury+Wise+BCT PPR",
  description: "Wise Business متاح للمقيمين التونسيين ولكن بقيود رئيسية (USD inbound مقيد للشركات التونسية، يعمل لـ LLC US). 3 طرق للاستخدام، مقارنة مباشرة مع Mercury، ومزيج Mercury + Wise + BCT PPR USD الذي يصبح معيار 2026.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/wise-business-tunisie-2026-statut-reel" },
};

export default function ArWiseBusinessPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/wise-business-tunisie-2026-statut-reel"
      frTitleAr="Wise Business تونس 2026 — الوضع الحقيقي"
    />
  );
}
