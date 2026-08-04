import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "LinkedIn Ads + Outbound — إعداد اكتساب B2B عبر LLC US للمؤسس التونسي",
  description: "LinkedIn يرفض حساب الأعمال بدون EIN US. LLC US يفتح LinkedIn Business Manager + Sales Navigator + Ads. هيكل حملات 3 funnels + Outbound playbook 4-step. مزيج paid+outbound = 1-5 عملاء/شهر.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/linkedin-ads-outbound-b2b-llc-us-tunisien" },
};

export default function ArLinkedinB2bPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/linkedin-ads-outbound-b2b-llc-us-tunisien"
      frTitleAr="LinkedIn Ads + Outbound B2B عبر LLC US"
    />
  );
}
