import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "حل التقديم للوظائف",
  alternates: { canonical: "https://noho.tn/ar/agent/jobs" },
  robots: { index: false, follow: true },
};

export default function ArAgentJobsPage() {
  return <ArabicStub frHref="/agent/jobs" frTitleAr="حل التقديم للوظائف" />;
}
