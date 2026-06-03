import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Amazon Seller Central US من تونس — إجراء KYC الكامل + 6 فخاخ (J+0 إلى J+90)",
  description: "أمازون يقبل البائعين الدوليين لكن ملف KYC هو الأكثر صرامة بين marketplaces. LLC US، EIN، Mercury، W-8BEN (وليس W-8BEN-E)، مقابلة الضرائب، التحقق من الهوية Onfido/Persona. 6 فخاخ كلاسيكية + الجدول الزمني J+0 إلى J+90.",
  alternates: { canonical: "https://noho.tn/ar/blog/amazon-seller-central-setup-tn-dossier" },
};

export default function ArAmazonSellerCentralPage() {
  return (
    <ArabicStub
      frHref="/blog/amazon-seller-central-setup-tn-dossier"
      frTitleAr="Amazon Seller Central US من تونس"
    />
  );
}
