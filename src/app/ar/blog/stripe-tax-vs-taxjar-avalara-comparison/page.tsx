import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Tax مقابل TaxJar مقابل Avalara — أي أداة لامتثال ضريبة المبيعات لـ LLC US تونسي",
  description: "Stripe Tax 0.5% معاملة (مدمج، لا filing) مقابل TaxJar 19-99 USD/شهر + AutoFile (أتمتة كاملة) مقابل Avalara 500-5K USD/شهر (enterprise). 3 سيناريوهات مقارنة 100K/500K/5M USD/سنة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/stripe-tax-vs-taxjar-avalara-comparison" },
};

export default function ArStripeTaxComparisonPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/stripe-tax-vs-taxjar-avalara-comparison"
      frTitleAr="Stripe Tax مقابل TaxJar مقابل Avalara"
    />
  );
}
