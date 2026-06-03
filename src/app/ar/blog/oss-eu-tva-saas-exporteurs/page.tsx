import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "OSS EU TVA لمصدري SaaS — متى التسجيل",
  description: "بعد 10 000 يورو/سنة من المبيعات B2C الرقمية للعملاء الأوروبيين، يجب التسجيل في One Stop Shop وفوترة TVA بلداً بلداً. البديل MoR (Paddle / Lemon Squeezy).",
  alternates: { canonical: "https://noho.tn/ar/blog/oss-eu-tva-saas-exporteurs" },
};

export default function ArOssEuPage() {
  return (
    <ArabicStub
      frHref="/blog/oss-eu-tva-saas-exporteurs"
      frTitleAr="OSS EU TVA لمصدري SaaS"
    />
  );
}
