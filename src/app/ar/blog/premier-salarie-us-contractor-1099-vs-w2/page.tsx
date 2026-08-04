import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "أول موظف أمريكي — 1099-NEC مقابل W-2 مقابل corp-to-corp لـ LLC التونسية",
  description: "ثلاث أشكال قانونية لتوظيف أول عامل أمريكي: مقاول 1099 (بسيط، خطر تصنيف IRS)، موظف W-2 (~15-30٪ فوق الإجمالي في النفقات)، corp-to-corp (LLC-لـ-LLC هجين). متى تستخدم كلاً منها.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/premier-salarie-us-contractor-1099-vs-w2" },
};

export default function Ar1099VsW2Page() {
  return (
    <ArabicStub
      frHref="/fr/blog/premier-salarie-us-contractor-1099-vs-w2"
      frTitleAr="أول موظف أمريكي — 1099 مقابل W-2 مقابل corp-to-corp"
    />
  );
}
