import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "المدونة",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog" },
  robots: { index: false, follow: true },
};

export default function ArBlogPage() {
  return <ArabicStub frHref="/fr/blog" frTitleAr="المدونة" />;
}
