import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "التصديق التونسي للاستخدام في الولايات المتحدة — إجراء MAE الكامل + 5 فخاخ (مايو 2026)",
  description: "تونس موقعة على اتفاقية لاهاي منذ 30 مارس 2018 — التصديق يكفي، لا حاجة للإجراء القنصلي. MAE تونس 20 د.ت، 2-7 أيام عمل. التكاليف الكاملة 80-140 USD مقابل 200-400 USD قبل 2018.",
  alternates: { canonical: "https://noho.tn/ar/blog/apostille-tunisienne-procedure-complete-mae" },
};

export default function ArApostillePage() {
  return (
    <ArabicStub
      frHref="/blog/apostille-tunisienne-procedure-complete-mae"
      frTitleAr="التصديق التونسي للاستخدام في الولايات المتحدة"
    />
  );
}
