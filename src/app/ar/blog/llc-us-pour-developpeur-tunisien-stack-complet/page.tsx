import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "LLC US للمطور التونسي — المكدس التشغيلي الكامل 2026",
  description: "مكدس 7 مستويات للمطور التونسي: الكيان (LLC WY + EIN)، البنوك (Mercury+Wise+الخطة البديلة)، المدفوعات (Stripe + W-8BEN)، السحاب (AWS+Vercel+Cloudflare)، العلامة التجارية (Workspace+USPTO)، الامتثال (5472+1120+WY)، الأمن السيبراني.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/llc-us-pour-developpeur-tunisien-stack-complet" },
};

export default function ArLlcDevTunisienPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/llc-us-pour-developpeur-tunisien-stack-complet"
      frTitleAr="LLC US للمطور التونسي — المكدس الكامل"
    />
  );
}
