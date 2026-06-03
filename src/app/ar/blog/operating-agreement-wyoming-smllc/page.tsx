import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "اتفاقية التشغيل Wyoming SMLLC — الأقسام الـ 12 الإلزامية للمؤسس التونسي",
  description: "وايومنغ لا تتطلب اتفاقية التشغيل عند التقديم الأولي، لكن Mercury وStripe والـ IRS يطلبونها. الأقسام الـ 12 الإلزامية مكيفة لمؤسس تونسي.",
  alternates: { canonical: "https://noho.tn/ar/blog/operating-agreement-wyoming-smllc" },
};

export default function ArOaWyomingPage() {
  return (
    <ArabicStub
      frHref="/blog/operating-agreement-wyoming-smllc"
      frTitleAr="اتفاقية التشغيل Wyoming SMLLC"
    />
  );
}
