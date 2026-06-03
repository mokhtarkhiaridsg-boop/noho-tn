import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "NOHO + مكتب الخياري — التقسيم الصادق للعمل بين الولايات المتحدة وتونس",
  description: "ما هي العلاقة بالضبط بين NOHO (لوس أنجلوس، كاليفورنيا) ومكتب الخياري (تونس)؟ التقسيم الملموس على ملف Solution Business، ما لا تفعله NOHO (وتحيلك إلى الخياري)، ما لا يفعله الخياري (ويحيلك إلى NOHO)، التسعير المنفصل.",
  alternates: { canonical: "https://noho.tn/ar/blog/noho-cabinet-khiari-integration-honnete" },
};

export default function ArNohoKhiariPage() {
  return (
    <ArabicStub
      frHref="/blog/noho-cabinet-khiari-integration-honnete"
      frTitleAr="NOHO + مكتب الخياري — التقسيم الصادق"
    />
  );
}
