import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury مقابل Relay مقابل Brex مقابل Wise — مقارن البنوك الأمريكية",
  description: "أفضل بنك أمريكي لشركة LLC مملوكة من تونسي. معدلات القبول الحقيقية، الرسوم، الإيجابيات والسلبيات.",
  alternates: { canonical: "https://noho.tn/ar/outils/comparateurs/banques-us" },
};

export default function ArBanquesUsPage() {
  return <ArabicStub frHref="/outils/comparateurs/banques-us" frTitleAr="مقارن البنوك الأمريكية" />;
}
