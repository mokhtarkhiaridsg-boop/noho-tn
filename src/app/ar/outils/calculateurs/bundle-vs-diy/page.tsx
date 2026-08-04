import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Solution Business NOHO مقابل DIY — حاسبة التوفير",
  description: "كم تربح (أو تخسر) عندما تنشئ شركتك LLC الأمريكية بنفسك مقابل Solution Business بـ 4000 دينار. الحساب الإجمالي + تكلفة الوقت.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/calculateurs/bundle-vs-diy" },
};

export default function ArBundleVsDiyPage() {
  return <ArabicStub frHref="/fr/outils/calculateurs/bundle-vs-diy" frTitleAr="Solution Business مقابل DIY" />;
}
