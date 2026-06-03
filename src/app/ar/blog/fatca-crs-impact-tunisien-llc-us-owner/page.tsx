import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "FATCA + CRS — ما يراه BCT و IRS و DGI على LLC US الخاص بك (مقيم تونسي 2026)",
  description: "FATCA تونس منذ 2018 — لست US person لذا غير مباشر. CRS تونس منذ 2018 — حساباتك في EU/UK/المغرب/الإمارات تُبلَّغ إلى DGI سنوياً. الولايات المتحدة ليست موقعة على CRS لذا Mercury غير مُبلَّغ.",
  alternates: { canonical: "https://noho.tn/ar/blog/fatca-crs-impact-tunisien-llc-us-owner" },
};

export default function ArFatcaCrsPage() {
  return (
    <ArabicStub
      frHref="/blog/fatca-crs-impact-tunisien-llc-us-owner"
      frTitleAr="FATCA + CRS — التأثير على LLC US للمقيم التونسي"
    />
  );
}
