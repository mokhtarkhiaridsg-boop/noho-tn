import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Atlas مقابل NOHO — الإجراء التقني خطوة بخطوة (يوم 0 إلى 60)",
  description: "بعد الاختيار الاستراتيجي، إليك بالضبط ما تنقر عليه وتوقعه وتنتظره في كل خطوة. 8 خطوات Atlas، 10 خطوات NOHO، الجداول الزمنية والتدفق النقدي السنة الأولى.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/stripe-atlas-vs-noho-procedure-technique" },
};

export default function ArAtlasNohoProcPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/stripe-atlas-vs-noho-procedure-technique"
      frTitleAr="Stripe Atlas مقابل NOHO — الإجراء التقني"
    />
  );
}
