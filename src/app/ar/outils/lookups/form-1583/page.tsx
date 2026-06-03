import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البحث في Form 1583 USPS — التحقق وإجراءات التوثيق",
  description: "Form 1583 = إذن USPS الذي يسمح لـ NOHO باستلام بريدك. موثق شخصياً (التوقيع الإلكتروني غير مقبول).",
  alternates: { canonical: "https://noho.tn/ar/outils/lookups/form-1583" },
};

export default function ArForm1583Page() {
  return <ArabicStub frHref="/outils/lookups/form-1583" frTitleAr="Form 1583 USPS — التحقق والتوثيق" />;
}
