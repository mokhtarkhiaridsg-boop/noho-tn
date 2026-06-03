import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "التوصيل في الولايات المتحدة",
  alternates: { canonical: "https://noho.tn/ar/delivery" },
  robots: { index: false, follow: true },
};

export default function ArDeliveryPage() {
  return <ArabicStub frHref="/delivery" frTitleAr="التوصيل" />;
}
