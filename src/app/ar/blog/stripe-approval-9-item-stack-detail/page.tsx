import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "كيف يقبل Stripe شركة LLC تونسية — قائمة 9 عناصر",
  description: "سيناريو القبول النظيف في 24-72 ساعة مقابل سيناريو المراجعة اليدوية. العناصر التسعة التي تمر التحقق التلقائي، وما الذي يطلق مراجعة يدوية.",
  alternates: { canonical: "https://noho.tn/ar/blog/stripe-approval-9-item-stack-detail" },
};

export default function ArStripeApprovalPage() {
  return (
    <ArabicStub
      frHref="/blog/stripe-approval-9-item-stack-detail"
      frTitleAr="كيف يقبل Stripe شركة LLC تونسية"
    />
  );
}
