import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "بطاقة التعريف التونسية Mercury KYC — أي وثائق مقبولة ومرفوضة (مايو 2026)",
  description: "Mercury يرفض CIN التونسية بمفردها — جواز سفر بيومتري مطلوب. الوثائق الكاملة + الوثائق غير المقبولة + 4 طرق احتياطية (Relay, Wise Business, Brex, Airwallex) + playbook استرداد 48 ساعة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/cin-tunisienne-mercury-kyc-documents-acceptes" },
};

export default function ArCinMercuryKycPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/cin-tunisienne-mercury-kyc-documents-acceptes"
      frTitleAr="CIN تونسية Mercury KYC — الوثائق المقبولة والمرفوضة"
    />
  );
}
