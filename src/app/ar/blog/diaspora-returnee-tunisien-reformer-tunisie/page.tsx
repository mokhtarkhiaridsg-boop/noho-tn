import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "العائد من المهجر — الانتقال من الولايات المتحدة إلى تونس بدون فخ ضريبي",
  description: "عشت 5-15 سنة في الولايات المتحدة، تعود نهائياً. كيف تدير وضعك السكني، شركتك LLC الأمريكية، حساباتك البنكية الأمريكية، تحويل أصولك، وفخ التوقيت بين الإقامة الأمريكية والتونسية.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/diaspora-returnee-tunisien-reformer-tunisie" },
};

export default function ArDiasporaReturneePage() {
  return (
    <ArabicStub
      frHref="/fr/blog/diaspora-returnee-tunisien-reformer-tunisie"
      frTitleAr="العائد من المهجر — الانتقال إلى تونس"
    />
  );
}
