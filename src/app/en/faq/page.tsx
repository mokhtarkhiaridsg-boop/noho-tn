import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "FAQ",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/faq",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/faq" title="FAQ" />;
}
