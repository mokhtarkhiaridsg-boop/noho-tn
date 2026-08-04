import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Blog",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog" title="Blog" />;
}
