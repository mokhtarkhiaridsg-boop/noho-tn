import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "ITIN W-7 مقابل CAA — اختيار طريقة التقديم من تونس",
  description: "طريقتان للحصول على ITIN من تونس: إرسال جواز السفر الأصلي عبر DHL (مجاني + 8-12 أسبوع بدون جواز) أو وكيل قبول معتمد (100-200 دولار لكن تحتفظ بجوازك). طريقة 3 الهجينة إذا سافرت إلى الولايات المتحدة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/itin-w7-vs-caa-fondateur-tunisien" },
};

export default function ArItinW7CaaPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/itin-w7-vs-caa-fondateur-tunisien"
      frTitleAr="ITIN W-7 مقابل CAA"
    />
  );
}
