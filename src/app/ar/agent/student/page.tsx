import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "حل الطلاب التونسيين",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/agent/student" },
  robots: { index: false, follow: true },
};

export default function ArAgentStudentPage() {
  return <ArabicStub frHref="/fr/agent/student" frTitleAr="حل الطلاب" />;
}
