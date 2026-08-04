import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "W-8BEN مقابل W-9 — أي نموذج يوقعه المؤسس التونسي",
  description: "إذا لم تكن US person، W-9 = اقتطاع 30٪ + احتمال تدقيق. القاعدة الصارمة: W-8BEN للـ SMLLC، W-8BEN-E للـ multi-member، W-8ECI إذا ECI.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/w8ben-vs-w9-non-us-person" },
};

export default function ArW8benPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/w8ben-vs-w9-non-us-person"
      frTitleAr="W-8BEN مقابل W-9 للمؤسس التونسي"
    />
  );
}
