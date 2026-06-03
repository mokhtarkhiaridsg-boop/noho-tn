import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe مرفوض في تونس — كيف تتجاوز ذلك بشركة LLC أمريكية",
  description: "Stripe لا يعمل في تونس. شركة LLC أمريكية منظمة جيداً تفتح لك الوصول — لكن ليس بأي طريقة.",
  alternates: { canonical: "https://noho.tn/ar/blog/stripe-tunisie-refuse-contourner-llc-us" },
};

export default function ArStripePage() {
  return (
    <ArabicStub
      frHref="/blog/stripe-tunisie-refuse-contourner-llc-us"
      frTitleAr="Stripe مرفوض في تونس — الحل بـ LLC أمريكية"
    />
  );
}
