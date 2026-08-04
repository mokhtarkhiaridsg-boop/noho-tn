import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "W-8BEN vs W-9 no US Person",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/w8ben-vs-w9-non-us-person",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/w8ben-vs-w9-non-us-person" title="W-8BEN vs W-9 no US Person" />;
}
