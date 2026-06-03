import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "المعاهدة الضريبية تونس-الولايات المتحدة 1985 — ما تفعل وما لا تفعل",
  description: "المادة 7 (أرباح الأعمال) تلغي الضريبة الفيدرالية الأمريكية، المادة 10 تقلل الاقتطاع على الأرباح. لكن IRPP التونسي يبقى مستحقاً.",
  alternates: { canonical: "https://noho.tn/ar/blog/traite-fiscal-tunisie-usa-1985" },
};

export default function ArTraiteUsTnPage() {
  return (
    <ArabicStub
      frHref="/blog/traite-fiscal-tunisie-usa-1985"
      frTitleAr="المعاهدة الضريبية تونس-الولايات المتحدة 1985"
    />
  );
}
