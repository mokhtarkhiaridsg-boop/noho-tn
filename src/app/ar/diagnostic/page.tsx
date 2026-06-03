import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "التشخيص — ٥ أسئلة",
  alternates: { canonical: "https://noho.tn/ar/diagnostic" },
  robots: { index: false, follow: true },
};

export default function ArDiagnosticPage() {
  return <ArabicStub frHref="/diagnostic" frTitleAr="تشخيص ٥ أسئلة" />;
}
