import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Form 1099-K — حد 600 USD/سنة 2026، الامتثال للمؤسس التونسي LLC US",
  description: "التاريخ 2008-2026: 20 000 USD → 5 000 → 2 500 → 600 USD/سنة. الإصدار Stripe + PayPal + Square + Amazon + Etsy + eBay (Zelle استثناء). Backup withholding 24% إذا انتهت صلاحية W-8BEN.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/1099-k-thresholds-2026-evolution-tunisien" },
};

export default function Ar1099KPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/1099-k-thresholds-2026-evolution-tunisien"
      frTitleAr="Form 1099-K — حد 600 USD/سنة 2026"
    />
  );
}
