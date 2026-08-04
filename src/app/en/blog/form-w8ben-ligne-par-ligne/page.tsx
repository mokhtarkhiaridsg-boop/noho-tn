import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Form W-8BEN line by line",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/form-w8ben-ligne-par-ligne",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/form-w8ben-ligne-par-ligne" title="Form W-8BEN line by line" />;
}
