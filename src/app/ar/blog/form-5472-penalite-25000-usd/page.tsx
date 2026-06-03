import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Form 5472 — عقوبة 25 000 دولار التي تنتظر شركتك المنسية",
  description: "كل شركة LLC أمريكية مملوكة لشخص غير أمريكي يجب أن تقدّم Form 5472 + 1120 سنوياً — حتى بدون دخل. عقوبة 25 000 دولار، ثم 25 000 لكل 30 يوماً بعد الإخطار، بلا سقف.",
  alternates: { canonical: "https://noho.tn/ar/blog/form-5472-penalite-25000-usd" },
};

export default function ArForm5472BlogPage() {
  return (
    <ArabicStub
      frHref="/blog/form-5472-penalite-25000-usd"
      frTitleAr="Form 5472 وعقوبة 25 000 دولار"
    />
  );
}
