import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "قوالب — Operating Agreement, W-8BEN, Form 1583 وأكثر",
  description: "قوالب مجانية لشركتك LLC الأمريكية: Operating Agreement وايومنغ، W-8BEN ممتلئ مسبقاً، Form 1583 ممتلئ مسبقاً، عقود فريلانس أمريكية.",
  alternates: { canonical: "https://noho.tn/ar/outils/templates" },
};

export default function ArTemplatesPage() {
  return <ArabicStub frHref="/outils/templates" frTitleAr="قوالب قانونية وضريبية" />;
}
