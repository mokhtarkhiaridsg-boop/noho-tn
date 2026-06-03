import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "حل التجارة الإلكترونية",
  alternates: { canonical: "https://noho.tn/ar/agent/ecom" },
  robots: { index: false, follow: true },
};

export default function ArAgentEcomPage() {
  return <ArabicStub frHref="/agent/ecom" frTitleAr="حل التجارة الإلكترونية" />;
}
