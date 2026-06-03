import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Shopify Payments غير متاح في تونس — طريق LLC US الذي يفتح الباب (حسابات 50 ألف USD/سنة)",
  description: "Shopify Payments مغلق لعنوان عمل في تونس. الطريق 1 PayPal/Payoneer/Stripe = 4-8% مفقودة في الرسوم+FX. الطريق 2 LLC US مع Shopify Payments الأصلي = 2.9% وفر 1 500-3 700 USD على 50K USD/سنة.",
  alternates: { canonical: "https://noho.tn/ar/blog/shopify-payments-tunisie-vs-llc-us-route" },
};

export default function ArShopifyPaymentsPage() {
  return (
    <ArabicStub
      frHref="/blog/shopify-payments-tunisie-vs-llc-us-route"
      frTitleAr="Shopify Payments تونس مقابل LLC US"
    />
  );
}
