import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البحث عن رمز HTS الجمركي تونس → الولايات المتحدة",
  description: "كيف تجد رمز HTS لتصدير منتجك التونسي إلى الولايات المتحدة. USITC search والتصنيف.",
  alternates: { canonical: "https://noho.tn/ar/outils/lookups/hts-code" },
};

export default function ArHtsPage() {
  return <ArabicStub frHref="/outils/lookups/hts-code" frTitleAr="رمز HTS الجمركي تونس → الولايات المتحدة" />;
}
