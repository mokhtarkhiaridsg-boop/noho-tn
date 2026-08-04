import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Atlas $500 + 50 ألف رصيد مقابل NOHO 4 000 د.ت — الحسابات النقدية الصادقة للسنة الأولى",
  description: "تسويق Atlas يبرز «50 000 USD من رصيد الشركاء». التحليل الحقيقي: 1 500-5 000 USD قابلة للاستهلاك في السنة الأولى، وليس 50K. مقارنة التدفق النقدي للسنة الأولى والثانية لمؤسس تونسي. Atlas مقابل NOHO.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/stripe-atlas-cash-math-year-1-honnete-vs-noho" },
};

export default function ArStripeAtlasCashMathPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/stripe-atlas-cash-math-year-1-honnete-vs-noho"
      frTitleAr="Stripe Atlas مقابل NOHO — الحسابات النقدية"
    />
  );
}
