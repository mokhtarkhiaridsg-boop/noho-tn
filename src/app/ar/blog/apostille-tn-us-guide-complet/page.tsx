import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Apostille تونسية للاستخدام في الولايات المتحدة — الدليل الشامل (منذ 2018)",
  description: "تونس موقعة على اتفاقية لاهاي منذ 2018 — انتهى التصديق القنصلي. الإجراء الدقيق: وزارة الخارجية، 2-7 أيام، حوالي 20 ديناراً.",
  alternates: { canonical: "https://noho.tn/ar/blog/apostille-tn-us-guide-complet" },
};

export default function ArApostillePage() {
  return (
    <ArabicStub
      frHref="/blog/apostille-tn-us-guide-complet"
      frTitleAr="Apostille تونسية للاستخدام في الولايات المتحدة"
    />
  );
}
