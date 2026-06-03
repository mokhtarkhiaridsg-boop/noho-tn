import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "المدونة",
  alternates: { canonical: "https://noho.tn/ar/blog" },
  robots: { index: false, follow: true },
};

export default function ArBlogPage() {
  return <ArabicStub frHref="/blog" frTitleAr="المدونة" />;
}
