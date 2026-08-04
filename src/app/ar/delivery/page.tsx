import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "التوصيل في الولايات المتحدة",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/delivery" },
  robots: { index: false, follow: true },
};

export default function ArDeliveryPage() {
  return <ArabicStub frHref="/fr/delivery" frTitleAr="التوصيل" />;
}
