import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "تأشيرة E-2 المستثمر — الطريق التونسي غير المعروف (إجراء مفصل 2026)",
  description: "تونس دولة موقعة على معاهدة E-2 مع الولايات المتحدة منذ 1990. طريق غير مستخدم بشكل كافٍ للعيش وتشغيل أعمال أمريكية بدون green card. الإجراء الكامل، مبلغ الاستثمار، 5 معايير القنصلية، 7 أخطاء يجب تجنبها.",
  alternates: { canonical: "https://noho.tn/ar/blog/visa-e2-tunisie-investisseur-procedure-detaillee" },
};

export default function ArVisaE2Page() {
  return (
    <ArabicStub
      frHref="/blog/visa-e2-tunisie-investisseur-procedure-detaillee"
      frTitleAr="تأشيرة E-2 المستثمر للتونسيين"
    />
  );
}
