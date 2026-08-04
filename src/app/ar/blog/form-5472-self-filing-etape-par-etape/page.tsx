import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "تقديم Form 5472 بنفسك — خطوة بخطوة لشركة LLC تونسية بدون CPA",
  description: "إذا لم تبرر إيراداتك 250-500 دولار سنوياً لمحاسب، إليك كيفية تقديم Form 5472 + 1120 pro-forma بنفسك. ماذا تملأ، أين تقدم، المواعيد النهائية، والأخطاء الـ 5 التي يجب تجنبها.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/form-5472-self-filing-etape-par-etape" },
};

export default function ArForm5472SelfPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/form-5472-self-filing-etape-par-etape"
      frTitleAr="تقديم Form 5472 بنفسك — خطوة بخطوة"
    />
  );
}
