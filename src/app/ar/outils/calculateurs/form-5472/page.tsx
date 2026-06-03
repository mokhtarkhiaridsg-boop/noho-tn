import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "حاسبة عقوبة Form 5472 — NOHO",
  description: "احسب التعرض الفعلي لعقوبة 25 000 دولار من IRS إذا نسيت تقديم Form 5472 لشركتك الأمريكية.",
  alternates: { canonical: "https://noho.tn/ar/outils/calculateurs/form-5472" },
};

export default function ArForm5472Page() {
  return <ArabicStub frHref="/outils/calculateurs/form-5472" frTitleAr="حاسبة عقوبة Form 5472" />;
}
