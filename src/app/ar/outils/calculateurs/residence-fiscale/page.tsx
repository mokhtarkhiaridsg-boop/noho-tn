import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "حاسبة الإقامة الضريبية تونس / فرنسا / الولايات المتحدة",
  description: "اختبار الإقامة الضريبية بين تونس (183 يوماً / مركز المصالح)، فرنسا (CGI 4 B)، الولايات المتحدة (Substantial Presence Test).",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/calculateurs/residence-fiscale" },
};

export default function ArResidencePage() {
  return <ArabicStub frHref="/fr/outils/calculateurs/residence-fiscale" frTitleAr="حاسبة الإقامة الضريبية" />;
}
