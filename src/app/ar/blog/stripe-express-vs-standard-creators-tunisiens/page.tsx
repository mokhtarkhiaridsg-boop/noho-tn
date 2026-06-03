import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Express مقابل Stripe standard للمبدعين التونسيين (Patreon، Substack، Teachable)",
  description: "Stripe Express (المنصة هي merchant of record) مقابل Stripe standard (LLC الخاصة بك هي MoR). نموذجان قانونيان وضريبيان متعاكسان. متى يكون كل منهما الإجابة الصحيحة، فخ خصم 24٪/30٪ بدون tax form، والانتقال.",
  alternates: { canonical: "https://noho.tn/ar/blog/stripe-express-vs-standard-creators-tunisiens" },
};

export default function ArStripeExpressVsStandardPage() {
  return (
    <ArabicStub
      frHref="/blog/stripe-express-vs-standard-creators-tunisiens"
      frTitleAr="Stripe Express مقابل Stripe standard للمبدعين"
    />
  );
}
