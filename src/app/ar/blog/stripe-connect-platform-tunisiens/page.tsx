import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Connect platform للتونسيين — هل يمكنك أن تصبح منصة من تونس؟",
  description: "Stripe Connect يسمح بتنسيق المدفوعات بين البائعين والمشترين وأخذ عمولة. متطلبات LLC أمريكية + Mercury + Stripe قياسي مقبول. التعقيدات الضريبية marketplace facilitator + 1099-K.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/stripe-connect-platform-tunisiens" },
};

export default function ArStripeConnectPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/stripe-connect-platform-tunisiens"
      frTitleAr="Stripe Connect platform للتونسيين"
    />
  );
}
