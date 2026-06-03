import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "غرامة Form 5472",
  alternates: { canonical: "https://noho.tn/ar/conformite/form-5472-penalite" },
  robots: { index: false, follow: true },
};

export default function ArForm5472Page() {
  return <ArabicStub frHref="/conformite/form-5472-penalite" frTitleAr="غرامة Form 5472" />;
}
