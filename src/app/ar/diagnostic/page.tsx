import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "التشخيص — ٥ أسئلة",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/diagnostic" },
  robots: { index: false, follow: true },
};

export default function ArDiagnosticPage() {
  return <ArabicStub frHref="/fr/diagnostic" frTitleAr="تشخيص ٥ أسئلة" />;
}
