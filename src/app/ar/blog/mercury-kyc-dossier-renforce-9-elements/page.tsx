import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury KYC — 9 عناصر الملف المعزز (deep-dive 2026)",
  description: "السبب الأول لرفض Mercury ليس البلد، بل عدم تطابق الوثائق. 9 عناصر يجب توافقها قبل التقديم، بالإضافة إلى عنصر إضافي لا يستطيع المنافسون تزويره.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/mercury-kyc-dossier-renforce-9-elements" },
};

export default function ArMercuryKycPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/mercury-kyc-dossier-renforce-9-elements"
      frTitleAr="Mercury KYC — 9 عناصر الملف المعزز"
    />
  );
}
