import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "متى لا تنشئ LLC أمريكية — الحالات الخمس التي يكون فيها خطأ",
  description: "بدون عميل، جميع العملاء تونسيون، الرغبة في التهرب من IRPP، نشاط high-risk لـ Stripe، أو جمع تمويل VC خلال 18 شهراً — السيناريوهات الخمس التي تكون فيها LLC الأمريكية خطأ.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/quand-ne-pas-former-llc-us" },
};

export default function ArQuandNePasPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/quand-ne-pas-former-llc-us"
      frTitleAr="متى لا تنشئ LLC أمريكية"
    />
  );
}
