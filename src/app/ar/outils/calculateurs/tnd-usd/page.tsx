import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "محول الدينار التونسي إلى الدولار — NOHO",
  description: "محول DT ↔ USD لتقدير التحويلات الحقيقية (Wise, Mercury, BIAT, Payoneer).",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/calculateurs/tnd-usd" },
};

export default function ArTndUsdPage() {
  return <ArabicStub frHref="/fr/outils/calculateurs/tnd-usd" frTitleAr="محوّل DT ↔ USD" />;
}
