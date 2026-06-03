import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Paddle مقابل Lemon Squeezy مقابل Stripe direct — حسابات MoR مقابل ضرائب المبيعات لـ SaaS تونسي",
  description: "Paddle و Lemon Squeezy هم Merchant of Record — يجمعون TVA/ضريبة المبيعات نيابة عنك مقابل 5% + 50¢ مقابل Stripe 2.9% + 30¢ + 1 200-3 000 USD/سنة في الامتثال. نقطة التعادل ~71 ألف USD/سنة.",
  alternates: { canonical: "https://noho.tn/ar/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens" },
};

export default function ArPaddleLemonSqueezyPage() {
  return (
    <ArabicStub
      frHref="/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens"
      frTitleAr="Paddle مقابل Lemon Squeezy مقابل Stripe"
    />
  );
}
