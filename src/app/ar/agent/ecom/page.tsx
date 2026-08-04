import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "حل التجارة الإلكترونية",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/agent/ecom" },
  robots: { index: false, follow: true },
};

export default function ArAgentEcomPage() {
  return <ArabicStub frHref="/fr/agent/ecom" frTitleAr="حل التجارة الإلكترونية" />;
}
