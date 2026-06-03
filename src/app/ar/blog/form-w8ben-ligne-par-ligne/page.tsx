import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Form W-8BEN سطراً بسطر — كيف تملأه بشكل مثالي لـ Stripe و Mercury و AdSense",
  description: "8 أسطر ذات صلة في W-8BEN. السطر 1 الاسم، السطر 3 العنوان السكني التونسي (وليس LLC US)، السطر 5 ITIN اختياري، السطر 6 FTIN التونسي، السطر 10 مادة معاهدة تونس-الولايات المتحدة.",
  alternates: { canonical: "https://noho.tn/ar/blog/form-w8ben-ligne-par-ligne" },
};

export default function ArW8BenLignePage() {
  return (
    <ArabicStub
      frHref="/blog/form-w8ben-ligne-par-ligne"
      frTitleAr="Form W-8BEN سطراً بسطر"
    />
  );
}
