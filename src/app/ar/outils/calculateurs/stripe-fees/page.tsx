import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "حاسبة رسوم Stripe مقابل Paddle مقابل Lemon Squeezy",
  description: "احسب ما تبقى لك فعلياً بعد رسوم كل معالج. Stripe هو الأرخص في الرسوم، لكن Paddle و LS يتولان TVA EU + ضريبة المبيعات الأمريكية.",
  alternates: { canonical: "https://noho.tn/ar/outils/calculateurs/stripe-fees" },
};

export default function ArStripeFeesPage() {
  return <ArabicStub frHref="/outils/calculateurs/stripe-fees" frTitleAr="حاسبة رسوم Stripe مقابل Paddle" />;
}
