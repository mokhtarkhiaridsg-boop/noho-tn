import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الوكيل — وكيلك الأمريكي من تونس",
  alternates: { canonical: "https://noho.tn/ar/agent" },
  robots: { index: false, follow: true },
};

export default function ArAgentPage() {
  return <ArabicStub frHref="/agent" frTitleAr="الوكيل" />;
}
