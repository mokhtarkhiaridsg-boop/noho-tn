import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "إعلان IDE للبنك المركزي التونسي — متى يجب تسجيل LLC الأمريكية في تونس",
  description: "أي مشاركة لمقيم تونسي في كيان أجنبي هي تقنياً IDE يجب الإعلان عنه. الممارسة 2026: SMLLC برأس مال رمزي غير منفذ، رأس مال > 10K دولار موصى به عبر مكتب شريك.",
  alternates: { canonical: "https://noho.tn/ar/blog/bct-ide-declaration-llc-us-tunisie" },
};

export default function ArBctIdePage() {
  return (
    <ArabicStub
      frHref="/blog/bct-ide-declaration-llc-us-tunisie"
      frTitleAr="إعلان IDE للبنك المركزي التونسي"
    />
  );
}
